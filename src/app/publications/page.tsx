import React from 'react';
import styles from './Publications.module.css';
import { getPublications } from '@/lib/data';
import PublicationsList from '@/components/PublicationsList';

export default async function Publications() {
  const { data: publications } = await getPublications();

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="section-title">Academic Publications</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Explore our research publications detailing findings on vascular dementia, Alzheimer's mechanisms, 
            white matter injury, and aging brain therapeutics.
          </p>
        </div>
      </section>

      {/* Publications List Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <PublicationsList initialPublications={publications} />
        </div>
      </section>
    </div>
  );
}
