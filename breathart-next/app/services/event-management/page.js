'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 'social-private',
    title: 'social & private events',
    description: 'Expert planning, curation, and execution for your most cherished life celebrations. We manage the details from decor styling to culinary coordination so you can focus on hosting.',
    image: '/assets/service_event_social.png',
    services: [
      { name: 'Luxury Birthdays & Galas', icon: 'fas fa-birthday-cake', desc: 'Bespoke designs, themed setups, and coordinate-perfect birthday parties and anniversaries.' },
      { name: 'Bridal & Baby Showers', icon: 'fas fa-baby-carriage', desc: 'Elegant showers styled to perfection, leaving you and your guests to enjoy every moment.' },
      { name: 'Private Dinner Coordination', icon: 'fas fa-utensils', desc: 'Intimate dinner party curation, custom styling, layout organization, and premium setups.' }
    ]
  },
  {
    id: 'corporate-planning',
    title: 'corporate event curation',
    description: 'Flawless execution of professional conferences, seminars, products launch campaigns, and brand activation environments designed to make a memorable impact.',
    image: '/assets/service_event_corporate.png',
    services: [
      { name: 'Conferences & Seminars', icon: 'fas fa-briefcase', desc: 'Comprehensive event logistics, registration setups, audio-visual handling, and venue coordination.' },
      { name: 'Product Launches & Brand Activations', icon: 'fas fa-bullhorn', desc: 'High-concept creative environments designed to make a memorable impact for your product.' },
      { name: 'Corporate Gala Dinners', icon: 'fas fa-award', desc: 'Grand dinner setups, entertainment curation, award ceremonies planning, and theme execution.' }
    ]
  }
];

export default function EventManagementPage() {
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
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Grand Occasions</span>
          <h1 className="section-title" style={{ color: 'var(--color-white)', fontSize: '3.5rem', marginBottom: '1.5rem', textTransform: 'none' }}>Event Management</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.85rem' }}>
            We bring your vision to life through immaculate planning, luxury design, and seamless execution.
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
