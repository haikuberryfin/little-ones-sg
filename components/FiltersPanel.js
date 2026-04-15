import styles from './FiltersPanel.module.css';
import { AGE_BUTTONS, CATS, CAT_EMOJI, COST_ORDER, COST_COLOR } from '../data/resources';

export default function FiltersPanel({ 
  selAge, setSelAge, 
  selCat, setSelCat, 
  selCost, setSelCost,
  catCounts
}) {
  return (
    <div className={styles.panel} id="filters-panel">
      <div className={styles.heading}>My child's age</div>
      <div className={styles.ageButtonGroup}>
        {AGE_BUTTONS.map(a => (
          <button 
            key={a.val} 
            onClick={() => setSelAge(a.val)} 
            className={`${styles.ageButton} ${selAge === a.val ? styles.active : styles.inactive}`}
            aria-pressed={selAge === a.val}
          >
            {a.label}
          </button>
        ))}
      </div>
      
      <div className={styles.heading}>Category</div>
      <div className={styles.buttonGroup}>
        <button 
          onClick={() => setSelCat("All")} 
          className={`${styles.catButton} ${selCat === "All" ? styles.allActive : styles.allInactive}`}
          aria-pressed={selCat === "All"}
        >
          All
        </button>
        {CATS.map(c => (
          <button 
            key={c} 
            onClick={() => setSelCat(c)} 
            className={`${styles.catButton} ${selCat === c ? styles.active : styles.inactive}`}
            aria-pressed={selCat === c}
          >
            {CAT_EMOJI[c]} {c} <span className={styles.catCount}>({catCounts[c]})</span>
          </button>
        ))}
      </div>
      
      <div className={styles.heading}>Cost</div>
      <div className={styles.buttonGroup}>
        {["All", ...COST_ORDER].map(c => {
          const isActive = selCost === c;
          const bg = isActive ? (COST_COLOR[c] || "#2D8B7D") : "#F5F0EB";
          const color = isActive ? "#fff" : "#5D4E3A";
          
          return (
            <button 
              key={c} 
              onClick={() => setSelCost(c)} 
              style={{ background: bg, color: color }}
              className={styles.costButton}
              aria-pressed={isActive}
            >
              {c === "All" ? "All" : c === "Tiered - Check Provider" ? "Tiered - Check Provider" : c}
            </button>
          );
        })}
      </div>
    </div>
  );
}
