'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Send, ArrowRight, Play, Camera, Film, Palette, BarChart3 } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    id: '01',
    title: 'Maternity & Newborn',
    icon: <Camera size={24} />,
    desc: 'Capture life\'s fleeting moments with our premium maternity and newborn fine-art photography services.',
    image: '/assets/service_newborn.png',
    packages: ['Basic Bundle (DHS 499)', 'Advanced Bundle (DHS 599)', 'High-End Bundle (DHS 799)']
  },
  {
    id: '02',
    title: 'Couple Photography',
    icon: <Film size={24} />,
    desc: 'Cinematic storytelling that brings your romance to life. We specialize in high-end couple and engagement sessions.',
    image: '/assets/service_couple.png',
    packages: ['Package 01 (AED 499)', 'Package 02 (AED 799)', 'Package 03 (AED 999)']
  },
  {
    id: '03',
    title: 'Event Photography',
    icon: <Camera size={24} />,
    desc: 'Meticulous coverage for your grand events. Our signature style ensures a cohesive, luxurious aesthetic for your special day.',
    image: '/assets/service_event.png',
    packages: ['Package 01 (AED 1299)', 'Package 02 (AED 1599)', 'Package 03 (AED 1999)']
  },
  {
    id: '04',
    title: 'Cake Smash',
    icon: <Palette size={24} />,
    desc: 'Joyful, messy, and absolutely adorable. Celebrate your little one\'s first milestones with our premium cake smash sessions.',
    image: '/assets/bento_1.jpg',
    packages: ['Package 1 (DHS 499)', 'Package 2 (DHS 599)', 'Package 3 (DHS 999)']
  }
];

const PORTFOLIO = [
  { img: '/assets/hero_portrait.png', title: 'Luxury Portraits', span: 'col-span-1 row-span-1' },
  { img: '/assets/hero_event.png', title: 'Grand Events', span: 'col-span-2 row-span-1' },
  { img: '/assets/bento_1.jpg', title: 'Fine Art Newborn', span: 'col-span-1 row-span-2' },
  { img: '/assets/bento_3.jpg', title: 'Cinematic Weddings', span: 'col-span-1 row-span-1' },
  { img: '/assets/bento_4.jpg', title: 'Commercial Editorials', span: 'col-span-1 row-span-1' },
];

export default function LandingPage() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Maternity', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Maternity', message: '' });
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="noha-landing-wrapper">
      {/* HERO SECTION */}
      <section className="noha-hero">
        <div className="hero-bg-wrapper">
          <div className="hero-overlay"></div>
          {/* Using a premium background image */}
          <div className="hero-bg-img" style={{ backgroundImage: 'url(/assets/hero_nature.png)' }}></div>
        </div>
        
        <div className="noha-container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-kicker">Est. 2012 — Dubai</span>
            <h1 className="hero-title">Crafted for<br/>Cinematic Elegance</h1>
            <p className="hero-subtitle">
              We specialize in luxury photography and videography, capturing the essence of your most profound moments with an editorial eye.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="noha-btn-primary">
                Inquire Now <ArrowRight size={16} />
              </a>
              <a href="#portfolio" className="noha-btn-text">
                <Play size={16} /> View Showreel
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section id="about" className="noha-section noha-about">
        <div className="noha-container about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <span className="section-label">01 // Our Philosophy</span>
            <h2 className="section-heading">Visual poetry in every frame.</h2>
            <p className="section-body">
              At BreathArt Studio, we believe that true luxury lies in the details. Our approach blends timeless cinematic techniques with modern editorial aesthetics, creating visual narratives that transcend the ordinary. Every session is meticulously curated to reflect your unique story, ensuring a legacy of elegance for generations to come.
            </p>
          </motion.div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">12+</span>
              <span className="stat-desc">Years of Premium Expertise</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-desc">Luxurious Sessions Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5.0</span>
              <span className="stat-desc">Star Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SPLIT SECTION */}
      <section id="services" className="noha-section noha-services">
        <div className="noha-container">
          <div className="section-header-center">
            <span className="section-label">02 // Our Expertise</span>
            <h2 className="section-heading">Curated Services</h2>
          </div>

          <div className="services-split">
            {/* Left: Interactive List */}
            <div className="services-list">
              {SERVICES.map((srv) => (
                <div 
                  key={srv.id} 
                  className={`service-list-item ${activeService.id === srv.id ? 'active' : ''}`}
                  onClick={() => setActiveService(srv)}
                >
                  <span className="srv-id">{srv.id}</span>
                  <h3 className="srv-title">{srv.title}</h3>
                  <ArrowRight className="srv-arrow" />
                </div>
              ))}
            </div>

            {/* Right: Dynamic Detail Panel */}
            <div className="services-detail">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="detail-card"
                >
                  <div className="detail-img-wrapper">
                    <img src={activeService.image} alt={activeService.title} className="detail-img" />
                    <div className="detail-icon">{activeService.icon}</div>
                  </div>
                  <div className="detail-content">
                    <h4>{activeService.title}</h4>
                    <p>{activeService.desc}</p>
                    <ul className="package-list">
                      {activeService.packages.map((pkg, idx) => (
                        <li key={idx}><Check size={14} className="icon-gold" /> {pkg}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="noha-btn-outline">Request Pricing</a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section id="portfolio" className="noha-section noha-portfolio">
        <div className="noha-container">
          <div className="section-header-split">
            <div>
              <span className="section-label">03 // Selected Works</span>
              <h2 className="section-heading">A Glimpse of Elegance</h2>
            </div>
            <a href="/portfolio" className="noha-btn-text">View Full Gallery <ArrowRight size={16} /></a>
          </div>

          <div className="portfolio-bento-grid">
            {PORTFOLIO.map((item, idx) => (
              <motion.div 
                key={idx} 
                className={`portfolio-item ${item.span}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="portfolio-img-container">
                  <img src={item.img} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <span className="portfolio-title">{item.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING SPLIT SECTION */}
      <section id="contact" className="noha-section noha-contact">
        <div className="noha-container contact-split">
          
          <div className="contact-info">
            <span className="section-label">04 // Inquiries</span>
            <h2 className="section-heading">Let's craft your narrative.</h2>
            <p className="section-body">
              Whether you are planning an intimate milestone or a grand event, our team is ready to provide a tailored experience. Reach out to discuss availability and bespoke packages.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-detail">
                <Phone size={20} className="icon-gold" />
                <div>
                  <h5>Direct Concierge</h5>
                  <p>+971 52 640 0679</p>
                </div>
              </div>
              <div className="contact-detail">
                <Mail size={20} className="icon-gold" />
                <div>
                  <h5>Email Desk</h5>
                  <p>studio@breathart.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <MapPin size={20} className="icon-gold" />
                <div>
                  <h5>Studio Location</h5>
                  <p>Dubai Design District, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3>Secure Your Session</h3>
              <p className="form-subtitle">Fill in the details below. We typically respond within 2-4 hours.</p>

              {submitted ? (
                <div className="success-message animate-reveal active">
                  <Check size={32} className="icon-gold mx-auto mb-4" />
                  <h4>Inquiry Received</h4>
                  <p>Thank you for reaching out. A studio representative will contact you shortly to arrange your consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="noha-form">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="e.g. Jane Doe" />
                  </div>
                  
                  <div className="input-row">
                    <div className="input-group">
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="jane@example.com" />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+971 XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Area of Interest</label>
                    <select name="service" value={formData.service} onChange={handleInputChange}>
                      <option value="Maternity">Maternity & Newborn</option>
                      <option value="Couple">Couple Photography</option>
                      <option value="Event">Event Photography</option>
                      <option value="CakeSmash">Cake Smash</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Additional Details (Date, Venue, Specific Requests)</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Tell us more about your vision..."></textarea>
                  </div>

                  <button type="submit" className="noha-btn-primary full-width">
                    Submit Inquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
