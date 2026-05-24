import React from 'react';
import styles from './Projects.module.css';
import { getProjects } from '@/lib/data';
import { BrainCircuit, FlaskConical, Microscope, Eye, Settings, Dna } from 'lucide-react';

export default async function Projects() {
  const { data: projects } = await getProjects();

  const abu = projects.find(p => p.unit === 'ABU');
  const dnbu = projects.find(p => p.unit === 'DNBU');

  // Hardcoded rich methodology cards for ABU
  const abuMethodologies = [
    { name: 'Confocal & Multiphoton Imaging', desc: 'High-resolution visualization of white matter tracts and myelination dynamics.' },
    { name: 'Lipid Peroxidation Assays', desc: 'Quantitative evaluation of ferroptosis and iron-induced oxidative damage in cell lines.' },
    { name: 'Single-Cell Glial Profiling', desc: 'Transcriptomic dissection of microglial and astrocytic cell states during brain senescence.' }
  ];

  // Hardcoded rich methodology cards for DNBU
  const dnbuMethodologies = [
    { name: 'Blood-Brain Barrier Assays', desc: 'In-vivo and in-vitro evaluations of endothelial tight junction integrity and leakage.' },
    { name: 'Spatial Transcriptomics', desc: 'Mapping gene expression profiles specifically at the microvascular-neural interface.' },
    { name: 'In-Vivo Laser Doppler Flowmetry', desc: 'Measuring real-time cerebral blood flow and capillary perfusion rates.' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="section-title">Research & Core Projects</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Investigating the cellular mechanisms driving brain aging and vascular-associated neurodegeneration 
            through state-of-the-art biological platforms.
          </p>
        </div>
      </section>

      {/* Aging Biology Unit (ABU) Section */}
      <section className={styles.unitSection} id="abu">
        <div className="container">
          <div className={styles.unitLayout}>
            <div>
              <div className={styles.unitMeta}>
                <span className="badge badge-abu">Aging Biology Unit</span>
                <BrainCircuit size={24} color="#fcd34d" />
              </div>
              <h2 className={`${styles.unitTitle} ${styles.abu}`}>
                Aging Biology Unit (ABU)
              </h2>
              <p className={styles.description}>
                {abu ? abu.fullDesc : 'The Aging Biology Unit (ABU) investigates the primary cellular and molecular pathways that govern brain senescence. Our research focuses on how oxidative stress and iron dysregulation accumulate in neural tissues over time, leading to mitochondrial dysfunction and glial senescence. A major area of investigation is white matter integrity—specifically how myelin-producing oligodendrocytes maintain axonal support under age-related metabolic stress. By identifying the key regulators of age-related cellular resilience, ABU aims to uncover novel therapeutic targets to delay or reverse cognitive decline.'}
              </p>

              {/* Research Objectives */}
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Core Research Objectives
              </h3>
              <div className={styles.aimsGrid}>
                {(abu?.objectives || [
                  'Elucidate the molecular links between iron accumulation (ferroptosis pathway) and oligodendrocyte vulnerability.',
                  'Investigate the impact of glial senescence (microglia and astrocytes) on age-related synaptic pruning and gray matter integrity.',
                  'Develop translational strategies using small molecules to enhance cellular resilience and preserve myelin health during healthy aging.'
                ]).map((objective, i) => (
                  <div key={i} className={styles.aimCard}>
                    <div className={`${styles.aimNumber} ${styles.abu}`}>{i + 1}</div>
                    <div className={styles.aimContent}>
                      <h4>Aim {i + 1}</h4>
                      <p>{objective}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Methodologies */}
              <div className={styles.methodologySection}>
                <h4 className={styles.methodTitle}>
                  <Microscope size={20} color="#fcd34d" />
                  ABU Experimental Methodologies
                </h4>
                <div className={styles.methodGrid}>
                  {abuMethodologies.map((method, i) => (
                    <div key={i} className={`${styles.methodCard} ${styles.abu}`}>
                      <h5>{method.name}</h5>
                      <p>{method.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Dementia & Neurovascular Biology Unit (DNBU) Section */}
      <section className={styles.unitSection} id="dnbu" style={{ background: 'rgba(11, 14, 30, 0.15)' }}>
        <div className="container">
          <div className={styles.unitLayout}>
            <div>
              <div className={styles.unitMeta}>
                <span className="badge badge-dnbu">Neurovascular Biology Unit</span>
                <FlaskConical size={24} color="#00f2fe" />
              </div>
              <h2 className={`${styles.unitTitle} ${styles.dnbu}`}>
                Dementia & Neurovascular Biology Unit (DNBU)
              </h2>
              <p className={styles.description}>
                {dnbu ? dnbu.fullDesc : 'The Dementia & Neurovascular Biology Unit (DNBU) explores how vascular health affects brain health. Specifically, we investigate the structure and function of the neurovascular unit (NVU), which comprises endothelial cells, pericytes, astrocytes, and microglia. Breakdown of the NVU and subsequent blood-brain barrier (BBB) leakage are key early events in vascular dementia and Alzheimer’s disease. Our researchers analyze how neurovascular impairment contributes to white matter injury, microglial activation, and persistent neuroinflammation, driving progressive cognitive decline.'}
              </p>

              {/* Research Objectives */}
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Core Research Objectives
              </h3>
              <div className={styles.aimsGrid}>
                {(dnbu?.objectives || [
                  'Map the spatial-temporal dynamics of neurovascular unit breakdown in preclinical models of Alzheimer’s and vascular dementia.',
                  'Identify the signaling pathways driving pericyte loss and subsequent capillary rarefaction in white matter tract degeneration.',
                  'Evaluate the therapeutic efficacy of restoring BBB integrity to suppress chronic neuroinflammation and preserve cognitive function.'
                ]).map((objective, i) => (
                  <div key={i} className={styles.aimCard}>
                    <div className={`${styles.aimNumber} ${styles.dnbu}`}>{i + 1}</div>
                    <div className={styles.aimContent}>
                      <h4>Aim {i + 1}</h4>
                      <p>{objective}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Methodologies */}
              <div className={styles.methodologySection}>
                <h4 className={styles.methodTitle}>
                  <Dna size={20} color="#00f2fe" />
                  DNBU Experimental Methodologies
                </h4>
                <div className={styles.methodGrid}>
                  {dnbuMethodologies.map((method, i) => (
                    <div key={i} className={`${styles.methodCard} ${styles.dnbu}`}>
                      <h5>{method.name}</h5>
                      <p>{method.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
