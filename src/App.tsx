import { Toaster as Sonner } from "@/components/ui/sonner";
    import { TooltipProvider } from "@/components/ui/tooltip";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import React, { Suspense } from "react"; // Importar Suspense
    import { Routes, Route, Navigate } from "react-router-dom";
    import Layout from "./components/layout/Layout";
    import { useSession } from "./context/SessionContext";

    // Importaciones dinámicas para code splitting
    const MealPlannerPage = React.lazy(() => import("./pages/MealPlannerPage"));
    const RecipeListPage = React.lazy(() => import("./pages/RecipeListPage"));
    const RecipeDetailPage = React.lazy(() => import("./pages/RecipeDetailPage"));
    const RecipeFormPage = React.lazy(() => import("./pages/RecipeFormPage"));
    const ShoppingListPage = React.lazy(() => import("./pages/ShoppingListPage"));
    const NotFound = React.lazy(() => import("./pages/NotFound"));
    const Login = React.lazy(() => import("./pages/Login"));
    const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
    const PreloadedRecipeListPage = React.lazy(() => import("./pages/PreloadedRecipeListPage"));
    const PreloadedRecipeDetailPage = React.lazy(() => import("./pages/PreloadedRecipeDetailPage"));
    const SupplierListPage = React.lazy(() => import("./pages/SupplierListPage"));

    const queryClient = new QueryClient();

    // Componente para proteger rutas
    const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const { user, isLoading } = useSession();

      if (isLoading) {
        return (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-lg text-muted-foreground">Cargando...</p>
          </div>
        );
      }

      if (!user) {
        return <Navigate to="/login" replace />;
      }

      return <>{children}</>;
    };

    const App = () => (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Sonner />
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <p className="text-lg text-muted-foreground">Cargando contenido...</p>
            </div>
          }>
            {/* Envuelve las rutas en Suspense */}
            <MealPlanningProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
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
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Layout>
                        <ProfilePage />
                      </Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/preloaded-recipes"
                  element={
                    <ProtectedRoute>
                      <Layout>
                        <PreloadedRecipeListPage />
                      </Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/preloaded-recipes/:id"
                  element={
                    <ProtectedRoute>
                      <Layout>
                        <PreloadedRecipeDetailPage />
                      </Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/suppliers"
                  element={
                    <ProtectedRoute>
                      <Layout>
                        <SupplierListPage />
                      </Layout>
                    </ProtectedRoute>
                  }
                />
                {/* AÑADE TODAS LAS RUTAS PERSONALIZADAS POR ENCIMA DE LA RUTA CATCH-ALL "*" */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MealPlanningProvider>
          </Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    );

    export default App;