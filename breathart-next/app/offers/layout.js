import { BreadcrumbSchema, WebPageSchema, OfferCatalogSchema } from '../schema';

export const metadata = {
  title: 'Photography Packages & Special Offers Dubai',
  description: 'Explore BreathArt Photography Studio\'s exclusive packages and offers. Maternity, cake smash, couple, and event photography packages with transparent pricing in Dubai.',
  alternates: {
    canonical: '/offers',
  },
  openGraph: {
    title: 'Photography Packages & Special Offers — BreathArt Dubai',
    description: 'Exclusive photography packages and limited-time offers. Maternity, cake smash, couple, and event sessions with transparent pricing.',
    url: 'https://breathart.ae/offers',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Packages & Offers',
      },
    ],
  },
  twitter: {
    title: 'Photography Packages & Special Offers — BreathArt Dubai',
    description: 'Exclusive photography packages and limited-time offers. Maternity, cake smash, couple, and event sessions.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function OffersLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Offers', url: '/offers' },
        ]}
      />
      <OfferCatalogSchema />
      <WebPageSchema
        name="Photography Packages & Special Offers"
        description="Explore exclusive photography and videography packages with special pricing at BreathArt Studio Dubai."
        url="/offers"
      />
      {children}
    </>
  );
}
