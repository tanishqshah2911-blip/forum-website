import { useEffect, useState } from 'react';

/**
 * Reusable Product Theater — premium hover-to-reveal interaction.
 *
 * Default state: shows the official product render.
 * On hover: smoothly crossfades to a transparent / x-ray
 *   internal-view render of the same device, then fades in
 *   component labels around the perimeter.
 * On mouse leave: crossfades back, labels fade out.
 * Mobile: tap toggles open/closed.
 *
 * Both images live in the SAME container, perfectly aligned.
 * Only ONE main image area per product page. No splitting, no
 * slicing, no duplicate images, no buttons.
 *
 * Props:
 *   image    — string, path to the official product render
 *   imageX   — string, path to the matching x-ray / internal-view
 *   labels   — array of { id, side: 'left' | 'right', y: %, title }
 *
 * Both images are preloaded so the crossfade is instant on first
 * hover. Transition: ~280ms opacity + a tiny scale shift for depth.
 */
export default function ProductTheater({ image, imageX, labels = [] }) {
  const [open, setOpen] = useState(false);

  // Preload the x-ray image so the first hover is instant.
  useEffect(() => {
    if (!imageX) return;
    const img = new Image();
    img.src = imageX;
  }, [imageX]);

  return (
    <div
      className={`theater theater-xfade ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(o => !o)}
      role="presentation"
    >
      <div className="theater-stage">
        <span className="theater-glow" aria-hidden="true" />

        {/* Two stacked images, locked positions, no transform.
            Normal fades to ~0.4 (ghosted), x-ray fades up from 0. */}
        <img
          src={image}
          alt=""
          className="theater-img theater-img-default"
          draggable="false"
        />
        {imageX && (
          <img
            src={imageX}
            alt=""
            className="theater-img theater-img-xray"
            draggable="false"
          />
        )}

        {/* Component labels — appear only when x-ray is active */}
        {labels.map(l => (
          <div
            key={l.id}
            className={`theater-label theater-label-${l.side}`}
            style={{ top: l.y + '%' }}
          >
            <span className="theater-line" aria-hidden="true" />
            <span className="theater-dot" aria-hidden="true" />
            <span className="theater-label-text">{l.title}</span>
          </div>
        ))}
      </div>

      {/* Mobile clean list of components */}
      <ul className="theater-mobile-list" aria-hidden="true">
        {labels.map(l => <li key={l.id}>{l.title}</li>)}
      </ul>
    </div>
  );
}
