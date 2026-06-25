const fs = require('fs');
const path = require('path');

const pageJsPath = path.join(__dirname, 'app', '(home)', 'page.js');
let content = fs.readFileSync(pageJsPath, 'utf8');

content = content.replaceAll("paddingTop: '2rem'", "paddingTop: '3.5rem'");

fs.writeFileSync(pageJsPath, content, 'utf8');
console.log('Padding increased from 2rem to 3.5rem');
