import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRecipes } from '@/context/RecipeContext';

const RecipeListPage: React.FC = () => {
  const { recipes } = useRecipes();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mis Recetas</h1>
        <Button asChild>
          <Link to="/recipes/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Receta
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <Card key={recipe.id}>
              <CardHeader>
                <CardTitle>{recipe.name}</CardTitle>
                <CardDescription>{recipe.mealType}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {recipe.description || "Sin descripción."}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/recipes/${recipe.id}`}>Ver Receta</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No hay recetas. ¡Añade una nueva!
          </p>
        )}
      </div>
    </div>
  );
};

export default RecipeListPage;