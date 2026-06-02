import Link from 'next/link';

export const metadata = {
  title: 'About Us | BreathArt',
  description: 'Learn about BreathArt Photography Studio — our philosophy, our story, and why clients trust us.',
};

const features = [
  {
    image: '/assets/feature_photographers.png',
    icon: 'fas fa-user-tie',
    title: 'Experienced Professional Photographers',
    description: 'Master artists with decades of collective experience in fine art photography.',
  },
  {
    image: '/assets/feature_maternity.png',
    icon: 'fas fa-female',
    title: 'Dedicated Lady Staff for Maternity',
    description: 'Ensuring absolute comfort, privacy, and ease for maternity & newborn sessions.',
    delay: 0.1,
  },
  {
    image: '/assets/feature_studio.png',
    icon: 'fas fa-mountain',
    title: 'Premium Studio Environment',
    description: 'A state-of-the-art space designed for creative excellence and high-fashion aesthetics.',
    delay: 0.2,
  },
  {
    image: '/assets/feature_equipment.png',
    icon: 'fas fa-camera',
    title: 'High-End Equipment & Lighting',
    description: 'Utilizing the latest mirrorless technology and professional studio lighting.',
    delay: 0.3,
  },
  {
    image: '/assets/feature_delivery.png',
    icon: 'fas fa-shipping-fast',
    title: 'Fast 24-Hour Photo Delivery',
    description: 'Rapid turn-around without compromising the artistry of post-production.',
    delay: 0.4,
  },
  {
    image: '/assets/service_wedding.png',
    icon: 'fas fa-heart',
    title: 'Trusted by 1000+ Happy Clients',
    description: 'Building lasting relationships through exceptional art and trusted services.',
    delay: 0.5,
  },
];

export default function AboutPage() {
  return (
    <>
      <header
        className="page-header"
        style={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: "linear-gradient(rgba(252,252,252,0.4), rgba(252,252,252,0.4)), url('/assets/parallax_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container container-narrow animate-reveal">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Legacy</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: '4rem' }}>About BreathArt</h1>
        </div>
      </header>

      {/* Why Choose BreathArt */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="text-center animate-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Standard</span>
            <h2 className="section-title">Why Choose BreathArt</h2>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card animate-reveal"
                style={{
                  height: '350px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '3rem',
                  borderRadius: '8px',
                  background: `url('${feature.image}') center/cover no-repeat`,
                  transitionDelay: feature.delay ? `${feature.delay}s` : undefined,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
                    zIndex: 1,
                  }}
                ></div>
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'left' }}>
                  <i className={feature.icon} style={{ fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}></i>
                  <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', fontSize: '1.4rem', color: '#fcfcfc' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" id="story">
        <div className="container">
          <div className="animate-reveal text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="cinematic-title">Our Story</span>
            <h2 className="section-title">Professional &amp; Premium Experience</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', textAlign: 'left', marginTop: '4rem' }}>
              <div>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 2, fontSize: '1rem', marginBottom: '2rem' }}>
                  At BreathArt Photography Studio, we deliver more than just photographs—we create timeless visual experiences. With years of professional expertise, our team combines artistic vision with advanced photography techniques to capture moments with elegance and precision.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 2, fontSize: '1rem' }}>
                  Every photoshoot is carefully planned to provide a seamless and comfortable experience for our clients. From lighting and composition to styling and storytelling, we focus on every detail to ensure exceptional results.
                </p>
              </div>
              <div>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 2, fontSize: '1rem', marginBottom: '2rem' }}>
                  Our commitment to quality, creativity, and personalized service allows us to deliver a truly premium photography experience. Whether it is a newborn session, family portrait, corporate shoot, or wedding celebration, BreathArt ensures every moment is captured beautifully and preserved for a lifetime.
                </p>
                <Link href="/contact" className="btn btn-gold" style={{ width: 'fit-content' }}>
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
