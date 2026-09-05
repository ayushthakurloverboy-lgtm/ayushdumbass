export interface LyricLine {
  id: string;
  text: string;
  startTime: number; // in seconds
  endTime: number;   // in seconds
  sketchId: string;  // key for pencil sketch illustration
  caption?: string;  // short poetic sketch subtitle
}

export interface SongChords {
  bpm: number;
  // Frequencies or chord names for melodic synthesizer
  chords: { time: number; notes: number[] }[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number; // duration of highlight in seconds
  highlightSnippet: string; // e.g. "Highlight / Chorus"
  personalDedication: string;
  tagline: string;
  accent: {
    bg: string;
    border: string;
    pill: string;
    text: string;
    heart: string;
  };
  audioUrl?: string; // for user to easily replace with local or hosted clip
  synthChords: SongChords;
  lyrics: LyricLine[];
}

export type PlaybackMode = 'synth' | 'audio';
