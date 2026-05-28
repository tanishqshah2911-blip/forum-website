import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'High-resolution cameras', body: '1080p, 2K, or 4K cameras tuned to your space. Wide-angle, fixed, dome, or PTZ — we pick what fits each location best.' },
  { title: 'Night vision & low-light', body: "Infrared and starlight sensors keep clarity through dusk, darkness, and adverse conditions — coverage doesn't clock off at sunset." },
  { title: 'AI smart detection', body: 'Person, vehicle, license plate, and facial recognition — your system tells the difference between a real event and a falling leaf.' },
  { title: 'Custom alerts & rules', body: 'Every motion type, error code, and event can be tuned to your needs. Set time windows, severity levels, recipients, and escalation chains — alerts work exactly the way your team wants them to.' },
  { title: 'Health monitoring', body: 'The moment a camera drops offline or shows a fault, you know. Diagnostic info comes attached to every alert, so you (or our team) can get it back online fast — no silent blind spots.' },
  { title: '24/7 maintenance', body: 'On-call support around the clock — remote diagnosis, guided fixes, or a technician dispatched. Quarterly checks, lens cleaning, and firmware updates keep the whole system sharp.' },
  { title: 'Cloud + on-site storage', body: 'Local NVR/DVR, cloud backup, or both. Choose your retention period — days, weeks, or months — depending on your need.' },
  { title: 'Mobile + desktop', body: 'Live view, playback, and controls on any device. Check the front door from your phone or run a control room from a wall of screens.' },
  { title: 'Multi-user access', body: 'Role-based logins so the right people see the right cameras. Owners see everything; security sees zones; auditors see logs.' },
  { title: 'Two-way audio', body: "Speak through the camera. Useful for delivery instructions, reception greetings, or letting an intruder know they've been spotted." },
  { title: 'Reliable, always', body: "Surge protection, weather-rated housings, and uninterrupted power options. Built to keep watching even when conditions don't cooperate." }
];

const process = [
  { title: 'Survey', body: 'We walk the property, map blind spots, and identify where each camera will deliver the most value — physically and operationally.' },
  { title: 'Design', body: "Camera plan, network architecture, storage layout. You see exactly what's going where before any cabling happens." },
  { title: 'Install', body: 'Cameras, cabling, NVR/DVR, network gear — installed cleanly with minimal disruption to your space and operations.' },
  { title: 'Configure', body: 'Network, alerts, AI rules, user accounts, mobile apps. We hand you a working system with full training for your team.' },
  { title: 'Support', body: '24/7 on-call support — remote diagnosis, guided fixes, technician dispatch when needed. Quarterly checks, lens cleaning, and firmware updates keep the system sharp.' }
];

const faq = [
  { q: 'Do you handle residential and commercial both?', a: "Yes. Watch fits homes and small properties, Watchtower fits offices and shops, Citadel fits warehouses, factories, and multi-site operations. We've installed across all three." },
  { q: 'Do I need internet for remote viewing?', a: 'Internet is needed for live remote viewing, alerts, and cloud backup. On-site recording works without internet — footage is saved locally on the NVR and is accessible whenever you reach the device.' },
  { q: 'How long is footage stored?', a: 'Default is 7 days on-site. Add the "Extended retention" option for 30, 60, or 90 days. Cloud backup can run independently with its own retention window.' },
  { q: 'Do the cameras work at night?', a: 'Yes — infrared and low-light sensors are standard. We tune each camera based on the lighting conditions of its location during the survey.' },
  { q: 'Can multiple people access the system?', a: 'Yes — with role-based permissions. Owners can see everything; security teams see assigned zones; auditors see logs only. You decide who sees what.' },
  { q: 'How secure is it? Can it be hacked?', a: "We use encrypted streams, strong authentication, and segmented networks so cameras can't be reached from the public internet. All firmware is kept current under a maintenance contract." },
  { q: 'What if a camera fails?', a: 'Under the maintenance contract, we replace failed cameras quickly. Without a contract, we still provide repair on a callout basis — usually within 48 hours.' },
  { q: 'Do you offer 24/7 monitoring?', a: 'Yes — as an add-on. Our team watches your feeds round the clock, validates alerts, and escalates real incidents to you or local authorities as agreed.' }
];

export default function ServiceCCTV() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/services', label: 'Services' }, { label: 'CCTV Solutions' }]} />
      <DetailHero
        eyebrow="Service · CCTV Solutions"
        title="See everything. Miss nothing."
        accentWord="nothing"
        lede="From residential properties to enterprise-grade surveillance networks, we handle it end to end — survey, design, install, configure, and maintain. High-resolution cameras, smart triggers, real-time alerts, and reliable storage, all set up around what matters to you, wherever you are."
        primaryCta="Get a Quote"
      />
      <CapabilitiesSection eyebrow="Capabilities" title="One view. Every angle." items={capabilities} alt={true} />
      <ProcessSection steps={process} />
      <FAQSection items={faq} />
      <CTASection
        title="Let's get you covered."
        lede="Send us your build, your floor plan, or just a rough idea of what you want to watch over — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="CCTV System Inquiry"
      />
    </>
  );
}
