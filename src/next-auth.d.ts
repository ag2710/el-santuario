// src/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
      role?: "cuidador" | "maestro";
    };
  }

  interface User {
    role?: "cuidador" | "maestro";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "cuidador" | "maestro";
  }
}
