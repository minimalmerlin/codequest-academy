/**
 * 8-Bit Sound Effects via Web Audio API — kein npm, keine Audio-Dateien.
 * Alle Funktionen silent-fail wenn kein AudioContext verfügbar.
 */

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    return new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  } catch {
    return null;
  }
}

function beep(
  freq: number,
  duration: number,
  type: OscillatorType = "square",
  volume = 0.15,
  delay = 0,
  ctx?: AudioContext,
): void {
  const audioCtx = ctx ?? getCtx();
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);

  gain.gain.setValueAtTime(0, audioCtx.currentTime + delay);
  gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + delay + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);

  osc.start(audioCtx.currentTime + delay);
  osc.stop(audioCtx.currentTime + delay + duration + 0.05);
}

/** Kurzer Pixel-Klick — für Buttons */
export function playClick(): void {
  try {
    beep(220, 0.06, "square", 0.12);
  } catch { /* silent */ }
}

/** Erfolgs-Jingle — C5-E5-G5 Arpeggio */
export function playSuccess(): void {
  try {
    const ctx = getCtx();
    if (!ctx) return;
    beep(523.25, 0.12, "square", 0.18, 0, ctx);    // C5
    beep(659.25, 0.12, "square", 0.18, 0.12, ctx);  // E5
    beep(783.99, 0.20, "square", 0.18, 0.24, ctx);  // G5
  } catch { /* silent */ }
}

/** Fehler-Buzz — G4-E4 fallend */
export function playError(): void {
  try {
    const ctx = getCtx();
    if (!ctx) return;
    beep(392, 0.10, "sawtooth", 0.15, 0, ctx);    // G4
    beep(329.63, 0.15, "sawtooth", 0.15, 0.10, ctx); // E4
  } catch { /* silent */ }
}

/** Level-Up-Fanfare — C5-E5-G5-C6 */
export function playLevelUp(): void {
  try {
    const ctx = getCtx();
    if (!ctx) return;
    beep(523.25, 0.10, "square", 0.18, 0, ctx);    // C5
    beep(659.25, 0.10, "square", 0.18, 0.10, ctx);  // E5
    beep(783.99, 0.10, "square", 0.18, 0.20, ctx);  // G5
    beep(1046.5, 0.25, "square", 0.20, 0.30, ctx);  // C6
  } catch { /* silent */ }
}
