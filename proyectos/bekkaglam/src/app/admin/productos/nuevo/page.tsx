"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function NuevoProductoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoriaId: "",
    tallas: "",
    colores: "",
    stock: "0",
    activo: true,
    destacado: false,
  });

  const categorias = [
    { id: "1", nombre: "Swimwear" },
    { id: "2", nombre: "Sets & Dresses" },
    { id: "3", nombre: "Sportwear" },
    { id: "4", nombre: "Tops" },
    { id: "5", nombre: "Accesorios" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tallas: form.tallas.split(",").map((t) => t.trim()),
          colores: form.colores.split(",").map((c) => c.trim()),
        }),
      });

      if (res.ok) {
        router.push("/admin/productos");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href="/admin/productos" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" />
        Volver a productos
      </Link>

      <h1 className="text-2xl font-bold text-text mb-6">Nuevo Producto</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8">
        <div className="space-y-6 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Nombre del producto</label>
            <input
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder="Ej: Bikini Rayado Rojo/Blanco"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Descripción</label>
            <textarea
              value={form.descripcion}
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 resize-none"
              rows={3}
              placeholder="Descripción del producto..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Precio</label>
              <input
                type="number"
                step="0.01"
                value={form.precio}
                onChange={(e) => setForm({ ...form, precio: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                placeholder="89000"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Categoría</label>
              <select
                value={form.categoriaId}
                onChange={(e) => setForm({ ...form, categoriaId: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                required
              >
                <option value="">Seleccionar...</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Stock</label>
              <input
                type="number"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Tallas (separadas por coma)</label>
              <input
                value={form.tallas}
                onChange={(e) => setForm({ ...form, tallas: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                placeholder="S, M, L"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Colores (separados por coma)</label>
            <input
              value={form.colores}
              onChange={(e) => setForm({ ...form, colores: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder="Rojo, Negro, Blanco"
            />
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.activo}
                onChange={(e) => setForm({ ...form, activo: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-text">Activo</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.destacado}
                onChange={(e) => setForm({ ...form, destacado: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-text">Destacado</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary px-8 py-2.5 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {loading ? "Guardando..." : "Guardar Producto"}
          </button>
        </div>
      </form>
    </div>
  );
}
