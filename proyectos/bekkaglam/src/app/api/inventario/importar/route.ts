import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No se envió archivo" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const XLSX = await import("xlsx");
    const workbook = XLSX.read(bytes, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet) as Array<{
      Código?: string;
      Referencia?: string;
      Categoría?: string;
      Color?: string;
      Precio?: number;
      "Total Unidades"?: number;
      TALLA?: string;
    }>;

    let creados = 0;
    let actualizados = 0;
    let errores: string[] = [];

    for (const row of data) {
      try {
        const codigo = row["Código"];
        const referencia = row["Referencia"]?.trim();
        const categoriaNombre = row["Categoría"]?.trim() || "Sin categoría";
        const color = row["Color"]?.trim() || "";
        const precio = row["Precio"] || 0;
        const stock = row["Total Unidades"] || 0;
        const talla = row["TALLA"]?.trim() || "";

        if (!codigo || !referencia) {
          errores.push(`Fila sin código o referencia: ${JSON.stringify(row)}`);
          continue;
        }

        const slug = referencia
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        const categoriaSlug = categoriaNombre
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        const categoria = await prisma.categoria.upsert({
          where: { slug: categoriaSlug },
          update: {},
          create: {
            nombre: categoriaNombre,
            slug: categoriaSlug,
          },
        });

        const tallasJSON = talla ? JSON.stringify(talla.split(",").map((t) => t.trim())) : "[]";
        const coloresJSON = color ? JSON.stringify([color]) : "[]";

        const existente = await prisma.producto.findUnique({
          where: { codigo },
        });

        if (existente) {
          await prisma.producto.update({
            where: { codigo },
            data: {
              referencia,
              nombre: referencia,
              slug: `${slug}-${codigo}`,
              precio,
              stock,
              categoriaId: categoria.id,
              tallas: tallasJSON,
              colores: coloresJSON,
            },
          });
          actualizados++;
        } else {
          await prisma.producto.create({
            data: {
              codigo,
              referencia,
              nombre: referencia,
              slug: `${slug}-${codigo}`,
              precio,
              stock,
              categoriaId: categoria.id,
              tallas: tallasJSON,
              colores: coloresJSON,
            },
          });
          creados++;
        }
      } catch (error) {
        errores.push(`Error en fila: ${JSON.stringify(row)} - ${error}`);
      }
    }

    return NextResponse.json({
      success: true,
      total: data.length,
      creados,
      actualizados,
      errores: errores.length > 0 ? errores : undefined,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al procesar archivo" },
      { status: 500 }
    );
  }
}
