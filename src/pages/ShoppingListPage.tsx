import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ShoppingListPage: React.FC = () => {
  // This page will eventually generate a shopping list based on the meal plan.
  // For now, it's a placeholder.
  const mockShoppingList = [
    { item: "Pechuga de pollo", quantity: "200g" },
    { item: "Lechuga romana", quantity: "1 cabeza" },
    { item: "Tomates cherry", quantity: "1 taza" },
    { item: "Yogur natural", quantity: "1 taza" },
    { item: "Frutas mixtas", quantity: "1 taza" },
    { item: "Salmón", quantity: "150g" },
    { item: "Espárragos", quantity: "1 manojo" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Compras</h1>

      <Card>
        <CardHeader>
          <CardTitle>Ingredientes Necesarios</CardTitle>
        </CardHeader>
        <CardContent>
          {mockShoppingList.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artículo</TableHead>
                  <TableHead>Cantidad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockShoppingList.map((item, index) => (
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