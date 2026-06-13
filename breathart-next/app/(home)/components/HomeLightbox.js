'use client';

import { useCallback, useRef, useState } from 'react';

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
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return;
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
    e.stopPropagation();
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      openLightbox(index);
      return;
    }
    if (dragMoved.current) {
      e.preventDefault();
      return;
    }
    // On desktop, only clicking the button opens it.
    if (typeof window !== 'undefined' && e.target.closest('.view-btn')) {
      openLightbox(index);
    }
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
                const categoryItems = items.filter(img => img.category === item.category);
                const firstIdx = items.findIndex(img => img.category === item.category);
                const relIndex = index - firstIdx;
                
                let spanNum = relIndex === 0 ? 1 : ((relIndex - 1) % 5) + 2;
                
                // Adjust the last item of the category to prevent empty slots in the grid columns
                if (relIndex === categoryItems.length - 1) {
                  if (categoryItems.length === 6) {
                    spanNum = 5; // Change from bento-span-6 to 1x1
                  } else if (categoryItems.length === 9) {
                    spanNum = 3; // Change from bento-span-4 to 1x1
                  }
                }
                
                const spanClass = `bento-span-${spanNum}`;
                return (
                  <div key={`${sectionId}-${index}`} className={`gallery-item show ${spanClass}`} style={{ display: 'block' }}>
                    <div 
                      className="gallery-frame" 
                      style={{ width: '100%', height: '100%', aspectRatio: 'auto', cursor: 'pointer' }}
                      onClick={(e) => handleItemClick(e, index)}
                    >
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        draggable="false" 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          objectPosition: 'center', 
                          userDrag: 'none', 
                          WebkitUserDrag: 'none' 
                        }} 
                      />
                      <div className="gallery-overlay">
                        <div className="overlay-content">
                          <h3>{item.title}</h3>
                          <button 
                            className="view-btn" 
                            onMouseDown={(e) => e.stopPropagation()}
                          >
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
      </>
    );
  }

  return (
    <>
      <div className="gallery-grid" style={gridCols ? { gridTemplateColumns: gridCols } : undefined}>
        {items.map((item, index) => (
          <div key={`${sectionId}-${index}`} className="gallery-item show" style={{ display: 'block' }}>
            <div className="gallery-frame" style={{ width: '100%', height: '100%' }}>
              <img 
                src={item.src} 
                alt={item.alt} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center' 
                }} 
              />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <button 
                    className="view-btn" 
                    onClick={() => openLightbox(index)}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    View Full
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

