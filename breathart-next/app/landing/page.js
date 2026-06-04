'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Send, ArrowRight, Play, Camera, Film, Gift, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import HomeLightbox from '../(home)/components/HomeLightbox';

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
  // Family
  { src: '/assets/service_prewedding.png', alt: 'Family 1', title: 'Generations', category: 'Family' },
  { src: '/assets/feature_maternity.png', alt: 'Family 2', title: 'Warm Embrace', category: 'Family' },
  { src: '/assets/service_prewedding.png', alt: 'Family 3', title: 'Joyful Days', category: 'Family' },
  // Corporate
  { src: '/assets/service_corporate.png', alt: 'Corporate 1', title: 'Executive Vision', category: 'Corporate' },
  { src: '/assets/service_corporate.png', alt: 'Corporate 2', title: 'Team Synergy', category: 'Corporate' },
  { src: '/assets/service_corporate.png', alt: 'Corporate 3', title: 'Workspace Design', category: 'Corporate' },
  // Real Estate
  { src: '/assets/service_couple.png', alt: 'Real Estate 1', title: 'Architectural Line', category: 'Real Estate' },
  { src: '/assets/service_couple.png', alt: 'Real Estate 2', title: 'Twilight Design', category: 'Real Estate' },
  { src: '/assets/service_couple.png', alt: 'Real Estate 3', title: 'Modern Living', category: 'Real Estate' },
];

const SERVICES = [
  {
    id: '01',
    title: 'Photography',
    icon: <Camera size={24} />,
    desc: 'Curating exceptional stills that tell stories, capture emotions, and establish visual legacies. From premium family portraiture to luxury weddings.',
    image: '/assets/service_family_lifestyle.png',
    packages: ['Family & Lifestyle', 'Wedding & Romance', 'Corporate Branding', 'Creative & Concept']
  },
  {
    id: '02',
    title: 'Videography',
    icon: <Film size={24} />,
    desc: 'Transforming moments into moving pieces of art with state-of-the-art cinematic vision, high-definition storytelling, and premium editing.',
    image: '/assets/service_video_wedding.png',
    packages: ['Wedding Films', 'Romance Trailers', 'Corporate Promos', 'Social Reels']
  },
  {
    id: '03',
    title: 'Event',
    icon: <Camera size={24} />,
    desc: 'Comprehensive visual records for grand events, private celebrations, luxury galas, and social anniversaries with cohesive, luxurious aesthetics.',
    image: '/assets/service_event.png',
    packages: ['Private Celebrations', 'Luxury Galas', 'Social Anniversaries', 'Corporate Meetings']
  }
];

// 3 smaller secondary offers shown below the hero offer
const SECONDARY_OFFERS = [
  {
    badgeIcon: <Zap size={11} />,
    badge: 'Limited Time',
    title: 'Couple & Romance Sessions',
    desc: 'Cinematic couple sessions at premium locations. Indoor & outdoor settings, creative direction, full editing included.',
    promo: '30% OFF',
    interest: 'Videography',
    ctaText: 'Book Now',
  },
  {
    badgeIcon: <Star size={11} />,
    badge: 'Exclusive Deal',
    title: 'Event Full-Day Coverage',
    desc: 'Dual-camera full-day coverage. 100+ edited photos + cinematic highlight video — all at a special bundled price.',
    promo: '25% OFF',
    interest: 'Event',
    ctaText: 'Get Bundle',
  },
  {
    badgeIcon: <Gift size={11} />,
    badge: 'Birthday Special',
    title: 'Cake Smash Celebration',
    desc: "Fun styled themes, professionally lit setups, unlimited raw shots and a fully-edited gallery delivered within 5 days.",
    promo: '20% OFF',
    interest: 'Photography',
    ctaText: 'Reserve Session',
  },
];

const PORTFOLIO = [
  { img: '/assets/hero_portrait.png', title: 'Luxury Portraits', span: 'col-span-1 row-span-1' },
  { img: '/assets/hero_event.png', title: 'Grand Events', span: 'col-span-2 row-span-1' },
  { img: '/assets/bento_1.jpg', title: 'Fine Art Newborn', span: 'col-span-1 row-span-2' },
  { img: '/assets/bento_3.jpg', title: 'Cinematic Weddings', span: 'col-span-1 row-span-1' },
  { img: '/assets/bento_4.jpg', title: 'Commercial Editorials', span: 'col-span-1 row-span-1' },
];

export default function LandingPage() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [filter, setFilter] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Photography', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef(null);

  const filteredImages = filter === 'All' 
    ? allShowcaseImages 
    : allShowcaseImages.filter(img => img.category === filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Photography', message: '' });
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToContact = (service, msg) => {
    setFormData(prev => ({ ...prev, service, message: msg }));
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <div className="noha-landing-wrapper">

      {/* ── HERO ── */}
      <section className="noha-hero">
        <div className="hero-bg-wrapper">
          <div className="hero-overlay"></div>
          <div className="hero-bg-img" style={{ backgroundImage: 'url(/assets/hero_nature.png)' }}></div>
        </div>
        <div className="noha-container hero-content">
          <div className="landing-hero-reveal">
            <span className="hero-kicker">Est. 2012 — Dubai</span>
            <h1 className="hero-title">Crafted for<br/>Cinematic Elegance</h1>
            <p className="hero-subtitle">
              We specialize in luxury photography and videography, capturing the essence of your most profound moments with an editorial eye.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="noha-btn-primary">
                Inquire Now <ArrowRight size={16} />
              </a>
              <a href="#portfolio" className="noha-btn-text">
                <Play size={16} /> View Showreel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section id="about" className="noha-section noha-about">
        <div className="noha-container about-grid">
          <div className="about-text landing-about-reveal">
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-heading">Visual poetry in every frame.</h2>
            <p className="section-body">
              At BreathArt Studio, we believe that true luxury lies in the details. Our approach blends timeless cinematic techniques with modern editorial aesthetics, creating visual narratives that transcend the ordinary.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">12+</span>
              <span className="stat-desc">Years of Premium Expertise</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-desc">Luxurious Sessions Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5.0</span>
              <span className="stat-desc">Star Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="noha-section noha-services">
        <div className="noha-container">
          <div className="section-header-center">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-heading">Curated Services</h2>
          </div>

          <div className="services-split">
            <div className="services-list">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className={`service-list-item ${activeService.id === srv.id ? 'active' : ''}`}
                  onClick={() => setActiveService(srv)}
                >
                  <span className="srv-id">{srv.id}</span>
                  <h3 className="srv-title">{srv.title}</h3>
                  <ArrowRight className="srv-arrow" />
                </div>
              ))}
            </div>

            <div className="services-detail">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="detail-card"
                >
                  <div className="detail-img-wrapper">
                    <img src={activeService.image} alt={activeService.title} className="detail-img" loading="lazy" decoding="async" />
                    <div className="detail-icon">{activeService.icon}</div>
                  </div>
                  <div className="detail-content">
                    <h4>{activeService.title}</h4>
                    <p>{activeService.desc}</p>
                    <ul className="package-list">
                      {activeService.packages.map((pkg, idx) => (
                        <li
                          key={idx}
                          className="interactive-package-item"
                          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                          onClick={() => scrollToContact(activeService.title, `I'm interested in "${pkg}" — ${activeService.title}.`)}
                        >
                          <Check size={14} className="icon-gold" />
                          <span style={{ marginLeft: '0.75rem' }}>{pkg}</span>
                          <span className="package-get-pricing" style={{ fontSize: '0.65rem', color: 'var(--color-gold)', marginLeft: 'auto', border: '1px solid rgba(158,112,96,0.3)', padding: '0.15rem 0.5rem', borderRadius: '50px' }}>
                            Get Pricing
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => scrollToContact(activeService.title, `I'd like to enquire about ${activeService.title} services.`)}
                      className="noha-btn-outline"
                    >
                      Request Pricing
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCITING OFFERS ── */}
      <section className="noha-section noha-offers" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="noha-container">

          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Exclusive Offers</span>
            <h2 className="section-heading">Exciting Offers</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              Limited-time specials — click any offer to book instantly.
            </p>
          </div>

          {/* ── HERO OFFER: 50% Newborn (original big banner style) ── */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(158, 112, 96, 0.15) 0%, rgba(43, 27, 20, 0.05) 100%)',
              border: '1px solid rgba(158, 112, 96, 0.25)',
              borderRadius: '12px',
              padding: '3rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.03)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--color-white)',
                  color: 'var(--color-black)',
                  padding: '0.4rem 1rem',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  borderRadius: '50px',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase'
                }}
              >
                <Gift size={12} />
                50% Off Special
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                Newborn Photography Promo
              </h2>
              <p style={{ color: 'var(--color-white)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                The UAE&apos;s #1 Premium Newborn Photography Agency
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
                Celebrate your baby&apos;s earliest days. Book our premium newborn fine-art portrait package at an exclusive 50% discount this month. Includes safety-certified handlers, warm lighting, and luxury props.
              </p>
            </div>

            <div
              style={{
                flex: '1 1 300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '2rem',
                background: 'var(--color-shade-2)',
                borderRadius: '8px',
                border: '1px solid rgba(158, 112, 96, 0.15)'
              }}
            >
              <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                Promo Investment
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                50% OFF
              </div>
              <button
                onClick={() => scrollToContact('Photography', "I'd like to claim the 50% Off Newborn Photography Promo.")}
                className="noha-btn-primary"
                style={{ width: '100%', textAlign: 'center', padding: '1rem', display: 'block', border: 'none', cursor: 'pointer' }}
              >
                Claim Offer Now
              </button>
            </div>
          </div>

          {/* ── 3 SECONDARY OFFER CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {SECONDARY_OFFERS.map((offer, i) => (
              <div
                key={i}
                className="landing-offer-card"
                style={{
                  background: 'var(--color-shade-2)',
                  border: '1px solid rgba(158, 112, 96, 0.18)',
                  borderRadius: '10px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(158,112,96,0.15)',
                      color: 'var(--color-gold)',
                      padding: '0.3rem 0.8rem',
                      fontSize: '0.58rem',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(158,112,96,0.25)'
                    }}
                  >
                    {offer.badgeIcon}
                    {offer.badge}
                  </div>
                  <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-gold)', lineHeight: 1 }}>
                    {offer.promo}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                    {offer.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: '1.65', margin: 0 }}>
                    {offer.desc}
                  </p>
                </div>

                <button
                  onClick={() => scrollToContact(offer.interest, `I'd like to claim the offer: "${offer.title}" (${offer.promo}).`)}
                  className="noha-btn-outline"
                  style={{ marginTop: 'auto', textAlign: 'center', border: '1px solid rgba(158,112,96,0.4)', cursor: 'pointer', fontSize: '0.7rem', letterSpacing: '1px' }}
                >
                  {offer.ctaText} <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATIVE SHOWCASE ── */}
      <section id="portfolio" className="noha-section noha-showcase" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="noha-container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Curated Masterpieces</span>
            <h2 className="section-heading">Creative Showcase</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Browse through our complete dynamic visual portfolio. Filter by category to see our specific creations.
            </p>
          </div>

          {/* Premium Sorting Buttons on One Line (Desktop) and Dropdown (Mobile) */}
          <div className="showcase-filter-wrapper" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
            {/* Desktop Filters */}
            <div className="desktop-filters" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['All', 'Newborn', 'Wedding', 'Event', 'Family', 'Corporate', 'Real Estate'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  style={{
                    background: 'transparent',
                    border: filter === cat ? '1px solid var(--color-gold)' : '1px solid rgba(158, 112, 96, 0.2)',
                    color: filter === cat ? 'var(--color-gold)' : 'var(--color-text-muted)',
                    padding: '0.6rem 1.6rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: '0.3s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown Selection */}
            <div className="mobile-filter-select">
              <div 
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--color-gold)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-black)',
                  borderRadius: '9999px',
                  paddingLeft: '1.25rem',
                  paddingRight: '1rem',
                  paddingTop: '0.625rem',
                  paddingBottom: '0.625rem',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(158, 112, 96, 0.35)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
                  {filter === 'All' ? 'All Projects' : filter}
                </span>
                <svg 
                  style={{ width: '1rem', height: '1rem', opacity: 0.8, flexShrink: 0 }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="All">All Projects</option>
                  <option value="Newborn">Newborn</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Event">Event</option>
                  <option value="Family">Family</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Real Estate">Real Estate</option>
                </select>
              </div>
            </div>
          </div>

          <HomeLightbox
            sectionId="newborn"
            items={filteredImages}
            layout="bento"
          />
        </div>
      </section>



      {/* ── CONTACT FORM ── */}
      <section id="contact" className="noha-section noha-contact" ref={contactRef}>
        <div className="noha-container contact-split">

          <div className="contact-info">
            <span className="section-label">Inquiries</span>
            <h2 className="section-heading">Let&apos;s craft your narrative.</h2>
            <p className="section-body">
              Whether you are planning an intimate milestone or a grand event, our team is ready to provide a tailored experience.
            </p>
            <div className="contact-details-list">
              <div className="contact-detail">
                <Phone size={20} className="icon-gold" />
                <div>
                  <h5>Direct Concierge</h5>
                  <p style={{ margin: 0 }}>+971 52 640 0679</p>
                  <p style={{ margin: 0 }}>+971 52 215 0837</p>
                </div>
              </div>
              <div className="contact-detail">
                <Mail size={20} className="icon-gold" />
                <div>
                  <h5>Email Desk</h5>
                  <p style={{ margin: 0 }}>Info@breathart.ae</p>
                  <p style={{ margin: 0 }}>breathartindia@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <MapPin size={20} className="icon-gold" />
                <div>
                  <h5>Studio Location</h5>
                  <p>Dubai Design District, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3>Secure Your Session</h3>
              <p className="form-subtitle">Fill in the details below. We typically respond within 2-4 hours.</p>

              {submitted ? (
                <div className="success-message animate-reveal active">
                  <Check size={32} className="icon-gold mx-auto mb-4" />
                  <h4>Inquiry Received</h4>
                  <p>Thank you for reaching out. A studio representative will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="noha-form">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="e.g. Jane Doe" />
                  </div>

                  <div className="input-row">
                    <div className="input-group">
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="jane@example.com" />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+971 XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Area of Interest</label>
                    <select name="service" value={formData.service} onChange={handleInputChange}>
                      <option value="Photography">Photography</option>
                      <option value="Videography">Videography</option>
                      <option value="Event">Event</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Additional Details (Date, Venue, Specific Requests)</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Tell us more about your vision..."></textarea>
                  </div>

                  <button type="submit" className="noha-btn-primary full-width">
                    Submit Inquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
