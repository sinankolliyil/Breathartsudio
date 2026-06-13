import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Event Management & Production Services Dubai — Events By BreathArt',
  description: 'Events By BreathArt — UAE\'s premier event management company. Stage shows, celebrity collaborations, corporate events, brand activations, and entertainment programs in Dubai.',
  alternates: {
    canonical: '/services/events-by-breathart',
  },
  openGraph: {
    title: 'Event Management & Production — Events By BreathArt Dubai',
    description: 'Creating unforgettable UAE events through innovative planning. Stage shows, celebrity collaborations, corporate events, and brand activations.',
    url: 'https://breathart.ae/services/events-by-breathart',
    images: [
      {
        url: '/assets/services/service_event_main.png',
        width: 1200,
        height: 630,
        alt: 'Events By BreathArt — Event Management Dubai',
      },
    ],
  },
  twitter: {
    title: 'Event Management & Production — Events By BreathArt Dubai',
    description: 'Creating unforgettable UAE events. Stage shows, celebrity collaborations, corporate events, and brand activations.',
    images: ['/assets/services/service_event_main.png'],
  },
};

export default function EventsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Events By BreathArt', url: '/services/events-by-breathart' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Stage Shows & Productions Dubai', description: 'Grand set designs, high-end acoustics, lighting production, and theatrical stage management.', url: '/services/events-by-breathart' },
          { name: 'Corporate Events Dubai', description: 'High-impact business conferences, seminars, annual meetings, and award galas.', url: '/services/events-by-breathart' },
          { name: 'Brand Activations Dubai', description: 'Creative experiential marketing, immersive pop-ups, and interactive product launches.', url: '/services/events-by-breathart' },
          { name: 'Celebrity Event Management Dubai', description: 'Managing high-profile talent, VIP guest lists, and premium entertainment programs.', url: '/services/events-by-breathart' },
        ]}
      />
      <WebPageSchema
        name="Events By BreathArt — Event Management Dubai"
        description="UAE's premier event management company. Stage shows, celebrity collaborations, corporate events, brand activations, and entertainment programs."
        url="/services/events-by-breathart"
      />
      {children}
    </>
  );
}
