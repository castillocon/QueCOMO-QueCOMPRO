export interface Ingredient {
  name: string;
  quantity: string;
  supplier?: string; // Nuevo campo opcional para el proveedor
}

export interface Recipe {
  id: string;
  name: string;
  description?: string;
  ingredients: Ingredient[];
  instructions: string[];
  mealtype: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
  imageUrl?: string; // Nuevo campo opcional para la URL de la imagen
}

export interface MealPlanEntry {
  id: string;
  date: string; // YYYY-MM-DD
  mealtype: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
  recipeid: string; // Cambiado a 'recipeid' (minúsculas)
  purchased_ingredients?: string[]; // Nuevo campo para ingredientes comprados
}

export interface Supplier {
  id: string;
  name: string;
  description?: string;
}

export interface Profile {
  id: string;
  first_name?: string;
  last_name?: string;
  username?: string; // Nuevo campo para el nombre de usuario
}