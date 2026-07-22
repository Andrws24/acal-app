import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function AdminProductosPage() {
  const productos = await prisma.producto.findMany({
    include: { categoria: true, imagenes: { orderBy: { orden: "asc" } } },
    orderBy: { creadoEn: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text">Productos</h1>
          <p className="text-text-muted">Gestiona tu catálogo</p>
        </div>
        <Link href="/admin/productos/nuevo" className="btn-primary text-sm px-5 py-2.5">
          <Plus className="w-4 h-4" />
          Nuevo Producto
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="p-4 font-semibold text-text">Producto</th>
              <th className="p-4 font-semibold text-text hidden sm:table-cell">Categoría</th>
              <th className="p-4 font-semibold text-text">Precio</th>
              <th className="p-4 font-semibold text-text hidden md:table-cell">Stock</th>
              <th className="p-4 font-semibold text-text hidden md:table-cell">Estado</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-muted">
                  No hay productos aún. Crea tu primer producto.
                </td>
              </tr>
            ) : (
              productos.map((p) => { const precio = Number(p.precio); return (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="p-4">
                    <Link href={`/admin/productos/${p.id}/editar`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl gradient-pink flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">B</span>
                      </div>
                      <span className="font-medium text-text hover:text-primary transition-colors">{p.nombre}</span>
                    </Link>
                  </td>
                  <td className="p-4 text-text-muted hidden sm:table-cell">{p.categoria?.nombre}</td>
                  <td className="p-4 font-semibold text-primary">
                    ${precio.toLocaleString("es-CO")}
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      p.stock === 0 ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"
                    }`}>
                      {p.stock === 0 ? "Agotado" : `${p.stock} uds`}
                    </span>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      p.activo ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"
                    }`}>
                      {p.activo ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                </tr>
              ); })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
