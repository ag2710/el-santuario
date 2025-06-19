'use client';

import styles from './cuidador.module.scss';
import { useRouter } from 'next/navigation';

export default function DashboardCuidador() {
  const router = useRouter();

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar} />

      <main className={styles.mainContent}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.activa}>Mis criaturas</li>
            <li onClick={() => router.push('/dashboard/cuidador/perfil')}>Mi perfil</li>
            <li onClick={() => router.push('/api/auth/signout')}>Cerrar sesión</li>
          </ul>
        </nav>

        <h1>Mis criaturas</h1>
        <p>
          Explora y gestiona todas las criaturas mágicas que has recolectado. Cada una
          tiene habilidades únicas y características especiales
        </p>

        <div className={styles.emptyState}>
          <p>
            Aún no has añadido ninguna criatura al santuario<br />
            ¡Empieza tu colección ahora!
          </p>
          <button onClick={() => router.push('/dashboard/cuidador/crear')}>
            Añadir nueva criatura
          </button>
        </div>
      </main>
    </div>
  );
}
