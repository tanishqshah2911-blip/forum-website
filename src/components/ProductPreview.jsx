/**
 * Animated product preview that sits in the product card's
 * image slot on the Products page. Each product has a center
 * device icon and 6 feature satellites that "explode" outward
 * with labels when the card is hovered.
 *
 * Replace these inline SVG icons with real product photos later
 * by swapping the <ProductPreview /> with an <img> in Products.jsx.
 */

const ICON = {
  face: (
    <g>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="10" r="0.9" fill="currentColor" />
      <circle cx="15" cy="10" r="0.9" fill="currentColor" />
      <path d="M 9 15 Q 12 17 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </g>
  ),
  fingerprint: (
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M 12 5 C 8 5 6 8 6 12 L 6 16" />
      <path d="M 12 8 C 9.5 8 8.5 10 8.5 12 L 8.5 17" />
      <path d="M 12 11 C 10.5 11 11 12 11 13.5 L 11 18" />
      <path d="M 14 8 C 16 9 16 12 16 14" />
      <path d="M 17 11 C 18 12 18 14 18 15" />
    </g>
  ),
  rfid: (
    <g>
      <rect x="5" y="8" width="14" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="7" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth="1.2" />
      <line x1="7" y1="13.5" x2="13" y2="13.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M 14.5 11 Q 16 12.5 14.5 14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M 16 9.5 Q 18.5 12 16 14.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </g>
  ),
  menu: (
    <g>
      <rect x="6" y="5" width="12" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="8.5" y1="9" x2="15.5" y2="9" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8.5" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="1.2" />
    </g>
  ),
  token: (
    <g>
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4" />
      <path d="M 12 5 L 12 7 M 12 17 L 12 19 M 5 12 L 7 12 M 17 12 L 19 12" stroke="currentColor" strokeWidth="1" />
    </g>
  ),
  dashboard: (
    <g>
      <rect x="4" y="6" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="6" y="8" width="4" height="4" fill="currentColor" opacity="0.4" />
      <rect x="11" y="8" width="7" height="2" fill="currentColor" opacity="0.4" />
      <rect x="11" y="11" width="5" height="2" fill="currentColor" opacity="0.6" />
      <polyline points="6,16 9,14 12,15 15,13 18,15" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </g>
  ),
  pm: (
    <g fill="currentColor">
      <circle cx="8" cy="9" r="1.3" opacity="0.7" />
      <circle cx="14" cy="11" r="1.6" opacity="0.5" />
      <circle cx="11" cy="14" r="1.2" opacity="0.8" />
      <circle cx="16" cy="15" r="1" opacity="0.6" />
      <circle cx="9" cy="16" r="0.8" opacity="0.7" />
      <circle cx="13" cy="7" r="0.9" opacity="0.6" />
    </g>
  ),
  co2: (
    <g>
      <text x="12" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="currentColor">CO₂</text>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </g>
  ),
  cloud: (
    <g>
      <path d="M 7 14 Q 5 14 5 12 Q 5 10 7 10 Q 7 8 9 8 Q 11 7 13 8 Q 15 7 17 9 Q 19 9 19 12 Q 19 14 17 14 Z"
        fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="9" y1="17" x2="9" y2="19" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="17" x2="12" y2="19" stroke="currentColor" strokeWidth="1.2" />
      <line x1="15" y1="17" x2="15" y2="19" stroke="currentColor" strokeWidth="1.2" />
    </g>
  ),
  wave: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M 4 12 Q 7 8, 10 12 T 16 12 T 22 12" />
      <path d="M 4 16 Q 7 12, 10 16 T 16 16 T 22 16" opacity="0.6" />
      <path d="M 4 8 Q 7 4, 10 8 T 16 8 T 22 8" opacity="0.6" />
    </g>
  ),
  phone: (
    <g>
      <rect x="8" y="4" width="8" height="16" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="11" y1="6.5" x2="13" y2="6.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="17.5" r="0.7" fill="currentColor" />
      <rect x="9.5" y="9" width="5" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
    </g>
  ),
  clock: (
    <g>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="12" y1="12" x2="12" y2="7" stroke="currentColor" strokeWidth="1.4" />
      <line x1="12" y1="12" x2="15" y2="14" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </g>
  ),
  payroll: (
    <g>
      <rect x="5" y="7" width="14" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="12" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fontWeight="600" fill="currentColor">₹</text>
      <line x1="6" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="6" y1="11" x2="8" y2="11" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </g>
  ),
  asset: (
    <g>
      <path d="M 12 4 L 19 8 L 19 16 L 12 20 L 5 16 L 5 8 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="5" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.2" />
      <line x1="19" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="1.2" />
    </g>
  ),
  barcode: (
    <g stroke="currentColor" strokeWidth="1">
      <line x1="6" y1="6" x2="6" y2="18" />
      <line x1="8" y1="6" x2="8" y2="18" strokeWidth="2" />
      <line x1="11" y1="6" x2="11" y2="18" />
      <line x1="13" y1="6" x2="13" y2="18" strokeWidth="2" />
      <line x1="15" y1="6" x2="15" y2="18" />
      <line x1="17" y1="6" x2="17" y2="18" strokeWidth="2" />
    </g>
  ),
  lock: (
    <g>
      <rect x="6" y="11" width="12" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 8.5 11 L 8.5 8 Q 8.5 5 12 5 Q 15.5 5 15.5 8 L 15.5 11" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
    </g>
  ),
  chart: (
    <g>
      <line x1="5" y1="19" x2="19" y2="19" stroke="currentColor" strokeWidth="1.4" />
      <line x1="5" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.4" />
      <rect x="7" y="13" width="2.5" height="6" fill="currentColor" opacity="0.5" />
      <rect x="11" y="9" width="2.5" height="10" fill="currentColor" opacity="0.7" />
      <rect x="15" y="11" width="2.5" height="8" fill="currentColor" opacity="0.5" />
    </g>
  ),
  sync: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M 5 12 A 7 7 0 0 1 17 8" />
      <polyline points="14,5 17,8 14,11" />
      <path d="M 19 12 A 7 7 0 0 1 7 16" />
      <polyline points="10,19 7,16 10,13" />
    </g>
  ),
  device: (
    <g>
      <rect x="5" y="6" width="14" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="15" width="8" height="3" fill="currentColor" opacity="0.3" />
      <line x1="9" y1="4" x2="9" y2="6" stroke="currentColor" strokeWidth="1.2" />
      <line x1="15" y1="4" x2="15" y2="6" stroke="currentColor" strokeWidth="1.2" />
    </g>
  )
};

const PREVIEWS = {
  canteen: {
    center: ICON.device,
    features: [
      { icon: ICON.face,        label: 'Face' },
      { icon: ICON.fingerprint, label: 'Fingerprint' },
      { icon: ICON.rfid,        label: 'RFID' },
      { icon: ICON.menu,        label: 'Menu' },
      { icon: ICON.token,       label: 'Token' },
      { icon: ICON.dashboard,   label: 'Dashboard' }
    ]
  },
  vayu: {
    center: ICON.device,
    features: [
      { icon: ICON.pm,        label: 'PM2.5' },
      { icon: ICON.co2,       label: 'CO₂' },
      { icon: ICON.wave,      label: 'Live data' },
      { icon: ICON.cloud,     label: 'Cloud' },
      { icon: ICON.phone,     label: 'Mobile' },
      { icon: ICON.dashboard, label: 'Dashboard' }
    ]
  },
  attendance: {
    center: ICON.device,
    features: [
      { icon: ICON.face,        label: 'Face' },
      { icon: ICON.fingerprint, label: 'Fingerprint' },
      { icon: ICON.rfid,        label: 'RFID' },
      { icon: ICON.clock,       label: 'Shifts' },
      { icon: ICON.dashboard,   label: 'Dashboard' },
      { icon: ICON.payroll,     label: 'Payroll' }
    ]
  },
  assure: {
    center: ICON.dashboard,
    features: [
      { icon: ICON.asset,   label: 'Assets' },
      { icon: ICON.barcode, label: 'Scan' },
      { icon: ICON.lock,    label: 'Audit' },
      { icon: ICON.cloud,   label: 'Cloud' },
      { icon: ICON.chart,   label: 'Reports' },
      { icon: ICON.sync,    label: 'Lifecycle' }
    ]
  }
};

export default function ProductPreview({ type }) {
  const data = PREVIEWS[type];
  if (!data) return null;

  return (
    <div className="product-preview" aria-hidden="true">
      {/* Connector ring drawn behind everything */}
      <svg className="pp-orbit" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" opacity="0.18" />
      </svg>

      {/* Center device */}
      <div className="pp-center">
        <svg viewBox="0 0 24 24">{data.center}</svg>
      </div>

      {/* 6 feature satellites */}
      {data.features.map((f, i) => (
        <div
          key={i}
          className="pp-satellite"
          style={{ '--angle': `${(360 / data.features.length) * i - 90}deg` }}
        >
          <div className="pp-satellite-inner">
            <svg viewBox="0 0 24 24">{f.icon}</svg>
          </div>
          <span className="pp-satellite-label">{f.label}</span>
        </div>
      ))}

      {/* Subtle data-stream pulse rays */}
      <div className="pp-rays" />
    </div>
  );
}
