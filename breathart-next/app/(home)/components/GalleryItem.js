import React from 'react';

const defaultSubtitles = {
  'Event': 'HIGH-END CELEBRATIONS | VIBRANT SOCIAL GATHERINGS',
  'Family': 'WARM OUTDOOR & INDOOR | GEN-LINKS & PORTRAITS',
  'Corporate': 'EXECUTIVE BRANDING | PROFILE STORYTELLING',
  'Real Estate': 'CINEMATIC ARCHITECTURE | TWILIGHT DESIGN',
};

export default function GalleryItem({ image, alt, title, href, number, delay = 0, buttonText = 'View Full', onClick, subtitle }) {
  const displaySubtitle = subtitle || defaultSubtitles[title] || 'PROFESSIONAL PHOTOGRAPHY & DESIGN';

  const frameContent = (
    <div className="gallery-frame">
      <img src={image} alt={alt} />
      <div className="gallery-overlay">
        <div className="overlay-content">
          <span className="view-btn">{buttonText}</span>
        </div>
      </div>
    </div>
  );

  const detailsContent = (
    <div className="gallery-details">
      <div className="gallery-details-header">
        <h3 className="gallery-details-title">
          {number && <span className="gallery-details-num">{number}. </span>}
          {title}
        </h3>
        <span className="gallery-details-arrow">↗</span>
      </div>
      <div className="gallery-details-sub">{displaySubtitle}</div>
    </div>
  );

  return (
    <div
      className="gallery-item show animate-reveal"
      style={{ transitionDelay: `${delay}s`, display: 'block' }}
    >
      {href ? (
        <a href={href} className="gallery-item-link">
          {frameContent}
          {detailsContent}
        </a>
      ) : (
        <div className="gallery-item-click" onClick={onClick}>
          {frameContent}
          {detailsContent}
        </div>
      )}
    </div>
  );
}
