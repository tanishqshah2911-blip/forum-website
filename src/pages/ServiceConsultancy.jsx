import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'Feature scoping', body: 'What ships in v1, what waits, what gets cut. We help you focus on the features that actually move the needle, not the ones that sound good on paper.' },
  { title: 'Tech stack selection', body: "Frontend, backend, database, hosting, third-party services. We pick the right tools for your scale, team, and budget — not whichever is trendy." },
  { title: 'Architecture design', body: 'System diagrams, data models, API contracts, and infrastructure plans — the blueprints your developers will actually use to build from.' },
  { title: 'Cost & timeline estimation', body: 'A realistic budget and timeline you can defend to investors, partners, or your own boss. No padded numbers, no hidden surprises.' },
  { title: 'Team structure', body: 'How many engineers, designers, and PMs you need — and at what stage. Whether to hire, contract, or partner with a vendor.' },
  { title: 'Vendor evaluation', body: "If you're hiring an agency or contractors, we help you write the brief, evaluate proposals, and pick the right partner — saving you months of mistakes." },
  { title: 'Code & architecture review', body: 'For existing projects: a forensic look at code quality, architecture choices, technical debt, and what\'s worth refactoring vs. keeping.' },
  { title: 'Security & performance audits', body: 'Spot vulnerabilities, performance bottlenecks, and compliance gaps before they hurt — with prioritized fixes you can actually act on.' },
  { title: 'Build oversight', body: "Optional ongoing review during the build — milestone checks, code reviews, and quality gates so the project doesn't drift off-spec." }
];

const process = [
  { title: 'Brief', body: "You share your idea, your existing material, and the questions you need answered. We respond with what we'd cover and how long it'd take." },
  { title: 'Workshop', body: 'Working sessions with your team — surfacing assumptions, mapping requirements, and pressure-testing your ideas in real time.' },
  { title: 'Analyze', body: 'We do the deep work — research, design, calculation, comparison — and produce concrete recommendations, not vague directions.' },
  { title: 'Recommend', body: 'A clear written report and walk-through covering features, architecture, tech, cost, timeline, and risks. Yours to keep, no lock-in.' },
  { title: 'Roadmap', body: 'Optional ongoing engagement — milestone reviews, vendor management, build oversight — so the plan actually gets executed.' }
];

const faq = [
  { q: 'I just have an idea — is consultancy too early?', a: "That's exactly the right time. Discovery is built for early-stage ideas — getting clarity before you spend a rupee on engineering is the whole point. Most expensive mistakes happen because people skipped this step." },
  { q: 'How long does an engagement last?', a: 'Discovery: 2–4 weeks. Architecture: 3–6 weeks. Audit: 1–3 weeks depending on codebase size. Full Engagement: typically runs through your build, often 3–6 months or longer.' },
  { q: 'Can you also build what we plan?', a: 'Yes — our Website, Device Console, and ERP services can take over from where consultancy ends. Or we can hand the plan to your in-house team or another vendor and stay on as advisors.' },
  { q: 'Will you sign an NDA?', a: 'Always. We sign mutual NDAs before any working session — your idea, code, and data stay confidential.' },
  { q: 'Are you tech-agnostic, or do you push specific tools?', a: "Tech-agnostic. We recommend whatever fits your problem, scale, team, and budget — not what's trendy or what we happen to know best." },
  { q: 'What if I want a second opinion on existing code?', a: "That's the Audit engagement. We review code, architecture, security, and performance — and give you a clear, prioritized report on what's solid, what's at risk, and what to fix first." },
  { q: 'Do I keep the deliverables?', a: 'Yes — every report, diagram, and recommendation is yours to keep. No lock-in, no retainer required after delivery.' }
];

export default function ServiceConsultancy() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/services', label: 'Services' }, { label: 'Consultancy' }]} />
      <DetailHero
        eyebrow="Service · Consultancy"
        title="Your idea, scoped right."
        accentWord="scoped"
        lede="If you're planning to build software from scratch — or want a sharp second opinion on what you've already started — our consultants walk you through every decision. Which features matter, which tech to pick, how to structure the build, and how long it should take. So your idea becomes something real, buildable, and built right the first time."
        primaryCta="Get a Quote"
      />
      <CapabilitiesSection eyebrow="What we cover" title="Every decision, thought through." items={capabilities} alt={true} />
      <ProcessSection steps={process} title="Five steps. No fluff." />
      <FAQSection items={faq} />
      <CTASection
        title="Let's plan it right."
        lede="Send us your idea, your codebase, or just a brief — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Consultancy Engagement Inquiry"
      />
    </>
  );
}
