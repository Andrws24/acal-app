import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const categorias = await prisma.categoria.findMany({
    include: { _count: { select: { productos: true } } },
    orderBy: { nombre: "asc" },
  });
  return NextResponse.json(categorias);
}

export async function POST(request: Request) {
  const body = await request.json();
  const slug = body.nombre
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const categoria = await prisma.categoria.create({
    data: { nombre: body.nombre, slug },
  });
  return NextResponse.json(categoria, { status: 201 });
}
