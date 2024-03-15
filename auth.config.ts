import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  callbacks: {
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
