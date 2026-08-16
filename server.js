import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 8080);
const mime = {
  '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8','.md':'text/markdown; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml'
};

function slideId(url='') {
  const m = String(url).match(/\/presentation\/d\/([a-zA-Z0-9_-]+)/);
  return m?.[1] || null;
}
function send(res,status,body,type='text/plain; charset=utf-8') {
  res.writeHead(status, {'Content-Type':type,'Cache-Control':'no-store'}); res.end(body);
}

const server = http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname === '/api/google-slides') {
      const id = slideId(url.searchParams.get('url') || '');
      if (!id) return send(res,400,'Invalid Google Slides URL');
      const exportUrl = `https://docs.google.com/presentation/d/${id}/export/pdf`;
      const upstream = await fetch(exportUrl, {redirect:'follow', headers:{'User-Agent':'Wakanda-Studio/4'}});
      const type = upstream.headers.get('content-type') || '';
      if (!upstream.ok || !type.includes('application/pdf')) {
        return send(res,403,'This Slides deck could not be exported. Make it accessible by link, publish it, or use Connect Google in Wakanda Studio.');
      }
      const bytes = Buffer.from(await upstream.arrayBuffer());
      res.writeHead(200, {'Content-Type':'application/pdf','Content-Length':bytes.length,'Cache-Control':'no-store'}); return res.end(bytes);
    }

    let path = decodeURIComponent(url.pathname);
    if (path === '/') path = '/index.html';
    const safe = normalize(path).replace(/^(\.\.(\/|\\|$))+/, '');
    const file = join(root, safe);
    if (!file.startsWith(root)) return send(res,403,'Forbidden');
    const info = await stat(file).catch(()=>null);
    if (!info?.isFile()) return send(res,404,'Not found');
    const data = await readFile(file);
    res.writeHead(200, {'Content-Type':mime[extname(file).toLowerCase()] || 'application/octet-stream'}); res.end(data);
  } catch (err) {
    console.error(err); send(res,500,'Server error');
  }
});

server.listen(port, () => console.log(`Wakanda Studio V4 running at http://localhost:${port}`));
