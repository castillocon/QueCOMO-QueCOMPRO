import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';

const ShoppingListPage: React.FC = () => {
  const { recipes, mealPlan } = useMealPlanning();
  const shoppingListRef = useRef<HTMLDivElement>(null);

  // Helper function to parse quantity strings
  const parseQuantity = (quantityStr: string): { value: number | null; unit: string } => {
    // Regex to match numbers (integers or decimals) and optional units
    const match = quantityStr.match(/^(\d+(\.\d+)?)\s*([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)?$/);
    if (match) {
      const value = parseFloat(match[1]);
      const unit = match[3] ? match[3].trim().toLowerCase() : ''; // Normalize unit to lowercase
      return { value, unit };
    }
    // For non-numeric quantities like "al gusto", "una pizca", etc.
    return { value: null, unit: quantityStr.trim().toLowerCase() };
  };

  const generateShoppingList = () => {
    const aggregatedList = new Map<string, Map<string, number>>(); // ingredientName -> unit -> totalQuantity
    const unquantifiedItems = new Map<string, Set<string>>(); // ingredientName -> set of original unparsed quantities

    mealPlan.forEach(entry => {
      const recipe = recipes.find(r => r.id === entry.recipeid);
      if (recipe) {
        recipe.ingredients.forEach(ingredient => {
          const { name, quantity } = ingredient;
          const parsed = parseQuantity(quantity);

          if (parsed.value !== null && parsed.unit) {
            if (!aggregatedList.has(name)) {
              aggregatedList.set(name, new Map<string, number>());
            }
            const unitMap = aggregatedList.get(name)!;
            unitMap.set(parsed.unit, (unitMap.get(parsed.unit) || 0) + parsed.value);
          } else {
            // Handle quantities that couldn't be parsed numerically
            if (!unquantifiedItems.has(name)) {
              unquantifiedItems.set(name, new Set<string>());
            }
            unquantifiedItems.get(name)!.add(quantity);
          }
        });
      }
    });

    const finalShoppingList: { item: string; quantity: string }[] = [];

    aggregatedList.forEach((unitMap, itemName) => {
      let quantityStringParts: string[] = [];
      unitMap.forEach((totalValue, unit) => {
        quantityStringParts.push(`${totalValue} ${unit}`);
      });
      finalShoppingList.push({
        item: itemName,
        quantity: quantityStringParts.join(', ')
      });
    });

    unquantifiedItems.forEach((quantitiesSet, itemName) => {
      // Check if this item was already added with quantified parts
      const existingEntry = finalShoppingList.find(entry => entry.item === itemName);
      const unparsedString = Array.from(quantitiesSet).join(', ');

      if (existingEntry) {
        // Append unparsed quantities to existing entry
        if (existingEntry.quantity) {
          existingEntry.quantity += `, ${unparsedString}`;
        } else {
          existingEntry.quantity = unparsedString;
        }
      } else {
        // Add as a new entry if no quantified parts existed
        finalShoppingList.push({
          item: itemName,
          quantity: unparsedString
        });
      }
    });

    return finalShoppingList.sort((a, b) => a.item.localeCompare(b.item)); // Sort alphabetically
  };

  const shoppingList = generateShoppingList();

  const handleDownloadPdf = () => {
    if (shoppingListRef.current) {
      toast.loading("Generando PDF de la lista de compras...");
      html2pdf().from(shoppingListRef.current).save('lista_de_compras.pdf');
      toast.success("PDF generado con éxito.");
    } else {
      toast.error("No se pudo encontrar el contenido de la lista de compras.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lista de Compras</h1>
        <Button onClick={handleDownloadPdf} disabled={shoppingList.length === 0}>
          <Download className="mr-2 h-4 w-4" />
          Descargar PDF
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ingredientes Necesarios</CardTitle>
        </CardHeader>
        <CardContent ref={shoppingListRef}> {/* Contenido a exportar a PDF */}
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