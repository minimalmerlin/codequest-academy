"use client";

import { useEffect, useMemo, useState } from "react";

const COLORS = ["#5D8A34", "#FFD700", "#44F7E0", "#FF3E3E", "#00A2FF", "#A0522D"];

interface Particle {
  id: number;
  left: number;       // %
  delay: number;      // s
  duration: number;   // s
  color: string;
  size: number;       // px
  rotation: number;   // deg
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.2,
    duration: 1.5 + Math.random() * 1.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
    size: 6 + Math.floor(Math.random() * 6),
    rotation: Math.random() * 360,
  }));
}

export function ConfettiCelebration({ active }: { active: boolean }) {
  const particles = useMemo(() => makeParticles(40), []);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      // Lässt laufende Animationen zu Ende laufen
      const t = setTimeout(() => setVisible(false), 3500);
      return () => clearTimeout(t);
    }
  }, [active]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: "-20px",
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animationName: "confetti-fall",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            transform: `rotate(${p.rotation}deg)`,
            imageRendering: "pixelated",
          }}
        />
      ))}
    </div>
  );
}
