'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './crear.module.scss';

export default function CrearCriaturaCuidador() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    nivel: '',
    entrenada: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'radio' || type === 'checkbox'
          ? checked.toString()
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = new URLSearchParams(formData).toString();
    console.log('Criatura registrada:', formData);
    router.push(`/dashboard/cuidador?${queryParams}`);
  };

  return (
    <div className={styles.crearContainer}>
      <aside className={styles.sidebar} />

      <main className={styles.content}>
        {/* Navbar */}
        <header className={styles.header}>
          <div className={styles.logo}>El Santuario</div>
          <nav className={styles.nav}>
            <Link href="/dashboard/cuidador/criaturas" className={styles.active}>
              Mis criaturas
            </Link>
            <Link href="/dashboard/cuidador/perfil">Mi perfil</Link>
            <Link href="/api/auth/signout">Cerrar sesión</Link>
          </nav>
        </header>

        <h1>Registrar criatura</h1>
        <p>
          Explora y gestiona todas las criaturas mágicas que has recolectado. Cada
          una tiene habilidades únicas y características especiales.
        </p>

        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.grid}>
            <div>
              <label>Nombre mágico de la criatura</label>
              <input
                type="text"
                name="nombre"
                placeholder="Introduce el nombre de la criatura"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Tipo de criatura</label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Elige un tipo</option>
                <option value="Dragón">Dragón</option>
                <option value="Fénix">Fénix</option>
                <option value="Golem">Golem</option>
                <option value="Grifo">Grifo</option>
                <option value="Vampiro">Vampiro</option>
                <option value="Unicornio">Unicornio</option>
              </select>
            </div>
          </div>

          <label>Nivel de poder</label>
          <input
            type="text"
            name="nivel"
            value={formData.nivel}
            onChange={handleChange}
            required
          />

          <div className={styles.entrenada}>
            <label>¿Entrenada?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="entrenada"
                  value="sí"
                  checked={formData.entrenada === 'sí'}
                  onChange={handleChange}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  name="entrenada"
                  value="no"
                  checked={formData.entrenada === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit">Registrar criatura</button>
        </form>
      </main>
    </div>
  );
}
