import { useNavigate } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';

const SERVICES = [
  {
    name: 'Website Development',
    href: '/services/website',
    icon: 'website',
    desc: "Websites that work, bots that don't sleep. From single landing pages to full multi-page platforms, we design and build custom websites for brands and businesses — and, when you need it, intelligent chatbots that handle queries, sales, and support around the clock."
  },
  {
    name: 'Device Console',
    href: '/services/device-console',
    icon: 'console',
    desc: 'One dashboard, every device. We build the software layer for your hardware — custom consoles that collect, display, and control live data from your devices, on-premises or in the cloud.'
  },
  {
    name: 'Maintenance',
    href: '/services/maintenance',
    icon: 'maintenance',
    desc: "Always up, always running. Routine health checks, quick fixes, and on-call support for everything you run — built by us, bought elsewhere, or made yourself. Updates, repairs, and smooth operation in one steady relationship."
  },
  {
    name: 'CCTV Solutions',
    href: '/services/cctv',
    icon: 'cctv',
    desc: 'Eyes on every corner. End-to-end CCTV — survey, install, configure, and maintain — with smart triggers, real-time alerts, and remote viewing from single-room setups to multi-site surveillance networks.'
  },
  {
    name: 'ERP Systems',
    href: '/services/erp',
    icon: 'erp',
    desc: 'Run the whole business from one place. We design, deploy, and customize ERP systems that connect operations — inventory, HR, finance, and more — into a single, clear workflow.'
  },
  {
    name: 'Consultancy',
    href: '/services/consultancy',
    icon: 'consulting',
    desc: "Your dream software, scoped right. If you're planning to build software from scratch, we walk you through every decision — which features to ship, which tech to pick, how to structure the build — so your idea becomes something real, buildable, and built the right way the first time."
  }
];

export default function Services() {
  const navigate = useNavigate();

  /* Whole service card is clickable — same pattern as Products.
     Click anywhere on the card (icon, name, or empty area) to
     open the service's detail page. The "Explore →" CTA is
     decorative; the <article> handles navigation. Keyboard
     users can focus and press Enter / Space. */
  const open = (href) => navigate(href);
  const onKey = (e, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">What we offer</p>
          <h1 className="page-title">Services</h1>
          <p className="page-lede">
            From custom websites to full ERP rollouts, we handle the work end to end. Below is everything The Forum offers — pick what fits, or get in touch for a tailored scope.
          </p>
        </div>
      </section>

      <section className="section section-circuit">
        <div className="container">
          <div className="grid grid-3 product-grid">
            {SERVICES.map(s => (
              <article
                key={s.name}
                className="product-card service-card has-icon product-card-clean"
                role="button"
                tabIndex={0}
                aria-label={`Open ${s.name} service details`}
                onClick={() => open(s.href)}
                onKeyDown={(e) => onKey(e, s.href)}
              >
                <ServiceIcon type={s.icon} />
                <div className="product-body">
                  <h3 className="product-name">{s.name}</h3>
                  <p className="product-desc">{s.desc}</p>
                  {/* Decorative CTA — card itself navigates. */}
                  <span className="product-link" aria-hidden="true">
                    Explore <span className="arrow">→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="catalogue-note">More services coming soon.</p>
        </div>
      </section>
    </>
  );
}
