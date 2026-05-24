import React from 'react';
import styles from './Media.module.css';
import { Newspaper, Calendar, HeartHandshake, Image as ImageIcon } from 'lucide-react';

export default function Media() {
  const newsItems = [
    {
      title: 'Dr. Sarah Lin Awarded NIH R01 Grant to Study White Matter Degradation',
      date: 'April 15, 2026',
      tag: 'Grant Award',
      excerpt: 'The Aging Biology Unit has secured a $2.4M NIH R01 research grant to investigate the molecular signaling pathways that govern pericyte loss and subsequent myelin degradation in preclinical models of vascular cognitive impairment.',
      iconColor: '#fcd34d'
    },
    {
      title: 'BRAIV Lab Hosts Annual Neuroscience Community Day',
      date: 'March 22, 2026',
      tag: 'Outreach',
      excerpt: 'Our researchers opened the doors to high school students from local districts. Students learned histological staining techniques, viewed fluorescent brain slices under our high-resolution confocal microscopes, and discussed career paths in brain science.',
      iconColor: '#00f2fe'
    },
    {
      title: 'Dr. Marcus Vance Receives Postdoctoral Fellowship Award',
      date: 'February 10, 2026',
      tag: 'Award',
      excerpt: 'Marcus Vance has been awarded a competitive postdoctoral fellowship from the Brain Research Foundation. His research will focus on the cellular protective mechanisms of iron chelation in white matter ferroptosis.',
      iconColor: '#fcd34d'
    },
    {
      title: 'Julian Carter Presents at the Society for Neuroscience (SfN) Meeting',
      date: 'November 18, 2025',
      tag: 'Conference',
      excerpt: 'Julian presented his work on neurovascular unit breakdown in mouse models of cerebral amyloid angiopathy. His poster session sparked meaningful discussions with leading experts in blood-brain barrier biology.',
      iconColor: '#00f2fe'
    }
  ];

  const galleryItems = [
    { category: 'Research', caption: 'Confocal imaging of myelin-producing oligodendrocytes in the corpus callosum.' },
    { category: 'Outreach', caption: 'Elena Rostova explaining microscope operation to visiting high school students.' },
    { category: 'Community', caption: 'BRAIV Lab group photo during our 2025 Summer Research Summit.' },
    { category: 'Research', caption: 'High-magnification view of blood vessels at the neurovascular unit.' },
    { category: 'Community', caption: 'Celebrating Julian Carter passing his doctoral qualifying exam.' },
    { category: 'Research', caption: 'Fluorescent labeling of microglia (green) and astrocytes (red) in aged cortex.' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="section-title">Media & Outreach</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Discover our latest laboratory news, community engagement, scientific events, 
            and visual highlights from our research environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          
          {/* News and Activities Grid */}
          <h2 className={styles.sectionHeading}>
            <Newspaper size={22} color="#00f2fe" /> Outreach & News
          </h2>
          <div className={styles.newsGrid}>
            {newsItems.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ borderLeft: `4px solid ${item.iconColor}` }}>
                <div className={styles.newsCard}>
                  <div className={styles.cardMeta}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} /> {item.date}
                    </span>
                    <span>•</span>
                    <span style={{ color: item.iconColor, fontWeight: 650 }}>{item.tag}</span>
                  </div>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsExcerpt}>{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery Grid */}
          <h2 className={styles.sectionHeading}>
            <ImageIcon size={22} color="#fcd34d" /> Lab Gallery
          </h2>
          <div className={styles.galleryGrid}>
            {galleryItems.map((item, idx) => (
              <div key={idx} className={styles.galleryItem}>
                {/* Fallback stylized visual box instead of empty image tag */}
                <div 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(135deg, rgba(13,22,45,0.7) 0%, rgba(20,32,64,0.9) 100%)',
                    border: '1px solid var(--border)'
                  }} 
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryCategory}>{item.category}</span>
                  <p className={styles.galleryCaption}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
