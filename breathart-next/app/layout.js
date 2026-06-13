import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundLayers from '@/components/BackgroundLayers';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PaymentFloat from '@/components/PaymentFloat';
import ScrollTopButton from '@/components/ScrollTopButton';
import CustomCursor from '@/components/CustomCursor';
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from './schema';

export const metadata = {
  metadataBase: new URL('https://breathart.ae'),
  title: {
    default: 'BreathArt Photography Studio Dubai | Premium Photography & Videography',
    template: '%s | BreathArt Photography Studio Dubai',
  },
  description: 'Dubai\'s premier luxury photography studio specializing in newborn, wedding, corporate, and event photography. Cinematic visual storytelling with 12+ years of expertise. Book your session today.',
  keywords: ['photography studio Dubai', 'wedding photography Dubai', 'newborn photography Dubai', 'corporate photography UAE', 'event photography', 'videography Dubai', 'BreathArt', 'luxury photography', 'portrait studio', 'maternity photography'],
  authors: [{ name: 'BreathArt Photography Studio' }],
  creator: 'BreathArt Photography Studio',
  publisher: 'BreathArt Photography Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BreathArt Photography Studio Dubai | Premium Photography & Videography',
    description: 'Dubai\'s premier luxury photography studio specializing in newborn, wedding, corporate, and event photography. Cinematic visual storytelling with 12+ years of expertise.',
    url: 'https://breathart.ae',
    siteName: 'BreathArt Photography Studio',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Studio Dubai — Premium Photography & Videography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BreathArt Photography Studio Dubai | Premium Photography & Videography',
    description: 'Dubai\'s premier luxury photography studio specializing in newborn, wedding, corporate, and event photography with cinematic elegance.',
    images: ['/assets/hero/hero_nature.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/logo/photography-logo.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo/photography-logo.webp" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Global Structured Data */}
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className="fade-in active">
        <CustomCursor />
        <BackgroundLayers />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <PaymentFloat />
        <ScrollTopButton />
      </body>
    </html>
  );
}
