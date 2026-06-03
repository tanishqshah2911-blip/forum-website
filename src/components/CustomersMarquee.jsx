import { useState } from 'react';

/**
 * Customers / Clients section — single horizontal strip of
 * grayscale logos, all visible at once. No heading, no name
 * labels — the logos themselves carry the message, matching
 * the reference example.
 *
 * (File name kept as CustomersMarquee.jsx for import-path
 * stability; the component itself is now a static strip.)
 *
 * Drop logo files at:
 *   public/clients/bajaj-electricals.png
 *   public/clients/privi-chemicals.png
 *   public/clients/epitage-consulting.png
 *   public/clients/assureit-networks.png
 *
 * Until those files exist, each cell shows a tasteful
 * initials placeholder so the strip never breaks.
 */

/* Each client has a `bg` color that matches the background
   of their actual logo PNG. The container fills with that
   color so the logo sits inside cleanly with no visible
   seam between the logo's own background and the container.
   Default is white — change per client if their logo uses
   a different background color. */
const CLIENTS = [
  { name: 'Bajaj Electricals', initials: 'BE', logo: '/clients/bajaj-electricals.png', bg: '#ffffff' },
  { name: 'Privi Chemicals',   initials: 'PC', logo: '/clients/privi-chemicals.png',   bg: '#ffffff' },
  { name: 'Epitage Consulting', initials: 'EC', logo: '/clients/epitage-consulting.png', bg: '#ffffff' },
  { name: 'AssureIT Networks', initials: 'AN', logo: '/clients/assureit-networks.png', bg: '#ffffff' }
];

function ClientLogo({ client }) {
  const [failed, setFailed] = useState(false);
  if (!client.logo || failed) {
    return (
      <div className="customer-logo-fallback" aria-label={client.name}>
        <span>{client.initials}</span>
      </div>
    );
  }
  return (
    <img
      src={client.logo}
      alt={client.name}
      className="customer-logo-img"
      draggable="false"
      onError={() => setFailed(true)}
    />
  );
}

export default function CustomersStrip() {
  return (
    <section className="customers-section section" aria-label="Our clients">
      <div className="container">
        <ul className="customers-row">
          {CLIENTS.map((client) => (
            <li key={client.name} className="customer-cell">
              {/* The box background is set per-client to match
                  the logo PNG's own background, so the logo
                  sits inside the box with no visible seam. */}
              <div
                className={`customer-logo-box${client.logo ? ' has-logo' : ''}`}
                style={client.logo ? { backgroundColor: client.bg } : undefined}
              >
                <ClientLogo client={client} />
              </div>
              <p className="customer-name-label">{client.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
