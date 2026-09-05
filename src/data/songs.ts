import { Song } from '../types';

export const SONGS: Song[] = [
  {
    id: 'saturn',
    title: 'Saturn',
    artist: 'SZA',
    duration: 29.3,
    highlightSnippet: 'Chorus & Outro Highlight',
    tagline: 'When the world gets too loud, I find my quiet in you.',
    personalDedication: 'You make every chaotic day feel like floating in a peaceful starry night.',
    accent: {
      bg: '#F5EFFB',
      border: '#E2D3F5',
      pill: '#EDE2FA',
      text: '#6A4D8A',
      heart: '#A883C7',
    },
    audioUrl: '/saturn.mp3',
    synthChords: {
      bpm: 78,
      // Frequencies for a dreamy lofi Rhodes/celeste progression (Abmaj7 - Dbmaj7 - Cm7 - Bbm7)
      chords: [
        { time: 0, notes: [207.65, 261.63, 311.13, 392.00] }, // Abmaj7
        { time: 5.3, notes: [277.18, 349.23, 415.30, 523.25] }, // Dbmaj7
        { time: 10.6, notes: [261.63, 311.13, 392.00, 466.16] }, // Cm7
        { time: 16.0, notes: [233.08, 277.18, 349.23, 415.30] }, // Bbm7
        { time: 21.3, notes: [207.65, 261.63, 311.13, 392.00] }, // Abmaj7
        { time: 25.5, notes: [277.18, 349.23, 415.30, 523.25] }, // Dbmaj7
      ],
    },
    lyrics: [
      {
        id: 'saturn-1',
        text: "Life's better on Saturn",
        startTime: 0,
        endTime: 3.2,
        sketchId: 'saturn-planet',
        caption: 'Saturn with its rings and drifting heart',
      },
      {
        id: 'saturn-2',
        text: "Got to break this pattern",
        startTime: 3.2,
        endTime: 6.2,
        sketchId: 'saturn-pattern',
        caption: 'breaking free into blooming petals',
      },
      {
        id: 'saturn-3',
        text: "Floating away",
        startTime: 6.2,
        endTime: 8.5,
        sketchId: 'saturn-paperplane',
        caption: 'origami plane drifting through constellations',
      },
      {
        id: 'saturn-4',
        text: "Ooh, ooh...",
        startTime: 8.5,
        endTime: 11.2,
        sketchId: 'saturn-galaxy',
        caption: 'distant cosmic stars & signals',
      },
      {
        id: 'saturn-5',
        text: "Find something worth saving",
        startTime: 11.2,
        endTime: 14.0,
        sketchId: 'saturn-treasure',
        caption: 'glowing star jar kept safe',
      },
      {
        id: 'saturn-6',
        text: "It's all for the taking",
        startTime: 14.0,
        endTime: 17.0,
        sketchId: 'saturn-lantern',
        caption: 'a soft lantern glowing in dark',
      },
      {
        id: 'saturn-7',
        text: "I always say",
        startTime: 17.0,
        endTime: 19.5,
        sketchId: 'saturn-whisper',
        caption: 'sweet words whispered under the stars',
      },
      {
        id: 'saturn-8',
        text: "I'll be better on Saturn",
        startTime: 19.5,
        endTime: 22.5,
        sketchId: 'saturn-space',
        caption: 'swinging together on Saturn rings',
      },
      {
        id: 'saturn-9',
        text: "None of this matters",
        startTime: 22.5,
        endTime: 25.5,
        sketchId: 'saturn-stars',
        caption: 'crescent moon sleeping among clouds',
      },
      {
        id: 'saturn-10',
        text: "Dreaming of Saturn, oh",
        startTime: 25.5,
        endTime: 30.0,
        sketchId: 'saturn-moonlight',
        caption: 'sitting together wrapped in starlight',
      },
    ],
  },
  {
    id: 'show-me-how',
    title: 'Show Me How',
    artist: 'Men I Trust',
    duration: 54,
    highlightSnippet: 'Dreamy Verse & Chorus',
    tagline: 'Soft, slow, and effortless — just like our afternoons together.',
    personalDedication: 'Every time I hear this guitar, I remember the exact way you look at me.',
    accent: {
      bg: '#FAF0E6',
      border: '#F0DBC4',
      pill: '#F5E4D3',
      text: '#825838',
      heart: '#BA895D',
    },
    audioUrl: '/show-me-how.mp3',
    synthChords: {
      bpm: 82,
      // Frequencies for dreamy Men I Trust chords (Fmaj7 - Em7 - Dm7 - Cmaj7)
      chords: [
        { time: 0, notes: [174.61, 220.00, 261.63, 329.63] }, // Fmaj7
        { time: 9.0, notes: [164.81, 196.00, 246.94, 293.66] }, // Em7
        { time: 18.0, notes: [146.83, 174.61, 220.00, 261.63] }, // Dm7
        { time: 27.0, notes: [130.81, 164.81, 196.00, 246.94] }, // Cmaj7
        { time: 36.0, notes: [174.61, 220.00, 261.63, 329.63] }, // Fmaj7
        { time: 45.0, notes: [130.81, 164.81, 196.00, 246.94] }, // Cmaj7
      ],
    },
    lyrics: [
      {
        id: 'showme-1',
        text: "Show me how you care",
        startTime: 0,
        endTime: 9.5,
        sketchId: 'showme-hands-heart',
        caption: 'gentle hands cradling a warm heart',
      },
      {
        id: 'showme-2',
        text: "Tell me how you loved before",
        startTime: 9.5,
        endTime: 19.5,
        sketchId: 'showme-loved-embrace',
        caption: 'two foreheads resting softly together in embrace',
      },
      {
        id: 'showme-3',
        text: "Show me how you smile",
        startTime: 19.5,
        endTime: 27.5,
        sketchId: 'showme-smile',
        caption: 'a delicate sketched gentle smile in pencil',
      },
      {
        id: 'showme-4',
        text: "Tell me why your hands are cold",
        startTime: 27.5,
        endTime: 36.3,
        sketchId: 'showme-cold-hands',
        caption: 'warm hands wrapping around cold hands to warm them',
      },
      {
        id: 'showme-5',
        text: "Show me how",
        startTime: 36.3,
        endTime: 38.3,
        sketchId: 'showme-intertwined-hands',
        caption: 'intertwined fingers and breezy petals',
      },
      {
        id: 'showme-6',
        text: "I'm turning around",
        startTime: 38.3,
        endTime: 40.1,
        sketchId: 'showme-turning-around',
        caption: 'turning around with soft wind in hair',
      },
      {
        id: 'showme-7',
        text: "I'm having visions of you",
        startTime: 40.1,
        endTime: 43.5,
        sketchId: 'showme-visions',
        caption: 'dreamy thoughts framed in gentle starlight',
      },
      {
        id: 'showme-8',
        text: "But then I understand",
        startTime: 43.5,
        endTime: 47.0,
        sketchId: 'showme-coffee-cups',
        caption: 'two steaming mugs side by side',
      },
      {
        id: 'showme-9',
        text: "The friend I'm dreaming of is far away",
        startTime: 47.0,
        endTime: 51.8,
        sketchId: 'showme-far-away',
        caption: 'paper airplane flying towards distant stars',
      },
      {
        id: 'showme-10',
        text: "But I'm here",
        startTime: 51.8,
        endTime: 53.4,
        sketchId: 'showme-walking-together',
        caption: 'standing right beside you under the golden sun',
      },
      {
        id: 'showme-11',
        text: "I'm here",
        startTime: 53.4,
        endTime: 54.02,
        sketchId: 'showme-here-together',
        caption: 'two silhouettes sitting close together forever',
      },
    ],
  },
  {
    id: 'the-way-things-go',
    title: 'The Way Things Go',
    artist: 'beabadoobee',
    duration: 26.25,
    highlightSnippet: 'Acoustic Guitar Chorus',
    tagline: 'Gentle, honest, and nostalgic like pressed flowers in a diary.',
    personalDedication: 'Even when life feels uncertain, having you here makes everything fall into place.',
    accent: {
      bg: '#FDF0F0',
      border: '#F7D6D6',
      pill: '#FCE4E4',
      text: '#994444',
      heart: '#CC6E6E',
    },
    audioUrl: '/the-way-things-go.mp3',
    synthChords: {
      bpm: 88,
      // Frequencies for acoustic fingerpicking (D - A/C# - Bm - G)
      chords: [
        { time: 0, notes: [146.83, 220.00, 293.66, 369.99] }, // D
        { time: 5.0, notes: [138.59, 220.00, 277.18, 329.63] }, // A/C#
        { time: 10.0, notes: [123.47, 185.00, 246.94, 293.66] }, // Bm
        { time: 15.0, notes: [98.00, 146.83, 196.00, 246.94] },  // G
        { time: 20.0, notes: [146.83, 220.00, 293.66, 369.99] }, // D
        { time: 24.0, notes: [98.00, 146.83, 196.00, 246.94] },  // G
      ],
    },
    lyrics: [
      {
        id: 'waythings-1',
        text: "Guess it's not far from the ordinary, they do say love is blind",
        startTime: 0,
        endTime: 5.48,
        sketchId: 'waythings-letter',
        caption: 'a handwritten love letter and postage stamp',
      },
      {
        id: 'waythings-2',
        text: "But I guess that's the way things go",
        startTime: 5.48,
        endTime: 7.78,
        sketchId: 'waythings-leaves',
        caption: 'autumn leaves floating softly in the air',
      },
      {
        id: 'waythings-3',
        text: "Can't remember how to say your name",
        startTime: 7.78,
        endTime: 11.2,
        sketchId: 'waythings-name-diary',
        caption: 'a delicate journal notebook and pencil',
      },
      {
        id: 'waythings-4',
        text: "Let alone count all the freckles on your face",
        startTime: 11.2,
        endTime: 15.05,
        sketchId: 'waythings-freckles-face',
        caption: 'sweet smiling face with cute dotted freckles',
      },
      {
        id: 'waythings-5',
        text: "A distant memory I used to know",
        startTime: 15.05,
        endTime: 19.2,
        sketchId: 'waythings-rainy-window',
        caption: 'sketched cottage window in the rain',
      },
      {
        id: 'waythings-6',
        text: "Oh, I guess that's just the way things go",
        startTime: 19.2,
        endTime: 22.5,
        sketchId: 'waythings-droplets',
        caption: 'water droplets racing down glass',
      },
      {
        id: 'waythings-7',
        text: "Oh, I guess that's just the way things go",
        startTime: 22.5,
        endTime: 26.25,
        sketchId: 'waythings-paper-boat',
        caption: 'origami boat navigating gentle stream ripples',
      },
    ],
  },
  {
    id: 'glue-song',
    title: 'Glue Song',
    artist: 'beabadoobee',
    duration: 19.62,
    highlightSnippet: 'Acoustic Sweet Highlight',
    tagline: 'I never thought I could be stuck to someone so happily.',
    personalDedication: 'You are my favorite place to be, stuck together like the sweetest glue.',
    accent: {
      bg: '#F2F7F2',
      border: '#D8E8D8',
      pill: '#E3EFE3',
      text: '#456E45',
      heart: '#6E9C6E',
    },
    audioUrl: '/glue-song.mp3',
    synthChords: {
      bpm: 84,
      // Frequencies for sweet fingerpicking (Gmaj7 - Cmaj7 - Am7 - D7)
      chords: [
        { time: 0, notes: [196.00, 246.94, 293.66, 369.99] }, // Gmaj7
        { time: 4.0, notes: [261.63, 329.63, 392.00, 493.88] }, // Cmaj7
        { time: 8.0, notes: [220.00, 261.63, 329.63, 392.00] }, // Am7
        { time: 12.0, notes: [146.83, 220.00, 293.66, 369.99] }, // D7
        { time: 16.0, notes: [196.00, 246.94, 293.66, 369.99] }, // Gmaj7
      ],
    },
    lyrics: [
      {
        id: 'glue-1',
        text: "I've never known",
        startTime: 0,
        endTime: 3.2,
        sketchId: 'glue-puzzle',
        caption: 'two interlocking puzzle pieces fitting together',
      },
      {
        id: 'glue-2',
        text: "Someone like you",
        startTime: 3.2,
        endTime: 7.2,
        sketchId: 'glue-foreheads',
        caption: 'tender silhouette of leaning foreheads',
      },
      {
        id: 'glue-3',
        text: "Tangled in love",
        startTime: 7.2,
        endTime: 9.6,
        sketchId: 'glue-pinky-promise',
        caption: 'pinky promise tied with red thread of fate',
      },
      {
        id: 'glue-4',
        text: "Stuck by you",
        startTime: 9.6,
        endTime: 11.4,
        sketchId: 'glue-clasped-hands',
        caption: 'tightly clasped hands with sparkles',
      },
      {
        id: 'glue-5',
        text: "From the glue",
        startTime: 11.4,
        endTime: 13.8,
        sketchId: 'glue-bottle',
        caption: 'sweet craft glue bottle with heart label',
      },
      {
        id: 'glue-6',
        text: "Don't forget to kiss me",
        startTime: 13.8,
        endTime: 16.6,
        sketchId: 'glue-kiss',
        caption: 'two silhouettes leaning in for a sweet gentle kiss',
      },
      {
        id: 'glue-7',
        text: "Or else you'll have",
        startTime: 16.6,
        endTime: 18.2,
        sketchId: 'glue-morning-light',
        caption: 'warm sunlight streaming through morning window',
      },
      {
        id: 'glue-8',
        text: "To miss me",
        startTime: 18.2,
        endTime: 19.62,
        sketchId: 'glue-miss-me',
        caption: 'looking back with a playful wave and heart',
      },
    ],
  },
];
