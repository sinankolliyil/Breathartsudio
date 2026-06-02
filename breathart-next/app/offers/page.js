import BrochureCard from './components/BrochureCard';

export const metadata = {
  title: 'Special Offers | BreathArt Studio',
  description: 'Exclusive photography deals and curated investment packages for a limited time.',
};

export default function OffersPage() {
  return (
    <>
      <header className="page-header">
        <div className="container animate-reveal active">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Exclusive Deals</span>
          <h1 className="section-title">Special Offers</h1>
          <p style={{ color: 'var(--color-gold)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.7rem' }}>
            Curated investment packages for a limited time
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="brochure-grid">
            <BrochureCard
              icon="fas fa-gem"
              title="Wedding Portfolio Special"
              description="Book your 2026 Wedding romance portfolio this month and receive a complimentary **Pre-Wedding / Couple Session** worth $500."
              promoCode="ETERNAL26"
              ctaText="Claim Wedding Special"
              ctaHref="/contact"
            />
            <BrochureCard
              icon="fas fa-magic"
              title="Maternity &amp; Newborn Combo"
              description="Cherish the complete story. Book your Maternity Fine-Art session along with Newborn &amp; Smash and receive 15% off the total investment."
              promoCode="WELCOMEBABY"
              ctaText="Inquire Combo"
              ctaHref="/contact"
              delay={0.1}
            />
            <BrochureCard
              icon="fas fa-birthday-cake"
              title="Newborn Welcome Album"
              description="Every first Newborn &amp; Cake Smash session booking now includes a complimentary **10-page Linen Mini-Album** to preserve the early moments."
              promoCode="NEWBORNLOVE"
              ctaText="Book Baby Session"
              ctaHref="/contact"
              delay={0.2}
            />
          </div>
        </div>
      </section>
    </>
  );
}
