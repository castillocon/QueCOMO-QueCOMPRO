import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; // Importar CardFooter

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-auto p-6 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-color4 mb-2">🛒🍲 QueComo@QueCompro</CardTitle>
          <p className="text-color2 text-lg">
            ¡Bienvenido a tu asistente personal de comida y compras!
            Iniciá sesión para descubrir qué comer esta semana y qué comprar sin perder tiempo.
            <br />
            <span className="font-semibold text-color3">Planificá. Comprá. Comé mejor.</span>
          </p>
        </CardHeader>
        <CardContent>
          <Auth
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
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-color2 mb-2">
            ¿Solo quieres probar? Usa estas credenciales de demostración:
          </p>
          <p className="text-base font-semibold text-color3">
            Usuario: <span className="font-normal text-color1">demo@quecomoquecompro.com</span>
          </p>
          <p className="text-base font-semibold text-color3">
            Clave: <span className="font-normal text-color1">demo</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;