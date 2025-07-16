import React from "react";
import Sidebar, { MobileSidebar } from "./Sidebar";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useSession } from "@/context/SessionContext";
import { useMealPlanning } from "@/context/MealPlanningContext"; // Importar useMealPlanning
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, profile } = useSession();
  const { resetUserData } = useMealPlanning(); // Obtener la función de reseteo

  const handleLogout = async () => {
    if (user?.email === "demo@quecomoquecompro.com") {
      toast.loading("Cerrando sesión del usuario demo y limpiando datos...");
      try {
        // Eliminar datos del usuario demo de las tablas
        await supabase.from('recipes').delete().eq('user_id', user.id);
        await supabase.from('meal_plan_entries').delete().eq('user_id', user.id);
        await supabase.from('suppliers').delete().eq('user_id', user.id);
        
        // Resetear el estado local en el contexto
        resetUserData();
        toast.success("Datos del usuario demo limpiados con éxito.");
      } catch (error: any) {
        toast.error("Error al limpiar datos del usuario demo: " + error.message);
      }
    }

    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error al cerrar sesión: " + error.message);
    } else {
      toast.success("Sesión cerrada con éxito.");
    }
  };

  // Usar el username del perfil, si no existe, usar first_name, si no, el email
  const displayName = profile?.username || profile?.first_name || user?.email || "Usuario";

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          {/* Título eliminado de aquí */}
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 flex items-center justify-center space-x-2 px-4">
                  <UserCircle className="h-5 w-5" />
                  <span className="hidden md:inline-block">{displayName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{displayName}</p>
                    {user?.email && (
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Layout;