// app/dashboard/cuidador/page.tsx
import TablaCriaturas from "@/components/TablaCriaturas";
import AuthGuard from "@/components/AuthGuard";

export default function CuidadorDashboard() {
  return (
    <AuthGuard role="cuidador">
      <h1>Mis criaturas</h1>
      <TablaCriaturas conEliminar={false} />
    </AuthGuard>
  );
}
