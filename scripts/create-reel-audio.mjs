import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const sampleRate = 48000;
const outputDir = path.resolve(process.env.REEL_AUDIO_DIR || 'public/images/ads');
await mkdir(outputDir, { recursive: true });

let seed = 3277;
const noise = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return (seed / 0xffffffff) * 2 - 1;
};

function renderBeat({ name, duration, bpm, bassNotes, energetic = false }) {
  const frames = Math.ceil(duration * sampleRate);
  const left = new Float64Array(frames);
  const right = new Float64Array(frames);
  const beat = 60 / bpm;

  const add = (time, length, synth, pan = 0) => {
    const start = Math.round(time * sampleRate);
    const count = Math.min(Math.round(length * sampleRate), frames - start);
    if (start < 0 || count <= 0) return;
    const lGain = Math.sqrt((1 - pan) / 2);
    const rGain = Math.sqrt((1 + pan) / 2);
    for (let i = 0; i < count; i++) {
      const t = i / sampleRate;
      const value = synth(t, length);
      left[start + i] += value * lGain;
      right[start + i] += value * rGain;
    }
  };

  const kick = (t) => {
    const env = Math.exp(-t * 18);
    const phase = 2 * Math.PI * (48 * t + 68 * (1 - Math.exp(-t * 22)) / 22);
    return Math.sin(phase) * env * 0.95;
  };
  const snare = (t) => {
    const env = Math.exp(-t * 24);
    const body = Math.sin(2 * Math.PI * 185 * t) * Math.exp(-t * 32) * 0.26;
    return (noise() * 0.72 + body) * env;
  };
  let hatState = 0;
  const hat = (t) => {
    const n = noise();
    const high = n - hatState * 0.84;
    hatState = n;
    return high * Math.exp(-t * 58) * 0.22;
  };
  const clap = (t) => {
    const burst = Math.exp(-t * 34) + (t > 0.025 ? Math.exp(-(t - 0.025) * 44) * 0.6 : 0);
    return noise() * burst * 0.34;
  };
  const bass = (frequency) => (t, length) => {
    const attack = Math.min(1, t / 0.018);
    const release = Math.min(1, Math.max(0, (length - t) / 0.1));
    const env = attack * release * 0.25;
    return (Math.sin(2 * Math.PI * frequency * t) + 0.22 * Math.sin(4 * Math.PI * frequency * t)) * env;
  };

  const bars = Math.ceil(duration / (beat * 4));
  for (let bar = 0; bar < bars; bar++) {
    const base = bar * beat * 4;
    for (let b = 0; b < 4; b++) {
      const at = base + b * beat;
      if (b === 0 || b === 2 || (energetic && b === 3)) add(at, 0.32, kick, -0.05);
      if (b === 1 || b === 3) {
        add(at, 0.24, snare, 0.04);
        if (energetic) add(at + 0.018, 0.18, clap, 0.1);
      }
      add(at, 0.09, hat, -0.32);
      add(at + beat / 2, 0.065, hat, 0.32);
      const midi = bassNotes[(bar * 4 + b) % bassNotes.length];
      const hz = 440 * 2 ** ((midi - 69) / 12);
      add(at, beat * 0.82, bass(hz), 0);
    }
  }

  const fadeIn = 0.08 * sampleRate;
  const fadeOut = 0.35 * sampleRate;
  let peak = 0;
  for (let i = 0; i < frames; i++) {
    const startGain = Math.min(1, i / fadeIn);
    const endGain = Math.min(1, (frames - i - 1) / fadeOut);
    const gain = Math.max(0, Math.min(startGain, endGain));
    left[i] *= gain;
    right[i] *= gain;
    peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  }
  const normalizer = peak > 0 ? 0.88 / peak : 1;
  const pcm = Buffer.alloc(frames * 4);
  for (let i = 0; i < frames; i++) {
    pcm.writeInt16LE(Math.round(Math.max(-1, Math.min(1, left[i] * normalizer)) * 32767), i * 4);
    pcm.writeInt16LE(Math.round(Math.max(-1, Math.min(1, right[i] * normalizer)) * 32767), i * 4 + 2);
  }

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(2, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 4, 28);
  header.writeUInt16LE(4, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return writeFile(path.join(outputDir, name), Buffer.concat([header, pcm]));
}

await renderBeat({
  name: 'fish-reel-beat.wav',
  duration: 8.5,
  bpm: 120,
  bassNotes: [41, 41, 44, 46, 41, 48, 46, 44],
});

await renderBeat({
  name: 'fish-squeegee-shuffle-original-beat.wav',
  duration: 15.5,
  bpm: 112,
  bassNotes: [41, 41, 44, 46, 48, 46, 44, 39],
  energetic: true,
});

console.log(outputDir);
