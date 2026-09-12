import { useEffect, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface PageTransitionProps {
  routePath: string;
  Component?: React.ComponentType<{}>;
  children?: ReactNode;
}

// 3D Cinematic Perspective Variants (~0.86s total: 0.38s exit + 0.48s entrance)
const cinematicVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 28,
    rotateX: 3,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1], // silky cinematic deceleration
    },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    y: -20,
    rotateX: -2.5,
    filter: "blur(4px)",
    pointerEvents: "none",
    transition: {
      duration: 0.38,
      ease: [0.4, 0, 0.2, 1], // smooth spatial departure
    },
  },
};

const reducedVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/**
 * Premium 3D Page Transition component.
 * Renders the frozen route component during exit to eliminate screen flashes and instant swaps.
 */
export function PageTransition({ routePath, Component, children }: PageTransitionProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [routePath]);

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const variants = prefersReduced ? reducedVariants : cinematicVariants;

  return (
    <motion.div
      key={routePath}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative w-full min-h-[calc(100vh-8rem)] overflow-x-hidden"
      style={{
        perspective: "1400px",
        transformOrigin: "50% 25%",
        willChange: "opacity, transform, filter",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      {/* Cinematic neon glowing energy pulse beam across top of viewport */}
      <motion.div
        key={`beam-${routePath}`}
        initial={{ scaleX: 0, opacity: 1, x: "-10%" }}
        animate={{ scaleX: 1, opacity: [1, 1, 0], x: "0%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 99999,
          background:
            "linear-gradient(90deg, transparent 0%, #10b981 30%, #06b6d4 60%, #8b5cf6 90%, transparent 100%)",
          boxShadow: "0 0 14px rgba(16, 185, 129, 0.9), 0 0 28px rgba(6, 182, 212, 0.6)",
          transformOrigin: "left center",
          pointerEvents: "none",
        }}
      />

      {Component ? <Component /> : children}
    </motion.div>
  );
}
