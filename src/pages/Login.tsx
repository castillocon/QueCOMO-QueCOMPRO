import React, { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner'; // Importar toast

const Login: React.FC = () => {
  const [demoEmail, setDemoEmail] = useState<string>('');
  const [demoPassword, setDemoPassword] = useState<string>('');
  const [authKey, setAuthKey] = useState<number>(0); // Key para forzar el re-montaje del componente Auth

  const handleFillDemo = () => {
    setDemoEmail('demo@quecomoquecompro.com');
    setDemoPassword('demo');
    setAuthKey(Date.now()); // Cambia la key para forzar el re-montaje
    toast.info('Rellenando campos con credenciales de demostración...');
  };

  useEffect(() => {
    if (demoEmail && demoPassword) {
      // Añadir un pequeño retraso para asegurar que el componente Auth se haya re-renderizado
      const timer = setTimeout(() => {
        const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
        const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;

        if (emailInput) {
          emailInput.value = demoEmail;
          // Disparar eventos para simular la entrada del usuario y activar el manejo interno de cambios de React
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
          emailInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (passwordInput) {
          passwordInput.value = demoPassword;
          passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
          passwordInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        toast.success('Campos rellenados. ¡Ahora puedes iniciar sesión!');
      }, 100); // Pequeño retraso de 100ms

      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [authKey, demoEmail, demoPassword]); // Depende de authKey para ejecutarse después del re-montaje

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background">
      <Card className="w-full max-w-md mx-auto p-6 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary mb-2">🛒🍲 QueComo@QueCompro</CardTitle>
          <p className="text-muted-foreground text-lg">
            ¡Bienvenido a tu asistente personal de comida y compras!
            Iniciá sesión para descubrir qué comer esta semana y qué comprar sin perder tiempo.
            <br />
            <span className="font-semibold text-foreground">Planificá. Comprá. Comé mejor.</span>
          </p>
        </CardHeader>
        <CardContent>
          <Auth
            key={authKey}
            supabaseClient={supabase}
            providers={[]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(var(--primary))',
                    brandAccent: 'hsl(var(--primary-foreground))',
                  },
                },
              },
            }}
            theme="light"
            redirectTo={window.location.origin}
            // Las propiedades defaultEmail y defaultPassword se han eliminado aquí
            // ya que la manipulación directa del DOM es más fiable para este caso.
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center mt-6 pt-4 border-t border-border dark:border-border">
          <Button onClick={handleFillDemo} className="w-full mb-4">
            Rellenar con Credenciales de Demostración
          </Button>
          <p className="text-sm text-muted-foreground mb-2">
            ¿Solo quieres probar? Usa estas credenciales de demostración:
          </p>
          <p className="text-base font-semibold text-foreground">
            Usuario: <span className="font-normal text-foreground">demo@quecomoquecompro.com</span>
          </p>
          <p className="text-base font-semibold text-foreground">
            Clave: <span className="font-normal text-foreground">demo</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;