import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const scope = [
  { title: 'Built by us', body: 'Anything The Forum designed and shipped — websites, devices, consoles, ERP, CCTV — handed off into a steady support relationship so it stays as good as the day it went live.' },
  { title: 'Bought from elsewhere', body: 'Hardware or software you bought off-the-shelf or from another vendor. We learn your setup, take ownership of the upkeep, and become the single number to call.' },
  { title: 'Built by your team', body: 'In-house systems, internal tools, custom builds — even if your original developer is long gone, we pick up the maintenance and keep things running smoothly.' }
];

const capabilities = [
  { title: 'Routine health checks', body: 'Scheduled inspections — weekly, monthly, or quarterly — to catch issues before they become outages and keep performance steady.' },
  { title: 'Updates & patches', body: "Software, firmware, and OS updates applied carefully — tested in staging, rolled out without breaking what's already working." },
  { title: 'Repairs & fixes', body: 'When something breaks, we diagnose and fix — remote first, on-site when needed. Most issues resolved in hours, not days.' },
  { title: 'Performance tuning', body: 'Slow systems, lagging dashboards, choked databases — we tune and optimize so everything runs the way it should.' },
  { title: 'Emergency response', body: "On-call support when things go wrong urgently. Priority lines, fast triage, immediate action — your business doesn't wait." },
  { title: 'Remote & on-site', body: 'Most issues solved remotely. When physical access is needed, a technician is dispatched without delay or extra paperwork.' },
  { title: 'Backups & recovery', body: 'Automated backups, tested recovery, and disaster plans. If the worst happens, your data and uptime are already protected.' },
  { title: 'Vendor management', body: 'We handle warranty claims, third-party tickets, and vendor escalations on your behalf — one number, one point of contact.' },
  { title: 'Documentation & training', body: 'Every change logged, every system documented, your team trained on what they need to know. No black boxes left behind.' }
];

const process = [
  { title: 'Audit', body: "We inventory your systems — built by us, bought, or your own — and map what's running, what's at risk, and what needs attention." },
  { title: 'Plan', body: 'Based on the audit, we propose a tier and a set of add-ons matched to your priorities and budget. You approve before anything starts.' },
  { title: 'Onboard', body: 'Documentation, monitoring, escalation paths, and team training. By the end of week one, we know your stack as well as you do.' },
  { title: 'Maintain', body: 'Routine checks, updates, fixes, and on-call response — all running in the background so your team never has to think about it.' },
  { title: 'Review', body: "Monthly or quarterly reviews — what we did, what's coming, what should change. Maintenance evolves with your business." }
];

const faq = [
  { q: 'Do you only maintain what you built?', a: "No — we maintain whatever you run, regardless of who built it. Hardware bought off-the-shelf, software from other vendors, internal builds your team made — we take ownership and become the single point of contact." },
  { q: 'What if my original developer is gone?', a: "That's a common case. We do a thorough audit, document the system from scratch if needed, and pick up maintenance from there. No prior knowledge required." },
  { q: 'How fast is your emergency response?', a: 'On Watch tier: same business day. On Sustain: within 4 hours during business hours, with on-call escalation. On Guardian: 24/7 priority response, typically under an hour.' },
  { q: 'Do you do remote or on-site?', a: 'Both. Most issues are resolved remotely. When physical access matters — replacing hardware, network rewiring, on-site diagnostics — we dispatch a technician without delay.' },
  { q: 'Can you handle our vendor warranties for us?', a: 'Yes — add the Vendor Management option. We manage warranty claims, RMA tickets, and third-party escalations on your behalf so you have one number to call.' },
  { q: 'Will my team be trained?', a: "Yes — onboarding includes a session for your team covering basic operations, common fixes, and escalation paths, so simple issues don't need a ticket. Add the Team Training add-on for deeper sessions." },
  { q: "What's the contract length?", a: "Standard is 12 months, paid monthly or quarterly. Shorter trial periods available for new relationships. Cancel with 30 days' notice." }
];

export default function ServiceMaintenance() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/services', label: 'Services' }, { label: 'Maintenance' }]} />
      <DetailHero
        eyebrow="Service · Maintenance"
        title="Whatever you run, we keep it running."
        accentWord="running"
        lede="Maintenance covers the system you actually have — whether we built it, you bought it, or your team built it themselves. Updates, repairs, performance tuning, and on-call support, all in one ongoing relationship. We keep your hardware and software smooth so you can focus on the work, not the wiring."
        primaryCta="Get a Quote"
      />
      <section id="scope" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we maintain</p>
            <h2>Built by us. Bought elsewhere. Or made yourself.</h2>
            <p className="section-lede">
              Our maintenance isn't tied to what we built. If it's running in your business, we'll look after it.
            </p>
          </div>
          <div className="grid grid-3 capability-grid">
            {scope.map((c, i) => (
              <article key={i} className="capability-card">
                <span className="capability-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CapabilitiesSection eyebrow="What we do" title="Everything that keeps a system smooth." items={capabilities} alt={true} />
      <ProcessSection steps={process} />
      <FAQSection items={faq} />
      <CTASection
        title="Let's keep it running."
        lede="Send us your build, your inventory, or just a description of what you run — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Maintenance Plan Inquiry"
      />
    </>
  );
}
