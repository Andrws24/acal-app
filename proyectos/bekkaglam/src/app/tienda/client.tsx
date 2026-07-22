"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface Producto {
  id: string;
  codigo: string | null;
  nombre: string;
  slug: string;
  precio: number | string;
  colores: string;
  tallas: string;
  categoria: { nombre: string; slug: string } | null;
  imagenes: { url: string; orden: number }[];
}

interface Categoria {
  id: string;
  nombre: string;
  slug: string;
}

export function Container({ productos, categorias }: { productos: Producto[]; categorias: Categoria[] }) {
  const [search, setSearch] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const filtered = productos.filter((p) => {
    const coloresArr = (() => { try { return JSON.parse(p.colores); } catch { return []; } })();
    const matchSearch =
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.codigo?.toLowerCase().includes(search.toLowerCase()) ||
      coloresArr.some((c: string) => c.toLowerCase().includes(search.toLowerCase()));
    const matchCategory =
      !categoriaSeleccionada || p.categoria?.slug === categoriaSeleccionada;
    return matchSearch && matchCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading text-text">Tienda</h1>
        <p className="text-text-muted mt-1">Encuentra tu look perfecto</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, código o color..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-primary-light bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          <button
            onClick={() => setCategoriaSeleccionada("")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              !categoriaSeleccionada
                ? "bg-primary text-white"
                : "bg-white border border-primary-light text-text-muted hover:border-primary/30"
            }`}
          >
            Todas
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategoriaSeleccionada(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                categoriaSeleccionada === cat.slug
                  ? "bg-primary text-white"
                  : "bg-white border border-primary-light text-text-muted hover:border-primary/30"
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-lg font-semibold text-text mb-1">No encontramos nada</h3>
          <p className="text-text-muted text-sm">Intenta con otra búsqueda o categoría</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product, i) => {
            const precio = Number(product.precio);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  href={`/producto/${product.slug}`}
                  className="card-product block group"
                >
                  <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    {product.imagenes.length > 0 ? (
                      <img
                        src={product.imagenes[0].url}
                        alt={product.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : product.codigo ? (
                      <img
                        src={`/inventario/${product.codigo}.svg`}
                        alt={product.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full gradient-pink" />
                    )}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    {product.codigo && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/90 text-[10px] font-medium text-text-muted">
                        {product.codigo}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-text-muted uppercase tracking-wide">
                      {product.categoria?.nombre}
                    </p>
                    <h3 className="font-semibold text-sm text-text group-hover:text-primary transition-colors line-clamp-1 mt-0.5">
                      {product.nombre}
                    </h3>
                    <p className="text-sm font-bold text-primary mt-1">
                      ${precio.toLocaleString("es-CO")}
                    </p>
                    {product.colores && (() => { try { const c = JSON.parse(product.colores); return c.length > 0 && (
                      <p className="text-[10px] text-text-muted mt-1">
                        {c.join(" · ")}
                      </p>
                    ); } catch { return null; } })()}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
