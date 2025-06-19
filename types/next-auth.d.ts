// types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      role: "cuidador" | "maestro";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id?: string;
    role: "cuidador" | "maestro";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string | null;
    email?: string | null;
    role: "cuidador" | "maestro";
  }
}
