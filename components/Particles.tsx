const PARTICLES = Array.from({ length: 22 }).map((_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i % 10) * 0.6}s`,
  duration: `${5 + (i % 5)}s`,
  size: 2 + (i % 3),
}));

/** Decorative, aria-hidden ambient particles for the hero background. */
export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-gold/60 animate-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
