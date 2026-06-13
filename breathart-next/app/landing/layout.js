import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'Luxury Photography & Videography Studio Dubai — Exclusive Offers',
  description: 'BreathArt Studio Dubai — luxury photography and videography with exclusive limited-time offers. 50% off newborn photography, couple sessions, event coverage, and more. Book now.',
  alternates: {
    canonical: '/landing',
  },
  openGraph: {
    title: 'BreathArt Studio Dubai — Luxury Photography & Exclusive Offers',
    description: 'Luxury photography and videography with exclusive limited-time offers. 50% off newborn photography, couple sessions, and event coverage.',
    url: 'https://breathart.ae/landing',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Studio Dubai — Luxury Photography & Exclusive Offers',
      },
    ],
  },
  twitter: {
    title: 'BreathArt Studio Dubai — Luxury Photography & Exclusive Offers',
    description: 'Luxury photography and videography with exclusive limited-time offers. Book your session today.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function LandingLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Studio Landing', url: '/landing' },
        ]}
      />
      <WebPageSchema
        name="BreathArt Studio Dubai — Luxury Photography Landing"
        description="Luxury photography and videography studio in Dubai with exclusive offers and cinematic visual storytelling."
        url="/landing"
      />
      {children}
    </>
  );
}
