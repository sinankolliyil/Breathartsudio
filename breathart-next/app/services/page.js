import ServiceCard from './components/ServiceCard';

export const metadata = {
  title: 'Expertise | BreathArt Fine Art Studio',
  description: 'Explore our premium photography collections from Maternity and Newborn to Wedding and Grand Events.',
};

const services = [
  {
    id: 'service-newborn',
    number: '01 / Innocence',
    title: 'Newborn Fine-Art',
    image: '/assets/service_newborn.png',
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
    image: '/assets/service_wedding.png',
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
    number: '03 / Connection',
    title: 'Event Photography',
    image: '/assets/service_event.png',
    alt: 'Event Photography',
    backTitle: 'Vivid Celebrations',
    description: 'Dynamic, elegant, and high-end coverage of private galas, luxury celebrations, and dynamic commercial gatherings.',
    details: [
      { icon: 'fas fa-calendar-alt', text: 'Flexible Hourly Event Packages' },
      { icon: 'fas fa-bolt', text: 'Rapid 24-Hour Same-Day Previews' },
      { icon: 'fas fa-share-alt', text: 'Online Digital Gallery Sharing Kit' },
      { icon: 'fas fa-images', text: 'Full High-Resolution Edited Selection' },
    ],
    ctaText: 'Inquire Event',
    ctaHref: '/contact',
    delay: 0.2,
  },
  {
    id: 'service-pre-wedding',
    number: '04 / Familyhood',
    title: 'Family Fine-Art',
    image: '/assets/service_prewedding.png',
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
    image: '/assets/service_corporate.png',
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
    image: '/assets/service_couple.png',
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
      <header className="page-header">
        <div className="container container-narrow animate-reveal">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Artistry</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: '4.5rem' }}>Visual Offerings</h1>
          <p style={{ marginTop: '1.5rem', opacity: 0.7, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Curated photography catalogs designed to document your life's most precious milestones with ultimate refinement.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-grid-redesign">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
