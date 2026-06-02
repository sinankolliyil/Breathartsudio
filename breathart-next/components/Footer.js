import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h2 className="logo" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'left' }}>
              BreathArt
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Dubai&apos;s premium photography studio specializing in capturing cinematic stories that last a lifetime.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="dropdown">
                <Link href="/services" className="dropdown-trigger">
                  Services <i className="fas fa-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/services#service-wedding">Photography</Link>
                  </li>
                  <li>
                    <Link href="/services#service-corporate">Videography</Link>
                  </li>
                  <li>
                    <Link href="/services#service-event">Event Management</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/offers">Offers</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <i className="fas fa-envelope" style={{ color: 'var(--color-gold)', marginRight: '10px' }}></i>
              <a href="mailto:hello@breathart.com">hello@breathart.com</a>
            </p>
            <div className="social-links">
              <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 BreathArt Creative Vision Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
