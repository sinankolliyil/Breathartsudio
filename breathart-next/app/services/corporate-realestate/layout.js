import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Corporate & Real Estate Photography Dubai — BreathArt',
  description: 'Elevate your professional brand with executive headshots, company branding campaigns, commercial space, architectural, and real estate photography in Dubai.',
  alternates: {
    canonical: '/services/corporate-realestate',
  },
  openGraph: {
    title: 'Corporate & Real Estate Photography Dubai — BreathArt',
    description: 'Elevate your professional brand with executive headshots, company branding campaigns, commercial space, architectural, and real estate photography in Dubai.',
    url: 'https://breathart.ae/services/corporate-realestate',
    images: [
      {
        url: '/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp',
        width: 1200,
        height: 630,
        alt: 'BreathArt Corporate & Real Estate Photography Dubai',
      },
    ],
  },
  twitter: {
    title: 'Corporate & Real Estate Photography Dubai — BreathArt',
    description: 'Elevate your professional brand with executive headshots, company branding campaigns, commercial space, architectural, and real estate photography in Dubai.',
    images: ['/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp'],
  },
};

export default function CorporateRealEstateLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Corporate & Real Estate', url: '/services/corporate-realestate' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Corporate Photography Dubai', description: 'Professional documentation of company environments, branding campaigns, and executive headshots.', url: '/services/corporate-realestate' },
          { name: 'Real Estate Photography Dubai', description: 'High-end wide-angle and HDR architectural photography for spaces and premium properties.', url: '/services/corporate-realestate' },
        ]}
      />
      <WebPageSchema
        name="Corporate & Real Estate Photography Dubai"
        description="Explore BreathArt's corporate headshots, branding, real estate, and spatial photography in Dubai."
        url="/services/corporate-realestate"
      />
      {children}
    </>
  );
}
