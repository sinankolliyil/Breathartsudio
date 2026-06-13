/**
 * JSON-LD Structured Data Components for SEO
 * These render invisible <script type="application/ld+json"> tags.
 * No visual impact on the website.
 */

const SITE_URL = 'https://breathart.ae';
const SITE_NAME = 'BreathArt Photography Studio';
const LOGO_URL = `${SITE_URL}/assets/logo/BreathArt Photography Logo.png`;

// ── Organization Schema ──
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Premium photography and videography studio in Dubai specializing in newborn, wedding, corporate, and event photography with cinematic elegance.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971-52-640-0679',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971-52-215-0837',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    email: 'Info@breathart.ae',
    sameAs: [
      'https://wa.me/971526400679',
    ],
    foundingDate: '2012',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebSite Schema ──
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Premium photography studio in Dubai offering newborn, wedding, corporate, event photography and videography services.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── LocalBusiness Schema ──
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PhotographyBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/assets/hero/hero_nature.png`,
    description: 'Dubai\'s luxury photography studio specializing in cinematic visual legacies — newborn, wedding, corporate, and event photography.',
    telephone: ['+971-52-640-0679', '+971-52-215-0837'],
    email: 'Info@breathart.ae',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048493,
      longitude: 55.27078280,
    },
    priceRange: '$$',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card, Tamara',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Photography & Videography Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Photography',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newborn Fine-Art Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Photography' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Videography',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cinematic Wedding Films' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate & Commercial Video' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial & Drone Cinematography' } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── BreadcrumbList Schema ──
export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebPage Schema ──
export function WebPageSchema({ name, description, url }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── ContactPage Schema ──
export function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BreathArt Photography Studio',
    description: 'Book your premium photography session or inquire about our services. Located in Dubai, UAE.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'PhotographyBusiness',
      name: SITE_NAME,
      telephone: ['+971-52-640-0679', '+971-52-215-0837'],
      email: 'Info@breathart.ae',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Service Schema ──
export function ServiceSchema({ services }) {
  const schema = services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'PhotographyBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    url: `${SITE_URL}${service.url}`,
  }));

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

// ── OfferCatalog Schema ──
export function OfferCatalogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'BreathArt Photography Packages & Offers',
    description: 'Exclusive photography and videography packages with special pricing for newborn, maternity, wedding, couple, and event sessions in Dubai.',
    url: `${SITE_URL}/offers`,
    provider: {
      '@type': 'PhotographyBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Maternity Fine-Art Series',
        description: 'Elegant pregnancy portraiture celebrating raw beauty & motherhood',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'First Birthday Cake Smash',
        description: 'Celebrate milestones with fun themes, messy cakes, and pure joy',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Couple & Engagement Stories',
        description: 'Cinematic romance portfolios captured in stunning locations',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Event & Celebration Coverage',
        description: 'Comprehensive visual records for grand events and family galas',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
