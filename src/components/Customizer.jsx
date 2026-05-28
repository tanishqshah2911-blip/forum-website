import { useMemo, useState } from 'react';

/**
 * A reusable Customizer component.
 *
 * Props:
 * - title: string (e.g. "Build your build.")
 * - lede: string (helper line)
 * - sections: array of { heading, type: 'radio'|'check', options: [{name, desc, value}] }
 * - variations: optional array of { id, tag, name, description, features }
 *               If passed, renders a Variations grid with selectable cards.
 * - summaryTitle: string (e.g. "Your build")
 * - summaryBaseLabel: string (e.g. "Base")
 * - summaryAddonsLabel: string (e.g. "Add-ons")
 * - quoteSubject: string (email subject)
 * - quoteCta: string (button text)
 */
export default function Customizer({
  variations,
  sections = [],
  summaryTitle = 'Your build',
  summaryBaseLabel = 'Base',
  summaryAddonsLabel = 'Add-ons',
  summaryBasePlaceholder = 'No base selected yet.',
  quoteSubject = 'Build Inquiry',
  quoteCta = 'Send My Build for a Quote'
}) {
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState(new Set());

  const toggleVariation = (name) => {
    setSelectedBase(prev => (prev === name ? null : name));
    if (typeof window !== 'undefined') {
      const target = document.getElementById('customize');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRadio = (value) => setSelectedBase(value);

  const toggleAddon = (value) => {
    setSelectedAddons(prev => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value); else next.add(value);
      return next;
    });
  };

  const quoteHref = useMemo(() => {
    const lines = ['Hi The Forum,', '', "I'd like a quote.", ''];
    lines.push(`${summaryBaseLabel}: ${selectedBase || 'Not chosen yet'}`);
    lines.push('');
    lines.push(`${summaryAddonsLabel}:`);
    if (selectedAddons.size === 0) lines.push('  - None selected');
    else selectedAddons.forEach(v => lines.push(`  - ${v}`));
    lines.push('');
    lines.push('Thanks!');
    const body = encodeURIComponent(lines.join('\n'));
    return `mailto:tfxautomation@gmail.com?subject=${encodeURIComponent(quoteSubject)}&body=${body}`;
  }, [selectedBase, selectedAddons, summaryBaseLabel, summaryAddonsLabel, quoteSubject]);

  return (
    <>
      {variations && (
        <section id="variations" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Variations</p>
              <h2>Pick your base.</h2>
              <p className="section-lede">
                Each variation is a starting point — start here, then customize below.
              </p>
            </div>
            <div className="grid grid-3 product-grid variations-grid">
              {variations.map(v => {
                const isSelected = selectedBase === v.name;
                return (
                  <article key={v.id} className={`product-card service-card variation-card ${isSelected ? 'selected' : ''}`}>
                    <div className="product-body">
                      {v.tag && <p className="variation-tag">{v.tag}</p>}
                      <h3 className="product-name">{v.name}</h3>
                      <p className="product-desc">{v.description}</p>
                      {v.features && (
                        <ul className="variation-features">
                          {v.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      )}
                      <button
                        className="product-link select-variation"
                        onClick={() => toggleVariation(v.name)}
                        type="button"
                      >
                        {isSelected ? 'Selected ✓' : <>Select <span className="arrow">→</span></>}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section id="customize" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Customizer</p>
            <h2>Build your spec.</h2>
            <p className="section-lede">
              Pick a base{variations ? ' above' : ''}, then tick the options you want. Your spec updates live on the right.
            </p>
          </div>

          <div className="customizer">
            <div className="customizer-options">
              {sections.map((sec, idx) => (
                <div key={idx} style={idx > 0 ? { marginTop: '2.25rem' } : undefined}>
                  <h3 className="customizer-heading">{sec.heading}</h3>
                  <div className={`addon-grid ${sec.type === 'radio' ? 'base-grid' : ''}`}>
                    {sec.options.map(opt => {
                      const isChecked = sec.type === 'radio'
                        ? selectedBase === opt.value
                        : selectedAddons.has(opt.value);
                      return (
                        <label key={opt.value} className={`addon ${sec.type === 'radio' ? 'base-option' : ''}`}>
                          <input
                            type={sec.type === 'radio' ? 'radio' : 'checkbox'}
                            name={sec.type === 'radio' ? 'base' : 'addon'}
                            value={opt.value}
                            checked={isChecked}
                            onChange={() => sec.type === 'radio' ? handleRadio(opt.value) : toggleAddon(opt.value)}
                          />
                          <span className="addon-name">{opt.name}</span>
                          <span className="addon-desc">{opt.desc}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <aside className="customizer-summary">
              <h3 className="customizer-heading">{summaryTitle}</h3>
              <div className="summary-block">
                <p className="summary-label">{summaryBaseLabel}</p>
                <p className={`summary-value ${selectedBase ? '' : 'muted'}`}>
                  {selectedBase || summaryBasePlaceholder}
                </p>
              </div>
              <div className="summary-block">
                <p className="summary-label">{summaryAddonsLabel}</p>
                <ul className="summary-list">
                  {selectedAddons.size === 0
                    ? <li className="muted">None selected.</li>
                    : Array.from(selectedAddons).map(a => <li key={a}>{a}</li>)
                  }
                </ul>
              </div>
              <a href={quoteHref} className="btn btn-primary summary-cta">{quoteCta}</a>
              <p className="summary-note">We'll reply within 24 hours with a tailored proposal.</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
