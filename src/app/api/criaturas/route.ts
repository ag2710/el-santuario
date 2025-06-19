// src/app/api/criaturas/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const criaturas = await prisma.creature.findMany(); // ← Usa el nombre correcto según tu modelo Prisma
    return NextResponse.json(criaturas);
  } catch (error) {
    console.error('Error al obtener criaturas:', error);
    return NextResponse.json(
      { error: 'Error al obtener criaturas' },
      { status: 500 }
    );
  }
}
