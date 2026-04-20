export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'mw_auth=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0');
  res.redirect(302, '/login');
}
