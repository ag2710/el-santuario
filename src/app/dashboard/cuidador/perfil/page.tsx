'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from "./perfil.module.scss";

export default function PerfilCuidador() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando sesión…</p>;
  if (status === "unauthenticated") redirect("/login");

  return (
    <div className={styles.perfilContainer}>
      <aside className={styles.sidebar} />

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.logo}>El Santuario</div>
          <nav className={styles.nav}>
            <a onClick={() => location.href = '/dashboard/cuidador'}>Mis criaturas</a>
            <a className={styles.active}>Mi perfil</a>
            <a onClick={() => location.href = '/api/auth/signout'}>Cerrar sesión</a>
          </nav>
        </header>

        <h1>Mi perfil</h1>

        <div className={styles.campo}>
          <label>Nombre mágico</label>
          <div className={styles.valor}>{session?.user?.name}</div>
        </div>

        <div className={styles.campo}>
          <label>Correo mágico</label>
          <div className={styles.valor}>{session?.user?.email}</div>
        </div>

        <div className={styles.campo}>
          <label>Rol</label>
          <div className={styles.valor}>{session?.user?.role}</div>
        </div>

        <div className={styles.campo}>
          <label>Descripción</label>
          <div className={styles.descripcion}>
            {session?.user?.description ?? "Sin descripción"}
          </div>
        </div>
      </main>
    </div>
  );
}
