'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 'cinematic-wedding',
    title: 'wedding & romance films',
    description: 'Beautiful, high-definition cinematic storytelling of your most romantic milestones. We craft visual poems that capture the glances, heartbeats, and grand settings.',
    image: '/assets/service_video_wedding.png',
    services: [
      { name: 'Cinematic Wedding Films', icon: 'fas fa-film', desc: 'Precious full-day wedding coverage edited into stunning high-definition visual narratives.' },
      { name: 'Pre-Wedding Romance Trailers', icon: 'fas fa-heart', desc: 'Short, cinematic engagement and romance trailers set in scenic destinations.' }
    ]
  },
  {
    id: 'commercial-corporate',
    title: 'corporate & commercial film',
    description: 'Dynamic and powerful visual content that enhances your brand authority, shares your mission, and details product design with precision.',
    image: '/assets/service_video_commercial.png',
    services: [
      { name: 'Corporate Promos & Ads', icon: 'fas fa-ad', desc: 'High-impact promotional and advertisement video content for branding and digital channels.' },
      { name: 'Event Coverage & Highlights', icon: 'fas fa-video', desc: 'Energetic corporate conference, summit, or private gala highlight reels.' },
      { name: 'Social Media Reels', icon: 'fas fa-mobile-alt', desc: 'Engaging, premium mobile-optimized videos and reels for maximum reach.' }
    ]
  }
];

export default function VideographyPage() {
  const [activeAccordion, setActiveAccordion] = useState({});

  const toggleAccordion = (catId, index) => {
    setActiveAccordion(prev => ({
      ...prev,
      [catId]: prev[catId] === index ? null : index
    }));
  };

  return (
    <>
      {/* Page Header */}
      <header className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="container animate-reveal active text-center">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Moving Image</span>
          <h1 className="section-title" style={{ color: 'var(--color-white)', fontSize: '3.5rem', marginBottom: '1.5rem', textTransform: 'none' }}>Videography</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.85rem' }}>
            Transforming moments into moving pieces of art with state-of-the-art cinematic vision and visual storytelling.
          </p>
        </div>
      </header>

      {/* Services Showcase */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '8rem' }}>
        <div className="container">
          {categories.map((cat, catIdx) => {
            const isEven = catIdx % 2 === 0;
            return (
              <div 
                key={cat.id}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  flexWrap: 'wrap',
                  gap: '4rem',
                  alignItems: 'center',
                  marginBottom: catIdx === categories.length - 1 ? 0 : '8rem',
                }}
                className="services-alternate-row"
              >
                {/* Text Column */}
                <div style={{ flex: '1 1 450px' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <span className="cinematic-title" style={{ color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '3px' }}>
                      Category {String(catIdx + 1).padStart(2, '0')}
                    </span>
                    <h2 
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        fontSize: '3.5rem', 
                        fontWeight: '700',
                        color: 'var(--color-white)',
                        marginTop: '0.5rem',
                        marginBottom: '1rem',
                        textTransform: 'lowercase',
                        lineHeight: 1.1
                      }}
                    >
                      {cat.title}
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                      {cat.description}
                    </p>
                  </div>

                  {/* Accordions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {cat.services.map((service, sIdx) => {
                      const isOpen = activeAccordion[cat.id] === sIdx;
                      return (
                        <div 
                          key={service.name}
                          style={{
                            borderBottom: '1px solid rgba(158, 112, 96, 0.15)',
                            padding: '1rem 0'
                          }}
                        >
                          <div 
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer'
                            }}
                            onClick={() => toggleAccordion(cat.id, sIdx)}
                          >
                            <h4 
                              style={{ 
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.95rem',
                                color: isOpen ? 'var(--color-gold)' : 'var(--color-white)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: 600,
                                transition: 'color 0.3s'
                              }}
                            >
                              {service.name}
                            </h4>
                            <i 
                              className={`fas fa-${isOpen ? 'minus' : 'plus'}`} 
                              style={{ 
                                color: 'var(--color-gold)', 
                                fontSize: '0.8rem',
                                transition: 'transform 0.3s'
                              }}
                            ></i>
                          </div>

                          {isOpen && (
                            <div style={{ marginTop: '1rem', paddingRight: '1rem' }}>
                              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                                {service.desc}
                              </p>
                              <Link 
                                href={`/contact?service=${encodeURIComponent(service.name.toLowerCase())}`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  fontSize: '0.65rem',
                                  fontWeight: '700',
                                  color: 'var(--color-gold)',
                                  textTransform: 'uppercase',
                                  letterSpacing: '1px'
                                }}
                              >
                                Book Session <i className="fas fa-arrow-right" style={{ fontSize: '0.6rem' }}></i>
                              </Link>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Visual Column */}
                <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
                  <div 
                    style={{
                      width: '100%',
                      maxWidth: '550px',
                      height: '600px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '0px',
                      border: '1px solid rgba(158, 112, 96, 0.2)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                    }}
                    className="service-image-box-astudio"
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'none'}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Styled inline media query for responsiveness */}
      <style jsx global>{`
        @media (max-width: 991px) {
          .services-alternate-row {
            flex-direction: column !important;
            gap: 2.5rem !important;
            margin-bottom: 5rem !important;
          }
          .service-image-box-astudio {
            height: 400px !important;
          }
        }
      `}</style>
    </>
  );
}
