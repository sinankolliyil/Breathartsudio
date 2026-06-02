'use client';

import Link from 'next/link';

export default function ServiceCard({ id, number, subtitle, title, image, alt, backTitle, description, details, ctaText, ctaHref, delay = 0 }) {
  const handleClick = (e) => {
    // Don't flip if they clicked the CTA link
    if (e.target.closest('a')) return;
    e.currentTarget.classList.toggle('flipped');
  };

  return (
    <div
      id={id}
      className="flip-card animate-reveal"
      onClick={handleClick}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={alt} />
          <div className="front-content">
            <span className="cinematic-title">{number}</span>
            <h2>{title}</h2>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-sub)', fontSize: '0.7rem', letterSpacing: '2px' }}>
              TOUCH TO REVEAL
            </p>
          </div>
        </div>
        <div className="flip-card-back">
          <h3>{backTitle}</h3>
          <p>{description}</p>
          <div className="details-list">
            {details.map((detail, i) => (
              <div key={i}>
                <i className={detail.icon}></i> {detail.text}
              </div>
            ))}
          </div>
          <Link href={ctaHref} className="btn btn-gold" style={{ padding: '1rem 2rem' }}>
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
