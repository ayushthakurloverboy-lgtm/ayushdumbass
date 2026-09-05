import { Song } from '../types';

export class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private currentSong: Song | null = null;
  private isPlaying = false;
  private startTimeOffset = 0;
  private startedAt = 0;
  private scheduledTimeouts: number[] = [];
  private onTimeUpdateCallback: ((time: number) => void) | null = null;
  private onEndCallback: (() => void) | null = null;
  private animationFrameId: number | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private mode: 'synth' | 'audio' = 'synth';
  private masterGain: GainNode | null = null;
  private isMuted = false;

  constructor() {
    // Initialized on user interaction
  }

  private initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setCallbacks(onTimeUpdate: (time: number) => void, onEnd: () => void) {
    this.onTimeUpdateCallback = onTimeUpdate;
    this.onEndCallback = onEnd;
  }

  public loadSong(song: Song, preferredMode?: 'synth' | 'audio') {
    this.stop();
    this.currentSong = song;
    this.startTimeOffset = 0;

    if (preferredMode) {
      this.mode = preferredMode;
    } else {
      // If song has valid audioUrl (not placeholder), use audio mode, else synth
      this.mode = song.audioUrl && song.audioUrl.trim().length > 0 ? 'audio' : 'synth';
    }

    if (this.mode === 'audio' && song.audioUrl) {
      this.setupAudioElement(song.audioUrl);
    }
  }

  public setCustomAudioUrl(url: string) {
    this.stop();
    this.mode = 'audio';
    this.setupAudioElement(url);
  }

  public setMode(mode: 'synth' | 'audio') {
    if (this.mode === mode) return;
    const wasPlaying = this.isPlaying;
    const currentTime = this.getCurrentTime();
    this.stop();
    this.mode = mode;
    this.startTimeOffset = currentTime;
    if (wasPlaying) {
      this.play(this.startTimeOffset);
    }
  }

  public getMode(): 'synth' | 'audio' {
    return this.mode;
  }

  private setupAudioElement(url: string) {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
    }
    this.audioElement = new Audio(url);
    this.audioElement.preload = 'auto';
    this.audioElement.volume = 1.0;
    this.audioElement.muted = this.isMuted;
    this.audioElement.loop = true; // Play on repeat

    this.audioElement.onloadedmetadata = () => {
      if (this.audioElement && this.audioElement.duration && !isNaN(this.audioElement.duration)) {
        if (this.currentSong) {
          this.currentSong.duration = this.audioElement.duration;
        }
      }
    };

    this.audioElement.ontimeupdate = () => {
      if (this.audioElement && this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(this.audioElement.currentTime);
      }
    };

    this.audioElement.onended = () => {
      // Loop playback seamlessly
      if (this.audioElement) {
        this.audioElement.currentTime = 0;
        this.audioElement.play().catch(() => {});
      }
    };

    this.audioElement.onerror = (e) => {
      console.warn('Audio element error:', this.audioElement?.error || e);
    };
  }

  public play(fromTime?: number) {
    this.initAudioContext();
    if (!this.currentSong) return;

    if (fromTime !== undefined) {
      this.startTimeOffset = fromTime;
    }

    this.isPlaying = true;

    if (this.mode === 'audio' && this.audioElement && this.currentSong.audioUrl) {
      if (this.startTimeOffset > 0) {
        try {
          this.audioElement.currentTime = this.startTimeOffset;
        } catch {
          // ignore
        }
      }
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Audio play request had an issue:', err);
        });
      }
    } else {
      this.playSynth(this.startTimeOffset);
    }

    this.startTimeLoop();
  }

  public pause() {
    this.isPlaying = false;
    this.clearScheduledNotes();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.mode === 'audio' && this.audioElement) {
      this.audioElement.pause();
      this.startTimeOffset = this.audioElement.currentTime;
    } else {
      const elapsed = this.ctx ? (this.ctx.currentTime - this.startedAt) : 0;
      this.startTimeOffset += elapsed;
      if (this.currentSong && this.startTimeOffset > this.currentSong.duration) {
        this.startTimeOffset = 0;
      }
    }
  }

  public seek(time: number) {
    const wasPlaying = this.isPlaying;
    this.pause();
    this.startTimeOffset = Math.max(0, Math.min(time, this.currentSong?.duration || 30));
    if (this.mode === 'audio' && this.audioElement) {
      this.audioElement.currentTime = this.startTimeOffset;
    }
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(this.startTimeOffset);
    }
    if (wasPlaying) {
      this.play(this.startTimeOffset);
    }
  }

  public stop() {
    this.pause();
    this.startTimeOffset = 0;
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(0);
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.35, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    return this.isMuted;
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  public getCurrentTime(): number {
    if (this.mode === 'audio' && this.audioElement) {
      return this.audioElement.currentTime;
    }
    if (!this.isPlaying) {
      return this.startTimeOffset;
    }
    if (!this.ctx) return 0;
    const elapsed = this.ctx.currentTime - this.startedAt;
    const total = this.startTimeOffset + elapsed;
    return this.currentSong ? Math.min(total, this.currentSong.duration) : total;
  }

  private startTimeLoop() {
    const tick = () => {
      if (!this.isPlaying) return;
      const current = this.getCurrentTime();
      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(current);
      }

      if (this.currentSong && current >= this.currentSong.duration) {
        if (this.mode === 'synth') {
          // Loop synth playback
          this.startTimeOffset = 0;
          this.startedAt = this.ctx ? this.ctx.currentTime : 0;
          this.playSynth(0);
        } else if (this.audioElement) {
          // Handled by audioElement.loop
        } else {
          this.isPlaying = false;
          this.startTimeOffset = 0;
          if (this.onEndCallback) this.onEndCallback();
          return;
        }
      }

      this.animationFrameId = requestAnimationFrame(tick);
    };
    this.animationFrameId = requestAnimationFrame(tick);
  }

  private clearScheduledNotes() {
    this.scheduledTimeouts.forEach((id) => window.clearTimeout(id));
    this.scheduledTimeouts = [];
  }

  /**
   * Generates warm, sweet, music-box / bedroom-pop acoustic guitar & Rhodes tones
   * using Web Audio API oscillators with exponential release envelopes.
   */
  private playSynth(fromTime: number) {
    if (!this.ctx || !this.currentSong) return;
    this.clearScheduledNotes();
    this.startedAt = this.ctx.currentTime;

    const chords = this.currentSong.synthChords.chords;
    const songDuration = this.currentSong.duration;

    chords.forEach((chord) => {
      const chordTime = chord.time;
      // If chord is in the future relative to fromTime
      if (chordTime >= fromTime && chordTime < songDuration) {
        const delayMs = (chordTime - fromTime) * 1000;

        const timeoutId = window.setTimeout(() => {
          if (!this.isPlaying || !this.ctx || !this.masterGain) return;
          // Strum the chord notes with gentle delay for acoustic guitar / music box feel
          chord.notes.forEach((freq, idx) => {
            this.playAcousticPluck(freq, idx * 0.045);
          });
        }, delayMs);

        this.scheduledTimeouts.push(timeoutId);
      }
    });
  }

  private playAcousticPluck(frequency: number, delaySeconds: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime + delaySeconds;

    // Dual oscillator: Warm triangle (body) + subtle sine (chime bell)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(frequency, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(frequency * 2, now); // soft octave harmonic

    // Warm lowpass filter to emulate wood / acoustic timbre
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.exponentialRampToValueAtTime(400, now + 1.2);

    // Natural plucked decay envelope
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.22, now + 0.015);
    noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.6);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + 2.3);
    osc2.stop(now + 2.3);
  }
}

export const romanticAudio = new RomanticAudioEngine();
