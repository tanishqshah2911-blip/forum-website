import Breadcrumb from '../components/Breadcrumb';
import ProductAttendanceShowcase from '../components/ProductAttendanceShowcase';
import { CapabilitiesSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'Triple ID', body: 'Face, fingerprint, or RFID — employees pick what works. Each method is sub-second, accurate, and works in real-world office conditions.' },
  { title: 'Wall-mounted & rugged', body: 'A clean, durable unit built for daily use. Easy install, long lifespan, designed to disappear into the wall and run quietly for years.' },
  { title: 'Real-time logs', body: 'Every punch is timestamped and pushed to the super admin dashboard the moment it happens. No batch syncs, no missing entries.' },
  { title: 'Super admin dashboard', body: "One view across the whole organization — who's in, who's late, who's on leave, who's been working overtime. Filter by team, date, location." },
  { title: 'Multi-shift support', body: 'Configure any shift pattern — fixed, rotating, split, night, weekend. Each employee follows their assigned schedule automatically.' },
  { title: 'Leave & overtime', body: 'Leave applications, approvals, balances, and overtime calculation — all built in and tied to the same employee record.' },
  { title: 'Payroll-ready exports', body: 'Monthly attendance flows straight into payroll — fewer disputes, faster cycles, no manual reconciliation. Connects to most payroll systems.' },
  { title: 'Self-service app', body: 'Employees check their own attendance, leave balances, and shift schedules from a phone. Reduces HR queries dramatically.' },
  { title: 'Offline mode', body: "If the network drops, the unit keeps working and syncs when it's back online. The shift never starts late because of internet." },
  { title: 'Compliance reports', body: 'Audit-grade logs and statutory reports built in — useful for labour law compliance, audits, and HR investigations.' },
  { title: 'Multi-location sync', body: 'Run unlimited units across unlimited sites with one central admin. Move between locations is just another tap on the same system.' },
  { title: 'Hygienic & touchless', body: 'Face recognition is fully touchless — no shared surfaces, no shared device handling. Especially valuable for high-traffic entry points.' }
];

const faq = [
  { q: 'How fast is the recognition?', a: 'Face and fingerprint both complete in under a second. Even at peak entry times, the unit handles 30–40 punches per minute without a queue forming.' },
  { q: 'Will it work without internet?', a: 'Yes. The unit keeps running offline and syncs when the network is back. No employee ever fails to punch because of internet issues.' },
  { q: 'Can it integrate with our payroll?', a: "Yes — most common payroll systems are supported; we'll confirm during configure and build a custom connector if needed." },
  { q: 'What about visitors and contractors?', a: 'Non-employees get their own flow — RFID-based ID, separate logs, separate reporting — without mixing into the payroll-linked stream.' },
  { q: 'Can it handle multiple shifts?', a: 'Yes — fixed, rotating, split, and night shifts with overtime calculation built in. Each employee follows their assigned pattern automatically.' },
  { q: 'Multi-location?', a: "Central admin across sites, geo-fenced rules, consolidated reports, and consistent employee experience everywhere." },
  { q: 'Is face recognition hygienic?', a: "It's the most hygienic option — fully touchless. No surface contact, no shared device handling. Especially valuable for high-traffic entry points and post-pandemic safety." },
  { q: 'What about labour-law compliance?', a: 'Audit-grade logs and statutory reports are built in. We tune them to your jurisdiction during configure and keep them current under maintenance.' }
];

export default function ProductAttendance() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/products', label: 'Products' }, { label: 'Attendance' }]} />
      {/* Cinematic showcase: hero with product render that opens on
          hover, exposing internal hardware components. */}
      <ProductAttendanceShowcase />
      <CapabilitiesSection eyebrow="Capabilities" title="Clean records, every shift." items={capabilities} alt={true} />
      <FAQSection items={faq} />
      <CTASection
        title="Let's tidy up the punch sheet."
        lede="Send us your build, your headcount, or just a description of your shifts — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Attendance Inquiry"
      />
    </>
  );
}
