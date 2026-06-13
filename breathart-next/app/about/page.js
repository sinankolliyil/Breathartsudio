import Link from 'next/link';
import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'About BreathArt Photography Studio Dubai — Our Story & Philosophy',
  description: 'Discover the story behind BreathArt Photography Studio Dubai. 12+ years of premium photography expertise, experienced photographers, dedicated lady staff, and a state-of-the-art studio environment.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About BreathArt Photography Studio Dubai — Our Story & Philosophy',
    description: 'Discover the story behind Dubai\'s premier photography studio. 12+ years of expertise, experienced photographers, and a premium studio environment.',
    url: 'https://breathart.ae/about',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'About BreathArt Photography Studio Dubai',
      },
    ],
  },
  twitter: {
    title: 'About BreathArt Photography Studio Dubai — Our Story & Philosophy',
    description: 'Discover the story behind Dubai\'s premier photography studio. 12+ years of expertise and a premium studio environment.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

const features = [
  {
    title: 'Experienced Photographers',
    desc: 'Master artists with decades of collective experience in fine art photography.',
    image: '/assets/features/feature_photographers.png',
    link: '/services',
  },
  {
    title: 'Dedicated Lady Staff',
    desc: 'Ensuring absolute comfort, privacy, and ease for maternity & newborn sessions.',
    image: '/assets/features/feature_maternity.png',
    link: '/services',
  },
  {
    title: 'Premium Studio',
    desc: 'A state-of-the-art space designed for creative excellence and high-fashion aesthetics.',
    image: '/assets/features/feature_studio.png',
    link: '/services',
  },
  {
    title: 'High-End Equipment',
    desc: 'Utilizing the latest mirrorless technology and professional studio lighting.',
    image: '/assets/features/feature_equipment.png',
    link: '/services',
  },
  {
    title: 'Fast Delivery',
    desc: 'Rapid turn-around without compromising the artistry of post-production.',
    image: '/assets/features/feature_delivery.png',
    link: '/services',
  },
  {
    title: 'Trusted By 1000+',
    desc: 'Building lasting relationships through exceptional art and trusted services.',
    image: '/assets/services/service_wedding.png',
    link: '/services',
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <WebPageSchema
        name="About BreathArt Photography Studio Dubai"
        description="Discover the story behind Dubai's premier photography studio. 12+ years of expertise, experienced photographers, and a premium studio environment."
        url="/about"
      />
      <header
        className="page-header"
        style={{
          background: "linear-gradient(rgba(252,252,252,0.4), rgba(252,252,252,0.4)), url('/assets/hero/hero_nature.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 53%',
        }}
      >
        <div className="container container-narrow animate-reveal">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Legacy</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: '4rem' }}>About BreathArt</h1>
        </div>
      </header>

      <section className="section" style={{ padding: '6rem 0 2rem 0' }}>
        <div className="container text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Our Story</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Professional &amp; Premium Experience</h2>
        </div>

        <div className="story-custom-grid" style={{ marginTop: '2rem' }}>
          {/* Left Column */}
          <div className="story-left-col">
            <p className="story-text-emphasis">
              At <strong>BreathArt</strong>, we see photography and visual storytelling as more than just captures. To us, it's about creating memorable, personal experiences that elevate your everyday life. It's about understanding the unique nuances of the creative market in our region and the behaviors and desires of its audience.
            </p>
            <img src="/assets/about/album_intro.png" alt="Our Story Showcase" className="story-portrait-img" loading="lazy" decoding="async" />
          </div>

          {/* Right Column */}
          <div className="story-right-col">
            <p className="story-text">
              Every photoshoot is carefully planned to provide a seamless and comfortable experience for our clients. From lighting and composition to styling and storytelling, we focus on every detail to ensure exceptional results.
            </p>
            <p className="story-text">
              At BreathArt Photography Studio, we deliver more than just photographs—we create timeless visual experiences. With years of professional expertise, our team combines artistic vision with advanced photography techniques to capture moments with elegance and precision.
            </p>
            <p className="story-text" style={{ fontStyle: 'italic', fontWeight: '500' }}>
              This is the BreathArt difference. This is art, redefined.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section Header */}
      <section className="section" style={{ padding: '2rem 0 0 0' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Standard</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose BreathArt</h2>
        </div>
      </section>

      {/* Why Choose Us Features list */}
      <section className="section" style={{ padding: '0 0 0 0' }}>
        <div className="pillar-section-container" style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
          {features.map((feature, index) => (
            <div key={index} className={`pillar-row ${index % 2 !== 0 ? 'alt-layout' : ''}`}>
              <div className="pillar-left">
                <div className="pillar-header">
                  <span className="pillar-plus">+</span>
                  <h2 className="pillar-title">{feature.title}</h2>
                </div>
                <p className="pillar-desc">{feature.desc}</p>
              </div>
              <div className="pillar-right">
                <img src={feature.image} alt={feature.title} className="pillar-img" loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Quote Section */}
      <section className="section text-center" style={{ padding: '3rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            color: 'var(--color-gold)',
            margin: '0 auto',
            marginBottom: '0rem',
            maxWidth: '800px',
            lineHeight: '1.5',
          }}>
            "Every picture tells a story of love"
          </p>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="section" style={{ padding: '4rem 0 8rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderTop: '1px solid rgba(158, 112, 96, 0.2)',
            paddingTop: '4rem'
          }}>
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
                <h2 style={{
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


