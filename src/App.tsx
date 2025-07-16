import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Import the new Layout component
import MealPlannerPage from "./pages/MealPlannerPage"; // Renamed from Index
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* Wrap routes with Layout */}
          <Routes>
            <Route path="/" element={<MealPlannerPage />} />
            <Route path="/recipes" element={<RecipeListPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;