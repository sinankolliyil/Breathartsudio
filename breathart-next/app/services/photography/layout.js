import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Professional Photography Services Dubai — Newborn, Wedding, Corporate',
  description: 'Explore BreathArt\'s professional photography services in Dubai. Family & lifestyle, wedding & romance, corporate branding, event photography, and commercial space photography.',
  alternates: {
    canonical: '/services/photography',
  },
  openGraph: {
    title: 'Professional Photography Services — BreathArt Studio Dubai',
    description: 'Fine-art photography services including newborn, maternity, wedding, corporate, and event photography in Dubai.',
    url: 'https://breathart.ae/services/photography',
    images: [
      {
        url: '/assets/services/service_family_lifestyle.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Professional Photography Services Dubai',
      },
    ],
  },
  twitter: {
    title: 'Professional Photography Services — BreathArt Studio Dubai',
    description: 'Fine-art photography services including newborn, maternity, wedding, corporate, and event photography in Dubai.',
    images: ['/assets/services/service_family_lifestyle.png'],
  },
};

export default function PhotographyLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Photography', url: '/services/photography' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Newborn Photography Dubai', description: 'Safety-certified cozy studio sessions capturing the pure innocence of your baby\'s first days with luxury props.', url: '/services/photography' },
          { name: 'Maternity Photography Dubai', description: 'Elegant pregnancy portraiture celebrating the raw beauty, glow, and strength of motherhood.', url: '/services/photography' },
          { name: 'Wedding Photography Dubai', description: 'Full-day comprehensive coverage of your luxury vows, candid emotion, and grand receptions.', url: '/services/photography' },
          { name: 'Corporate Photography Dubai', description: 'Professional documentation of company environments, branding campaigns, and corporate styling.', url: '/services/photography' },
          { name: 'Event Photography Dubai', description: 'Comprehensive event photography covering speakers, networking, and key moments.', url: '/services/photography' },
        ]}
      />
      <WebPageSchema
        name="Professional Photography Services Dubai"
        description="Explore BreathArt's photography services: newborn, maternity, wedding, corporate, event, and commercial photography."
        url="/services/photography"
      />
      {children}
    </>
  );
}
