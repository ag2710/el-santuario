// app/dashboard/maestro/page.tsx
import TablaCriaturas from "@/components/TablaCriaturas";
import EstadisticasMaestro from "@/components/EstadisticaMaestro";
import AuthGuard from "@/components/AuthGuard";

export default function MaestroDashboard() {
  return (
    <AuthGuard role="maestro">
      <h1>Mis criaturas</h1>
      <TablaCriaturas conEliminar />
      <EstadisticasMaestro />
    </AuthGuard>
  );
}
