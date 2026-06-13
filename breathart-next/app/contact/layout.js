import { BreadcrumbSchema, ContactPageSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'Contact Us — Book Your Photography Session in Dubai',
  description: 'Get in touch with BreathArt Photography Studio Dubai. Book your newborn, wedding, corporate, or event photography session. Call +971 52 640 0679 or visit our studio.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact BreathArt Photography Studio Dubai — Book Your Session',
    description: 'Reserve your photography session at Dubai\'s premier luxury studio. Newborn, wedding, corporate, and event photography. Call us or fill out our inquiry form.',
    url: 'https://breathart.ae/contact',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'Contact BreathArt Photography Studio Dubai',
      },
    ],
  },
  twitter: {
    title: 'Contact BreathArt Photography Studio Dubai — Book Your Session',
    description: 'Reserve your photography session at Dubai\'s premier luxury studio. Call us or fill out our inquiry form.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <ContactPageSchema />
      <WebPageSchema
        name="Contact BreathArt Photography Studio"
        description="Book your photography session or inquire about services. Located in Dubai, UAE."
        url="/contact"
      />
      {children}
    </>
  );
}
