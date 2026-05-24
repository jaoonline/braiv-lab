import React from 'react';
import styles from './Team.module.css';
import { getTeamMembers } from '@/lib/data';
import { Mail, GraduationCap, Users } from 'lucide-react';

export default async function Team() {
  const { data: team } = await getTeamMembers();

  // Group members
  const labMembers = team.filter((m) => m.category === 'MEMBER');
  const visitingMembers = team.filter((m) => m.category === 'VISITING');
  const alumniMembers = team.filter((m) => m.category === 'ALUMNI');

  // Helper to extract initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter((n) => !n.includes('.') && n.length > 0) // exclude titles like Dr.
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="section-title">The BRAIV Team</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Meet our dedicated team of neuroscientists, vascular biologists, and student researchers 
            collaborating to push the boundaries of brain aging science.
          </p>
        </div>
      </section>

      {/* 1. BRAIV Lab Members */}
      <section className={styles.categorySection}>
        <div className="container">
          <h2 className={styles.categoryTitle}>
            <Users size={24} color="#00f2fe" /> Braiv Lab Members
          </h2>

          <div className={styles.memberGrid}>
            {labMembers.map((member) => (
              <div key={member.id} className="glass-card">
                <div className={styles.profileCard}>
                  <div className={styles.profileHeader}>
                    <div className={styles.avatar}>
                      {getInitials(member.name) || 'BL'}
                    </div>
                    <div className={styles.nameInfo}>
                      <h3>{member.name}</h3>
                      <div className={styles.roleText}>{member.role}</div>
                    </div>
                  </div>
                  <p className={styles.bio}>{member.bio}</p>
                  
                  {/* Contact Links */}
                  <div className={styles.linksContainer}>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className={styles.linkIcon} title="Email">
                        <Mail size={16} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="LinkedIn">
                        <Mail size={16} />
                      </a>
                    )}
                    {member.scholarUrl && (
                      <a href={member.scholarUrl} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="Google Scholar">
                        <GraduationCap size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Visiting Members */}
      {visitingMembers.length > 0 && (
        <section className={styles.categorySection}>
          <div className="container">
            <h2 className={styles.categoryTitle}>
              <Users size={24} color="#fcd34d" /> Visiting Members
            </h2>

            <div className={styles.visitingGrid}>
              {visitingMembers.map((member) => (
                <div key={member.id} className="glass-card" style={{ borderTop: '3px solid var(--secondary)' }}>
                  <div className={styles.profileCard}>
                    <div className={styles.profileHeader}>
                      <div className={styles.visitingAvatar}>
                        {getInitials(member.name) || 'VM'}
                      </div>
                      <div className={styles.nameInfo}>
                        <h3>{member.name}</h3>
                        <div className={styles.roleText} style={{ color: 'var(--secondary)' }}>{member.role}</div>
                      </div>
                    </div>
                    <p className={styles.bio}>{member.bio}</p>
                    
                    <div className={styles.linksContainer}>
                      {member.email && (
                        <a href={`mailto:${member.email}`} className={styles.linkIcon} title="Email" style={{ borderColor: 'rgba(252,211,77,0.2)', color: 'var(--text-secondary)' }}>
                          <Mail size={16} />
                        </a>
                      )}
                      {member.scholarUrl && (
                        <a href={member.scholarUrl} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="Google Scholar" style={{ borderColor: 'rgba(252,211,77,0.2)', color: 'var(--text-secondary)' }}>
                          <GraduationCap size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Alumni Members */}
      {alumniMembers.length > 0 && (
        <section className={styles.categorySection}>
          <div className="container">
            <h2 className={styles.categoryTitle}>
              <GraduationCap size={24} color="#94a3b8" /> Alumni Members
            </h2>

            <div className={styles.alumniGrid}>
              {alumniMembers.map((member) => (
                <div key={member.id} className="glass-card" style={{ padding: '1.75rem', background: 'rgba(13,22,45,0.25)' }}>
                  <div className={styles.profileCard}>
                    <div className={styles.profileHeader} style={{ marginBottom: '1rem' }}>
                      <div className={styles.alumniAvatar}>
                        {getInitials(member.name) || 'AL'}
                      </div>
                      <div className={styles.nameInfo}>
                        <h3 style={{ fontSize: '1.1rem' }}>{member.name}</h3>
                        <div className={styles.roleText} style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{member.role}</div>
                      </div>
                    </div>
                    <p className={styles.bio} style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{member.bio}</p>
                    
                    <div className={styles.linksContainer} style={{ paddingTop: '0.75rem' }}>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="LinkedIn" style={{ width: '28px', height: '28px' }}>
                          <Mail size={14} />
                        </a>
                      )}
                      {member.scholarUrl && (
                        <a href={member.scholarUrl} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="Google Scholar" style={{ width: '28px', height: '28px' }}>
                          <GraduationCap size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
