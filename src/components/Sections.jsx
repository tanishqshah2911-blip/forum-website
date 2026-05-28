// Small reusable section components used across the detail pages.

export function DetailHero({ eyebrow, title, accentWord, lede, primaryCta, ghostCta, primaryHref = '#customize' }) {
  // title contains an `accent` word that is rendered in italic accent style.
  // Example: title="See everything. Miss nothing.", accentWord="nothing"
  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.lastIndexOf(accentWord);
    if (idx === -1) return title;
    const before = title.slice(0, idx);
    const after = title.slice(idx + accentWord.length);
    return <>{before}<span className="accent">{accentWord}</span>{after}</>;
  };

  return (
    <section className="page-header detail-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{renderTitle()}</h1>
        <p className="page-lede">{lede}</p>
        <div className="hero-ctas">
          <a href={primaryHref} className="btn btn-primary">{primaryCta}</a>
          {ghostCta && <a href="#variations" className="btn btn-ghost">{ghostCta}</a>}
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection({ eyebrow = 'Capabilities', title, items, alt = true }) {
  return (
    <section id="capabilities" className={`section ${alt ? 'alt' : ''}`}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="grid grid-3 capability-grid">
          {items.map((c, i) => (
            <article key={i} className="capability-card">
              <span className="capability-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ steps, alt = true, title = 'Five steps. No surprises.', eyebrow = 'How it works' }) {
  return (
    <section className={`section ${alt ? 'alt' : ''}`}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <ol className="process-grid">
          {steps.map((s, i) => (
            <li key={i} className="process-step">
              <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FAQSection({ items }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions.</h2>
        </div>
        <div className="faq">
          {items.map((q, i) => (
            <details key={i} className="faq-item">
              <summary>{q.q}</summary>
              <p>{q.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection({ eyebrow = 'Ready to start?', title, lede, email, subject = 'Inquiry', alt = true }) {
  return (
    <section className={`section ${alt ? 'alt' : ''}`}>
      <div className="container section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-lede">{lede}</p>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
          className="btn btn-primary"
          style={{ marginTop: '1.5rem' }}
        >
          {email}
        </a>
      </div>
    </section>
  );
}
