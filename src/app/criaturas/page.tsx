//gestión con permisos

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import styles from './misCriaturas.module.scss';

type Criatura = {
  nombre: string;
  tipo: string;
  nivel: string;
  entrenado: boolean;
};

const criaturasIniciales: Criatura[] = [
  { nombre: 'Abyssaloth', tipo: 'Fénix', nivel: 'IV', entrenado: true },
  { nombre: 'Luminara', tipo: 'Dragón', nivel: 'I', entrenado: true },
  { nombre: 'Velokron', tipo: 'Golem', nivel: 'II', entrenado: false },
  { nombre: 'Zyphra', tipo: 'Vampiro', nivel: 'V', entrenado: true },
  { nombre: 'Thornclaw', tipo: 'Grifo', nivel: 'III', entrenado: false },
];

const tiposDisponibles = ['Dragón', 'Fénix', 'Golem', 'Grifo', 'Vampiro'];

export default function MisCriaturas() {
  const router = useRouter();
  const [filtros, setFiltros] = useState<string[]>([]);
  const [busqueda, setBusqueda] = useState('');
  const [criaturas, setCriaturas] = useState<Criatura[]>(criaturasIniciales);

  const manejarFiltro = (tipo: string) => {
    setFiltros((prev) =>
      prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo]
    );
  };

  const criaturasFiltradas = criaturas.filter((c) => {
    const coincideTipo = filtros.length === 0 || filtros.includes(c.tipo);
    const coincideBusqueda = c.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideTipo && coincideBusqueda;
  });

  return (
    <div className={styles.criaturasContainer}>
      <aside className={styles.sidebar}></aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.logo}>El Santuario</div>
          <nav className={styles.nav}>
            <a className={styles.active}>Mis criaturas</a>
            <a onClick={() => router.push('/dashboard/maestro/perfil')}>Mi perfil</a>

            <a onClick={() => signOut({ callbackUrl: '/' })}>Cerrar sesión</a>
          </nav>
        </header>

        <h1>Mis criaturas</h1>
        <p>
          Explora y gestiona todas las criaturas mágicas que has recolectado. Cada una tiene habilidades únicas y características especiales
        </p>
        <button
          className={styles.addButton}
          onClick={() => router.push('/dashboard/maestro/crear')}

        >
          Añadir nueva criatura
        </button>

        <div className={styles.contenido}>
          <div className={styles.filtros}>
            <h2>Filtrar</h2>
            <h3>Buscar por tipo</h3>
            {tiposDisponibles.map((tipo) => (
              <label key={tipo} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={filtros.includes(tipo)}
                  onChange={() => manejarFiltro(tipo)}
                />
                {tipo}
              </label>
            ))}
            <button className={styles.confirmar}>Confirmar</button>
          </div>

          <div className={styles.listaCriaturas}>
            <label className={styles.labelBusqueda}>Palabra mágica</label>
            <input
              className={styles.buscador}
              placeholder="Nombre"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <table className={styles.tabla}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Nivel</th>
                  <th>Entrenado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {criaturasFiltradas.map((c, i) => (
                  <tr key={i}>
                    <td>{c.nombre}</td>
                    <td>{c.tipo}</td>
                    <td>{c.nivel}</td>
                    <td>{c.entrenado ? 'Sí' : 'No'}</td>
                    <td>✎</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
