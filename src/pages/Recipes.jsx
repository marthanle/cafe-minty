import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { RECIPES } from '../data/recipes';
import { CATEGORY_STYLE, CATEGORY_ORDER, categoryLabel } from '../data/categories';
import styles from './Recipes.module.css';

const FILTERS = ['all', ...CATEGORY_ORDER];

export default function Recipes() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? RECIPES : RECIPES.filter((r) => r.categories.includes(filter));

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Recipes</h1>

      <div className={styles.pills}>
        {FILTERS.map((key) => {
          const active = filter === key;
          const isAll = key === 'all';
          const style = isAll
            ? { background: active ? '#2B2A26' : '#FFFFFF', color: active ? '#F6F0E4' : '#2B2A26', border: active ? 'none' : '0.5px solid #E3DFD2' }
            : { background: CATEGORY_STYLE[key].bg, color: CATEGORY_STYLE[key].text, opacity: active ? 1 : 0.55 };
          return (
            <button key={key} type="button" onClick={() => setFilter(key)} className={styles.pill} style={style}>
              {isAll ? 'All' : categoryLabel(key)}
            </button>
          );
        })}
      </div>

      <div className={styles.grid}>
        {visible.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
