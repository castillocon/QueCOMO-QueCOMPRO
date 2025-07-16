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
  mealType: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
}

export interface MealPlanEntry {
  id: string;
  date: string; // YYYY-MM-DD
  mealType: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
  recipeId: string;
}