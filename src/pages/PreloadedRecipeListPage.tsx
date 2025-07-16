import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { preloadedRecipes } from "@/data/preloadedRecipes";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MealPlanEntry } from "@/types"; // Importar MealPlanEntry para los tipos de comida

const PreloadedRecipeListPage: React.FC = () => {
  const [selectedMealType, setSelectedMealType] = useState<MealPlanEntry['mealtype'] | 'Todos'>('Todos');

  const filteredRecipes = preloadedRecipes.filter(recipe =>
    selectedMealType === 'Todos' || recipe.mealtype === selectedMealType
  );

  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Planificador
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-6 text-primary">Recetas Pre-cargadas</h1>

      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold">Filtrar por Tipo de Comida:</h2>
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
          No hay recetas pre-cargadas disponibles para el tipo de comida seleccionado.
        </p>
      )}
    </div>
  );
};

export default PreloadedRecipeListPage;