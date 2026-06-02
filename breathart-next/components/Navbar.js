'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scrolled state (for morphing to floating pill)
      setScrolled(currentScrollY > 80);

      // Determine visibility with a tiny threshold to prevent scroll jitter
      if (currentScrollY <= 80) {
        setVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY;
        if (diff > 10) {
          // Scrolling down - hide navbar
          setVisible(false);
        } else if (diff < -10) {
          // Scrolling up - show navbar
          setVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;
  const isHome = pathname === '/';

  const navClasses = [
    scrolled || !isHome ? 'scrolled' : '',
    !visible ? 'nav-hidden' : ''
  ].filter(Boolean).join(' ');

  return (
    <nav id="navbar" className={navClasses}>
      <div className="nav-container">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo/BreathArt Photography Logo.png" alt="BreathArt Photography Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
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
          <li>
            <Link href="/offers" className={isActive('/offers') ? 'active' : ''}>
              Offers
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/contact" className="btn-nav">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
