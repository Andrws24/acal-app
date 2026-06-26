import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

const modules = [
  { name: "Clientes", count: 0, href: "/admin/clientes" },
  { name: "Servicios", count: 0, href: "/admin/servicios" },
  { name: "Cotizaciones", count: 0, href: "/admin/cotizaciones" },
  { name: "Facturas", count: 0, href: "/admin/facturas" },
  { name: "Agenda", count: 0, href: "/admin/agenda" },
  { name: "Tickets", count: 0, href: "/admin/tickets" },
  { name: "Inventario", count: 0, href: "/admin/inventario" },
  { name: "Blog", count: 0, href: "/admin/blog" },
  { name: "Usuarios", count: 0, href: "/admin/usuarios" },
];

export default function AdminPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text">Dashboard</h1>
        <p className="text-text/60 mt-1">
          Panel de administración de ACAL
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod) => (
          <a key={mod.name} href={mod.href}>
            <Card hover className="h-full">
              <CardContent>
                <p className="text-sm text-text/60">{mod.name}</p>
                <p className="text-2xl font-bold text-text mt-1">{mod.count}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
