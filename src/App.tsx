import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MealPlannerPage from "./pages/MealPlannerPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RecipeFormPage from "./pages/RecipeFormPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import NotFound from "./pages/NotFound";
import { MealPlanningProvider } from "./context/MealPlanningContext"; // Import MealPlanningProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MealPlanningProvider> {/* Envuelve el Layout con MealPlanningProvider */}
          <Layout>
            <Routes>
              <Route path="/" element={<MealPlannerPage />} />
              <Route path="/recipes" element={<RecipeListPage />} />
              <Route path="/recipes/new" element={<RecipeFormPage />} />
              <Route path="/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="/recipes/:id/edit" element={<RecipeFormPage />} />
              <Route path="/shopping-list" element={<ShoppingListPage />} />
              {/* AÑADE TODAS LAS RUTAS PERSONALIZADAS POR ENCIMA DE LA RUTA CATCH-ALL "*" */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </MealPlanningProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;