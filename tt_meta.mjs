import fetch from 'node-fetch';

async function getTikTokMeta(shortUrl) {
    try {
        console.log("Fetching", shortUrl);
        const res = await fetch(shortUrl, {
            redirect: 'follow', // follow to final url
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' // curl often gets blocked from full tiktok html
            }
        });
        const text = await res.text();
        const urlMatch = res.url;
        const titleMatch = text.match(/<title>(.*?)<\/title>/i);
        const imgMatch = text.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
        console.log("Redirect URL:", urlMatch);
        console.log("Title:", titleMatch ? titleMatch[1] : 'none');
        console.log("Image:", imgMatch ? imgMatch[1] : 'none');
        
        // Also try manual to see direct redirect
        const mRes = await fetch(shortUrl, { redirect: 'manual', headers: { 'User-Agent': 'curl/7.68.0' } });
        console.log("Manual Redirect:", mRes.headers.get('location'));
    } catch(e) {
        console.error(e.message);
    }
}
getTikTokMeta('https://vt.tiktok.com/ZS9RtSqFE/');
