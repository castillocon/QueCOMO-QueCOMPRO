import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Recipe, MealPlanEntry } from '@/types';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from './SessionContext';
import { toast } from 'sonner';

interface MealPlanningContextType {
  recipes: Recipe[];
  mealPlan: MealPlanEntry[];
  addRecipe: (newRecipe: Omit<Recipe, 'id'>) => Promise<void>;
  updateRecipe: (updatedRecipe: Recipe) => Promise<void>;
  deleteRecipe: (id: string) => Promise<void>;
  addOrUpdateMealPlanEntry: (date: string, mealType: MealPlanEntry['mealType'], recipeId: string) => Promise<void>;
  removeMealPlanEntry: (date: string, mealType: MealPlanEntry['mealType']) => Promise<void>;
  isLoadingRecipes: boolean;
  isLoadingMealPlan: boolean;
}

const MealPlanningContext = createContext<MealPlanningContextType | undefined>(undefined);

export const MealPlanningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, isLoading: isLoadingSession } = useSession();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [mealPlan, setMealPlan] = useState<MealPlanEntry[]>([]);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(true);
  const [isLoadingMealPlan, setIsLoadingMealPlan] = useState(true); // Corregido aquí

  // Fetch recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      if (!user) {
        setRecipes([]);
        setIsLoadingRecipes(false);
        return;
      }
      setIsLoadingRecipes(true);
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        toast.error('Error al cargar recetas: ' + error.message);
      } else {
        setRecipes(data as Recipe[]);
      }
      setIsLoadingRecipes(false);
    };

    if (!isLoadingSession) {
      fetchRecipes();
    }
  }, [user, isLoadingSession]);

  // Fetch meal plan
  useEffect(() => {
    const fetchMealPlan = async () => {
      if (!user) {
        setMealPlan([]);
        setIsLoadingMealPlan(false);
        return;
      }
      setIsLoadingMealPlan(true);
      const { data, error } = await supabase
        .from('meal_plan_entries')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        toast.error('Error al cargar plan de comidas: ' + error.message);
      } else {
        setMealPlan(data as MealPlanEntry[]);
      }
      setIsLoadingMealPlan(false);
    };

    if (!isLoadingSession) {
      fetchMealPlan();
    }
  }, [user, isLoadingSession]);

  const addRecipe = async (newRecipe: Omit<Recipe, 'id'>) => {
    if (!user) {
      toast.error('Debes iniciar sesión para añadir recetas.');
      return;
    }
    // Asegurarse de que el objeto enviado a Supabase tenga 'mealtype' en minúsculas
    const { mealtype, ...rest } = newRecipe;
    const { data, error } = await supabase
      .from('recipes')
      .insert({ ...rest, mealtype, user_id: user.id }) // Cambiado a 'mealtype'
      .select();

    if (error) {
      toast.error('Error al añadir receta: ' + error.message);
    } else if (data) {
      setRecipes(prevRecipes => [...prevRecipes, data[0] as Recipe]);
      toast.success('Receta añadida con éxito.');
    }
  };

  const updateRecipe = async (updatedRecipe: Recipe) => {
    if (!user) {
      toast.error('Debes iniciar sesión para actualizar recetas.');
      return;
    }
    // Asegurarse de que el objeto enviado a Supabase tenga 'mealtype' en minúsculas
    const { mealtype, ...rest } = updatedRecipe;
    const { error } = await supabase
      .from('recipes')
      .update({ ...rest, mealtype }) // Cambiado a 'mealtype'
      .eq('id', updatedRecipe.id)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Error al actualizar receta: ' + error.message);
    } else {
      setRecipes(prevRecipes =>
        prevRecipes.map(recipe =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      );
      toast.success('Receta actualizada con éxito.');
    }
  };

  const deleteRecipe = async (id: string) => {
    if (!user) {
      toast.error('Debes iniciar sesión para eliminar recetas.');
      return;
    }
    const { error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Error al eliminar receta: ' + error.message);
    } else {
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
      setMealPlan(prevPlan => prevPlan.filter(entry => entry.recipeId !== id));
      toast.success('Receta eliminada con éxito.');
    }
  };

  const addOrUpdateMealPlanEntry = async (date: string, mealType: MealPlanEntry['mealType'], recipeId: string) => {
    if (!user) {
      toast.error('Debes iniciar sesión para planificar comidas.');
      return;
    }

    const existingEntry = mealPlan.find(
      entry => entry.date === date && entry.mealType === mealType
    );

    if (existingEntry) {
      const { error } = await supabase
        .from('meal_plan_entries')
        .update({ recipeId })
        .eq('id', existingEntry.id)
        .eq('user_id', user.id);

      if (error) {
        toast.error('Error al actualizar entrada del plan: ' + error.message);
      } else {
        setMealPlan(prevPlan =>
          prevPlan.map(entry =>
            entry.id === existingEntry.id ? { ...entry, recipeId } : entry
          )
        );
        toast.success('Entrada del plan actualizada.');
      }
    } else {
      const { data, error } = await supabase
        .from('meal_plan_entries')
        .insert({ date, mealType, recipeId, user_id: user.id })
        .select();

      if (error) {
        toast.error('Error al añadir entrada al plan: ' + error.message);
      } else if (data) {
        setMealPlan(prevPlan => [...prevPlan, data[0] as MealPlanEntry]);
        toast.success('Entrada del plan añadida.');
      }
    }
  };

  const removeMealPlanEntry = async (date: string, mealType: MealPlanEntry['mealType']) => {
    if (!user) {
      toast.error('Debes iniciar sesión para eliminar entradas del plan.');
      return;
    }
    const entryToRemove = mealPlan.find(entry => entry.date === date && entry.mealType === mealType);

    if (entryToRemove) {
      const { error } = await supabase
        .from('meal_plan_entries')
        .delete()
        .eq('id', entryToRemove.id)
        .eq('user_id', user.id);

      if (error) {
        toast.error('Error al eliminar entrada del plan: ' + error.message);
      } else {
        setMealPlan(prevPlan => prevPlan.filter(entry => entry.id !== entryToRemove.id));
        toast.success('Entrada del plan eliminada.');
      }
    }
  };

  return (
    <MealPlanningContext.Provider value={{
      recipes,
      mealPlan,
      addRecipe,
      updateRecipe,
      deleteRecipe,
      addOrUpdateMealPlanEntry,
      removeMealPlanEntry,
      isLoadingRecipes,
      isLoadingMealPlan
    }}>
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