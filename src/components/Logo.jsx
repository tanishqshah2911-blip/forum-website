// Forum logo — served from public/logo.png

export default function Logo({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="The Forum"
      className={`logo-mark ${className}`.trim()}
      draggable="false"
    />
  );
}
