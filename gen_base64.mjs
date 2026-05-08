import fetch from 'node-fetch';
import fs from 'fs';

async function updateThumb() {
    try {
        console.log("Fetching Instagram thumbnail...");
        const res = await fetch('https://www.instagram.com/p/DH_ZawFM97t/media/?size=l');
        const buffer = await res.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        
        const content = `export const igThumbBase64 = "data:image/jpeg;base64,${base64}";\n`;
        fs.writeFileSync('src/assets/igThumb.ts', content);
        console.log("Successfully created src/assets/igThumb.ts with Base64 data.");
    } catch(err) {
        console.error("Error:", err);
    }
}

updateThumb();
