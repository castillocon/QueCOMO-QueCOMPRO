import React from "react";
import { Link } from "react-router-dom";
import { Home, Utensils, ShoppingCart, Menu, BookOpen, Store } from "lucide-react"; // Importar Store
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, label, isMobile }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
      isMobile ? "w-full" : ""
    )}
  >
    <Icon className="h-4 w-4" />
    {label}
  </Link>
);

const Sidebar: React.FC = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Utensils className="h-6 w-6" />
            <span className="">Planificador de Comidas</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink to="/" icon={Home} label="Planificador Semanal" />
            <NavLink to="/recipes" icon={Utensils} label="Mis Recetas" />
            <NavLink to="/preloaded-recipes" icon={BookOpen} label="Recetas Pre-cargadas" />
            <NavLink to="/shopping-list" icon={ShoppingCart} label="Lista de Compras" />
            <NavLink to="/suppliers" icon={Store} label="Proveedores" /> {/* Nuevo enlace */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export const MobileSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Utensils className="h-6 w-6" />
            <span className="">Planificador de Comidas</span>
          </Link>
          <NavLink to="/" icon={Home} label="Planificador Semanal" isMobile />
          <NavLink to="/recipes" icon={Utensils} label="Mis Recetas" isMobile />
          <NavLink to="/preloaded-recipes" icon={BookOpen} label="Recetas Pre-cargadas" isMobile />
          <NavLink to="/shopping-list" icon={ShoppingCart} label="Lista de Compras" isMobile />
          <NavLink to="/suppliers" icon={Store} label="Proveedores" isMobile /> {/* Nuevo enlace */}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;