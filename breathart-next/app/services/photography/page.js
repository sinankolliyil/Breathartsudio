'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 'family-lifestyle',
    title: 'family & lifestyle',
    description: 'Documenting your life\'s milestone moments and precious bonds with warm, cinematic fine-art storytelling. We create a relaxed environment so every smile is genuine.',
    image: '/assets/service_family_lifestyle.png',
    services: [
      { name: 'Newborn Photography', icon: 'fas fa-baby', desc: 'Safety-certified cozy studio sessions capturing the pure innocence of your baby\'s first days with luxury props.' },
      { name: 'Maternity Photography', icon: 'fas fa-female', desc: 'Elegant pregnancy portraiture celebrating the raw beauty, glow, and strength of motherhood.' },
      { name: 'Baby Shower Photography', icon: 'fas fa-gift', desc: 'Heartwarming documentation of your celebratory gatherings and anticipation of new beginnings.' },
      { name: 'Kids Birthday Photography', icon: 'fas fa-birthday-cake', desc: 'Fun-filled, energetic capture of kids\' milestones, smiles, cake-smashes, and celebrations.' },
      { name: 'Couple Photography', icon: 'fas fa-heart', desc: 'Stunning outdoor romance portfolios and cinematic connection portraits.' }
    ]
  },
  {
    id: 'wedding',
    title: 'wedding & romance',
    description: 'An enduring visual legacy of your grand love story, romance, and lifetime commitments. Our approach is non-intrusive yet complete, capturing every glance.',
    image: '/assets/service_wedding_main.png',
    services: [
      { name: 'Wedding Photography', icon: 'fas fa-ring', desc: 'Full-day comprehensive coverage of your luxury vows, candid emotion, and grand receptions.' },
      { name: 'Pre-Wedding Photography', icon: 'fas fa-glass-cheers', desc: 'Creative romantic engagement sessions set in breathtaking, iconic locations.' }
    ]
  },
  {
    id: 'corporate',
    title: 'corporate branding',
    description: 'Elevating your professional identity and brand authority with sharp, high-end commercial imagery that stands out in the business ecosystem.',
    image: '/assets/service_corporate_main.png',
    services: [
      { name: 'Corporate Photography', icon: 'fas fa-briefcase', desc: 'Professional documentation of company environments, branding campaigns, and corporate styling.' },
      { name: 'Corporate Headshots Photography', icon: 'fas fa-user-tie', desc: 'Polished executive portraiture that conveys authority, professionalism, and approachability.' },
      { name: 'Corporate Meetings Photography', icon: 'fas fa-users', desc: 'Dynamic coverage of key events, conferences, seminars, and networking sessions.' }
    ]
  },
  {
    id: 'social-private',
    title: 'social & private events',
    description: 'Expert photography and cinematic documentation for your most cherished life celebrations. We capture every smile and detail so you can focus on enjoying the moment.',
    image: '/assets/service_event_social.png',
    services: [
      { name: 'Luxury Birthdays & Galas', icon: 'fas fa-birthday-cake', desc: 'Candid and posed photography capturing the energy and elegance of your celebrations.' },
      { name: 'Bridal & Baby Showers', icon: 'fas fa-baby-carriage', desc: 'Beautifully documented showers, preserving the joy and emotions of you and your guests.' },
      { name: 'Private Dinner Photography', icon: 'fas fa-utensils', desc: 'Intimate dinner party coverage focusing on ambiance, candid moments, and premium culinary shots.' }
    ]
  },
  {
    id: 'corporate-photography',
    title: 'corporate event photography',
    description: 'Flawless visual coverage of professional conferences, seminars, product launch campaigns, and brand activations designed to highlight your brand impact.',
    image: '/assets/service_event_corporate.png',
    services: [
      { name: 'Conferences & Seminars', icon: 'fas fa-briefcase', desc: 'Comprehensive event photography covering speakers, networking, and key moments.' },
      { name: 'Product Launches & Brand Activations', icon: 'fas fa-bullhorn', desc: 'High-quality visual documentation designed to amplify the reach and impact of your new products.' },
      { name: 'Corporate Gala Dinners', icon: 'fas fa-award', desc: 'Elegant event coverage capturing awards, speeches, and the grand atmosphere of the evening.' }
    ]
  },
  {
    id: 'commercial',
    title: 'commercial & space',
    description: 'High-impact product and space imagery designed to captivate your audience, highlight textures, and drive brand engagement.',
    image: '/assets/service_commercial_main.png',
    services: [
      { name: 'Food Photography', icon: 'fas fa-utensils', desc: 'Mouthwatering culinary visuals crafted for luxury restaurants, menus, and marketing.' },
      { name: 'Product Photography', icon: 'fas fa-box-open', desc: 'Sharp, clean studio product shots that showcase design features and textures.' },
      { name: 'Real Estate Photography', icon: 'fas fa-home', desc: 'High-end wide-angle and HDR architectural photography for spaces and premium properties.' }
    ]
  }
];

export default function PhotographyPage() {
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
      <section className="section" style={{ paddingTop: '220px', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="project-header" style={{ width: '100%', marginBottom: '4rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)', letterSpacing: '4px', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>
              Fine-Art Studio
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
              Photography
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
                Curating exceptional stills that tell stories, capture emotions, and establish visual legacies.
              </p>
            </div>
            
            <div style={{ maxWidth: '512px' }}>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem'
              }}>
                Every photograph is crafted with absolute care. We specialize in capturing genuine connection, raw emotion, and high-fashion aesthetics that transcend temporary trends, ensuring your legacy is preserved beautifully.
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
        margin: '4rem 0 6rem 0',
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
          {["Newborn Fine-Art", "Maternity Portraits", "Wedding Devotion", "Couple Romance", "Corporate Branding", "Spatial", "Real Estate", "Concept Gowns", "Flying Dress"].map((item, idx) => (
            <span key={idx}>
              {item}
              <span style={{ margin: '0 3rem', fontSize: '0.35rem', verticalAlign: 'middle', display: 'inline-block', transform: 'translateY(-1px)', opacity: 0.8 }}>•</span>
            </span>
          ))}
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
          {["Newborn Fine-Art", "Maternity Portraits", "Wedding Devotion", "Couple Romance", "Corporate Branding", "Spatial", "Real Estate", "Concept Gowns", "Flying Dress"].map((item, idx) => (
            <span key={idx}>
              {item}
              <span style={{ margin: '0 3rem', fontSize: '0.35rem', verticalAlign: 'middle', display: 'inline-block', transform: 'translateY(-1px)', opacity: 0.8 }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services Showcase */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '0.5rem' }}>
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
                  marginBottom: '8rem',
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

      {/* Connect With Us Section */}
      <section className="section" style={{ padding: '1.5rem 0 6rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderTop: '1px solid rgba(158, 112, 96, 0.2)',
            paddingTop: '2rem'
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
