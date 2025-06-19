import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "maestro" | "cuidador";
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    role: "maestro" | "cuidador";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "maestro" | "cuidador";
  }
}
