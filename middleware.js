export const config = {
  matcher: ['/((?!login|api/login|_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(req) {
  const cookie = req.headers.get('cookie') || '';
  const isAuthenticated = cookie.includes('mw_auth=authenticated');

  if (!isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return Response.redirect(url);
  }
}
