const fs = require('fs');
const css = fs.readFileSync('app/globals.css', 'utf8');

const regex = /\.section[ {]| \.section[ {]|\.section-header|\.cinematic-title/g;
let match;
while ((match = regex.exec(css)) !== null) {
    const start = Math.max(0, match.index - 50);
    const end = Math.min(css.length, match.index + 200);
    console.log('--- MATCH ---');
    console.log(css.substring(start, end));
}
