import Breadcrumb from '../components/Breadcrumb';
import { DetailHero, CapabilitiesSection, FAQSection, CTASection } from '../components/Sections';

/**
 * PhotoHub — affordable cloud photo storage.
 * Lightweight first version of the detail page so the
 * Products catalog link doesn't 404. Capabilities and FAQ
 * copy can be expanded later as the product matures.
 */

const capabilities = [
  { title: 'Affordable plans', body: 'Get the storage you actually need at a fraction of what the big platforms charge — no hidden tiers, no surprise upgrades.' },
  { title: 'Auto-backup, every device', body: 'Photos and videos sync automatically from your phone, tablet, and computer the moment they\'re taken. Never lose a memory again.' },
  { title: 'Full-resolution, always', body: "We don't compress your photos behind your back. What you upload is what you keep — original quality, every time." },
  { title: 'Smart albums', body: 'Auto-organized by date, place, and people, with manual albums for the moments that matter. Find any photo in seconds.' },
  { title: 'Mobile and web', body: 'Native mobile apps plus a clean web library. Your photos open the same way wherever you sign in.' },
  { title: 'Private by default', body: 'Encrypted storage and per-photo sharing controls. You decide what gets shared, with whom, and for how long.' }
];

const faq = [
  { q: 'How is PhotoHub different from Google Photos or iCloud?', a: 'Same auto-backup and library experience you already know — but priced for people who want their photos stored safely without paying premium subscription rates. No hidden compression, no quality downgrades.' },
  { q: 'What do the plans cost?', a: "We're finalizing pricing tiers and will publish them shortly. Get in touch for early-access pricing." },
  { q: 'Can I access my photos from any device?', a: 'Yes — native mobile apps (iOS and Android) plus a clean web interface. Sign in from anywhere, your library is exactly the same.' },
  { q: 'Are my photos private?', a: 'Yes. Everything is encrypted at rest and in transit, and sharing is opt-in per album or per photo. We never look at your library.' }
];

export default function ProductPhotoHub() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/products', label: 'Products' }, { label: 'PhotoHub' }]} />
      <DetailHero
        eyebrow="Product · PhotoHub"
        title="All your photos, one place, fair pricing."
        accentWord="fair"
        lede="PhotoHub is affordable cloud storage for your photos and videos — automatic backups from any device, smart albums, and full-resolution access anytime. The library experience you expect, without the premium price tag of the big platforms."
        primaryCta="Get Early Access"
      />
      <CapabilitiesSection
        eyebrow="What you get"
        title="Your memories, safe and simple."
        items={capabilities}
        alt={true}
      />
      <FAQSection items={faq} />
      <CTASection
        title="Ready to back up everything?"
        lede="Tell us roughly how many photos and videos you have — we'll help you pick the right plan and get you set up."
        email="tfxautomation@gmail.com"
        subject="PhotoHub Inquiry"
      />
    </>
  );
}
