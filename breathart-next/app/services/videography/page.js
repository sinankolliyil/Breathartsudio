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
      { name: 'Product Video Production', icon: 'fas fa-box-open', desc: 'Detailed, highly cinematic showcases highlighting textures, mechanics, and design of your premium products.' },
      { name: 'Social Media Reels', icon: 'fas fa-mobile-alt', desc: 'Engaging, premium mobile-optimized videos and reels for maximum reach.' }
    ]
  },
  {
    id: 'social-private-video',
    title: 'social & private event videography',
    description: 'Cinematic, spontaneous, and high-fidelity video documentation for luxury private events, dinners, and family milestones.',
    image: '/assets/service_event_social.png',
    services: [
      { name: 'Luxury Birthdays & Galas Video', icon: 'fas fa-birthday-cake', desc: 'Capturing the dynamic energy, entertainment programs, and elegant guests of your private parties.' },
      { name: 'Bridal & Baby Shower Reels', icon: 'fas fa-baby-carriage', desc: 'Beautifully capturing the emotional highlights, laughter, and speeches of your shower gatherings.' },
      { name: 'Private Dinner & Anniversary Videos', icon: 'fas fa-utensils', desc: 'Intimate dinner party highlight videos focusing on culinary layouts, ambient design, and guest interaction.' }
    ]
  },
  {
    id: 'corporate-events-video',
    title: 'corporate event videography',
    description: 'Comprehensive and premium corporate event coverage, capturing panels, keynotes, team networking, and keynote highlights.',
    image: '/assets/service_event_corporate.png',
    services: [
      { name: 'Conferences & Seminars Video', icon: 'fas fa-briefcase', desc: 'Full-session multi-camera documentation, speeches, panel discussions, and highlight reels.' },
      { name: 'Product Launches & Activation Films', icon: 'fas fa-bullhorn', desc: 'High-energy video coverage of brand launch campaigns, activations, and interactive setups.' },
      { name: 'Corporate Gala Dinner Reels', icon: 'fas fa-award', desc: 'Cinematic documentation of award presentations, VIP speeches, and social segments.' }
    ]
  },
  {
    id: 'aerial-video',
    title: 'aerial & drone cinematography',
    description: 'Ultra-high definition drone and aerial cinematography capturing grand landscapes, event venues, and architectural scale.',
    image: '/assets/hero_event.png',
    services: [
      { name: 'FPV Drone Cinematography', icon: 'fas fa-wind', desc: 'Immersive, dynamic, and high-speed fly-throughs for events, spaces, and active landscapes.' },
      { name: 'Event Aerial Highlights', icon: 'fas fa-plane', desc: 'Stunning bird\'s-eye view highlights of large outdoor festivals, concert stages, and corporate venues.' },
      { name: 'Real Estate & Architectural Video', icon: 'fas fa-home', desc: 'High-altitude cinematic framing designed to highlight property layouts and spatial scale.' }
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
      {/* Page Title & Intro Section (No Hero Banner) */}
      <section className="section" style={{ paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="project-header" style={{ width: '100%', marginBottom: '3rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)', letterSpacing: '4px', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>
              Moving Image
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'normal',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.1',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--color-white)',
              margin: '0 0 2rem 0'
            }}>
              Videography
            </h1>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div style={{ maxWidth: '512px' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--color-white)',
                fontWeight: '600',
                marginBottom: '2rem'
              }}>
                Transforming moments into moving pieces of art with state-of-the-art cinematic vision and visual storytelling.
              </p>
            </div>
            
            <div style={{ maxWidth: '512px' }}>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem'
              }}>
                Our videography captures motion, sound, and atmosphere, transforming special events and commercial stories into highly cinematic, emotionally resonant films that preserve the exact feeling of your most meaningful moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Text Scroller */}
      <div style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        background: 'var(--color-shade-2)',
        padding: '1.5rem 0',
        borderTop: '1px solid rgba(158, 112, 96, 0.15)',
        borderBottom: '1px solid rgba(158, 112, 96, 0.15)',
        margin: '2rem 0 4rem 0',
        display: 'flex'
      }}>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 25s linear infinite',
          fontSize: '1rem',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--color-gold)',
          fontWeight: '600'
        }}>
          Cinematic Wedding Films &bull; Pre-Wedding Trailers &bull; Corporate Promos &bull; Brand Advertisements &bull; Event Highlights &bull; Social Media Reels &bull; Visual Storytelling &bull;&nbsp;
        </div>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 25s linear infinite',
          fontSize: '1rem',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--color-gold)',
          fontWeight: '600'
        }}>
          Cinematic Wedding Films &bull; Pre-Wedding Trailers &bull; Corporate Promos &bull; Brand Advertisements &bull; Event Highlights &bull; Social Media Reels &bull; Visual Storytelling &bull;&nbsp;
        </div>
      </div>

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
