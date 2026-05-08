import fetch from 'node-fetch';

async function getYTChannel(videoId) {
    const res = await fetch(`https://youtube.com/watch?v=${videoId}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const text = await res.text();
    const match = text.match(/<link itemprop="name" content="([^"]+)">/);
    console.log(videoId, '->', match ? match[1] : 'unknown');
}
getYTChannel('cWd_m_EhPOU');
getYTChannel('vA6yyguu3rc');
