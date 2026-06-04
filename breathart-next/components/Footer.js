import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div className="footer-col brand-col">
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img src="/assets/logo/BreathArt Photography Logo.png" alt="BreathArt Photography Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p className="footer-desc">
              Dubai&apos;s luxury photography studio specializing in cinematic visual legacies. We turn fleeting moments into timeless fine-art treasures.
            </p>
            <div className="payment-acceptance">
              <span>We accept</span>
              <img src="/assets/logo/tamara-logo.webp" alt="Tamara Logo" className="payment-logo" />
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services#service-newborn">Newborn Portraiture</Link>
              </li>
              <li>
                <Link href="/services#service-wedding">Wedding Stories</Link>
              </li>
              <li>
                <Link href="/services#service-corporate">Corporate Branding</Link>
              </li>
              <li>
                <Link href="/services#service-event">Event Photography</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio */}
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li>
                <Link href="/about">Our Philosophy</Link>
              </li>
              <li>
                <Link href="/offers">Special Catalogs</Link>
              </li>
              <li>
                <Link href="/contact">Book Session</Link>
              </li>
              <li>
                <Link href="/contact">Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="footer-col contact-col">
            <h4>Initiate Story</h4>

            <div className="footer-contact-item" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <i className="fas fa-envelope" style={{ marginTop: '0.2rem', flexShrink: 0 }}></i>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <a href="mailto:Info@breathart.ae">Info@breathart.ae</a>
                <a href="mailto:breathartindia@gmail.com">breathartindia@gmail.com</a>
              </div>
            </div>

            <div className="footer-contact-item" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <i className="fas fa-phone" style={{ marginTop: '0.2rem', flexShrink: 0 }}></i>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <a href="tel:+971526400679">+971 52 640 0679</a>
                <a href="tel:+971522150837">+971 52 215 0837</a>
              </div>
            </div>
            <div className="footer-social-links">
              <a href="https://wa.me/971526400679" target="_blank" rel="noopener noreferrer" className="whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-group-companies">
          <div className="group-company-wrapper">
            <span className="group-label">BreathArt Group:</span>
            <div className="group-logos">
              <img src="/assets/logo/institute_logo.png" alt="BreathArt Academy Logo" className="group-logo institute-logo" />
              <img src="/assets/logo/marketing_logo.webp" alt="BreathArt Marketing Logo" className="group-logo marketing-logo" />
              <img src="/assets/logo/photography-logo.webp" alt="BreathArt Photography Logo" className="group-logo" />
            </div>
          </div>
          <Link href="/landing" className="btn-group-landing">View Studio Landing Page</Link>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BreathArt Creative Studio. Crafted for Cinematic Elegance.</p>
        </div>
      </div>
    </footer>
  );
}
