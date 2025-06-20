"use client";

import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./login.module.scss";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      const session = await getSession();

      if (session?.user?.role === "maestro") {
        router.push("/dashboard/criaturas");
      } else if (session?.user?.role === "cuidador") {
        router.push("/dashboard/cuidador/criaturas");
      } else {
        router.push("/");
      }
    } else {
      alert("Correo o contraseña incorrectos.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}></div>
      <div className={styles.formSection}>
        <h1>Inicia sesión</h1>
        <p>
          Para acceder a la colección de criaturas mágicas. Sólo los maestros y
          cuidadores reconocidos pueden entrar.
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

          <button type="submit" disabled={loading}>
            {loading ? "Accediendo..." : "Acceder al santuario"}
          </button>
        </form>

        <p className={styles.signup}>
          ¿No tienes cuenta?{" "}
          <a href="/register" className={styles.link}>
            Regístrate como maestro o cuidador
          </a>
        </p>
      </div>
    </div>
  );
}
