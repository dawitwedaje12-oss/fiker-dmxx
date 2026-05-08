import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

async function downloadIgImg() {
    try {
        const res = await fetch('https://www.instagram.com/p/DH_ZawFM97t/media/?size=l');
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        console.log('Final URL:', res.url);
        console.log('Content-Type:', res.headers.get('content-type'));
        
        const buffer = await res.arrayBuffer();
        
        const assetsDir = path.join(process.cwd(), 'src', 'assets');
        if (!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(assetsDir, 'ig-thumb.jpg'), Buffer.from(buffer));
        console.log('Successfully saved to src/assets/ig-thumb.jpg');
    } catch(err) {
        console.error('Download failed:', err);
    }
}

downloadIgImg();
