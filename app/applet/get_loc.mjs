import fetch from 'node-fetch';

const urls = [
    'https://vt.tiktok.com/ZSHQ51c57/',
    'https://vt.tiktok.com/ZSHQaXjt5/',
    'https://vt.tiktok.com/ZSHQuv7ou/',
    'https://vt.tiktok.com/ZSHQHmKUk/',
    'https://vt.tiktok.com/ZSHQHT5P5/'
];

async function getRedirects() {
    for (const url of urls) {
        try {
            const res = await fetch(url, {
                redirect: 'manual', // DO NOT follow redirects
                headers: {
                    'User-Agent': 'curl/7.68.0'
                }
            });
            console.log(url, 'Redirects to ->', res.headers.get('location'));
        } catch (e) {
            console.log(url, 'Error:', e.message);
        }
    }
}
getRedirects();
