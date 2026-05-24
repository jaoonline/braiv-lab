'use client';

import React, { useState } from 'react';
import styles from '@/app/publications/Publications.module.css';
import { PublicationData } from '@/lib/fallbackData';
import { Search, ChevronDown, ExternalLink, FileText } from 'lucide-react';

interface PublicationsListProps {
  initialPublications: PublicationData[];
}

export default function PublicationsList({ initialPublications }: PublicationsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Extract unique years and sort descending
  const years = ['All', ...Array.from(new Set(initialPublications.map(p => p.year.toString()))).sort((a, b) => b.localeCompare(a))];

  // Toggle accordion card
  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Filter publications based on search query and year
  const filteredPubs = initialPublications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesYear = selectedYear === 'All' || pub.year.toString() === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div>
      {/* Search & Filter Controls */}
      <div className={styles.controlsRow}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by title, author, or journal..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setExpandedId(null); // collapse on search
            }}
          />
        </div>

        <div className={styles.filterGroup}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginRight: '0.5rem' }}>Year:</span>
          {years.map((year) => (
            <button
              key={year}
              className={`${styles.filterBtn} ${selectedYear === year ? styles.active : ''}`}
              onClick={() => {
                setSelectedYear(year);
                setExpandedId(null); // collapse on filter
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Publications Listing */}
      {filteredPubs.length > 0 ? (
        <div className={styles.pubList}>
          {filteredPubs.map((pub) => {
            const isExpanded = expandedId === pub.id;
            return (
              <div 
                key={pub.id} 
                className={`${styles.pubCard} ${isExpanded ? styles.expanded : ''}`}
              >
                {/* Header (always visible, clickable) */}
                <div className={styles.pubHeader} onClick={() => toggleExpand(pub.id)}>
                  <div className={styles.pubInfo}>
                    <h3 className={styles.pubTitle}>{pub.title}</h3>
                    <p className={styles.pubAuthors}>{pub.authors}</p>
                    <div className={styles.pubMeta}>
                      <span className={styles.journalBadge}>{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      {pub.doi && (
                        <>
                          <span>•</span>
                          <span>DOI: {pub.doi}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ChevronDown size={20} className={styles.expandIcon} />
                </div>

                {/* Collapsible Body (Abstract + Links) */}
                <div 
                  className={styles.pubBody}
                  style={{ maxHeight: isExpanded ? '600px' : '0' }}
                >
                  <div className={styles.pubBodyInner}>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p className={styles.abstractText}>
                      {pub.abstract || 'No abstract available for this publication.'}
                    </p>
                    <div className={styles.actionRow}>
                      {pub.linkUrl && (
                        <a 
                          href={pub.linkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-primary"
                          style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                        >
                          Publisher Link <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>No publications found matching your search criteria.</p>
          <button 
            className="btn btn-secondary"
            onClick={() => {
              setSearchQuery('');
              setSelectedYear('All');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
