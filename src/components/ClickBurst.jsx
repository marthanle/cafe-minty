import { useEffect, useRef } from 'react';
import './ClickBurst.css';

const SAGE = ['#7C9A63', '#9AB584', '#4F6339'];
const PARTICLE_COUNT = 34;

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// A matcha-powder puff at every click, site-wide.
export default function ClickBurst() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onClick(e) {
      if (e.button !== 0) return;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const angle = rand(0, Math.PI * 2);
        const dist = rand(10, 52);
        const el = document.createElement('span');
        el.className = 'click-burst-particle';
        const size = rand(1.5, 5);
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
        el.style.background = pick(SAGE);
        el.style.opacity = String(rand(0.55, 0.9));
        el.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
        el.style.setProperty('--ty', `${Math.sin(angle) * dist - rand(4, 18)}px`);
        el.style.animation = `click-burst-puff ${rand(360, 520)}ms ease-out forwards`;
        overlay.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
        if (reduced) setTimeout(() => el.remove(), 50);
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return <div ref={overlayRef} className="click-burst-overlay" aria-hidden="true" />;
}
