import React, { useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusCircle, Download } from "lucide-react";
import { preloadedSuppliers } from "@/data/preloadedSuppliers";
import { useMealPlanning } from '@/context/MealPlanningContext';
import { toast } from "sonner";
import { useSession } from '@/context/SessionContext';

const PreloadedSupplierDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addSupplier } = useMealPlanning();
  const { user, profile } = useSession();
  const supplier = useMemo(() => preloadedSuppliers.find(s => s.id === id), [id]);
  const supplierContentRef = useRef<HTMLDivElement>(null);

  const handleAddSupplierToMySuppliers = async () => {
    if (supplier) {
      const { id, ...supplierToAdd } = supplier;
      await addSupplier(supplierToAdd);
    } else {
      toast.error("No se pudo encontrar el proveedor para añadir.");
    }
  };

  const handleDownloadPdf = async () => {
    if (supplierContentRef.current && supplier) {
      const loadingToastId = toast.loading("Generando PDF del proveedor...");
      try {
        const html2pdf = (await import('html2pdf.js')).default;
        const filename = `proveedor_${supplier.name.replace(/\s/g, '_')}.pdf`;
        const userName = profile?.username || profile?.first_name || user?.email || "Usuario";

        await html2pdf().from(supplierContentRef.current).set({
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
      }
    } else {
      toast.error("No se pudo encontrar el contenido del proveedor para descargar.");
    }
  };

  if (!supplier) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Proveedor pre-cargado no encontrado</h1>
        <Button asChild>
          <Link to="/preloaded-suppliers">Volver a Proveedores Pre-cargados</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link to="/preloaded-suppliers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Proveedores Pre-cargados
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button onClick={handleAddSupplierToMySuppliers}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir a Mis Proveedores
          </Button>
          <Button onClick={handleDownloadPdf} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Descargar PDF
          </Button>
        </div>
      </div>

      <div ref={supplierContentRef} className="p-4 bg-white text-black">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-primary">{supplier.name}</CardTitle>
            {supplier.description && <CardDescription className="text-lg mt-2">{supplier.description}</CardDescription>}
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Detalles del Proveedor</h2>
            <p className="text-lg">
              {supplier.description || "Este proveedor no tiene una descripción detallada."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreloadedSupplierDetailPage;