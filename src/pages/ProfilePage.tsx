import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useSession } from '@/context/SessionContext';

const ProfilePage: React.FC = () => {
  const { user } = useSession();

  if (!user) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No has iniciado sesión</h1>
        <Button asChild>
          <Link to="/login">Ir a Iniciar Sesión</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Planificador
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Perfil de Usuario</CardTitle>
          <CardDescription>Aquí puedes ver tu información de perfil.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Correo Electrónico:</h2>
            <p className="text-lg">{user.email}</p>
          </div>
          {user.user_metadata?.first_name && (
            <div>
              <h2 className="text-xl font-semibold">Nombre:</h2>
              <p className="text-lg">{user.user_metadata.first_name}</p>
            </div>
          )}
          {user.user_metadata?.last_name && (
            <div>
              <h2 className="text-xl font-semibold">Apellido:</h2>
              <p className="text-lg">{user.user_metadata.last_name}</p>
            </div>
          )}
          {/* Puedes añadir más campos de perfil aquí si los tienes en tu tabla de perfiles */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;