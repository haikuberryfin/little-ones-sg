import styles from './FilterBar.module.css';
import { CAT_EMOJI, COST_COLOR, ageFilterLabel, costLabel } from '../data/resources';

export default function FilterBar({ 
  showFilters, setShowFilters, 
  activeFilterCount, hasFilters, clearAll, 
  selAge, setSelAge, 
  selCat, setSelCat, 
  selCost, setSelCost 
}) {
  return (
    <div className={styles.filterBar}>
      <button 
        onClick={() => setShowFilters(!showFilters)} 
        className={`${styles.toggleButton} ${showFilters ? styles.active : styles.inactive}`}
        aria-expanded={showFilters}
        aria-controls="filters-panel"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        Filters
        {activeFilterCount > 0 && <span className={styles.badge}>{activeFilterCount}</span>}
      </button>

      {hasFilters && (
        <button onClick={clearAll} className={styles.clearButton} aria-label="Clear all filters">
          Clear all 
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {selAge !== "All" && (
        <span className={`${styles.filterTag} ${styles.tagAge}`} onClick={() => setSelAge("All")} role="button" tabIndex={0}>
          <span className={styles.filterTagText}>Age: {ageFilterLabel(selAge)}</span>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </span>
      )}

      {selCat !== "All" && (
        <span className={`${styles.filterTag} ${styles.tagCat}`} onClick={() => setSelCat("All")} role="button" tabIndex={0}>
          <span className={styles.filterTagText}>{CAT_EMOJI[selCat]} {selCat}</span>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </span>
      )}

      {selCost !== "All" && (
        <span className={`${styles.filterTag} ${styles.tagCost}`} style={{ background: COST_COLOR[selCost] }} onClick={() => setSelCost("All")} role="button" tabIndex={0}>
          <span className={styles.filterTagText}>{costLabel(selCost)}</span>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </span>
      )}
    </div>
  );
}
