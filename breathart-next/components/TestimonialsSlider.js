'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const defaultReviews = [
  {
    id: 1,
    text: "Breathart Studio captured every moment of our wedding so beautifully. We couldn't have asked for a better experience!",
    author: "Anjali & Rohit",
    rating: 5,
    location: "Dubai Dunes & Resort",
    image: "/assets/gallery/family/bk-279-suhad.webp"
  },
  {
    id: 2,
    text: "Professional, creative and so passionate - they truly have a talent for turning moments into memories.",
    author: "Megha & Arjun",
    rating: 5,
    location: "Downtown Palace Hotel",
    image: "/assets/gallery/family/nb-360-kat.webp"
  },
  {
    id: 3,
    text: "The photos are simply magical. They made us so comfortable and the results are timeless.",
    author: "Sneha & Karan",
    rating: 5,
    location: "Jumeirah Beach Club",
    image: "/assets/gallery/family/bk-102-taise.webp"
  },
  {
    id: 4,
    text: "The most beautiful experience! They handled our 7-day-old baby with such care and patience. The pictures turned out absolutely stunning!",
    author: "Sarah & Khalid",
    rating: 5,
    location: "Dubai Marina Studio",
    image: "/assets/gallery/family/IMG_9770.webp"
  },
  {
    id: 5,
    text: "As a first-time mother, I was very nervous about my maternity shoot. The team at BreathArt made me feel so comfortable and beautiful.",
    author: "Priya & Milan",
    rating: 5,
    location: "Al Qudra Lakes",
    image: "/assets/gallery/family/IMG_9773.webp"
  }
];

export default function TestimonialsSlider({ 
  reviews = defaultReviews, 
  title = "Testimonials", 
  subtitle = "What Our Couples Say", 
  theme = "light" 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = reviews.length;
  const maxIndex = Math.max(0, totalReviews - visibleCards);

  // Ensure currentIndex is within bounds if visibleCards changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Swipe support for mobile
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const diff = touchStart.current - touchEnd.current;
    const minSwipe = 50;

    if (diff > minSwipe) {
      handleNext();
    } else if (diff < -minSwipe) {
      handlePrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  // Theme styling definitions
  const isLight = theme === 'light';
  
  const bgStyle = isLight 
    ? 'linear-gradient(to bottom, #FAF6F2 0%, #FAF6F2 100%)' 
    : 'var(--color-shade-2)';

  const cardBg = isLight 
    ? '#FAF5F0' 
    : 'rgba(158, 112, 96, 0.08)';

  const cardBorder = isLight 
    ? '1px solid rgba(158, 112, 96, 0.12)' 
    : '1px solid rgba(158, 112, 96, 0.15)';

  const textColor = isLight 
    ? '#3C2B24' 
    : 'var(--color-white)';

  const quoteColor = isLight 
    ? 'rgba(158, 112, 96, 0.35)' 
    : 'rgba(158, 112, 96, 0.5)';

  const titleColor = isLight 
    ? 'var(--color-gold)' 
    : 'var(--color-gold)';

  const headingColor = isLight 
    ? '#2B1B14' 
    : 'var(--color-white)';

  const locationColor = isLight
    ? '#8A7A72'
    : 'var(--color-text-muted)';

  return (
    <section 
      className="testimonials-slider-section" 
      style={{ 
        background: bgStyle, 
        paddingTop: '7rem', 
        paddingBottom: '7rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-reveal active">
          <span 
            className="cinematic-title" 
            style={{ 
              color: titleColor, 
              display: 'block', 
              marginBottom: '0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '3px',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </span>
          <h2 
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: headingColor,
              textTransform: 'none',
              letterSpacing: '0.5px',
              marginBottom: '1rem',
              fontWeight: '400'
            }}
          >
            {subtitle}
          </h2>
          
          {/* Elegant Ornament Divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.5rem auto 0 auto' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', opacity: 0.8 }}>❖</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          style={{ position: 'relative', padding: '0 3.5rem' }} 
          className="slider-outer-wrapper"
        >
          {/* Arrow Buttons */}
          <button 
            onClick={handlePrev}
            aria-label="Previous review"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: isLight ? '1px solid rgba(158, 112, 96, 0.2)' : '1px solid rgba(158, 112, 96, 0.3)',
              background: isLight ? '#fff' : 'rgba(43, 27, 20, 0.4)',
              color: isLight ? '#2B1B14' : 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s ease',
              boxShadow: isLight ? '0 4px 12px rgba(43, 27, 20, 0.05)' : 'none'
            }}
            className="slider-arrow-btn"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={handleNext}
            aria-label="Next review"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: isLight ? '1px solid rgba(158, 112, 96, 0.2)' : '1px solid rgba(158, 112, 96, 0.3)',
              background: isLight ? '#fff' : 'rgba(43, 27, 20, 0.4)',
              color: isLight ? '#2B1B14' : 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s ease',
              boxShadow: isLight ? '0 4px 12px rgba(43, 27, 20, 0.05)' : 'none'
            }}
            className="slider-arrow-btn"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Track Window */}
          <div 
            style={{ overflow: 'hidden', padding: '1rem 0' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              style={{
                display: 'flex',
                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(totalReviews / visibleCards) * 100}%`
              }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  style={{ 
                    width: `${100 / totalReviews}%`, 
                    padding: '0 0.85rem',
                    boxSizing: 'border-box'
                  }}
                >
                  <div 
                    style={{
                      background: cardBg,
                      border: cardBorder,
                      borderRadius: '8px',
                      padding: '3rem 2.2rem 2.5rem 2.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%',
                      minHeight: '340px',
                      justifyContent: 'space-between',
                      boxShadow: isLight ? '0 10px 30px rgba(43, 27, 20, 0.02)' : 'none',
                      transition: 'transform 0.3s ease',
                      position: 'relative'
                    }}
                    className="testimonial-card-item"
                  >
                    {/* Double Quote Mark */}
                    <div 
                      style={{ 
                        fontFamily: 'Georgia, serif',
                        fontSize: '3.8rem',
                        lineHeight: 1,
                        color: quoteColor,
                        position: 'absolute',
                        top: '1.2rem',
                        userSelect: 'none'
                      }}
                    >
                      “
                    </div>

                    {/* Review text */}
                    <p 
                      style={{ 
                        fontSize: '0.92rem', 
                        lineHeight: '1.8', 
                        color: textColor,
                        marginTop: '1.8rem',
                        marginBottom: '1.8rem',
                        fontStyle: 'normal',
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {review.text}
                    </p>

                    {/* Author Profile */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      {review.image ? (
                        <div 
                          style={{ 
                            width: '56px', 
                            height: '56px', 
                            position: 'relative',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid var(--color-gold)',
                            marginBottom: '0.8rem'
                          }}
                        >
                          <Image 
                            src={review.image} 
                            alt={review.author} 
                            fill
                            sizes="56px"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      ) : (
                        <div 
                          style={{ 
                            width: '56px', 
                            height: '56px', 
                            borderRadius: '50%',
                            background: 'rgba(158, 112, 96, 0.15)',
                            color: 'var(--color-gold)',
                            border: '2px solid var(--color-gold)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '600',
                            fontSize: '1rem',
                            marginBottom: '0.8rem'
                          }}
                        >
                          {review.author ? review.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U'}
                        </div>
                      )}
                      
                      <h4 
                        style={{ 
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.1rem',
                          color: headingColor,
                          margin: 0,
                          fontWeight: '500'
                        }}
                      >
                        {review.author}
                      </h4>
                      
                      {review.location && (
                        <span 
                          style={{ 
                            fontSize: '0.7rem', 
                            color: locationColor,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginTop: '0.2rem',
                            display: 'block'
                          }}
                        >
                          {review.location}
                        </span>
                      )}

                      {/* Stars */}
                      <div style={{ display: 'flex', gap: '3px', marginTop: '0.75rem' }}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={13} 
                            fill="var(--color-gold)" 
                            color="var(--color-gold)" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        {maxIndex > 0 && (
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginTop: '2.5rem' }}>
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: currentIndex === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentIndex === idx ? 'var(--color-gold)' : isLight ? 'rgba(158, 112, 96, 0.25)' : 'rgba(158, 112, 96, 0.3)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                aria-label={`Go to slide group ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Global CSS to add subtle hover lifting and responsiveness */}
      <style dangerouslySetInnerHTML={{__html: `
        .slider-outer-wrapper {
          padding: 0 3.5rem;
        }
        .testimonial-card-item:hover {
          transform: translateY(-5px);
        }
        .slider-arrow-btn:hover {
          background: var(--color-gold) !important;
          color: #fff !important;
          border-color: var(--color-gold) !important;
        }
        @media (max-width: 768px) {
          .slider-outer-wrapper {
            padding: 0 0rem !important;
          }
          .slider-arrow-btn {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
