import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Recipe, MealPlanEntry } from '@/types';
import { mockRecipes as initialMockRecipes } from '@/data/recipes';

interface MealPlanningContextType {
  recipes: Recipe[];
  mealPlan: MealPlanEntry[];
  addRecipe: (newRecipe: Omit<Recipe, 'id'>) => void;
  updateRecipe: (updatedRecipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  addOrUpdateMealPlanEntry: (date: string, mealType: MealPlanEntry['mealType'], recipeId: string) => void;
  removeMealPlanEntry: (date: string, mealType: MealPlanEntry['mealType']) => void;
}

const MealPlanningContext = createContext<MealPlanningContextType | undefined>(undefined);

export const MealPlanningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialMockRecipes);
  const [mealPlan, setMealPlan] = useState<MealPlanEntry[]>([]);

  const addRecipe = (newRecipe: Omit<Recipe, 'id'>) => {
    const id = `rec-${Date.now()}`; // Simple ID generation
    setRecipes(prevRecipes => [...prevRecipes, { ...newRecipe, id }]);
  };

  const updateRecipe = (updatedRecipe: Recipe) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const deleteRecipe = (id: string) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    // También eliminar del plan de comidas si la receta es eliminada
    setMealPlan(prevPlan => prevPlan.filter(entry => entry.recipeId !== id));
  };

  const addOrUpdateMealPlanEntry = (date: string, mealType: MealPlanEntry['mealType'], recipeId: string) => {
    setMealPlan(prevPlan => {
      const existingEntryIndex = prevPlan.findIndex(
        entry => entry.date === date && entry.mealType === mealType
      );

      if (existingEntryIndex > -1) {
        const updatedPlan = [...prevPlan];
        updatedPlan[existingEntryIndex] = { ...updatedPlan[existingEntryIndex], recipeId };
        return updatedPlan;
      } else {
        return [...prevPlan, { id: `mp-${Date.now()}`, date, mealType, recipeId }];
      }
    });
  };

  const removeMealPlanEntry = (date: string, mealType: MealPlanEntry['mealType']) => {
    setMealPlan(prevPlan => prevPlan.filter(entry => !(entry.date === date && entry.mealType === mealType)));
  };

  return (
    <MealPlanningContext.Provider value={{ recipes, mealPlan, addRecipe, updateRecipe, deleteRecipe, addOrUpdateMealPlanEntry, removeMealPlanEntry }}>
      {children}
    </MealPlanningContext.Provider>
  );
};

export const useMealPlanning = () => {
  const context = useContext(MealPlanningContext);
  if (context === undefined) {
    throw new Error('useMealPlanning must be used within a MealPlanningProvider');
  }
  return context;
};