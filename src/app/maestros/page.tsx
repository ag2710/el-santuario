"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./maestro.module.scss";

type Criatura = {
  id: string;
  nombre: string;
  tipo: string;
  poder: number;
};

export default function MaestrosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [criaturas, setCriaturas] = useState<Criatura[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user?.role !== "maestro") {
      router.push("/login");
    } else {
      fetchCriaturas();
    }
  }, [session, status, router]);

  const fetchCriaturas = async () => {
    try {
      const res = await fetch("/api/criaturas");
      const data = await res.json();
      setCriaturas(data);
    } catch (err) {
      console.error("Error al cargar criaturas:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEliminar = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar esta criatura?")) return;

    try {
      await fetch(`/api/criaturas/${id}`, { method: "DELETE" });
      setCriaturas((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Error al eliminar la criatura");
    }
  };

  if (status === "loading" || session?.user?.role !== "maestro") {
    return <p className={styles.loading}>Cargando el santuario...</p>;
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1>El Santuario</h1>
        <p className={styles.role}>Área exclusiva de Maestros</p>
      </aside>

      <main className={styles.main}>
        <h2>Tus criaturas mágicas</h2>
        <p>Total: {criaturas.length}</p>

        {loading ? (
          <p>Cargando criaturas mágicas...</p>
        ) : criaturas.length === 0 ? (
          <p>No tienes criaturas registradas.</p>
        ) : (
          <ul className={styles.list}>
            {criaturas.map((criatura) => (
              <li key={criatura.id} className={styles.card}>
                <h3>{criatura.nombre}</h3>
                <p>Tipo: {criatura.tipo}</p>
                <p>Poder: {criatura.poder}</p>
                <button onClick={() => handleEliminar(criatura.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
