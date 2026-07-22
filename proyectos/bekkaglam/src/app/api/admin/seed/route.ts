import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    const hashedPassword = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: { email, password: hashedPassword, name: "Admin" },
    });
  }

  return NextResponse.json({ success: true });
}
