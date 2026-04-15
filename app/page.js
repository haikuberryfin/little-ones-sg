"use client";
import { useState, useMemo } from "react";
import styles from './page.module.css';
import { R, ageMatch } from '../data/resources';

import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import FiltersPanel from '../components/FiltersPanel';
import ResourceCard from '../components/ResourceCard';
import DetailModal from '../components/DetailModal';

export default function App() {
  const [search, setSearch] = useState("");
  const [selAge, setSelAge] = useState("All");
  const [selCat, setSelCat] = useState("All");
  const [selCost, setSelCost] = useState("All");
  const [detail, setDetail] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const hasFilters = selAge !== "All" || selCat !== "All" || selCost !== "All" || search !== "";
  const activeFilterCount = [selAge, selCat, selCost].filter(x => x !== "All").length;

  const filtered = useMemo(() => {
    return R.filter(r => {
      if (search) {
        const q = search.toLowerCase();
        if (!r.name.toLowerCase().includes(q) && !r.provider.toLowerCase().includes(q) && !r.desc.toLowerCase().includes(q) && !r.cat.toLowerCase().includes(q)) return false;
      }
      if (!ageMatch(r.age, selAge)) return false;
      if (selCat !== "All" && r.cat !== selCat) return false;
      if (selCost !== "All" && r.cost !== selCost) return false;
      return true;
    });
  }, [search, selAge, selCat, selCost]);

  const catCounts = useMemo(() => {
    const c = {};
    R.forEach(r => { c[r.cat] = (c[r.cat] || 0) + 1; });
    return c;
  }, []);

  function clearAll() { 
    setSearch(""); 
    setSelAge("All"); 
    setSelCat("All"); 
    setSelCost("All"); 
  }

  return (
    <main className={styles.mainContainer}>
      <Header 
        search={search} 
        setSearch={setSearch} 
        filteredCount={filtered.length} 
        totalCount={R.length} 
      />

      <FilterBar 
        showFilters={showFilters} setShowFilters={setShowFilters}
        activeFilterCount={activeFilterCount}
        hasFilters={hasFilters} clearAll={clearAll}
        selAge={selAge} setSelAge={setSelAge}
        selCat={selCat} setSelCat={setSelCat}
        selCost={selCost} setSelCost={setSelCost}
      />

      {showFilters && (
        <FiltersPanel 
          selAge={selAge} setSelAge={setSelAge}
          selCat={selCat} setSelCat={setSelCat}
          selCost={selCost} setSelCost={setSelCost}
          catCounts={catCounts}
        />
      )}

      <div className={styles.contentWrapper}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon} aria-hidden="true">🔍</div>
            <div className={styles.emptyTitle}>No resources found</div>
            <div className={styles.emptyDesc}>Try adjusting your filters</div>
            <button onClick={clearAll} className={styles.clearFiltersBtn}>Clear all filters</button>
          </div>
        ) : (
          <div className={styles.resourceList}>
            {filtered.map(r => (
              <ResourceCard 
                key={r.id} 
                resource={r} 
                onClick={setDetail} 
              />
            ))}
          </div>
        )}
      </div>

      <DetailModal 
        detail={detail} 
        onClose={() => setDetail(null)} 
      />
    </main>
  );
}
