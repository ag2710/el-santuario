// app/dashboard/cuidador/perfil.tsx
import AuthGuard from "@/components/AuthGuard";

export default function PerfilCuidador() {
  return (
    <AuthGuard role="cuidador">
      <h1>Mi perfil</h1>
      <p>Radagast el Jardinero</p>
      {/* Aquí va el formulario o datos */}
    </AuthGuard>
  );
}
