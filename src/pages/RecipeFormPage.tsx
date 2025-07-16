import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, MinusCircle, ArrowLeft } from 'lucide-react';
import { useMealPlanning } from '@/context/MealPlanningContext';
import { Recipe } from '@/types';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido.'),
  description: z.string().optional(),
  mealtype: z.enum(['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], {
    required_error: 'El tipo de comida es requerido.',
  }),
  ingredients: z.array(
    z.object({
      name: z.string().min(1, 'El nombre del ingrediente es requerido.'),
      quantity: z.string().min(1, 'La cantidad es requerida.'),
      supplier: z.string().optional(), // Nuevo campo para el proveedor
    })
  ).min(1, 'Debe añadir al menos un ingrediente.'),
  instructions: z.array(
    z.string().min(1, 'La instrucción no puede estar vacía.')
  ).min(1, 'Debe añadir al menos una instrucción.'),
});

type RecipeFormValues = z.infer<typeof formSchema>;

const RecipeFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { recipes, addRecipe, updateRecipe, suppliers, isLoadingSuppliers } = useMealPlanning(); // Obtener suppliers

  const isEditing = !!id;
  const currentRecipe = isEditing ? recipes.find(r => r.id === id) : undefined;

  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      mealtype: 'Almuerzo',
      ingredients: [{ name: '', quantity: '', supplier: '' }], // Inicializar con supplier
      instructions: [''],
    },
  });

  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

  const { fields: instructionFields, append: appendInstruction, remove: removeInstruction } = useFieldArray({
    control: form.control,
    name: 'instructions',
  });

  useEffect(() => {
    if (isEditing && currentRecipe) {
      form.reset({
        name: currentRecipe.name,
        description: currentRecipe.description,
        mealtype: currentRecipe.mealtype,
        ingredients: currentRecipe.ingredients,
        instructions: currentRecipe.instructions,
      });
    } else if (!isEditing) {
      form.reset({
        name: '',
        description: '',
        mealtype: 'Almuerzo',
        ingredients: [{ name: '', quantity: '', supplier: '' }],
        instructions: [''],
      });
    }
  }, [isEditing, currentRecipe, form]);

  const onSubmit = (values: RecipeFormValues) => {
    if (isEditing && currentRecipe) {
      const updatedRecipe: Recipe = { ...currentRecipe, ...values };
      updateRecipe(updatedRecipe);
      toast.success('Receta actualizada con éxito.');
    } else {
      addRecipe(values);
      toast.success('Receta añadida con éxito.');
    }
    navigate('/recipes');
  };

  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/recipes">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Recetas
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{isEditing ? 'Editar Receta' : 'Añadir Nueva Receta'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la Receta</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Pollo al Curry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Una breve descripción de la receta..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mealtype"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Comida</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un tipo de comida" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Desayuno">Desayuno</SelectItem>
                        <SelectItem value="Almuerzo">Almuerzo</SelectItem>
                        <SelectItem value="Cena">Cena</SelectItem>
                        <SelectItem value="Merienda">Merienda</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <h2 className="text-xl font-semibold mb-3">Ingredientes</h2>
                {ingredientFields.map((item, index) => (
                  <div key={item.id} className="flex flex-wrap items-end gap-2 mb-3">
                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="flex-1 min-w-[120px]">
                          <FormLabel className={index === 0 ? 'block' : 'sr-only'}>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Harina" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem className="flex-1 min-w-[80px]">
                          <FormLabel className={index === 0 ? 'block' : 'sr-only'}>Cantidad</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 200g" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.supplier`}
                      render={({ field }) => (
                        <FormItem className="flex-1 min-w-[100px]">
                          <FormLabel className={index === 0 ? 'block' : 'sr-only'}>Proveedor (Opcional)</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value === "UNASSIGNED_SUPPLIER" ? undefined : value)}
                            value={field.value || "UNASSIGNED_SUPPLIER"} // Set default to our unassigned value
                            disabled={isLoadingSuppliers}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccionar Proveedor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="UNASSIGNED_SUPPLIER">Sin Proveedor</SelectItem> {/* Opción para no seleccionar proveedor */}
                              {suppliers.length > 0 ? (
                                suppliers.map(supplier => (
                                  <SelectItem key={supplier.id} value={supplier.name}>
                                    {supplier.name}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value="no-suppliers" disabled>
                                  {isLoadingSuppliers ? "Cargando..." : "No hay proveedores. Añade uno en 'Proveedores'."}
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeIngredient(index)}
                      className="shrink-0"
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendIngredient({ name: '', quantity: '', supplier: '' })}
                  className="w-full"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Añadir Ingrediente
                </Button>
                {form.formState.errors.ingredients && (
                  <p className="text-sm font-medium text-destructive mt-2">
                    {form.formState.errors.ingredients.message}
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Instrucciones</h2>
                {instructionFields.map((item, index) => (
                  <div key={item.id} className="flex items-end gap-2 mb-3">
                    <FormField
                      control={form.control}
                      name={`instructions.${index}`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className={index === 0 ? 'block' : 'sr-only'}>Paso {index + 1}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={`Paso ${index + 1}`} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeInstruction(index)}
                      className="shrink-0"
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendInstruction('')}
                  className="w-full"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Añadir Instrucción
                </Button>
                {form.formState.errors.instructions && (
                  <p className="text-sm font-medium text-destructive mt-2">
                    {form.formState.errors.instructions.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                {isEditing ? 'Guardar Cambios' : 'Añadir Receta'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeFormPage;