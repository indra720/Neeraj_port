const sharp = require('sharp');
const fs = require('fs');

const inputPath = 'd:/NeerajSharma/public/assets/images/neeraj-clean.png';
const width = 800;
const height = 950;

const bgSvg = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="warmGlow" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#FCF9F6"/>
      <stop offset="40%" stop-color="#F4E8E2"/>
      <stop offset="75%" stop-color="#EAD6CC"/>
      <stop offset="100%" stop-color="#DFC4B6"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#warmGlow)"/>
</svg>
`);

fs.mkdirSync('d:/NeerajSharma/images', { recursive: true });

sharp(bgSvg).png().toBuffer().then(bgBuf => {
  return sharp(inputPath)
    .resize(760, 850, { fit: 'inside' })
    .toBuffer()
    .then(personBuf => {
      return sharp(bgBuf)
        .composite([
          {
            input: personBuf,
            gravity: 'south',
            blend: 'over'
          }
        ])
        .jpeg({ quality: 95 })
        .toFile('d:/NeerajSharma/images/neeraj-portrait.jpg');
    });
}).then(() => {
  fs.copyFileSync(inputPath, 'd:/NeerajSharma/images/neeraj-clean.png');
  console.log('Successfully generated luxury editorial portrait!');
}).catch(console.error);
