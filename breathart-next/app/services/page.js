import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../schema';

export const metadata = {
  title: 'Photography & Videography Services Dubai — Newborn, Wedding, Corporate, Events',
  description: 'Explore BreathArt\'s premium photography and videography services in Dubai. Newborn fine-art, wedding, family, corporate, real estate photography, and full event management.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Photography & Videography Services — BreathArt Studio Dubai',
    description: 'Premium photography services in Dubai: newborn, wedding, family, corporate, real estate, and event management.',
    url: 'https://breathart.ae/services',
    images: [
      {
        url: '/assets/services/service_newborn.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Services Dubai',
      },
    ],
  },
  twitter: {
    title: 'Photography & Videography Services — BreathArt Studio Dubai',
    description: 'Premium photography services in Dubai: newborn, wedding, family, corporate, and event photography.',
    images: ['/assets/services/service_newborn.png'],
  },
};

const services = [
  {
    id: 'service-newborn',
    number: '01 / Innocence',
    title: 'Newborn Fine-Art',
    image: '/assets/services/service_newborn.png',
    alt: 'Newborn Photography',
    backTitle: 'Pure Beginnings',
    description: 'Capturing the tender innocence of newborn days and early baby milestones with a cozy, safe, and highly artistic approach.',
    details: [
      { icon: 'fas fa-baby', text: '3-Hour Cozy Studio Session' },
      { icon: 'fas fa-female', text: 'Dedicated Caretaker Lady Staff Assistance' },
      { icon: 'fas fa-magic', text: 'Painterly Skin Retouching' },
      { icon: 'fas fa-box', text: 'Premium Linen Print Box' },
    ],
    ctaText: 'Book Newborn',
    ctaHref: '/contact',
    delay: 0,
  },
  {
    id: 'service-wedding',
    number: '02 / Devotion',
    title: 'Wedding Fine-Art',
    image: '/assets/services/service_wedding.png',
    alt: 'Wedding Photography',
    backTitle: 'Eternal Romance',
    description: 'An enduring fine-art legacy of your love story and grand celebrations, documented with profound depth and cinematic vision.',
    details: [
      { icon: 'fas fa-ring', text: 'Full Day Comprehensive Wedding Coverage' },
      { icon: 'fas fa-user-friends', text: 'Double Principle Photographers' },
      { icon: 'fas fa-book-open', text: 'Premium Handcrafted Leather Album' },
      { icon: 'fas fa-film', text: 'Cinematic High-Definition Highlights' },
    ],
    ctaText: 'Consultation',
    ctaHref: '/contact',
    delay: 0.1,
  },
  {
    id: 'service-event',
    number: '03 / Production',
    title: 'Events By BreathArt',
    image: '/assets/services/service_event.png',
    alt: 'Events By BreathArt',
    backTitle: 'Grand Productions',
    description: 'Creating unforgettable UAE events through innovative stage planning, celebrity collaborations, activations, and professional execution.',
    details: [
      { icon: 'fas fa-star', text: 'Stage Shows & Outdoor Events' },
      { icon: 'fas fa-users', text: 'Celebrity & Entertainment Curation' },
      { icon: 'fas fa-building', text: 'Corporate & Brand Activations' },
      { icon: 'fas fa-handshake', text: 'Strategic Channel Partnerships' },
    ],
    ctaText: 'Explore Events',
    ctaHref: '/services/events-by-breathart',
    delay: 0.2,
  },
  {
    id: 'service-pre-wedding',
    number: '04 / Familyhood',
    title: 'Family Fine-Art',
    image: '/assets/services/service_prewedding.png',
    alt: 'Family Photography',
    backTitle: 'First Chapter',
    description: 'Artistic family sessions that capture your unique warmth and family bonding in beautiful lifestyle settings.',
    details: [
      { icon: 'fas fa-users', text: 'Elegant Family Styling Assistance' },
      { icon: 'fas fa-sun', text: 'Sunset Outdoor Session' },
      { icon: 'fas fa-images', text: '30 Fully Edited Visual Masterplates' },
      { icon: 'fas fa-frame', text: 'Fine-Art Wall Frame Included' },
    ],
    ctaText: 'Book Session',
    ctaHref: '/contact',
    delay: 0.3,
  },
  {
    id: 'service-corporate',
    number: '05 / Enterprise',
    title: 'Corporate Vision',
    image: '/assets/services/service_corporate.png',
    alt: 'Corporate Photography',
    backTitle: 'Brand Legacy',
    description: 'Authoritative branding and executive documentation that elevates your professional identity to a cinematic level.',
    details: [
      { icon: 'fas fa-briefcase', text: 'Executive Headshots' },
      { icon: 'fas fa-building', text: 'Architecture & Space' },
      { icon: 'fas fa-users', text: 'Team Documentation' },
      { icon: 'fas fa-video', text: 'B-Roll Video Content' },
    ],
    ctaText: 'Book Session',
    ctaHref: '/contact',
    delay: 0.4,
  },
  {
    id: 'service-couple',
    number: '06 / Lifestyle',
    title: 'Real Estate Fine-Art',
    image: '/assets/services/service_couple.png',
    alt: 'Real Estate Photography',
    backTitle: 'Spatial Design',
    description: 'High-end spatial documentation capturing architectural brilliance and real estate layout aesthetics.',
    details: [
      { icon: 'fas fa-camera', text: 'Wide-Angle Architectural Framing' },
      { icon: 'fas fa-lightbulb', text: 'HDR Lighting & Exposure Bracketing' },
      { icon: 'fas fa-image', text: 'Premium Interior & Exterior Digital Plates' },
      { icon: 'fas fa-home', text: 'Twilight Session Availability' },
    ],
    ctaText: 'Inquire Quote',
    ctaHref: '/contact',
    delay: 0.5,
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Maternity & Newborn Fine-Art Photography', description: 'Award-winning maternity portraits and luxury newborn photography in Dubai.', url: '/services/photography' },
          { name: 'Wedding & Romance Films', description: 'Cinematic visual storytelling and comprehensive photography for luxury weddings.', url: '/services/videography' },
          { name: 'Corporate Branding & Headshots', description: 'Premium corporate photography and professional headshots for businesses.', url: '/services/photography' },
          { name: 'Event Management By BreathArt', description: 'End-to-end event planning, stage production, and brand activations.', url: '/services/events-by-breathart' },
        ]}
      />
      <WebPageSchema
        name="Photography & Videography Services Dubai"
        description="Premium photography and videography services. Maternity, newborn, wedding, corporate, and grand events."
        url="/services"
      />
      <header className="page-header">
        <div className="container container-narrow animate-reveal">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Artistry</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: '4.5rem' }}>Visual Offerings</h1>
          <p style={{ marginTop: '1.5rem', opacity: 0.7, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Curated photography catalogs designed to document your life's most precious milestones with ultimate refinement.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0, paddingBottom: '0.5rem' }}>
        <div className="container">
          <div className="services-grid-redesign">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="section connect-section-mobile" style={{ padding: '1.5rem 0 6rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderTop: '1px solid rgba(158, 112, 96, 0.2)',
            paddingTop: '2rem'
          }} className="connect-inner-mobile">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}>
              <div>
                <span className="cinematic-title" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>
                  Reserve Your Session
                </span>
                <h2 className="connect-heading" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  color: 'var(--color-white)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '1.2'
                }}>
                  Connect With Us
                </h2>
              </div>

              <div>
                <p style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  Have a vision you want to bring to life? Contact our team today to discuss package options, custom concepts, and calendar availability.
                </p>
                <span style={{
                  display: 'block',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--color-gold)',
                  marginBottom: '2.5rem'
                }}>
                  Ready to capture your milestones?
                </span>
                <Link 
                  href="/contact"
                  className="btn btn-gold"
                  style={{
                    padding: '1.2rem 3rem',
                    letterSpacing: '3px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Get In Touch &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
