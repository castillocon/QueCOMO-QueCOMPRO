import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MealPlanEntry } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { useSession } from '@/context/SessionContext';
import { Download } from "lucide-react";
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';
import { getWeekDays, formatDate, formatDisplayDate, formatDayOfWeek } from '@/utils/date'; // Importar utilidades de fecha

const MealPlannerPage: React.FC = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust to Monday
    const monday = new Date(today.setDate(diff));
    monday.setHours(0, 0, 0, 0); // Set to start of the day
    return monday;
  });

  const { recipes, mealPlan, addOrUpdateMealPlanEntry } = useMealPlanning();
  const { user } = useSession();
  const pdfContentRef = useRef<HTMLDivElement>(null);
  const [showPdfContent, setShowPdfContent] = useState(false); // Nuevo estado para controlar la visibilidad

  const weekDays = getWeekDays(currentWeekStart);
  const mealTypes = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena']; // Orden cambiado

  const handleRecipeSelect = (date: string, mealtype: MealPlanEntry['mealtype'], recipeid: string) => {
    addOrUpdateMealPlanEntry(date, mealtype, recipeid);
  };

  const getRecipeForMeal = (date: string, mealtype: MealPlanEntry['mealtype']) => {
    const entry = mealPlan.find(e => e.date === date && e.mealtype === mealtype);
    return entry ? recipes.find(r => r.id === entry.recipeid) : undefined;
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newDate);
  };

  const handleDownloadPdf = async () => {
    if (!pdfContentRef.current) {
      toast.error("No se pudo encontrar el contenido del plan semanal.");
      return;
    }

    toast.loading("Generando PDF del plan semanal...");
    setShowPdfContent(true); // Hacer el contenido visible

    // Pequeño retraso para asegurar que el DOM se actualice antes de la captura
    setTimeout(async () => {
      try {
        const startDateFormatted = formatDisplayDate(weekDays[0]).replace(/\s/g, '_');
        const endDateFormatted = formatDisplayDate(weekDays[6]).replace(/\s/g, '_');
        const filename = `plan_semanal_${startDateFormatted}_al_${endDateFormatted}.pdf`;

        await html2pdf().from(pdfContentRef.current).set({
          margin: [10, 10, 10, 10], // Top, Left, Bottom, Right
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }, // CAMBIO AQUÍ: 'landscape'
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
      } catch (error) {
        console.error("Error al generar el PDF:", error);
        toast.error("Error al generar el PDF.");
      } finally {
        setShowPdfContent(false); // Ocultar el contenido de nuevo
      }
    }, 50); // Retraso de 50ms
  };

  const userName = user?.user_metadata?.first_name || user?.email || "Usuario";
  const weekRangeText = `Semana del ${formatDisplayDate(weekDays[0])} al ${formatDisplayDate(weekDays[6])}`;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Planificador Semanal de Comidas</h1>

      <div className="flex justify-between items-center mb-6">
        <Button onClick={goToPreviousWeek} variant="outline">Semana Anterior</Button>
        <h2 className="text-xl font-semibold whitespace-nowrap">
          {weekRangeText}
        </h2>
        <Button onClick={goToNextWeek} variant="outline">Semana Siguiente</Button>
      </div>

      <div className="flex justify-end mb-4">
        <Button onClick={handleDownloadPdf}>
          <Download className="mr-2 h-4 w-4" />
          Descargar Plan Semanal PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weekDays.map(day => (
          <Card key={formatDate(day)} className="flex flex-col">
            <CardHeader className="bg-muted/40 border-b">
              <CardTitle className="text-lg">{formatDisplayDate(day)}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-4 space-y-4">
              {mealTypes.map(mealType => {
                const selectedRecipe = getRecipeForMeal(formatDate(day), mealType as MealPlanEntry['mealtype']);
                const availableRecipes = recipes.filter(r => r.mealtype === mealType);

                return (
                  <div key={mealType} className="border rounded-md p-3">
                    <h3 className="font-medium text-md mb-2">{mealType}</h3>
                    <Select
                      onValueChange={(recipeid) => handleRecipeSelect(formatDate(day), mealType as MealPlanEntry['mealtype'], recipeid)}
                      value={selectedRecipe?.id || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Receta" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableRecipes.length > 0 ? (
                          availableRecipes.map(recipe => (
                            <SelectItem key={recipe.id} value={recipe.id}>
                              {recipe.name}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-recipes" disabled>
                            No hay recetas disponibles para este tipo de comida.
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                    {selectedRecipe && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {selectedRecipe.name}
                      </p>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contenido oculto para la generación del PDF */}
      <div ref={pdfContentRef} className={`w-[210mm] p-4 bg-white text-black ${showPdfContent ? 'block' : 'hidden'}`}>
        <h1 className="text-2xl font-bold mb-2 text-center">Plan Semanal de Comidas de {userName}</h1>
        <p className="text-lg text-center mb-4">{weekRangeText}</p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Tipo de Comida</th>
              {weekDays.map(day => (
                <th key={formatDate(day)} className="border p-2 text-left">
                  {formatDayOfWeek(day).charAt(0).toUpperCase() + formatDayOfWeek(day).slice(1).toLowerCase()}
                  <br />
                  <span className="font-normal text-sm">{formatDisplayDate(day)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mealTypes.map(mealType => (
              <tr key={mealType}>
                <td className="border p-2 font-medium">{mealType}</td>
                {weekDays.map(day => {
                  const recipe = getRecipeForMeal(formatDate(day), mealType as MealPlanEntry['mealtype']);
                  return (
                    <td key={`${formatDate(day)}-${mealType}`} className="border p-2 text-sm">
                      {recipe ? recipe.name : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealPlannerPage;