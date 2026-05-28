/**
 * Hero connected ecosystem — atmospheric layer behind the headline.
 *
 * Layout:
 *   ┌───────────────────────────────────────────────┐
 *   │  ●Web         [Vayu ring]        ●ERP         │
 *   │                                                │
 *   │  [Canteen]                  [Attendance]      │
 *   │   silhouette                  silhouette       │
 *   │                                                │
 *   │  ●CCTV    [Dashboard]       ●Maint   ●Console │
 *   └───────────────────────────────────────────────┘
 *
 * Subtle gold/blue connector lines converge from products and
 * service nodes into the central Dashboard. Tiny data packets
 * travel along the lines toward the dashboard, suggesting flow.
 *
 * Pure CSS / SVG. No canvas. No mouse-parallax. Premium and calm.
 */

const SERVICE_NODES = [
  { id: 'web',     label: 'Web',     x: 6,  y: 14 },
  { id: 'erp',     label: 'ERP',     x: 92, y: 14 },
  { id: 'cctv',    label: 'CCTV',    x: 7,  y: 76 },
  { id: 'console', label: 'Console', x: 92, y: 76 },
  { id: 'maint',   label: 'Maint',   x: 78, y: 88 },
  { id: 'consult', label: 'Consult', x: 22, y: 88 }
];

export default function HeroProductWatermarks() {
  return (
    <div className="hero-watermarks" aria-hidden="true">
      {/* === SVG NETWORK ===
          Connector lines flowing from products + service nodes into
          the central Dashboard panel. Each line carries a small
          gold data particle traveling toward the dashboard. */}
      <svg
        className="hwm-network"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hwm-line-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"  stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Lines from products + service nodes converging on dashboard
            (Dashboard center ≈ 800, 730 in this 1600×900 viewBox) */}
        <path d="M 220 460 Q 500 600 780 720" stroke="url(#hwm-line-grad)" strokeWidth="0.8" fill="none" strokeDasharray="2 6" />
        <path d="M 1380 460 Q 1100 600 820 720" stroke="url(#hwm-line-grad)" strokeWidth="0.8" fill="none" strokeDasharray="2 6" />
        <path d="M 800 200 Q 800 460 800 700" stroke="url(#hwm-line-grad)" strokeWidth="0.7" fill="none" strokeDasharray="2 6" />
        <path d="M 100 130 Q 450 400 770 720" stroke="url(#hwm-line-grad)" strokeWidth="0.6" fill="none" strokeDasharray="2 8" opacity="0.55" />
        <path d="M 1500 130 Q 1150 400 830 720" stroke="url(#hwm-line-grad)" strokeWidth="0.6" fill="none" strokeDasharray="2 8" opacity="0.55" />
        <path d="M 110 690 Q 400 720 770 740" stroke="url(#hwm-line-grad)" strokeWidth="0.6" fill="none" strokeDasharray="2 8" opacity="0.5" />
        <path d="M 1490 690 Q 1200 720 830 740" stroke="url(#hwm-line-grad)" strokeWidth="0.6" fill="none" strokeDasharray="2 8" opacity="0.5" />

        {/* Traveling data packets — each on its own slow loop, all
            converging on the dashboard. No animateMotion (perf):
            these use simple translate animations. */}
        <circle cx="0" cy="0" r="2.5" fill="currentColor" className="hwm-pkt hwm-pkt-1" />
        <circle cx="0" cy="0" r="2.5" fill="currentColor" className="hwm-pkt hwm-pkt-2" />
        <circle cx="0" cy="0" r="2.2" fill="currentColor" className="hwm-pkt hwm-pkt-3" />
        <circle cx="0" cy="0" r="2.2" fill="currentColor" className="hwm-pkt hwm-pkt-4" />
        <circle cx="0" cy="0" r="2"   fill="currentColor" className="hwm-pkt hwm-pkt-5" />
      </svg>

      {/* === PRODUCT WATERMARKS === */}
      {/* Canteen — left edge */}
      <img
        src="/canteen.png"
        alt=""
        className="hwm-img hwm-canteen"
        draggable="false"
        loading="lazy"
      />
      {/* Attendance — right edge */}
      <img
        src="/attendance.png"
        alt=""
        className="hwm-img hwm-attendance"
        draggable="false"
        loading="lazy"
      />
      {/* Vayu — abstract sensor ring, upper-center */}
      <svg className="hwm-vayu" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
        <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="100" r="36" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <circle cx="100" cy="100" r="18" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
        <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.7" />
        <path d="M 16 100 Q 36 88 56 100 T 96 100" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
        <path d="M 184 100 Q 164 112 144 100 T 104 100" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 - 90) * Math.PI / 180;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * 82} y1={100 + Math.sin(a) * 82}
              x2={100 + Math.cos(a) * 88} y2={100 + Math.sin(a) * 88}
              stroke="currentColor" strokeWidth="0.6" opacity="0.5"
            />
          );
        })}
      </svg>

      {/* === SERVICE NODES — small icon pills around the perimeter === */}
      {SERVICE_NODES.map(n => (
        <div
          key={n.id}
          className={`hwm-node hwm-node-${n.id}`}
          style={{ left: n.x + '%', top: n.y + '%' }}
        >
          <span className="hwm-node-dot" />
          <span className="hwm-node-label">{n.label}</span>
        </div>
      ))}

      {/* === CENTRAL DASHBOARD PANEL ===
          Sits in the lower-center area where lines converge.
          Glass tile with live-feeling micro stats. */}
      <div className="hwm-dashboard">
        <div className="hwm-dashboard-header">
          <span className="hwm-dashboard-title">Forum Console</span>
          <span className="hwm-dashboard-status">
            <span className="hwm-dashboard-blink" /> LIVE
          </span>
        </div>
        <div className="hwm-dashboard-rows">
          <div className="hwm-dashboard-row">
            <span className="hwm-dashboard-label">Devices</span>
            <span className="hwm-dashboard-value">24 / 24</span>
          </div>
          <div className="hwm-dashboard-row">
            <span className="hwm-dashboard-label">Attendance</span>
            <span className="hwm-dashboard-value">+128 today</span>
          </div>
          <div className="hwm-dashboard-row">
            <span className="hwm-dashboard-label">Air Quality</span>
            <span className="hwm-dashboard-value">22.4 °C</span>
          </div>
          <div className="hwm-dashboard-row">
            <span className="hwm-dashboard-label">Alerts</span>
            <span className="hwm-dashboard-value">2</span>
          </div>
        </div>
        {/* Tiny animated bar strip */}
        <div className="hwm-dashboard-bars">
          <span style={{ '--h': '40%' }} />
          <span style={{ '--h': '70%' }} />
          <span style={{ '--h': '55%' }} />
          <span style={{ '--h': '90%' }} />
          <span style={{ '--h': '65%' }} />
          <span style={{ '--h': '80%' }} />
        </div>
      </div>
    </div>
  );
}
