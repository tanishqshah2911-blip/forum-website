/**
 * Animated mini-icon that sits at the top of every service card.
 * Pass `type` to choose which animation plays.
 *
 * Types:
 *   - website     : browser window with cycling code lines
 *   - console     : dashboard grid with live status dots
 *   - maintenance : ECG heartbeat line scanning
 *   - cctv        : camera frame with sweeping scan line + target
 *   - erp         : connected business modules with pulsing links
 *   - consulting  : blueprint plan with drawing-in lines
 */

const ICON_VIEWBOX = '0 0 80 60';

const Icons = {
  website: (
    <g>
      {/* Browser frame */}
      <rect x="6" y="8" width="68" height="44" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="6" y1="18" x2="74" y2="18" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="11" cy="13" r="1.4" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="13" r="1.4" fill="currentColor" opacity="0.6" />
      <circle cx="21" cy="13" r="1.4" fill="currentColor" opacity="0.6" />
      {/* Code lines (each animates) */}
      <rect x="11" y="24" width="20" height="2" fill="currentColor" className="svc-code-1" />
      <rect x="11" y="30" width="32" height="2" fill="currentColor" className="svc-code-2" />
      <rect x="15" y="36" width="24" height="2" fill="currentColor" className="svc-code-3" />
      <rect x="11" y="42" width="40" height="2" fill="currentColor" className="svc-code-4" />
    </g>
  ),
  console: (
    <g>
      {/* Dashboard frame */}
      <rect x="6" y="8" width="68" height="44" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Stat tiles */}
      <rect x="11" y="13" width="18" height="12" rx="1" fill="currentColor" opacity="0.18" />
      <rect x="32" y="13" width="18" height="12" rx="1" fill="currentColor" opacity="0.18" />
      <rect x="53" y="13" width="16" height="12" rx="1" fill="currentColor" opacity="0.18" />
      {/* Live chart line */}
      <polyline points="11,42 18,38 24,40 30,34 36,36 42,30 48,32 54,28 60,30 69,26"
        fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Live status dots */}
      <circle cx="14" cy="48" r="1.4" fill="currentColor" className="svc-dot-1" />
      <circle cx="20" cy="48" r="1.4" fill="currentColor" className="svc-dot-2" />
      <circle cx="26" cy="48" r="1.4" fill="currentColor" className="svc-dot-3" />
    </g>
  ),
  maintenance: (
    <g>
      {/* ECG / heartbeat line */}
      <line x1="6" y1="30" x2="74" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <path
        d="M 6 30 L 18 30 L 22 30 L 24 18 L 28 42 L 32 24 L 34 30 L 50 30 L 54 22 L 58 38 L 62 30 L 74 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="svc-ecg"
      />
      {/* Sweep dot */}
      <circle r="2" fill="currentColor" className="svc-ecg-dot">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#svc-ecg-path" />
        </animateMotion>
      </circle>
      <path
        id="svc-ecg-path"
        d="M 6 30 L 18 30 L 22 30 L 24 18 L 28 42 L 32 24 L 34 30 L 50 30 L 54 22 L 58 38 L 62 30 L 74 30"
        fill="none"
        opacity="0"
      />
    </g>
  ),
  cctv: (
    <g>
      {/* Viewport frame */}
      <rect x="6" y="8" width="68" height="44" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Corner brackets */}
      <path d="M 12 14 L 16 14 L 16 18" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 64 14 L 68 14 L 68 18" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 12 46 L 12 42" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 68 46 L 68 42" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Target reticle */}
      <circle cx="40" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <line x1="40" y1="20" x2="40" y2="26" stroke="currentColor" strokeWidth="1.2" />
      <line x1="40" y1="34" x2="40" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="30" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.2" />
      <line x1="44" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1.2" />
      {/* Scan line */}
      <line x1="6" y1="0" x2="74" y2="0" stroke="currentColor" strokeWidth="1.4" className="svc-scanline" />
      {/* REC dot */}
      <circle cx="68" cy="13" r="1.6" fill="#ef4444" className="svc-rec" />
    </g>
  ),
  erp: (
    <g>
      {/* Center hub */}
      <circle cx="40" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="30" r="2" fill="currentColor" />
      {/* 4 module satellites */}
      <rect x="10" y="14" width="14" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="56" y="14" width="14" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="36" width="14" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="56" y="36" width="14" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Connecting lines */}
      <line x1="24" y1="19" x2="36" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.6" className="svc-erp-line svc-erp-line-1" />
      <line x1="56" y1="19" x2="44" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.6" className="svc-erp-line svc-erp-line-2" />
      <line x1="24" y1="41" x2="36" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.6" className="svc-erp-line svc-erp-line-3" />
      <line x1="56" y1="41" x2="44" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.6" className="svc-erp-line svc-erp-line-4" />
    </g>
  ),
  consulting: (
    <g>
      {/* Blueprint grid background */}
      <rect x="6" y="8" width="68" height="44" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="6" y1="20" x2="74" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="6" y1="32" x2="74" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="6" y1="44" x2="74" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="20" y1="8" x2="20" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="40" y1="8" x2="40" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="60" y1="8" x2="60" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {/* Blueprint plan — animated drawing */}
      <path
        d="M 14 38 L 28 38 L 28 24 L 52 24 L 52 38 L 66 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="svc-blueprint"
        pathLength="100"
      />
      {/* Markers */}
      <circle cx="14" cy="38" r="1.6" fill="currentColor" />
      <circle cx="28" cy="24" r="1.6" fill="currentColor" />
      <circle cx="52" cy="24" r="1.6" fill="currentColor" />
      <circle cx="66" cy="38" r="1.6" fill="currentColor" />
    </g>
  )
};

export default function ServiceIcon({ type, className = '' }) {
  const inner = Icons[type];
  if (!inner) return null;
  return (
    <span className={`service-icon service-icon-${type} ${className}`.trim()} aria-hidden="true">
      <svg viewBox={ICON_VIEWBOX} xmlns="http://www.w3.org/2000/svg" role="img">
        {inner}
      </svg>
    </span>
  );
}
