'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { X } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const DribbbleIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const FigmaIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v3.5A3.5 3.5 0 0 1 8.5 16H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 0 1 8.5 22H8.5A3.5 3.5 0 0 1 5 18.5z" />
  </svg>
);

// Animation variants for the menu container
const MENU_SLIDE_ANIMATION = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

// Curve component for the path morphing slide effect (white color to match menu)
function Curve({ height }) {
  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="curved-menu-svg-curve">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}

// NavLink item styled with a clean staggered slide-in and hover transitions
function NavLink({ heading, href, index, isActive, onClose }) {
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.08 + 0.2, // Staggered delays matching open slide sequence
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="curved-menu-link-wrapper"
    >
      <Link href={href}>
        <div className="curved-menu-link-content">
          <span className="curved-menu-index">
            0{index}.
          </span>
          <div className="curved-menu-text-container">
            <span className="curved-menu-label">{heading}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);

      if (currentScrollY <= 80) {
        setVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY;
        if (diff > 10) setVisible(false);
        else if (diff < -10) setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (path) => pathname === path;
  const isHome = pathname === '/';

  const navClasses = [
    scrolled || !isHome ? 'scrolled' : '',
    !visible ? 'nav-hidden' : '',
    menuOpen ? 'nav-menu-open' : '',
  ].filter(Boolean).join(' ');

  const navItems = [
    { heading: 'Home', href: '/' },
    { heading: 'Services', href: '/services' },
    { heading: 'Offers', href: '/offers' },
    { heading: 'About Us', href: '/about' },
    { heading: 'Contact', href: '/contact' },
  ];

  return (
    <nav id="navbar" className={navClasses}>
      <div className="nav-container">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo/BreathArt Photography Logo.png" alt="BreathArt Photography Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links">
          <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li className="dropdown">
            <Link href="/services" className={`dropdown-trigger ${isActive('/services') ? 'active' : ''}`}>
              Services <i className="fas fa-chevron-down"></i>
            </Link>
            <div className="mega-menu">
              <div className="mega-menu-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="mega-menu-column">
                  <Link href="/services#service-maternity">
                    <span className="mega-title">Photography</span>
                    <span className="mega-desc">Elegant maternity, newborn, and portrait sessions</span>
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <Link href="/services#service-couple">
                    <span className="mega-title">Videography</span>
                    <span className="mega-desc">Cinematic films and wedding storytelling</span>
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <Link href="/services#service-event">
                    <span className="mega-title">Event Management</span>
                    <span className="mega-desc">Vibrant high-end celebration planning</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li><Link href="/offers" className={isActive('/offers') ? 'active' : ''}>Offers</Link></li>
          <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link></li>
          <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>

        <Link href="/contact" className="btn-nav">Contact Us</Link>

      </div>

      {/* Hamburger button — rendered outside nav-container to escape its stacking context! */}
      <div
        className="mobile-hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <div className="mobile-hamburger-inner">
          <span
            className={`mobile-hamburger-line-span ${menuOpen ? 'open-1' : ''}`}
          ></span>
          <span
            className={`mobile-hamburger-line-span ${menuOpen ? 'open-2' : ''}`}
          ></span>
          <span
            className={`mobile-hamburger-line-span ${menuOpen ? 'open-3' : ''}`}
          ></span>
        </div>
      </div>

      {/* Premium Right-Side Slide-In Curved Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="curved-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="curved-menu-backdrop"
            onClick={() => setMenuOpen(false)}
          />
        )}
        {menuOpen && (
          <motion.div
            key="curved-menu-panel"
            variants={MENU_SLIDE_ANIMATION}
            initial="initial"
            animate="enter"
            exit="exit"
            className="curved-menu-panel"
          >
            {/* Top accent gradient line */}
            <div className="curved-menu-top-line" />

            {/* Navigation Links Body */}
            <div className="curved-menu-body">
              <div className="curved-menu-section-label">Navigation</div>
              <div className="curved-menu-links">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.href}
                    heading={item.heading}
                    href={item.href}
                    index={index + 1}
                    isActive={isActive(item.href)}
                    onClose={() => setMenuOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* Footer inside Mobile Menu */}
            <div className="curved-menu-footer">
              <div className="curved-menu-socials">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="curved-menu-social-icon">
                  <LinkedinIcon size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="curved-menu-social-icon">
                  <GithubIcon size={24} />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="curved-menu-social-icon">
                  <DribbbleIcon size={24} />
                </a>
                <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="curved-menu-social-icon">
                  <FigmaIcon size={24} />
                </a>
              </div>
            </div>

            <Curve height={windowHeight} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

