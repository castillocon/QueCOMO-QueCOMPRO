export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  name: string;
  description?: string;
  ingredients: Ingredient[];
  instructions: string[];
  mealtype: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda'; // Cambiado a 'mealtype'
}

export interface MealPlanEntry {
  id: string;
  date: string; // YYYY-MM-DD
  mealType: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
  recipeId: string;
}