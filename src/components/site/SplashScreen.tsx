import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type SplashPhase = "particles" | "reveal" | "exit" | "done";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);

  const [phase, setPhase] = useState<SplashPhase>("particles");

  // Always keep the latest callback
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // --------------------------------------------------
  // SESSION CHECK
  // --------------------------------------------------

  useEffect(() => {
    const seen = sessionStorage.getItem("splash-seen");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || prefersReduced) {
      setPhase("done");

      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current();
      }

      return;
    }

    sessionStorage.setItem("splash-seen", "1");
  }, []);

  // --------------------------------------------------
  // THREE.JS + SPLASH ANIMATION
  // --------------------------------------------------

  useEffect(() => {
    const container = canvasRef.current;

    if (!container) return;

    const width = window.innerWidth;

    const height = window.innerHeight;

    // -------------------------------
    // Scene
    // -------------------------------

    const scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2(0x0a1a15, 0.0008);

    // -------------------------------
    // Camera
    // -------------------------------

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);

    camera.position.z = 800;

    // -------------------------------
    // Renderer
    // -------------------------------

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(width, height);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setClearColor(0x0a1a15, 1);

    container.appendChild(renderer.domElement);

    // -------------------------------
    // Particles
    // -------------------------------

    const particleCount = Math.min(800, Math.floor(width * 0.5));

    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);

    const colors = new Float32Array(particleCount * 3);

    const sizes = new Float32Array(particleCount);

    const brandColors = [
      new THREE.Color(0x10b981),
      new THREE.Color(0x0d9488),
      new THREE.Color(0x34d399),
      new THREE.Color(0x6ee7b7),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;

      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;

      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

      const color = brandColors[Math.floor(Math.random() * brandColors.length)] ?? brandColors[0]!;

      colors[i * 3] = color.r;

      colors[i * 3 + 1] = color.g;

      colors[i * 3 + 2] = color.b;

      sizes[i] = 1.5 + Math.random() * 3;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);

    scene.add(particles);

    // -------------------------------
    // Lights
    // -------------------------------

    const light = new THREE.PointLight(0x10b981, 2, 600);

    light.position.set(0, 0, 200);

    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x0d9488, 0.3);

    scene.add(ambientLight);

    // -------------------------------
    // Animation
    // -------------------------------

    let animationId = 0;

    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) / 1000;

      particles.rotation.y = elapsed * 0.05;

      particles.rotation.x = Math.sin(elapsed * 0.3) * 0.05;

      camera.position.z = 800 - elapsed * 30;

      light.intensity = 2 + Math.sin(elapsed * 2) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------
    // Timeline
    // -------------------------------

    const revealTimer = window.setTimeout(() => {
      setPhase("reveal");
    }, 800);

    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
    }, 3000);

    const doneTimer = window.setTimeout(() => {
      setPhase("done");

      if (!completedRef.current) {
        completedRef.current = true;

        onCompleteRef.current();
      }
    }, 3600);

    // -------------------------------
    // Resize
    // -------------------------------

    const handleResize = () => {
      const w = window.innerWidth;

      const h = window.innerHeight;

      camera.aspect = w / h;

      camera.updateProjectionMatrix();

      renderer.setSize(w, h);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // -------------------------------
    // Cleanup
    // -------------------------------

    return () => {
      cancelAnimationFrame(animationId);

      clearTimeout(revealTimer);

      clearTimeout(exitTimer);

      clearTimeout(doneTimer);

      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // --------------------------------------------------
  // DONE
  // --------------------------------------------------

  if (phase === "done") {
    return null;
  }

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  const visible = phase === "reveal" || phase === "exit";

  return (
    <div
      className={`splash-screen ${phase === "exit" ? "splash-exit" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a1a15",
      }}
    >
      {/* Three.js canvas */}
      <div
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Monogram */}
        <div
          className={`splash-monogram ${visible ? "splash-monogram-visible" : ""}`}
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #10b981, #0d9488)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 900,
            color: "#ffffff",
            boxShadow: "0 0 60px rgba(16,185,129,.4), 0 0 120px rgba(16,185,129,.15)",
          }}
        >
          D
        </div>

        {/* Name */}
        <h1
          className={`splash-name ${visible ? "splash-name-visible" : ""}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            textAlign: "center",
            margin: 0,
          }}
        >
          Jain Daksh Swapnil
        </h1>

        {/* Subtitle */}
        <p
          className={`splash-subtitle ${visible ? "splash-subtitle-visible" : ""}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(.85rem, 2vw, 1.1rem)",
            fontWeight: 600,
            color: "#6ee7b7",
            textAlign: "center",
            margin: 0,
          }}
        >
          AI & Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
