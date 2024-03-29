import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import toast from 'react-hot-toast';

export function middleware(request: NextRequest) {
  let hasAuthCookie = request.cookies.has('Authorization');

  if (!hasAuthCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/board-write/:path*']
};
