import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProductoDetalle } from "./client";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = await prisma.producto.findUnique({
    where: { slug },
  });

  if (!producto) return { title: "Producto no encontrado" };

  return {
    title: `${producto.nombre} | Bekkaglam`,
    description: `${producto.nombre} - $${Number(producto.precio).toLocaleString("es-CO")}`,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = await prisma.producto.findUnique({
    where: { slug },
    include: { categoria: true, imagenes: { orderBy: { orden: "asc" } } },
  });

  if (!producto) notFound();

  const productoJSON = JSON.parse(JSON.stringify(producto));

  return <ProductoDetalle producto={productoJSON} />;
}
