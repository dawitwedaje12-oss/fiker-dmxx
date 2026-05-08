const urls = [
  'https://vt.tiktok.com/ZS9RtSqFE/',
  'https://vt.tiktok.com/ZSHQaXjt5/',
  'https://www.youtube.com/watch?v=cWd_m_EhPOU',
  'https://vt.tiktok.com/ZSHQuv7ou/',
  'https://vt.tiktok.com/ZSHQHmKUk/',
  'https://www.youtube.com/watch?v=TAIXuZ-wnYE',
  'https://www.youtube.com/watch?v=XAqF9dZjbqA',
  'https://vt.tiktok.com/ZSHQHT5P5/',
  'ig-1', 
  'yt-beast'
];

async function run() {
  const result = {};
  for (const [i, url] of urls.entries()) {
    if (url === 'ig-1' || url === 'yt-beast') continue;
     try {
      const type = url.includes('tiktok') ? 'tiktok.com' : 'youtube.com';
      const oembedUrl = `https://www.${type}/oembed?url=${url}&format=json`;
      const res = await fetch(oembedUrl);
      const json = await res.json();
      result['test_' + i] = json.thumbnail_url;
    } catch (e) {
      console.log(url, 'Failed', e.message);
    }
  }
  console.log(JSON.stringify(result, null, 2));
}
run();
