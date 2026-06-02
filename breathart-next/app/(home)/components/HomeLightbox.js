'use client';

import { useCallback, useRef, useState } from 'react';
import Lightbox from './Lightbox';

export default function HomeLightbox({ sectionId, items, gridCols, layout }) {
  const openLightbox = useCallback((index) => {
    const event = new CustomEvent('lightbox-open', {
      detail: {
        galleryItems: items.map((item) => ({
          src: item.src,
          title: item.title,
        })),
        startIndex: index,
      },
    });
    window.dispatchEvent(event);
  }, [items]);

  // Drag and scroll states
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragMoved = useRef(false);

  const handleMouseDown = (e) => {
    if (layout !== 'bento') return;
    setIsDragging(true);
    dragMoved.current = false;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || layout !== 'bento') return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      dragMoved.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleItemClick = (e, index) => {
    if (dragMoved.current) {
      e.preventDefault();
      return;
    }
    openLightbox(index);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (layout === 'bento') {
    return (
      <>
        <div className="bento-gallery-wrapper">
          <button className="swipe-btn left" onClick={() => scroll('left')} aria-label="Swipe Left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="swipe-btn right" onClick={() => scroll('right')} aria-label="Swipe Right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="bento-scroll-container"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
          >
            <div className="bento-grid-horizontal">
              {items.map((item, index) => {
                const spanClass = `bento-span-${(index % 6) + 1}`;
                return (
                  <div key={`${sectionId}-${index}`} className={`gallery-item show ${spanClass}`} style={{ display: 'block' }}>
                    <div className="gallery-frame" style={{ height: '100%', aspectRatio: 'auto' }}>
                      <img src={item.src} alt={item.alt} draggable="false" style={{ userDrag: 'none', WebkitUserDrag: 'none' }} />
                      <div className="gallery-overlay">
                        <div className="overlay-content">
                          <h3>{item.title}</h3>
                          <button className="view-btn" onClick={(e) => handleItemClick(e, index)}>
                            View Full
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Only render lightbox once for the page */}
        {sectionId === 'newborn' && <Lightbox />}
      </>
    );
  }

  return (
    <>
      <div className="gallery-grid" style={gridCols ? { gridTemplateColumns: gridCols } : undefined}>
        {items.map((item, index) => (
          <div key={`${sectionId}-${index}`} className="gallery-item show" style={{ display: 'block' }}>
            <div className="gallery-frame">
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <button className="view-btn" onClick={() => openLightbox(index)}>
                    View Full
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Only render lightbox once for the page - handled in layout or first section */}
      {sectionId === 'newborn' && <Lightbox />}
    </>
  );
}

