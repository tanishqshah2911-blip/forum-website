import { useEffect, useRef } from 'react';

/**
 * Home hero — connected ecosystem background.
 *
 *   PRODUCTS  ──┐
 *   SERVICES ──┼──▶  THE FORUM CONSOLE  ──▶  LIVE DATA / AUTOMATION
 *   DEVICES  ──┘
 *
 * Layered story behind the headline:
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  ●Website         [Vayu node]              ●ERP          │
 *   │                                                          │
 *   │  ┌──────┐                                  ┌──────┐      │
 *   │  │CANTEEN│   ───────▶  [DASHBOARD]  ◀────  │ATTEND│      │
 *   │  └──────┘                                  └──────┘      │
 *   │                                                          │
 *   │  ●CCTV    ●Consult                ●Maint    ●Console     │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Layers (back → front):
 *   1. Subtle engineering grid + edge glows (blue / violet)
 *   2. SVG network: nine bezier wires converging on the dashboard,
 *      stroke-dashoffset flow + six animateMotion data packets
 *   3. Three product modules (Canteen, Attendance, Vayu) — small
 *      glass cards, slow float, gentle dim/glow
 *   4. Six service-node chips around the perimeter, soft pulse
 *   5. Central Forum Console panel — live status, six metrics,
 *      animated bar strip and sparkline
 *   6. Vignette mask: ecosystem fades to transparent in the
 *      headline strip so the title stays crisp
 *
 * Subtle mouse parallax shifts the layers a few pixels each. All
 * motion is transform/opacity only — no canvas, no expensive
 * blur loops, no layout-shifting animations.
 */

/**
 * Service nodes — positioned as a "solar system" around the console
 * at (50%, 80%). Distances are intentionally varied:
 *
 *   Inner orbit (close to console):   CCTV, Consult
 *   Mid orbit:                         Maint, Console
 *   Outer orbit (far):                 Website, ERP
 *
 * Vayu (product) sits in the upper-right outer orbit; Canteen and
 * Attendance occupy upper-left and upper-right mid orbit.
 *
 * SAFE TEXT ZONE — never place a node here:
 *   x ∈ (28%, 72%)   y ∈ (32%, 68%)
 *
 * That box covers the eyebrow, headline, sub, and CTAs. All node
 * coords below are deliberately outside it.
 */
/**
 * Service nodes — each renders as a small animated icon over a
 * subtle glass tile, with the service name below in small caps.
 * Replaces the older "yellow dot + pill chip" visual.
 *
 * ERP moved to (94, 10) so the larger icon+label stack doesn't
 * overlap the Attendance device sitting at right:6% top:14%.
 */
/**
 * Balanced solar-system: 3 services on each side mirroring across
 * the centered hero text block. Vayu (the upper-right sensor) acts
 * as the third "right-side" element.
 *
 *   LEFT (x ≈ 6–12%)            RIGHT (x ≈ 88–96%)
 *     Maintenance  (mid)          ERP          (mid)
 *     CCTV         (mid-low)      Consult      (mid-low)
 *     Console      (bottom)       (Vayu sensor as upper anchor)
 *
 * All five service nodes sit clearly outside the safe text zone
 * so none overlaps the centered eyebrow / headline / sub / CTAs.
 */
/**
 * Strict no-overlap layout.
 *
 * The device PNGs are 1100×1377 (taller than wide). At the current
 * width clamp(145–215px), each device's image+tag stack ends near
 * y ≈ 54%. Every service node now sits at y ≥ 64% — that's a
 * guaranteed ≥10% vertical gap (~70px on a 720px hero) between
 * each device's lowest visual element and the top of the nearest
 * service icon, so nothing visually merges with the products.
 *
 *   LEFT  (x ≈ 5–14%)           RIGHT (x ≈ 92–95%)
 *     Maintenance  (y 64)         ERP          (y 64)
 *     CCTV         (y 78)         Consult      (y 78)
 *     Console      (y 92)        — Vayu sits up at y=6 (right top)
 *
 *   Inter-service vertical gaps are also ≥ 7% (~50px) so no two
 *   service icons or labels collide.
 */
/**
 * Order matters: --node-i drives the staggered entrance cascade,
 * so this list is in the order the user wants services to emerge:
 * CCTV → Console → Consult → ERP. Maintenance was removed earlier.
 */
const SERVICE_NODES = [
  { id: 'cctv',    label: 'CCTV',    x: 5,  y: 78 },  // i=0
  { id: 'console', label: 'Console', x: 14, y: 92 },  // i=1
  { id: 'consult', label: 'Consult', x: 95, y: 78 },  // i=2
  { id: 'erp',     label: 'ERP',     x: 92, y: 64 }   // i=3
];

/**
 * Tiny custom icon per service. Each is its own SVG with a
 * lightweight CSS-driven animation that hints at its meaning:
 *
 *   CCTV       → blinking record dot + slow scan arc
 *   Maintenance→ slowly rotating gear
 *   Console    → mini sparkline drawing + live status dot
 *   Consult    → speech bubble with cascading typing dots
 *   ERP        → central hub + four cascading satellite nodes
 */
const NODE_ICONS = {
  cctv: (
    <svg className="heb-node-svg heb-icon-cctv" viewBox="0 0 32 32">
      {/* Single clean camera silhouette — no orbit / radar / arc.
          Body + lens cone + lens iris + small wall mount. */}
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5.5" y="10" width="13" height="10" rx="1.6" />
        <path d="M 18.5 12 L 26.5 8.5 L 26.5 21.5 L 18.5 18 Z" />
        <circle cx="12" cy="15" r="2.6" />
        <line x1="12" y1="20" x2="12" y2="22.5" />
        <line x1="9"  y1="22.5" x2="15" y2="22.5" />
      </g>
      {/* Tiny green recording pip — only animated element, just a
          quiet blink so the camera reads as "live" without any
          rotating ring around it. */}
      <circle cx="22" cy="11.5" r="1.1" fill="#22c55e" className="heb-icon-cctv-dot" />
    </svg>
  ),

  console: (
    <svg className="heb-node-svg heb-icon-console" viewBox="0 0 32 32">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        {/* Monitor */}
        <rect x="3.5" y="6.5" width="25" height="15" rx="1.5" />
        {/* Stand */}
        <line x1="13.5" y1="21.5" x2="13.5" y2="25" />
        <line x1="18.5" y1="21.5" x2="18.5" y2="25" />
        <line x1="11"   y1="25"   x2="21"   y2="25" />
      </g>
      {/* Mini sparkline drawing inside the screen */}
      <polyline
        points="6,17 10,14 13,15 17,10 21,12 25,8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
        className="heb-icon-console-spark"
      />
      {/* Live status pip */}
      <circle cx="25" cy="9" r="0.95" fill="#22c55e" className="heb-icon-console-dot" />
    </svg>
  ),

  consult: (
    <svg className="heb-node-svg heb-icon-consult" viewBox="0 0 32 32">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        {/* Speech bubble */}
        <path d="M 5 11 q 0 -4 4 -4 h 14 q 4 0 4 4 v 5 q 0 4 -4 4 h -10 l -5 4 v -4 q -3 -1 -3 -4 z" />
      </g>
      {/* Cascading typing dots */}
      <circle cx="11.5" cy="13.5" r="1.1" fill="currentColor" className="heb-icon-consult-dot heb-icon-consult-dot-1" />
      <circle cx="16"   cy="13.5" r="1.1" fill="currentColor" className="heb-icon-consult-dot heb-icon-consult-dot-2" />
      <circle cx="20.5" cy="13.5" r="1.1" fill="currentColor" className="heb-icon-consult-dot heb-icon-consult-dot-3" />
    </svg>
  ),

  erp: (
    <svg className="heb-node-svg heb-icon-erp" viewBox="0 0 32 32">
      {/* Spokes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.55">
        <line x1="16" y1="9"  x2="9.5"  y2="16" />
        <line x1="16" y1="9"  x2="22.5" y2="16" />
        <line x1="9.5"  y1="16" x2="16" y2="23" />
        <line x1="22.5" y1="16" x2="16" y2="23" />
      </g>
      {/* Hub */}
      <circle cx="16" cy="16" r="2.5" fill="currentColor" className="heb-icon-erp-center" />
      {/* Satellites — pulse cascade */}
      <circle cx="16"   cy="9"  r="1.5" fill="currentColor" className="heb-icon-erp-sat heb-icon-erp-sat-1" />
      <circle cx="9.5"  cy="16" r="1.5" fill="currentColor" className="heb-icon-erp-sat heb-icon-erp-sat-2" />
      <circle cx="22.5" cy="16" r="1.5" fill="currentColor" className="heb-icon-erp-sat heb-icon-erp-sat-3" />
      <circle cx="16"   cy="23" r="1.5" fill="currentColor" className="heb-icon-erp-sat heb-icon-erp-sat-4" />
    </svg>
  )
};

export default function HomeEcosystemBackground() {
  const ref = useRef(null);

  // Subtle mouse parallax — drives --mx / --my CSS vars on the
  // root. Each layer reads them at its own intensity. rAF-throttled
  // so we never exceed one update per frame.
  //
  // We also track whether the hero is in the viewport — when the
  // user scrolls past it, all the hero animations are paused via a
  // CSS class and the mousemove listener short-circuits. This is
  // the fix for the janky scroll transition between Section 1 and
  // Section 2: with all 20+ infinite hero animations paused as the
  // hero leaves view, the browser stops repainting wires, packets,
  // dock metrics, and SVG icons mid-scroll.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let inView = true;
    let raf = 0;
    let pending = null;

    /* — Visibility gate —
       Observe the hero itself. When the hero leaves the viewport,
       toggle `.heb-paused` so CSS pauses every infinite animation
       on its descendants; restore it when the hero re-enters view. */
    const heroEl = el.closest('.hero') || el.parentElement;
    let visObs = null;
    if (heroEl && 'IntersectionObserver' in window) {
      visObs = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          el.classList.toggle('heb-paused', !inView);
        },
        { threshold: 0, rootMargin: '0px 0px 0px 0px' }
      );
      visObs.observe(heroEl);
    }

    const onMove = (e) => {
      if (!inView) return;             // skip work while hero is offscreen
      pending = e;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!pending) return;
        const r = el.getBoundingClientRect();
        const cx = (pending.clientX - r.left) / r.width  - 0.5;
        const cy = (pending.clientY - r.top)  / r.height - 0.5;
        // Clamp so flicks off-screen don't yank the layout
        const clamp = (v) => Math.max(-0.5, Math.min(0.5, v));
        el.style.setProperty('--mx', clamp(cx).toFixed(3));
        el.style.setProperty('--my', clamp(cy).toFixed(3));
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
      if (visObs) visObs.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="heb" aria-hidden="true">
      {/* === DEPTH LAYERS ============================================ */}
      <span className="heb-grid" />
      <span className="heb-glow heb-glow-blue" />
      <span className="heb-glow heb-glow-violet" />

      {/* === SVG NETWORK ============================================
          Nine bezier wires converging on the dashboard at (800, 720)
          inside the 1600×900 viewBox. Each wire flows toward the
          dashboard via stroke-dashoffset. Six small data packets
          ride the wires (animateMotion + mpath). */}
      <svg
        className="heb-network"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/*
            Note: SVG <stop> attributes don't resolve CSS vars when set
            via attribute. Inline style works in all modern browsers
            because the cascade applies to the <stop>'s computed style.
          */}
          <linearGradient id="heb-wire" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%"   style={{ stopColor: 'var(--accent)',     stopOpacity: 0.05 }} />
            <stop offset="55%"  style={{ stopColor: 'var(--accent)',     stopOpacity: 0.6  }} />
            <stop offset="100%" style={{ stopColor: 'var(--neon-blue)',  stopOpacity: 0.3  }} />
          </linearGradient>
          <radialGradient id="heb-packet" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   style={{ stopColor: '#fff8e2',           stopOpacity: 1   }} />
            <stop offset="40%"  style={{ stopColor: 'var(--accent)',     stopOpacity: 0.95 }} />
            <stop offset="100%" style={{ stopColor: 'var(--accent)',     stopOpacity: 0   }} />
          </radialGradient>
        </defs>

        {/*
          Connection wires — written directly (not as <use>) so
          that animateMotion's mpath can reference each path by id
          and the same geometry renders the visible wire too.

          ALL paths converge on the console at (800, 720) inside the
          1600×900 viewBox. Each wire is a soft quadratic curve from
          its source node/product to the console, deliberately
          curving AROUND the central headline strip rather than
          slicing straight through it.
        */}
        <g className="heb-wires" fill="none">
          {/* All wires converge on the dock center at (800, 828)
              after it moved to top: 92%. Each curve leans OUTWARD
              of the safe text zone (x ≈ 28–72%, y ≈ 32–68%) before
              diving down into the dock. */}

          {/* Products — wire emerges from device bottom. Canteen
              ends near y ≈ 54% → SVG y=486; Attendance mirror at
              x=1432. */}
          <path id="heb-l-canteen"    className="heb-wire heb-wire-1" d="M 168 486  Q 380 720  780 828" />
          <path id="heb-l-attendance" className="heb-wire heb-wire-2" d="M 1432 486 Q 1220 720 820 828" />
          {/* Vayu — outer top-right */}
          <path id="heb-l-vayu"       className="heb-wire heb-wire-3" d="M 1200 100 Q 1000 500 800 818" />
          {/* Service nodes — origins match new node coords (≥y=576). */}
          <path id="heb-l-cctv"       className="heb-wire heb-wire-6" d="M 80 702   Q 360 800  780 830" />
          <path id="heb-l-console"    className="heb-wire heb-wire-9" d="M 224 828  Q 480 840  780 830" />
          <path id="heb-l-erp"        className="heb-wire heb-wire-5" d="M 1472 576 Q 1220 740 820 828" />
          <path id="heb-l-consult"    className="heb-wire heb-wire-7" d="M 1520 702 Q 1240 800 820 830" />
        </g>

        {/* Data packets — one per node + product, all converging on
            the Forum Console dock. Varied dur/delay so the flow
            feels organic instead of marching in lockstep.
            (Website packet was retired with the WEBSITE chip.) */}
        {[
          { path: '#heb-l-canteen',    dur: 6.4, delay: 0,   r: 3.4 },
          { path: '#heb-l-attendance', dur: 6.4, delay: 1.6, r: 3.4 },
          { path: '#heb-l-vayu',       dur: 5.6, delay: 0.8, r: 3.0 },
          { path: '#heb-l-erp',        dur: 7.2, delay: 2.4, r: 2.6 },
          { path: '#heb-l-cctv',       dur: 7.0, delay: 3.0, r: 2.6 },
          { path: '#heb-l-consult',    dur: 6.6, delay: 4.2, r: 2.6 },
          { path: '#heb-l-console',    dur: 7.4, delay: 5.4, r: 2.4 }
        ].map((p, i) => (
          <circle
            key={i}
            r={p.r}
            fill="url(#heb-packet)"
            className="heb-packet"
          >
            <animateMotion
              dur={`${p.dur}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
              rotate="0"
            >
              <mpath href={p.path} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.92;1"
              dur={`${p.dur}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* === PRODUCT MODULES ========================================
          Each product is a parallax wrapper containing an inner
          element that does the slow-float / glow animation. */}
      <div className="heb-product heb-product-canteen">
        <div className="heb-product-inner">
          <span className="heb-product-glow" />
          <img
            src="/canteen.png"
            alt=""
            className="heb-product-img"
            draggable="false"
            loading="lazy"
          />
          <span className="heb-product-tag">Canteen</span>
        </div>
      </div>

      <div className="heb-product heb-product-attendance">
        <div className="heb-product-inner">
          <span className="heb-product-glow" />
          <img
            src="/attendance.png"
            alt=""
            className="heb-product-img"
            draggable="false"
            loading="lazy"
          />
          <span className="heb-product-tag">Attendance</span>
        </div>
      </div>

      {/* Vayu — sensor ring, no photo (matches its abstract identity) */}
      <div className="heb-product heb-product-vayu">
        <div className="heb-product-inner">
          <span className="heb-product-glow" />
          <svg className="heb-vayu-ring" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="1"   opacity="0.28" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1"   opacity="0.42" />
            <circle cx="100" cy="100" r="38" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
            <circle cx="100" cy="100" r="18" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7"  />
            <circle cx="100" cy="100" r="5"  fill="currentColor" opacity="0.75" />
            {/* Soft directional waves */}
            <path d="M 18 100 Q 38 86 58 100 T 98 100"   fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
            <path d="M 182 100 Q 162 114 142 100 T 102 100" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
            {/* Tick marks */}
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * 30 - 90) * Math.PI / 180;
              return (
                <line
                  key={i}
                  x1={100 + Math.cos(a) * 86} y1={100 + Math.sin(a) * 86}
                  x2={100 + Math.cos(a) * 92} y2={100 + Math.sin(a) * 92}
                  stroke="currentColor" strokeWidth="0.7" opacity="0.55"
                />
              );
            })}
          </svg>
          <span className="heb-product-tag">Vayu Sensor</span>
        </div>
      </div>

      {/* === SERVICE NODES ==========================================
          Each node renders as a small animated icon over a soft
          glass tile, with the service name in small caps below.
          Replaces the older yellow-dot + pill chip. */}
      {SERVICE_NODES.map((n, i) => (
        <div
          key={n.id}
          className={`heb-node heb-node-${n.id}`}
          style={{ left: `${n.x}%`, top: `${n.y}%`, '--node-i': i }}
        >
          <div className="heb-node-icon">{NODE_ICONS[n.id]}</div>
          <span className="heb-node-label">{n.label}</span>
        </div>
      ))}

      {/* === CENTRAL FORUM CONSOLE — LOW-PROFILE DOCK =================
          A wide, flat, glassy command strip — the system "brain"
          but rendered as a quiet operational dock at the bottom of
          the hero. Single-row layout: brand mark · inline metrics
          · sparkline · LIVE indicator. Lower opacity, no heavy
          border, no card feel. */}
      <div className="heb-console">
        <div className="heb-dock">
          {/* Brand block — pip + dock title. Single divider rule
              separates this from the metrics list to the right. */}
          <div className="heb-dock-id">
            <span className="heb-dock-pip" />
            <span className="heb-dock-title">The Forum Console</span>
          </div>

          <span className="heb-dock-rule" aria-hidden="true" />

          {/* Six inline metrics, including Status as the final item.
              Real flex gap (no ::before/::after dot tricks) keeps
              labels and values from visually colliding. */}
          <ul className="heb-dock-metrics">
            {[
              { label: 'Devices', value: '24',    tone: ''     },
              { label: 'Logs',    value: 'Live',  tone: 'live' },
              { label: 'Orders',  value: 'Sync',  tone: 'sync' },
              { label: 'Alerts',  value: '03',    tone: 'warn' },
              { label: 'Reports', value: 'Ready', tone: ''     },
              { label: 'Status',  value: 'Live',  tone: 'live' }
            ].map((m, i) => (
              <li key={m.label} style={{ '--m-i': i }}>
                <span className="heb-dock-l">{m.label}</span>
                <span className={`heb-dock-v${m.tone ? ' heb-dock-v-' + m.tone : ''}`}>
                  {m.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* === HEADLINE READABILITY VIGNETTE ==========================
          Sits on top of everything inside the layer; uses a radial
          mask so the central headline strip becomes fully transparent
          (= ecosystem fades), keeping the title crisp. The dashboard
          and product modules are positioned outside this fade zone. */}
      <span className="heb-vignette" />
    </div>
  );
}
