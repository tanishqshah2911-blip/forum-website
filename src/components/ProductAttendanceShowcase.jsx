import { useEffect, useState } from 'react';
import AttendanceTheater from './AttendanceTheater';

/**
 * Attendance flagship product page — same structure as Canteen.
 *   1. Hero (left: copy, right: Theater that opens on hover)
 *   2. System Flow (Detected → Verified → Logged → Reported → Synced)
 *   3. Tech stack tags
 *
 * Replace public/attendance.png to swap the product render.
 */

const IMG = '/attendance.png';

const FLOW = [
  { title: 'Employee Detected',  body: 'Camera + sensor activate' },
  { title: 'Identity Verified',  body: 'Face / fingerprint / RFID' },
  { title: 'Punch Logged',       body: 'Timestamped to the directory' },
  { title: 'Report Updated',     body: 'Daily / weekly view refreshed' },
  { title: 'Dashboard Synced',   body: 'HR sees it instantly' }
];

const TECH = [
  'Face Recognition', 'Fingerprint', 'RFID',
  'Touchscreen UI', 'PostgreSQL', 'Flask / API',
  'HR / Payroll Sync', 'Cloud / On-Prem'
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

export default function ProductAttendanceShowcase() {
  const imageReady = useImageReady(IMG);
  const hasImage = imageReady === true;

  return (
    <>
      {/* HERO + THEATER COMBINED ====================================
          Same layout as Canteen — single product image, opens on hover. */}
      <section className={`canteen-hero ${hasImage ? '' : 'no-image'}`}>
        <div className="canteen-hero-bg" aria-hidden="true">
          <span className="ch-grid" />
          <span className="ch-glow" />
        </div>

        <div className="container canteen-hero-grid">
          <div className="canteen-hero-text">
            <p className="eyebrow">Product · Attendance</p>
            <h1 className="canteen-hero-title">Smart biometric attendance automation system.</h1>
            <p className="canteen-hero-lede">
              A complete attendance terminal built for employee punch-in, biometric verification,
              RFID access, punch logs, reporting, and real-time dashboard visibility.
            </p>
            <p className="canteen-hover-hint">
              <span className="dot" /> Hover the unit to see the hardware
            </p>
          </div>

          {hasImage && (
            <div className="canteen-hero-stage">
              <AttendanceTheater />
            </div>
          )}
        </div>
      </section>

      {/* SYSTEM FLOW ============================================== */}
      <section id="flow" className="canteen-flow section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How Attendance works</p>
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
