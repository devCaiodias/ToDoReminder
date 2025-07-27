import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || req.headers.get('Authorization');

  if (!token) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }

  return NextResponse.next();
}

// Defina onde aplicar
export const config = {
  matcher: ['/Tasks'],
};