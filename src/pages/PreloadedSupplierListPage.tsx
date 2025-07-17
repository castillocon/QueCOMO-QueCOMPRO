import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Download } from "lucide-react";
import { preloadedSuppliers } from "@/data/preloadedSuppliers";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { useSession } from '@/context/SessionContext';

const PreloadedSupplierListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const pdfContentRef = useRef<HTMLDivElement>(null);
  const [showPdfContent, setShowPdfContent] = useState(false);
  const { user, profile } = useSession();

  const filteredSuppliers = useMemo(() => {
    return preloadedSuppliers.filter(supplier => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        supplier.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        (supplier.description && supplier.description.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

  const handleDownloadPdf = async () => {
    if (!pdfContentRef.current) {
      toast.error("No se pudo encontrar el contenido de los proveedores.");
      return;
    }

    const loadingToastId = toast.loading("Generando PDF de la lista de proveedores...");
    setShowPdfContent(true);

    setTimeout(async () => {
      try {
        const html2pdf = (await import('html2pdf.js')).default;
        const filename = `proveedores_pre_cargados.pdf`;
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

  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Planificador
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-6 text-primary">Proveedores Pre-cargados</h1>

      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-full"
          />
        </div>
        <Button onClick={handleDownloadPdf} disabled={filteredSuppliers.length === 0} className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Descargar Lista PDF
        </Button>
      </div>

      {filteredSuppliers.length > 0 ? (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Nombre</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="w-[100px] text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSuppliers.map(supplier => (
                  <TableRow key={supplier.id}>
                    <TableCell className="font-medium">{supplier.name}</TableCell>
                    <TableCell className="text-muted-foreground line-clamp-2">
                      {supplier.description || "Sin descripción."}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/preloaded-suppliers/${supplier.id}`}>Ver</Link>
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
          No hay proveedores pre-cargados que coincidan con tu búsqueda.
        </p>
      )}

      {/* Contenido oculto para la generación del PDF */}
      <div ref={pdfContentRef} className={`w-[210mm] p-4 bg-white text-black ${showPdfContent ? 'block' : 'hidden'}`}>
        <h1 className="text-2xl font-bold mb-2 text-center">Lista de Proveedores Pre-cargados</h1>
        <p className="text-lg text-center mb-4">
          {searchTerm && ` (Búsqueda: "${searchTerm}")`}
        </p>
        {filteredSuppliers.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Nombre</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map(supplier => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.name}</TableCell>
                  <TableCell className="text-sm">{supplier.description || "Sin descripción."}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-muted-foreground">No hay proveedores para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default PreloadedSupplierListPage;