import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MealPlanEntry } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMealPlanning } from '@/context/MealPlanningContext';

const getWeekDays = (startDate: Date) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }
  return days;
};

const formatDate = (date: Date) => date.toISOString().split('T')[0]; // YYYY-MM-DD
// Modificado para un formato más conciso: "1 Ene" en lugar de "lunes, 1 de enero"
const formatDisplayDate = (date: Date) => date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });

const MealPlannerPage: React.FC = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const { recipes, mealPlan, addOrUpdateMealPlanEntry } = useMealPlanning();

  const weekDays = getWeekDays(currentWeekStart);
  const mealTypes = ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'];

  const handleRecipeSelect = (date: string, mealType: MealPlanEntry['mealType'], recipeId: string) => {
    addOrUpdateMealPlanEntry(date, mealType, recipeId);
  };

  const getRecipeForMeal = (date: string, mealType: MealPlanEntry['mealType']) => {
    const entry = mealPlan.find(e => e.date === date && e.mealType === mealType);
    return entry ? recipes.find(r => r.id === entry.recipeId) : undefined;
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newDate);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Planificador Semanal de Comidas</h1>

      <div className="flex justify-between items-center mb-6">
        <Button onClick={goToPreviousWeek} variant="outline">Semana Anterior</Button>
        <h2 className="text-xl font-semibold whitespace-nowrap"> {/* Added whitespace-nowrap */}
          Semana del {formatDisplayDate(weekDays[0])} al {formatDisplayDate(weekDays[6])}
        </h2>
        <Button onClick={goToNextWeek} variant="outline">Semana Siguiente</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weekDays.map(day => (
          <Card key={formatDate(day)} className="flex flex-col">
            <CardHeader className="bg-muted/40 border-b">
              <CardTitle className="text-lg">{formatDisplayDate(day)}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-4 space-y-4">
              {mealTypes.map(mealType => {
                const selectedRecipe = getRecipeForMeal(formatDate(day), mealType as MealPlanEntry['mealType']);
                const availableRecipes = recipes.filter(r => r.mealType === mealType);

                return (
                  <div key={mealType} className="border rounded-md p-3">
                    <h3 className="font-medium text-md mb-2">{mealType}</h3>
                    <Select
                      onValueChange={(recipeId) => handleRecipeSelect(formatDate(day), mealType as MealPlanEntry['mealType'], recipeId)}
                      value={selectedRecipe?.id || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Receta" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableRecipes.length > 0 ? (
                          availableRecipes.map(recipe => (
                            <SelectItem key={recipe.id} value={recipe.id}>
                              {recipe.name}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-recipes" disabled>
                            No hay recetas disponibles para este tipo de comida.
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                    {selectedRecipe && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {selectedRecipe.name}
                      </p>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MealPlannerPage;