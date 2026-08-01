import { Link } from 'react-router-dom';
import CoverImage from './CoverImage';
import CategoryTags from './CategoryTags';
import styles from './RecipeCard.module.css';

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className={styles.card}>
      <CoverImage src={recipe.image} alt={recipe.title} focal={recipe.imageFocal} className={styles.image} />
      <div className={styles.body}>
        <CategoryTags categories={recipe.categories} />
        <div className={styles.title}>{recipe.title}</div>
      </div>
    </Link>
  );
}
