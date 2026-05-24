import React from 'react';
import Link from 'next/link';
import { checkDbConnection } from '@/lib/data';
import { Brain, Mail, MapPin, ExternalLink } from 'lucide-react';

export default async function Footer() {
  const dbStatus = await checkDbConnection();

  return (
    <footer className="footer animate-fade-in">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Lab Info */}
          <div className="footer-col">
            <Link href="/" className="logo" style={{ marginBottom: '1.25rem' }}>
              <Brain size={24} color="#00f2fe" />
              <span>BRAIV</span>LAB
            </Link>
            <p>
              Brain Aging and Vascular Biology Lab. Dedicated to understanding the mechanisms of brain aging, 
              neurodegeneration, glial biology, and vascular contributions to brain health.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Research & Projects</Link></li>
              <li><Link href="/team">BRAIV Team</Link></li>
              <li><Link href="/publications">Publications</Link></li>
              <li><Link href="/future-members">Future Members</Link></li>
              <li><Link href="/media">Media & Outreach</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Research Units */}
          <div className="footer-col">
            <h3>Research Units</h3>
            <ul className="footer-links">
              <li>
                <Link href="/projects#abu" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  Aging Biology (ABU)
                </Link>
              </li>
              <li>
                <Link href="/projects#dnbu" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  Neurovascular (DNBU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div className="footer-col">
            <h3>Contact Info</h3>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
              <MapPin size={18} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                Department of Neuroscience<br />
                Brain Science Research Center<br />
                Suite 450, Research Parkway
              </span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
              <Mail size={16} color="#00f2fe" />
              <a href="mailto:info@braivlab.org">info@braivlab.org</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} BRAIV Lab. All rights reserved. 
          </div>

          {/* Database Connection Pill */}
          <div className="db-pill" title={dbStatus.message}>
            <div className={`db-indicator ${dbStatus.connected ? 'connected' : 'offline'}`}></div>
            <span>
              Database: {dbStatus.connected ? 'Live' : 'Demo Mode'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
