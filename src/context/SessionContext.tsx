import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Profile } from '@/types'; // Importar la interfaz Profile
import { toast } from 'sonner';

interface SessionContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null; // Añadir el perfil al contexto
  isLoading: boolean;
  updateUserProfile: (updates: Partial<Profile>) => Promise<void>; // Función para actualizar el perfil
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null); // Estado para el perfil
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserProfile = async (userId: string) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found (new user)
      toast.error('Error al cargar el perfil: ' + error.message);
      setProfile(null);
    } else if (data) {
      setProfile(data as Profile);
    } else {
      setProfile(null); // No profile found, or new user
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user || null);

      if (currentSession?.user) {
        await fetchUserProfile(currentSession.user.id);
        if (window.location.pathname === '/login') {
          navigate('/');
        }
      } else {
        setProfile(null);
        setIsLoading(false);
        if (window.location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });

    // Obtener la sesión inicial al cargar la aplicación
    supabase.auth.getSession().then(async ({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setUser(initialSession?.user || null);
      if (initialSession?.user) {
        await fetchUserProfile(initialSession.user.id);
      } else {
        setIsLoading(false);
        if (window.location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const updateUserProfile = async (updates: Partial<Profile>) => {
    if (!user) {
      toast.error('Debes iniciar sesión para actualizar tu perfil.');
      return;
    }
    setIsLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (error) {
      toast.error('Error al actualizar el perfil: ' + error.message);
    } else {
      setProfile(prev => ({ ...prev, ...updates } as Profile));
      toast.success('Perfil actualizado con éxito.');
    }
    setIsLoading(false);
  };

  return (
    <SessionContext.Provider value={{ session, user, profile, isLoading, updateUserProfile }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};