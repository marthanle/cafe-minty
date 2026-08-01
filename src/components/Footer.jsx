import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wordmark}>Café Minty</div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/xoxolovemartha/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@marthanle" target="_blank" rel="noreferrer">
          TikTok
        </a>
      </div>
      <div className={styles.copy}>© {new Date().getFullYear()} Café Minty</div>
    </footer>
  );
}
