import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const producto = await prisma.producto.findUnique({
    where: { id },
    include: { categoria: true, imagenes: { orderBy: { orden: "asc" } } },
  });
  if (!producto) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }
  return NextResponse.json(producto);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const data: Record<string, unknown> = {
    nombre: body.nombre,
    descripcion: body.descripcion,
    precio: body.precio ? parseFloat(body.precio) : undefined,
    categoriaId: body.categoriaId,
    stock: body.stock !== undefined ? parseInt(body.stock) : undefined,
    activo: body.activo,
    destacado: body.destacado,
  };

  if (body.tallas !== undefined) {
    data.tallas = Array.isArray(body.tallas) ? JSON.stringify(body.tallas) : body.tallas;
  }
  if (body.colores !== undefined) {
    data.colores = Array.isArray(body.colores) ? JSON.stringify(body.colores) : body.colores;
  }

  const producto = await prisma.producto.update({
    where: { id },
    data,
    include: { categoria: true },
  });
  return NextResponse.json(producto);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.producto.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
