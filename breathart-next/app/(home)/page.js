'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSlider from './components/HeroSlider';
import GalleryItem from './components/GalleryItem';
import FeatureCard from './components/FeatureCard';

const HomeLightbox = dynamic(() => import('./components/HomeLightbox'));
const Lightbox = dynamic(() => import('./components/Lightbox'));
const ContactForm = dynamic(() => import('../../components/ContactForm'));
const BlogSection = dynamic(() => import('../../components/BlogSection'));
const LazyVideo = dynamic(() => import('./components/LazyVideo'));
import SharedServiceSection from '../../components/SharedServiceSection';

import { Shield, Sparkles, Sun, Camera, Sliders, Users, BookOpen, Heart, ArrowUpRight, Zap } from 'lucide-react';

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
  { src: '/assets/gallery/corporate/pexels-ai25studioai-5583966.webp', alt: 'Corporate 1', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-cottonbro-6567863.webp', alt: 'Corporate 2', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-itay-verchik-1150587-16970452.webp', alt: 'Corporate 3', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-kooldark-15640950.webp', alt: 'Corporate 4', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-ono-kosuki-5648103_1.webp', alt: 'Corporate 5', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp', alt: 'Corporate 6', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-pavel-danilyuk-7654168.webp', alt: 'Corporate 7', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-pavel-danilyuk-8761513.webp', alt: 'Corporate 8', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-pexels-user-766999688-18794228.webp', alt: 'Corporate 9', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-pro5-vn-1368185933-25950425.webp', alt: 'Corporate 10', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-pro5-vn-1368185933-26336884.webp', alt: 'Corporate 11', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-silverkblack-36733407.webp', alt: 'Corporate 12', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-silverkblack-36733421.webp', alt: 'Corporate 13', title: 'Corporate Photography', category: 'Corporate' },
  { src: '/assets/gallery/corporate/pexels-wesley-novais-2150620479-31631644.webp', alt: 'Corporate 14', title: 'Corporate Photography', category: 'Corporate' },
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

export default function HomePage() {
  const [filter, setFilter] = useState('All');

  const handleExploreClick = (e, category) => {
    e.preventDefault();
    setFilter(category);
    const element = document.getElementById('showcase-gallery-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [mixedImages, setMixedImages] = useState(allShowcaseImages);

  useEffect(() => {
    // Randomly shuffle images on client side after hydration to avoid SSR mismatches
    const shuffled = [...allShowcaseImages].sort(() => Math.random() - 0.5);
    setMixedImages(shuffled);
  }, []);

  const filteredImages = filter === 'All' 
    ? mixedImages 
    : allShowcaseImages.filter(img => img.category === filter);

  return (
    <>

      {/* Full Screen Image Slider Hero */}
      <HeroSlider />

      {/* 1. Our Premium Services Section (With new requested order and labels) */}
      <section id="our-services" className="section" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
        <div className="container" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="section-header animate-reveal active">
            <span className="cinematic-title">Excellence in Every Frame</span>
            <h2 className="section-title">Our Premium Services</h2>
            <div className="accent-divider"></div>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', marginTop: '1.5rem' }}>
              Professional photography solutions tailored to capture your most significant moments with cinematic elegance and artistic precision.
            </p>
          </div>
        </div>

        {/* ─── FEATURED SERVICE 1: NEWBORN ─── */}
        <SharedServiceSection
          id="featured-newborn"
          theme="dark"
          imageAlignment="right"
          images="/assets/hero/photo.png"
          label="Premium Fine-Art"
          title="Newborn"
          description="Capturing the purest innocence and tender beginnings of your little one. Our specialized safe-handling studio sessions preserve these fleeting first moments in timeless, breathtaking portraiture."
          features={[
            { icon: Shield, title: 'Safe Handling', sub: 'Certified studio environment' },
            { icon: Sparkles, title: 'Elegant Props', sub: 'Luxury handcrafted wraps' },
            { icon: Sun, title: 'Gentle Light', sub: 'Baby-friendly warm glow' },
            { icon: Heart, title: 'Pure Art', sub: 'Heartwarming memories' }
          ]}
          customCta={
            <>
              <a href="#gallery" onClick={(e) => handleExploreClick(e, 'Newborn')} className="btn-premium btn-premium-outline">
                Explore Session <ArrowUpRight size={14} />
              </a>
              <Link href="/contact?interest=newborn" className="btn-premium btn-premium-filled">
                Book Now <ArrowUpRight size={14} />
              </Link>
            </>
          }
        />

        {/* ─── FEATURED SERVICE 2: WEDDING ─── */}
        <SharedServiceSection
          id="featured-wedding"
          theme="light"
          imageAlignment="left"
          images="/assets/gallery/wedding/pexels-photography-maghradze-ph-1659410-31953101.webp"
          label="Cinematic Stories"
          title="Wedding"
          description="Documenting your sacred promises, raw emotions, and pure celebrations in cinematic elegance. We preserve your beautiful love story in masterfully curated visual legacies."
          features={[
            { icon: Camera, title: 'Cinematic Art', sub: 'Candid emotions & drama' },
            { icon: Sliders, title: 'Luxury Edit', sub: 'Signature warm palettes' },
            { icon: Users, title: 'Dual Capture', sub: 'Multi-angle storytelling' },
            { icon: BookOpen, title: 'Fine Album', sub: 'Premium crafted legacy book' }
          ]}
          customCta={
            <>
              <a href="#gallery" onClick={(e) => handleExploreClick(e, 'Wedding')} className="btn-premium btn-premium-outline">
                Explore Session <ArrowUpRight size={14} />
              </a>
              <Link href="/contact?interest=wedding" className="btn-premium btn-premium-filled">
                Book Now <ArrowUpRight size={14} />
              </Link>
            </>
          }
        />

        {/* ─── FEATURED SERVICE 3: CORPORATE ─── */}
        <SharedServiceSection
          id="featured-corporate"
          theme="dark"
          imageAlignment="right"
          images="/assets/gallery/corporate/pexels-itay-verchik-1150587-16970452.webp"
          imageObjectPosition="center 10%"
          label="Premium Branding"
          title="Corporate"
          description="Elevate your brand with professional corporate headshots and workspace photography. We capture your business's essence with high-end, polished imagery designed to make a powerful professional impact."
          features={[
            { icon: Shield, title: 'Executive Portraits', sub: 'Professional headshots' },
            { icon: Users, title: 'Workspace Shots', sub: 'Office dynamics' },
            { icon: Sun, title: 'Brand Story', sub: 'Visual identity' },
            { icon: Zap, title: 'Fast Delivery', sub: 'Quick turnaround' }
          ]}
          customCta={
            <>
              <a href="#showcase-gallery-section" onClick={(e) => handleExploreClick(e, 'Corporate')} className="btn-premium btn-premium-outline">
                Explore Session <ArrowUpRight size={14} />
              </a>
              <Link href="/contact?interest=corporate" className="btn-premium btn-premium-filled">
                Book Now <ArrowUpRight size={14} />
              </Link>
            </>
          }
        />

        {/* ─── REMAINING 3 SERVICES (Grid) ─── */}
        <div className="container" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="remaining-services-grid">
            <GalleryItem image="/assets/gallery/event/pexels-miriam-salgado-157461221-10733602_1.webp" alt="Event Photography" title="Event" number="04" onClick={(e) => handleExploreClick(e, 'Event')} buttonText="Explore Session" />
            <GalleryItem image="/assets/gallery/real-estate/0012.webp" alt="Real Estate Photography" title="Real Estate" number="05" onClick={(e) => handleExploreClick(e, 'Real Estate')} buttonText="Explore Session" delay={0.1} />
            <GalleryItem image="/assets/gallery/family/IMG_9773.webp" alt="Family Photography" title="Family" number="06" onClick={(e) => handleExploreClick(e, 'Family')} buttonText="Explore Session" delay={0.2} wrapperClass="span-2-desktop" objectPosition="center 30%" />
          </div>
        </div>
      </section>

      {/* 2. Newborn Photography Collection */}
      <section id="newborn" className="section" style={{ paddingTop: '3.5rem', paddingBottom: 0 }}>
        <div className="container animate-reveal active">
          <div className="section-header">
            <span className="cinematic-title">01 / Innocence</span>
            <h2 className="section-title">Newborn Photography</h2>
            <div className="accent-divider"></div>
          </div>
          <HomeLightbox
            sectionId="newborn"
            gridCols="repeat(3, 1fr)"
            hideText={true}
            items={[
              { src: '/assets/gallery/newborn/A98C22F0-2F0E-4A32-B285-1E23FB0AD1E3.webp', alt: 'Newborn 1', title: 'Pure Innocence' },
              { src: '/assets/gallery/newborn/BK-108_LORRIE_890_.jpg.webp', alt: 'Newborn 2', title: 'Soft Dreams' },
              { src: '/assets/gallery/newborn/BK-205_WILMA_443_.jpg.webp', alt: 'Newborn 3', title: 'First Light' },
              { src: '/assets/gallery/newborn/BK-62_LORI_244_-_Copy.jpg.webp', alt: 'Newborn 4', title: 'Tender Grip' },
              { src: '/assets/gallery/newborn/BK_264_SABRINA_338_.jpg_filename_UTF_8_BK_264_SABRINA_338_.jpg.webp', alt: 'Newborn 5', title: 'Peaceful Sleep' },
              { src: '/assets/gallery/newborn/BK_264_SABRINA_446_.jpg_filename_UTF_8_BK_264_SABRINA_446_.jpg.webp', alt: 'Newborn 6', title: 'Sweet Angel' },
            ]}
          />
          <div className="explore-more-container animate-reveal active">
            <a href="#gallery" onClick={(e) => handleExploreClick(e, 'Newborn')} className="btn btn-outline explore-btn">
              Explore Newborn Sessions <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Wedding Photography Collection */}
      <section id="wedding" className="section" style={{ paddingTop: '3.5rem', paddingBottom: 0 }}>
        <div className="container animate-reveal active">
          <div className="section-header">
            <span className="cinematic-title">02 / Devotion</span>
            <h2 className="section-title">Wedding Photography</h2>
            <div className="accent-divider"></div>
          </div>
          <HomeLightbox
            sectionId="wedding"
            gridCols="repeat(3, 1fr)"
            hideText={true}
            items={[
              { src: '/assets/gallery/wedding/pexels-abdallah-mahmoud-2153337567-32671354.webp', alt: 'Wedding 1', title: 'The Vow' },
              { src: '/assets/gallery/wedding/pexels-abdallah-naser-2156661580-34317944.webp', alt: 'Wedding 2', title: 'Sacred Bond' },
              { src: '/assets/gallery/wedding/pexels-ahmetcotur-29560843.webp', alt: 'Wedding 3', title: 'Golden Hour' },
              { src: '/assets/gallery/wedding/pexels-braiki-dhia-eddine-2159140624-35819262.webp', alt: 'Wedding 4', title: 'Elegant Union' },
              { src: '/assets/gallery/wedding/pexels-dilara-dogar-713705919-30439697.webp', alt: 'Wedding 5', title: 'Eternal Flame' },
              { src: '/assets/gallery/wedding/pexels-habib-hosseini-3673463.webp', alt: 'Wedding 6', title: 'Together Forever' },
            ]}
          />
          <div className="explore-more-container animate-reveal active">
            <a href="#gallery" onClick={(e) => handleExploreClick(e, 'Wedding')} className="btn btn-outline explore-btn">
              Explore Wedding Stories <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Event Photography Collection */}
      <section id="event-management" className="section" style={{ paddingTop: '3.5rem', paddingBottom: 0 }}>
        <div className="container animate-reveal active">
          <div className="section-header">
            <span className="cinematic-title">03 / Connection</span>
            <h2 className="section-title">Event Photography</h2>
            <div className="accent-divider"></div>
          </div>
          <HomeLightbox
            sectionId="event-management"
            gridCols="repeat(3, 1fr)"
            items={[
              { src: '/assets/gallery/event/pexels-b_s-media-production-568838161-34171711.webp', alt: 'Event 1', title: 'Celebration' },
              { src: '/assets/gallery/event/pexels-caleboquendo-11329860.webp', alt: 'Event 2', title: 'Gala Night' },
              { src: '/assets/gallery/event/pexels-cherubs-22669860.webp', alt: 'Event 3', title: 'Moment of Joy' },
              { src: '/assets/gallery/event/pexels-miriam-salgado-157461221-10733219_1.webp', alt: 'Event 4', title: 'Party' },
              { src: '/assets/gallery/event/pexels-miriam-salgado-157461221-10733602_1.webp', alt: 'Event 5', title: 'Grand Celebration' },
              { src: '/assets/gallery/event/pexels-panditwiguna-2788487.webp', alt: 'Event 6', title: 'Festive Evening' },
            ]}
          />
          <div className="explore-more-container animate-reveal active">
            <a href="#gallery" onClick={(e) => handleExploreClick(e, 'Event')} className="btn btn-outline explore-btn">
              Explore Event Stories <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Filterable Showcase Gallery Section */}
      <section id="showcase-gallery-section" className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="section-header animate-reveal">
            <span className="cinematic-title">Curated Masterpieces</span>
            <h2 className="section-title">Creative Showcase</h2>
            <div className="accent-divider"></div>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', marginTop: '1.5rem' }}>
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
                {/* Custom Caret */}
                <svg 
                  style={{ width: '1rem', height: '1rem', opacity: 0.8, flexShrink: 0 }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Invisible native select overlaid on top */}
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
            sectionId="showcase-gallery"
            items={filteredImages}
            layout="bento"
            activeFilter={filter}
            hideText={true}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us-section" id="why-choose-us">
        <div className="why-bg-decor left-decor"></div>
        <div className="why-bg-decor right-decor"></div>

        <div className="container why-choose-us-container">
          <div className="why-content-wrapper animate-reveal active">
            <div className="why-image-box">
              <LazyVideo src="/assets/about/why_choose_us_video.mp4" />
            </div>

            <div className="why-text-area">
              <div className="why-text-card">
                <span className="cinematic-title" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', letterSpacing: '2px' }}>Our Philosophy</span>
                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'left', textTransform: 'uppercase', color: '#2B1B14' }}>Professional &amp; Premium Experience</h2>

                <p className="why-paragraph">
                  At BreathArt, we deliver more than just photographs—we create timeless visual experiences. We combine artistic vision with advanced techniques to capture your moments with cinematic elegance and precision.
                </p>
                <p className="why-paragraph">
                  Every photoshoot is carefully planned to provide a seamless, comfortable experience. From composition and lighting to styling and storytelling, we focus on every detail to ensure exceptional results.
                </p>
                <p className="why-paragraph" style={{ margin: 0 }}>
                  Our commitment to quality, creativity, and service delivers a premium photography experience. Whether newborn, wedding, or event sessions, we ensure every milestone is captured beautifully.
                </p>
              </div>
              <div className="why-button-box">
                <Link href="/services" className="why-explore-btn">
                  Expand Your Horizons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Premium Features Section (Warm Cream Background) */}
      <section id="premium-features" className="section no-bottom-padding-desktop" style={{ background: 'var(--color-black)', paddingTop: '3.5rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="section-header animate-reveal active why-choose-home-header" style={{ marginBottom: '0' }}>
            <span className="cinematic-title">The BreathArt Difference</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Why Choose BreathArt</h2>
            <div className="accent-divider"></div>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <FeatureCard index={1} icon="fas fa-user-tie" title="Experienced Professional Photographers" description="Master artists with decades of collective experience." />
            <FeatureCard index={2} icon="fas fa-female" title="Dedicated Lady Staff for Maternity" description="Ensuring comfort and privacy for maternity & newborn sessions." />
            <FeatureCard index={3} icon="fas fa-mountain" title="Premium Studio Environment" description="State-of-the-art space designed for creative excellence." />
            <FeatureCard index={4} icon="fas fa-camera" title="High-End Equipment & Lighting" description="The latest mirrorless technology and Profoto lighting." />
            <FeatureCard index={5} icon="fas fa-shipping-fast" title="Fast 24-Hour Photo Delivery" description="Rapid turn-around without compromising art quality." />
            <FeatureCard index={6} icon="fas fa-heart" title="Trusted by 1000+ Happy Clients" description="Building lasting relationships through exceptional art." />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* 6. Premium Contact Section */}
      <section id="home-contact" className="section no-top-padding-desktop" style={{ borderTop: '1px solid rgba(158, 112, 96, 0.15)', paddingBottom: '8rem', paddingTop: '6rem', overflow: 'hidden', position: 'relative' }}>
        {/* Background decors mirrored from Why Choose Us */}
        <div className="why-bg-decor left-decor" style={{ transform: 'rotate(-20deg) scaleX(-1)' }}></div>
        <div className="why-bg-decor right-decor" style={{ transform: 'rotate(-20deg) scaleX(-1)' }}></div>
        
        <div className="container animate-reveal active" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="cinematic-title">Secure Your Session</span>
            <h2 className="section-title">Initiate Your Story</h2>
            <div className="accent-divider"></div>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', marginTop: '1.5rem', textAlign: 'center' }}>
              Reserve your photoshoot date or inquire about our premium catalogs. Let us capture your life's most precious milestones.
            </p>
          </div>

          <div className="home-contact-wrapper" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-shade-2)', padding: '3.5rem', borderRadius: '12px', border: '1px solid rgba(158, 112, 96, 0.15)', boxShadow: '0 20px 40px rgba(43, 27, 20, 0.05)' }}>
            <ContactForm buttonText="Reserve Your Date" showPackageField={false} />
          </div>
        </div>
      </section>
      <Lightbox />
    </>
  );
}
