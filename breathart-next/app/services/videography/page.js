'use client';

import Link from 'next/link';

const categories = [
  {
    id: 'cinematic-wedding',
    title: 'Wedding & Romance Films',
    description: 'Beautiful, high-definition cinematic storytelling of your most romantic milestones.',
    services: [
      { name: 'Cinematic Wedding Films', icon: 'fas fa-film', desc: 'Precious full-day wedding coverage edited into stunning high-definition visual narratives.' },
      { name: 'Pre-Wedding Romance Trailers', icon: 'fas fa-heart', desc: 'Short, cinematic engagement and romance trailers set in scenic destinations.' }
    ]
  },
  {
    id: 'commercial-corporate',
    title: 'Corporate & Commercial Videography',
    description: 'Dynamic and powerful visual content that enhances your brand authority and story.',
    services: [
      { name: 'Corporate Promos & Ads', icon: 'fas fa-ad', desc: 'High-impact promotional and advertisement video content for branding and digital channels.' },
      { name: 'Event Coverage & Highlights', icon: 'fas fa-video', desc: 'Energetic corporate conference, summit, or private gala highlight reels.' },
      { name: 'Social Media Reels', icon: 'fas fa-mobile-alt', desc: 'Engaging, premium mobile-optimized videos and reels for maximum reach.' }
    ]
  }
];

export default function VideographyPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="container animate-reveal active text-center">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Moving Image</span>
          <h1 className="section-title" style={{ color: 'var(--color-white)', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Videography Services</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.85rem' }}>
            Transforming moments into moving pieces of art with state-of-the-art cinematic vision and visual storytelling.
          </p>
        </div>
      </header>

      {/* Services Showcase */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          {categories.map((cat, catIdx) => (
            <div 
              key={cat.id} 
              style={{ 
                marginBottom: catIdx === categories.length - 1 ? 0 : '5rem',
                borderBottom: catIdx === categories.length - 1 ? 'none' : '1px solid rgba(158, 112, 96, 0.15)',
                paddingBottom: catIdx === categories.length - 1 ? 0 : '4rem'
              }}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <span className="cinematic-title" style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>
                  Category {String(catIdx + 1).padStart(2, '0')}
                </span>
                <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  {cat.title}
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', maxWidth: '600px' }}>
                  {cat.description}
                </p>
              </div>

              <div 
                style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem'
                }}
              >
                {cat.services.map((service, sIdx) => (
                  <div 
                    key={service.name}
                    style={{
                      background: 'var(--color-shade-2)',
                      border: '1px solid rgba(158, 112, 96, 0.15)',
                      borderRadius: '12px',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.3s ease, border-color 0.3s ease',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = 'var(--color-gold)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'rgba(158, 112, 96, 0.15)';
                    }}
                  >
                    <div>
                      <div 
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'rgba(158, 112, 96, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.5rem'
                        }}
                      >
                        <i className={service.icon} style={{ color: 'var(--color-gold)', fontSize: '1.25rem' }}></i>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-white)', marginBottom: '0.75rem', fontWeight: 600 }}>
                        {service.name}
                      </h3>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        {service.desc}
                      </p>
                    </div>

                    <Link 
                      href={`/contact?service=${encodeURIComponent(service.name.toLowerCase())}`}
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        color: 'var(--color-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginTop: 'auto'
                      }}
                    >
                      Book Session <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Catalog Inquiry CTA */}
          <div 
            style={{ 
              marginTop: '6rem', 
              textAlign: 'center',
              borderTop: '1px solid rgba(158, 112, 96, 0.15)',
              paddingTop: '4rem'
            }}
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
              Have unique requirements or ready to build your customized highlight video? Reach out today.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold" style={{ padding: '1rem 3rem' }}>
                Start Inquiry
              </Link>
              <Link href="/services" className="btn btn-outline" style={{ padding: '1rem 3rem', border: '1px solid var(--color-gold)' }}>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
