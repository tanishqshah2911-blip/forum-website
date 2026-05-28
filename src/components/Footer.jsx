import { Link } from 'react-router-dom';
import Logo from './Logo';

/**
 * Multi-column footer — inspired by the parent company's
 * end-of-page layout, adapted to The Forum's premium dark theme.
 *
 *   [ Address + phone + email ]   [ Nav links ]   [ Map ]
 *
 * The whole footer enters with the site-wide .reveal animation.
 * Children section-head children cascade via the same shared
 * emergence rules.
 */

const NAV_LINKS = [
  { to: '/about',              label: 'About Us' },
  { to: '/hrms',               label: 'HRMS'     },
  { to: '/products',           label: 'Products' },
  { to: '/services',           label: 'Services' },
  { to: '/products/canteen',   label: 'Canteen'  },
  { to: '/products/attendance',label: 'Attendance' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer site-footer-rich">
      {/* The "Get in touch / Start your project" eyebrow strip
          was removed from the footer to eliminate the duplicate
          Get-in-Touch on the homepage. The home page's compact
          #contact section is the single source of that CTA.
          Address/phone/email/links/map columns below are
          unchanged. */}

      {/* Three-column body */}
      <div className="container footer-grid">
        {/* — LEFT: address + phone + email — */}
        <div className="footer-col footer-col-contact">
          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
              {/* pin icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <span className="footer-line-text">
              504, Old Bazar, Near Ram Mandir,<br />
              Khadki, Pune
            </span>
          </div>

          <a href="tel:+917041512804" className="footer-line footer-line-link">
            <span className="footer-icon" aria-hidden="true">
              {/* phone icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="footer-line-text">7041512804</span>
          </a>

          <a href="mailto:tfxautomation@gmail.com" className="footer-line footer-line-link">
            <span className="footer-icon" aria-hidden="true">
              {/* email icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <span className="footer-line-text">tfxautomation@gmail.com</span>
          </a>
        </div>

        {/* — MIDDLE: navigation links — */}
        <nav className="footer-col footer-col-links" aria-label="Footer navigation">
          <p className="footer-col-heading">Explore</p>
          <ul className="footer-link-list">
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* — RIGHT: map block (Pune location) — */}
        <div className="footer-col footer-col-map">
          <a
            href="https://www.google.com/maps?q=Old+Bazar+Khadki+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map"
            aria-label="View The Forum on Google Maps"
          >
            <iframe
              title="The Forum location"
              src="https://www.google.com/maps?q=Khadki+Pune&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="footer-map-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3h7v7" />
                <path d="M10 14L21 3" />
                <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
              </svg>
              Open in Maps
            </span>
          </a>
        </div>
      </div>

      {/* Bottom strip — brand + copyright */}
      <div className="container footer-bottom">
        <div className="footer-brand">
          <Logo className="brand-mark" />
          <span className="brand-name">The Forum</span>
        </div>
        <p className="footer-copy">© {year} The Forum. All rights reserved.</p>
      </div>
    </footer>
  );
}
