"use client";

import Link from "next/link";
import { ArrowRight, Heart, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CATEGORIES } from "@/lib/constants";

const featured = [
  { name: "Bikini Rayado Rojo/Blanco", price: "$89.000", slug: "bikini-rayado" },
  { name: "Set Deportivo Rosa", price: "$120.000", slug: "set-deportivo-rosa" },
  { name: "Top Crochet Blanco", price: "$65.000", slug: "top-crochet" },
  { name: "Vestido Corto Flores", price: "$95.000", slug: "vestido-flores" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-bg to-primary-light/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  Nueva colección
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading leading-[1.1]"
              >
                <span className="text-gradient">La tienda fav</span>
                <br />
                <span className="text-text">de las girls</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg text-text-muted max-w-lg"
              >
                Tú eres tu mayor inversión. Sé linda y luce linda.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/tienda" className="btn-primary text-base px-8 py-3">
                  Comprar Ahora
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/tienda?categoria=swimwear" className="btn-outline text-base px-8 py-3">
                  Ver Swimwear
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold font-heading text-text">Categorías</h2>
              <p className="mt-2 text-text-muted">Encuentra lo que buscas</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/tienda?categoria=${cat.slug}`}
                    className="card-product block p-6 text-center group"
                  >
                    <span className="font-semibold text-sm text-text group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold font-heading text-text">Nuevos Ingresos</h2>
                <p className="text-text-muted">Lo más nuevo para ti</p>
              </div>
              <Link href="/tienda" className="text-sm font-medium text-primary hover:underline hidden sm:flex items-center gap-1">
                Ver todo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featured.map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={`/producto/${product.slug}`} className="card-product block group">
                    <div className="aspect-[3/4] gradient-pink flex items-center justify-center relative overflow-hidden">
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm text-text group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm font-bold text-primary mt-1">{product.price}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-heading text-text mb-2">
              Síguenos en Instagram
            </h2>
            <p className="text-text-muted mb-6">
              Mira nuestros looks y novedades en @bekkaglam
            </p>
            <a
              href="https://instagram.com/bekkaglam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Camera className="w-4 h-4" />
              @bekkaglam
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
