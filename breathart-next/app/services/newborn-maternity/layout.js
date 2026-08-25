import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Newborn & Maternity Photography in Dubai — BreathArt',
  description: 'Capture life\'s most precious moments with professional maternity and newborn photography in Dubai.',
  alternates: {
    canonical: '/services/newborn-maternity',
  },
  openGraph: {
    title: 'Newborn & Maternity Photography in Dubai — BreathArt',
    description: 'Capture life\'s most precious moments with professional maternity and newborn photography in Dubai.',
    url: 'https://breathart.ae/services/newborn-maternity',
    images: [
      {
        url: '/assets/gallery/newborn/BK-108_LORRIE_890_.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'BreathArt Newborn & Maternity Photography Dubai',
      },
    ],
  },
  twitter: {
    title: 'Newborn & Maternity Photography in Dubai — BreathArt',
    description: 'Capture life\'s most precious moments with professional maternity and newborn photography in Dubai.',
    images: ['/assets/gallery/newborn/BK-108_LORRIE_890_.jpg.webp'],
  },
};

export default function NewbornMaternityLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Newborn & Maternity', url: '/services/newborn-maternity' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Newborn Photography Dubai', description: 'Safety-certified cozy studio sessions capturing the pure innocence of your baby\'s first days with luxury props.', url: '/services/newborn-maternity' },
          { name: 'Maternity Photography Dubai', description: 'Elegant pregnancy portraiture celebrating the raw beauty, glow, and strength of motherhood.', url: '/services/newborn-maternity' },
        ]}
      />
      <WebPageSchema
        name="Newborn & Maternity Photography in Dubai"
        description="Capture life's most precious moments with professional maternity and newborn photography in Dubai."
        url="/services/newborn-maternity"
      />
      {children}
    </>
  );
}
