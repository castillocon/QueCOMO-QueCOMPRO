import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { Ingredient } from "@/types";

const ShoppingListPage: React.FC = () => {
  const { recipes, mealPlan } = useMealPlanning();

  const generateShoppingList = () => {
    const finalShoppingListMap = new Map<string, { name: string; quantities: string[] }>();

    mealPlan.forEach(entry => {
      const recipe = recipes.find(r => r.id === entry.recipeId);
      if (recipe) {
        recipe.ingredients.forEach(ingredient => {
          if (finalShoppingListMap.has(ingredient.name)) {
            finalShoppingListMap.get(ingredient.name)?.quantities.push(ingredient.quantity);
          } else {
            finalShoppingListMap.set(ingredient.name, { name: ingredient.name, quantities: [ingredient.quantity] });
          }
        });
      }
    });

    return Array.from(finalShoppingListMap.values()).map(item => ({
      item: item.name,
      quantity: item.quantities.join(', ') // Unir cantidades si hay varias
    }));
  };

  const shoppingList = generateShoppingList();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Compras</h1>

      <Card>
        <CardHeader>
          <CardTitle>Ingredientes Necesarios</CardTitle>
        </CardHeader>
        <CardContent>
          {shoppingList.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artículo</TableHead>
                  <TableHead>Cantidad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shoppingList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.item}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground">Tu lista de compras está vacía. ¡Planifica algunas comidas!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingListPage;