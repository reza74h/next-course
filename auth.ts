import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    //   CredentialsProvider({
    //     name: "Credentials",
    //     credentials: {
    //       email: { label: "Email", type: "email", placeholder: "Email" },
    //       password: {
    //         label: "Password",
    //         type: "password",
    //         placeholder: "Password",
    //       },
    //     },
    //     async authorize(credentials, req) {
    //       if (!credentials.email || !credentials.password) return null;

    //       const user = await prisma.user.findUnique({
    //         where: { email: String(credentials.email) },
    //       });

    //       if (!user) return null;

    //       const passwordsMatch = await bcrypt.compare(
    //         String(credentials.password),
    //         user.hashedPassword!
    //       );

    //       return passwordsMatch ? user : null;
    //     },
    //   }),
    //
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  session: {
    strategy: "jwt",
  },
});
