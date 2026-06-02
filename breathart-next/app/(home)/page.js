'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageFlipDemo from './components/PageFlipDemo';
import GalleryItem from './components/GalleryItem';
import FeatureCard from './components/FeatureCard';
import HomeLightbox from './components/HomeLightbox';

const allShowcaseImages = [
  // Newborn
  { src: '/assets/newborn_color.png', alt: 'Newborn 1', title: 'Pure Love', category: 'Newborn' },
  { src: '/assets/newborn.png', alt: 'Newborn 2', title: 'Soft Dreams', category: 'Newborn' },
  { src: '/assets/newborn_color.png', alt: 'Newborn 3', title: 'First Light', category: 'Newborn' },
  { src: '/assets/pastel.png', alt: 'Newborn 4', title: 'Tender Grip', category: 'Newborn' },
  { src: '/assets/newborn_color.png', alt: 'Newborn 5', title: 'Peaceful Sleep', category: 'Newborn' },
  { src: '/assets/minimal.png', alt: 'Newborn 6', title: 'Eternal Beginning', category: 'Newborn' },
  // Wedding
  { src: '/assets/wedding_color.png', alt: 'Wedding 1', title: 'The Vow', category: 'Wedding' },
  { src: '/assets/wedding_color.png', alt: 'Wedding 2', title: 'Sacred Bond', category: 'Wedding' },
  { src: '/assets/wedding_color.png', alt: 'Wedding 3', title: 'Golden Hour', category: 'Wedding' },
  { src: '/assets/luxury.png', alt: 'Wedding 4', title: 'Elegant Union', category: 'Wedding' },
  { src: '/assets/wedding_color.png', alt: 'Wedding 5', title: 'Eternal Flame', category: 'Wedding' },
  { src: '/assets/event.png', alt: 'Wedding 6', title: 'Together Forever', category: 'Wedding' },
  // Event
  { src: '/assets/event.png', alt: 'Event 1', title: 'Celebration', category: 'Event' },
  { src: '/assets/service_event.png', alt: 'Event 2', title: 'Gala Night', category: 'Event' },
  { src: '/assets/event.png', alt: 'Event 3', title: 'Moment of Joy', category: 'Event' },
  { src: '/assets/service_event.png', alt: 'Event 4', title: 'Corporate Gathering', category: 'Event' },
  { src: '/assets/event.png', alt: 'Event 5', title: 'Grand Celebration', category: 'Event' },
  { src: '/assets/service_event.png', alt: 'Event 6', title: 'Festive Evening', category: 'Event' },
  // Maternity
  { src: '/assets/feature_maternity.png', alt: 'Maternity 1', title: 'Motherhood', category: 'Maternity' },
  { src: '/assets/feature_maternity.png', alt: 'Maternity 2', title: 'Sweet Expectation', category: 'Maternity' },
  { src: '/assets/feature_maternity.png', alt: 'Maternity 3', title: 'New Hope', category: 'Maternity' },
];

export default function HomePage() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? allShowcaseImages 
    : allShowcaseImages.filter(img => img.category === filter);

  return (
    <>
      {/* Ultra-Premium Hero Section */}
      <header className="hero">
        <div className="hero-canvas"></div>
        <div className="hero-overlay"></div>

        <div className="container hero-split">
          {/* Left Side: Cinematic Copy */}
          <div className="hero-left">
            <h1>
              <span style={{ whiteSpace: 'nowrap' }}>
                <span className="text-gold">BreathArt - Photography</span>
              </span>{' '}
              <br /> That Touches Your <span className="text-gold">Heart.</span>
            </h1>
            <p>Turning fleeting moments into timeless memories, one frame at a time.</p>
            <div className="hero-buttons">
              <Link href="/services" className="btn btn-gold">
                Explore Services
              </Link>
              <Link href="/offers" className="btn btn-outline">
                Special Offers
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <PageFlipDemo />
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="cinematic-title" style={{ fontSize: '0.6rem', color: 'var(--color-gold)' }}>
            Scroll To Explore
          </span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </header>

      {/* 1. Our Premium Services Section (With new requested order and labels) */}
      <section id="our-services" className="section">
        <div className="container">
          <div className="text-center animate-reveal active" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Excellence in Every Frame</span>
            <h2 className="section-title">Our Premium Services</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1.5rem auto 0 auto' }}>
              Professional photography solutions tailored to capture your most significant moments with cinematic elegance and artistic precision.
            </p>
          </div>

          {/* New ordered services grid: Newborn, Wedding, Event, Family, Corporate, Real Estate */}
          <div className="gallery-grid">
            <GalleryItem image="/assets/service_newborn.png" alt="Newborn Photography" title="Newborn" number="01" href="/services#service-newborn" buttonText="Explore Session" />
            <GalleryItem image="/assets/service_wedding.png" alt="Wedding Photography" title="Wedding" number="02" href="/services#service-wedding" buttonText="Explore Session" delay={0.1} />
            <GalleryItem image="/assets/service_event.png" alt="Event Photography" title="Event" number="03" href="/services#service-event" buttonText="Explore Session" delay={0.2} />
            <GalleryItem image="/assets/service_prewedding.png" alt="Family Photography" title="Family" number="04" href="/services#service-pre-wedding" buttonText="Explore Session" delay={0.3} />
            <GalleryItem image="/assets/service_corporate.png" alt="Corporate Photography" title="Corporate" number="05" href="/services#service-corporate" buttonText="Explore Session" delay={0.4} />
            <GalleryItem image="/assets/service_couple.png" alt="Real Estate Photography" title="Real Estate" number="06" href="/services#service-couple" buttonText="Explore Session" delay={0.5} />
          </div>
        </div>
      </section>

      {/* 2. Newborn Photography Collection */}
      <section id="newborn" className="section">
        <div className="container animate-reveal active">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>
            01 / Innocence
          </span>
          <h2 className="section-title">Newborn Photography</h2>
          <HomeLightbox
            sectionId="newborn"
            gridCols="repeat(3, 1fr)"
            items={[
              { src: '/assets/newborn_color.png', alt: 'Newborn 1', title: 'Pure Love' },
              { src: '/assets/newborn.png', alt: 'Newborn 2', title: 'Soft Dreams' },
              { src: '/assets/newborn_color.png', alt: 'Newborn 3', title: 'First Light' },
              { src: '/assets/pastel.png', alt: 'Newborn 4', title: 'Tender Grip' },
              { src: '/assets/newborn_color.png', alt: 'Newborn 5', title: 'Peaceful Sleep' },
              { src: '/assets/minimal.png', alt: 'Newborn 6', title: 'Eternal Beginning' },
            ]}
          />
          <div className="explore-more-container animate-reveal active">
            <Link href="/services#service-newborn" className="btn btn-outline explore-btn">
              Explore Newborn Sessions <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Wedding Photography Collection */}
      <section id="wedding" className="section">
        <div className="container animate-reveal active">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>
            02 / Devotion
          </span>
          <h2 className="section-title">Wedding Photography</h2>
          <HomeLightbox
            sectionId="wedding"
            gridCols="repeat(3, 1fr)"
            items={[
              { src: '/assets/wedding_color.png', alt: 'Wedding 1', title: 'The Vow' },
              { src: '/assets/wedding_color.png', alt: 'Wedding 2', title: 'Sacred Bond' },
              { src: '/assets/wedding_color.png', alt: 'Wedding 3', title: 'Golden Hour' },
              { src: '/assets/luxury.png', alt: 'Wedding 4', title: 'Elegant Union' },
              { src: '/assets/wedding_color.png', alt: 'Wedding 5', title: 'Eternal Flame' },
              { src: '/assets/event.png', alt: 'Wedding 6', title: 'Together Forever' },
            ]}
          />
          <div className="explore-more-container animate-reveal active">
            <Link href="/services#service-couple" className="btn btn-outline explore-btn">
              Explore Wedding Stories <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Event Management Collection */}
      <section id="event-management" className="section">
        <div className="container animate-reveal active">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>
            03 / Connection
          </span>
          <h2 className="section-title">Event Management</h2>
          <HomeLightbox
            sectionId="event-management"
            gridCols="repeat(3, 1fr)"
            items={[
              { src: '/assets/event.png', alt: 'Event 1', title: 'Celebration' },
              { src: '/assets/service_event.png', alt: 'Event 2', title: 'Gala Night' },
              { src: '/assets/event.png', alt: 'Event 3', title: 'Moment of Joy' },
              { src: '/assets/service_event.png', alt: 'Event 4', title: 'Corporate Gathering' },
              { src: '/assets/event.png', alt: 'Event 5', title: 'Grand Celebration' },
              { src: '/assets/service_event.png', alt: 'Event 6', title: 'Festive Evening' },
            ]}
          />
          <div className="explore-more-container animate-reveal active">
            <Link href="/services#service-event" className="btn btn-outline explore-btn">
              Explore Event Stories <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Filterable Showcase Gallery Section */}
      <section id="showcase-gallery-section" className="section">
        <div className="container">
          <div className="text-center animate-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>
              Curated Masterpieces
            </span>
            <h2 className="section-title">Creative Showcase</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1.5rem auto 0 auto' }}>
              Browse through our complete dynamic visual portfolio. Filter by category to see our specific creations.
            </p>
          </div>

          {/* Premium Sorting Buttons on One Line (Desktop) and Dropdown (Mobile) */}
          <div className="showcase-filter-wrapper" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
            {/* Desktop Buttons */}
            <div className="desktop-filters" style={{ display: 'flex', gap: '1.5rem' }}>
              {['All', 'Newborn', 'Wedding', 'Event', 'Maternity'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  style={{
                    background: 'transparent',
                    border: filter === cat ? '1px solid var(--color-gold)' : '1px solid rgba(158, 112, 96, 0.2)',
                    color: filter === cat ? 'var(--color-gold)' : 'var(--color-text-muted)',
                    padding: '0.8rem 2.2rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    transition: '0.3s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown Selection */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mobile-filter-select"
              style={{
                width: '100%',
                maxWidth: '300px',
                padding: '1rem',
                border: '1px solid var(--color-gold)',
                background: 'var(--color-black)',
                color: 'var(--color-white)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              <option value="All">All Projects</option>
              <option value="Newborn">Newborn &amp; Baby</option>
              <option value="Wedding">Couple &amp; Wedding</option>
              <option value="Event">Event Management</option>
              <option value="Maternity">Maternity Fine-Art</option>
            </select>
          </div>

          <HomeLightbox
            sectionId="showcase-gallery"
            gridCols="repeat(3, 1fr)"
            items={filteredImages}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" id="why-choose-us">
        <div className="container">
          <div className="animate-reveal text-center" style={{ maxWidth: '800px', margin: '0 auto 6rem auto' }}>
            <span className="cinematic-title">Our Philosophy</span>
            <h2 className="section-title">Professional &amp; Premium Experience</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              At BreathArt Photography Studio, we deliver more than just photographs—we create timeless visual experiences. With years of professional expertise, our team combines artistic vision with advanced photography techniques to capture moments with elegance and precision.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              Every photoshoot is carefully planned to provide a seamless and comfortable experience for our clients. From lighting and composition to styling and storytelling, we focus on every detail to ensure exceptional results.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Our commitment to quality, creativity, and personalized service allows us to deliver a truly premium photography experience. Whether it is a newborn session, family portrait, corporate shoot, or wedding celebration, BreathArt ensures every moment is captured beautifully and preserved for a lifetime.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <FeatureCard icon="fas fa-user-tie" title="Experienced Professional Photographers" description="Master artists with decades of collective experience." />
            <FeatureCard icon="fas fa-female" title="Dedicated Lady Staff for Maternity" description="Ensuring comfort and privacy for maternity & newborn sessions." delay={0.1} />
            <FeatureCard icon="fas fa-mountain" title="Premium Studio Environment" description="State-of-the-art space designed for creative excellence." delay={0.2} />
            <FeatureCard icon="fas fa-camera" title="High-End Equipment & Lighting" description="The latest mirrorless technology and Profoto lighting." delay={0.3} />
            <FeatureCard icon="fas fa-shipping-fast" title="Fast 24-Hour Photo Delivery" description="Rapid turn-around without compromising art quality." delay={0.4} />
            <FeatureCard icon="fas fa-heart" title="Trusted by 1000+ Happy Clients" description="Building lasting relationships through exceptional art." delay={0.5} />
          </div>
        </div>
      </section>
    </>
  );
}
