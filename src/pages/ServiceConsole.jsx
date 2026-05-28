import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, ProcessSection, FAQSection, CTASection } from '../components/Sections';

const capabilities = [
  { title: 'Live monitoring', body: 'Real-time dashboards showing every metric your device tracks — temperature, throughput, status, error codes, anything you can read off a sensor or chip.' },
  { title: 'Graphs', body: 'Every metric, charted. Line graphs, bar charts, gauges, and heatmaps turn raw readings into clear visual trends — so patterns and outliers jump out at a glance, no spreadsheets needed.' },
  { title: 'Smart alerts', body: 'Get notified the moment a threshold is crossed — by SMS, email, push, or webhook. You and your team stay informed in real time, wherever you are.' },
  { title: 'Remote control', body: 'Adjust settings, restart units, push firmware updates, or send commands to any device in your fleet — from anywhere, on any screen.' },
  { title: 'Historical analytics', body: 'Every reading is logged and searchable. Spot trends, compare timeframes, run reports — turn months of data into decisions that matter.' },
  { title: 'Multi-user access', body: 'Role-based permissions so the right people see the right things. Operators get controls. Managers get reports. Auditors get logs.' },
  { title: 'Mobile + desktop', body: 'One console, every screen. Built mobile-first so your team can check status from the floor, the road, or a meeting halfway across the world.' },
  { title: 'API + integrations', body: "Plug your console into the rest of your stack — ERP, CRM, accounting, payroll, BI tools — so device data flows where it's needed automatically." },
  { title: 'Your data, your rules', body: 'Run on-premises for full data sovereignty, in the cloud for zero-maintenance scale, or hybrid for the best of both. Your call.' },
  { title: 'Built around your device', body: "Every console is tailored — to your hardware, your workflow, your team. No generic templates, no features you don't need, no compromises." }
];

const process = [
  { title: 'Discover', body: "We map your devices, your data, and your team's workflow — so the console fits the way you actually work." },
  { title: 'Design', body: 'Wireframes, dashboards, and control flows you can review and approve. Built around your devices, not generic templates.' },
  { title: 'Integrate', body: 'Connect your hardware to the console. Calibrate signals, wire up alerts, set permissions, test under real load.' },
  { title: 'Deploy', body: 'Roll out on-premises, cloud, or hybrid. SSL, backups, monitoring, and a clean handoff so your team is ready to run.' },
  { title: 'Support', body: "Optional maintenance contract for updates, fixes, and on-call help. We're here long after the console goes live." }
];

const faq = [
  { q: 'Will it work with devices I already own?', a: "In most cases, yes. We support standard protocols (MQTT, Modbus, REST, serial, Bluetooth) and can integrate with custom firmware too. We'll audit your hardware during Discover and confirm what's possible." },
  { q: 'On-premises or cloud — which is right for me?', a: "On-premises is best for regulated industries, sensitive data, or low-latency control. Cloud is best for distributed teams, zero-maintenance scale, and remote-first operations. Hybrid splits the difference. We'll recommend the right path during Discover." },
  { q: 'Can multiple users access the console?', a: 'Yes — with role-based permissions. Operators see controls, managers see reports, auditors see logs, admins see everything. You define who sees what.' },
  { q: 'Can it send alerts to SMS / email / push?', a: 'All three, plus webhooks and Slack/Teams integrations. Set thresholds, choose recipients, and pick the channel — alerts route to the right person automatically.' },
  { q: 'Can it integrate with my existing systems?', a: 'Yes. We expose a clean API and support common integrations — ERP, CRM, accounting, BI tools — so device data flows through your stack without manual exports.' },
  { q: 'What about security?', a: 'SSL/TLS by default, role-based access, audit logs, encrypted storage, and optional 2FA. On-premises deployments stay fully behind your firewall. We can also work to specific compliance frameworks (HIPAA, ISO, SOC) on request.' }
];

export default function ServiceConsole() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/services', label: 'Services' }, { label: 'Device Console' }]} />
      <DetailHero
        eyebrow="Service · Device Console"
        title="Every reading, one screen."
        accentWord="one screen"
        lede="The Device Console makes monitoring your devices effortless. No checking each unit by hand, no chasing readings across machines — every metric, alert, and control sits on a single, clear dashboard, accessible anywhere. Built on-premises or in the cloud, customized to your devices and your workflow."
        primaryCta="Get a Quote"
      />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why a console</p>
            <h2>Monitoring, made effortless.</h2>
            <p className="section-lede">
              Your devices already do their job well — they sense, run, and report. The Console is the layer that brings everything they track into one clean interface, so your team doesn't have to walk between machines or pull readings by hand. Open the dashboard, see the whole fleet at a glance, dig in when you need to. That's the entire experience.
            </p>
          </div>
        </div>
      </section>
      <CapabilitiesSection title="Everything your devices have been waiting to tell you." items={capabilities} alt={true} />
      <ProcessSection steps={process} />
      <FAQSection items={faq} />
      <CTASection
        title="Let's unlock your hardware."
        lede="Send us your build, your devices, or just a rough idea — we'll take it from there."
        email="tfxautomation@gmail.com"
        subject="Device Console Inquiry"
      />
    </>
  );
}
