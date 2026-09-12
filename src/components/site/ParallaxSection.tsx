import type { ReactNode, CSSProperties } from "react";
import { useRef, useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** Parallax speed multiplier (default 0.15). Higher = more parallax. */
  speed?: number;
  /** Optional style overrides */
  style?: CSSProperties;
}

/**
 * A section wrapper that creates a subtle vertical parallax shift on its
 * children based on scroll position. Uses requestAnimationFrame for
 * smooth performance.
 */
export function ParallaxSection({
  children,
  className = "",
  speed = 0.15,
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(0);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced.current) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Calculate how far through the viewport the element is
        const progress = (windowH - rect.top) / (windowH + rect.height);
        // Map to -1 to 1 range centered on 0
        const centered = (progress - 0.5) * 2;
        setOffset(centered * speed * 60);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={style}>
      <div
        style={{
          transform: prefersReduced.current ? "none" : `translate3d(0, ${offset}px, 0)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
