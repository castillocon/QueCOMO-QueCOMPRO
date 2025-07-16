import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Recipe, MealPlanEntry, Supplier } from '@/types';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from './SessionContext';
import { toast } from 'sonner';

interface MealPlanningContextType {
  recipes: Recipe[];
  mealPlan: MealPlanEntry[];
  suppliers: Supplier[]; // Nuevo: lista de proveedores
  addRecipe: (newRecipe: Omit<Recipe, 'id'>) => Promise<void>;
  updateRecipe: (updatedRecipe: Recipe) => Promise<void>;
  deleteRecipe: (id: string) => Promise<void>;
  addOrUpdateMealPlanEntry: (date: string, mealtype: MealPlanEntry['mealtype'], recipeid: string) => Promise<void>;
  removeMealPlanEntry: (date: string, mealtype: MealPlanEntry['mealtype']) => Promise<void>;
  addSupplier: (newSupplier: Omit<Supplier, 'id'>) => Promise<void>; // Nuevo: añadir proveedor
  updateSupplier: (updatedSupplier: Supplier) => Promise<void>; // Nuevo: actualizar proveedor
  deleteSupplier: (id: string) => Promise<void>; // Nuevo: eliminar proveedor
  isLoadingRecipes: boolean;
  isLoadingMealPlan: boolean;
  isLoadingSuppliers: boolean; // Nuevo: estado de carga de proveedores
}

const MealPlanningContext = createContext<MealPlanningContextType | undefined>(undefined);

export const MealPlanningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, isLoading: isLoadingSession } = useSession();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [mealPlan, setMealPlan] = useState<MealPlanEntry[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(true);
  const [isLoadingMealPlan, setIsLoadingMealPlan] = useState(true);
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState(true);

  const fetchDataFromSupabase = useCallback(async <T,>(
    tableName: string,
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (!user) {
      setter([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      toast.error(`Error al cargar ${tableName}: ` + error.message);
    } else {
      setter(data as T[]);
    }
    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    if (!isLoadingSession) {
      fetchDataFromSupabase<Recipe>('recipes', setRecipes, setIsLoadingRecipes);
      fetchDataFromSupabase<MealPlanEntry>('meal_plan_entries', setMealPlan, setIsLoadingMealPlan);
      fetchDataFromSupabase<Supplier>('suppliers', setSuppliers, setIsLoadingSuppliers);
    }
  }, [user, isLoadingSession, fetchDataFromSupabase]);

  const addRecipe = async (newRecipe: Omit<Recipe, 'id'>) => {
    if (!user) {
      toast.error('Debes iniciar sesión para añadir recetas.');
      return;
    }
    const { data, error } = await supabase
      .from('recipes')
      .insert({ ...newRecipe, user_id: user.id })
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
    const { error } = await supabase
      .from('recipes')
      .update(updatedRecipe)
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
      setMealPlan(prevPlan => prevPlan.filter(entry => entry.recipeid !== id));
      toast.success('Receta eliminada con éxito.');
    }
  };

  const addOrUpdateMealPlanEntry = async (date: string, mealtype: MealPlanEntry['mealtype'], recipeid: string) => {
    if (!user) {
      toast.error('Debes iniciar sesión para planificar comidas.');
      return;
    }

    const existingEntry = mealPlan.find(
      entry => entry.date === date && entry.mealtype === mealtype
    );

    if (existingEntry) {
      const { error } = await supabase
        .from('meal_plan_entries')
        .update({ recipeid })
        .eq('id', existingEntry.id)
        .eq('user_id', user.id);

      if (error) {
        toast.error('Error al actualizar entrada del plan: ' + error.message);
      } else {
        setMealPlan(prevPlan =>
          prevPlan.map(entry =>
            entry.id === existingEntry.id ? { ...entry, recipeid } : entry
          )
        );
        toast.success('Entrada del plan actualizada.');
      }
    } else {
      const { data, error } = await supabase
        .from('meal_plan_entries')
        .insert({ date, mealtype, recipeid, user_id: user.id })
        .select();

      if (error) {
        toast.error('Error al añadir entrada al plan: ' + error.message);
      } else if (data) {
        setMealPlan(prevPlan => [...prevPlan, data[0] as MealPlanEntry]);
        toast.success('Entrada del plan añadida.');
      }
    }
  };

  const removeMealPlanEntry = async (date: string, mealtype: MealPlanEntry['mealtype']) => {
    if (!user) {
      toast.error('Debes iniciar sesión para eliminar entradas del plan.');
      return;
    }
    const entryToRemove = mealPlan.find(entry => entry.date === date && entry.mealtype === mealtype);

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

  const addSupplier = async (newSupplier: Omit<Supplier, 'id'>) => {
    if (!user) {
      toast.error('Debes iniciar sesión para añadir proveedores.');
      return;
    }
    const { data, error } = await supabase
      .from('suppliers')
      .insert({ ...newSupplier, user_id: user.id })
      .select();

    if (error) {
      toast.error('Error al añadir proveedor: ' + error.message);
    } else if (data) {
      setSuppliers(prevSuppliers => [...prevSuppliers, data[0] as Supplier]);
      toast.success('Proveedor añadido con éxito.');
    }
  };

  const updateSupplier = async (updatedSupplier: Supplier) => {
    if (!user) {
      toast.error('Debes iniciar sesión para actualizar proveedores.');
      return;
    }
    const { error } = await supabase
      .from('suppliers')
      .update(updatedSupplier)
      .eq('id', updatedSupplier.id)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Error al actualizar proveedor: ' + error.message);
    } else {
      setSuppliers(prevSuppliers =>
        prevSuppliers.map(supplier =>
          supplier.id === updatedSupplier.id ? updatedSupplier : supplier
        )
      );
      toast.success('Proveedor actualizado con éxito.');
    }
  };

  const deleteSupplier = async (id: string) => {
    if (!user) {
      toast.error('Debes iniciar sesión para eliminar proveedores.');
      return;
    }
    const { error } = await supabase
      .from('suppliers')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Error al eliminar proveedor: ' + error.message);
    } else {
      setSuppliers(prevSuppliers => prevSuppliers.filter(supplier => supplier.id !== id));
      toast.success('Proveedor eliminado con éxito.');
    }
  };

  return (
    <MealPlanningContext.Provider value={{
      recipes,
      mealPlan,
      suppliers,
      addRecipe,
      updateRecipe,
      deleteRecipe,
      addOrUpdateMealPlanEntry,
      removeMealPlanEntry,
      addSupplier,
      updateSupplier,
      deleteSupplier,
      isLoadingRecipes,
      isLoadingMealPlan,
      isLoadingSuppliers
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