let ctx: AudioContext | null = null;
let bus: GainNode | null = null;
let ready = false;
let muted = false;
let last = 0;
let step = 0;

/** D major pentatonic. Any order of these notes stays consonant. */
const SCALE = [293.66, 329.63, 369.99, 440, 493.88, 587.33, 659.25];

function quiet() {
  return (
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function context() {
  if (!ctx) {
    ctx = new AudioContext();
    const soften = ctx.createBiquadFilter();
    soften.type = "lowpass";
    soften.frequency.value = 2400;
    soften.Q.value = 0.4;
    bus = ctx.createGain();
    bus.gain.value = 0.9;
    bus.connect(soften);
    soften.connect(ctx.destination);
  }
  return ctx;
}

export function unlock() {
  if (ready || quiet()) return;
  void context()
    .resume()
    .then(() => {
      ready = true;
    });
}

export function isMuted() {
  return muted;
}

export function setMuted(next: boolean) {
  muted = next;
}

/** One soft bell voice: sine fundamental, quiet octave, slow release. */
function voice(freq: number, peak: number, release: number, delay = 0) {
  if (!ctx || !bus) return;
  const at = ctx.currentTime + delay;

  const envelope = ctx.createGain();
  envelope.gain.setValueAtTime(0.0001, at);
  envelope.gain.exponentialRampToValueAtTime(peak, at + 0.05);
  envelope.gain.exponentialRampToValueAtTime(0.0001, at + release);
  envelope.connect(bus);

  const fundamental = ctx.createOscillator();
  fundamental.type = "sine";
  fundamental.frequency.value = freq;
  fundamental.connect(envelope);

  const shimmer = ctx.createGain();
  shimmer.gain.value = 0.22;
  shimmer.connect(envelope);
  const octave = ctx.createOscillator();
  octave.type = "sine";
  octave.frequency.value = freq * 2;
  octave.connect(shimmer);

  fundamental.start(at);
  octave.start(at);
  fundamental.stop(at + release + 0.1);
  octave.stop(at + release + 0.1);
}

/**
 * `full` walks up the scale and adds a second note a third above, which is the
 * sound for a deliberate move. Otherwise it is a single quiet note.
 */
export function chime(full = false) {
  if (muted || !ready || !ctx || quiet()) return;
  const now = performance.now();
  if (now - last < 110) return;
  last = now;

  const root = SCALE[step % SCALE.length];
  step += 1;

  if (full) {
    voice(root, 0.07, 1.6);
    voice(SCALE[(step + 1) % SCALE.length], 0.035, 1.3, 0.11);
  } else {
    voice(root * 2, 0.018, 0.7);
  }
}
