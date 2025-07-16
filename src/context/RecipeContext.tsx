import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Recipe } from '@/types';
import { mockRecipes as initialMockRecipes } from '@/data/recipes';

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (newRecipe: Omit<Recipe, 'id'>) => void;
  updateRecipe: (updatedRecipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialMockRecipes);

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
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};