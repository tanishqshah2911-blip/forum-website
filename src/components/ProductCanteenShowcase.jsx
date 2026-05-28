import { useEffect, useState } from 'react';
import CanteenTheater from './CanteenTheater';

/**
 * Canteen flagship product page.
 *
 * Sections:
 *   1. Hero — copy on the left, product render on the right.
 *      Image background is transparent (processed once with PIL),
 *      so it blends with the page. No watermark.
 *   2. Product Theater — the device opens up, revealing internal
 *      components (top/middle/bottom layers split apart, PCB
 *      visible in the gap, labels appear).
 *   3. System Flow — Employee → Order → Logged → Billing → Synced.
 *   4. Tech stack tags.
 */

const IMG = '/canteen.png';

const FLOW = [
  { title: 'Employee Identified', body: 'Face / fingerprint / RFID' },
  { title: 'Order Selected',      body: "Today's items, on-screen" },
  { title: 'Order Logged',        body: 'Token issued, kitchen notified' },
  { title: 'Billing Updated',     body: 'Salary-linked deduction queued' },
  { title: 'Dashboard Synced',    body: 'Manager sees it instantly' }
];

const TECH = [
  'Face Recognition', 'Fingerprint', 'RFID',
  'Touchscreen UI', 'PostgreSQL', 'Flask / API',
  'Manager Dashboard', 'Cloud / On-Prem Sync'
];

function useImageReady(src) {
  const [ready, setReady] = useState(null);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload  = () => { if (!cancelled) setReady(true); };
    img.onerror = () => { if (!cancelled) setReady(false); };
    img.src = src;
    return () => { cancelled = true; };
  }, [src]);
  return ready;
}

export default function ProductCanteenShowcase() {
  const imageReady = useImageReady(IMG);
  const hasImage = imageReady === true;

  return (
    <>
      {/* HERO + THEATER COMBINED — one product image, opens on hover.
          Left: copy. Right: the interactive Theater. */}
      <section className={`canteen-hero ${hasImage ? '' : 'no-image'}`}>
        <div className="canteen-hero-bg" aria-hidden="true">
          <span className="ch-grid" />
          <span className="ch-glow" />
        </div>

        <div className="container canteen-hero-grid">
          <div className="canteen-hero-text">
            <p className="eyebrow">Product · Canteen</p>
            <h1 className="canteen-hero-title">Smart biometric canteen automation system.</h1>
            <p className="canteen-hero-lede">
              A complete canteen management terminal built for employee authentication,
              order control, billing automation, and real-time manager visibility.
              Face, fingerprint, and RFID — pick what works, walk up, eat, go.
            </p>
            <p className="canteen-hover-hint">
              <span className="dot" /> Hover the unit to see the hardware
            </p>
          </div>

          {hasImage && (
            <div className="canteen-hero-stage">
              <CanteenTheater />
            </div>
          )}
        </div>
      </section>

      {/* SYSTEM FLOW =============================================== */}
      <section id="flow" className="canteen-flow section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How Canteen works</p>
            <h2>From scan to dashboard, in seconds.</h2>
          </div>
          <ol className="cflow">
            {FLOW.map((step, i) => (
              <li key={i} className="cflow-step" style={{ '--i': i }}>
                <span className="cflow-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {i < FLOW.length - 1 && (
                  <span className="cflow-connector" aria-hidden="true">
                    <span className="cflow-packet" style={{ '--delay': `${i * 0.6}s` }} />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="cstack">
            <p className="eyebrow cstack-eyebrow">Technology stack</p>
            <div className="cstack-tags">
              {TECH.map((t, i) => (
                <span key={t} className="cstack-tag" style={{ '--i': i }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
