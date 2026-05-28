import { useEffect, useRef, useState } from 'react';

/**
 * From idea to engineered system — premium horizontal timeline.
 *
 * Six steps in ONE row on desktop. Stacks vertically on mobile.
 * Reveals once on scroll: gold line draws left-to-right, nodes
 * fade in with a small stagger, a single traveler dot moves
 * across once. Then the section sits calm and stable. No loops.
 */
const STEPS = [
  {
    title: 'Idea',
    sub: 'Problem framed, scope clear',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 18 H15" />
        <path d="M10 21 H14" />
        <path d="M7.5 13 A4.5 4.5 0 1 1 16.5 13 C 16.5 15 14.5 16 14.5 17 H9.5 C9.5 16 7.5 15 7.5 13 Z" />
      </g>
    )
  },
  {
    title: 'Engineering',
    sub: 'Architecture, plan, blueprint',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="9" x2="20" y2="9" strokeWidth="0.8" opacity="0.5" />
        <line x1="4" y1="14" x2="20" y2="14" strokeWidth="0.8" opacity="0.5" />
        <line x1="9" y1="4" x2="9" y2="20" strokeWidth="0.8" opacity="0.5" />
        <line x1="14" y1="4" x2="14" y2="20" strokeWidth="0.8" opacity="0.5" />
        <path d="M6 16 L10 12 L14 14 L18 8" strokeWidth="1.5" />
      </g>
    )
  },
  {
    title: 'Hardware',
    sub: 'Sensors, devices, terminals',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="9" y="9" width="6" height="6" fill="currentColor" stroke="none" opacity="0.3" />
        <line x1="6" y1="10" x2="3" y2="10" />
        <line x1="6" y1="14" x2="3" y2="14" />
        <line x1="18" y1="10" x2="21" y2="10" />
        <line x1="18" y1="14" x2="21" y2="14" />
        <line x1="10" y1="6" x2="10" y2="3" />
        <line x1="14" y1="6" x2="14" y2="3" />
        <line x1="10" y1="18" x2="10" y2="21" />
        <line x1="14" y1="18" x2="14" y2="21" />
      </g>
    )
  },
  {
    title: 'Software',
    sub: 'Logic, services, integrations',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9,8 5,12 9,16" />
        <polyline points="15,8 19,12 15,16" />
        <line x1="13.5" y1="6.5" x2="10.5" y2="17.5" />
      </g>
    )
  },
  {
    title: 'Dashboard',
    sub: 'Visibility, alerts, controls',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <rect x="6" y="6" width="5" height="4" fill="currentColor" stroke="none" opacity="0.45" />
        <rect x="13" y="6" width="5" height="2" fill="currentColor" stroke="none" opacity="0.45" />
        <rect x="13" y="10" width="3" height="2" fill="currentColor" stroke="none" opacity="0.65" />
        <polyline points="6,18 10,15 13,16 18,11" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    )
  },
  {
    title: 'Automation',
    sub: 'Decisions made, actions taken',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="4" x2="12" y2="6.5" />
        <line x1="12" y1="17.5" x2="12" y2="20" />
        <line x1="4" y1="12" x2="6.5" y2="12" />
        <line x1="17.5" y1="12" x2="20" y2="12" />
        <line x1="6.3" y1="6.3" x2="8" y2="8" />
        <line x1="16" y1="16" x2="17.7" y2="17.7" />
        <line x1="17.7" y1="6.3" x2="16" y2="8" />
        <line x1="8" y1="16" x2="6.3" y2="17.7" />
      </g>
    )
  }
];

export default function SystemFlow() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="system-flow section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">From idea to engineered system</p>
          <h2>Every Forum build follows the same arc.</h2>
          <p className="section-lede">
            An idea becomes a plan. The plan becomes hardware and software.
            Those become a dashboard. The dashboard becomes automation that
            quietly runs your business.
          </p>
        </div>

        <div ref={ref} className={`sf-timeline ${visible ? 'is-visible' : ''}`}>
          {/* Thin gold line behind the icons */}
          <span className="sf-line" aria-hidden="true" />
          {/* Continuous golden spark + 2 trailing particles —
              loops along the line from Idea to Automation. */}
          <span className="sf-traveler" aria-hidden="true" />
          <span className="sf-traveler sf-traveler-trail-1" aria-hidden="true" />
          <span className="sf-traveler sf-traveler-trail-2" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <div key={step.title} className="sf-step" style={{ '--i': i }}>
              <div className="sf-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{step.icon}</svg>
              </div>
              <p className="sf-title">{step.title}</p>
              <p className="sf-sub">{step.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
