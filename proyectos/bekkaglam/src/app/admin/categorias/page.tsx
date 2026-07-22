import { prisma } from "@/lib/prisma";
import { Plus, Pencil } from "lucide-react";

export default async function AdminCategoriasPage() {
  const categorias = await prisma.categoria.findMany({
    include: { _count: { select: { productos: true } } },
    orderBy: { nombre: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text">Categorías</h1>
          <p className="text-text-muted">Organiza tus productos</p>
        </div>
      </div>

      {categorias.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-text-muted">
          No hay categorías aún.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorias.map((cat: { id: string; nombre: string; _count: { productos: number } }) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-text text-sm">{cat.nombre}</p>
                <p className="text-xs text-text-muted">{cat._count.productos} productos</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
