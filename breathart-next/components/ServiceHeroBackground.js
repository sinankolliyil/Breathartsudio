'use client';
import React, { useState, useEffect } from 'react';

const defaultImages = [
  '/assets/hero/photo.png',
  '/assets/hero/2_optimized.webp',
  '/assets/hero/3_optimized.webp',
  '/assets/hero/4_optimized.webp'
];

export default function ServiceHeroBackground() {
  const [images, setImages] = useState(defaultImages);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Shuffle images on client side after hydration
    const shuffled = [...defaultImages].sort(() => Math.random() - 0.5);
    setImages(shuffled);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // 6000ms to match the home page hero slider speed
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isMounted, images.length]);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      {images.map((img, index) => (
        <div 
          key={img}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%), url("${img}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out'
          }}
        />
      ))}
    </div>
  );
}
