import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

export function middleware(request) {
  const response = NextResponse.next();

  const cookies = request.cookies;

  const token = cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // require not logged in
  if (["/login", "/register"].includes(pathname)) {
    if (token) return NextResponse.redirect(new URL("/", request.url));
  }

  //  require logged in
  if (["/cart", "/products/post"].includes(pathname)) {
    if (!token) return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/products")) {
    console.log("oke");
  }
  return response;
}

export const config = {
  // matcher:['/products','/']
};
