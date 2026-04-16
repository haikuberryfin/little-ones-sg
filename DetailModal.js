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
              <div className={`${styles.infoRow} ${detail.url || detail.yt ? styles.hasUrl : ''}`}>
                <span className={styles.infoIcon} aria-hidden="true">📍</span>
                <div>
                  <div className={styles.infoType}>Location</div>
                  <div className={styles.infoValue}>{detail.loc}</div>
                </div>
              </div>
            )}
            {detail.url && (
              <div className={`${styles.infoRow} ${detail.yt ? styles.hasUrl : ''}`}>
                <span className={styles.infoIcon} aria-hidden="true">🔗</span>
                <div className={styles.linkBox}>
                  <div className={styles.infoType}>Website</div>
                  <div className={`${styles.infoValue} ${styles.urlValue}`}>
                    {detail.url.replace(/https?:\/\/(www\.)?/, '')}
                  </div>
                </div>
              </div>
            )}
            {detail.yt && (
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">▶️</span>
                <div className={styles.linkBox}>
                  <div className={styles.infoType}>YouTube</div>
                  <div className={`${styles.infoValue} ${styles.urlValue}`}>
                    {detail.yt.replace(/https?:\/\/(www\.)?youtube\.com\//, '')}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.actionButtons}>
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
            {detail.yt && (
              <a 
                href={detail.yt} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.youtubeBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
