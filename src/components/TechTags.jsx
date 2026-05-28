/**
 * Floating tech-stack tags that orbit a product card on hover.
 * Pass an array of strings; they fan out around the card with
 * staggered timings and gold/violet glow.
 */
export default function TechTags({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div className="tech-tags" aria-hidden="true">
      {tags.map((t, i) => (
        <span
          key={t + i}
          className="tech-tag"
          style={{
            '--i': i,
            '--total': tags.length,
            '--delay': `${i * 60}ms`
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
