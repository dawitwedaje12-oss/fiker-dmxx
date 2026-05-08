import fetch from 'node-fetch';

const urls = [
    'https://vt.tiktok.com/ZSHQ51c57/',
    'https://vt.tiktok.com/ZSHQaXjt5/',
    'https://youtu.be/T-KfvoPBMto',
    'https://vt.tiktok.com/ZSHQuv7ou/',
    'https://vt.tiktok.com/ZSHQHmKUk/',
    'https://vt.tiktok.com/ZSHQHT5P5/',
    'https://www.youtube.com/watch?v=XAqF9dZjbqA',
    'https://www.instagram.com/reel/DH_ZawFM97t/'
];

async function getMeta() {
    for (const url of urls) {
        try {
            const res = await fetch(url, {
                redirect: 'follow', // follow redirects
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            const text = await res.text();
            
            // Try to extract title
            const titleMatch = text.match(/<title>(.*?)<\/title>/i);
            const title = titleMatch ? titleMatch[1] : 'No title';
            
            // Try to extract og:image (for Instagram particularly)
            const ogImgMatch = text.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
            const ogImg = ogImgMatch ? ogImgMatch[1] : 'No image';

            console.log(`URL: ${url}`);
            console.log(`Title: ${title}`);
            console.log(`Image: ${ogImg}`);
            console.log('---');
        } catch (e) {
            console.log(`Failed for ${url}: ${e.message}`);
        }
    }
}

getMeta();
