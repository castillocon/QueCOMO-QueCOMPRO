import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { useSession } from '@/context/SessionContext';
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';
import { getWeekDays, formatDisplayDate } from '@/utils/date'; // Importar utilidades de fecha
import { parseQuantity } from '@/utils/helpers'; // Importar parseQuantity

const ShoppingListPage: React.FC = () => {
  const { recipes, mealPlan } = useMealPlanning();
  const { user, profile } = useSession(); // Obtener el perfil
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
  // Usar el username del perfil, si no existe, usar first_name, si no, el email
  const userName = profile?.username || profile?.first_name || user?.email || "Usuario";
  const weekRangeText = `Semana del ${formatDisplayDate(weekDays[0])} al ${formatDisplayDate(weekDays[6])}`;

  const generateShoppingList = () => {
    // Map: SupplierName -> IngredientName -> Unit -> TotalQuantity
    const aggregatedList = new Map<string, Map<string, Map<string, number>>>();
    // Map: SupplierName -> IngredientName -> Set of original unparsed quantities
    const unquantifiedItems = new Map<string, Map<string, Set<string>>>();

    mealPlan.forEach(entry => {
      const recipe = recipes.find(r => r.id === entry.recipeid);
      if (recipe) {
        recipe.ingredients.forEach(ingredient => {
          const { name, quantity, supplier } = ingredient;
          const supplierName = supplier && supplier.trim() !== '' ? supplier.trim() : 'Sin Proveedor';
          const parsed = parseQuantity(quantity);

          if (!aggregatedList.has(supplierName)) {
            aggregatedList.set(supplierName, new Map<string, Map<string, number>>());
          }
          if (!unquantifiedItems.has(supplierName)) {
            unquantifiedItems.set(supplierName, new Map<string, Set<string>>());
          }

          if (parsed.value !== null && parsed.unit) {
            const ingredientMap = aggregatedList.get(supplierName)!;
            if (!ingredientMap.has(name)) {
              ingredientMap.set(name, new Map<string, number>());
            }
            const unitMap = ingredientMap.get(name)!;
            unitMap.set(parsed.unit, (unitMap.get(parsed.unit) || 0) + parsed.value);
          } else {
            const unquantifiedMap = unquantifiedItems.get(supplierName)!;
            if (!unquantifiedMap.has(name)) {
              unquantifiedMap.set(name, new Set<string>());
            }
            unquantifiedMap.get(name)!.add(quantity);
          }
        });
      }
    });

    const finalShoppingList: { supplier: string; items: { item: string; quantity: string }[] }[] = [];

    // Process aggregated quantities
    aggregatedList.forEach((ingredientMap, supplierName) => {
      const items: { item: string; quantity: string }[] = [];
      ingredientMap.forEach((unitMap, itemName) => {
        let quantityStringParts: string[] = [];
        unitMap.forEach((totalValue, unit) => {
          quantityStringParts.push(`${totalValue} ${unit}`);
        });
        items.push({ item: itemName, quantity: quantityStringParts.join(', ') });
      });
      finalShoppingList.push({ supplier: supplierName, items: items.sort((a, b) => a.item.localeCompare(b.item)) });
    });

    // Add unquantified items, merging with existing if necessary
    unquantifiedItems.forEach((unquantifiedMap, supplierName) => {
      let existingSupplierEntry = finalShoppingList.find(entry => entry.supplier === supplierName);
      if (!existingSupplierEntry) {
        existingSupplierEntry = { supplier: supplierName, items: [] };
        finalShoppingList.push(existingSupplierEntry);
      }

      unquantifiedMap.forEach((quantitiesSet, itemName) => {
        const unparsedString = Array.from(quantitiesSet).join(', ');
        const existingItem = existingSupplierEntry!.items.find(item => item.item === itemName);

        if (existingItem) {
          if (existingItem.quantity) {
            existingItem.quantity += `, ${unparsedString}`;
          } else {
            existingItem.quantity = unparsedString;
          }
        } else {
          existingSupplierEntry!.items.push({ item: itemName, quantity: unparsedString });
        }
      });
      existingSupplierEntry.items.sort((a, b) => a.item.localeCompare(b.item));
    });

    return finalShoppingList.sort((a, b) => a.supplier.localeCompare(b.supplier));
  };

  const shoppingListGroupedBySupplier = generateShoppingList();

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
        <h1 className="text-3xl font-bold text-primary">Lista de Compras</h1>
        <Button onClick={handleDownloadPdf} disabled={shoppingListGroupedBySupplier.length === 0}>
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
            {shoppingListGroupedBySupplier.length > 0 ? (
              shoppingListGroupedBySupplier.map((supplierGroup, supIndex) => (
                <div key={supplierGroup.supplier} className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">{supplierGroup.supplier}</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Artículo</TableHead>
                        <TableHead>Cantidad</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supplierGroup.items.map((item, itemIndex) => (
                        <TableRow key={`${supIndex}-${itemIndex}`}>
                          <TableCell className="font-medium flex items-center gap-2">
                            <div className="w-4 h-4 border border-gray-400 rounded-sm flex-shrink-0"></div> {/* Checkbox visual */}
                            {item.item}
                          </TableCell>
                          <TableCell>{item.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))
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