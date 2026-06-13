import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'Premium Photography & Videography Studio Dubai',
  description: 'BreathArt Photography Studio Dubai — luxury newborn, wedding, corporate, and event photography. Cinematic visual storytelling, premium studio, 12+ years of expertise. Explore our services and book your session.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BreathArt Photography Studio Dubai | Premium Photography & Videography',
    description: 'Dubai\'s premier luxury photography studio. Newborn, wedding, corporate, and event photography with cinematic elegance. Book your session today.',
    url: 'https://breathart.ae',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Studio Dubai — Luxury Photography',
      },
    ],
  },
  twitter: {
    title: 'BreathArt Photography Studio Dubai | Premium Photography & Videography',
    description: 'Dubai\'s premier luxury photography studio. Newborn, wedding, corporate, and event photography with cinematic elegance.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function HomeLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <WebPageSchema
        name="BreathArt Photography Studio Dubai — Home"
        description="Dubai's premier luxury photography and videography studio specializing in newborn, wedding, corporate, and event photography."
        url="/"
      />
      {children}
    </>
  );
}
