export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <div
      className="feature-card animate-reveal"
      style={{
        padding: '3rem',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        background: 'rgba(0,0,0,0.02)',
        textAlign: 'center',
        borderRadius: '4px',
        transitionDelay: `${delay}s`,
      }}
    >
      <i className={icon} style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}></i>
      <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontSize: '1.4rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{description}</p>
    </div>
  );
}
