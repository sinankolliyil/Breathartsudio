import Link from 'next/link';

export default function BrochureCard({ icon, title, description, promoCode, ctaText, ctaHref, delay = 0 }) {
  return (
    <div className="brochure-card animate-reveal active" style={{ transitionDelay: `${delay}s` }}>
      <i className={icon}></i>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1rem' }}>{title}</h3>
      <p>{description}</p>
      <div style={{ margin: '2rem 0', fontSize: '0.7rem', color: 'var(--color-gold)', letterSpacing: '2px' }}>
        PROMO CODE: {promoCode}
      </div>
      <Link href={ctaHref} className="btn btn-gold">{ctaText}</Link>
    </div>
  );
}
