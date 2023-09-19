import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    try {
      if (request.nextauth.token) {
        const userData = request.nextauth.token;

        if (userData) {
          if (userData.role) {
            if (
              request.nextUrl.pathname.startsWith("/admin") &&
              userData.role !== "admin"
            ) {
              return NextResponse.rewrite(new URL("/denied", request.url));
            }
          } else if (
            userData.role !== "client" &&
            request.nextUrl.pathname.startsWith("/app")
          ) {
            console.log("E");
            return NextResponse.next();
          } else {
            console.log("E");
            return NextResponse.next();
          }
        } else {
          return NextResponse.next();
        }
      }
    } catch {
      throw Error("Cann't Get User Information from database");
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/app", "/login", "/admin", "/"] };
