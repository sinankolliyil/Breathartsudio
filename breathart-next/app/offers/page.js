'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Gift, Calendar, Check, Compass, Phone } from 'lucide-react';

const categories = {
  Maternity: {
    title: "Maternity Fine-Art Series",
    tagline: "Elegant pregnancy portraiture celebrating raw beauty & motherhood",
    icon: "fas fa-female",
    packages: [
      {
        name: "Basic Bundle",
        price: "DHS 499",
        inclusions: [
          "10-15 Fully Edited Pictures",
          "25 Raw High-Res Pictures",
          "One Creative Theme Studio Setup",
          "Indoor or Outdoor Session Options"
        ]
      },
      {
        name: "Advanced Bundle",
        price: "DHS 599",
        inclusions: [
          "20-25 Fully Edited Pictures",
          "35 Raw High-Res Pictures",
          "Two Creative Themes Studio Setups",
          "Indoor or Outdoor Session Options",
          "One Cinematic Video Highlight Reel"
        ]
      },
      {
        name: "High-End Bundle",
        price: "DHS 799",
        inclusions: [
          "30-35 Fully Edited Pictures",
          "25 Raw High-Res Pictures",
          "One Professional Cinematic Video",
          "One Styled Theme Setup"
        ]
      }
    ]
  },
  CakeSmash: {
    title: "First Birthday Cake Smash",
    tagline: "Celebrate milestones with fun themes, messy cakes, and pure joy",
    icon: "fas fa-birthday-cake",
    packages: [
      {
        name: "Package 1",
        price: "DHS 499",
        inclusions: [
          "Free Unlimited Raw Photos",
          "15 Fully Edited Photos",
          "One Highlight Social Reel",
          "1 Styled Backdrop Theme"
        ]
      },
      {
        name: "Package 2",
        price: "DHS 599",
        inclusions: [
          "Free Unlimited Raw Photos",
          "20 Fully Edited Photos",
          "One Highlight Social Reel",
          "Dedicated Family Portrait Pictures",
          "1 Styled Backdrop Theme"
        ]
      },
      {
        name: "Package 3",
        price: "DHS 999",
        inclusions: [
          "Free Unlimited Raw Photos",
          "30 Fully Edited Photos",
          "One Highlight Social Reel",
          "One Premium 10-Page Album Book",
          "Dedicated Family Portrait Pictures",
          "1 Styled Backdrop Theme"
        ]
      }
    ]
  },
  Couple: {
    title: "Couple & Engagement Stories",
    tagline: "Cinematic romance portfolios captured in stunning locations",
    icon: "fas fa-heart",
    packages: [
      {
        name: "Package 01",
        price: "AED 499",
        inclusions: [
          "Free Unlimited Raw Photos",
          "15-20 Fully Edited Photos",
          "1-2 Hours of Creative Session",
          "One Outdoor Location"
        ]
      },
      {
        name: "Package 02",
        price: "AED 799",
        inclusions: [
          "Free Unlimited Raw Photos",
          "15-20 Fully Edited Photos",
          "One Cinematic Romance Video",
          "One Outdoor Location"
        ]
      },
      {
        name: "Package 03",
        price: "AED 999",
        inclusions: [
          "Free Unlimited Raw Photos",
          "20-30 Fully Edited Photos",
          "One Cinematic Romance Video",
          "Two Outdoor Locations"
        ]
      }
    ]
  },
  Event: {
    title: "Event & Celebration Coverage",
    tagline: "Comprehensive visual records for grand events and family galas",
    icon: "fas fa-camera",
    packages: [
      {
        name: "Package 01",
        price: "AED 1299",
        inclusions: [
          "4-5 Hours Event Coverage",
          "Single Camera for Video & Photo Session",
          "Unlimited Raw Photos",
          "50 Custom Edited Photos",
          "One ~5 Min Edited Cinematic Highlight Video",
          "One 1 Min Cinematic Social Reel"
        ]
      },
      {
        name: "Package 02",
        price: "AED 1599",
        inclusions: [
          "4-5 Hours Event Coverage",
          "Two Cameras for Video & Photo Session",
          "100 Custom Edited Photos",
          "Unlimited Raw Photos",
          "10-15 Min Cinematic Highlight Video",
          "One 1 Min Cinematic Social Reel"
        ]
      },
      {
        name: "Package 03",
        price: "AED 1999",
        inclusions: [
          "4-5 Hours Event Coverage",
          "One Camera for Video & Photo Session",
          "Premium 15-20 Page Legacy Album",
          "Unlimited Raw Photos",
          "All Custom Edited Pictures",
          "10-15 Min Cinematic Highlight Video",
          "One 1 Min Cinematic Social Reel"
        ]
      }
    ]
  }
};

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState('Maternity');

  return (
    <>
      {/* Page Header */}
      <header className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="container animate-reveal active">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Curated Collections</span>
          <h1 className="section-title">Special Investment &amp; Offers</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '0.85rem' }}>
            Explore our transparent pricing tiers designed to capture your milestones with cinematic excellence and premium fine-art styling.
          </p>
        </div>
      </header>

      {/* Featured newborn offer */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
        <div className="container">
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
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.03)'
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
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1rem' }}>
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
              <Link 
                href="/contact?interest=newborn" 
                className="btn btn-gold" 
                style={{ width: '100%', textAlign: 'center', padding: '1rem' }}
              >
                Claim Offer Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs list */}
      <section className="section" style={{ padding: '0 0 8rem 0' }}>
        <div className="container">
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
              borderBottom: '1px solid rgba(158, 112, 96, 0.15)',
              paddingBottom: '2rem'
            }}
          >
            {Object.keys(categories).map((tabName) => {
              const active = activeTab === tabName;
              return (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  style={{
                    background: active ? 'var(--color-gold)' : 'transparent',
                    border: active ? '1px solid var(--color-gold)' : '1px solid rgba(158, 112, 96, 0.25)',
                    color: active ? 'var(--color-black)' : 'var(--color-text-muted)',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className={`${categories[tabName].icon} mr-2`} style={{ marginRight: '8px' }}></i>
                  {tabName === 'CakeSmash' ? 'Cake Smash' : tabName}
                </button>
              );
            })}
          </div>

          {/* Pricing cards wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                  {categories[activeTab].title}
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  {categories[activeTab].tagline}
                </p>
              </div>

              <div 
                className="services-grid" 
                style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  padding: 0
                }}
              >
                {categories[activeTab].packages.map((pkg, idx) => (
                  <div
                    key={pkg.name}
                    style={{
                      background: 'var(--color-shade-2)',
                      border: '1px solid rgba(158, 112, 96, 0.15)',
                      borderRadius: '8px',
                      padding: '3rem 2.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-white)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {pkg.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2.5rem' }}>
                        <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-white)' }}>
                          {pkg.price}
                        </span>
                      </div>
                      
                      <div style={{ width: '40px', height: '1px', background: 'var(--color-gold)', marginBottom: '2rem' }}></div>
                      
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {pkg.inclusions.map((inc) => (
                          <li key={inc} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                            <Check size={14} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href={`/contact?interest=${activeTab.toLowerCase()}&package=${pkg.name.toLowerCase().replace(/ /g, '-')}`}
                      className="btn btn-outline"
                      style={{ width: '100%', textAlign: 'center', padding: '0.9rem 0', fontSize: '0.7rem', letterSpacing: '2px', border: '1px solid var(--color-gold)' }}
                    >
                      Choose {pkg.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Catalog inquiry CTA */}
          <div 
            style={{ 
              marginTop: '6rem', 
              textAlign: 'center',
              borderTop: '1px solid rgba(158, 112, 96, 0.15)',
              paddingTop: '4rem'
            }}
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
              Have specific ideas or need a custom package? Get in touch with our creative director directly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="tel:+971526400679" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 3rem' }}>
                <Phone size={14} />
                Call +97152 640 0679
              </a>
              <Link href="/contact" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>
                Send Detailed Request
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
