import { useEffect, useRef } from 'react';

/**
 * Cinematic animated hero background.
 * Layers (back → front):
 *   1. Engineering blueprint grid (slow parallax)
 *   2. Diagonal light beams (slow sweep)
 *   3. Floating particles (drifting dots)
 *   4. Glowing nodes at intersections (pulsing)
 *   5. Bottom fog / mist gradient
 *   6. Mouse-follow soft spotlight
 */
export default function HeroBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = null;
    let lastTime = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastTime < 32) return; // ~30fps cap
      lastTime = now;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--spot-x', x + '%');
        el.style.setProperty('--spot-y', y + '%');
      });
    };
    el.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // 8 particles (was 14) — reduced for performance
  const particles = [
    { l: 12, t: 22, d: 0,    s: 16 },
    { l: 28, t: 70, d: 1.2,  s: 14 },
    { l: 48, t: 18, d: 2.4,  s: 18 },
    { l: 62, t: 82, d: 0.8,  s: 15 },
    { l: 78, t: 36, d: 1.8,  s: 17 },
    { l: 88, t: 64, d: 3.0,  s: 14 },
    { l: 18, t: 50, d: 2.1,  s: 16 },
    { l: 70, t: 12, d: 1.4,  s: 15 }
  ];

  // 4 glowing nodes (was 6) — fewer simultaneous animations
  const nodes = [
    { l: 18, t: 28, d: 0 },
    { l: 82, t: 22, d: 1.4 },
    { l: 30, t: 78, d: 0.8 },
    { l: 78, t: 70, d: 2.2 }
  ];

  return (
    <div ref={ref} className="hero-bg" aria-hidden="true">
      <div className="hero-bg-grid" />

      {/* Light beams — three diagonal streaks of cool accent */}
      <div className="hero-bg-beams">
        <span className="beam beam-1" />
        <span className="beam beam-2" />
        <span className="beam beam-3" />
      </div>

      <div className="hero-bg-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.l + '%',
              top: p.t + '%',
              animationDelay: p.d + 's',
              animationDuration: p.s + 's'
            }}
          />
        ))}
      </div>

      <div className="hero-bg-nodes">
        {nodes.map((n, i) => (
          <span
            key={i}
            className="node"
            style={{
              left: n.l + '%',
              top: n.t + '%',
              animationDelay: n.d + 's'
            }}
          />
        ))}
      </div>

      {/* Bottom fog / mist gradient — softens the edge into the next section */}
      <div className="hero-bg-fog" />

      {/* Mouse-follow spotlight */}
      <div className="hero-bg-spotlight" />
    </div>
  );
}
