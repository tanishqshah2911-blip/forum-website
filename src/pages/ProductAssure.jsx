import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'Complete asset profiles', body: 'Every device, every detail — serial numbers, specs, purchase date, warranty, vendor, location, owner, condition, photos. The full story for every item, in one record.' },
  { title: 'Scan and go', body: 'Barcode, QR, or RFID scanning from the mobile app turns asset audits and check-outs into seconds-long actions. No spreadsheets, no missed entries.' },
  { title: 'Procurement to retirement', body: "Track every asset across its full lifecycle — purchased, deployed, transferred, repaired, retired. Nothing falls off the books, nothing gets lost in a closet." },
  { title: 'Location tracking', body: 'Know where every asset is — site, floor, room, person, or off-site. Filter the inventory to any cut you need in seconds.' },
  { title: 'Assignments & ownership', body: 'Issue assets to employees, contractors, or departments with check-out / check-in workflows. Audit who has what, when they got it, and what condition it returned in.' },
  { title: 'Maintenance scheduling', body: "Schedule periodic checks, calibrations, and repairs for every asset. Get alerted before things go overdue, log work done in the asset's history." },
  { title: 'Audit trail', body: "Every change, every transfer, every status update logged with who, when, and why. Audit-ready records, always — no manual reconstruction." },
  { title: 'Reports & analytics', body: 'Inventory value, asset utilization, maintenance costs, depreciation, location distribution — every number your finance and ops teams need, ready on demand.' },
  { title: 'Mobile-first', body: 'Native app for floor staff and field teams. Scan, check-out, log issues, and view history without opening a laptop.' },
  { title: 'Custom fields per asset type', body: "Devices, machinery, vehicles, furniture, consumables — each has different fields that matter. Configure exactly what you track per category." },
  { title: 'Integrations', body: "Connect to your ERP, finance, procurement, HR, and helpdesk so asset data flows where it's needed without manual exports." },
  { title: 'Depreciation & compliance', body: 'Built-in depreciation methods (straight-line, written-down, custom), tax-ready reports, and statutory compliance for Indian and international standards.' }
];

const process = [
  { title: 'Discover', body: "We map your asset categories, locations, lifecycle, and team structure — so Assure fits the way you actually run inventory." },
  { title: 'Configure', body: "Set up categories, custom fields, locations, roles, and integrations. Signed off before any data moves." },
  { title: 'Migrate', body: 'Existing inventory — spreadsheets, ERP exports, paper records — cleaned, mapped, and migrated with full validation.' },
  { title: 'Tag', body: "Print and apply barcode / QR / RFID labels on every asset. We can do this with you on-site for the initial rollout." },
  { title: 'Train', body: 'Role-specific training — admins, ops staff, field teams. Short, focused sessions so everyone is confident on day one.' },
  { title: 'Launch & support', body: 'Go-live with hands-on support during the first cycle. Optional 24/7 maintenance contract for ongoing uptime and updates.' }
];

const faq = [
  { q: 'What kind of assets can Assure track?', a: 'Any kind — IT equipment, machinery, vehicles, furniture, consumables, custom categories. Each category gets its own custom fields and workflows tuned to how you actually track it.' },
  { q: 'Barcode, QR, or RFID — which should we use?', a: 'Barcode is cheapest and fastest to deploy. QR is best for mixed teams since any phone scans it. RFID is best for high-volume facilities where you want walk-by audits. Mix-and-match is fully supported.' },
  { q: 'Can it integrate with our ERP / finance system?', a: 'Yes — Assure integrates with most major ERP and accounting systems (Tally, SAP, Oracle, Zoho, custom). Asset purchases, depreciation, and write-offs flow automatically.' },
  { q: 'What about migrating data from our current system?', a: "Add the Data Migration option. We clean, map, and validate your existing data — spreadsheets, ERP exports, paper records — before go-live so nothing is lost in the move." },
  { q: 'Multi-location and multi-entity?', a: "Yes. We support multi-location and multi-entity setups with per-site rules, transfer workflows, and consolidated reporting." },
  { q: 'Can we track depreciation for tax compliance?', a: 'Yes — built-in depreciation methods (straight-line, written-down value, custom) with tax-ready reports for Indian and international standards.' },
  { q: 'Does it have a mobile app?', a: 'Yes — native iOS and Android app for scanning, check-outs, audits, and field updates. Works offline and syncs when reconnected.' },
  { q: 'Can it handle custom fields per asset type?', a: 'Yes — every asset category can have its own custom fields, mandatory fields, and workflows. Vehicles get registration and fuel; servers get IP and OS; furniture gets condition and material.' }
];

export default function ProductAssure() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/products', label: 'Products' }, { label: 'Assure' }]} />
      <DetailHero
        eyebrow="Product · Assure"
        title="Every asset, accounted for."
        accentWord="accounted"
        lede="Assure is a complete inventory management system for corporate teams. Track every device, asset, and consumable across your organization — from procurement to retirement, with full lifecycle history, location, owner, and condition recorded for every item. Built for IT departments, ops teams, and admins who need to know exactly what they have, where it is, and who's using it."
        primaryCta="Get a Quote"
      />
      <CapabilitiesSection eyebrow="Capabilities" title="Know what you have. Where it is. Who has it." items={capabilities} alt={true} />
      <ProcessSection steps={process} title="Six steps. No surprises." eyebrow="How Assure works" />
      <FAQSection items={faq} />
      <CTASection
        title="Let's get your inventory in order."
        lede="Send us your build, your asset list, or just a description of what you need to track — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Assure Inquiry"
      />
    </>
  );
}
