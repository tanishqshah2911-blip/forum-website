import Breadcrumb from '../components/Breadcrumb';
import ProductCanteenShowcase from '../components/ProductCanteenShowcase';
import { CapabilitiesSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'Triple ID', body: "Face, fingerprint, or RFID — employees pick what works. No cards, no PINs, no forgotten badges holding up the line." },
  { title: "Today's menu, on-screen", body: "The day's menu shows up the moment an employee scans in — items, prices, and dietary notes — refreshed daily by the manager from the dashboard." },
  { title: 'Token in seconds', body: 'Pick items, confirm, and a token prints (or appears on screen) for the kitchen counter. Average flow per employee under 15 seconds.' },
  { title: 'Wall-mounted & rugged', body: 'A clean, weather-resistant unit built for daily canteen use. Easy install, minimal maintenance, designed to disappear into the wall.' },
  { title: 'Manager dashboard', body: 'Live view of orders, employee history, top-selling items, and consumption trends. Filter by department, employee, or date range in seconds.' },
  { title: 'Salary-linked billing', body: 'Costs tally per employee and flow into payroll automatically — clean monthly deductions, no spreadsheets, no disputes.' },
  { title: 'Pre-order ready', body: 'Optional mobile app lets employees pre-order from their desk and pick up without queueing. Useful for short lunch breaks and busy days.' },
  { title: 'Diet & allergy aware', body: 'Dietary preferences and allergens stored per employee — the menu auto-filters and warns before an unsafe item is selected.' },
  { title: 'Offline mode', body: "If the network drops, the unit keeps running and syncs when it's back online. The lunch line never stops because of internet." },
  { title: 'Reports on tap', body: 'Daily, weekly, monthly reports — by employee, department, item, or date. Exportable to Excel, PDF, or your ERP.' },
  { title: 'Multi-meal support', body: 'Configure breakfast, lunch, dinner, or all three with separate menus, time windows, and pricing rules.' },
  { title: 'Built around your kitchen', body: 'Every install is tailored to your menu structure, billing rules, and team. No generic templates, no compromises.' }
];

const faq = [
  { q: 'How fast is the recognition?', a: 'Face and fingerprint recognition both complete in under a second. Most employees finish their entire flow — scan, select, get token — in 10–15 seconds.' },
  { q: 'Will it work without internet?', a: 'Yes. The unit operates fully offline and syncs to the cloud (or your on-premises server) when the network is back. Lunch lines never stop because of internet.' },
  { q: 'Can it integrate with our existing payroll?', a: 'Yes — add the Payroll Integration option. We connect to most common payroll systems so deductions flow automatically without manual exports.' },
  { q: 'What about visitors, contractors, or non-payroll employees?', a: 'Use RFID cards or wristbands for non-payroll users. They can be configured for cash payment, prepaid balance, or vendor billing — completely separate from the salary-linked flow.' },
  { q: 'Multiple meals per day?', a: 'Yes — Mess Hall and Banquet support breakfast, lunch, and dinner with separate menus, time windows, and pricing rules. Bistro is single-meal by default but upgradable.' },
  { q: 'Is face recognition hygienic?', a: "It's the most hygienic option — fully touchless. No surface contact, no shared device handling. Especially valuable for high-volume canteens or post-pandemic safety standards." },
  { q: 'Can we run it across multiple locations?', a: 'Yes — that\'s what Banquet is built for. Central admin across all canteens, consolidated reporting, vendor management per location, and consistent employee experience site-to-site.' },
  { q: 'What about power cuts?', a: 'Add the Power Backup option — built-in UPS keeps the unit running through short cuts. For longer outages, the offline mode preserves all transactions for sync when power returns.' }
];

export default function ProductCanteen() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/products', label: 'Products' }, { label: 'Canteen' }]} />
      {/* Cinematic showcase: hero with product render, exploded
          callouts, "How it works" flow, and tech-stack tags. */}
      <ProductCanteenShowcase />
      <CapabilitiesSection eyebrow="Capabilities" title="Every meal, accounted for." items={capabilities} alt={true} />
      <FAQSection items={faq} />
      <CTASection
        title="Let's clean up the lunch line."
        lede="Send us your build, your headcount, or just a description of your canteen — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Canteen Inquiry"
      />
    </>
  );
}
