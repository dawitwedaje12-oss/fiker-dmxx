import fetch from 'node-fetch';

async function getOembed(longUrl) {
    try {
        const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(longUrl)}`);
        const data = await res.json();
        console.log("Author:", data.author_name);
        console.log("Thumb:", data.thumbnail_url);
        console.log("Title:", data.title);
    } catch(e) {
        console.error("Error:", e.message);
    }
}
getOembed('https://www.tiktok.com/@yourbeautybyhana/video/7480924752983444791');
