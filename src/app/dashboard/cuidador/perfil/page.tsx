'use client';

import styles from './perfil.module.scss';
import { useRouter } from 'next/navigation';

export default function PerfilCuidador() {
  const router = useRouter();

  return (
    <div className={styles.perfilContainer}>
      <aside className={styles.sidebar} />

      <main className={styles.mainContent}>
        <nav className={styles.nav}>
          <ul>
            <li onClick={() => router.push('/dashboard/cuidador')}>Mis criaturas</li>
            <li className={styles.activa}>Mi perfil</li>
            <li onClick={() => router.push('/api/auth/signout')}>Cerrar sesión</li>
          </ul>
        </nav>

        <h1>Mi perfil</h1>
        <p>
          Este es el lugar donde podrás gestionar, actualizar y personalizar la información de tu perfil.
        </p>

        <div className={styles.campo}>
          <label>Nombre Mágico</label>
          <div className={styles.valor}>Radagast el Jardinero</div>
        </div>

        <div className={styles.campo}>
          <label>Correo mágico</label>
          <div className={styles.valor}>radijar@santuario.com</div>
        </div>

        <div className={styles.campo}>
          <label>Rol</label>
          <div className={styles.valor}>Cuidador</div>
        </div>

        <div className={styles.campo}>
          <label>Descripción</label>
          <div className={styles.descripcion}>
            Soy un guardián del bosque y protector de criaturas mágicas. Soy un tanto excéntrico, dedico mi vida a cuidar de una vasta variedad de seres fantásticos, desde majestuosos dragones hasta diminutas hadas. Poseo un vasto conocimiento de las artes curativas y la magia antigua, lo que me permite sanar y proteger a las criaturas que encuentro en sus viajes.
          </div>
        </div>
      </main>
    </div>
  );
}
