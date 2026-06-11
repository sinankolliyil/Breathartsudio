'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const leftColumnSections = [
  {
    id: 'stage-shows',
    title: 'Stage Shows',
    desc: 'Grand set designs, high-end acoustics, lighting production, and theatrical stage management. We construct layouts that transform stages into immersive narrative spaces.',
    image: '/assets/services/service_event_main.png',
    width: '90%',
    aspectRatio: '65%',
    marginTop: '0rem',
    alignSelf: 'flex-start',
    bgOffsetLeft: false
  },
  {
    id: 'celebrity-collaborations',
    title: 'Celebrity Collaborations',
    desc: 'Managing high-profile talent, VIP guest lists, and premium entertainment programs. We bridge the gap between global stars and regional audiences with absolute professionalism.',
    image: '/assets/hero/hero_event.png',
    width: '72%',
    aspectRatio: '100%',
    marginTop: '8rem',
    alignSelf: 'flex-end',
    bgOffsetLeft: true
  },
  {
    id: 'brand-activations',
    title: 'Brand Activations',
    desc: 'Creative experiential marketing, immersive pop-ups, and interactive product launches that ignite brand visibility and drive client engagement in the physical space.',
    image: '/assets/services/service_corporate.png',
    width: '92%',
    aspectRatio: '70%',
    marginTop: '15rem',
    alignSelf: 'flex-start',
    bgOffsetLeft: false
  }
];

const rightColumnSections = [
  {
    id: 'outdoor-events',
    title: 'Outdoor Events',
    desc: 'Flawless execution of large-scale open-air events, concerts, and public festivals across the UAE, managing everything from crowd safety to outdoor audio systems.',
    image: '/assets/services/service_event_social.png',
    width: '78%',
    aspectRatio: '115%',
    marginTop: '12rem',
    alignSelf: 'flex-end',
    bgOffsetLeft: false
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    desc: 'High-impact business conferences, seminars, annual general meetings, and award galas designed to reflect corporate authority and drive business alignment.',
    image: '/assets/services/service_event_corporate.png',
    width: '95%',
    aspectRatio: '60%',
    marginTop: '11rem',
    alignSelf: 'flex-start',
    bgOffsetLeft: true
  },
  {
    id: 'entertainment-programs',
    title: 'Entertainment Programs',
    desc: 'Bespoke entertainment curation, artist booking, and choreographed cultural shows that elevate public events and corporate galas into memorable sensory milestones.',
    image: '/assets/services/service_wedding.png',
    width: '75%',
    aspectRatio: '105%',
    marginTop: '10rem',
    alignSelf: 'flex-end',
    marginRight: '10%',
    bgOffsetLeft: false
  }
];

export default function EventsByBreathArtPage() {
  return (
    <>
      {/* Page Title & Intro Section (No Hero Banner) */}
      <section className="section" style={{ paddingTop: '220px', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="project-header" style={{ width: '100%', marginBottom: '4rem' }}>
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
        margin: '4rem 0 6rem 0',
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
          {["Stage Shows", "Outdoor Events", "Celebrity Collaborations", "Corporate Events", "Brand Activations", "Entertainment Programs", "Partner With Us", "Flawless Execution"].map((item, idx) => (
            <span key={idx}>
              {item}
              <span style={{ margin: '0 3rem', fontSize: '0.35rem', verticalAlign: 'middle', display: 'inline-block', transform: 'translateY(-1px)', opacity: 0.8 }}>•</span>
            </span>
          ))}
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
          {["Stage Shows", "Outdoor Events", "Celebrity Collaborations", "Corporate Events", "Brand Activations", "Entertainment Programs", "Partner With Us", "Flawless Execution"].map((item, idx) => (
            <span key={idx}>
              {item}
              <span style={{ margin: '0 3rem', fontSize: '0.35rem', verticalAlign: 'middle', display: 'inline-block', transform: 'translateY(-1px)', opacity: 0.8 }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Asymmetric Staggered 2-Column Grid Section */}
      <section className="section" style={{ padding: '6rem 0 4rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
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
            <div className="accent-divider" style={{ margin: '1.5rem auto 0 auto', width: '60px' }}></div>
          </div>

          <div className="custom-masonry-grid-layout" style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0rem 6rem', // Remove row gap since we control spacing via marginTop
            alignItems: 'start'
          }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
              {leftColumnSections.map((sect) => (
                <div 
                  key={sect.id} 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    width: sect.width,
                    marginTop: sect.marginTop,
                    alignSelf: sect.alignSelf,
                    marginRight: sect.marginRight || '0',
                    marginLeft: sect.marginLeft || '0'
                  }}
                  className="capabilities-card"
                >
                  {/* Image container with offset light blue background */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: sect.aspectRatio, /* Custom aspect ratio */
                    marginBottom: '1rem'
                  }}>
                    {/* Background Offset Block */}
                    <div style={{
                      position: 'absolute',
                      top: '-35px',
                      left: sect.bgOffsetLeft ? '-35px' : 'unset',
                      right: sect.bgOffsetLeft ? 'unset' : '-35px',
                      width: '100%',
                      height: '100%',
                      background: 'var(--color-shade-3)', // Theme cream/beige offset block
                      zIndex: 1
                    }}></div>
                    
                    {/* Image */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 2,
                      border: '1px solid rgba(158, 112, 96, 0.15)',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={sect.image} 
                        alt={sect.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      
                      {/* Link/Arrow Icon box overlay in corner */}
                      <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        width: '45px',
                        height: '45px',
                        background: 'transparent',
                        border: '1px solid var(--color-white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-white)',
                        zIndex: 3
                      }}>
                        <ArrowRight size={16} style={{ transform: 'rotate(-45deg)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--color-white)',
                    margin: '0 0 1rem 0'
                  }}>
                    {sect.title}
                  </h3>
                  <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    {sect.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column (Staggered/Shifted Downwards) */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              zIndex: 1
            }} className="right-masonry-col">
              {rightColumnSections.map((sect) => (
                <div 
                  key={sect.id} 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    width: sect.width,
                    marginTop: sect.marginTop,
                    alignSelf: sect.alignSelf,
                    marginRight: sect.marginRight || '0',
                    marginLeft: sect.marginLeft || '0'
                  }}
                  className="capabilities-card"
                >
                  {/* Image container with offset light blue background */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: sect.aspectRatio, /* Custom aspect ratio */
                    marginBottom: '1rem'
                  }}>
                    {/* Background Offset Block */}
                    <div style={{
                      position: 'absolute',
                      top: '-35px',
                      left: sect.bgOffsetLeft ? '-35px' : 'unset',
                      right: sect.bgOffsetLeft ? 'unset' : '-35px',
                      width: '100%',
                      height: '100%',
                      background: 'var(--color-shade-3)', // Theme cream/beige offset block
                      zIndex: 1
                    }}></div>
                    
                    {/* Image */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 2,
                      border: '1px solid rgba(158, 112, 96, 0.15)',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={sect.image} 
                        alt={sect.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      
                      {/* Link/Arrow Icon box overlay in corner */}
                      <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        width: '45px',
                        height: '45px',
                        background: 'transparent',
                        border: '1px solid var(--color-white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-white)',
                        zIndex: 3
                      }}>
                        <ArrowRight size={16} style={{ transform: 'rotate(-45deg)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--color-white)',
                    margin: '0 0 1rem 0'
                  }}>
                    {sect.title}
                  </h3>
                  <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    {sect.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alliance / Partner Program Section */}
      <section className="section" style={{ padding: '3rem 0 8rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderTop: '1px solid rgba(158, 112, 96, 0.2)',
            paddingTop: '3rem'
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
        @media (max-width: 768px) {
          .custom-masonry-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .right-masonry-col {
            margin-top: 0 !important;
          }
          .capabilities-card {
            width: 100% !important;
            margin-top: 0 !important;
            margin-bottom: 4rem !important;
            margin-right: 0 !important;
            margin-left: 0 !important;
          }
          .grid-decorative-element {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
