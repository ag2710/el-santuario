'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from './perfil.module.scss';

export default function PerfilMaestro() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;
  if (status === "unauthenticated") redirect("/login");

  return (
    <div className={styles.perfilContainer}>
      <aside className={styles.sidebar}></aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.logo}>El Santuario</div>
          <nav className={styles.nav}>
            <a onClick={() => location.href = '/dashboard/maestro'}>Mis criaturas</a>
            <a className={styles.active}>Mi perfil</a>
            <a onClick={() => location.href = '/api/auth/signout'}>Cerrar sesión</a>
          </nav>
        </header>

        <h1>Perfil del Maestro</h1>
        <div className={styles.campo}>
          <label>Nombre mágico</label>
          <div className={styles.valor}>{session?.user?.name}</div>
        </div>
        <div className={styles.campo}>
          <label>Correo electrónico</label>
          <div className={styles.valor}>{session?.user?.email}</div>
        </div>
        <div className={styles.campo}>
          <label>Rol</label>
          <div className={styles.valor}>{session?.user?.role}</div>
        </div>
        <div className={styles.campo}>
          <label>Descripción</label>
          <div className={styles.descripcion}>{session?.user?.description || 'Sin descripción'}</div>
        </div>
      </main>
    </div>
  );
}
