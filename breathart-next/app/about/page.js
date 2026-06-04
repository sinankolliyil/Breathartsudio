import Link from 'next/link';

export const metadata = {
  title: 'About Us | BreathArt',
  description: 'Learn about BreathArt Photography Studio — our philosophy, our story, and why clients trust us.',
};

const features = [
  {
    title: 'Experienced Photographers',
    desc: 'Master artists with decades of collective experience in fine art photography.',
    image: '/assets/feature_photographers.png',
    link: '/services',
  },
  {
    title: 'Dedicated Lady Staff',
    desc: 'Ensuring absolute comfort, privacy, and ease for maternity & newborn sessions.',
    image: '/assets/feature_maternity.png',
    link: '/services',
  },
  {
    title: 'Premium Studio',
    desc: 'A state-of-the-art space designed for creative excellence and high-fashion aesthetics.',
    image: '/assets/feature_studio.png',
    link: '/services',
  },
  {
    title: 'High-End Equipment',
    desc: 'Utilizing the latest mirrorless technology and professional studio lighting.',
    image: '/assets/feature_equipment.png',
    link: '/services',
  },
  {
    title: 'Fast Delivery',
    desc: 'Rapid turn-around without compromising the artistry of post-production.',
    image: '/assets/feature_delivery.png',
    link: '/services',
  },
  {
    title: 'Trusted By 1000+',
    desc: 'Building lasting relationships through exceptional art and trusted services.',
    image: '/assets/service_wedding.png',
    link: '/services',
  },
];

export default function AboutPage() {
  return (
    <>
      <header
        className="page-header"
        style={{
          background: "linear-gradient(rgba(252,252,252,0.4), rgba(252,252,252,0.4)), url('/assets/hero_nature.png')",
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
            <img src="/assets/album_intro.png" alt="Our Story Showcase" className="story-portrait-img" />
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
                <img src={feature.image} alt={feature.title} className="pillar-img" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Quote Section */}
      <section className="section text-center" style={{ padding: '3rem 0 8rem 0', textAlign: 'center' }}>
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
    </>
  );
}


