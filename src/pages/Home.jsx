import { Link } from 'react-router-dom';
import CoverImage from '../components/CoverImage';
import RecipeCard from '../components/RecipeCard';
import WhatsHappening from '../components/WhatsHappening';
import { RECIPES_BY_ID, FEATURED_IDS } from '../data/recipes';
import storyImg from '../assets/images/story.jpg';
import styles from './Home.module.css';

const featured = FEATURED_IDS.map((id) => RECIPES_BY_ID[id]);

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Home café &amp; bakery</div>
        <h1 className={styles.heroTitle}>A little something, made for sharing.</h1>
        <p className={styles.heroBody}>
          I've always loved hosting. Café Minty is the matcha, coffee, and little desserts I make for whoever's
          around. Recipes to make at home, and pop-ups to show up for.
        </p>
        <div className={styles.heroActions}>
          <Link to="/recipes" className={styles.primaryButton}>
            Explore recipes
          </Link>
          <Link to="/#order" className={styles.secondaryButton}>
            See what's happening
          </Link>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <CoverImage
          src={storyImg}
          alt="The home kitchen and pop-up setup behind Café Minty"
          radius={8}
          className={styles.aboutImage}
        />
        <div>
          <div className={styles.eyebrow}>Our story</div>
          <h2 className={styles.aboutTitle}>Every recipe starts on our own counter before it ever reaches yours.</h2>
          <p className={styles.aboutBody}>
            Café Minty is one home baker's practice — testing small batches, writing them down properly, and turning
            the best ones into local pop-ups you can actually walk up to.
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.stats}>
          <div>
            <div className={styles.statTitle}>Small batch, always</div>
            <div className={styles.statBody}>Recipes tested in real home-kitchen quantities, not scaled-up guesses.</div>
          </div>
          <div>
            <div className={styles.statTitle}>Seasonal-forward</div>
            <div className={styles.statBody}>Menus shift with what's actually good right now.</div>
          </div>
          <div>
            <div className={styles.statTitle}>Matcha-first, growing</div>
            <div className={styles.statBody}>Started with matcha. Coffee and dessert followed — more categories ahead.</div>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredHeader}>
          <h2 className={styles.sectionTitle}>Featured recipes</h2>
          <Link to="/recipes" className={styles.viewAll}>
            View all recipes →
          </Link>
        </div>
        <div className={styles.featuredGrid}>
          {featured.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section id="order" className={styles.order}>
        <h2 className={styles.sectionTitle}>What's happening</h2>
        <WhatsHappening />
      </section>
    </div>
  );
}
