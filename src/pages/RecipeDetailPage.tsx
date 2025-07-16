import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { recipes } = useMealPlanning();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Receta no encontrada</h1>
        <Button asChild>
          <Link to="/recipes">Volver a Recetas</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link to="/recipes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Recetas
          </Link>
        </Button>
        <Button asChild>
          <Link to={`/recipes/${recipe.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Editar Receta
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{recipe.name}</CardTitle>
          <CardDescription className="text-lg">{recipe.mealtype}</CardDescription> {/* Cambiado a 'mealtype' */}
          {recipe.description && <p className="text-muted-foreground mt-2">{recipe.description}</p>}
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingredientes</h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">
                  <span className="font-medium">{ingredient.quantity}</span> de {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Instrucciones</h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-lg">{instruction}</li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetailPage;