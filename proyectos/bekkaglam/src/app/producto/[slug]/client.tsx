"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MessageCircle, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BEKKAGLAM } from "@/lib/constants";

interface Producto {
  id: string;
  codigo: string | null;
  nombre: string;
  slug: string;
  precio: number | string;
  tallas: string;
  colores: string;
  categoria: { nombre: string } | null;
  imagenes: { url: string; orden: number }[];
  stock: number;
}

export function ProductoDetalle({ producto }: { producto: Producto }) {
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const precio = Number(producto.precio);
  const tallasArr = (() => { try { return JSON.parse(producto.tallas); } catch { return []; } })();
  const coloresArr = (() => { try { return JSON.parse(producto.colores); } catch { return []; } })();

  const mensaje = `Hola BEKKAGLAM TEAM,%0AQuiero pedir este producto:%0A- Producto: ${producto.nombre}%0A- Código: ${producto.codigo || "N/A"}%0A- Talla: ${talla || "No especificada"}%0A- Color: ${color || "No especificado"}%0A- Cantidad: ${cantidad}%0A- Precio: $${precio.toLocaleString("es-CO")}%0ALink: https://bekkaglam.com/producto/${producto.slug}`;

  const whatsappLink = `https://wa.me/${BEKKAGLAM.whatsapp}?text=${mensaje}`;

  const imagenes = producto.imagenes.length > 0
    ? producto.imagenes
    : producto.codigo
      ? [{ url: `/inventario/${producto.codigo}.svg`, orden: 0 }]
      : [];

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/tienda"
            className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver a tienda
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}>
              <div className="aspect-[4/5] rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden">
                {imagenes.length > 0 ? (
                  <img
                    src={imagenes[0].url}
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full gradient-pink" />
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              {producto.categoria && (
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider">
                  {producto.categoria.nombre}
                </span>
              )}
              <h1 className="text-2xl md:text-3xl font-bold font-heading text-text mt-1">
                {producto.nombre}
              </h1>

              {producto.codigo && (
                <span className="text-xs text-text-muted mt-1">Código: {producto.codigo}</span>
              )}

              <p className="text-2xl font-bold text-primary mt-4">
                ${precio.toLocaleString("es-CO")}
              </p>

              {producto.stock > 0 ? (
                <p className="text-xs text-green-600 mt-1">En stock ({producto.stock} disponibles)</p>
              ) : (
                <p className="text-xs text-red-500 mt-1">Agotado</p>
              )}

              {tallasArr.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-text mb-2">Talla</h4>
                  <div className="flex flex-wrap gap-2">
                    {tallasArr.map((t: string) => (
                      <button
                        key={t}
                        onClick={() => setTalla(t)}
                        className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                          talla === t
                            ? "bg-primary text-white"
                            : "bg-white border border-primary-light text-text-muted hover:border-primary/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {coloresArr.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-text mb-2">Color</h4>
                  <div className="flex flex-wrap gap-2">
                    {coloresArr.map((c: string) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          color === c
                            ? "bg-primary text-white"
                            : "bg-white border border-primary-light text-text-muted hover:border-primary/30"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-text mb-2">Cantidad</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-primary-light flex items-center justify-center hover:border-primary/30"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">{cantidad}</span>
                  <button
                    onClick={() => setCantidad(cantidad + 1)}
                    className="w-9 h-9 rounded-xl bg-white border border-primary-light flex items-center justify-center hover:border-primary/30"
                  >
                    +
                  </button>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 justify-center text-base py-3"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar por WhatsApp
              </a>
              <p className="text-xs text-text-muted text-center mt-2">
                Te atendemos por mensaje, sin llamadas
              </p>

              <button className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full border border-primary-light text-text-muted hover:text-primary hover:border-primary/30 transition-all">
                <Heart className="w-4 h-4" />
                Añadir a favoritos
              </button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
