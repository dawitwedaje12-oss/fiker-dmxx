import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const links = {
  'tt-0': 'https://vt.tiktok.com/ZS9RtSqFE/',
  'tt-1': 'https://vt.tiktok.com/ZSHQaXjt5/',
  'tt-2': 'https://vt.tiktok.com/ZSHQuv7ou/',
  'tt-3': 'https://vt.tiktok.com/ZSHQHmKUk/',
  'tt-4': 'https://vt.tiktok.com/ZSHQHT5P5/',
  'ig-1': 'https://www.instagram.com/reel/DH_ZawFM97t/?igsh=dGk3dW5lMGdncWto'
};

async function getTikTokThumb(url) {
  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    return data.thumbnail_url;
  } catch (e) {
    return null;
  }
}

async function getIgProxyFallback(url) {
  try {
    const igcode = url.match(/reel\/([^\/\?]+)/)[1];
    return `https://www.instagram.com/p/${igcode}/media/?size=l`;
  } catch(e) {
    return 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop';
  }
}

async function run() {
  const publicDir = path.join(process.cwd(), 'public', 'thumbs');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const result = {};

  result['yt-0'] = 'https://img.youtube.com/vi/cWd_m_EhPOU/hqdefault.jpg';
  result['yt-1'] = 'https://img.youtube.com/vi/TAIXuZ-wnYE/hqdefault.jpg';
  result['yt-2'] = 'https://img.youtube.com/vi/XAqF9dZjbqA/hqdefault.jpg';
  result['yt-beast'] = 'https://img.youtube.com/vi/vA6yyguu3rc/hqdefault.jpg';

  for (const [key, link] of Object.entries(links)) {
    let imgUrl = null;
    if (key.startsWith('tt')) {
      imgUrl = await getTikTokThumb(link);
    } else if (key.startsWith('ig')) {
      imgUrl = await getIgProxyFallback(link);
    }

    if (!imgUrl) {
      imgUrl = 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop';
    }

    try {
      const imgRes = await fetch(imgUrl);
      if(!imgRes.ok) throw new Error("bad res "+imgRes.status);
      const buffer = await imgRes.buffer();
      const ct = imgRes.headers.get('content-type') || 'image/jpeg';
      if (ct.includes('html')) throw new Error("fetched html");
      
      const ext = ct === 'image/webp' ? 'webp' : 'jpg';
      const fileName = `${key}.${ext}`;
      fs.writeFileSync(path.join(publicDir, fileName), buffer);
      result[key] = `/thumbs/${fileName}`;
    } catch(e) {
      console.log('failed', key, e.message);
      result[key] = 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop';
    }
  }

  const out = `export const cachedThumbs: Record<string, string> = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync('src/assets/cachedThumbs.ts', out);
  console.log('done downloading to public/thumbs');
}

run();
