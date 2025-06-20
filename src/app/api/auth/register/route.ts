import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash } from 'bcryptjs';
import { Role } from '@prisma/client'; // Asegura que usas el enum correcto

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'El usuario ya existe' }, { status: 409 });
    }

    // Hash de la contraseña
    const hashedPassword = await hash(password, 10);

    // Convertir el rol a minúsculas y forzar el tipo Role
    const userRole = role.toLowerCase() as Role;

    // Crear nuevo usuario
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: userRole,
        description: '', // puedes adaptarlo si capturas descripción en el frontend
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('❌ Error en registro:', error);
    return NextResponse.json({ error: 'Error en el registro' }, { status: 500 });
  }
}
