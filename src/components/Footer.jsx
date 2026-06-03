import { Link } from 'react-router-dom';
import Logo from './Logo';

/**
 * Rich multi-row footer.
 *
 *   1.  Tagline strip      — "Let's work together" + CTA
 *   2.  Four-column grid   — Contact | Products | Services | Company
 *   3.  Map row            — Pune location
 *   4.  Bottom strip       — Logo + copyright | Social + legal
 */

const PRODUCT_LINKS = [
  { to: '/products/vayu',       label: 'Vayu' },
  { to: '/products/canteen',    label: 'Canteen' },
  { to: '/products/attendance', label: 'Attendance' },
  { to: '/products/assure',     label: 'Assure It' },
  { to: '/products/photohub',   label: 'PhotoHub' }
];

const SERVICE_LINKS = [
  { to: '/services/website',        label: 'Website' },
  { to: '/services/erp',            label: 'ERP' },
  { to: '/services/cctv',           label: 'CCTV' },
  { to: '/services/device-console', label: 'Device Console' },
  { to: '/services/maintenance',    label: 'Maintenance' },
  { to: '/services/consultancy',    label: 'Consultancy' }
];

const COMPANY_LINKS = [
  { to: '/about',     label: 'About Us', isRouter: true },
  { to: '/hrms',      label: 'HRMS',     isRouter: true },
  { to: '/#contact',  label: 'Contact',  isRouter: false }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer site-footer-rich">

      {/* ── 1. Tagline strip ──────────────────────────────── */}
      <div className="container footer-top">
        <p className="eyebrow footer-eyebrow">Let's work together</p>
        <h3 className="footer-title">
          Connected systems that work as hard as you do.
        </h3>
        <a
          href="mailto:tfxautomation@gmail.com?subject=Project%20Inquiry"
          className="btn btn-primary footer-top-cta"
        >
          Start a conversation <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* ── 2. Four-column grid ──────────────────────────── */}
      <div className="container footer-grid footer-grid-4">

        {/* Contact */}
        <div className="footer-col footer-col-contact">
          <p className="footer-col-heading">Get in touch</p>

          <div className="footer-line">
            <span className="footer-icon" aria-hidden="true">
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="footer-line-text">+91 70415 12804</span>
          </a>

          <a href="mailto:tfxautomation@gmail.com" className="footer-line footer-line-link">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <span className="footer-line-text">tfxautomation@gmail.com</span>
          </a>
        </div>

        {/* Products */}
        <nav className="footer-col footer-col-links" aria-label="Products footer navigation">
          <p className="footer-col-heading">Products</p>
          <ul className="footer-link-list footer-link-list-vertical">
            {PRODUCT_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav className="footer-col footer-col-links" aria-label="Services footer navigation">
          <p className="footer-col-heading">Services</p>
          <ul className="footer-link-list footer-link-list-vertical">
            {SERVICE_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav className="footer-col footer-col-links" aria-label="Company footer navigation">
          <p className="footer-col-heading">Company</p>
          <ul className="footer-link-list footer-link-list-vertical">
            {COMPANY_LINKS.map(l => (
              <li key={l.to}>
                {l.isRouter
                  ? <Link to={l.to} className="footer-link">{l.label}</Link>
                  : <a href={l.to} className="footer-link">{l.label}</a>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── 3. Map row (full width) ───────────────────────── */}
      <div className="container footer-map-row">
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

      {/* ── 4. Bottom strip ───────────────────────────────── */}
      <div className="container footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-brand" aria-label="The Forum">
            <Logo className="brand-mark" />
          </div>
          <p className="footer-copy">© {year} The Forum. All rights reserved.</p>
        </div>

        <div className="footer-bottom-right">
          {/* Social — replace the placeholder LinkedIn URL with
              the real handle when you have one. WhatsApp uses
              the office number from above. */}
          <ul className="footer-social" aria-label="Social links">
            <li>
              <a
                href="https://wa.me/917041512804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
          </ul>

          <p className="footer-legal">
            <a href="#privacy">Privacy</a>
            <span aria-hidden="true"> · </span>
            <a href="#terms">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
