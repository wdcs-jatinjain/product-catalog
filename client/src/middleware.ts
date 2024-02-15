import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const token = cookies().get("token") || "";
  console.log(token)

  const path = request.nextUrl.pathname;
  console.log(path)

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}
export const config = {
  matcher: ["/", '/home'],
};
