import fetch from 'node-fetch';
import fs from 'fs';

async function downloadIgImg() {
    const res = await fetch('https://www.instagram.com/p/DH_ZawFM97t/media/?size=l', { redirect: 'follow' });
    console.log(res.status);
    const buffer = await res.buffer();
    fs.writeFileSync('public/ig-thumb.jpg', buffer);
    console.log('saved to public/ig-thumb.jpg');
}
downloadIgImg();
