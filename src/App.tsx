import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom"; // Eliminar BrowserRouter de aquí
import Layout from "./components/layout/Layout";
import MealPlannerPage from "./pages/MealPlannerPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RecipeFormPage from "./pages/RecipeFormPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login"; // Importar la página de Login
import { MealPlanningProvider } from "./context/MealPlanningContext";
import { useSession } from "./context/SessionContext"; // Importar useSession

const queryClient = new QueryClient();

// Componente para proteger rutas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useSession();

  if (isLoading) {
    return <div>Cargando...</div>; // O un spinner de carga
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* BrowserRouter se movió a main.tsx */}
      <MealPlanningProvider>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <MealPlannerPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipes"
            element={
              <ProtectedRoute>
                <Layout>
                  <RecipeListPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipes/new"
            element={
              <ProtectedRoute>
                <Layout>
                  <RecipeFormPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipes/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <RecipeDetailPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipes/:id/edit"
            element={
              <ProtectedRoute>
                <Layout>
                  <RecipeFormPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/shopping-list"
            element={
              <ProtectedRoute>
                <Layout>
                  <ShoppingListPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          {/* AÑADE TODAS LAS RUTAS PERSONALIZADAS POR ENCIMA DE LA RUTA CATCH-ALL "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MealPlanningProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;