import type { NextAuthConfig } from "next-auth";
import { sql } from "@vercel/postgres";
// import bcrypt from "bcryptjs";

// const saltRounds = 10;

export const authConfig = {
  callbacks: {
    async signIn({ account, profile }) {
      if (account!.provider === "google") {
        // const plainTextEmail = profile!.email;
        // bcrypt.hash(
        //   plainTextEmail!,
        //   saltRounds,
        //   async function (err: any, hash: any) {
        //     const data =
        //       await sql`SELECT * FROM user_data WHERE email = ${hash}`;
        //     if (data.rows.length === 0) {
        //       await sql`INSERT INTO user_data (email, weight, height) VALUES (${hash}, 50, 160)`;
        //     }
        //   }
        // );
        const data = await sql`SELECT * FROM user_data WHERE email = ${
          profile!.email
        }`;
        if (data.rows.length === 0) {
          await sql`INSERT INTO user_data (email, weight, height, name) VALUES (${
            profile!.email
          }, 50, 160, ${profile!.name})`;
        }
      }
      return true;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith("/home");
      if (isOnHome) {
        if (isLoggedIn) return true;
        return false; // Redirecting unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/home", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Adding providers with an empty array for now
} satisfies NextAuthConfig;
