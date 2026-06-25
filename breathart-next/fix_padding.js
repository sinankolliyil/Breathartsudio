const fs = require('fs');
const path = require('path');

const pageJsPath = path.join(__dirname, 'app', '(home)', 'page.js');
let content = fs.readFileSync(pageJsPath, 'utf8');

// Add paddingBottom: 0 to our-services
content = content.replace(
  '<section id="our-services" className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>',
  '<section id="our-services" className="section" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>'
);

// Add paddingTop: 0 to newborn
content = content.replace(
  '<section id="newborn" className="section">',
  '<section id="newborn" className="section" style={{ paddingTop: 0 }}>'
);

fs.writeFileSync(pageJsPath, content, 'utf8');
console.log('Padding fixed successfully.');
