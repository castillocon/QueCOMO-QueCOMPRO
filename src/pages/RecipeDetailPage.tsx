import React, { useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, Download } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';
import { useSession } from '@/context/SessionContext';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { recipesById } = useMealPlanning(); // Usar el mapa de recetas
  const { user, profile } = useSession();
  const recipe = useMemo(() => id ? recipesById.get(id) : undefined, [id, recipesById]); // Obtener receta del mapa
  const recipeContentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    if (recipeContentRef.current && recipe) {
      toast.loading("Generando PDF de la receta...");
      const filename = `receta_${recipe.name.replace(/\s/g, '_')}.pdf`;
      const userName = profile?.username || profile?.first_name || user?.email || "Usuario";

      html2pdf().from(recipeContentRef.current).set({
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
      toast.success("PDF generado con éxito.");
    } else {
      toast.error("No se pudo encontrar el contenido de la receta para descargar.");
    }
  };

  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Receta no encontrada</h1>
        <Button asChild>
          <Link to="/recipes">Volver a Recetas</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link to="/recipes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Recetas
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button onClick={handleDownloadPdf} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Descargar PDF
          </Button>
          <Button asChild>
            <Link to={`/recipes/${recipe.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Editar Receta
            </Link>
          </Button>
        </div>
      </div>

      <div ref={recipeContentRef} className="p-4 bg-white text-black">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-primary">{recipe.name}</CardTitle>
            <CardDescription className="text-lg">{recipe.mealtype}</CardDescription>
            {recipe.description && <p className="text-muted-foreground mt-2">{recipe.description}</p>}
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            {recipe.imageUrl && (
              <div className="md:col-span-2 flex justify-center mb-4">
                <img src={recipe.imageUrl} alt={recipe.name} className="max-w-full h-auto max-h-96 object-contain rounded-md shadow-md" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Ingredientes</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-lg">
                    <span className="font-medium">{ingredient.quantity}</span> de {ingredient.name}
                    {ingredient.supplier && <span className="text-sm text-gray-600"> (Proveedor: {ingredient.supplier})</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Instrucciones</h2>
              <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-lg">{instruction}</li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeDetailPage;