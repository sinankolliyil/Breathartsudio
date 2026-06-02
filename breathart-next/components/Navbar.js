'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;
  const isHome = pathname === '/';

  return (
    <nav id="navbar" className={scrolled || !isHome ? 'scrolled' : ''}>
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
