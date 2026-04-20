export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (username === 'test' && password === 'mwipresence') {
    res.setHeader('Set-Cookie', 'mw_auth=authenticated; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400');
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
}
