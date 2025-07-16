import { supabase } from './client';
import { toast } from 'sonner';

/**
 * Sube una imagen a Supabase Storage.
 * @param file El archivo de imagen a subir.
 * @param userId El ID del usuario propietario.
 * @param recipeId El ID de la receta a la que pertenece la imagen.
 * @returns La URL pública de la imagen subida o undefined si hay un error.
 */
export const uploadImage = async (file: File, userId: string, recipeId: string): Promise<string | undefined> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${recipeId}.${fileExt}`;
  const filePath = `${userId}/${recipeId}/${fileName}`; // Ruta dentro del bucket

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

/**
 * Elimina una imagen de Supabase Storage dada su URL pública.
 * @param imageUrl La URL pública de la imagen a eliminar.
 */
export const deleteImage = async (imageUrl: string) => {
  if (!imageUrl) return;

  const bucketName = 'recipe-images';
  // Encuentra el índice del nombre del bucket en la URL y extrae la ruta después de él
  const pathStartIndex = imageUrl.indexOf(`/${bucketName}/`);
  if (pathStartIndex === -1) {
    console.warn('La URL de la imagen no contiene la ruta esperada del bucket:', imageUrl);
    return;
  }
  const filePath = imageUrl.substring(pathStartIndex + `/${bucketName}/`.length);

  const { error } = await supabase.storage
    .from(bucketName)
    .remove([filePath]);

  if (error) {
    console.error('Error al eliminar la imagen de Supabase Storage:', error.message);
  }
};

/**
 * Elimina todos los datos (recetas, planes de comida, proveedores e imágenes asociadas)
 * de un usuario específico. Diseñado para limpiar los datos del usuario demo al cerrar sesión.
 * @param userId El ID del usuario cuyos datos se eliminarán.
 */
export const deleteDemoUserData = async (userId: string) => {
  try {
    // 1. Obtener todas las recetas del usuario para eliminar las imágenes asociadas
    const { data: recipes, error: recipesError } = await supabase
      .from('recipes')
      .select('id, imageUrl')
      .eq('user_id', userId);

    if (recipesError) {
      console.error('Error al obtener recetas del usuario demo para eliminación:', recipesError.message);
      // Continuar con otras eliminaciones incluso si esta falla
    } else if (recipes && recipes.length > 0) {
      const imagePathsToDelete: string[] = [];
      for (const recipe of recipes) {
        if (recipe.imageUrl) {
          const bucketName = 'recipe-images';
          const pathStartIndex = recipe.imageUrl.indexOf(`/${bucketName}/`);
          if (pathStartIndex !== -1) {
            const filePath = recipe.imageUrl.substring(pathStartIndex + `/${bucketName}/`.length);
            imagePathsToDelete.push(filePath);
          }
        }
      }

      if (imagePathsToDelete.length > 0) {
        const { error: storageError } = await supabase.storage
          .from('recipe-images')
          .remove(imagePathsToDelete);

        if (storageError) {
          console.error('Error al eliminar imágenes de recetas del usuario demo:', storageError.message);
        }
      }
    }

    // 2. Eliminar todas las entradas del plan de comidas del usuario
    const { error: mealPlanError } = await supabase
      .from('meal_plan_entries')
      .delete()
      .eq('user_id', userId);

    if (mealPlanError) {
      console.error('Error al eliminar entradas del plan de comidas del usuario demo:', mealPlanError.message);
    }

    // 3. Eliminar todas las recetas del usuario
    const { error: recipeDeleteError } = await supabase
      .from('recipes')
      .delete()
      .eq('user_id', userId);

    if (recipeDeleteError) {
      console.error('Error al eliminar recetas del usuario demo:', recipeDeleteError.message);
    }

    // 4. Eliminar todos los proveedores del usuario
    const { error: supplierError } = await supabase
      .from('suppliers')
      .delete()
      .eq('user_id', userId);

    if (supplierError) {
      console.error('Error al eliminar proveedores del usuario demo:', supplierError.message);
    }

    console.log('Datos del usuario demo limpiados exitosamente.');
  } catch (e) {
    console.error('Ocurrió un error inesperado durante la eliminación de datos del usuario demo:', e);
  }
};