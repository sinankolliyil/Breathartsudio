'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Send, ArrowRight, Play, Camera, Film, Gift, Star, Zap, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import HomeLightbox from '../(home)/components/HomeLightbox';
import Lightbox from '../(home)/components/Lightbox';
import ContactForm from '../../components/ContactForm';
import PopupForm from '../../components/PopupForm';

const allShowcaseImages = [
  // Newborn
  { src: '/assets/gallery/newborn_color.png', alt: 'Newborn 1', title: 'Pure Love', category: 'Newborn' },
  { src: '/assets/gallery/newborn.png', alt: 'Newborn 2', title: 'Soft Dreams', category: 'Newborn' },
  { src: '/assets/gallery/newborn_color.png', alt: 'Newborn 3', title: 'First Light', category: 'Newborn' },
  { src: '/assets/gallery/pastel.png', alt: 'Newborn 4', title: 'Tender Grip', category: 'Newborn' },
  { src: '/assets/gallery/newborn_color.png', alt: 'Newborn 5', title: 'Peaceful Sleep', category: 'Newborn' },
  { src: '/assets/gallery/minimal.png', alt: 'Newborn 6', title: 'Eternal Beginning', category: 'Newborn' },
  // Wedding
  { src: '/assets/gallery/wedding_color.png', alt: 'Wedding 1', title: 'The Vow', category: 'Wedding' },
  { src: '/assets/gallery/wedding_color.png', alt: 'Wedding 2', title: 'Sacred Bond', category: 'Wedding' },
  { src: '/assets/gallery/wedding_color.png', alt: 'Wedding 3', title: 'Golden Hour', category: 'Wedding' },
  { src: '/assets/gallery/luxury.png', alt: 'Wedding 4', title: 'Elegant Union', category: 'Wedding' },
  { src: '/assets/gallery/wedding_color.png', alt: 'Wedding 5', title: 'Eternal Flame', category: 'Wedding' },
  { src: '/assets/gallery/event.png', alt: 'Wedding 6', title: 'Together Forever', category: 'Wedding' },
  // Event
  { src: '/assets/gallery/event.png', alt: 'Event 1', title: 'Celebration', category: 'Event' },
  { src: '/assets/services/service_event.png', alt: 'Event 2', title: 'Gala Night', category: 'Event' },
  { src: '/assets/gallery/event.png', alt: 'Event 3', title: 'Moment of Joy', category: 'Event' },
  { src: '/assets/services/service_event.png', alt: 'Event 4', title: 'Corporate Gathering', category: 'Event' },
  { src: '/assets/gallery/event.png', alt: 'Event 5', title: 'Grand Celebration', category: 'Event' },
  { src: '/assets/services/service_event.png', alt: 'Event 6', title: 'Festive Evening', category: 'Event' },
  // Family
  { src: '/assets/services/service_prewedding.png', alt: 'Family 1', title: 'Generations', category: 'Family' },
  { src: '/assets/features/feature_maternity.png', alt: 'Family 2', title: 'Warm Embrace', category: 'Family' },
  { src: '/assets/services/service_prewedding.png', alt: 'Family 3', title: 'Joyful Days', category: 'Family' },
  // Corporate
  { src: '/assets/services/service_corporate.png', alt: 'Corporate 1', title: 'Executive Vision', category: 'Corporate' },
  { src: '/assets/services/service_corporate.png', alt: 'Corporate 2', title: 'Team Synergy', category: 'Corporate' },
  { src: '/assets/services/service_corporate.png', alt: 'Corporate 3', title: 'Workspace Design', category: 'Corporate' },
  // Real Estate
  { src: '/assets/services/service_couple.png', alt: 'Real Estate 1', title: 'Architectural Line', category: 'Real Estate' },
  { src: '/assets/services/service_couple.png', alt: 'Real Estate 2', title: 'Twilight Design', category: 'Real Estate' },
  { src: '/assets/services/service_couple.png', alt: 'Real Estate 3', title: 'Modern Living', category: 'Real Estate' },
];

const SERVICES = [
  {
    id: '01',
    title: 'Photography',
    icon: <Camera size={24} />,
    desc: 'Curating exceptional stills that tell stories, capture emotions, and establish visual legacies. From premium family portraiture to luxury weddings.',
    image: '/assets/services/service_family_lifestyle.png',
    packages: ['Newborn', 'Family & Lifestyle', 'Wedding & Romance', 'Corporate Branding', 'Creative & Concept']
  },
  {
    id: '02',
    title: 'Videography',
    icon: <Film size={24} />,
    desc: 'Transforming moments into moving pieces of art with state-of-the-art cinematic vision, high-definition storytelling, and premium editing.',
    image: '/assets/services/service_video_wedding.png',
    packages: ['Wedding Films', 'Romance Trailers', 'Corporate Promos', 'Social Reels']
  },
  {
    id: '03',
    title: 'Event',
    icon: <Camera size={24} />,
    desc: 'Comprehensive visual records for grand events, private celebrations, luxury galas, and social anniversaries with cohesive, luxurious aesthetics.',
    image: '/assets/services/service_event.png',
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
    ctaText: 'Claim Your Offer Now',
  },
  {
    badgeIcon: <Star size={11} />,
    badge: 'Exclusive Deal',
    title: 'Event Full-Day Coverage',
    desc: 'Dual-camera full-day coverage. 100+ edited photos + cinematic highlight video — all at a special bundled price.',
    promo: '25% OFF',
    interest: 'Event',
    ctaText: 'Claim Your Offer Now',
  },
  {
    badgeIcon: <Gift size={11} />,
    badge: 'Birthday Special',
    title: 'Cake Smash Celebration',
    desc: "Fun styled themes, professionally lit setups, unlimited raw shots and a fully-edited gallery delivered within 5 days.",
    promo: '20% OFF',
    interest: 'Photography',
    ctaText: 'Claim Your Offer Now',
  },
  {
    badgeIcon: <Star size={11} />,
    badge: 'Premium Package',
    title: 'Luxury Wedding Photography',
    desc: 'Capture your special day with our elite wedding photography package. Includes two photographers, full-day coverage, and a luxury printed album.',
    promo: '15% OFF',
    interest: 'Wedding',
    ctaText: 'Claim Your Offer Now',
  },
  {
    badgeIcon: <Zap size={11} />,
    badge: 'Business Special',
    title: 'Corporate Branding Session',
    desc: 'Elevate your brand with professional corporate headshots and workspace photography. Perfect for websites and marketing materials.',
    promo: '20% OFF',
    interest: 'Corporate',
    ctaText: 'Claim Your Offer Now',
  },
];

const PORTFOLIO = [
  { img: '/assets/hero/hero_portrait.png', title: 'Luxury Portraits', span: 'col-span-1 row-span-1' },
  { img: '/assets/hero/hero_event.png', title: 'Grand Events', span: 'col-span-2 row-span-1' },
  { img: '/assets/gallery/bento_1.jpg', title: 'Fine Art Newborn', span: 'col-span-1 row-span-2' },
  { img: '/assets/gallery/bento_3.jpg', title: 'Cinematic Weddings', span: 'col-span-1 row-span-1' },
  { img: '/assets/gallery/bento_4.jpg', title: 'Commercial Editorials', span: 'col-span-1 row-span-1' },
];

export default function LandingPage() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [activeAccordionId, setActiveAccordionId] = useState(null);
  const [filter, setFilter] = useState('All');
  const contactRef = useRef(null);
  const [initialService, setInitialService] = useState('Photography');
  const [initialMessage, setInitialMessage] = useState('');

  const filteredImages = filter === 'All' 
    ? allShowcaseImages 
    : allShowcaseImages.filter(img => img.category === filter);

  const renderOfferCard = (offer, i) => (
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
  );

  const scrollToContact = (service, msg) => {
    setInitialService(service);
    setInitialMessage(msg);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <div className="noha-landing-wrapper">
      <PopupForm />

      {/* ── HERO ── */}
      <section className="noha-hero">
        <div className="hero-bg-wrapper">
          <div className="hero-overlay"></div>
          <div className="hero-bg-img" style={{ backgroundImage: 'url(/assets/hero/hero_nature.png)' }}></div>
          <div className="mobile-hero-slider">
            <div className="mobile-hero-slide" style={{ backgroundImage: 'url(/assets/services/service_newborn.png)' }}></div>
            <div className="mobile-hero-slide" style={{ backgroundImage: 'url(/assets/services/service_wedding.png)', animationDelay: '4s' }}></div>
            <div className="mobile-hero-slide" style={{ backgroundImage: 'url(/assets/services/service_corporate.png)', animationDelay: '8s' }}></div>
          </div>
        </div>
        <div className="noha-container hero-content">
          <div className="landing-hero-reveal">
            <span className="hero-kicker">Est. 2012 — Dubai</span>
            <h1 className="hero-title">Crafted for<br/>Cinematic Elegance</h1>
            <p className="hero-subtitle">
              We specialize in luxury photography and videography, capturing the essence of your most profound moments with an editorial eye.
            </p>
            <div className="hero-actions">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact('Photography', '');
                }}
                className="noha-btn-primary"
              >
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
                <div key={srv.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    className={`service-list-item ${activeService.id === srv.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveService(srv);
                      setActiveAccordionId(activeAccordionId === srv.id ? null : srv.id);
                    }}
                  >
                    <span className="srv-id">{srv.id}</span>
                    <h3 className="srv-title">{srv.title}</h3>
                    <div className="desktop-only-detail">
                      <ArrowRight className="srv-arrow" size={20} />
                    </div>
                    <div className="mobile-only-detail" style={{ transform: activeAccordionId === srv.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                      <ChevronDown className="srv-arrow" size={20} />
                    </div>
                  </div>
                  
                  {/* MOBILE DETAILS (Accordion) */}
                  <div className="mobile-only-detail" style={{ overflow: 'hidden' }}>
                    <AnimatePresence>
                      {activeAccordionId === srv.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="detail-card"
                          style={{ marginTop: '1rem', marginBottom: '1rem' }}
                        >
                          <div className="detail-img-wrapper">
                            <img src={srv.image} alt={srv.title} className="detail-img" loading="lazy" decoding="async" />
                            <div className="detail-icon">{srv.icon}</div>
                          </div>
                          <div className="detail-content">
                            <h4>{srv.title}</h4>
                            <p>{srv.desc}</p>
                            <ul className="package-list">
                              {srv.packages.map((pkg, idx) => (
                                <li
                                  key={idx}
                                  className="interactive-package-item"
                                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                  onClick={() => scrollToContact(srv.title, `I'm interested in "${pkg}" — ${srv.title}.`)}
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
                              onClick={() => scrollToContact(srv.title, `I'd like to enquire about ${srv.title} services.`)}
                              className="noha-btn-outline"
                            >
                              Request Pricing
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-detail desktop-only-detail">
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
          <div className="hero-offer-banner">
            <div className="hero-offer-content">
              <div className="hero-offer-badge">
                <Gift size={12} />
                50% Off Special
              </div>
              <h2 className="section-title hero-offer-title">
                Newborn Photography Promo
              </h2>
              <p style={{ color: 'var(--color-white)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                The UAE&apos;s #1 Premium Newborn Photography Agency
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
                Celebrate your baby&apos;s earliest days. Book our premium newborn fine-art portrait package at an exclusive 50% discount this month. Includes safety-certified handlers, warm lighting, and luxury props.
              </p>
            </div>

            <div className="hero-offer-pricing">
              <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                Promo Investment
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                50% OFF
              </div>
              <button
                onClick={() => scrollToContact('Photography', "I'd like to claim the 50% Off Newborn Photography Promo.")}
                className="noha-btn-primary full-width"
              >
                Claim Your Offer Now
              </button>
            </div>
          </div>

          {/* ── 3 SECONDARY OFFER CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {SECONDARY_OFFERS.slice(0, 3).map((offer, i) => renderOfferCard(offer, i))}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {SECONDARY_OFFERS.slice(3, 5).map((offer, i) => renderOfferCard(offer, i + 3))}
          </div>
        </div>
      </section>

      {/* ── INLINE CONTACT FORM (After Offers) ── */}
      <section className="noha-section" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="noha-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'var(--color-shade-2)', padding: '3rem 2.5rem', borderRadius: '12px', border: '1px solid rgba(158, 112, 96, 0.15)', boxShadow: '0 20px 40px rgba(43, 27, 20, 0.05)', width: '100%' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-white)', textAlign: 'center' }}>Secure Your Session</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center' }}>Fill in the details below to claim your offer.</p>
            <ContactForm
              theme="landing"
              initialService={initialService}
              initialMessage={initialMessage}
              buttonText="Submit Inquiry"
              showPackageField={false}
            />
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
        <div className="noha-container">

          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>

            {/* Left Column: Info */}
            <div>
              <span className="section-label">Inquiries</span>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>Let&apos;s craft your narrative.</h2>
              <p className="section-body" style={{ marginBottom: '2.5rem' }}>
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
                    <p style={{ margin: 0 }}>Breathartdxb@gmail.com</p>
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

            {/* Right Column: Form */}
            <div style={{ background: 'var(--color-shade-2)', padding: '3rem 2.5rem', borderRadius: '12px', border: '1px solid rgba(158, 112, 96, 0.15)', boxShadow: '0 20px 40px rgba(43, 27, 20, 0.05)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>Secure Your Session</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Fill in the details below. We typically respond within 2-4 hours.</p>
              <ContactForm
                theme="landing"
                initialService={initialService}
                initialMessage={initialMessage}
                buttonText="Submit Inquiry"
                showPackageField={false}
              />
            </div>

          </div>
        </div>
      </section>
      <Lightbox />
    </div>
  );
}
