const fs = require('fs');
const path = require('path');

const pageJsPath = path.join(__dirname, 'app', '(home)', 'page.js');
let content = fs.readFileSync(pageJsPath, 'utf8');

// 1. Add handleExploreClick
if (!content.includes('handleExploreClick')) {
  const handlerCode = `
  const handleExploreClick = (e, category) => {
    e.preventDefault();
    setFilter(category);
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
`;
  content = content.replace(
    "const [filter, setFilter] = useState('All');",
    "const [filter, setFilter] = useState('All');\n" + handlerCode
  );
}

// 2. Replace <Link href="/services#service-..."> with <a href="#gallery" onClick="...">
content = content.replace(
  /<Link href="\/services#service-([^"]+)"([^>]*)>([\s\S]*?)<\/Link>/g,
  (match, p1, p2, p3) => {
    let category = p1;
    if (p1 === 'newborn') category = 'Newborn';
    if (p1 === 'wedding') category = 'Wedding';
    if (p1 === 'corporate') category = 'All';
    if (p1 === 'event') category = 'Event';
    if (p1 === 'couple') category = 'Wedding'; // the old explore button says "Explore Wedding Stories" for couple
    
    return `<a href="#gallery" onClick={(e) => handleExploreClick(e, '${category}')}${p2}>${p3}</a>`;
  }
);

// 3. Replace <GalleryItem ... href="/services#service-..."> with onClick="..."
content = content.replace(
  /<GalleryItem([^>]*)href="\/services#service-([^"]+)"([^>]*)>/g,
  (match, p1, p2, p3) => {
    let category = p2;
    if (p2 === 'event') category = 'Event';
    if (p2 === 'couple') category = 'Real Estate';
    if (p2 === 'pre-wedding') category = 'Family';
    return `<GalleryItem${p1}onClick={(e) => handleExploreClick(e, '${category}')}${p3}>`;
  }
);

fs.writeFileSync(pageJsPath, content, 'utf8');
console.log('Fixed page.js cleanly');
