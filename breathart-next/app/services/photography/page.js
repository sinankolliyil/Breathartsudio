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
    id: 'events',
    title: 'event photography',
    description: 'Dynamic, elegant, and high-end visual records of your private celebrations, luxury galas, and social anniversaries.',
    image: '/assets/service_event_main.png',
    services: [
      { name: 'Event Photography', icon: 'fas fa-camera', desc: 'Vivid and spontaneous documentation of social events, anniversaries, and private parties.' }
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
  },
  {
    id: 'creative',
    title: 'creative & concept',
    description: 'Artistic, gravity-defying concepts designed for show-stopping visual statements that capture the imagination.',
    image: '/assets/service_creative_main.png',
    services: [
      { name: 'Flying Dress Photography', icon: 'fas fa-wind', desc: 'Breathtaking conceptual sessions in dramatic desert or architecture backdrops with vibrant, sweeping gowns.' }
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
      {/* Page Header */}
      <header className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="container animate-reveal active text-center">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Fine-Art Studio</span>
          <h1 className="section-title" style={{ color: 'var(--color-white)', fontSize: '3.5rem', marginBottom: '1.5rem', textTransform: 'none' }}>Photography</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.85rem' }}>
            Curating exceptional stills that tell stories, capture emotions, and establish visual legacies.
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
