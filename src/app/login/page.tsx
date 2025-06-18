"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "./login.module.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}></div>
      <div className={styles.formSection}>
        <h1>Inicia sesión</h1>
        <p>
          Para acceder a la colección de criaturas mágicas. Sólo los maestros y
          los cuidadores reconocidos pueden entrar
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo mágico</label>
          <input
            type="email"
            id="email"
            placeholder="tunombre@santuario.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Palabra mágica</label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Acceder al santuario</button>
        </form>

        <p className={styles.signup}>
          ¿No tienes cuenta? Regístrate como maestro o cuidador
        </p>
      </div>
    </div>
  );
}
