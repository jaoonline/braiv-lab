import React from 'react';
import Link from 'next/link';
import styles from './Home.module.css';
import { getProjects, getPublications } from '@/lib/data';
import { ArrowRight, BrainCircuit, FlaskConical, GraduationCap, FileText } from 'lucide-react';

export default async function Home() {
  // Fetch projects and publications dynamically
  const { data: projects } = await getProjects();
  const { data: publications } = await getPublications();

  // Find ABU and DNBU specifically
  const abuProject = projects.find(p => p.unit === 'ABU');
  const dnbuProject = projects.find(p => p.unit === 'DNBU');

  // Take the 2 latest publications
  const latestPubs = publications.slice(0, 2);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        {/* Neural connection decorative background */}
        <div className={styles.neuralMesh}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Brain Aging & Vascular Biology Lab</div>
          <h1 className={styles.heroTitle}>
            Unraveling the Mechanisms of <span>Brain Senescence</span> & Neurodegeneration
          </h1>
          <p className={styles.heroSubtitle}>
            Our multidisciplinary research integrates cellular neuroscience, vascular biology, and advanced microscopy 
            to protect white matter integrity and pioneer pathways toward cellular resilience in Alzheimer's disease and vascular dementia.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/projects" className="btn btn-primary">
              Explore Research <ArrowRight size={16} />
            </Link>
            <Link href="/future-members" className="btn btn-secondary">
              Join Our Lab
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Laboratory Statistics Banner */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Core Research Units</div>
            </div>
            <div>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Active Researchers</div>
            </div>
            <div>
              <div className={styles.statNumber}>60+</div>
              <div className={styles.statLabel}>Peer Publications</div>
            </div>
            <div>
              <div className={styles.statNumber}>$4M+</div>
              <div className={styles.statLabel}>NIH & Foundations Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Units (List of Projects) Section */}
      <section className="section" id="research-units">
        <div className="container">
          <h2 className="section-title">Core Research Units</h2>
          <p className="section-subtitle">
            The BRAIV Lab operates through two interconnected scientific units targeting distinct, crucial dimensions of 
            brain health, aging biology, and neurovascular decay.
          </p>

          <div className={styles.unitsGrid}>
            {/* Aging Biology Unit (ABU) */}
            <div className="glass-card abu-border-accent">
              <div className={styles.unitCard}>
                <div className={styles.unitCardHeader}>
                  <span className="badge badge-abu">ABU</span>
                  <BrainCircuit size={28} color="#fcd34d" style={{ filter: 'drop-shadow(0 0 8px rgba(252,211,77,0.3))' }} />
                </div>
                <h3 className={styles.unitCardTitle}>Aging Biology Unit</h3>
                <p className={styles.unitCardText}>
                  {abuProject ? abuProject.shortDesc : 'Focused on fundamental mechanisms of brain aging, including oxidative stress, iron dysregulation, glial dysfunction, and age-related cellular resilience, with emphasis on gray and white matter integrity.'}
                </p>
                <Link href="/projects#abu" className={`${styles.unitCardLink} ${styles.abu}`}>
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Dementia & Neurovascular Biology Unit (DNBU) */}
            <div className="glass-card dnbu-border-accent">
              <div className={styles.unitCard}>
                <div className={styles.unitCardHeader}>
                  <span className="badge badge-dnbu">DNBU</span>
                  <FlaskConical size={28} color="#00f2fe" style={{ filter: 'drop-shadow(0 0 8px rgba(0,242,254,0.3))' }} />
                </div>
                <h3 className={styles.unitCardTitle}>Dementia & Neurovascular Biology Unit</h3>
                <p className={styles.unitCardText}>
                  {dnbuProject ? dnbuProject.shortDesc : 'Focused on disease mechanisms underlying neurodegeneration, with emphasis on vascular contributions, white matter injury, neuroinflammation, and neurovascular unit breakdown.'}
                </p>
                <Link href="/projects#dnbu" className={`${styles.unitCardLink} ${styles.dnbu}`}>
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Publications Preview Section */}
      <section className={`section ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className="section-title font-heading">Recent Publications</h2>
          <p className="section-subtitle">
            Read our latest findings published in high-impact journals. We are committed to open science and translational discovery.
          </p>

          <div className={styles.pubsPreviewList}>
            {latestPubs.map((pub) => (
              <div key={pub.id} className={styles.pubItem}>
                <h3 className={styles.pubTitle}>{pub.title}</h3>
                <p className={styles.pubAuthors}>{pub.authors}</p>
                <div className={styles.pubMeta}>
                  <span>{pub.journal} ({pub.year})</span>
                  {pub.doi && <span style={{ marginLeft: '1rem' }}>DOI: {pub.doi}</span>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/publications" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={16} /> View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Join Our Team Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <GraduationCap size={48} color="#00f2fe" style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(0,242,254,0.3))' }} />
          <h2 className="section-title">Join BRAIV Lab</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            We are always looking for passionate, driven undergraduate trainees, graduate students, and postdocs 
            eager to solve the mysteries of brain aging and neurovascular diseases. Explore current research projects 
            and see how you can fit into our supportive and rigorous academic environment.
          </p>
          <Link href="/future-members" className="btn btn-accent">
            View Training Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
