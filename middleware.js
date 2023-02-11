import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

export function middleware(request) {
  const response = NextResponse.next();

  const cookies = request.cookies;

  const token = cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // require not logged in
  if (["/auth/login", "/auth/register"].includes(pathname)) {
    if (token) return NextResponse.redirect(new URL("/", request.url));
  }

  //  require logged in
  if (["/user/cart", "/product/add"].includes(pathname)) {
    if (!token)
      return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (pathname.startsWith("/product")) {
    console.log("oke");
  }
  return response;
}

export const config = {
  // matcher:['/products','/']
};
