export const metadata = {
  title: 'Contact Us | BreathArt Photography Studio',
  description: 'Connect with BreathArt Studio for premium photography sessions in Dubai.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <header className="page-header" style={{ height: '45vh', background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }}>
        <div className="container animate-reveal" style={{ textAlign: 'center' }}>
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Connect With Us</span>
          <h1 style={{ fontSize: '5rem', lineHeight: 1, color: 'var(--color-white)', marginTop: '1rem' }}>
            Let&apos;s Capture <span className="text-gold">Art.</span>
          </h1>
          <p style={{ marginTop: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', opacity: 0.7 }}>
            Reserve your date for a premium visual experience. We specialize in cinematic storytelling for life&apos;s most precious moments.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '6rem' }}>

            {/* Left Column: Info & Map */}
            <div className="animate-reveal">
              <div style={{ marginBottom: '4rem' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Our Studio</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginTop: '0.3rem' }}></i>
                    <div>
                      <h4 className="cinematic-title" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>Location</h4>
                      <p style={{ opacity: 0.8 }}>BreathArt Photography Studio<br />Dubai, United Arab Emirates</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <i className="fas fa-envelope" style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginTop: '0.3rem' }}></i>
                    <div>
                      <h4 className="cinematic-title" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>Electronic Mail</h4>
                      <p style={{ opacity: 0.8 }}><a href="mailto:hello@breathart.studio" style={{ color: 'inherit' }}>hello@breathart.studio</a></p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <i className="fab fa-whatsapp" style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginTop: '0.3rem' }}></i>
                    <div>
                      <h4 className="cinematic-title" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>WhatsApp Express</h4>
                      <p style={{ opacity: 0.8 }}><a href="https://wa.me/971000000000" style={{ color: 'inherit' }}>+971 00 000 0000</a></p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map */}
              <div
                className="map-container"
                style={{
                  width: '100%',
                  height: '350px',
                  border: '1px solid rgba(197, 160, 33, 0.2)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14441.258752243542!2d55.27078280000001!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1713192000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Form */}
            <div
              className="animate-reveal"
              style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '4rem',
                border: '1px solid rgba(197, 160, 33, 0.1)',
                borderRadius: '8px',
              }}
            >
              <h3 className="cinematic-title" style={{ marginBottom: '1rem', color: 'var(--color-gold)' }}>Inquiry Form</h3>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '3rem' }}>
                Initiate Your <span className="text-gold">Story</span>
              </h2>

              <form action="https://formspree.io/f/xvovlbkw" method="POST">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                  <div className="form-group">
                    <label className="cinematic-title" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '0.8rem' }}>
                      Subject Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(197, 160, 33, 0.3)',
                        color: 'var(--color-white)',
                        padding: '1rem 0',
                        fontFamily: 'var(--font-body)',
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="cinematic-title" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '0.8rem' }}>
                      Electronic Mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email@address.com"
                      required
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(197, 160, 33, 0.3)',
                        color: 'var(--color-white)',
                        padding: '1rem 0',
                        fontFamily: 'var(--font-body)',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                  <div className="form-group">
                    <label className="cinematic-title" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '0.8rem' }}>
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="+971 -- --- ----"
                      required
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(197, 160, 33, 0.3)',
                        color: 'var(--color-white)',
                        padding: '1rem 0',
                        fontFamily: 'var(--font-body)',
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="cinematic-title" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '0.8rem' }}>
                      Collection
                    </label>
                    <select
                      name="service"
                      className="form-control"
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(197, 160, 33, 0.3)',
                        color: 'var(--color-white)',
                        padding: '1rem 0',
                        fontFamily: 'var(--font-body)',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="newborn" style={{ background: '#1a1a1a' }}>Newborn Photography</option>
                      <option value="wedding" style={{ background: '#1a1a1a' }}>Wedding Story</option>
                      <option value="pre-wedding" style={{ background: '#1a1a1a' }}>Pre-Wedding</option>
                      <option value="couple" style={{ background: '#1a1a1a' }}>Couple Session</option>
                      <option value="corporate" style={{ background: '#1a1a1a' }}>Corporate Branding</option>
                      <option value="event" style={{ background: '#1a1a1a' }}>Grand Events</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '3rem' }}>
                  <label className="cinematic-title" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '0.8rem' }}>
                    Vision Details
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Tell us about your dream photoshoot..."
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(197, 160, 33, 0.3)',
                      color: 'var(--color-white)',
                      padding: '1rem 0',
                      minHeight: '120px',
                      fontFamily: 'var(--font-body)',
                      resize: 'none',
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', letterSpacing: '5px' }}>
                  Reserve Your Date
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
