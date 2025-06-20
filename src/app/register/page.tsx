'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.scss';

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'cuidador',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="/assets/register.png" alt="Ave mágica" className={styles.img} />
      </div>

      <div className={styles.formSection}>
        <h1>Únete al santuario</h1>
        <p>
          Elige si serás un cuidador o maestro de criaturas.
          <br />
          Completa los detalles para comenzar
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre mágico</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Introduce tu nombre mágico"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo mágico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tunombre@bestiario.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Rol</label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="cuidador">Cuidador</option>
            <option value="maestro">Maestro</option>
          </select>

          <label htmlFor="password">Palabra mágica</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Introduce tu palabra mágica"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Registrarme en el santuario</button>
        </form>

        <div className={styles.loginLink}>
          ¿Tienes cuenta? <a href="/login">Inicia sesión en el refugio</a>
        </div>
      </div>
    </div>
  );
}
