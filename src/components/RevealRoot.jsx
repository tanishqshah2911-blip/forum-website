import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Selectors that should auto-reveal as they enter view. The
 * shared `.reveal` class (defined in animations.css) gives all
 * of these the same emergence motion: opacity + translateY +
 * subtle scale on cubic-bezier(0.22, 1, 0.36, 1).
 *
 * Note: parent grids (e.g. .capability-grid) are NOT in this
 * list — their children already self-reveal via .capability-card,
 * so adding the parent would double up the animation. */
const SELECTORS = [
  '.section-head',
  '.card',
  '.product-card',
  '.capability-card',
  '.process-step',
  '.faq-item',
  '.customizer-summary',
  '.dashboard-illustration',
  '.catalogue-note',
  '.cex-stage',          // Canteen technical-focus reveal
  '.cs-item',            // Canteen subsystem cards
  '.contact-form-wrap',  // Contact section glass card
  '.contact-intro',      // Contact section text block
  '.contact-chips',      // chip strip on contact + product pages
  '.theater'             // Product detail theater
];

const GLOW_SELECTOR = '.product-card, .capability-card, .process-step, .variation-card, a.card-link';

// On every route change, finds the new content's reveal targets and observes them.
export default function RevealRoot({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    // Wait a tick so React has rendered the new route
    const tick = window.requestAnimationFrame(() => {
      const candidates = document.querySelectorAll(SELECTORS.join(','));
      candidates.forEach(el => {
        if (el.closest('.hero, .detail-hero, .page-header')) return;
        if (!el.classList.contains('reveal') && !el.classList.contains('is-visible')) {
          el.classList.add('reveal');
        }
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

      document
        .querySelectorAll('.reveal:not(.is-visible)')
        .forEach(el => observer.observe(el));

      return () => observer.disconnect();
    });

    return () => window.cancelAnimationFrame(tick);
  }, [pathname]);

  // Cursor-following glow + 3D tilt on cards
  useEffect(() => {
    // Skip the dynamic effects when user prefers reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frame = null;
    let lastTarget = null;

    const onMove = (e) => {
      const target = e.target.closest && e.target.closest(GLOW_SELECTOR);
      if (!target) return;
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        // Glow position (0-100%)
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;
        const yPct = ((e.clientY - rect.top) / rect.height) * 100;
        target.style.setProperty('--mx', xPct + '%');
        target.style.setProperty('--my', yPct + '%');

        // 3D tilt — rotate based on cursor offset from card center.
        // Capped at ±5° so it stays tasteful, not gimmicky.
        if (!reducedMotion) {
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) / (rect.width / 2);   // -1..1
          const dy = (e.clientY - cy) / (rect.height / 2);  // -1..1
          const tiltX = -dy * 5;
          const tiltY = dx * 5;
          target.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
          target.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
        }
        lastTarget = target;
      });
    };

    const onOut = (e) => {
      const target = e.target.closest && e.target.closest(GLOW_SELECTOR);
      if (target && target === lastTarget) {
        target.style.setProperty('--mx', '50%');
        target.style.setProperty('--my', '50%');
        target.style.setProperty('--tilt-x', '0deg');
        target.style.setProperty('--tilt-y', '0deg');
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onOut);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <>{children}</>;
}
