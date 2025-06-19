'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      const role = session?.user?.role;

      if (role === "maestro") {
        router.replace("/dashboard/maestro");
      } else if (role === "cuidador") {
        router.replace("/dashboard/cuidador");
      } else {
        router.replace("/login");
      }
    }
  }, [status, session, router]);

  return <p>Cargando tu santuario...</p>;
}
