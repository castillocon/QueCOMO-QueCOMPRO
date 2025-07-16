import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { useSession } from '@/context/SessionContext'; // Importar useSession
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';

// Helper functions (copied from MealPlannerPage for self-containment)
const getWeekDays = (startDate: Date) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }
  return days;
};

const formatDisplayDate = (date: Date) => date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });

const ShoppingListPage: React.FC = () => {
  const { recipes, mealPlan } = useMealPlanning();
  const { user } = useSession(); // Obtener el usuario de la sesión
  const shoppingListRef = useRef<HTMLDivElement>(null);

  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  // Adjust currentWeekStart to be the beginning of the current week (Monday)
  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust to Monday
    const monday = new Date(today.setDate(diff));
    monday.setHours(0, 0, 0, 0); // Set to start of the day
    setCurrentWeekStart(monday);
  }, []);

  const weekDays = getWeekDays(currentWeekStart);
  const userName = user?.user_metadata?.first_name || user?.email || "Usuario";
  const weekRangeText = `Semana del ${formatDisplayDate(weekDays[0])} al ${formatDisplayDate(weekDays[6])}`;

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
      const startDateFormatted = formatDisplayDate(weekDays[0]).replace(/\s/g, '_');
      const endDateFormatted = formatDisplayDate(weekDays[6]).replace(/\s/g, '_');
      const filename = `lista_de_compras_semana_${startDateFormatted}_al_${endDateFormatted}.pdf`;

      html2pdf().from(shoppingListRef.current).set({
        margin: [10, 10, 10, 10],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        callback: function (doc) {
          const pageCount = doc.internal.getNumberOfPages();
          for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.setTextColor(100); // Grey color for the footer text
            doc.text('🛒🍲 QueComo@QueCompro', doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
          }
        }
      }).save();
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
        <CardContent>
          {/* Contenido a exportar a PDF */}
          <div ref={shoppingListRef} className="p-4">
            <h2 className="text-2xl font-bold mb-2">Lista de Compras de {userName}</h2>
            <p className="text-lg text-muted-foreground mb-4">{weekRangeText}</p>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingListPage;