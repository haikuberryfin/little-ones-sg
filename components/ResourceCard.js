import styles from './ResourceCard.module.css';
import { CAT_EMOJI, COST_COLOR, ageLabel, costLabel } from '../data/resources';

export default function ResourceCard({ resource, onClick }) {
  const r = resource;
  
  return (
    <div 
      className={styles.card} 
      onClick={() => onClick(r)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(r); }}
    >
      <div className={styles.cardContent}>
        <div className={styles.icon}>{CAT_EMOJI[r.cat] || "📦"}</div>
        <div className={styles.details}>
          <div className={styles.title}>{r.name}</div>
          <div className={styles.provider}>{r.provider}</div>
          <div className={styles.description}>{r.desc}</div>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagAge}`}>{ageLabel(r.age)}</span>
            <span className={styles.tag} style={{ background: COST_COLOR[r.cost] || "#ccc" }}>
              {costLabel(r.cost)}
            </span>
            <span className={`${styles.tag} ${styles.tagType}`}>{r.type}</span>
          </div>
        </div>
        <svg className={styles.chevron} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
