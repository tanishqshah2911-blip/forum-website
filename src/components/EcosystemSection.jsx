import { useEffect, useRef, useState } from 'react';

/**
 * "Everything connected. Everything visible."
 *
 * Premium 4-panel flow that explains The Forum's full system:
 *   Build → Connect → Monitor → Automate
 *
 * Click any panel to expand it: the selected card grows wider,
 * brightens its border, and reveals its full description. The
 * other three stay compact (icon + title only) but visible.
 * "Build" is selected by default. Reveals once on scroll-in.
 *
 * Pure CSS / SVG, no canvas.
 */

const PANELS = [
  {
    id: 'build',
    title: 'Build',
    body: 'Custom websites, devices, ERP systems, CCTV, and product systems.',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Blueprint grid + tool */}
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <line x1="6"  y1="14" x2="42" y2="14" strokeWidth="0.6" opacity="0.4" />
        <line x1="6"  y1="26" x2="42" y2="26" strokeWidth="0.6" opacity="0.4" />
        <line x1="6"  y1="34" x2="42" y2="34" strokeWidth="0.6" opacity="0.4" />
        <line x1="18" y1="6"  x2="18" y2="42" strokeWidth="0.6" opacity="0.4" />
        <line x1="30" y1="6"  x2="30" y2="42" strokeWidth="0.6" opacity="0.4" />
        {/* Plan path drawn over the grid */}
        <path d="M 12 32 L 20 22 L 28 26 L 36 16" strokeWidth="1.6" />
        <circle cx="12" cy="32" r="1.6" fill="currentColor" />
        <circle cx="36" cy="16" r="1.6" fill="currentColor" />
      </g>
    )
  },
  {
    id: 'connect',
    title: 'Connect',
    body: 'Biometrics, RFID, sensors, databases, devices, APIs, and cloud / on-prem systems.',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        {/* Central hub */}
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <circle cx="24" cy="24" r="8" opacity="0.5" />
        {/* Satellite nodes */}
        <circle cx="8"  cy="10" r="2.4" fill="currentColor" />
        <circle cx="40" cy="10" r="2.4" fill="currentColor" />
        <circle cx="8"  cy="38" r="2.4" fill="currentColor" />
        <circle cx="40" cy="38" r="2.4" fill="currentColor" />
        {/* Connector lines hub → satellites */}
        <line x1="24" y1="24" x2="9"  y2="11" opacity="0.6" />
        <line x1="24" y1="24" x2="39" y2="11" opacity="0.6" />
        <line x1="24" y1="24" x2="9"  y2="37" opacity="0.6" />
        <line x1="24" y1="24" x2="39" y2="37" opacity="0.6" />
      </g>
    )
  },
  {
    id: 'monitor',
    title: 'Monitor',
    body: 'Live dashboards, logs, reports, alerts, status, and real-time visibility.',
    icon: (
      <g>
        {/* Dashboard frame */}
        <rect x="4" y="6" width="40" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <line x1="4" y1="13" x2="44" y2="13" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        {/* Status dot */}
        <circle cx="40" cy="9.5" r="1.2" fill="#22c55e" className="ecos-monitor-blink" />
        {/* Stat tiles */}
        <rect x="7"  y="16" width="10" height="6" rx="0.6" fill="currentColor" opacity="0.32" />
        <rect x="19" y="16" width="10" height="6" rx="0.6" fill="currentColor" opacity="0.32" />
        <rect x="31" y="16" width="10" height="6" rx="0.6" fill="currentColor" opacity="0.5" />
        {/* Animated bar chart */}
        <rect x="7"  y="32" width="3" height="6"  fill="currentColor" opacity="0.6" className="ecos-bar ecos-bar-1" />
        <rect x="12" y="29" width="3" height="9"  fill="currentColor" opacity="0.7" className="ecos-bar ecos-bar-2" />
        <rect x="17" y="33" width="3" height="5"  fill="currentColor" opacity="0.55" className="ecos-bar ecos-bar-3" />
        <rect x="22" y="27" width="3" height="11" fill="currentColor" opacity="0.8" className="ecos-bar ecos-bar-4" />
        <rect x="27" y="30" width="3" height="8"  fill="currentColor" opacity="0.65" className="ecos-bar ecos-bar-5" />
        {/* Sparkline */}
        <polyline points="33,38 36,34 39,36 42,30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </g>
    )
  },
  {
    id: 'automate',
    title: 'Automate',
    body: 'Billing, attendance, controls, decisions, workflows, and operational actions.',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        {/* Big gear */}
        <circle cx="24" cy="24" r="6" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <line x1="24" y1="10" x2="24" y2="14" />
        <line x1="24" y1="34" x2="24" y2="38" />
        <line x1="10" y1="24" x2="14" y2="24" />
        <line x1="34" y1="24" x2="38" y2="24" />
        <line x1="14" y1="14" x2="17" y2="17" />
        <line x1="31" y1="31" x2="34" y2="34" />
        <line x1="34" y1="14" x2="31" y2="17" />
        <line x1="14" y1="34" x2="17" y2="31" />
      </g>
    )
  }
];

export default function EcosystemSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  /* Click-to-expand selection. "build" is selected by default. */
  const [selected, setSelected] = useState('build');

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return; }
    /* Start the reveal slightly BEFORE the panels are fully in
       view. Positive bottom rootMargin extends the intersection
       root downward by 160px, so Section 2 begins emerging while
       the hero is still scrolling away. Removes the perceived
       "pop" at the boundary. */
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 160px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSelect = (id) => setSelected(id);
  const handleKey = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelected(id);
    }
  };

  return (
    <section className="ecos section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The Forum connected ecosystem</p>
          <h2>Everything connected. Everything visible.</h2>
          <p className="section-lede">
            From canteen terminals and attendance devices to ERP, CCTV, and maintenance
            workflows — The Forum connects every system into one clear operational layer.
          </p>
        </div>

        <div
          ref={ref}
          className={`ecos-flow ${visible ? 'is-visible' : ''}`}
          role="tablist"
          aria-label="The Forum ecosystem stages"
        >
          {PANELS.map((p, i) => {
            const active = selected === p.id;
            return (
              <div
                key={p.id}
                className={`ecos-panel ecos-panel-${p.id} ${active ? 'is-active' : ''}`}
                style={{ '--i': i }}
                role="tab"
                tabIndex={0}
                aria-selected={active}
                aria-label={`${p.title}: ${p.body}`}
                onClick={() => handleSelect(p.id)}
                onKeyDown={(e) => handleKey(e, p.id)}
              >
                <div className="ecos-icon">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">{p.icon}</svg>
                </div>
                <h3 className="ecos-title">{p.title}</h3>
                <p className="ecos-body">{p.body}</p>

                {/* Connector to the next panel */}
                {i < PANELS.length - 1 && (
                  <span className="ecos-connector" aria-hidden="true">
                    <span className="ecos-packet" style={{ '--delay': `${i * 0.7}s` }} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
