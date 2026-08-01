import { useEffect, useRef, useState } from 'react';
import idleImg from '../assets/images/mascot-idle.webp';
import waveImg from '../assets/images/mascot-wave.webp';
import styles from './MascotWave.module.css';

const AUTO_WAVE_INTERVAL = 7000;
const WAVE_DURATION = 900;

export default function MascotWave({ className = '' }) {
  const [waving, setWaving] = useState(false);
  const resetTimer = useRef(null);

  const triggerWave = () => {
    setWaving(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setWaving(false), WAVE_DURATION);
  };

  useEffect(() => {
    const loop = setInterval(triggerWave, AUTO_WAVE_INTERVAL);
    return () => {
      clearInterval(loop);
      clearTimeout(resetTimer.current);
    };
  }, []);

  return (
    <button
      type="button"
      className={`${styles.mascot} ${waving ? styles.waving : ''} ${className}`}
      onMouseEnter={triggerWave}
      onClick={triggerWave}
      aria-label="Say hi"
    >
      <img src={idleImg} alt="" className={`${styles.frame} ${styles.idle}`} />
      <img src={waveImg} alt="" className={`${styles.frame} ${styles.wave}`} />
    </button>
  );
}
