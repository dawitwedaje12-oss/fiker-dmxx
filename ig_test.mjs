import fetch from 'node-fetch';

async function testIG() {
    const res = await fetch('https://www.instagram.com/p/DH_ZawFM97t/media/?size=l', { redirect: 'manual' });
    console.log('Status:', res.status);
    console.log('Location:', res.headers.get('location'));
}
testIG();
