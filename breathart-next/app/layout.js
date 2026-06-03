import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundLayers from '@/components/BackgroundLayers';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollTopButton from '@/components/ScrollTopButton';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: {
    default: 'BreathArt | Capture the Moment. Create the Story.',
    template: '%s | BreathArt',
  },
  description: 'Premium photography studio for professional weddings, portraits, and creative visuals.',
  keywords: ['photography', 'wedding photography', 'portrait', 'studio', 'Dubai', 'BreathArt'],
  openGraph: {
    title: 'BreathArt | Capture the Moment. Create the Story.',
    description: 'Premium photography studio for professional weddings, portraits, and creative visuals.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className="fade-in active">
        <CustomCursor />
        <BackgroundLayers />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <ScrollTopButton />
      </body>
    </html>
  );
}
