const fs = require('fs');
const path = require('path');

const pageJsPath = path.join(__dirname, 'app', '(home)', 'page.js');
let content = fs.readFileSync(pageJsPath, 'utf8');

// Replace remaining </Link> that correspond to <a href="#gallery"...
const lines = content.split('\n');
let insideATag = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<a href="#gallery"') && !lines[i].includes('</a>')) {
    insideATag = true;
  }
  if (insideATag && lines[i].includes('</Link>')) {
    lines[i] = lines[i].replace('</Link>', '</a>');
    insideATag = false;
  }
}
content = lines.join('\n');
fs.writeFileSync(pageJsPath, content, 'utf8');
console.log('Fixed unmatched </Link> tags');
