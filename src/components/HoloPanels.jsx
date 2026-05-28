import { useEffect, useRef } from 'react';

/**
 * Holographic dashboard panels floating behind the hero copy.
 * Three abstract UI mockups at different depths, each with
 * scroll-driven parallax and a slow drift loop.
 *
 * Subtle violet/blue glow is layered through CSS so the brand's
 * cream/gold typography remains the focal point.
 */
export default function HoloPanels() {
  const ref = useRef(null);

  // Scroll-driven parallax — each panel translates at a different speed
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let frame = null;
    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.setProperty('--scroll', y + 'px');
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="holo-panels" aria-hidden="true">
      {/* Panel A — back-left: mini chart */}
      <div className="holo-panel holo-a">
        <svg viewBox="0 0 220 130">
          <rect x="1" y="1" width="218" height="128" rx="8" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
          <line x1="0" y1="22" x2="220" y2="22" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
          <text x="14" y="16" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" fill="currentColor" opacity="0.55">LIVE · METRICS</text>
          <circle cx="206" cy="13" r="2" fill="#22c55e" />
          {/* sparkline */}
          <path d="M 14 100 L 34 88 L 54 92 L 74 78 L 94 84 L 114 66 L 134 72 L 154 56 L 174 60 L 194 44 L 206 50"
            fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M 14 100 L 34 88 L 54 92 L 74 78 L 94 84 L 114 66 L 134 72 L 154 56 L 174 60 L 194 44 L 206 50 L 206 120 L 14 120 Z"
            fill="currentColor" opacity="0.08" />
          <text x="14" y="118" fontFamily="Fraunces, serif" fontSize="14" fill="currentColor">+12.4%</text>
        </svg>
      </div>

      {/* Panel B — front-right: stat tiles */}
      <div className="holo-panel holo-b">
        <svg viewBox="0 0 200 150">
          <rect x="1" y="1" width="198" height="148" rx="8" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <text x="14" y="18" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" fill="currentColor" opacity="0.55">DEVICES · ONLINE</text>
          <rect x="14" y="28" width="80" height="44" rx="4" fill="currentColor" opacity="0.06" />
          <text x="22" y="50" fontFamily="Fraunces, serif" fontSize="22" fill="currentColor">24</text>
          <text x="22" y="64" fontFamily="Inter, sans-serif" fontSize="7" fill="currentColor" opacity="0.6">/ 24 active</text>
          <rect x="106" y="28" width="80" height="44" rx="4" fill="currentColor" opacity="0.06" />
          <text x="114" y="50" fontFamily="Fraunces, serif" fontSize="22" fill="currentColor">99.9</text>
          <text x="114" y="64" fontFamily="Inter, sans-serif" fontSize="7" fill="currentColor" opacity="0.6">% uptime</text>
          {/* bars */}
          <rect x="14" y="92" width="14" height="40" fill="currentColor" opacity="0.45" />
          <rect x="34" y="84" width="14" height="48" fill="currentColor" opacity="0.55" />
          <rect x="54" y="100" width="14" height="32" fill="currentColor" opacity="0.4" />
          <rect x="74" y="78" width="14" height="54" fill="currentColor" opacity="0.65" />
          <rect x="94" y="90" width="14" height="42" fill="currentColor" opacity="0.5" />
          <rect x="114" y="72" width="14" height="60" fill="currentColor" opacity="0.7" />
          <rect x="134" y="86" width="14" height="46" fill="currentColor" opacity="0.55" />
          <rect x="154" y="80" width="14" height="52" fill="currentColor" opacity="0.6" />
          <rect x="174" y="94" width="14" height="38" fill="currentColor" opacity="0.45" />
        </svg>
      </div>

      {/* Panel C — back-right: device/sensor wave */}
      <div className="holo-panel holo-c">
        <svg viewBox="0 0 180 120">
          <rect x="1" y="1" width="178" height="118" rx="8" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.32" />
          <text x="12" y="16" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" fill="currentColor" opacity="0.55">AIR · QUALITY</text>
          <text x="12" y="44" fontFamily="Fraunces, serif" fontSize="20" fill="currentColor">22.4</text>
          <text x="60" y="44" fontFamily="Inter, sans-serif" fontSize="9" fill="currentColor" opacity="0.6">°C</text>
          {/* waves */}
          <path d="M 12 78 Q 22 70, 32 78 T 52 78 T 72 78 T 92 78 T 112 78 T 132 78 T 168 78"
            fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 12 92 Q 22 84, 32 92 T 52 92 T 72 92 T 92 92 T 112 92 T 132 92 T 168 92"
            fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <path d="M 12 106 Q 22 98, 32 106 T 52 106 T 72 106 T 92 106 T 112 106 T 132 106 T 168 106"
            fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
