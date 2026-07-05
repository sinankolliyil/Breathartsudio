'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Send, ArrowRight, Play, Camera, Film, Gift, Star, Zap, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import HomeLightbox from '../(home)/components/HomeLightbox';
import Lightbox from '../(home)/components/Lightbox';
import ContactForm from '../../components/ContactForm';

import HeroSlider from '../(home)/components/HeroSlider';
import ImgStack from '../../components/ImgStack';

const ServiceAutoSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Service preview"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="detail-img"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

const allShowcaseImages = [
  // Newborn
  { src: '/assets/gallery/newborn/A98C22F0-2F0E-4A32-B285-1E23FB0AD1E3.webp', alt: 'Newborn 1', title: 'Pure Innocence', category: 'Newborn' },
  { src: '/assets/gallery/newborn/BK-108_LORRIE_890_.jpg.webp', alt: 'Newborn 2', title: 'Soft Dreams', category: 'Newborn' },
  { src: '/assets/gallery/newborn/BK-205_WILMA_443_.jpg.webp', alt: 'Newborn 3', title: 'First Light', category: 'Newborn' },
  { src: '/assets/gallery/newborn/BK-62_LORI_244_-_Copy.jpg.webp', alt: 'Newborn 4', title: 'Tender Grip', category: 'Newborn' },
  { src: '/assets/gallery/newborn/BK_264_SABRINA_338_.jpg_filename_UTF_8_BK_264_SABRINA_338_.jpg.webp', alt: 'Newborn 5', title: 'Peaceful Sleep', category: 'Newborn' },
  { src: '/assets/gallery/newborn/BK_264_SABRINA_446_.jpg_filename_UTF_8_BK_264_SABRINA_446_.jpg.webp', alt: 'Newborn 6', title: 'Sweet Angel', category: 'Newborn' },
  { src: '/assets/gallery/newborn/ChatGPT_Image_Apr_18_2026_05_19_31_PM_1_.webp', alt: 'Newborn 7', title: 'Golden Slumber', category: 'Newborn' },
  { src: '/assets/gallery/newborn/ChatGPT_Image_Apr_22_2026_04_09_10_PM.webp', alt: 'Newborn 8', title: 'Tiny Hands', category: 'Newborn' },
  { src: '/assets/gallery/newborn/ChatGPT_Image_Apr_22_2026_09_37_14_PM_1_.webp', alt: 'Newborn 9', title: 'Cozy Beginning', category: 'Newborn' },
  { src: '/assets/gallery/newborn/ChatGPT_Image_Apr_22_2026_09_37_14_PM.webp', alt: 'Newborn 10', title: 'Little Star', category: 'Newborn' },
  { src: '/assets/gallery/newborn/ChatGPT_Image_Apr_24_2026_12_56_55_PM.webp', alt: 'Newborn 11', title: 'Precious Moments', category: 'Newborn' },
  { src: '/assets/hero/photo.png', alt: 'Newborn 12', title: 'Dreaming', category: 'Newborn' },
  { src: '/assets/gallery/newborn/WhatsApp_Image_2026-04-18_at_16.45.18_2_.webp', alt: 'Newborn 13', title: 'New Life', category: 'Newborn' },
  // Wedding
  { src: '/assets/gallery/wedding/pexels-abdallah-mahmoud-2153337567-32671354.webp', alt: 'The Vow', title: 'The Vow', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-abdallah-naser-2156661580-34317944.webp', alt: 'Sacred Bond', title: 'Sacred Bond', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-ahmetcotur-29560843.webp', alt: 'Golden Hour', title: 'Golden Hour', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-braiki-dhia-eddine-2159140624-35819262.webp', alt: 'Elegant Union', title: 'Elegant Union', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-dilara-dogar-713705919-30439697.webp', alt: 'Eternal Flame', title: 'Eternal Flame', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-habib-hosseini-3673463.webp', alt: 'Together Forever', title: 'Together Forever', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-instasky-9787656.webp', alt: 'Joyous Celebration', title: 'Joyous Celebration', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-mlkbnl-11379041.webp', alt: 'Bridal Glow', title: 'Bridal Glow', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-photography-maghradze-ph-1659410-31953101.webp', alt: 'Candid Smiles', title: 'Candid Smiles', category: 'Wedding' },
  { src: '/assets/gallery/wedding/pexels-sumeyye-acar-1402897839-32954759.webp', alt: 'Love Story', title: 'Love Story', category: 'Wedding' },
  { src: '/assets/gallery/wedding/quan-nguyen-yDSe7sggb9Q-unsplash.webp', alt: 'Grand Entrance', title: 'Grand Entrance', category: 'Wedding' },
  // Event
  { src: '/assets/gallery/event/pexels-b_s-media-production-568838161-34171711.webp', alt: 'Celebration', title: 'Celebration', category: 'Event' },
  { src: '/assets/gallery/event/pexels-caleboquendo-11329860.webp', alt: 'Gala Night', title: 'Gala Night', category: 'Event' },
  { src: '/assets/gallery/event/pexels-cherubs-22669860.webp', alt: 'Moment of Joy', title: 'Moment of Joy', category: 'Event' },
  { src: '/assets/gallery/event/pexels-miriam-salgado-157461221-10733219_1.webp', alt: 'Corporate Gathering', title: 'Party', category: 'Event' },
  { src: '/assets/gallery/event/pexels-miriam-salgado-157461221-10733602_1.webp', alt: 'Grand Celebration', title: 'Grand Celebration', category: 'Event' },
  { src: '/assets/gallery/event/pexels-panditwiguna-2788487.webp', alt: 'Festive Evening', title: 'Festive Evening', category: 'Event' },
  { src: '/assets/gallery/event/WhatsApp_Image_2026-06-25_at_17.28.30.webp', alt: 'Vibrant Atmosphere', title: 'Vibrant Atmosphere', category: 'Event' },
  { src: '/assets/gallery/event/chuttersnap-aEnH4hJ_Mrs-unsplash.webp', alt: 'Keynote Speech', title: 'Keynote Speech', category: 'Event' },
  // Family
  { src: '/assets/gallery/family/IMG_9601.webp', alt: 'Family 1', title: 'Generations', category: 'Family' },
  { src: '/assets/gallery/family/IMG_9770.webp', alt: 'Family 2', title: 'Warm Embrace', category: 'Family' },
  { src: '/assets/gallery/family/IMG_9773.webp', alt: 'Family 3', title: 'Joyful Days', category: 'Family' },
  { src: '/assets/gallery/family/img_1263.webp', alt: 'Family 8', title: 'Happy Smiles', category: 'Family' },
  { src: '/assets/gallery/family/bk-102-taise.webp', alt: 'Family 4', title: 'Heartwarming', category: 'Family' },
  { src: '/assets/gallery/family/bk-279-suhad.webp', alt: 'Family 5', title: 'Cherished Memories', category: 'Family' },
  { src: '/assets/gallery/family/nb-360-kat.webp', alt: 'Family 6', title: 'Precious Start', category: 'Family' },
  { src: '/assets/gallery/family/photo-32.webp', alt: 'Family 7', title: 'Loving Bonds', category: 'Family' },
  // Corporate
  { src: '/assets/services/service_corporate.png', alt: 'Corporate 1', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/services/service_corporate_main.png', alt: 'Corporate 2', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/services/service_commercial_main.png', alt: 'Corporate 3', title: 'Corporate Photography', category: 'Corporate' },
  // Real Estate
  { src: '/assets/gallery/real-estate/minimal.webp', alt: 'Real Estate 1', title: 'Architectural Line', category: 'Real Estate' },
  { src: '/assets/gallery/real-estate/0014.webp', alt: 'Real Estate 2', title: 'Interior Design', category: 'Real Estate' },
  { src: '/assets/gallery/real-estate/0012.webp', alt: 'Real Estate 3', title: 'Luxury Space', category: 'Real Estate' },
  { src: '/assets/gallery/real-estate/0011.webp', alt: 'Real Estate 4', title: 'Modern Living', category: 'Real Estate' },
  { src: '/assets/gallery/real-estate/0015.webp', alt: 'Real Estate 5', title: 'Premium Estate', category: 'Real Estate' },
  // Commercial
  { src: '/assets/gallery/commercial/ali-bakhtiari-7ic3yF64FS8-unsplash.jpg.jpeg', alt: 'Commercial 1', title: 'Commercial Editorial', category: 'Commercial' },
  { src: '/assets/gallery/commercial/curology-DGH1u80sZik-unsplash.jpg.jpeg', alt: 'Commercial 2', title: 'Workspace Scene', category: 'Commercial' },
  { src: '/assets/gallery/commercial/curology-wK0h-mlvfuc-unsplash (1).jpg.jpeg', alt: 'Commercial 3', title: 'Studio Details', category: 'Commercial' },
  { src: '/assets/gallery/commercial/curology-wK0h-mlvfuc-unsplash.jpg.jpeg', alt: 'Commercial 4', title: 'Premium Branding', category: 'Commercial' },
  { src: '/assets/gallery/commercial/irene-kredenets-KStSiM1UvPw-unsplash.jpg.jpeg', alt: 'Commercial 5', title: 'Product Display', category: 'Commercial' },
  { src: '/assets/gallery/commercial/olena-bohovyk-GOVTETevRm8-unsplash.jpg.jpeg', alt: 'Commercial 6', title: 'Cosmetics Still Life', category: 'Commercial' },
  { src: '/assets/gallery/commercial/pat-taylor-12V36G17IbQ-unsplash.jpg.jpeg', alt: 'Commercial 7', title: 'Lifestyle Setup', category: 'Commercial' },
];

const SERVICES = [
  {
    id: '01',
    title: 'Photography',
    icon: <Camera size={24} />,
    desc: 'Curating exceptional stills that tell stories, capture emotions, and establish visual legacies. From premium family portraiture to luxury weddings.',
    image: '/assets/services/service_family_lifestyle_new.jpg',
    images: [
      '/assets/services/service_family_lifestyle_new.jpg',
      '/assets/gallery/newborn/BK-108_LORRIE_890_.jpg.webp',
      '/assets/gallery/wedding/pexels-ahmetcotur-29560843.webp'
    ],
    packages: ['Newborn', 'Family & Lifestyle', 'Wedding & Romance', 'Corporate Branding', 'Creative & Concept']
  },
  {
    id: '02',
    title: 'Videography',
    icon: <Film size={24} />,
    desc: 'Transforming moments into moving pieces of art with state-of-the-art cinematic vision, high-definition storytelling, and premium editing.',
    image: '/assets/gallery/wedding/pexels-abdallah-mahmoud-2153337567-32671354.webp',
    images: [
      '/assets/gallery/wedding/pexels-abdallah-mahmoud-2153337567-32671354.webp',
      '/assets/gallery/wedding/pexels-habib-hosseini-3673463.webp',
      '/assets/gallery/event/pexels-panditwiguna-2788487.webp'
    ],
    packages: ['Wedding Films', 'Romance Trailers', 'Corporate Promos', 'Social Reels']
  },
  {
    id: '03',
    title: 'Event',
    icon: <Camera size={24} />,
    desc: 'Comprehensive visual records for grand events, private celebrations, luxury galas, and social anniversaries with cohesive, luxurious aesthetics.',
    image: '/assets/services/service_event.png',
    images: [
      '/assets/gallery/event/pexels-b_s-media-production-568838161-34171711.webp',
      '/assets/gallery/event/pexels-caleboquendo-11329860.webp',
      '/assets/gallery/event/pexels-miriam-salgado-157461221-10733602_1.webp'
    ],
    packages: ['Private Celebrations', 'Luxury Galas', 'Social Anniversaries', 'Corporate Meetings']
  }
];

const SECONDARY_OFFERS = [
  {
    badgeIcon: <Zap size={11} />,
    badge: 'Exclusive Summer Deal',
    title: 'The Great Summer Offer',
    desc: "Don't miss out on our limited-time summer deal! Get 30% to 50% off on all our premium photography and videography sessions. Valid only on this page.",
    promo: '30-50% OFF',
    interest: 'Photography',
    ctaText: 'Claim Your Offer Now',
  }
];

const PORTFOLIO = [
  { img: '/assets/hero/hero_portrait.png', title: 'Luxury Portraits', span: 'col-span-1 row-span-1' },
  { img: '/assets/hero/hero_event.png', title: 'Grand Events', span: 'col-span-2 row-span-1' },
  { img: '/assets/gallery/bento_1.jpg', title: 'Fine Art Newborn', span: 'col-span-1 row-span-2' },
  { img: '/assets/gallery/bento_3.jpg', title: 'Cinematic Weddings', span: 'col-span-1 row-span-1' },
  { img: '/assets/gallery/bento_4.jpg', title: 'Commercial Editorials', span: 'col-span-1 row-span-1' },
];

const AbstractBackgroundLines = () => (
  <div style={{ 
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden', 
    background: 'linear-gradient(140deg, #FFFFFF 0%, var(--color-shade-1) 20%, var(--color-shade-3) 100%)' 
  }} />
);


export default function LandingPage() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [activeAccordionId, setActiveAccordionId] = useState(null);
  const [filter, setFilter] = useState('All');
  const contactRef = useRef(null);
  const [initialService, setInitialService] = useState('Photography');
  const [initialMessage, setInitialMessage] = useState('');

  const [mixedImages, setMixedImages] = useState(allShowcaseImages);

  useEffect(() => {
    // Randomly shuffle images on client side after hydration to avoid SSR mismatches
    const shuffled = [...allShowcaseImages].sort(() => Math.random() - 0.5);
    setMixedImages(shuffled);
  }, []);

  const filteredImages = filter === 'All' 
    ? mixedImages 
    : allShowcaseImages.filter(img => img.category === filter);

  const renderOfferCard = (offer, i) => (
    <div key={i} className="hero-offer-banner" style={{ marginTop: '2rem' }}>
      <div className="hero-offer-content">
        <div className="hero-offer-badge">
          {offer.badgeIcon}
          {offer.badge}
        </div>
        <h2 className="section-title hero-offer-title">
          {offer.title}
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
          {offer.desc}
        </p>
      </div>

      <div className="hero-offer-pricing">
        <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
          Promo Investment
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
          {offer.promo}
        </div>
        <button
          onClick={() => openPopupContact(offer.interest, `I'd like to claim the offer: "${offer.title}" (${offer.promo}).`)}
          className="noha-btn-primary full-width"
        >
          {offer.ctaText}
        </button>
      </div>
    </div>
  );

  const scrollToContact = (service, msg) => {
    setInitialService(service);
    setInitialMessage(msg);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const openPopupContact = (service, msg) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openPopupForm', {
        detail: { service, message: msg }
      }));
    }
  };

  return (
    <div 
      className="noha-landing-wrapper" 
      style={{ 
        position: 'relative',
        zIndex: 0
      }}
    >
      <AbstractBackgroundLines />


      {/* ── HERO ── */}
      <HeroSlider showContactForm={true} leftAlignOnly={true} />

      {/* ── MARQUEE ── */}
      <div style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        background: 'var(--color-shade-2)',
        padding: '1.5rem 0',
        borderBottom: '1px solid rgba(158, 112, 96, 0.15)',
        margin: '1.5rem 0 1rem 0',
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
          {["Luxury Portraiture", "Cinematic Wedding Films", "Fine Art Newborn", "Grand Event Coverage", "Commercial Editorial", "Visual Storytelling", "Premium Branding"].map((item, idx) => (
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
          {["Luxury Portraiture", "Cinematic Wedding Films", "Fine Art Newborn", "Grand Event Coverage", "Commercial Editorial", "Visual Storytelling", "Premium Branding"].map((item, idx) => (
            <span key={idx}>
              {item}
              <span style={{ margin: '0 3rem', fontSize: '0.35rem', verticalAlign: 'middle', display: 'inline-block', transform: 'translateY(-1px)', opacity: 0.8 }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PHILOSOPHY ── */}
      <section id="about" className="noha-section noha-about" style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>
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
      <section id="services" className="noha-section noha-services" style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
        <div className="noha-container">
          <div className="section-header-center">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-heading">Best Photography Service in UAE</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.75rem' }}>Completed over 10k shoots in UAE</p>
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
                          <div className="detail-img-wrapper" style={{ position: 'relative' }}>
                            {srv.images ? (
                              <ServiceAutoSlider images={srv.images} />
                            ) : (
                              <img src={srv.image} alt={srv.title} className="detail-img" loading="lazy" decoding="async" />
                            )}
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
                                  onClick={() => openPopupContact(srv.title, `I'm interested in "${pkg}" — ${srv.title}.`)}
                                >
                                  <Check size={14} className="icon-gold" />
                                  <span style={{ marginLeft: '0.75rem' }}>{pkg}</span>
                                  <span className="interactive-package-get-pricing">
                                    Get Pricing
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <button
                              onClick={() => openPopupContact(srv.title, `I'd like to enquire about ${srv.title} services.`)}
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
                  <div className="detail-img-wrapper" style={{ position: 'relative' }}>
                    {activeService.images ? (
                      <ServiceAutoSlider images={activeService.images} />
                    ) : (
                      <img src={activeService.image} alt={activeService.title} className="detail-img" loading="lazy" decoding="async" />
                    )}
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
                          onClick={() => openPopupContact(activeService.title, `I'm interested in "${pkg}" — ${activeService.title}.`)}
                        >
                          <Check size={14} className="icon-gold" />
                          <span style={{ marginLeft: '0.75rem' }}>{pkg}</span>
                          <span className="interactive-package-get-pricing">
                            Get Pricing
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openPopupContact(activeService.title, `I'd like to enquire about ${activeService.title} services.`)}
                      className="noha-btn-outline"
                    >
                      Request Pricing
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ fontStyle: 'italic', fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: 'var(--color-gold)' }}>
              Create your memories with us
            </p>
          </div>
        </div>
      </section>

      {/* ── EXCITING OFFERS ── */}
      <section className="noha-section noha-offers" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
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
                onClick={() => openPopupContact('Photography', "I'd like to claim the 50% Off Newborn Photography Promo.")}
                className="noha-btn-primary full-width"
              >
                Claim Your Offer Now
              </button>
            </div>
          </div>

          {/* ── SECONDARY OFFER CARDS ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '1.5rem' }}>
            {SECONDARY_OFFERS.map((offer, i) => renderOfferCard(offer, i))}
          </div>
        </div>
      </section>

      {/* ── INLINE CONTACT FORM (After Offers) ── */}
      <section className="noha-section" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="noha-container grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ImgStack images={mixedImages.slice(0, 5).map(img => img.src)} />
          </div>
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
              {['All', 'Newborn', 'Wedding', 'Event', 'Family', 'Corporate', 'Real Estate', 'Commercial'].map((cat) => (
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
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>
          </div>

          <HomeLightbox
            sectionId="newborn"
            items={filteredImages}
            layout="bento"
            activeFilter={filter}
            hideText={true}
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
