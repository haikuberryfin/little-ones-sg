import styles from './Header.module.css';

export default function Header({ search, setSearch, filteredCount, totalCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoIcon}>🌱</div>
        <div>
          <h1 className={styles.title}>Little Ones</h1>
          <div className={styles.subtitle}>SG</div>
        </div>
        <div className={styles.spacer} />
        <div className={styles.countBadge}>
          {filteredCount} of {totalCount}
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <input 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="Search resources, providers, categories..." 
          className={styles.searchInput}
          aria-label="Search resources"
        />
        <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" id="search-icon-path" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        {search && (
          <button 
            onClick={() => setSearch("")} 
            className={styles.clearButton}
            aria-label="Clear search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={16} height={16}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
