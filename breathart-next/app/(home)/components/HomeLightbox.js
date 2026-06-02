'use client';

import { useCallback } from 'react';
import Lightbox from './Lightbox';

export default function HomeLightbox({ sectionId, items, gridCols }) {
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
