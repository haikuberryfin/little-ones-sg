import { useEffect, useRef } from 'react';
import styles from './DetailModal.module.css';
import { CAT_EMOJI, COST_COLOR, ageLabel } from '../data/resources';

export default function DetailModal({ detail, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    
    if (modalRef.current) {
       modalRef.current.focus();
    }
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!detail) return null;

  return (
    <div 
      className={styles.overlay} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={styles.modal} 
        onClick={e => e.stopPropagation()}
        tabIndex="-1"
        ref={modalRef}
      >
        <div className={styles.header}>
          <div className={styles.catIcon} aria-hidden="true">{CAT_EMOJI[detail.cat]}</div>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={styles.closeIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className={styles.content}>
          <h2 id="modal-title" className={styles.title}>{detail.name}</h2>
          <div className={styles.provider}>{detail.provider}</div>
          
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagAge}`}>{ageLabel(detail.age)}</span>
            <span className={styles.tag} style={{ background: COST_COLOR[detail.cost] }}>{detail.cost}</span>
            <span className={`${styles.tag} ${styles.tagCat}`}>{detail.cat}</span>
            <span className={`${styles.tag} ${styles.tagType}`}>{detail.type}</span>
          </div>
          
          {detail.cost === "Free / Nominal Fee" && (
            <div className={`${styles.notice} ${styles.noticeFree}`}>
              <span aria-hidden="true">🏛️</span> Community / government programme — free or nominal fee applies
            </div>
          )}
          {detail.cost === "Tiered - Check Provider" && (
            <div className={`${styles.notice} ${styles.noticeTiered}`}>
              <span aria-hidden="true">💰</span> Pricing varies by programme or package — check provider for details
            </div>
          )}
          
          <p className={styles.description}>{detail.desc}</p>
          
          <div className={styles.infoBox}>
            {detail.loc && (
              <div className={`${styles.infoRow} ${detail.url ? styles.hasUrl : ''}`}>
                <span className={styles.infoIcon} aria-hidden="true">📍</span>
                <div>
                  <div className={styles.infoType}>Location</div>
                  <div className={styles.infoValue}>{detail.loc}</div>
                </div>
              </div>
            )}
            {detail.url && (
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">🔗</span>
                <div className={styles.linkBox}>
                  <div className={styles.infoType}>Website</div>
                  <div className={`${styles.infoValue} ${styles.urlValue}`}>
                    {detail.url.replace(/https?:\/\/(www\.)?/, '')}
                  </div>
                </div>
              </div>
            )}
          </div>

          {detail.url && (
            <a 
              href={detail.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.visitBtn}
            >
              Visit Website 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={18} height={18}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
