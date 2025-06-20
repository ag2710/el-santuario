import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PerfilMaestroPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "maestro") {
    redirect("/login");
  }

  const { name, email, role, description } = session.user;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Perfil del Maestro</h1>
      <form className="perfil-form">
        <label>
          Nombre mágico:
          <input type="text" value={name || ""} readOnly />
        </label>

        <label>
          Correo electrónico:
          <input type="email" value={email || ""} readOnly />
        </label>

        <label>
          Rol:
          <input type="text" value={role} readOnly />
        </label>

        <label>
          Descripción:
          <textarea value={description || ""} readOnly />
        </label>
      </form>
    </div>
  );
}
