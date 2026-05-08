const https = require('https');

function getViews(videoId) {
  return new Promise((resolve) => {
    https.get(`https://www.youtube.com/watch?v=${videoId}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/"viewCount":"(\d+)"/);
        resolve(match ? match[1] : 'Unknown');
      });
    });
  });
}

function getChannel(channelId) {
    return new Promise((resolve) => {
      https.get(`https://www.youtube.com/@${channelId}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const match = data.match(/subscriberCountText.*?(\d.*?) subscribers/i) || data.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"(.*?)"\}\}/);
          resolve(match ? match[1] : 'Unknown');
        });
      });
    });
}

async function run() {
  console.log("T-KfvoPBMto view: ", await getViews('T-KfvoPBMto'));
  console.log("XAqF9dZjbqA view: ", await getViews('XAqF9dZjbqA'));
  console.log("DaggysLifeClass subs: ", await getChannel('DaggysLifeClass'));
}

run();
