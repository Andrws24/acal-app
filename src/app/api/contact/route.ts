import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "ACAL Contacto <onboarding@resend.dev>",
      to: "soporte.acal@gmail.com",
      replyTo: email,
      subject: `[ACAL] ${subject || "Mensaje desde la web"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2F8DF3;">Nuevo mensaje desde la web</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Necesidad:</strong> ${subject || "No especificada"}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; border-left: 3px solid #2F8DF3;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr style="border: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #999; font-size: 12px;">Mensaje enviado desde el formulario de contacto de ACAL</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el correo" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
