import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MealPlannerPage from "./pages/MealPlannerPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RecipeFormPage from "./pages/RecipeFormPage"; // Import the new form page
import ShoppingListPage from "./pages/ShoppingListPage";
import NotFound from "./pages/NotFound";
import { RecipeProvider } from "./context/RecipeContext"; // Import RecipeProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RecipeProvider> {/* Wrap the Layout with RecipeProvider */}
          <Layout>
            <Routes>
              <Route path="/" element={<MealPlannerPage />} />
              <Route path="/recipes" element={<RecipeListPage />} />
              <Route path="/recipes/new" element={<RecipeFormPage />} /> {/* Route for new recipe */}
              <Route path="/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="/recipes/:id/edit" element={<RecipeFormPage />} /> {/* Route for editing recipe */}
              <Route path="/shopping-list" element={<ShoppingListPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </RecipeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;