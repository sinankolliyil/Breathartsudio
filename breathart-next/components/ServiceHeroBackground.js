'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const defaultImages = [
  '/assets/hero/photo.png',
  '/assets/hero/2_optimized.webp',
  '/assets/hero/3_optimized.webp',
  '/assets/hero/4_optimized.webp'
];

export default function ServiceHeroBackground() {
  const [images, setImages] = useState(defaultImages);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Shuffle images on client side after hydration
    const shuffled = [...defaultImages].sort(() => Math.random() - 0.5);
    setImages(shuffled);
    
    // allow a short time for the DOM to update with transition: none,
    // then enable transitions for subsequent slider intervals
    const initialTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // 6000ms to match the home page hero slider speed
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      {images.map((img, index) => (
        <div 
          key={img}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: isInitialLoad ? 'none' : 'opacity 1.5s ease-in-out'
          }}
        >
          <Image
            src={img}
            alt="Hero Background"
            fill
            sizes="100vw"
            quality={60}
            priority={index === 0}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)'
          }} />
        </div>
      ))}
    </div>
  );
}
