"use client";

/**
 * MinecraftBg — Hintergrund-Animationen im Minecraft/Roblox-Stil.
 *
 * Drei zufällig getriggerte Easter-Egg-Animationen:
 *  1. Steve: Baut zwei Blöcke ab, guckt sich um, baut sich wieder raus
 *  2. Ghast: Schwebt langsam durch den Hintergrund
 *  3. Enderman: Erscheint, wirft einen Luftkuss, teleportiert weg
 *
 * Alle Animationen laufen als CSS-Keyframes, klein und im Hintergrund (z-index: 1).
 * Kein Impact auf Interaktivität.
 */

import { useEffect, useState, useCallback } from "react";

type AnimationType = "steve" | "ghast" | "enderman" | null;

const STEVE_EMOJI = "🧑‍💻"; // Steve-ähnlich
const GHAST = "👻";
const ENDERMAN = "🕴️";

// Wann die nächste Animation ausgelöst wird (zufällig zwischen min und max Sekunden)
const MIN_INTERVAL_S = 18;
const MAX_INTERVAL_S = 45;

function randomInterval() {
  return (MIN_INTERVAL_S + Math.random() * (MAX_INTERVAL_S - MIN_INTERVAL_S)) * 1000;
}

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Horizontale Startposition (links oder rechts vom Screen)
function randomSide(): "left" | "right" {
  return Math.random() > 0.5 ? "left" : "right";
}

export function MinecraftBg() {
  const [active, setActive] = useState<AnimationType>(null);
  const [side, setSide] = useState<"left" | "right">("left");
  const [verticalPos, setVerticalPos] = useState(60); // % von oben

  const trigger = useCallback(() => {
    const animation = randomChoice<AnimationType>(["steve", "ghast", "enderman"]);
    setSide(randomSide());
    setVerticalPos(20 + Math.random() * 55); // zwischen 20% und 75% vom Top
    setActive(animation);
  }, []);

  useEffect(() => {
    // Ersten Trigger nach kurzer Wartezeit
    const firstDelay = setTimeout(trigger, 8000);
    return () => clearTimeout(firstDelay);
  }, [trigger]);

  useEffect(() => {
    if (!active) return;

    // Nach Animation wieder auf null setzen und nächsten Timer starten
    const durations: Record<NonNullable<AnimationType>, number> = {
      steve:    6000,
      ghast:    9000,
      enderman: 5000,
    };

    const clearTimer = setTimeout(() => {
      setActive(null);
      const nextTimer = setTimeout(trigger, randomInterval());
      return () => clearTimeout(nextTimer);
    }, durations[active]);

    return () => clearTimeout(clearTimer);
  }, [active, trigger]);

  if (!active) return null;

  const topStyle = { top: `${verticalPos}%` };
  const isRight = side === "right";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {active === "steve" && (
        <SteveAnimation side={side} topStyle={topStyle} />
      )}
      {active === "ghast" && (
        <GhastAnimation side={side} topStyle={topStyle} />
      )}
      {active === "enderman" && (
        <EndermanAnimation isRight={isRight} topStyle={topStyle} />
      )}
    </div>
  );
}

/* ── Steve: baut Blöcke ab, schaut, baut sich wieder raus ── */
function SteveAnimation({ side, topStyle }: { side: "left" | "right"; topStyle: React.CSSProperties }) {
  const isRight = side === "right";

  return (
    <div
      className="absolute flex flex-col items-center gap-0.5"
      style={{
        ...topStyle,
        [isRight ? "right" : "left"]: "-60px",
        animation: isRight
          ? "steve-enter-right 6s ease-in-out forwards"
          : "steve-enter-left 6s ease-in-out forwards",
      }}
    >
      {/* Zwei Block-Quadrate die "abgebaut" werden */}
      <div className="flex gap-0.5 mb-1" style={{ animation: "blocks-break 6s ease-in-out forwards" }}>
        <div className="h-5 w-5 block-card block-card--grass" style={{ fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>🟩</div>
        <div className="h-5 w-5 block-card block-card--dirt" style={{ fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>🟫</div>
      </div>
      {/* Steve Charakter */}
      <div style={{ fontSize: "28px", animation: "steve-look 6s ease-in-out forwards" }}>
        {STEVE_EMOJI}
      </div>
      <div className="font-pixel text-[6px] leading-none text-[#5D8A34] opacity-80">Steve</div>
    </div>
  );
}

/* ── Ghast: schwebt langsam durch den Hintergrund ── */
function GhastAnimation({ side, topStyle }: { side: "left" | "right"; topStyle: React.CSSProperties }) {
  const isRight = side === "right";
  return (
    <div
      className="absolute"
      style={{
        ...topStyle,
        [isRight ? "right" : "left"]: "-80px",
        animation: isRight
          ? "ghast-fly-right 9s linear forwards"
          : "ghast-fly-left 9s linear forwards",
        opacity: 0.55,
      }}
    >
      <div style={{ fontSize: "48px", animation: "ghast-float 2s ease-in-out infinite", filter: "drop-shadow(0 0 12px rgba(255,255,255,0.3))" }}>
        {GHAST}
      </div>
    </div>
  );
}

/* ── Enderman: erscheint, wirft Luftkuss, verschwindet ── */
function EndermanAnimation({ isRight, topStyle }: { isRight: boolean; topStyle: React.CSSProperties }) {
  return (
    <div
      className="absolute"
      style={{
        ...topStyle,
        [isRight ? "right" : "left"]: "8%",
        animation: "enderman-appear 5s ease-in-out forwards",
      }}
    >
      <div style={{ fontSize: "36px" }}>{ENDERMAN}</div>
      {/* Luftkuss */}
      <div
        className="absolute -top-4 left-4 text-lg"
        style={{ animation: "kiss-fly 2s ease-out 1.5s forwards", opacity: 0 }}
      >
        😘
      </div>
      <div className="font-pixel text-[6px] leading-none text-[#FF3E3E] text-center mt-0.5 opacity-80">
        Enderman
      </div>
    </div>
  );
}
