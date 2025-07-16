import React, { useEffect, useState } from 'react';
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
import { PlusCircle, MinusCircle, ArrowLeft, XCircle } from 'lucide-react';
import { useMealPlanning } from '@/context/MealPlanningContext';
import { Recipe, Ingredient } from '@/types';
import { toast } from 'sonner';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Definir el esquema de Ingredient por separado
const ingredientSchema = z.object({
  name: z.string().nonempty('El nombre del ingrediente es requerido.'),
  quantity: z.string().nonempty('La cantidad es requerida.'),
  supplier: z.string().optional(),
});

const formSchema = z.object({
  name: z.string().nonempty('El nombre es requerido.'),
  description: z.string().optional(),
  mealtype: z.enum(['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], {
    required_error: 'El tipo de comida es requerido.',
  }),
  ingredients: z.array(ingredientSchema).min(1, 'Debe añadir al menos un ingrediente.'),
  instructions: z.array(
    z.string().nonempty('La instrucción no puede estar vacía.')
  ).min(1, 'Debe añadir al menos una instrucción.'),
  image: z.any()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, `El tamaño máximo de la imagen es 5MB.`)
    .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), "Solo se permiten imágenes .jpg, .jpeg, .png y .webp.")
    .optional(),
  imageUrl: z.string().optional(), // Para mantener la URL existente si no se sube una nueva imagen
});

type RecipeFormValues = z.infer<typeof formSchema>;

const RecipeFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { recipes, addRecipe, updateRecipe, suppliers, isLoadingSuppliers } = useMealPlanning();

  const isEditing = !!id;
  const currentRecipe = isEditing ? recipes.find(r => r.id === id) : undefined;

  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      mealtype: 'Almuerzo',
      ingredients: [{ name: '', quantity: '', supplier: '' }] as Ingredient[], // Explicitly cast for clarity
      instructions: [''],
      imageUrl: '', // Initialize imageUrl
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

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (isEditing && currentRecipe) {
      form.reset({
        name: currentRecipe.name,
        description: currentRecipe.description,
        mealtype: currentRecipe.mealtype,
        ingredients: currentRecipe.ingredients,
        instructions: currentRecipe.instructions,
        imageUrl: currentRecipe.imageUrl,
      });
      setImagePreview(currentRecipe.imageUrl || null);
      setSelectedFile(null); // Clear selected file on edit load
    } else if (!isEditing) {
      form.reset({
        name: '',
        description: '',
        mealtype: 'Almuerzo',
        ingredients: [{ name: '', quantity: '', supplier: '' }] as Ingredient[], // Explicitly cast for clarity
        instructions: [''],
        imageUrl: '',
      });
      setImagePreview(null);
      setSelectedFile(null);
    }
  }, [isEditing, currentRecipe, form]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      form.setValue('image', file); // Set the file in the form state for validation
    } else {
      setSelectedFile(null);
      setImagePreview(currentRecipe?.imageUrl || null); // Revert to existing image if no new file selected
      form.setValue('image', undefined); // Clear the file from form state
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    form.setValue('image', null); // Indicate that the image should be removed
    form.setValue('imageUrl', undefined); // Clear the existing URL
  };

  const onSubmit = async (values: RecipeFormValues) => {
    const recipeData = {
      name: values.name,
      description: values.description,
      mealtype: values.mealtype,
      ingredients: values.ingredients as Ingredient[], // Explicit cast here
      instructions: values.instructions,
    };

    if (isEditing && currentRecipe) {
      await updateRecipe(
        { ...currentRecipe, ...recipeData, imageUrl: values.imageUrl } as Recipe, // Explicit cast here
        selectedFile === null && currentRecipe.imageUrl ? null : selectedFile // Pass null if image removed, File if new, undefined if no change
      );
    } else {
      await addRecipe(recipeData, selectedFile || undefined);
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
          <CardTitle className="text-3xl text-primary">{isEditing ? 'Editar Receta' : 'Añadir Nueva Receta'}</CardTitle>
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

              {/* Campo de subida de imagen */}
              <FormItem>
                <FormLabel>Imagen de la Receta (Opcional)</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept={ACCEPTED_IMAGE_TYPES.join(',')}
                    onChange={handleFileChange}
                  />
                </FormControl>
                {imagePreview && (
                  <div className="relative w-48 h-48 mt-2">
                    <img src={imagePreview} alt="Previsualización de la receta" className="w-full h-full object-cover rounded-md" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 rounded-full"
                      onClick={handleRemoveImage}
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <FormMessage>{form.formState.errors.image?.message as string}</FormMessage>
              </FormItem>

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
                            value={field.value || "UNASSIGNED_SUPPLIER"}
                            disabled={isLoadingSuppliers}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccionar Proveedor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="UNASSIGNED_SUPPLIER">Sin Proveedor</SelectItem>
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