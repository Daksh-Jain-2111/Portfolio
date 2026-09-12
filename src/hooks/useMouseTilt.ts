import { useRef, useState, useCallback, useEffect } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  /** 0-1 normalized distance from center */
  intensity: number;
  /** Cursor position relative to element center, normalized -1 to 1 */
  x: number;
  y: number;
}

const INITIAL: TiltValues = { rotateX: 0, rotateY: 0, intensity: 0, x: 0, y: 0 };

/**
 * Tracks cursor position relative to the referenced element and returns
 * smooth rotateX / rotateY values for a 3D tilt effect.
 *
 * @param maxDeg  Maximum tilt angle in degrees (default 8)
 */
export function useMouseTilt<T extends HTMLElement = HTMLDivElement>(maxDeg = 8) {
  const ref = useRef<T>(null);
  const [tilt, setTilt] = useState<TiltValues>(INITIAL);
  const rafRef = useRef<number>(0);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (prefersReduced.current) return;
      const el = ref.current;
      if (!el) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        const intensity = Math.min(Math.sqrt(x * x + y * y), 1);

        setTilt({
          rotateX: -y * maxDeg,
          rotateY: x * maxDeg,
          intensity,
          x,
          y,
        });
      });
    },
    [maxDeg],
  );

  const handleLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTilt(INITIAL);
  }, []);

  return { ref, tilt, handleMove, handleLeave };
}
