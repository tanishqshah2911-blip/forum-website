import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductPreview from '../components/ProductPreview';

/**
 * Product image with graceful fallback. If the image file isn't
 * present in /public yet, falls back to the abstract preview
 * instead of showing a broken-image icon + alt text.
 */
function ProductImage({ image, fallbackType }) {
  const [failed, setFailed] = useState(false);
  if (!image || failed) return <ProductPreview type={fallbackType} />;
  return (
    <>
      <span className="product-photo-glow" aria-hidden="true" />
      <img
        src={image}
        alt=""
        className="product-photo"
        draggable="false"
        onError={() => setFailed(true)}
      />
    </>
  );
}

/* Product image paths.
   Drop new product renders into public/ and update the
   `image` field to swap them in.

   Order matters — Vayu is featured first, then Canteen,
   Attendance, and Assure. */
const PRODUCTS = [
  {
    name: 'Vayu',
    href: '/products/vayu',
    previewType: 'vayu',
    chips: ['ESP32 sensor mix', 'PM · CO₂ · VOCs', 'Cloud / on-prem'],
    desc: 'Clear air, clear data, no guesswork. Vayu is a compact ESP32-powered monitor that captures live air-quality readings across a 50m radius and streams them to a dashboard on your phone — on-premises or in the cloud.'
  },
  {
    name: 'Canteen',
    href: '/products/canteen',
    image: '/canteen.png',          // drop a file here to swap renders
    previewType: 'canteen',         // fallback when image missing
    chips: ['Face Recognition', 'Fingerprint', 'RFID', 'Billing Dashboard'],
    desc: "Smart canteen automation with face, fingerprint, and RFID-based employee recognition, order logging, menu control, and salary-linked billing."
  },
  {
    name: 'Attendance',
    href: '/products/attendance',
    image: '/attendance.png',         // drop a file here to swap renders
    previewType: 'attendance',        // fallback when image missing
    chips: ['Face Verification', 'Fingerprint', 'RFID', 'Punch Logs'],
    desc: 'Biometric attendance automation with face, fingerprint, and RFID-based punch-in, employee logs, reporting, and real-time dashboard visibility.'
  },
  {
    name: 'Assure It',
    href: '/products/assure',
    previewType: 'assure',
    chips: ['Asset lifecycle', 'Barcode · QR · RFID', 'ERP integration'],
    desc: "Every asset, accounted for. Assure It is a complete inventory management system for corporate teams — track every device, asset, and consumable across your organization, from procurement to retirement, with full lifecycle history."
  },
  {
    name: 'PhotoHub',
    href: '/products/photohub',
    previewType: 'photohub',
    chips: ['Photo backup', 'Cloud storage', 'Mobile · Web', 'Affordable plans'],
    desc: "All your photos, one place, fair pricing. PhotoHub is affordable cloud storage for your memories — automatic backups from any device, smart albums, and full-resolution access anytime, without the premium price tag of the big platforms."
  }
];

export default function Products() {
  const navigate = useNavigate();

  /**
   * Whole-card click handling.
   *
   * Each product card is fully clickable — clicking anywhere on the
   * card navigates to that product's detail page. The visible
   * "Explore →" CTA is now a styled span (not a nested anchor),
   * because nesting another link inside the clickable card would be
   * invalid HTML and would also double-fire navigation.
   *
   * Accessibility:
   *   • role="button" + tabIndex={0} so keyboard users can focus it.
   *   • Enter / Space key both trigger navigation.
   *   • aria-label announces the destination.
   */
  const handleCardActivate = (href) => navigate(href);
  const handleCardKeyDown = (e, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">The collection</p>
          <h1 className="page-title">Products</h1>
          <p className="page-lede">
            Each piece in our catalogue is chosen with care. Browse below — photos, names, and descriptions for every item. More will be added step by step.
          </p>
        </div>
      </section>

      <section className="section section-circuit section-stage">
        <div className="container">
          <div className="grid grid-3 product-grid product-stage-grid">
            {PRODUCTS.map(p => (
              <article
                key={p.name}
                className={`product-card glass-card holo-card product-card-clean ${p.image ? 'has-photo' : ''}`}
                role="button"
                tabIndex={0}
                aria-label={`Open ${p.name} product details`}
                onClick={() => handleCardActivate(p.href)}
                onKeyDown={(e) => handleCardKeyDown(e, p.href)}
              >
                <div className="product-image">
                  {/* Drop a new file into public/ and update `image`
                      in PRODUCTS above to swap the product render. */}
                  <ProductImage image={p.image} fallbackType={p.previewType} />
                  {/* Feature chip strip — appears at the bottom of the image
                      area on hover. Never overlaps the description. */}
                  <div className="product-chips" aria-hidden="true">
                    {p.chips.map((c, i) => (
                      <span key={i} className="product-chip" style={{ '--i': i }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className="product-body">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.desc}</p>
                  {/* CTA is purely visual now — the entire <article>
                      handles navigation. Using a span avoids the
                      invalid-HTML / double-navigation issue that a
                      nested <Link> would create. */}
                  <span className="product-link" aria-hidden="true">
                    Explore <span className="arrow">→</span>
                  </span>
                </div>
                <span className="card-sweep" aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="catalogue-note">More products coming soon.</p>
        </div>
      </section>
    </>
  );
}
