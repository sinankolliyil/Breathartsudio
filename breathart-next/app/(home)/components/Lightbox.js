'use client';

import { useEffect, useCallback, useState } from 'react';

export default function Lightbox() {
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

  // Listen for custom lightbox open events
  useEffect(() => {
    const handleOpen = (e) => {
      const { galleryItems, startIndex } = e.detail;
      setItems(galleryItems);
      setCurrentIndex(startIndex);
      setActive(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('lightbox-open', handleOpen);
    return () => window.removeEventListener('lightbox-open', handleOpen);
  }, []);

  const close = useCallback(() => {
    setActive(false);
    document.body.style.overflow = 'auto';
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!active) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [active, prev, next, close]);

  const currentItem = items[currentIndex];

  return (
    <div
      className={`lightbox ${active ? 'active' : ''}`}
      id="lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.classList.contains('lightbox-content')) {
          close();
        }
      }}
    >
      <span className="close-lightbox" onClick={close}>&times;</span>
      <button className="lb-prev" onClick={prev} aria-label="Previous image">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="lightbox-content">
        {currentItem && (
          <>
            <img src={currentItem.src} alt={currentItem.title || 'Enlarged view'} id="lightbox-img" />
            <p id="lightbox-caption">
              {currentItem.title}
            </p>
          </>
        )}
      </div>
      <button className="lb-next" onClick={next} aria-label="Next image">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
