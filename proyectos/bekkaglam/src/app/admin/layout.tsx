import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        <aside className="w-64 bg-white border-r hidden lg:block">
          <div className="p-6">
            <Link href="/admin" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg gradient-pink flex items-center justify-center border border-primary/20">
                <span className="text-sm font-bold text-primary">B</span>
              </div>
              <span className="text-sm font-bold text-text">Bekkaglam Admin</span>
            </Link>
            <nav className="space-y-1">
              <a href="/admin" className="flex items-center gap-2 px-4 py-2.5 text-sm text-text rounded-lg bg-primary-light/30 font-medium">Dashboard</a>
              <a href="/admin/inventario" className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-muted rounded-lg hover:bg-primary-light/20">Inventario</a>
              <a href="/admin/productos" className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-muted rounded-lg hover:bg-primary-light/20">Productos</a>
              <a href="/admin/categorias" className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-muted rounded-lg hover:bg-primary-light/20">Categorías</a>
              <hr className="my-3 border-primary-light/50" />
              <a href="/" className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-muted rounded-lg hover:bg-primary-light/20">Ver tienda</a>
            </nav>
            <div className="absolute bottom-6 left-6 right-6">
              <form action="/api/auth/signout" method="POST">
                <button type="submit" className="w-full text-left px-4 py-2.5 text-sm text-text-muted rounded-lg hover:bg-red-50 hover:text-red-500">Cerrar sesión</button>
              </form>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
