import { tagsFor } from '../data/categories';
import styles from './CategoryTags.module.css';

export default function CategoryTags({ categories }) {
  return (
    <div className={styles.row}>
      {tagsFor(categories).map((tag) => (
        <span key={tag.key} className={styles.tag} style={{ background: tag.bg, color: tag.text }}>
          {tag.label}
        </span>
      ))}
    </div>
  );
}
