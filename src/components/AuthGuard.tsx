'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthGuardProps {
  children: ReactNode;
  role: "maestro" | "cuidador";
}

export default function AuthGuard({ children, role }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }

    // ✅ Comprobamos el role correcto desde session.user.role (NO name)
    if (status === "authenticated" && session?.user?.role !== role) {
      router.replace("/dashboard");
    }
  }, [status, session, role, router]);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  return <>{children}</>;
}
