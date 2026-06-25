const fs = require('fs');
const path = require('path');

const pageJsPath = path.join(__dirname, 'app', '(home)', 'page.js');
let content = fs.readFileSync(pageJsPath, 'utf8');

// #newborn gets paddingBottom: 0
content = content.replace(
  '<section id="newborn" className="section" style={{ paddingTop: \'2rem\' }}>',
  '<section id="newborn" className="section" style={{ paddingTop: \'2rem\', paddingBottom: 0 }}>'
);

// #wedding gets paddingTop: '2rem' and paddingBottom: 0
content = content.replace(
  '<section id="wedding" className="section">',
  '<section id="wedding" className="section" style={{ paddingTop: \'2rem\', paddingBottom: 0 }}>'
);

// #event-management gets paddingTop: '2rem' and paddingBottom: 0
content = content.replace(
  '<section id="event-management" className="section">',
  '<section id="event-management" className="section" style={{ paddingTop: \'2rem\', paddingBottom: 0 }}>'
);

// #showcase-gallery-section gets paddingTop: '2rem'
content = content.replace(
  '<section id="showcase-gallery-section" className="section">',
  '<section id="showcase-gallery-section" className="section" style={{ paddingTop: \'2rem\' }}>'
);

fs.writeFileSync(pageJsPath, content, 'utf8');
console.log('Padding tweaks applied to all sections');
