'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import styles from './perfil.module.scss';

export default function PerfilMaestro() {
  const router = useRouter();

  return (
    <div className={styles.perfilContainer}>
      <aside className={styles.sidebar} />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.logo}>El Santuario</div>
          <nav className={styles.nav}>
            <a onClick={() => router.push('/dashboard/maestro/crear')}>Mis criaturas</a>
            <a className={styles.active}>Mi perfil</a>
            <a onClick={() => signOut({ callbackUrl: '/' })}>Cerrar sesión</a>
          </nav>
        </header>

        <h1>Mi perfil</h1>
        <p>
          Este es el lugar donde podrás gestionar, actualizar y personalizar la información de tu perfil.
        </p>

        <div className={styles.campo}>
          <label>Nombre mágico</label>
          <div className={styles.valor}>Jaime el valiente</div>
        </div>

        <div className={styles.campo}>
          <label>Correo mágico</label>
          <div className={styles.valor}>jaime_valiente@bestiario.com</div>
        </div>

        <div className={styles.campo}>
          <label>Rol</label>
          <div className={styles.valor}>Maestro</div>
        </div>

        <div className={styles.campo}>
          <label>Descripción</label>
          <div className={styles.descripcion}>
            Soy Jaime el Valiente, maestro en el arte de invocar y dominar criaturas. En mis partidas, cada criatura tiene una historia, un propósito, y un papel crucial en las épicas aventuras. Desde dragones imponentes hasta criaturas misteriosas de los bosques.
          </div>
        </div>
      </main>
    </div>
  );
}
