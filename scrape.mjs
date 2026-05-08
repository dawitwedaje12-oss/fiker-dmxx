import fetch from "node-fetch";

async function getYTViews(id) {
    try {
        const res = await fetch(`https://youtube.com/watch?v=${id}`, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        });
        const text = await res.text();
        const match = text.match(/"viewCount":"(\d+)"/);
        console.log(id, match ? match[1] : "not found");
    } catch(e) {
        console.log(id, "error");
    }
}
getYTViews("T-KfvoPBMto");
getYTViews("XAqF9dZjbqA");
