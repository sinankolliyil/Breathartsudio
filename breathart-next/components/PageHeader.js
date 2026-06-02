export default function PageHeader({ subtitle, title, description, style }) {
  return (
    <header className="page-header" style={style}>
      <div className="container container-narrow animate-reveal">
        {subtitle && (
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>
            {subtitle}
          </span>
        )}
        <h1 style={{ color: 'var(--color-white)', fontSize: '4rem' }}>{title}</h1>
        {description && (
          <p style={{ marginTop: '1.5rem', opacity: 0.7, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
