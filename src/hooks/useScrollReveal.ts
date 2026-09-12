import { useRef, useEffect, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealOptions {
  /** Direction the element enters from (default "up") */
  direction?: Direction;
  /** Delay in seconds before animation starts (default 0) */
  delay?: number;
  /** Duration in seconds (default 0.7) */
  duration?: number;
  /** How much of the element must be visible before triggering (default 0.15) */
  threshold?: number;
  /** Whether to animate only once (default true) */
  once?: boolean;
  /** Enable 3D perspective rotation on entrance (default true) */
  perspective?: boolean;
}

interface ScrollRevealReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
  style: React.CSSProperties;
}

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Provides CSS styles that animate an element into view when it scrolls
 * into the viewport. Uses IntersectionObserver for performance.
 */
export function useScrollReveal(options: ScrollRevealOptions = {}): ScrollRevealReturn {
  const {
    direction = "up",
    delay = 0,
    duration = 0.7,
    threshold = 0.15,
    once = true,
    perspective = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  if (prefersReduced.current) {
    return { ref, isInView: true, style: {} };
  }

  const offset = directionOffsets[direction];
  const rotateX =
    perspective && direction === "up" ? 4 : perspective && direction === "down" ? -4 : 0;

  const style: React.CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView
      ? "translate3d(0, 0, 0) rotateX(0deg)"
      : `translate3d(${offset.x}px, ${offset.y}px, 0) rotateX(${rotateX}deg)`,
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return { ref, isInView, style };
}
