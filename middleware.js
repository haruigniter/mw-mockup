export default function middleware(request) {
  const cookie = request.headers.get('cookie') || '';
  const isAuthenticated = cookie.includes('mw_auth=authenticated');

  if (!isAuthenticated) {
    return Response.redirect(new URL('/login.html', request.url));
  }
}

export const config = {
  matcher: ['/index.html', '/apply/:path*', '/approve/:path*', '/reception/:path*'],
};
