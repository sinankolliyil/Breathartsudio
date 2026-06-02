export default function GalleryItem({ image, alt, title, href, number, delay = 0, buttonText = 'View Full', onClick }) {
  const content = (
    <div className="gallery-frame" style={href ? { cursor: 'pointer' } : undefined} onClick={href ? undefined : undefined}>
      <img src={image} alt={alt} />
      <div className="gallery-overlay">
        <div className="overlay-content">
          {number && (
            <span className="cinematic-title" style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>
              {number}
            </span>
          )}
          <h3>{title}</h3>
          {href ? (
            <a href={href} className="view-btn">{buttonText}</a>
          ) : (
            <button className="view-btn" onClick={onClick}>{buttonText}</button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="gallery-item show animate-reveal"
      style={{ transitionDelay: `${delay}s`, display: 'block' }}
    >
      {href ? (
        <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
