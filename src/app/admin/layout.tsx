import type { Metadata } from "next";
import type React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const adminModules = [
  { name: "Clientes", href: "/admin/clientes" },
  { name: "Servicios", href: "/admin/servicios" },
  { name: "Cotizaciones", href: "/admin/cotizaciones" },
  { name: "Facturas", href: "/admin/facturas" },
  { name: "Agenda", href: "/admin/agenda" },
  { name: "Tickets de Soporte", href: "/admin/tickets" },
  { name: "Inventario", href: "/admin/inventario" },
  { name: "Blog", href: "/admin/blog" },
  { name: "Usuarios", href: "/admin/usuarios" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-white border-r border-gray/40 hidden lg:block">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <Image
                src="/images/logo-icon.png"
                alt="ACAL logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-text">Admin ACAL</span>
            </div>
            <nav className="space-y-1">
              {adminModules.map((mod) => (
                <a
                  key={mod.name}
                  href={mod.href}
                  className="block px-4 py-2.5 text-sm text-text/70 hover:text-text hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {mod.name}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
