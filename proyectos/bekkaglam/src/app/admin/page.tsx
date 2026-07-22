import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [productos, categorias, inventoryCount] = await Promise.all([
    prisma.producto.findMany(),
    prisma.categoria.findMany(),
    prisma.producto.count({ where: { codigo: { not: null } } }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-1">Dashboard</h1>
      <p className="text-text-muted mb-8">Gestiona tu tienda Bekkaglam</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/admin/inventario" className="block bg-white rounded-2xl p-6 border border-primary-light/50 hover:shadow-md transition-shadow">
          <p className="text-sm text-text-muted">Inventario</p>
          <p className="text-3xl font-bold text-primary mt-1">{inventoryCount}</p>
          <p className="text-xs text-text-muted mt-1">productos importados</p>
        </Link>
        <Link href="/admin/productos" className="block bg-white rounded-2xl p-6 border border-primary-light/50 hover:shadow-md transition-shadow">
          <p className="text-sm text-text-muted">Productos</p>
          <p className="text-3xl font-bold text-primary mt-1">{productos.length}</p>
          <p className="text-xs text-text-muted mt-1">en total</p>
        </Link>
        <Link href="/admin/categorias" className="block bg-white rounded-2xl p-6 border border-primary-light/50 hover:shadow-md transition-shadow">
          <p className="text-sm text-text-muted">Categorías</p>
          <p className="text-3xl font-bold text-primary mt-1">{categorias.length}</p>
          <p className="text-xs text-text-muted mt-1">activas</p>
        </Link>
      </div>
    </div>
  );
}
