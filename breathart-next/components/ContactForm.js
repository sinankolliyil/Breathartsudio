'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send } from 'lucide-react';

function ContactFormInner({ 
  initialService, 
  initialPackage, 
  initialMessage, 
  buttonText, 
  showPackageField = true,
  theme = "cinematic" // "cinematic" (home/contact form style) or "landing" (landing/offers form style)
}) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: theme === 'landing' ? 'Photography' : 'newborn',
    package: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Read from search params if present (for contact page)
    const interestParam = searchParams.get('interest');
    const packageParam = searchParams.get('package');
    const messageParam = searchParams.get('message');

    let updatedService = initialService || formData.service;
    let updatedPackage = initialPackage || formData.package;
    let updatedMessage = initialMessage || formData.message;

    if (interestParam) {
      const lower = interestParam.toLowerCase();
      if (theme === 'landing') {
        if (lower.includes('newborn') || lower.includes('maternity') || lower.includes('family') || lower.includes('photo')) {
          updatedService = 'Photography';
        } else if (lower.includes('video')) {
          updatedService = 'Videography';
        } else if (lower.includes('event')) {
          updatedService = 'Event';
        }
      } else {
        if (lower.includes('newborn') || lower.includes('maternity')) {
          updatedService = 'newborn';
        } else if (lower.includes('wedding')) {
          updatedService = 'wedding';
        } else if (lower.includes('pre-wedding') || lower.includes('prewedding')) {
          updatedService = 'pre-wedding';
        } else if (lower.includes('couple') || lower.includes('romance')) {
          updatedService = 'couple';
        } else if (lower.includes('corporate') || lower.includes('brand')) {
          updatedService = 'corporate';
        } else if (lower.includes('event')) {
          updatedService = 'event';
        } else if (lower.includes('cakesmash') || lower.includes('smash')) {
          updatedService = 'cakesmash';
        } else if (lower.includes('family')) {
          updatedService = 'family';
        } else if (lower.includes('realestate') || lower.includes('estate') || lower.includes('real')) {
          updatedService = 'realestate';
        }
      }
    }

    if (packageParam) {
      updatedPackage = packageParam
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    if (messageParam) {
      updatedMessage = decodeURIComponent(messageParam);
    }

    setFormData(prev => ({
      ...prev,
      service: updatedService,
      package: updatedPackage,
      message: updatedMessage
    }));
  }, [searchParams, initialService, initialPackage, initialMessage, theme]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from BreathArt Studio*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
${showPackageField && formData.package ? `*Package:* ${formData.package}\n` : ''}*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/971526400679?text=${encodedText}`, '_blank');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: theme === 'landing' ? 'Photography' : 'newborn',
      package: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    if (theme === 'landing') {
      return (
        <div className="noha-form text-center" style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'var(--color-shade-2)', borderRadius: '8px', border: '1px solid rgba(158, 112, 96, 0.15)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-white)', fontSize: '1.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Submitted</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Thank you! Your inquiry details have been opened in WhatsApp.
          </p>
          <button onClick={handleReset} className="noha-btn-primary" style={{ cursor: 'pointer', padding: '1rem 3rem', border: 'none' }}>
            Submit Again
          </button>
        </div>
      );
    }

    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid rgba(158, 112, 96, 0.2)', borderRadius: '0px', background: 'transparent' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-white)', fontSize: '2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Submitted</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          Your details have been prepared. Click below if you need to submit another request.
        </p>
        <button onClick={handleReset} className="btn btn-gold" style={{ cursor: 'pointer', padding: '1rem 3rem', border: 'none', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Submit Again
        </button>
      </div>
    );
  }

  // ── Theme A: Landing & Offers Form (Boxed fields, no card bg modifications) ──
  if (theme === 'landing') {
    return (
      <form onSubmit={handleSubmit} className="noha-form">
        <div className="input-group">
          <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-white)', fontWeight: '600' }}>
            Full Name
          </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
            placeholder="e.g. Jane Doe" 
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-white)', fontWeight: '600' }}>
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              placeholder="jane@example.com" 
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-white)', fontWeight: '600' }}>
              Phone Number
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              required 
              placeholder="+971 XX XXX XXXX" 
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-white)', fontWeight: '600' }}>
              Area of Interest
            </label>
            <select name="service" value={formData.service} onChange={handleInputChange} required>
              <option value="Photography">Photography</option>
              <option value="Videography">Videography</option>
              <option value="Event">Event</option>
            </select>
          </div>

          {showPackageField && (
            <div className="input-group">
              <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-white)', fontWeight: '600' }}>
                Selected Package
              </label>
              <input 
                type="text" 
                name="package" 
                value={formData.package} 
                onChange={handleInputChange} 
                placeholder="e.g. Newborn 50% Off Offer" 
              />
            </div>
          )}
        </div>

        <div className="input-group">
          <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-white)', fontWeight: '600' }}>
            Additional Details (Date, Venue, Specific Requests)
          </label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            rows={4} 
            placeholder="Tell us more about your vision..."
            required
          ></textarea>
        </div>

        <button type="submit" className="noha-btn-primary full-width" style={{ cursor: 'pointer' }}>
          {buttonText || "Submit Inquiry"} <Send size={16} />
        </button>
      </form>
    );
  }

  // ── Theme B: Home & Contact Form (Underline input fields, cinematic-title labels) ──
  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(158, 112, 96, 0.3)',
    color: 'var(--color-white)',
    padding: '0.8rem 0',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
  };

  const labelStyle = {
    fontSize: '0.65rem',
    display: 'block',
    marginTop: '1.8rem',
    marginBottom: '0.5rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--color-gold)'
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-row">
        <div className="form-group">
          <label className="cinematic-title" style={labelStyle}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="E.g., Alexander Wright"
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group">
          <label className="cinematic-title" style={labelStyle}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="alexander@domain.com"
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div className="input-row">
        <div className="form-group">
          <label className="cinematic-title" style={labelStyle}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+971 -- --- ----"
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group">
          <label className="cinematic-title" style={labelStyle}>
            Select 
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            style={{
              ...inputStyle,
              cursor: 'pointer',
            }}
          >
            <option value="" disabled style={{ background: 'var(--color-shade-2)', color: 'var(--color-text-muted)' }}>Choose a session...</option>
            <option value="newborn" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Newborn Photography</option>
            <option value="wedding" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Wedding Stories</option>
            <option value="pre-wedding" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Pre-Wedding</option>
            <option value="couple" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Couple Session</option>
            <option value="corporate" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Corporate Branding</option>
            <option value="event" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Event Photography</option>
            <option value="cakesmash" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Cake Smash</option>
            <option value="family" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Family Session</option>
            <option value="realestate" style={{ background: 'var(--color-shade-2)', color: 'var(--color-white)' }}>Real Estate Showcase</option>
          </select>
        </div>
      </div>

      {showPackageField && (
        <div className="form-group" style={{ marginBottom: '2rem' }}>
          <label className="cinematic-title" style={labelStyle}>
            Selected Package
          </label>
          <input
            type="text"
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            placeholder="E.g., Basic Bundle / Package 01"
            style={inputStyle}
          />
        </div>
      )}

      <div className="form-group" style={{ marginBottom: '3rem' }}>
        <label className="cinematic-title" style={labelStyle}>
          Vision Details
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Share details about your dream photoshoot, dates, or concepts..."
          required
          style={{
            ...inputStyle,
            minHeight: '100px',
            resize: 'none',
          }}
        ></textarea>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button type="submit" className="btn btn-gold" style={{ padding: '1rem 4rem', letterSpacing: '4px', fontSize: '0.75rem', textTransform: 'uppercase', width: '100%', cursor: 'pointer', border: 'none' }}>
          {buttonText || "Reserve Your Date"}
        </button>
      </div>
    </form>
  );
}

export default function ContactForm(props) {
  return (
    <Suspense fallback={<div style={{ color: 'var(--color-text-muted)' }}>Loading contact form...</div>}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
