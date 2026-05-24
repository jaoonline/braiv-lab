import React from 'react';
import Link from 'next/link';
import styles from './FutureMembers.module.css';
import { BookOpen, GraduationCap, ClipboardList, Send } from 'lucide-react';

export default function FutureMembers() {
  const undergradOpps = [
    'Participate in ongoing neuroscience research projects',
    'Learn histological, molecular, and imaging techniques',
    'Assist with data collection and analysis',
    'Present research findings at laboratory meetings and scientific conferences',
    'Receive mentorship on graduate school preparation and career development'
  ];

  const gradOpps = [
    'White matter degeneration and repair',
    'Microglial biology and neuroinflammation',
    'Oligodendrocyte lineage biology',
    'Ferroptosis and aging-related cell death',
    'Neurovascular dysfunction',
    'Alzheimer’s disease and vascular dementia',
    'Advanced microscopy and imaging analysis',
    'Computational and data-driven neuroscience'
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="section-title">Join Our Laboratory</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Training the next generation of scientific leaders in brain aging, neurovascular biology, 
            and translational neuroscience.
          </p>
        </div>
      </section>

      {/* Lab Invitation & Values */}
      <section className={styles.introSection}>
        <div className="container">
          <p className={styles.introText}>
            The BRAIV Lab (Brain Aging and Vascular Biology Lab) welcomes highly motivated and intellectually 
            curious trainees who are passionate about neuroscience, brain aging, neurovascular biology, 
            white matter degeneration, and neurodegenerative diseases. We are committed to fostering a collaborative, 
            inclusive, and rigorous research environment that supports scientific growth, innovation, and mentorship at all career stages.
          </p>
          <div className={styles.highlightPanel}>
            <p>
              Our research integrates cellular and molecular neuroscience, advanced imaging, neurodegeneration, 
              glial biology, ferroptosis, aging biology, and translational approaches to better understand mechanisms 
              underlying Alzheimer’s disease, vascular dementia, and related neurological disorders. We encourage 
              applications from individuals with diverse academic backgrounds, perspectives, and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Trainee Tracks (Undergrad vs Grad) */}
      <section className="section" style={{ background: 'rgba(11, 14, 30, 0.15)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className={styles.tracksGrid}>
            
            {/* Undergraduate Students Track */}
            <div className="glass-card abu-border-accent">
              <div className={styles.trackCard + ' ' + styles.abuTrack}>
                <div className={styles.trackHeader}>
                  <div className={`${styles.trackIcon} ${styles.undergrad}`}>
                    <BookOpen size={24} />
                  </div>
                  <h3 className={styles.trackTitle}>Undergraduates</h3>
                </div>
                <p className={styles.trackIntro}>
                  Undergraduate trainees are an important part of the BRAIV Lab community. Students will gain hands-on 
                  exposure to experimental neuroscience, laboratory techniques, data analysis, scientific communication, and mentorship.
                  We welcome students interested in neuroscience, biology, biomedical engineering, data science, psychology, physiology, anatomy, and related disciplines.
                </p>

                <h4 className={styles.listTitle}>Opportunities & Training:</h4>
                <ul className={styles.listItems}>
                  {undergradOpps.map((opp, idx) => (
                    <li key={idx}>{opp}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Graduate Students Track */}
            <div className="glass-card dnbu-border-accent">
              <div className={styles.trackCard}>
                <div className={styles.trackHeader}>
                  <div className={`${styles.trackIcon} ${styles.grad}`}>
                    <GraduationCap size={24} />
                  </div>
                  <h3 className={styles.trackTitle}>Graduate Students</h3>
                </div>
                <p className={styles.trackIntro}>
                  Graduate students in the BRAIV Lab receive multidisciplinary training in brain aging and vascular biology 
                  with an emphasis on scientific independence, critical thinking, and translational neuroscience.
                  Graduate trainees are encouraged to develop independent research directions, publish high-impact manuscripts, 
                  present at national and international meetings, and pursue competitive fellowships.
                </p>

                <h4 className={styles.listTitle}>Primary Research Focus Areas:</h4>
                <ul className={styles.listItems}>
                  {gradOpps.map((opp, idx) => (
                    <li key={idx}>{opp}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Application Instructions / CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaPanel}>
            <ClipboardList size={36} color="#00f2fe" style={{ marginBottom: '1.25rem', filter: 'drop-shadow(0 0 10px rgba(0,242,254,0.3))' }} />
            <h2 className={styles.ctaTitle}>How To Apply</h2>
            <p className={styles.ctaText}>
              Interested candidates should submit their application materials to align with our recruitment schedules. 
              Please prepare a CV/resume, a copy of unofficial transcripts (for students), and a brief statement of research interests 
              stating why you are interested in the BRAIV Lab.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Submit Inquiry <Send size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
