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

// 2. Replace Links in Featured Services
const replacements = [
  // Newborn
  {
    from: '<Link href="/services#service-newborn" className="btn-premium btn-premium-outline">',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Newborn\')} className="btn-premium btn-premium-outline">'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Newborn\')} className="btn-premium btn-premium-outline">'
  },
  {
    from: '<Link href="/services#service-newborn" className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Newborn\')} className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Newborn\')} className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>'
  },
  
  // Wedding
  {
    from: '<Link href="/services#service-wedding" className="btn-premium btn-premium-outline">',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Wedding\')} className="btn-premium btn-premium-outline">'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Wedding\')} className="btn-premium btn-premium-outline">'
  },
  {
    from: '<Link href="/services#service-wedding" className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Wedding\')} className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Wedding\')} className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>'
  },
  
  // Corporate -> All
  {
    from: '<Link href="/services#service-corporate" className="btn-premium btn-premium-outline">',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'All\')} className="btn-premium btn-premium-outline">'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'All\')} className="btn-premium btn-premium-outline">'
  },
  {
    from: '<Link href="/services#service-corporate" className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'All\')} className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'All\')} className="btn-premium btn-premium-outline" style={{ fontSize: \'0.7rem\', padding: \'0.6rem 1.2rem\' }}>'
  },

  // Remaining Services Grid
  {
    from: '<GalleryItem image="/assets/services/service_event.png" alt="Event Photography" title="Event" number="04" href="/services#service-event" buttonText="Explore Session" />',
    to: '<GalleryItem image="/assets/services/service_event.png" alt="Event Photography" title="Event" number="04" onClick={(e) => handleExploreClick(e, \'Event\')} buttonText="Explore Session" />'
  },
  {
    from: '<GalleryItem image="/assets/services/service_couple.png" alt="Real Estate Photography" title="Real Estate" number="05" href="/services#service-couple" buttonText="Explore Session" delay={0.1} />',
    to: '<GalleryItem image="/assets/services/service_couple.png" alt="Real Estate Photography" title="Real Estate" number="05" onClick={(e) => handleExploreClick(e, \'Real Estate\')} buttonText="Explore Session" delay={0.1} />'
  },
  {
    from: '<GalleryItem image="/assets/services/service_prewedding.png" alt="Family Photography" title="Family" number="06" href="/services#service-pre-wedding" buttonText="Explore Session" delay={0.2} wrapperClass="span-2-desktop" />',
    to: '<GalleryItem image="/assets/services/service_prewedding.png" alt="Family Photography" title="Family" number="06" onClick={(e) => handleExploreClick(e, \'Family\')} buttonText="Explore Session" delay={0.2} wrapperClass="span-2-desktop" />'
  },

  // Explore more container at bottom
  {
    from: '<Link href="/services#service-newborn" className="btn btn-outline explore-btn">',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Newborn\')} className="btn btn-outline explore-btn">'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Newborn\')} className="btn btn-outline explore-btn">'
  },
  {
    from: '<Link href="/services#service-couple" className="btn btn-outline explore-btn">',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Wedding\')} className="btn btn-outline explore-btn">'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Wedding\')} className="btn btn-outline explore-btn">'
  },
  {
    from: '<Link href="/services#service-event" className="btn btn-outline explore-btn">',
    to: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Event\')} className="btn btn-outline explore-btn">'
  },
  {
    from: '</Link>',
    to: '</a>',
    context: '<a href="#gallery" onClick={(e) => handleExploreClick(e, \'Event\')} className="btn btn-outline explore-btn">'
  }
];

// Helper to replace matching the context (for closing tags)
for (let rep of replacements) {
  if (rep.context) {
    // find the context
    let idx = content.indexOf(rep.context);
    while (idx !== -1) {
      const nextEndLink = content.indexOf('</Link>', idx);
      if (nextEndLink !== -1 && nextEndLink < idx + 200) {
        content = content.substring(0, nextEndLink) + rep.to + content.substring(nextEndLink + 7);
      }
      idx = content.indexOf(rep.context, idx + 1);
    }
  } else {
    content = content.replaceAll(rep.from, rep.to);
  }
}

fs.writeFileSync(pageJsPath, content, 'utf8');
console.log('Done modifying page.js');
