import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Correo",
          type: "email",
          placeholder: "email@santuario.com",
        },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) throw new Error("Usuario no encontrado");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Contraseña incorrecta");

        const role = user.role?.toLowerCase() as "maestro" | "cuidador";

        if (role !== "maestro" && role !== "cuidador") {
          throw new Error("Rol inválido");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? null,
          role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role; // asegúrate de que `user` tenga `role`
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.role) {
        session.user.role = token.role as "maestro" | "cuidador";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
