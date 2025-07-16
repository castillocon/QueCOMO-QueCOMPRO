import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MealPlanEntry } from "@/types";

const RecipeListPage: React.FC = () => {
  const { recipes } = useMealPlanning();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedMealType, setSelectedMealType] = useState<MealPlanEntry['mealtype'] | 'Todos'>('Todos');

  const mealTypeOrder: (MealPlanEntry['mealtype'] | 'Todos')[] = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesMealType = selectedMealType === 'Todos' || recipe.mealtype === selectedMealType;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const matchesSearchTerm =
      recipe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      recipe.ingredients.some(ingredient =>
        ingredient.name.toLowerCase().includes(lowerCaseSearchTerm)
      );

    return matchesMealType && matchesSearchTerm;
  }).sort((a, b) => {
    const mealTypeAIndex = mealTypeOrder.indexOf(a.mealtype);
    const mealTypeBIndex = mealTypeOrder.indexOf(b.mealtype);
    if (mealTypeAIndex !== mealTypeBIndex) {
      return mealTypeAIndex - mealTypeBIndex;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Mis Recetas</h1>
        <Button asChild>
          <Link to="/recipes/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Receta
          </Link>
        </Button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <h2 className="text-lg font-semibold whitespace-nowrap">Filtrar por Tipo de Comida:</h2>
          <Select
            onValueChange={(value: MealPlanEntry['mealtype'] | 'Todos') => setSelectedMealType(value)}
            value={selectedMealType}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="Desayuno">Desayuno</SelectItem>
              <SelectItem value="Almuerzo">Almuerzo</SelectItem>
              <SelectItem value="Merienda">Merienda</SelectItem>
              <SelectItem value="Cena">Cena</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre o ingrediente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
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
                  <Link to={`/recipes/${recipe.id}`}>Ver Receta</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No hay recetas que coincidan con tu búsqueda o filtro.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecipeListPage;