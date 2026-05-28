import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'Inventory management', body: 'Stock levels, reorder points, multi-location, SKU tracking, and barcode-ready workflows. Always know what you have and where it is.' },
  { title: 'Finance & accounting', body: 'General ledger, accounts payable / receivable, invoicing, GST, and audit-ready reports. Built around how Indian businesses actually run their books.' },
  { title: 'HR & payroll', body: 'Employee records, attendance, leave, payroll runs, and compliance forms — connected to your Attendance device for clean, automatic data flow.' },
  { title: 'Sales & CRM', body: 'Leads, quotes, orders, customers, and follow-ups — all in one pipeline so nothing slips through the cracks.' },
  { title: 'Procurement', body: 'Purchase orders, vendor management, approval flows, and goods-received tracking — the buy-side, properly organized.' },
  { title: 'Projects & tasks', body: 'Track projects, milestones, time, and resources. Tie effort directly to costs and revenue for true profitability per project.' },
  { title: 'Reporting & analytics', body: 'Real-time dashboards, scheduled reports, and custom views — every number in your business, ready when you need it.' },
  { title: 'Custom workflows', body: 'Approvals, notifications, and automation tuned to your processes — not a generic template, but how your team actually operates.' },
  { title: 'API + integrations', body: 'Connect to your existing tools — banking, e-commerce, payment gateways, BI platforms — so data flows cleanly across the stack.' }
];

const process = [
  { title: 'Discover', body: 'Workshop with your team to map workflows, pain points, and what your ERP must do — before any design begins.' },
  { title: 'Design', body: "Module mix, workflow design, integration map, and a clear data model. You sign off on the blueprint before build." },
  { title: 'Configure', body: 'Build out the modules, custom workflows, approvals, dashboards, and roles — tested at every milestone.' },
  { title: 'Migrate', body: 'Existing data — customers, vendors, inventory, ledgers — cleaned, mapped, and migrated with full validation.' },
  { title: 'Train', body: 'Role-specific training so every team member knows their part. Documentation handed over, not hidden.' },
  { title: 'Launch & support', body: 'Go-live with hands-on support. Optional maintenance contract for ongoing updates, fixes, and improvements.' }
];

const faq = [
  { q: 'Custom build or off-the-shelf platform?', a: "We do both — we'll recommend whichever fits your needs and budget best. For most businesses, we build on top of a proven open-source platform (Odoo, ERPNext) and customize heavily so you get speed of deployment with full flexibility." },
  { q: 'How long does an ERP rollout take?', a: 'Core typically 8–12 weeks. Suite 12–20 weeks. Enterprise 5–9 months depending on scope and migration complexity. We give you a clear timeline after Discover.' },
  { q: 'Can it integrate with our current systems?', a: 'Yes. We integrate with banking, e-commerce platforms, payment gateways, BI tools, custom hardware, and almost any system with an API. We map every integration during Design.' },
  { q: 'What about migrating data from our old system?', a: 'Add the Data Migration option. We export, clean, map, and validate your existing data — customers, vendors, inventory, ledgers, transactions — before go-live. No surprises on day one.' },
  { q: 'Will our team be trained?', a: 'Yes — structured, role-specific training is part of the Train step. Sales gets sales training, finance gets finance, ops gets ops. Add the Training & Onboarding option for deeper sessions.' },
  { q: 'Can it handle multiple companies / branches?', a: "Yes — that's the Multi-Entity option, included in the Enterprise variation by default. Run multiple companies under one system with clean separation and consolidated reporting." },
  { q: 'What about GST and Indian compliance?', a: 'Built in. GST returns, e-invoicing, TDS, and statutory reporting are all part of the Finance module — set up correctly the first time.' },
  { q: 'What happens after launch?', a: 'You can self-manage, or sign up for our Maintenance contract for ongoing updates, fixes, performance tuning, and on-call support. Most clients pick the latter.' }
];

export default function ServiceERP() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/services', label: 'Services' }, { label: 'ERP Systems' }]} />
      <DetailHero
        eyebrow="Service · ERP Systems"
        title="One system for the whole business."
        accentWord="whole"
        lede="From inventory and finance to HR, sales, and operations, we design, deploy, and customize ERP systems that connect every part of your business into one clear workflow. Built to fit how you actually work — no off-the-shelf headaches, no half-finished modules."
        primaryCta="Get a Quote"
      />
      <CapabilitiesSection eyebrow="Modules" title="Everything connected. Nothing missing." items={capabilities} alt={true} />
      <ProcessSection steps={process} title="Six steps. No surprises." />
      <FAQSection items={faq} />
      <CTASection
        title="Let's connect your operations."
        lede="Send us your build, your current setup, or just a description of how you run today — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="ERP System Inquiry"
      />
    </>
  );
}
