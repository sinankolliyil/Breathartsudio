'use client';

import Link from 'next/link';

const categories = [
  {
    id: 'family-lifestyle',
    title: 'Family & Lifestyle Photography',
    description: 'Documenting your life\'s milestone moments and precious bonds with warm, cinematic fine-art storytelling.',
    services: [
      { name: 'Newborn Photography', icon: 'fas fa-baby', desc: 'Safety-certified cozy studio sessions capturing the pure innocence of your baby\'s first days.' },
      { name: 'Maternity Photography', icon: 'fas fa-female', desc: 'Elegant pregnancy portraiture celebrating the raw beauty, glow, and strength of motherhood.' },
      { name: 'Baby Shower Photography', icon: 'fas fa-gift', desc: 'Heartwarming documentation of your celebratory gatherings and anticipation of new beginnings.' },
      { name: 'Kids Birthday Photography', icon: 'fas fa-birthday-cake', desc: 'Fun-filled, energetic capture of kids\' milestones, smiles, cake-smashes, and celebrations.' },
      { name: 'Couple Photography', icon: 'fas fa-heart', desc: 'Stunning outdoor romance portfolios and cinematic connection portraits.' }
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'An enduring visual legacy of your grand love story, romance, and lifetime commitments.',
    services: [
      { name: 'Wedding Photography', icon: 'fas fa-ring', desc: 'Full-day comprehensive coverage of your luxury vows, candid emotion, and grand receptions.' },
      { name: 'Pre-Wedding Photography', icon: 'fas fa-glass-cheers', desc: 'Creative romantic engagement sessions set in breathtaking, iconic locations.' }
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Photography',
    description: 'Elevating your professional identity and brand authority with sharp, high-end commercial imagery.',
    services: [
      { name: 'Corporate Photography', icon: 'fas fa-briefcase', desc: 'Professional documentation of company environments, branding campaigns, and corporate styling.' },
      { name: 'Corporate Headshots Photography', icon: 'fas fa-user-tie', desc: 'Polished executive portraiture that conveys authority, professionalism, and approachability.' },
      { name: 'Corporate Meetings Photography', icon: 'fas fa-users', desc: 'Dynamic coverage of key events, conferences, seminars, and networking sessions.' }
    ]
  },
  {
    id: 'events',
    title: 'Event Photography',
    description: 'Dynamic, elegant, and high-end visual records of your private celebrations and galas.',
    services: [
      { name: 'Event Photography', icon: 'fas fa-camera', desc: 'Vivid and spontaneous documentation of social events, anniversaries, and private parties.' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'High-impact product and space imagery designed to captivate your audience and drive engagement.',
    services: [
      { name: 'Food Photography', icon: 'fas fa-utensils', desc: 'Mouthwatering culinary visuals crafted for luxury restaurants, menus, and marketing.' },
      { name: 'Product Photography', icon: 'fas fa-box-open', desc: 'Sharp, clean studio product shots that showcase design features and textures.' },
      { name: 'Real Estate Photography', icon: 'fas fa-home', desc: 'High-end wide-angle and HDR architectural photography for spaces and premium properties.' }
    ]
  },
  {
    id: 'creative',
    title: 'Creative Photography',
    description: 'Artistic, gravity-defying concepts designed for show-stopping visual statements.',
    services: [
      { name: 'Flying Dress Photography', icon: 'fas fa-wind', desc: 'Breathtaking conceptual sessions in dramatic desert or architecture backdrops with vibrant, sweeping gowns.' }
    ]
  }
];

export default function PhotographyPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="container animate-reveal active text-center">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Fine-Art</span>
          <h1 className="section-title" style={{ color: 'var(--color-white)', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Photography Services</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.85rem' }}>
            We specialize in documenting life\'s precious milestones, corporate legacies, and grand events with ultimate cinematic style.
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
              Interested in custom creative concepts or packages? Contact us to discuss your photography project.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold" style={{ padding: '1rem 3rem' }}>
                Get in Touch
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
