import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/app/tienda/client";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Explora todos nuestros productos. Sets, blusas, vestidos y más.",
};

export default async function TiendaPage() {
  const productos = await prisma.producto.findMany({
    where: { activo: true },
    include: { categoria: true, imagenes: { orderBy: { orden: "asc" } } },
    orderBy: { creadoEn: "desc" },
  });

  const categorias = await prisma.categoria.findMany({
    orderBy: { nombre: "asc" },
  });

  const productosJSON = JSON.parse(JSON.stringify(productos));
  const categoriasJSON = JSON.parse(JSON.stringify(categorias));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Container productos={productosJSON} categorias={categoriasJSON} />
      </main>
      <Footer />
    </>
  );
}
