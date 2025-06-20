// src/app/dashboard/maestro/perfil/page.tsx
'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function PerfilMaestro() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;
  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div>
      <h1>Perfil del Maestro</h1>
      <p>Nombre mágico: {session?.user?.name}</p>
      <p>Correo: {session?.user?.email}</p>
      <p>Rol: {session?.user?.role}</p>
      <p>Descripción: {session?.user?.description || "Sin descripción"}</p>
    </div>
  );
}
