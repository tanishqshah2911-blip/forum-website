import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const process = [
  { title: 'Discover', body: "Quick call or brief. We map your goals, audience, and scope so we're all aligned before anything starts." },
  { title: 'Design', body: "Wireframes and visuals you can review and approve. Nothing gets built until you're happy with how it looks." },
  { title: 'Build', body: 'Code, content, and integrations come together. Regular check-ins so there are no last-minute surprises.' },
  { title: 'Launch', body: "Domain set up, hosting configured, final QA done. We push it live and make sure everything is running clean." },
  { title: 'Support', body: "Optional maintenance contract for ongoing updates, fixes, and improvements. We don't disappear after launch." }
];

const faq = [
  { q: 'How long does a website take?', a: 'Landing pages typically ship in 1–2 weeks. Multi-page sites in 3–5 weeks. CMS, e-commerce, and AI-bot builds usually run 6–10 weeks depending on scope. We give you a clear timeline before we start.' },
  { q: 'Will I be able to update the site myself?', a: 'Yes — most of our builds come with a CMS so you can edit text, swap images, and publish posts without touching code. We also include a quick training call.' },
  { q: 'Do you handle hosting and the domain?', a: "Yes. We register your domain, configure hosting, set up SSL, and hand you full ownership." },
  { q: 'What about maintenance after launch?', a: 'Optional but recommended. Our maintenance contract covers updates, fixes, security patches, and on-call support. It pairs with our Maintenance service.' },
  { q: 'Can you redesign an existing site?', a: "Absolutely. We'll audit your current site first, then propose the right approach." },
  { q: 'Can you build a bot or automation on top?', a: 'Yes — we can pair any website with an intelligent chatbot trained on your business, or build custom automations beyond chatbots.' }
];

export default function ServiceWebsite() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/services', label: 'Services' }, { label: 'Website Development' }]} />
      <DetailHero
        eyebrow="Service · Website Development"
        title="Your idea, engineered into a website."
        accentWord="engineered"
        lede="From single landing pages to full platforms with AI built in — we design, build, and ship custom websites end to end. Tell us what you need and we'll quote your build."
        primaryCta="Get a Quote"
      />
      <ProcessSection steps={process} alt={false} />
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Case study</p>
            <h2>Assure — website &amp; AI bot.</h2>
            <p className="section-lede">
              We built Assure's website and paired it with an intelligent chatbot trained on their business — handling customer queries, capturing leads, and freeing up the team for higher-value work. Full case study coming soon.
            </p>
          </div>
        </div>
      </section>
      <FAQSection items={faq} />
      <CTASection
        title="Let's build it."
        lede="Send us your build, your brief, or just a rough idea — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Website Project Inquiry"
      />
    </>
  );
}
