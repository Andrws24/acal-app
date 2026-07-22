import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const productos = await prisma.producto.findMany({
    include: { categoria: true, imagenes: { orderBy: { orden: "asc" } } },
    orderBy: { creadoEn: "desc" },
  });
  return NextResponse.json(productos);
}

export async function POST(request: Request) {
  const body = await request.json();

  const slug = body.nombre
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const tallas = Array.isArray(body.tallas) ? JSON.stringify(body.tallas) : body.tallas || "[]";
  const colores = Array.isArray(body.colores) ? JSON.stringify(body.colores) : body.colores || "[]";

  const producto = await prisma.producto.create({
    data: {
      nombre: body.nombre,
      slug,
      descripcion: body.descripcion || "",
      precio: parseFloat(body.precio),
      categoriaId: body.categoriaId,
      tallas,
      colores,
      stock: parseInt(body.stock) || 0,
      activo: body.activo ?? true,
      destacado: body.destacado ?? false,
    },
    include: { categoria: true },
  });

  return NextResponse.json(producto, { status: 201 });
}
