import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {


  const token = cookies().get("token");
const session = await fetch('api/login/check-login')
  
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/users", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}
export const config = {
  matcher: ["/login", "/users"],
};
