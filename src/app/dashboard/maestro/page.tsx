'use client';

import styles from './maestro.module.scss';
import { useSession } from 'next-auth/react';

export default function DashboardMaestro() {
  const { data: session } = useSession();

  if (!session) return <p>Cargando dashboard...</p>;

  const user = session.user;

  return (
    <div className={styles.dashboardContainer}>
      <h1>Bienvenido, {user?.name}</h1>

      <p>
        Este es tu espacio como <strong>Maestro</strong>. Desde aquí puedes
        consultar estadísticas, revisar criaturas entrenadas y continuar con
        tu labor mágica.
      </p>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h2>12</h2>
          <p>Criaturas entrenadas</p>
        </div>
        <div className={styles.statCard}>
          <h2>3</h2>
          <p>Escuelas asignadas</p>
        </div>
        <div className={styles.statCard}>
          <h2>5</h2>
          <p>Misiones completadas</p>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => window.location.href = '/dashboard/maestro/crear'}
        >
          Registrar criatura entrenada
        </button>
        <button
          onClick={() => window.location.href = '/dashboard/maestro/perfil'}
        >
          Ver mi perfil
        </button>
      </div>
    </div>
  );
}
