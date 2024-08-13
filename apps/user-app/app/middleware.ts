// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // If the user is trying to access the dashboard without a session, redirect to the sign-in page
  if (pathname.startsWith('/web/dashboard') && !token) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  // If the user is authenticated, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/web/:path*'], // Apply this middleware to the /web route and its subroutes
};
