import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const onRecipes = location.pathname.startsWith('/recipes');

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Café Minty
      </Link>
      <nav className={styles.nav}>
        <Link to="/#about" className={styles.navLink}>
          About
        </Link>
        <Link to="/recipes" className={onRecipes ? styles.navActive : styles.navLink}>
          Recipes
        </Link>
        <Link to="/#order" className={styles.navLink}>
          Order
        </Link>
      </nav>
    </header>
  );
}
