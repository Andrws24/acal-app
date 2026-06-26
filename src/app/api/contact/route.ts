import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos requeridos deben estar completos" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje recibido correctamente" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
