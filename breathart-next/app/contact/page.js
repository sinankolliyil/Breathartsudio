'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [service, setService] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  useEffect(() => {
    const interestParam = searchParams.get('interest');
    const packageParam = searchParams.get('package');

    if (interestParam) {
      const lower = interestParam.toLowerCase();
      if (lower.includes('maternity') || lower.includes('newborn')) {
        setService('maternity');
      } else if (lower.includes('couple')) {
        setService('couple');
      } else if (lower.includes('event')) {
        setService('event');
      } else if (lower.includes('cake')) {
        setService('cakesmash');
      } else if (lower.includes('wedding')) {
        setService('wedding');
      } else if (lower.includes('corporate')) {
        setService('corporate');
      }
    }

    if (packageParam) {
      const cleanPkg = packageParam
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setSelectedPackage(cleanPkg);
    }
  }, [searchParams]);

  return (
    <form action="https://formspree.io/f/xvovlbkw" method="POST">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="form-group">
          <label className="contact-page-label">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="contact-page-input"
            placeholder="E.g., Alexander Wright"
            required
          />
        </div>
        <div className="form-group">
          <label className="contact-page-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="contact-page-input"
            placeholder="alexander@domain.com"
            required
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="form-group">
          <label className="contact-page-label">
            Contact Number
          </label>
          <input
            type="tel"
            name="phone"
            className="contact-page-input"
            placeholder="+971 -- --- ----"
            required
          />
        </div>
        <div className="form-group">
          <label className="contact-page-label">
            Collection
          </label>
          <select
            name="service"
            className="contact-page-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled style={{ background: '#2B1B14', color: '#8A766F' }}>Choose a session...</option>
            <option value="maternity" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Maternity &amp; Newborn</option>
            <option value="wedding" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Wedding Story</option>
            <option value="pre-wedding" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Pre-Wedding</option>
            <option value="couple" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Couple Session</option>
            <option value="corporate" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Corporate Branding</option>
            <option value="event" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Grand Events</option>
            <option value="cakesmash" style={{ background: '#2B1B14', color: '#FAF5F0' }}>Cake Smash</option>
          </select>
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '2rem' }}>
        <label className="contact-page-label">
          Selected Package
        </label>
        <input
          type="text"
          name="package"
          className="contact-page-input"
          placeholder="E.g., Basic Bundle / Package 01"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '3rem' }}>
        <label className="contact-page-label">
          Vision Details
        </label>
        <textarea
          name="message"
          className="contact-page-input"
          placeholder="Share details about your dream photoshoot, dates, or concepts..."
          required
          style={{
            minHeight: '120px',
            resize: 'none',
          }}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1rem 0', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.75rem' }}>
        Reserve Your Date
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <header className="page-header" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }}>
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
                      <p style={{ opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <a href="mailto:Info@breathart.ae" style={{ color: 'inherit' }}>Info@breathart.ae</a>
                        <a href="mailto:breathartindia@gmail.com" style={{ color: 'inherit' }}>breathartindia@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <i className="fab fa-whatsapp" style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginTop: '0.3rem' }}></i>
                    <div>
                      <h4 className="cinematic-title" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>WhatsApp & Call</h4>
                      <p style={{ opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <a href="https://wa.me/971526400679" style={{ color: 'inherit' }}>+971 52 640 0679</a>
                        <a href="https://wa.me/971522150837" style={{ color: 'inherit' }}>+971 52 215 0837</a>
                      </p>
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
            <div className="contact-page-dark-card animate-reveal" style={{ padding: '4rem' }}>
              <h3 className="cinematic-title" style={{ marginBottom: '0.5rem', color: 'var(--color-gold)' }}>Inquiry Form</h3>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '3rem', color: '#FAF5F0' }}>
                Initiate Your <span className="text-gold">Story</span>
              </h2>

              <Suspense fallback={<div style={{ color: 'var(--color-text-muted)' }}>Loading inquiry form...</div>}>
                <ContactFormContent />
              </Suspense>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
