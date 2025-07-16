import React, { useState, useRef, useMemo } from "react";
    import { Link } from "react-router-dom";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { ArrowLeft, Download, Search } from "lucide-react";
    import { preloadedRecipes } from "@/data/preloadedRecipes";
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
    import { Input } from "@/components/ui/input";
    import { MealPlanEntry, Recipe } from "@/types";
    import { toast } from "sonner";
    // import html2pdf from 'html2pdf.js'; // Eliminar importación directa
    import { useSession } from '@/context/SessionContext';

    const PreloadedRecipeListPage: React.FC = () => {
      const [selectedMealType, setSelectedMealType] = useState<MealPlanEntry['mealtype'] | 'Todos'>('Todos');
      const [searchTerm, setSearchTerm] = useState<string>('');
      const pdfContentRef = useRef<HTMLDivElement>(null);
      const [showPdfContent, setShowPdfContent] = useState(false);
      const { user, profile } = useSession();

      const mealTypeOrder: (MealPlanEntry['mealtype'] | 'Todos')[] = useMemo(() => ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'], []);

      const filteredRecipes = useMemo(() => {
        return preloadedRecipes.filter(recipe => {
          const matchesMealType = selectedMealType === 'Todos' || recipe.mealtype === selectedMealType;
          const lowerCaseSearchTerm = searchTerm.toLowerCase();

          const matchesSearchTerm =
            recipe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            recipe.ingredients.some(ingredient =>
              ingredient.name.toLowerCase().includes(lowerCaseSearchTerm)
            );

          return matchesMealType && matchesSearchTerm;
        }).sort((a, b) => {
          const mealTypeAIndex = mealTypeOrder.indexOf(a.mealtype);
          const mealTypeBIndex = mealTypeOrder.indexOf(b.mealtype);
          if (mealTypeAIndex !== mealTypeBIndex) {
            return mealTypeAIndex - mealTypeBIndex;
          }
          return a.name.localeCompare(b.name);
        });
      }, [selectedMealType, searchTerm, mealTypeOrder]);

      const handleDownloadPdf = async () => { // Hacer la función asíncrona
        if (!pdfContentRef.current) {
          toast.error("No se pudo encontrar el contenido de las recetas.");
          return;
        }

        const loadingToastId = toast.loading("Generando PDF de las recetas...");
        setShowPdfContent(true);

        setTimeout(async () => {
          try {
            const html2pdf = (await import('html2pdf.js')).default; // Carga dinámica
            const filterText = selectedMealType === 'Todos' ? 'Todas' : selectedMealType;
            const filename = `recetas_pre_cargadas_${filterText.toLowerCase().replace(/\s/g, '_')}.pdf`;
            const userName = profile?.username || profile?.first_name || user?.email || "Usuario";

            await html2pdf().from(pdfContentRef.current).set({
              margin: [10, 10, 10, 10],
              filename: filename,
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
              jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
              callback: function (doc) {
                const pageCount = doc.internal.getNumberOfPages();
                for (let i = 1; i <= pageCount; i++) {
                  doc.setPage(i);
                  doc.setFontSize(10);
                  doc.setTextColor(100);
                  doc.text(`🛒🍲 QueComo@QueCompro - ${userName}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
                }
              }
            }).save();
            toast.success("PDF generado con éxito.", { id: loadingToastId });
          } catch (error) {
            console.error("Error al generar el PDF:", error);
            toast.error("Error al generar el PDF.", { id: loadingToastId });
          } finally {
            setShowPdfContent(false);
          }
        }, 50);
      };

      const groupedRecipes = useMemo(() => {
        const groups: { [key: string]: Recipe[] } = {};
        mealTypeOrder.forEach(type => {
          if (type !== 'Todos') {
            groups[type] = filteredRecipes.filter(r => r.mealtype === type);
          }
        });
        return groups;
      }, [filteredRecipes, mealTypeOrder]);

      return (
        <div className="container mx-auto p-4">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Planificador
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-6 text-primary">Recetas Pre-cargadas</h1>

          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <h2 className="text-lg font-semibold whitespace-nowrap">Filtrar por Tipo de Comida:</h2>
              <Select
                onValueChange={(value: MealPlanEntry['mealtype'] | 'Todos') => setSelectedMealType(value)}
                value={selectedMealType}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="Desayuno">Desayuno</SelectItem>
                  <SelectItem value="Almuerzo">Almuerzo</SelectItem>
                  <SelectItem value="Merienda">Merienda</SelectItem>
                  <SelectItem value="Cena">Cena</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nombre o ingrediente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-full"
              />
            </div>
            <Button onClick={handleDownloadPdf} disabled={filteredRecipes.length === 0} className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Descargar Lista PDF
            </Button>
          </div>

          {filteredRecipes.length > 0 ? (
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Nombre</TableHead>
                      <TableHead className="w-[120px]">Tipo de Comida</TableHead>
                      <TableHead>Descripción</TableHead>
                      <TableHead className="w-[100px] text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRecipes.map(recipe => (
                      <TableRow key={recipe.id}>
                        <TableCell className="font-medium">{recipe.name}</TableCell>
                        <TableCell>{recipe.mealtype}</TableCell>
                        <TableCell className="text-muted-foreground line-clamp-2">
                          {recipe.description || "Sin descripción."}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button asChild variant="outline" size="sm">
                            <Link to={`/preloaded-recipes/${recipe.id}`}>Ver</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No hay recetas pre-cargadas disponibles para el tipo de comida seleccionado o el término de búsqueda.
            </p>
          )}

          {/* Contenido oculto para la generación del PDF */}
          <div ref={pdfContentRef} className={`w-[210mm] p-4 bg-white text-black ${showPdfContent ? 'block' : 'hidden'}`}>
            <h1 className="text-2xl font-bold mb-2 text-center">Lista de Recetas Pre-cargadas</h1>
            <p className="text-lg text-center mb-4">
              {selectedMealType === 'Todos' ? 'Todas las Recetas' : `Filtrado por: ${selectedMealType}`}
              {searchTerm && ` (Búsqueda: "${searchTerm}")`}
            </p>
            {mealTypeOrder.map(mealType => {
              if (mealType === 'Todos') return null;
              const recipesForType = groupedRecipes[mealType];
              if (recipesForType && recipesForType.length > 0) {
                return (
                  <div key={mealType} className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">{mealType}</h2>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Nombre</TableHead>
                          <TableHead>Descripción</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recipesForType.map(recipe => (
                          <TableRow key={recipe.id}>
                            <TableCell className="font-medium">{recipe.name}</TableCell>
                            <TableCell className="text-sm">{recipe.description || "Sin descripción."}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                );
              }
              return null;
            })}
            {filteredRecipes.length === 0 && (
              <p className="text-center text-muted-foreground">No hay recetas para mostrar.</p>
            )}
          </div>
        </div>
      );
    };

    export default PreloadedRecipeListPage;