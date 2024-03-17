import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let AuthCookie = request.cookies.get('Authorization');
  let UserInfoCookie = request.cookies.get('userInfo');

  const response = NextResponse.next();

  return response;
}