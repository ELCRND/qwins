import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { url, cookies } = req;

  const session =
    cookies.get("access_token") || cookies.get("refresh_token") || null;

  if (url.includes("login") && session) {
    const response = NextResponse.redirect(new URL("/profile", url));
    return response;
  }

  if (url.includes("profile") && !session) {
    const response = NextResponse.redirect(new URL("/login", url));
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    return response;
  }
}

export const config = {
  matcher: ["/login", "/profile"],
};
