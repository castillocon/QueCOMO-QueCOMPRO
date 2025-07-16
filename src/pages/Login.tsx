import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import i18n from '@supabase/auth-ui-shared'; // Importar i18n como default export

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-auto p-6 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Bienvenido</CardTitle>
          <p className="text-muted-foreground">Inicia sesión para acceder a tu planificador de comidas.</p>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            providers={['google', 'microsoft']}
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
            localization={{
              variables: {
                ...i18n.es, // Usar la configuración de idioma español
                sign_in: {
                  email_label: 'Correo electrónico',
                  password_label: 'Contraseña',
                  email_input_placeholder: 'Tu correo electrónico',
                  password_input_placeholder: 'Tu contraseña',
                  button_label: 'Iniciar sesión',
                  social_auth_typography: 'O continuar con',
                  link_text: '¿Ya tienes una cuenta? Inicia sesión',
                },
                sign_up: {
                  email_label: 'Correo electrónico',
                  password_label: 'Crear contraseña',
                  email_input_placeholder: 'Tu correo electrónico',
                  password_input_placeholder: 'Tu contraseña',
                  button_label: 'Registrarse',
                  social_auth_typography: 'O registrarse con',
                  link_text: '¿No tienes una cuenta? Regístrate',
                },
                forgotten_password: {
                  link_text: '¿Olvidaste tu contraseña?',
                  email_label: 'Correo electrónico',
                  email_input_placeholder: 'Tu correo electrónico',
                  button_label: 'Enviar instrucciones de recuperación',
                },
                update_password: {
                  password_label: 'Nueva contraseña',
                  password_input_placeholder: 'Tu nueva contraseña',
                  button_label: 'Actualizar contraseña',
                },
                magic_link: {
                  email_input_placeholder: 'Tu correo electrónico',
                  button_label: 'Enviar enlace mágico',
                  link_text: '¿Ya tienes una cuenta? Inicia sesión',
                },
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;