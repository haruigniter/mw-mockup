import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // 認証不要のパス
  if (pathname.startsWith('/login') || pathname.startsWith('/api/login')) {
    return NextResponse.next();
  }

  // Cookieチェック
  const auth = req.cookies.get('mw_auth');
  if (!auth || auth.value !== 'authenticated') {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
