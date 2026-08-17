'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 8080);
const ROOT = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.pdf': 'application/pdf'
};

function slidesId(input='') {
  try {
    const u = new URL(input);
    if (!/^(docs|drive)\.google\.com$/i.test(u.hostname)) return null;
    const m = u.pathname.match(/\/presentation\/d\/([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  } catch { return null; }
}

function send(req, res, status, body, type='text/plain; charset=utf-8') {
  const payload = Buffer.isBuffer(body) ? body : Buffer.from(String(body ?? ''));
  res.writeHead(status, {
    'Content-Type': type,
    'Content-Length': payload.length,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  if (req.method === 'HEAD') return res.end();
  res.end(payload);
}

async function googleSlidesBridge(req, res, requestUrl) {
  if (req.method !== 'GET') return send(req, res, 405, 'Method not allowed');
  const raw = requestUrl.searchParams.get('url') || '';
  const id = slidesId(raw);
  if (!id) return send(req, res, 400, 'Paste a valid Google Slides URL.');
  try {
    const exportUrl = `https://docs.google.com/presentation/d/${encodeURIComponent(id)}/export/pdf`;
    const upstream = await fetch(exportUrl, { redirect: 'follow' });
    if (!upstream.ok) return send(req, res, upstream.status === 401 || upstream.status === 403 ? 403 : 502, 'The shared deck could not be exported. Confirm that the presentation is accessible to anyone with the link, or use Connect Google.');
    const type = upstream.headers.get('content-type') || '';
    if (!type.toLowerCase().includes('pdf')) return send(req, res, 502, 'Google did not return a PDF. The deck may require sign-in; use Connect Google instead.');
    const data = Buffer.from(await upstream.arrayBuffer());
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': data.length,
      'Cache-Control': 'no-store',
      'Content-Disposition': 'inline; filename="google-slides.pdf"',
      'X-Content-Type-Options': 'nosniff'
    });
    if (req.method === 'HEAD') return res.end();
    res.end(data);
  } catch (err) {
    console.error('Google Slides bridge:', err);
    send(req, res, 502, 'Google Slides import failed. Try Connect Google or export the deck as PDF/PPTX.');
  }
}

function serveStatic(req, res, pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return send(req, res, 400, 'Bad request'); }
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const file = path.resolve(ROOT, relative);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) return send(req, res, 403, 'Forbidden');
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) return send(req, res, 404, 'Not found');
    const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': stat.size,
      'Cache-Control': file.endsWith('index.html') || file.endsWith('config.js') ? 'no-store' : 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff'
    });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  if (!['GET', 'HEAD'].includes(req.method || 'GET')) return send(req, res, 405, 'Method not allowed');
  if (requestUrl.pathname === '/api/health') return send(req, res, 200, JSON.stringify({ ok: true, app: 'Wakanda Studio', version: '4.2.0' }), 'application/json; charset=utf-8');
  if (requestUrl.pathname === '/api/google-slides') return googleSlidesBridge(req, res, requestUrl);
  serveStatic(req, res, requestUrl.pathname);
});

server.listen(PORT, () => {
  console.log(`Wakanda Studio V4.2 running at http://localhost:${PORT}`);
});
