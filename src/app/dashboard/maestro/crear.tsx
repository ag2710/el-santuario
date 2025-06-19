// app/dashboard/maestro/crear.tsx
// app/dashboard/cuidador/crear.tsx

import FormularioCriatura from "@/components/FormularioCriatura";
import AuthGuard from "@/components/AuthGuard";

export default function CrearCriatura() {
  return (
    <AuthGuard>
      <FormularioCriatura />
    </AuthGuard>
  );
}
