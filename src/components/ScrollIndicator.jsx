/**
 * Animated scroll cue at the bottom of the hero.
 * Subtle "scroll" label + a long thin line that pulses downward.
 */
export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span className="scroll-indicator-label">Scroll</span>
      <span className="scroll-indicator-line" />
    </div>
  );
}
