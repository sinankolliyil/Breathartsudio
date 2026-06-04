'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EventsByBreathArtPage() {
  return (
    <>
      {/* Page Title & Intro Section (No Hero Banner) */}
      <section className="section" style={{ paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="project-header" style={{ width: '100%', marginBottom: '3rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)', letterSpacing: '4px', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>
              Corporate &amp; Public Experiences
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'normal',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.1',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--color-white)',
              margin: '0 0 2rem 0'
            }}>
              Events By BreathArt
            </h1>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div style={{ maxWidth: '512px' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--color-white)',
                fontWeight: '600',
                marginBottom: '2rem'
              }}>
                BreathArt is a leading company in the UAE, creating unforgettable experiences through innovative planning and flawless execution.
              </p>
            </div>
            
            <div style={{ maxWidth: '512px' }}>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem'
              }}>
                We redefine events, transforming them from mere gatherings into extraordinary, immersive experiences. In collaboration with corporate partners, luxury brands, and government departments across the region, we plan and execute productions that captivate, elevate brand value, and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Text Scroller */}
      <div style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        background: 'var(--color-shade-2)',
        padding: '1.5rem 0',
        borderTop: '1px solid rgba(158, 112, 96, 0.15)',
        borderBottom: '1px solid rgba(158, 112, 96, 0.15)',
        margin: '2rem 0 4rem 0',
        display: 'flex'
      }}>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 25s linear infinite',
          fontSize: '1rem',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--color-gold)',
          fontWeight: '600'
        }}>
          Stage Shows &bull; Outdoor Events &bull; Celebrity Collaborations &bull; Corporate Events &bull; Brand Activations &bull; Entertainment Programs &bull; Partner With Us &bull; Flawless Execution &bull;&nbsp;
        </div>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 25s linear infinite',
          fontSize: '1rem',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--color-gold)',
          fontWeight: '600'
        }}>
          Stage Shows &bull; Outdoor Events &bull; Celebrity Collaborations &bull; Corporate Events &bull; Brand Activations &bull; Entertainment Programs &bull; Partner With Us &bull; Flawless Execution &bull;&nbsp;
        </div>
      </div>

      {/* Asymmetric Core Services Grid */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '4px', display: 'block', marginBottom: '0.5rem' }}>
              Production Scope
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              color: 'var(--color-white)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: '600'
            }}>
              Our Event Capabilities
            </h2>
            <div className="accent-divider" style={{ margin: '1.5rem 0 0 0', width: '60px' }}></div>
          </div>

          {/* First Alternating Block */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '600px',
                height: '420px',
                position: 'relative',
                border: '1px solid rgba(158, 112, 96, 0.15)',
                boxShadow: '15px 15px 0px rgba(158, 112, 96, 0.1)'
              }}>
                <img 
                  src="/assets/service_event_main.png" 
                  alt="Stage Shows Production" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  Stage Shows
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Grand set designs, high-end acoustics, lighting production, and theatrical stage management. We construct layouts that transform stages into immersive narrative spaces.
                </p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  Outdoor Events
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Flawless execution of large-scale open-air events, concerts, and public festivals across the UAE, managing everything from crowd safety to outdoor audio systems.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  Celebrity Collaborations
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Managing high-profile talent, VIP guest lists, and premium entertainment programs. We bridge the gap between global stars and regional audiences with absolute professionalism.
                </p>
              </div>
            </div>
          </div>

          {/* Second Alternating Block */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginTop: '8rem'
          }}>
            <div style={{ order: 1 }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  Corporate Events
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  High-impact business conferences, seminars, annual general meetings, and award galas designed to reflect corporate authority and drive business alignment.
                </p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  Brand Activations
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Creative experiential marketing, immersive pop-ups, and interactive product launches that ignite brand visibility and drive client engagement in the physical space.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  Entertainment Programs
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Bespoke entertainment curation, artist booking, and choreographed cultural shows that elevate public events and corporate galas into memorable sensory milestones.
                </p>
              </div>
            </div>

            <div style={{ order: 2, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '600px',
                height: '420px',
                position: 'relative',
                border: '1px solid rgba(158, 112, 96, 0.15)',
                boxShadow: '-15px 15px 0px rgba(158, 112, 96, 0.1)'
              }}>
                <img 
                  src="/assets/service_event_corporate.png" 
                  alt="Corporate and Brand Experiences" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance / Partner Program Section */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderTop: '1px solid rgba(158, 112, 96, 0.2)',
            paddingTop: '6rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}>
              <div>
                <span className="cinematic-title" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>
                  Strategic Growth
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  color: 'var(--color-white)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '1.2'
                }}>
                  Partner With Us
                </h2>
              </div>

              <div>
                <p style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  We are currently expanding our network and inviting channel partners to collaborate with us in bringing exceptional events to life across the UAE.
                </p>
                <span style={{
                  display: 'block',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--color-gold)',
                  marginBottom: '2.5rem'
                }}>
                  Ready to create something extraordinary?
                </span>
                <Link 
                  href="/contact?service=event&message=I%20am%20interested%20in%20partnering%20with%20BreathArt%20for%20events."
                  className="btn btn-gold"
                  style={{
                    padding: '1.2rem 3rem',
                    letterSpacing: '3px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Contact Us Today <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled inline animation for the marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
