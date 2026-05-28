import { useEffect, useRef } from 'react';

/**
 * Engineering Command Core — the cinematic centerpiece of the Home hero.
 *
 * One unified composition (not scattered boxes):
 *   • Concentric orbit rings rotating at different speeds
 *   • Six product satellites representing The Forum's capabilities
 *     (face / fingerprint / RFID / sensor / CCTV / dashboard)
 *   • A central hexagonal hub with a live mini-dashboard inside
 *   • Radial light beams + atmospheric glow + traveling data packets
 *   • Mouse-parallax tilt on the whole core (depth feel)
 *
 * All inline SVG, CSS-driven motion. No external dependencies.
 * Skipped on prefers-reduced-motion.
 */

const SatelliteIcon = ({ name }) => {
  const map = {
    face: (
      <g>
        <circle cx="0" cy="0" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="-3" cy="-2" r="0.9" fill="currentColor" />
        <circle cx="3" cy="-2" r="0.9" fill="currentColor" />
        <path d="M -3 3 Q 0 5 3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </g>
    ),
    fingerprint: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M 0 -7 C -4 -7 -6 -4 -6 0 L -6 4" />
        <path d="M 0 -4 C -2.5 -4 -3.5 -2 -3.5 0 L -3.5 5" />
        <path d="M 0 -1 C -1 -1 -1 0 -1 1.5 L -1 7" />
        <path d="M 2 -4 C 4 -3 4 0 4 2" />
        <path d="M 5 -1 C 6 0 6 2 6 3" />
      </g>
    ),
    rfid: (
      <g>
        <rect x="-7" y="-4" width="14" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <line x1="-5" y1="-1" x2="-1" y2="-1" stroke="currentColor" strokeWidth="1" />
        <line x1="-5" y1="2" x2="2" y2="2" stroke="currentColor" strokeWidth="1" />
        <path d="M 4 -1 Q 5 1 4 3" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 6 -2.5 Q 8 1 6 4" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>
    ),
    sensor: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M -8 0 Q -4 -5 0 0 T 8 0" />
        <path d="M -8 4 Q -4 -1 0 4 T 8 4" opacity="0.5" />
        <path d="M -8 -4 Q -4 -9 0 -4 T 8 -4" opacity="0.5" />
        <circle cx="0" cy="0" r="1.2" fill="currentColor" />
      </g>
    ),
    cctv: (
      <g>
        <rect x="-7" y="-4" width="11" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M 4 -2 L 8 -4 L 8 4 L 4 2 Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="-2" cy="0" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="-2" cy="0" r="0.7" fill="currentColor" />
      </g>
    ),
    dashboard: (
      <g>
        <rect x="-8" y="-5" width="16" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <rect x="-6" y="-3" width="5" height="3" fill="currentColor" opacity="0.5" />
        <rect x="0" y="-3" width="6" height="1.5" fill="currentColor" opacity="0.5" />
        <rect x="0" y="-0.5" width="3.5" height="1.5" fill="currentColor" opacity="0.7" />
        <polyline points="-6,4 -3,2 0,3 3,1 6,2" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>
    )
  };
  return map[name] || null;
};

export default function EngineeringCore() {
  const ref = useRef(null);

  // Mouse-parallax tilt — only active while the hero is in view
  // and throttled to ~30fps so we're not fighting the orbit
  // animations for the GPU on every frame.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let frame = null;
    let lastTime = 0;
    let visible = true;

    // Stop updating once the hero scrolls out of view
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    observer.observe(el);

    const onMove = (e) => {
      if (!visible) return;
      const now = performance.now();
      // ~30fps cap — the orbit CSS animations need GPU time too
      if (now - lastTime < 32) return;
      lastTime = now;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Gentler ±6° tilt — feels weighted, not jittery
        const dx = (e.clientX - cx) / window.innerWidth;
        const dy = (e.clientY - cy) / window.innerHeight;
        el.style.setProperty('--ec-rx', (-dy * 6).toFixed(2) + 'deg');
        el.style.setProperty('--ec-ry', (dx * 6).toFixed(2) + 'deg');
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Six product satellites around the mid orbit (60° apart, top-first)
  const satellites = [
    { angle: -90,  name: 'face',        label: 'Biometric' },
    { angle: -30,  name: 'sensor',      label: 'IoT / Vayu' },
    { angle: 30,   name: 'cctv',        label: 'Surveillance' },
    { angle: 90,   name: 'dashboard',   label: 'Console / ERP' },
    { angle: 150,  name: 'fingerprint', label: 'Attendance' },
    { angle: 210,  name: 'rfid',        label: 'Access' }
  ];
  const orbit = 220; // satellite distance from center

  return (
    <div ref={ref} className="engineering-core" aria-hidden="true">
      {/* Atmospheric backdrop (radial glow) */}
      <div className="ec-atmosphere" />

      <svg viewBox="0 0 600 600" className="ec-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Smooth ring gradient so arcs fade at the edges */}
          <linearGradient id="ec-arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          {/* Beam gradient for radial light spokes */}
          <linearGradient id="ec-beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          {/* Soft halo behind the central hub */}
          <radialGradient id="ec-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Hub backdrop glow */}
        <circle cx="300" cy="300" r="200" fill="url(#ec-hub-glow)" />

        {/* OUTER ORBIT — big ring with tick marks, slow rotation */}
        <g className="ec-orbit ec-orbit-1">
          <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.12" />
          <circle cx="300" cy="300" r="280" fill="none" stroke="url(#ec-arc)" strokeWidth="1.8" strokeDasharray="120 320" />
          {/* 24 tick marks on the outer ring */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 15 - 90) * Math.PI / 180;
            const x1 = 300 + Math.cos(a) * 274;
            const y1 = 300 + Math.sin(a) * 274;
            const x2 = 300 + Math.cos(a) * 280;
            const y2 = 300 + Math.sin(a) * 280;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.6" opacity={i % 6 === 0 ? 0.9 : 0.35} />;
          })}
        </g>

        {/* SATELLITE ORBIT — counter-rotating ring carrying product nodes */}
        <g className="ec-orbit ec-orbit-2">
          <circle cx="300" cy="300" r={orbit} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.32" />
          {satellites.map((s, i) => {
            const a = s.angle * Math.PI / 180;
            const x = 300 + Math.cos(a) * orbit;
            const y = 300 + Math.sin(a) * orbit;
            return (
              <g key={i} transform={`translate(${x}, ${y})`} className="ec-sat">
                {/* Counter-rotate so satellite icons stay upright */}
                <g className="ec-sat-spin">
                  <circle r="22" fill="var(--bg)" stroke="currentColor" strokeWidth="1.2" />
                  <circle r="22" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" className="ec-sat-pulse" />
                  <SatelliteIcon name={s.name} />
                </g>
              </g>
            );
          })}
        </g>

        {/* INNER RING — segmented, faster rotation */}
        <g className="ec-orbit ec-orbit-3">
          <circle cx="300" cy="300" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="40 24" opacity="0.55" />
          <circle cx="300" cy="300" r="148" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* RADIAL LIGHT BEAMS — 6 spokes from center, slow rotation */}
        <g className="ec-beams" transform="translate(300, 300)">
          {[0, 60, 120, 180, 240, 300].map(a => (
            <line
              key={a}
              x1="0" y1="0"
              x2={Math.cos((a - 90) * Math.PI / 180) * 280}
              y2={Math.sin((a - 90) * Math.PI / 180) * 280}
              stroke="url(#ec-beam)"
              strokeWidth="1.4"
              opacity="0.6"
            />
          ))}
        </g>

        {/* TRAVELING DATA PACKETS — 3 dots ride the satellite orbit ring.
            Rendered as CSS-rotated nodes (no SMIL) so they composite on
            the GPU instead of forcing per-frame SVG repaints. */}
        <g className="ec-packets" transform-origin="300 300">
          <g className="ec-packets-spin">
            <circle cx={300 + orbit} cy="300" r="2.6" fill="currentColor" className="ec-packet" />
            <g transform="rotate(120 300 300)">
              <circle cx={300 + orbit} cy="300" r="2.6" fill="currentColor" className="ec-packet" />
            </g>
            <g transform="rotate(240 300 300)">
              <circle cx={300 + orbit} cy="300" r="2.6" fill="currentColor" className="ec-packet" />
            </g>
          </g>
        </g>

        {/* CENTRAL HUB — hexagonal frame with mini-dashboard inside */}
        <g transform="translate(300, 300)" className="ec-hub">
          {/* Outer hexagon ring */}
          <polygon
            points="0,-100 86.6,-50 86.6,50 0,100 -86.6,50 -86.6,-50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.7"
          />
          {/* Inner hexagon */}
          <polygon
            points="0,-78 67.5,-39 67.5,39 0,78 -67.5,39 -67.5,-39"
            fill="var(--bg)"
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.95"
          />
          {/* Hexagon corner markers */}
          {[[0,-100],[86.6,-50],[86.6,50],[0,100],[-86.6,50],[-86.6,-50]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="currentColor" />
          ))}

          {/* MINI DASHBOARD — 4 quadrants of live-feeling content */}
          {/* Top-left: bar chart */}
          <g transform="translate(-46, -36)">
            <text x="0" y="-6" fontSize="5" fontFamily="Inter, sans-serif" fill="currentColor" opacity="0.5" letterSpacing="1">METRICS</text>
            <rect x="0" y="0" width="6" height="22" fill="currentColor" opacity="0.4" />
            <rect x="9" y="6" width="6" height="16" fill="currentColor" opacity="0.55" />
            <rect x="18" y="-2" width="6" height="24" fill="currentColor" opacity="0.7" />
            <rect x="27" y="3" width="6" height="19" fill="currentColor" opacity="0.5" />
          </g>
          {/* Top-right: live stat */}
          <g transform="translate(8, -36)">
            <text x="0" y="-6" fontSize="5" fontFamily="Inter, sans-serif" fill="currentColor" opacity="0.5" letterSpacing="1">UPTIME</text>
            <text x="0" y="14" fontSize="14" fontFamily="Fraunces, serif" fontWeight="500" fill="currentColor">99.94</text>
            <text x="34" y="14" fontSize="6" fontFamily="Inter, sans-serif" fill="currentColor" opacity="0.6">%</text>
            <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </g>
          {/* Bottom-left: status dots */}
          <g transform="translate(-46, 14)">
            <text x="0" y="0" fontSize="5" fontFamily="Inter, sans-serif" fill="currentColor" opacity="0.5" letterSpacing="1">DEVICES</text>
            <circle cx="2" cy="10" r="2" fill="currentColor" className="ec-blip ec-blip-1" />
            <circle cx="10" cy="10" r="2" fill="currentColor" className="ec-blip ec-blip-2" />
            <circle cx="18" cy="10" r="2" fill="currentColor" className="ec-blip ec-blip-3" />
            <circle cx="26" cy="10" r="2" fill="currentColor" className="ec-blip ec-blip-4" />
            <text x="0" y="22" fontSize="9" fontFamily="Fraunces, serif" fill="currentColor">24 / 24</text>
          </g>
          {/* Bottom-right: live spark line */}
          <g transform="translate(8, 14)">
            <text x="0" y="0" fontSize="5" fontFamily="Inter, sans-serif" fill="currentColor" opacity="0.5" letterSpacing="1">FLOW</text>
            <polyline
              points="0,18 5,12 10,15 15,8 20,11 25,5 30,9 35,3 40,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="40" cy="6" r="1.5" fill="currentColor" className="ec-flow-dot" />
          </g>

          {/* Subtle pulse ring at the very center */}
          <circle r="3" fill="currentColor" />
          <circle r="3" fill="none" stroke="currentColor" strokeWidth="1" className="ec-core-pulse" />
        </g>
      </svg>
    </div>
  );
}
