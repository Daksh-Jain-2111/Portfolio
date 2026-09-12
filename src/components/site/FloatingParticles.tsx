import { useEffect, useRef, useState } from "react";

interface FloatingParticlesProps {
  /** Number of particles (default 30) */
  count?: number;
  /** CSS color for particles (default uses brand primary) */
  color?: string;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

/**
 * Pure-CSS floating particle effect for section backgrounds.
 * Lightweight — no canvas or Three.js. Particles drift gently
 * with randomized positions, sizes, and timing.
 */
export function FloatingParticles({ count = 30, color, className = "" }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced.current) return;

    const pts: Particle[] = [];
    for (let i = 0; i < count; i++) {
      pts.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 12 + Math.random() * 20,
        delay: Math.random() * -20,
        opacity: 0.15 + Math.random() * 0.3,
      });
    }
    setParticles(pts);
  }, [count]);

  if (prefersReduced.current || particles.length === 0) return null;

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: color || "var(--primary)",
            opacity: p.opacity,
            animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
