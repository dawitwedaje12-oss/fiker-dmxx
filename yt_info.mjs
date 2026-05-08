import fetch from 'node-fetch';

async function getYTChannel(videoId) {
    const res = await fetch(`https://youtube.com/watch?v=${videoId}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    });
    const text = await res.text();
    const match = text.match(/<link itemprop="name" content="([^"]+)">/);
    console.log(videoId, '->', match ? match[1] : 'unknown');
}

getYTChannel('T-KfvoPBMto');
getYTChannel('XAqF9dZjbqA');
