'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Research',
      path: '/projects',
      submenu: [{ name: 'Projects', path: '/projects' }]
    },
    { name: 'BRAIV Team', path: '/team' },
    { name: 'Publications', path: '/publications' },
    { name: 'Future Members', path: '/future-members' },
    { name: 'Media & Outreach', path: '/media' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <header 
        className="header" 
        style={{ 
          background: scrolled ? 'rgba(7, 9, 19, 0.9)' : 'rgba(7, 9, 19, 0.75)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        <div className="container header-container">
          <Link href="/" className="logo">
            <Brain size={28} color="#00f2fe" style={{ filter: 'drop-shadow(0 0 8px rgba(0,242,254,0.4))' }} />
            <span>BRAIV</span>LAB
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.name} className="nav-item-has-submenu">
                    <Link 
                      href={link.path} 
                      className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      {link.name} <ChevronDown size={14} />
                    </Link>
                    <div className="submenu">
                      {link.submenu.map((sub) => (
                        <Link key={sub.name} href={sub.path} className="submenu-link">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <div key={link.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            {link.submenu ? (
              <>
                <Link 
                  href={link.path} 
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                <div className="mobile-submenu-links">
                  {link.submenu.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.path} 
                      className="mobile-submenu-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      — {sub.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link 
                href={link.path} 
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
