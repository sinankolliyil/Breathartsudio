'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Sun, Heart, Star, Camera, Check, ArrowRight, Phone, MessageSquare, ArrowUpRight, User, Mail, Briefcase, Building, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useForm } from '@formspree/react';

const HomeLightbox = dynamic(() => import('../../(home)/components/HomeLightbox'));
const Lightbox = dynamic(() => import('../../(home)/components/Lightbox'));
const ContactForm = dynamic(() => import('../../../components/ContactForm'));
const TestimonialsSlider = dynamic(() => import('../../../components/TestimonialsSlider'));
import SharedServiceSection from '../../../components/SharedServiceSection';

const ServiceAutoSlider = ({ images, objectPosition = "center" }) => {
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
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image
            src={images[index]}
            alt="Service gallery preview"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    text: "We hired BreathArt to shoot headshots for our board members and photographs of our new offices. The quality of editing was top-notch, elevating our professional visual brand.",
    author: "Operations Director",
    location: "DIFC Dubai"
  },
  {
    id: 2,
    text: "As a luxury real estate agency, high-quality images are critical. BreathArt's spatial photography captures our listings' layout and lighting perfectly, driving direct client leads.",
    author: "Managing Partner",
    location: "Palm Jumeirah"
  },
  {
    id: 3,
    text: "The team at BreathArt exceeded our expectations. The corporate headshots captured our team's personality perfectly, and the turnaround time was incredibly fast. Highly recommended!",
    author: "Marketing Manager",
    location: "Business Bay"
  }
];

const CorporateRealEstateHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [state, handleSubmit] = useForm('meebwbzz'); // Use same form endpoint or replace

  useEffect(() => {
    if (state.succeeded) {
      window.location.href = '/thank-you';
    }
  }, [state.succeeded]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Link href="/" style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '10px 15px',
        borderRadius: '50px',
        color: '#fff',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
      >
        <i className="fas fa-arrow-left"></i> Home
      </Link>
    <section className="newborn-hero-section">
      <style dangerouslySetInnerHTML={{__html: `
        .newborn-hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 130px 8% 80px 8%;
          background-color: var(--color-black);
          min-height: 90vh;
          gap: 50px;
          position: relative;
          overflow: hidden;
        }
        
        .newborn-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .newborn-hero-overlay {
          display: none;
        }
        
        .newborn-hero-left {
          flex: 1.2;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          position: relative;
          z-index: 2;
        }
        
        .newborn-hero-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--color-gold);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          font-family: var(--font-heading);
        }
        
        .newborn-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          line-height: 1.15;
          color: var(--color-white);
          font-weight: 500;
          margin-bottom: 1.2rem;
        }
        
        .newborn-hero-title span.accent {
          color: var(--color-gold);
          font-style: italic;
        }
        
        .newborn-hero-divider {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 1.8rem;
          width: 100%;
          max-width: 250px;
        }
        
        .newborn-hero-divider .line {
          flex: 1;
          height: 1px;
          background-color: rgba(158, 112, 96, 0.3);
        }
        
        .newborn-hero-divider .diamond {
          width: 6px;
          height: 6px;
          background-color: var(--color-gold);
          transform: rotate(45deg);
        }
        
        .newborn-hero-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 2.2rem;
          font-family: var(--font-body);
        }
        
        .newborn-hero-explore-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-gold);
          color: #faf5f0;
          padding: 0.9rem 2.2rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          width: fit-content;
          font-family: var(--font-heading);
          box-shadow: 0 4px 12px rgba(158, 112, 96, 0.15);
        }
        
        .newborn-hero-explore-btn:hover {
          background-color: #83594b;
          transform: translateY(-2px);
        }
        
        .newborn-hero-explore-btn:active {
          transform: translateY(0);
        }
        
        .newborn-hero-right {
          flex: 1.2;
          max-width: 420px;
          display: flex;
          justify-content: flex-end;
          position: relative;
          z-index: 2;
        }
        
        .newborn-hero-card {
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(158, 112, 96, 0.2);
          border-radius: 16px;
          padding: 2.5rem;
          width: 100%;
          box-shadow: 0 25px 50px rgba(59, 35, 26, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .newborn-hero-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: var(--color-white);
          font-weight: 500;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        
        .newborn-hero-card-subtitle {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          letter-spacing: 1px;
          margin-bottom: 1rem;
          text-align: center;
          font-family: var(--font-heading);
        }
        
        .newborn-hero-card-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.8rem;
          width: 100%;
          max-width: 150px;
        }
        
        .newborn-hero-card-divider .line {
          flex: 1;
          height: 1px;
          background-color: rgba(158, 112, 96, 0.2);
        }
        
        .newborn-hero-card-divider .diamond {
          width: 5px;
          height: 5px;
          background-color: var(--color-gold);
          transform: rotate(45deg);
        }
        
        .newborn-hero-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        
        .newborn-hero-input-wrapper {
          position: relative;
          width: 100%;
        }
        
        .newborn-hero-input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          opacity: 0.7;
          pointer-events: none;
          display: flex;
          align-items: center;
        }
        
        .newborn-hero-input {
          width: 100%;
          padding: 0.95rem 1rem 0.95rem 46px;
          border: 1px solid rgba(158, 112, 96, 0.22);
          border-radius: 8px;
          background-color: #fcfbf9;
          color: var(--color-white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        
        .newborn-hero-input::placeholder {
          color: #a09088;
        }
        
        .newborn-hero-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(158, 112, 96, 0.12);
          background-color: #ffffff;
        }
        
        .newborn-hero-checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 0.2rem;
          margin-bottom: 0.5rem;
        }
        
        .newborn-hero-checkbox {
          width: auto !important;
          margin-top: 3px;
          cursor: pointer;
        }
        
        .newborn-hero-checkbox-label {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          text-align: left;
          cursor: pointer;
        }
        
        .newborn-hero-checkbox-label a {
          color: var(--color-gold);
          text-decoration: underline;
        }
        
        .newborn-hero-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-gold);
          color: #ffffff;
          padding: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s, opacity 0.2s;
          width: 100%;
          font-family: var(--font-heading);
        }
        
        .newborn-hero-submit-btn:hover {
          background-color: #83594b;
          transform: translateY(-2px);
        }
        
        .newborn-hero-submit-btn:active {
          transform: translateY(0);
        }
        
        .newborn-hero-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        @media (max-width: 1150px) {
          .newborn-hero-section {
            padding: 120px 5% 70px 5%;
            gap: 30px;
          }
        }
        
        @media (max-width: 1024px) {
          .newborn-hero-section {
            flex-direction: column;
            padding: 110px 8% 60px 8%;
            gap: 40px;
          }
          
          .newborn-hero-left {
            max-width: 100%;
            text-align: center;
            align-items: center;
          }
          
          .newborn-hero-divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .newborn-hero-right {
            width: 100%;
            max-width: 100%;
            justify-content: center;
          }
          
          .newborn-hero-card {
            max-width: 440px;
          }
        }
        
        @media (max-width: 576px) {
          .newborn-hero-section {
            padding: 100px 4% 50px 4%;
            gap: 35px;
          }
          
          .newborn-hero-card {
            padding: 2rem 1.5rem;
          }
        }
      `}} />
      
      {/* Full Background Image Slider */}
      <div className="newborn-hero-bg">
        <ServiceAutoSlider 
          objectPosition="center 15%"
          images={[
            '/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp',
            '/assets/gallery/real-estate/0012.webp',
            '/assets/gallery/corporate/pexels-pavel-danilyuk-7654168.webp'
          ]} 
        />
        <div className="newborn-hero-overlay" style={{display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', zIndex: 1}}></div>
      </div>

      {/* Left content block */}
      <div className="newborn-hero-left">
        <span className="newborn-hero-label">Commercial & Spatial</span>
        <h1 className="newborn-hero-title">
          Corporate <br/>
          Headshots & <br/>
          <span className="accent">Real Estate</span> <br/>
          Photography
        </h1>
        <div className="newborn-hero-divider">
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </div>
        <p className="newborn-hero-description" style={{color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Professional corporate headshots and real estate photography in Dubai designed to showcase your people, properties, and brand with a polished, professional look.
        </p>
        <Link href="#corporate-services" className="newborn-hero-explore-btn">
          Explore Services
        </Link>
      </div>
      
      {/* Right form card block */}
      <div className="newborn-hero-right">
        <div className="newborn-hero-card">
          <h3 className="newborn-hero-card-title">Book Your Session</h3>
          <span className="newborn-hero-card-subtitle">Plan Your Shoot</span>
          <div className="newborn-hero-card-divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
          
          <form onSubmit={handleSubmit} className="newborn-hero-form">
            <input type="hidden" name="service" value="corporate" />
            <input type="hidden" name="message" value="Corporate/Real Estate Booking request from Hero." />
            
            <div className="newborn-hero-input-wrapper">
              <span className="newborn-hero-input-icon">
                <User size={18} />
              </span>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                placeholder="Your Name" 
                required 
                className="newborn-hero-input"
              />
            </div>
            
            <div className="newborn-hero-input-wrapper">
              <span className="newborn-hero-input-icon">
                <Mail size={18} />
              </span>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder="Email Address" 
                required 
                className="newborn-hero-input"
              />
            </div>
            
            <div className="newborn-hero-input-wrapper">
              <span className="newborn-hero-input-icon">
                <Phone size={18} />
              </span>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                placeholder="Phone Number" 
                required 
                className="newborn-hero-input"
              />
            </div>
            
            <div className="newborn-hero-checkbox-group">
              <input type="checkbox" id="terms-hero" required className="newborn-hero-checkbox" />
              <label htmlFor="terms-hero" className="newborn-hero-checkbox-label">
                I accept the <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a>
              </label>
            </div>
            
            <button type="submit" disabled={state.submitting} className="newborn-hero-submit-btn">
              {state.submitting ? "Submitting..." : "Book Your Session"}
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default function CorporateRealEstatePage() {
  const [activeReview, setActiveReview] = useState(0);
  const footerFormRef = useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    footerFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLightbox = (index) => {
    const galleryItems = [
      { src: '/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp', title: 'Corporate Headshots' },
      { src: '/assets/gallery/corporate/pexels-pavel-danilyuk-7654168.webp', title: 'Executive Portraits' },
      { src: '/assets/gallery/corporate/pexels-silverkblack-36733407.webp', title: 'Team Photography' },
      { src: '/assets/gallery/real-estate/0012.webp', title: 'Luxury Properties' },
      { src: '/assets/gallery/real-estate/0014.webp', title: 'Interior & Architectural' },
      { src: '/assets/gallery/real-estate/minimal.webp', title: 'Villa & Apartment' }
    ];
    const event = new CustomEvent('lightbox-open', {
      detail: {
        galleryItems,
        startIndex: index,
      },
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <CorporateRealEstateHero />

      {/* 1b. Trust Bar */}
      <div style={{
        background: 'var(--color-shade-2)',
        borderBottom: '1px solid rgba(158, 112, 96, 0.15)',
        padding: '1.5rem 5%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        {/* Google Reviews Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(158, 112, 96, 0.12)',
          border: '1px solid rgba(158, 112, 96, 0.3)',
          padding: '0.45rem 1.1rem',
          borderRadius: '50px',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={13} fill="var(--color-gold)" color="var(--color-gold)" />
            ))}
          </div>
          <span style={{ fontSize: '0.7rem', color: 'var(--color-white)', letterSpacing: '1.5px', fontWeight: '600', textTransform: 'uppercase' }}>
            5-Star Google Reviews
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: 'rgba(158,112,96,0.25)', flexShrink: 0 }} className="trust-bar-divider" />

        {/* Trust Points */}
        {[
          { text: '5+ Years of Experience', icon: 'fas fa-award' },
          { text: 'Premium Quality', icon: 'fas fa-gem' },
          { text: 'Professional Photographers', icon: 'fas fa-camera' },
          { text: 'Transparent Pricing', icon: 'fas fa-wallet' }
        ].map((tp, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: 'var(--color-white)',
            fontSize: '0.75rem',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap'
          }}>
            <i className={tp.icon} style={{ color: 'var(--color-gold)', fontSize: '0.8rem' }}></i>
            <span>{tp.text}</span>
          </div>
        ))}
      </div>

      {/* 2. CORPORATE PHOTOGRAPHY OVERVIEW */}
      <SharedServiceSection
        id="corporate-overview"
        theme="dark"
        imageAlignment="right"
        images={[
          '/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp',
          '/assets/gallery/corporate/pexels-silverkblack-36733407.webp'
        ]}
        label="Professional Photography for People & Brands"
        title="Corporate Photography"
        description={
          <>
            From professional corporate headshots and team photography to executive portraits in Dubai, we create high-quality images that make a strong first impression.<br /><br />
            Our corporate photography services are ideal for LinkedIn profiles, company websites, employee profiles, marketing materials, and business branding. We help you reflect the professionalism, culture, and personality of your business.
          </>
        }
        features={[
          { icon: User, title: 'Corporate Headshots', sub: 'Professional & polished' },
          { icon: Briefcase, title: 'Team & Executive', sub: 'LinkedIn & business portraits' },
          { icon: Sun, title: 'Brand Story', sub: 'Visual identity' },
          { icon: Zap, title: 'Fast Delivery', sub: 'Quick turnaround' }
        ]}
        buttonText="Enquire Now"
        onButtonClick={scrollToForm}
      />

      {/* 3. EXECUTIVE PORTRAITS */}
      <SharedServiceSection
        id="corporate-headshots"
        theme="light"
        imageAlignment="left"
        images="/assets/gallery/corporate/pexels-pavel-danilyuk-7654168.webp"
        imageObjectPosition="center 15%"
        label="Professional Corporate Headshots in Dubai"
        title="Executive Portraits"
        description={
          <>
            Corporate headshot photography in Dubai focuses on clean lighting, natural expressions, and polished portraits that represent you and your business with confidence.<br /><br />
            Beyond photography, we offer complete corporate video production Dubai services — from company profile videos and executive interviews to promotional and training content. Perfect for executives, employees, entrepreneurs, LinkedIn profiles, company websites, and professional branding.
          </>
        }
        buttonText="Enquire Now"
        onButtonClick={scrollToForm}
      />

      {/* 4. REAL ESTATE PHOTOGRAPHY OVERVIEW */}
      <SharedServiceSection
        id="realestate-overview"
        theme="dark"
        imageAlignment="right"
        images="/assets/gallery/real-estate/0012.webp"
        label="Stunning Property Photography in Dubai"
        title="Real Estate Photography"
        description={
          <>
            We showcase properties with carefully composed interior, exterior, and architectural photographs designed to attract potential buyers, tenants, and investors.<br /><br />
            Whether it's a luxury villa, modern apartment, or commercial office space, our spatial photography captures the layout, lighting, and unique architectural features perfectly, driving direct client leads.
          </>
        }
        features={[
          { icon: Building, title: 'Interior & Exterior', sub: 'Real estate photography' },
          { icon: Sparkles, title: 'Architectural', sub: 'Property & spaces' },
          { icon: Star, title: 'Luxury Real Estate', sub: 'High-end properties' },
          { icon: Check, title: 'Professional Editing', sub: 'HDR Image processing' }
        ]}
        buttonText="Enquire Now"
        onButtonClick={scrollToForm}
      />

      {/* 5. PROPERTY SHOWCASE */}
      <SharedServiceSection
        id="real-estate"
        theme="light"
        imageAlignment="left"
        images="/assets/gallery/real-estate/0014.webp"
        label="Make Your Property Stand Out"
        title="Property Showcase"
        description={
          <>
            Make your property stand out with professional real estate photography in Dubai.<br /><br />
            We photograph villas, apartments, offices, hotels, commercial spaces, and luxury properties with attention to lighting, composition, interiors, and architectural details—helping your listings create a stronger first impression.
          </>
        }
        buttonText="Enquire Now"
        onButtonClick={scrollToForm}
      />

      {/* 5. Gallery Section */}
      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .portfolio-gallery-grid {
            display: flex;
            gap: 16px;
            width: 100%;
            margin-top: 2.5rem;
          }
          
          .portfolio-col {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          
          .portfolio-col-split {
            flex: 1.15;
          }
          
          .portfolio-item {
            position: relative;
            width: 100%;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            background-color: var(--color-shade-2);
            box-shadow: 0 8px 24px rgba(59, 35, 26, 0.04);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          }
          
          .portfolio-item img {
            transition: transform 0.6s ease !important;
          }
          
          .portfolio-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 36px rgba(59, 35, 26, 0.1);
          }
          
          .portfolio-item:hover img {
            transform: scale(1.05) !important;
          }
          
          .portfolio-col-tall .portfolio-item {
            height: 480px;
          }
          
          .portfolio-col-split .item-tall {
            height: 282px;
          }
          
          .portfolio-col-split .item-short {
            height: 182px;
          }
          
          @media (max-width: 1024px) {
            .portfolio-gallery-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            .portfolio-col {
              display: contents;
            }
            .portfolio-col-tall .portfolio-item,
            .portfolio-col-split .item-tall,
            .portfolio-col-split .item-short {
              height: 320px;
            }
          }
          
          @media (max-width: 576px) {
            .portfolio-gallery-grid {
              grid-template-columns: 1fr;
            }
            .portfolio-col-tall .portfolio-item,
            .portfolio-col-split .item-tall,
            .portfolio-col-split .item-short {
              height: 380px;
            }
          }
        `}} />
        <div className="container">
          <div className="section-header animate-reveal active">
            <span className="cinematic-title">Our Photography Gallery</span>
            <h2 className="section-title">Corporate &amp; Real Estate Gallery</h2>
            <div className="accent-divider"></div>
          </div>
          
          <div className="portfolio-gallery-grid">
            {/* Column 1 - Tall */}
            <div className="portfolio-col portfolio-col-tall">
              <div className="portfolio-item" onClick={() => openLightbox(0)}>
                <Image 
                  src="/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp" 
                  alt="Corporate Headshots" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Column 2 - Tall */}
            <div className="portfolio-col portfolio-col-tall">
              <div className="portfolio-item" onClick={() => openLightbox(1)}>
                <Image 
                  src="/assets/gallery/corporate/pexels-pavel-danilyuk-7654168.webp" 
                  alt="Executive Portraits" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
            </div>
            
            {/* Column 3 - Split (Tall Top, Short Bottom) */}
            <div className="portfolio-col portfolio-col-split">
              <div className="portfolio-item item-tall" onClick={() => openLightbox(2)}>
                <Image 
                  src="/assets/gallery/corporate/pexels-silverkblack-36733407.webp" 
                  alt="Team Photography" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="portfolio-item item-short" onClick={() => openLightbox(3)}>
                <Image 
                  src="/assets/gallery/real-estate/0012.webp" 
                  alt="Luxury Properties" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Column 4 - Tall */}
            <div className="portfolio-col portfolio-col-tall">
              <div className="portfolio-item" onClick={() => openLightbox(4)}>
                <Image 
                  src="/assets/gallery/real-estate/0014.webp" 
                  alt="Interior & Architectural Photography" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Column 5 - Split (Short Top, Tall Bottom) */}
            <div className="portfolio-col portfolio-col-split">
              <div className="portfolio-item item-short" onClick={() => openLightbox(5)}>
                <Image 
                  src="/assets/gallery/real-estate/minimal.webp" 
                  alt="Villa & Apartment Photography" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="portfolio-item item-tall" onClick={() => openLightbox(0)}>
                <Image 
                  src="/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp" 
                  alt="Corporate Environment" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <a href="#gallery" className="btn-premium btn-premium-outline">
              View Our Gallery
            </a>
          </div>
        </div>
      </section>

      {/* 6. Google Reviews (Star/Testimonial Slider) */}
      <TestimonialsSlider 
        theme="dark" 
        reviews={testimonials.map(t => ({ ...t, rating: 5 }))} 
        title="Trusted by Businesses & Professionals Across Dubai" 
        subtitle="5-Star Google Rating" 
      />

      {/* 7. WHY CHOOSE US */}
      <section id="why-choose-us" className="section" style={{ background: 'var(--color-shade-1)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4rem',
            alignItems: 'center'
          }} className="services-alternate-row">
            {/* Left Content */}
            <div style={{ flex: '1 1 450px' }}>
              <span className="cinematic-title" style={{ color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
                Why Choose Us
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                color: 'var(--color-white)',
                marginTop: '0.5rem',
                marginBottom: '1.5rem',
                lineHeight: 1.1
              }}>
                Professional Photography, Tailored to Your Brand
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Whether you need corporate headshots or real estate photography, our experienced photographers deliver professional images that match your brand, style, and requirements.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <i className="fas fa-camera" style={{ color: 'var(--color-gold)', marginRight: '8px' }}></i>
                    Experienced Photographers
                  </h4>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <i className="fas fa-video" style={{ color: 'var(--color-gold)', marginRight: '8px' }}></i>
                    Professional Equipment
                  </h4>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <i className="fas fa-building" style={{ color: 'var(--color-gold)', marginRight: '8px' }}></i>
                    Studio & On-Location
                  </h4>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <i className="fas fa-magic" style={{ color: 'var(--color-gold)', marginRight: '8px' }}></i>
                    High-Quality Editing
                  </h4>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <i className="fas fa-calendar" style={{ color: 'var(--color-gold)', marginRight: '8px' }}></i>
                    Flexible Scheduling
                  </h4>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <i className="fas fa-bolt" style={{ color: 'var(--color-gold)', marginRight: '8px' }}></i>
                    Fast Turnaround
                  </h4>
                </div>
              </div>

            </div>

            {/* Right Product Image */}
            <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '550px',
                height: '450px',
                position: 'relative',
                border: '1px solid rgba(158, 112, 96, 0.25)'
              }}>
                <Image
                  src="/assets/gallery/corporate/pexels-silverkblack-36733407.webp"
                  alt="Professional Corporate Photography Studio"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER ENQUIRY SECTION */}
      <section id="contact-section" className="section" style={{
        borderTop: '1px solid rgba(158, 112, 96, 0.15)',
        paddingTop: '6rem',
        paddingBottom: '8rem',
        background: 'var(--color-black)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4rem',
            alignItems: 'start'
          }} className="services-alternate-row">

            {/* Left Column CTA */}
            <div style={{ flex: '1 1 350px' }}>
              <span className="cinematic-title" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>
                Secure Your Date
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--color-white)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                lineHeight: '1.2',
                marginBottom: '1.5rem'
              }}>
                Let's Create Professional Images for Your Business
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Whether you need corporate headshots, team photography, or real estate photography in Dubai, we're ready to bring your vision to life.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3rem' }}>
                <a href="tel:+971526400679" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-white)', fontWeight: '600', textDecoration: 'none' }}>
                  <i className="fas fa-phone" style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}></i>
                  +971 52 640 0679
                </a>
                <a href="https://wa.me/971526400679" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-white)', fontWeight: '600', textDecoration: 'none' }}>
                  <i className="fab fa-whatsapp" style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}></i>
                  WhatsApp Support
                </a>
              </div>
            </div>

            {/* Right Column Form */}
            <div style={{
              flex: '1 1 450px',
              background: 'var(--color-shade-2)',
              padding: '3.5rem',
              borderRadius: '0px',
              border: '1px solid rgba(158, 112, 96, 0.15)',
              boxShadow: '0 20px 40px rgba(43, 27, 20, 0.05)'
            }} className="connect-inner-mobile">
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--color-white)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Session Inquiry
              </h3>
              <ContactForm
                theme="cinematic"
                buttonText="Book Now"
                showServiceField={true}
                showPackageField={false}
                showDetailsField={false}
                initialMessage="I am interested in corporate/real estate photography."
                initialService="corporate"
              />
            </div>

          </div>
        </div>
      </section>

      <Lightbox />
    </>
  );
}
