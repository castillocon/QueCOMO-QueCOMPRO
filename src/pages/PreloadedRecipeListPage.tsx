import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { preloadedRecipes } from "@/data/preloadedRecipes";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PreloadedRecipeListPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Planificador
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-6 text-primary">Recetas Pre-cargadas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {preloadedRecipes.length > 0 ? (
          preloadedRecipes.map(recipe => (
            <Card key={recipe.id}>
              <CardHeader>
                <CardTitle>{recipe.name}</CardTitle>
                <CardDescription>{recipe.mealtype}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {recipe.description || "Sin descripción."}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/preloaded-recipes/${recipe.id}`}>Ver Receta</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No hay recetas pre-cargadas disponibles.
          </p>
        )}
      </div>
    </div>
  );
};

export default PreloadedRecipeListPage;