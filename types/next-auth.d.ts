import NextAuth from "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: Role;
      description?: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    description?: string;
  }
}
