import connectMongoDb from "@/lib/connectMongoDb";
import UserModel from "@/models/UserModel";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { IUser } from "@/models/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          await connectMongoDb();
          const user: IUser | null = await UserModel.findOne({ email });

          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          return { id: user.id, email: user.email, image: "", name: user.name };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
