async function run() {
  const res = await fetch('https://www.youtube.com/@DaggysLifeClass');
  const text = await res.text();
  const match = text.match(/<meta property="og:image" content="([^"]+)"/);
  console.log(match ? match[1] : 'no match');
}
run();
