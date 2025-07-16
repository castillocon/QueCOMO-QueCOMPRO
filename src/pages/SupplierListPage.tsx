import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowLeft, Trash2, Edit } from "lucide-react";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Supplier } from "@/types"; // Importar Supplier

const supplierFormSchema = z.object({
  name: z.string().min(1, "El nombre es requerido."),
  description: z.string().optional(),
}); // Eliminado 'satisfies z.ZodType<Omit<Supplier, 'id'>>'

type SupplierFormValues = z.infer<typeof supplierFormSchema>;

const SupplierListPage: React.FC = () => {
  const { suppliers, addSupplier, updateSupplier, deleteSupplier, isLoadingSuppliers } = useMealPlanning();
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [currentSupplier, setCurrentSupplier] = React.useState<any>(null);

  const addForm = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const editForm = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  React.useEffect(() => {
    if (isEditDialogOpen && currentSupplier) {
      editForm.reset({
        name: currentSupplier.name,
        description: currentSupplier.description || "",
      });
    }
  }, [isEditDialogOpen, currentSupplier, editForm]);

  const handleAddSubmit = async (values: SupplierFormValues) => {
    await addSupplier(values);
    setIsAddDialogOpen(false);
    addForm.reset();
  };

  const handleEditSubmit = async (values: SupplierFormValues) => {
    if (currentSupplier) {
      await updateSupplier({ ...currentSupplier, ...values });
      setIsEditDialogOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteSupplier(id);
  };

  if (isLoadingSuppliers) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>Cargando proveedores...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Planificador
        </Link>
      </Button>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Mis Proveedores</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Añadir Proveedor
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Proveedor</DialogTitle>
            </DialogHeader>
            <Form {...addForm}>
              <form onSubmit={addForm.handleSubmit(handleAddSubmit)} className="space-y-4">
                <FormField
                  control={addForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Proveedor</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Supermercado A" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción (Opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Tienda de comestibles local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit">Añadir Proveedor</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {suppliers.length > 0 ? (
          suppliers.map(supplier => (
            <Card key={supplier.id}>
              <CardHeader>
                <CardTitle>{supplier.name}</CardTitle>
                {supplier.description && <CardDescription>{supplier.description}</CardDescription>}
              </CardHeader>
              <CardContent className="flex justify-end gap-2">
                <Dialog open={isEditDialogOpen && currentSupplier?.id === supplier.id} onOpenChange={setIsEditDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => setCurrentSupplier(supplier)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Editar Proveedor</DialogTitle>
                    </DialogHeader>
                    <Form {...editForm}>
                      <form onSubmit={editForm.handleSubmit(handleEditSubmit)} className="space-y-4">
                        <FormField
                          control={editForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre del Proveedor</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={editForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Descripción (Opcional)</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" variant="outline">Cancelar</Button>
                          </DialogClose>
                          <Button type="submit">Guardar Cambios</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. Esto eliminará permanentemente el proveedor
                        y cualquier referencia a él en tus recetas podría quedar sin proveedor.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(supplier.id)}>
                        Eliminar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No hay proveedores. ¡Añade uno nuevo para organizar tus compras!
          </p>
        )}
      </div>
    </div>
  );
};

export default SupplierListPage;