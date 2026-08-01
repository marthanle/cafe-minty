import { Link, useParams } from 'react-router-dom';
import CoverImage from '../components/CoverImage';
import { getRecipe, detailMeta, relatedRecipes } from '../data/recipes';
import { CATEGORY_STYLE, categoryLabel } from '../data/categories';
import styles from './RecipeDetail.module.css';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = getRecipe(id);

  if (!recipe) {
    return (
      <section className={styles.page}>
        <p className={styles.notFound}>Couldn't find that recipe.</p>
        <Link to="/recipes" className={styles.backLink}>
          ← Back to recipes
        </Link>
      </section>
    );
  }

  const primaryCategory = recipe.categories[0];
  const catStyle = CATEGORY_STYLE[primaryCategory];
  const related = relatedRecipes(recipe);

  return (
    <section className={styles.page}>
      <Link to="/recipes" className={styles.backLink}>
        ← Back to recipes
      </Link>

      <CoverImage
        src={recipe.image}
        alt={recipe.title}
        focal={recipe.imageFocal}
        radius={4}
        className={styles.hero}
      />

      <div className={styles.body}>
        <div className={styles.tag} style={{ color: catStyle.text }}>
          {categoryLabel(primaryCategory)}
        </div>
        <h1 className={styles.title}>{recipe.title}</h1>
        <div className={styles.meta}>{detailMeta(recipe)}</div>

        {recipe.note && <p className={styles.note}>{recipe.note}</p>}
        {recipe.credit && <div className={styles.credit}>{recipe.credit}</div>}

        <div className={styles.label}>Ingredients</div>
        <div className={styles.ingredients}>
          {recipe.ingredientGroups.map((group, i) => (
            <div key={i} className={i > 0 ? styles.groupSpaced : undefined}>
              {group.label && <div className={styles.groupLabel}>{group.label}</div>}
              {group.items.map((item, j) => (
                <div key={j}>{item}</div>
              ))}
              {group.footnote && <div className={styles.footnote}>{group.footnote}</div>}
            </div>
          ))}
        </div>

        <div className={styles.label}>Steps</div>
        <div className={styles.steps}>
          {recipe.stepGroups.map((group, i) => (
            <div key={i} className={i > 0 ? styles.stepGroupSpaced : undefined}>
              {group.label && <div className={styles.stepGroupLabel}>{group.label}</div>}
              {group.items.map((step, j) => (
                <div key={j} className={styles.step}>
                  <div className={styles.stepNumber}>{j + 1}</div>
                  <div className={styles.stepText}>{step}</div>
                </div>
              ))}
              {group.footnote && <div className={styles.stepFootnote}>{group.footnote}</div>}
            </div>
          ))}
          {recipe.stepsFootnote && <div className={styles.stepsFootnote}>{recipe.stepsFootnote}</div>}
        </div>
      </div>

      {related.length > 0 && (
        <div className={styles.related}>
          <div className={styles.relatedLabel}>More {primaryCategory} recipes</div>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link key={r.id} to={`/recipes/${r.id}`} className={styles.relatedItem}>
                <CoverImage src={r.image} alt={r.title} focal={r.imageFocal} radius={6} className={styles.relatedImage} />
                <div className={styles.relatedTitle}>{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
