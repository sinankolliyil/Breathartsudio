'use client';

import Link from 'next/link';

export default function ServiceCard({ id, number, title, image, alt, description, ctaHref, delay = 0, index }) {
  // Extract tag from number and title
  const tagWord = number.split('/')[1]?.trim().toUpperCase() || 'SERVICE';
  const tagTitle = title.toUpperCase();
  const fullTag = `${tagWord} • ${tagTitle}`;

  // Alternating background decor
  const showDecor = index === 0 || index === 3 || index === 4;

  return (
    <Link href={ctaHref} className="premium-service-card-link">
      <div
        id={id}
        className={`premium-service-card card-style-${index} animate-reveal`}
        style={{ transitionDelay: `${delay}s` }}
      >
        <div className="card-image-wrapper">
          {showDecor && <div className="card-bg-decor"></div>}
          <div className="card-image-box">
            <img src={image} alt={alt} loading="lazy" decoding="async" />
            <div className="card-arrow-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        </div>
        
        <div className="card-info-area">
          <p className="card-tag">{fullTag}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
}
