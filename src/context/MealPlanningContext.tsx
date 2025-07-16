import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback, useMemo } from 'react';
import { Recipe, MealPlanEntry, Supplier } from '@/types';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from './SessionContext';
import { toast } from 'sonner';

interface MealPlanningContextType {
  recipes: Recipe[];
  mealPlan: MealPlanEntry[];
  suppliers: Supplier[];
  addRecipe: (newRecipe: Omit<Recipe, 'id'>, imageFile?: File) => Promise<void>;
  updateRecipe: (updatedRecipe: Recipe, imageFile?: File | null) => Promise<void>;
  deleteRecipe: (id: string) => Promise<void>;
  addOrUpdateMealPlanEntry: (date: string, mealtype: MealPlanEntry['mealtype'], recipeid: string) => Promise<void>;
  removeMealPlanEntry: (date: string, mealtype: MealPlanEntry['mealtype']) => Promise<void>;
  toggleIngredientPurchased: (entryId: string, ingredientName: string) => Promise<void>;
  addSupplier: (newSupplier: Omit<Supplier, 'id'>) => Promise<void>;
  updateSupplier: (updatedSupplier: Supplier) => Promise<void>;
  deleteSupplier: (id: string) => Promise<void>;
  isLoadingRecipes: boolean;
  isLoadingMealPlan: boolean;
  isLoadingSuppliers: boolean;
  recipesById: Map<string, Recipe>; // Nuevo: Mapa de recetas por ID
  resetUserData: () => void; // Nueva función para resetear datos
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

  // Memoizar el mapa de recetas por ID para búsquedas rápidas
  const recipesById = useMemo(() => {
    return new Map(recipes.map(recipe => [recipe.id, recipe]));
  }, [recipes]);

  const uploadImage = async (file: File, userId: string, recipeId: string): Promise<string | undefined> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${recipeId}.${fileExt}`;
    const filePath = `${userId}/${recipeId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('recipe-images')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      toast.error('Error al subir la imagen: ' + uploadError.message);
      return undefined;
    }

    const { data } = supabase.storage
      .from('recipe-images')
      .getPublicUrl(filePath);

    return data?.publicUrl;
  };

  const deleteImage = async (imageUrl: string) => {
    if (!imageUrl) return;

    const pathSegments = imageUrl.split('/');
    const userId = pathSegments[pathSegments.length - 2];
    const recipeId = pathSegments[pathSegments.length - 1].split('.')[0];
    const fileName = pathSegments[pathSegments.length - 1];
    const filePath = `${userId}/${recipeId}/${fileName}`;

    const { error } = await supabase.storage
      .from('recipe-images')
      .remove([filePath]);

    if (error) {
      console.error('Error al eliminar la imagen de Supabase Storage:', error.message);
      // No mostrar toast de error al usuario para no interrumpir el flujo principal
    }
  };

  const addRecipe = async (newRecipe: Omit<Recipe, 'id'>, imageFile?: File) => {
    if (!user) {
      toast.error('Debes iniciar sesión para añadir recetas.');
      return;
    }

    const { data: insertedRecipe, error: insertError } = await supabase
      .from('recipes')
      .insert({ ...newRecipe, user_id: user.id })
      .select();

    if (insertError) {
      toast.error('Error al añadir receta: ' + insertError.message);
      return;
    }

    let imageUrl: string | undefined;
    if (imageFile && insertedRecipe && insertedRecipe[0]) {
      imageUrl = await uploadImage(imageFile, user.id, insertedRecipe[0].id);
      if (imageUrl) {
        const { error: updateError } = await supabase
          .from('recipes')
          .update({ imageUrl })
          .eq('id', insertedRecipe[0].id);

        if (updateError) {
          toast.error('Error al actualizar la URL de la imagen: ' + updateError.message);
        } else {
          insertedRecipe[0].imageUrl = imageUrl;
        }
      }
    }

    setRecipes(prevRecipes => [...prevRecipes, insertedRecipe[0] as Recipe]);
    toast.success('Receta añadida con éxito.');
  };

  const updateRecipe = async (updatedRecipe: Recipe, imageFile?: File | null) => {
    if (!user) {
      toast.error('Debes iniciar sesión para actualizar recetas.');
      return;
    }

    let newImageUrl: string | undefined = updatedRecipe.imageUrl;

    if (imageFile === null) { // User explicitly removed the image
      if (updatedRecipe.imageUrl) {
        await deleteImage(updatedRecipe.imageUrl);
      }
      newImageUrl = undefined;
    } else if (imageFile instanceof File) { // User uploaded a new image
      if (updatedRecipe.imageUrl) { // Delete old image if it exists
        await deleteImage(updatedRecipe.imageUrl);
      }
      newImageUrl = await uploadImage(imageFile, user.id, updatedRecipe.id);
    }

    const { error } = await supabase
      .from('recipes')
      .update({ ...updatedRecipe, imageUrl: newImageUrl })
      .eq('id', updatedRecipe.id)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Error al actualizar receta: ' + error.message);
    } else {
      setRecipes(prevRecipes =>
        prevRecipes.map(recipe =>
          recipe.id === updatedRecipe.id ? { ...updatedRecipe, imageUrl: newImageUrl } : recipe
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

    const recipeToDelete = recipes.find(r => r.id === id);
    if (recipeToDelete && recipeToDelete.imageUrl) {
      await deleteImage(recipeToDelete.imageUrl);
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

  const toggleIngredientPurchased = async (entryId: string, ingredientName: string) => {
    if (!user) {
      toast.error('Debes iniciar sesión para actualizar la lista de compras.');
      return;
    }

    const entryToUpdate = mealPlan.find(entry => entry.id === entryId);
    if (!entryToUpdate) {
      toast.error('Entrada del plan de comidas no encontrada.');
      return;
    }

    const currentPurchased = new Set(entryToUpdate.purchased_ingredients || []);
    let newPurchased: string[];

    if (currentPurchased.has(ingredientName)) {
      currentPurchased.delete(ingredientName);
    } else {
      currentPurchased.add(ingredientName);
    }
    newPurchased = Array.from(currentPurchased);

    const { error } = await supabase
      .from('meal_plan_entries')
      .update({ purchased_ingredients: newPurchased })
      .eq('id', entryId)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Error al actualizar el estado de compra: ' + error.message);
    } else {
      setMealPlan(prevPlan =>
        prevPlan.map(entry =>
          entry.id === entryId ? { ...entry, purchased_ingredients: newPurchased } : entry
        )
      );
      toast.success('Estado de compra actualizado.');
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

  const resetUserData = useCallback(() => {
    setRecipes([]);
    setMealPlan([]);
    setSuppliers([]);
  }, []);

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
      toggleIngredientPurchased,
      addSupplier,
      updateSupplier,
      deleteSupplier,
      isLoadingRecipes,
      isLoadingMealPlan,
      isLoadingSuppliers,
      recipesById,
      resetUserData // Exponer la nueva función
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