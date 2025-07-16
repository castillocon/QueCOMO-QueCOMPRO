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
  mealtype: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
}

export interface MealPlanEntry {
  id: string;
  date: string; // YYYY-MM-DD
  mealtype: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
  recipeid: string; // Cambiado a 'recipeid' (minúsculas)
}