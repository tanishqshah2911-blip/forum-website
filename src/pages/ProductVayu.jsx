import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'ESP32 sensor core', body: 'Compact, low-power ESP32-based station — fast, reliable, and small enough to disappear into the wall or ceiling. Built for continuous duty.' },
  { title: 'Modular sensor mix', body: 'Pick exactly what you need — PM, CO₂, VOCs, NO₂, O₃, SO₂, noise, light, temperature, humidity. Add or swap sensors any time.' },
  { title: '50m radius coverage', body: 'Each station senses the air around it — typical effective coverage of about 50 metres in open layouts. Add more stations to cover larger areas.' },
  { title: 'Live dashboard', body: "Real-time readings, trends, and alerts on a clean mobile dashboard. Open the app, see your air, take action — that's the entire experience." },
  { title: 'Smart alerts', body: "Set thresholds for any sensor and get notified by SMS, email, push, or webhook the moment they're crossed. Stay informed without checking constantly." },
  { title: 'Cloud or on-premises', body: 'Run on-premises for full data sovereignty, in the cloud for zero-maintenance scale, or hybrid for the best of both. Your call, your control.' },
  { title: 'Historical analytics', body: 'Every reading is logged and searchable. Spot patterns, compare timeframes, generate reports — turn long-term data into informed decisions.' },
  { title: 'Forum-managed console', body: 'Optional — let our team run the dashboard, monitor thresholds, and escalate issues to you. Or take the keys yourself; both work.' },
  { title: 'API + integrations', body: 'Plug Vayu data into your BMS, ERP, BI tools, or HVAC system — so air-quality readings drive automatic responses across your stack.' },
  { title: 'Public AQI display', body: 'Optional lobby or entrance screens that show live air quality to staff and visitors — useful for offices, schools, and public spaces.' },
  { title: 'Multi-zone fleet view', body: 'Manage many stations across many spaces from one console — compare zones, drill into a single station, or see the whole site at a glance.' },
  { title: 'Built around your space', body: 'Every install is tailored — sensor mix, placement, thresholds, alerts. No generic templates, no compromises.' }
];

const process = [
  { title: 'Survey', body: 'We map your space, identify the right station placements, and confirm power, network, and sensor selection for your environment.' },
  { title: 'Configure', body: 'Sensor mix, deployment mode, dashboard layout, alert thresholds, and integrations — all signed off before any hardware moves.' },
  { title: 'Install', body: 'Mount the stations, run network and power, set up the cloud or on-premises console. Clean install, minimal disruption.' },
  { title: 'Calibrate', body: 'Each sensor calibrated to your environment. Baselines established, thresholds tuned, alerts tested before go-live.' },
  { title: 'Launch & support', body: 'Go-live with hands-on support. Optional 24/7 maintenance for ongoing calibration, recalibration, and uptime.' }
];

const faq = [
  { q: 'Indoor or outdoor?', a: 'Both. Prana is designed for indoor use; Pawan is weatherproof for outdoor and industrial environments; Akash mixes both for multi-zone deployments.' },
  { q: 'How accurate are the readings?', a: "Each sensor is calibrated to its environment during install and regularly recalibrated under maintenance. Readings are research-grade for the chosen sensor class — we'll match accuracy needs to budget during Configure." },
  { q: 'Can I add sensors later?', a: 'Yes — the modular design means you can add or swap sensors at any time. No rip-and-replace, no full redeployment.', },
  { q: "What's the actual range?", a: 'Each station has roughly 50m of effective coverage in open layouts. Walls, partitions, and air flow patterns can reduce it — Survey identifies the right station count for your space.' },
  { q: 'Cloud or on-premises — which is right for me?', a: "Cloud is best for distributed teams and zero-maintenance scale. On-premises is best for regulated industries and sensitive data. Hybrid splits the difference. We'll recommend during Configure." },
  { q: 'Can it integrate with my BMS or HVAC?', a: 'Yes — add the HVAC / BMS Integration option. Air-quality readings can drive automated ventilation, filtration, or alerts in your existing system.' },
  { q: 'Power and battery?', a: 'Stations are wall-powered with optional battery backup (Power Backup add-on) for short outages. Battery-only versions available for portable / field deployments on request.' },
  { q: 'Multiple sites?', a: 'Yes — Akash is built for multi-site deployments. Central admin, consolidated reporting, comparative views, and per-site dashboards all included.' }
];

export default function ProductVayu() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/products', label: 'Products' }, { label: 'Vayu' }]} />
      <DetailHero
        eyebrow="Product · Vayu"
        title="Know what you're breathing."
        accentWord="breathing"
        lede="Vayu turns invisible air into visible data. ESP32-powered sensor stations track everything from PM2.5 and CO₂ to volatile compounds across a 50m radius — streaming real-time readings to a dashboard on your phone, on-premises or in the cloud. Pick your sensor mix, choose your deployment, and breathe easier knowing what's actually in the air."
        primaryCta="Get a Quote"
      />
      <CapabilitiesSection eyebrow="Capabilities" title="Every reading, on your phone." items={capabilities} alt={true} />
      <ProcessSection steps={process} eyebrow="How Vayu works" />
      <FAQSection items={faq} />
      <CTASection
        title="Let's measure the air."
        lede="Send us your build, your space, or just a description of what you want to monitor — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Vayu Inquiry"
      />
    </>
  );
}
