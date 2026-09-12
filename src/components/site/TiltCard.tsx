import type { ReactNode } from "react";
import { useMouseTilt } from "@/hooks/useMouseTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt degrees (default 6) */
  maxDeg?: number;
  /** Show a subtle glare/reflection overlay (default true) */
  glare?: boolean;
}

/**
 * Wraps children in a 3D-tiltable container that follows the cursor.
 * Includes an optional glare overlay for premium feel.
 */
export function TiltCard({ children, className = "", maxDeg = 6, glare = true }: TiltCardProps) {
  const { ref, tilt, handleMove, handleLeave } = useMouseTilt<HTMLDivElement>(maxDeg);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.intensity > 0 ? 1.02 : 1}, ${tilt.intensity > 0 ? 1.02 : 1}, 1)`,
          transition:
            tilt.intensity > 0
              ? "transform 0.1s ease-out"
              : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {children}

        {/* Glare overlay */}
        {glare && tilt.intensity > 0 && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              background: `radial-gradient(circle at ${(tilt.x + 1) * 50}% ${(tilt.y + 1) * 50}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
              opacity: tilt.intensity * 0.8,
              transition: "opacity 0.2s ease",
              zIndex: 10,
            }}
          />
        )}
      </div>
    </div>
  );
}
