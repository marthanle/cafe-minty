import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to top on route change, or smoothly to an in-page section when
// the URL carries a hash (e.g. Header's Order/About links -> /#order).
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return null;
}
