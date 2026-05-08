const https = require('https');

function getViews(videoId) {
  return new Promise((resolve) => {
    https.get(`https://www.youtube.com/watch?v=${videoId}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/"viewCount":"(\d+)"/);
        if (match) {
            let num = parseInt(match[1]);
            resolve(num > 1000000 ? (num/1000000).toFixed(1) + 'M' : (num/1000).toFixed(0) + 'K');
        } else {
            resolve('Unknown');
        }
      });
    });
  });
}

async function run() {
  console.log("T-KfvoPBMto view: ", await getViews('T-KfvoPBMto'));
  console.log("XAqF9dZjbqA view: ", await getViews('XAqF9dZjbqA'));
}

run();
