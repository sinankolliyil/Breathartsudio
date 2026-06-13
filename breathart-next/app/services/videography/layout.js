import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Cinematic Videography Services Dubai — Wedding Films, Corporate & Aerial',
  description: 'BreathArt\'s premium videography services in Dubai. Cinematic wedding films, corporate promos, social media reels, event coverage, and aerial drone cinematography.',
  alternates: {
    canonical: '/services/videography',
  },
  openGraph: {
    title: 'Cinematic Videography Services — BreathArt Studio Dubai',
    description: 'Premium videography including cinematic wedding films, corporate promos, social reels, and aerial drone cinematography in Dubai.',
    url: 'https://breathart.ae/services/videography',
    images: [
      {
        url: '/assets/services/service_video_wedding.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Cinematic Videography Services Dubai',
      },
    ],
  },
  twitter: {
    title: 'Cinematic Videography Services — BreathArt Studio Dubai',
    description: 'Premium videography including cinematic wedding films, corporate promos, and aerial drone cinematography.',
    images: ['/assets/services/service_video_wedding.png'],
  },
};

export default function VideographyLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Videography', url: '/services/videography' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Cinematic Wedding Films Dubai', description: 'Full-day wedding coverage edited into stunning high-definition cinematic visual narratives.', url: '/services/videography' },
          { name: 'Corporate Video Production Dubai', description: 'High-impact promotional and advertisement video content for branding and digital channels.', url: '/services/videography' },
          { name: 'Aerial Drone Cinematography Dubai', description: 'Ultra-high definition drone and aerial cinematography capturing grand landscapes and event venues.', url: '/services/videography' },
        ]}
      />
      <WebPageSchema
        name="Cinematic Videography Services Dubai"
        description="Premium videography services: wedding films, corporate promos, social reels, event coverage, and aerial drone cinematography."
        url="/services/videography"
      />
      {children}
    </>
  );
}
