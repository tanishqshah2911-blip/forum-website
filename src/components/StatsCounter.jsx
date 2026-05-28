import { useEffect, useRef, useState } from 'react';

/**
 * Animated stats / counter section.
 *
 *   Years of Experience · Cities · Customers Engaged · End Users
 *
 * Numbers count up smoothly when the section first scrolls into
 * view. After the first reveal, the values stay settled — no
 * replay on every scroll. Pure React, single IntersectionObserver,
 * one rAF loop per stat — no external libraries.
 *
 * Theme: matches the rest of the site — dark background, cream
 * text, subtle gold accent on the numbers, premium minimal feel.
 */

const STATS = [
  { value: 1,    label: 'Years of Experience' },
  { value: 8,    label: 'Cities' },
  { value: 10,   label: 'Customers Engaged' },
  { value: 5000, label: 'End Users',           suffix: '+' }
];

const DURATION = 1800;   // total count-up time (ms)
const STAGGER  = 140;    // delay between stats (ms)

/* easeOutCubic — smooth deceleration, matches the site's easing
 * shape (cubic-bezier(0.22, 1, 0.36, 1) is similar). */
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function StatsCounter() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  // Trigger the count-up once when the section enters view.
  useEffect(() => {
    const el = ref.current;
    if (!el) { setActive(true); return; }
    if (!('IntersectionObserver' in window)) { setActive(true); return; }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section section">
      <div className="container">
        {/* Premium section header — picks up the site-wide
            heading reveal (clip-path mask + blur clear + accent
            glow) automatically via .section-head. The lede gets
            the standard cascade fade-up. */}
        <div className="section-head stats-head">
          <h2>Built for connected operations.</h2>
          <p className="section-lede">
            The Forum brings software, devices, dashboards, and support systems
            together into one reliable ecosystem for modern businesses.
          </p>
        </div>

        <div ref={ref} className={`stats-grid ${active ? 'is-active' : ''}`}>
          {STATS.map((s, i) => (
            <StatTile
              key={s.label}
              target={s.value}
              suffix={s.suffix || ''}
              label={s.label}
              active={active}
              delay={i * STAGGER}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* — Single stat card with its own count-up rAF loop — */
function StatTile({ target, suffix, label, active, delay, index }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return;
    }

    let raf = 0;
    let start = 0;
    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const t = Math.min(1, elapsed / DURATION);
      const eased = easeOut(t);
      setDisplay(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, delay]);

  // Format with commas for large numbers (e.g. 5,000)
  const formatted = display.toLocaleString();

  return (
    <div className="stat-tile" style={{ '--stat-i': index }}>
      <span className="stat-number" aria-label={`${target}${suffix}`}>
        <span className="stat-number-value">{formatted}</span>
        {suffix && <span className="stat-number-suffix">{suffix}</span>}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
