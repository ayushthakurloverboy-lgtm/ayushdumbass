import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LyricLine } from '../types';

interface SketchIllustrationProps {
  currentLyric: LyricLine | null;
  songTitle: string;
  artist: string;
}

export const SketchIllustration: React.FC<SketchIllustrationProps> = ({
  currentLyric,
  songTitle,
  artist,
}) => {
  const sketchId = currentLyric?.sketchId || 'default-heart';

  const renderSketchSvg = () => {
    switch (sketchId) {
      // ===== SATURN (SZA) =====
      case 'saturn-galaxy':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Swirling Galaxy & Cosmic Spiral */}
            <path d="M 60 90 C 60 50, 100 40, 120 40 C 160 40, 185 65, 180 95 C 175 125, 140 145, 110 140 C 80 135, 75 110, 85 95 C 95 80, 115 80, 125 90 C 130 95, 128 105, 120 105" 
              strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 2" />
            <path d="M 50 85 C 55 45, 105 32, 130 35 C 170 40, 195 75, 188 105 C 180 135, 140 155, 100 148 C 65 140, 58 105, 72 88" 
              strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            {/* Radio / sound wave rings */}
            <path d="M 120 20 C 135 15, 150 18, 160 25" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 122 12 C 145 7, 168 11, 180 20" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            {/* Sparkle stars */}
            <path d="M 40 40 L 40 50 M 35 45 L 45 45" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 195 45 L 195 55 M 190 50 L 200 50" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 190 135 L 190 143 M 186 139 L 194 139" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 45 130 L 45 138 M 41 134 L 49 134" strokeWidth="1.2" strokeLinecap="round" />
            {/* Tiny stars stippling */}
            <circle cx="95" cy="58" r="1.5" className="fill-[#423934]" />
            <circle cx="155" cy="72" r="1.5" className="fill-[#423934]" />
            <circle cx="140" cy="125" r="1.5" className="fill-[#423934]" />
            <circle cx="85" cy="115" r="1.2" className="fill-[#423934]" />
            <circle cx="120" cy="95" r="2.2" className="fill-[#423934]" />
          </svg>
        );

      case 'saturn-lantern':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Hanging Cord & Lantern */}
            <path d="M 120 15 L 120 42" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 105 42 Q 120 38 135 42" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 100 48 L 140 48" strokeWidth="1.8" strokeLinecap="round" />
            {/* Lantern Glass Body */}
            <path d="M 102 48 C 90 75, 92 105, 105 125 L 135 125 C 148 105, 150 75, 138 48 Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Inner Candle & Flame */}
            <rect x="114" y="96" width="12" height="25" rx="2" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <path d="M 120 96 C 117 88, 120 80, 120 78 C 120 80, 123 88, 120 96 Z" strokeWidth="1.4" className="fill-[#FCE5E8]" />
            {/* Radiating Gentle Glow rays */}
            <path d="M 105 82 L 95 80 M 135 82 L 145 80" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <path d="M 108 70 L 98 64 M 132 70 L 142 64" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <path d="M 112 100 L 98 105 M 128 100 L 142 105" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            {/* Bottom rim */}
            <path d="M 103 125 L 137 125 L 133 133 L 107 133 Z" strokeWidth="1.6" strokeLinecap="round" />
            {/* Soft background stars */}
            <path d="M 60 50 L 60 58 M 56 54 L 64 54" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M 180 80 L 180 88 M 176 84 L 184 84" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          </svg>
        );

      case 'saturn-planet':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Saturn Body */}
            <circle cx="120" cy="90" r="38" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            {/* Surface hatch shading */}
            <path d="M 88 82 C 105 84, 135 84, 152 82" strokeWidth="1.1" strokeDasharray="2 2" />
            <path d="M 85 96 C 105 98, 135 98, 155 96" strokeWidth="1.1" strokeDasharray="3 2" />
            <path d="M 89 106 C 105 108, 132 108, 149 106" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
            {/* Concentric Elliptical Rings */}
            <ellipse cx="120" cy="90" rx="90" ry="24" transform="rotate(-18 120 90)" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="120" cy="90" rx="80" ry="20" transform="rotate(-18 120 90)" strokeWidth="1.2" strokeDasharray="4 2" />
            <ellipse cx="120" cy="90" rx="98" ry="28" transform="rotate(-18 120 90)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            {/* Small floating astronaut / heart */}
            <circle cx="195" cy="42" r="5" strokeWidth="1.3" className="fill-[#FAF6F0]" />
            <path d="M 195 47 L 195 56 M 190 51 L 200 51 M 192 56 L 190 64 M 198 56 L 200 64" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 188 45 Q 180 50 176 56" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
            {/* Stars */}
            <circle cx="45" cy="40" r="1.5" className="fill-[#423934]" />
            <circle cx="65" cy="140" r="1.5" className="fill-[#423934]" />
            <circle cx="185" cy="130" r="1.8" className="fill-[#423934]" />
          </svg>
        );

      case 'saturn-stars':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Sleeping Crescent Moon */}
            <path d="M 135 45 C 100 45, 80 75, 85 110 C 88 128, 98 142, 112 148 C 92 135, 90 100, 105 75 C 114 60, 126 50, 135 45 Z" 
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Gentle eye on moon */}
            <path d="M 98 96 Q 102 99 106 96" strokeWidth="1.5" strokeLinecap="round" />
            {/* Soft fluffy clouds */}
            <path d="M 50 135 C 50 120, 70 115, 80 122 C 90 112, 115 112, 125 124 C 135 118, 155 120, 160 135 C 160 145, 140 152, 105 152 C 70 152, 50 145, 50 135 Z" 
              strokeWidth="1.6" strokeLinecap="round" className="fill-[#FAF6F0]" />
            <path d="M 55 137 C 65 135, 75 138, 85 136" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            {/* Surrounding constellation & starbursts */}
            <path d="M 160 50 L 160 62 M 154 56 L 166 56" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 185 85 L 185 93 M 181 89 L 189 89" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 55 70 L 55 78 M 51 74 L 59 74" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="140" cy="90" r="1.5" className="fill-[#423934]" />
            <circle cx="170" cy="115" r="1.5" className="fill-[#423934]" />
            <circle cx="75" cy="50" r="1.5" className="fill-[#423934]" />
          </svg>
        );

      case 'saturn-paperplane':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Looping flight trail */}
            <path d="M 35 145 C 55 145, 70 120, 70 100 C 70 70, 45 70, 45 90 C 45 115, 95 125, 120 110 C 145 95, 155 75, 175 70" 
              strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
            {/* Origami Paper Airplane */}
            <g transform="translate(160, 45) rotate(15)">
              <polygon points="0,25 45,0 15,35" strokeWidth="1.8" strokeLinejoin="round" className="fill-[#FAF6F0]" />
              <polygon points="15,35 45,0 20,42" strokeWidth="1.5" strokeLinejoin="round" className="fill-[#F5EFEB]" />
              <line x1="45" y1="0" x2="20" y2="42" strokeWidth="1.6" />
            </g>
            {/* Stars & Orbit lines */}
            <ellipse cx="120" cy="90" rx="90" ry="25" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" transform="rotate(-10 120 90)" />
            <path d="M 130 35 L 130 43 M 126 39 L 134 39" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 210 95 L 210 103 M 206 99 L 214 99" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="105" cy="65" r="1.6" className="fill-[#423934]" />
            <circle cx="190" cy="130" r="1.6" className="fill-[#423934]" />
          </svg>
        );

      case 'saturn-moonlight':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Giant soft moon */}
            <circle cx="120" cy="70" r="45" strokeWidth="1.6" strokeDasharray="4 2" className="fill-[#FAF6F0]" />
            {/* Moonlight rays */}
            <line x1="120" y1="15" x2="120" y2="5" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <line x1="170" y1="35" x2="180" y2="28" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <line x1="70" y1="35" x2="60" y2="28" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            {/* Grassy hill silhouette */}
            <path d="M 20 160 Q 120 135 220 160" strokeWidth="2" strokeLinecap="round" />
            {/* Two cozy figures under a blanket looking at the moon */}
            <path d="M 102 125 C 102 110, 138 110, 138 125 C 142 135, 142 145, 138 152 L 102 152 C 98 145, 98 135, 102 125 Z" 
              strokeWidth="1.8" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Heads leaning */}
            <circle cx="112" cy="112" r="7" strokeWidth="1.6" className="fill-[#423934]" />
            <circle cx="126" cy="114" r="6.5" strokeWidth="1.6" className="fill-[#423934]" />
            {/* Blanket folds */}
            <path d="M 105 132 Q 120 136 135 132" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 106 142 Q 120 146 134 142" strokeWidth="1.2" strokeLinecap="round" />
            {/* Heart in sky */}
            <path d="M 120 38 C 117 34, 112 35, 112 40 C 112 45, 120 49, 120 51 C 120 49, 128 45, 128 40 C 128 35, 123 34, 120 38 Z" 
              strokeWidth="1.2" className="fill-[#F7D4DA]" />
          </svg>
        );

      case 'saturn-pattern':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Breaking geometric pattern & flourishing spiral vine */}
            <path d="M 40 90 L 80 50 L 120 90 L 80 130 Z" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 60 90 L 80 70 L 100 90 L 80 110 Z" strokeWidth="1.2" />
            {/* Breaking open into flowering spiral */}
            <path d="M 80 50 C 95 30, 130 35, 145 60 C 160 85, 140 120, 165 135 C 185 145, 205 130, 200 105 C 195 80, 175 80, 170 95" 
              strokeWidth="1.8" strokeLinecap="round" />
            {/* Leaves & petals bursting out of the broken pattern */}
            <path d="M 145 60 C 148 50, 160 48, 162 58 C 160 65, 150 65, 145 60 Z" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <path d="M 165 135 C 172 138, 178 148, 170 152 C 165 152, 162 142, 165 135 Z" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <path d="M 130 90 C 135 85, 142 85, 140 92 C 138 96, 132 94, 130 90 Z" strokeWidth="1.2" className="fill-[#FCE5E8]" />
            {/* Floating butterflies / sparkles */}
            <path d="M 175 45 Q 185 40 185 50 Q 175 52 175 45 Z" strokeWidth="1.2" className="fill-[#FAF6F0]" />
            <path d="M 175 45 Q 165 40 165 50 Q 175 52 175 45 Z" strokeWidth="1.2" className="fill-[#FAF6F0]" />
            <circle cx="175" cy="48" r="1.5" className="fill-[#423934]" />
            <circle cx="50" cy="140" r="1.5" className="fill-[#423934]" />
            <circle cx="195" cy="70" r="1.5" className="fill-[#423934]" />
          </svg>
        );

      case 'saturn-treasure':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Glass Mason Jar holding captured stars & heart */}
            {/* Jar Lid & Neck */}
            <rect x="100" y="35" width="40" height="8" rx="2" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <rect x="96" y="43" width="48" height="6" rx="2" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <path d="M 102 49 Q 120 54 138 49" strokeWidth="1.4" />
            {/* Jar Body */}
            <path d="M 96 49 C 85 60, 80 90, 80 125 C 80 142, 95 148, 120 148 C 145 148, 160 142, 160 125 C 160 90, 155 60, 144 49 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Inner glowing heart star */}
            <path d="M 120 90 C 114 78, 98 80, 98 96 C 98 112, 120 126, 120 130 C 120 126, 142 112, 142 96 C 142 80, 126 78, 120 90 Z" 
              strokeWidth="1.8" className="fill-[#FCE5E8]" />
            {/* Starlight sparkles inside jar */}
            <path d="M 105 70 L 105 76 M 102 73 L 108 73" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 135 75 L 135 81 M 132 78 L 138 78" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="112" cy="115" r="1.5" className="fill-[#423934]" />
            <circle cx="128" cy="115" r="1.5" className="fill-[#423934]" />
            {/* Radiating twinkle lines outside jar */}
            <path d="M 68 85 L 60 82 M 172 85 L 180 82" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <path d="M 65 115 L 58 118 M 175 115 L 182 118" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          </svg>
        );

      case 'saturn-whisper':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two loving silhouettes leaning softly face-to-face with soundwave stars */}
            <path d="M 70 145 C 75 110, 92 90, 105 85 C 115 80, 110 65, 100 62 C 90 60, 85 70, 78 75" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="95" cy="55" r="16" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <path d="M 170 145 C 165 110, 148 90, 135 85 C 125 80, 130 65, 140 62 C 150 60, 155 70, 162 75" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="145" cy="55" r="16" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            {/* Gentle heart floating between them */}
            <path d="M 120 48 C 117 42, 110 43, 110 48 C 110 53, 120 58, 120 60 C 120 58, 130 53, 130 48 C 130 43, 123 42, 120 48 Z" 
              strokeWidth="1.4" className="fill-[#FCE5E8]" />
            {/* Constellation dots */}
            <path d="M 50 40 L 65 48 L 75 35" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="50" cy="40" r="1.5" className="fill-[#423934]" />
            <circle cx="65" cy="48" r="1.5" className="fill-[#423934]" />
            <circle cx="75" cy="35" r="1.5" className="fill-[#423934]" />
            <path d="M 190 40 L 175 48 L 165 35" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="190" cy="40" r="1.5" className="fill-[#423934]" />
            <circle cx="175" cy="48" r="1.5" className="fill-[#423934]" />
            <circle cx="165" cy="35" r="1.5" className="fill-[#423934]" />
          </svg>
        );

      case 'saturn-space':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two lovers on a celestial swing suspended from Saturn's rings */}
            {/* Saturn in upper corner */}
            <circle cx="120" cy="55" r="28" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <ellipse cx="120" cy="55" rx="68" ry="18" transform="rotate(-15 120 55)" strokeWidth="1.8" />
            <ellipse cx="120" cy="55" rx="58" ry="14" transform="rotate(-15 120 55)" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
            {/* Two swing ropes dangling down */}
            <path d="M 105 68 L 100 135" strokeWidth="1.4" strokeDasharray="4 2" />
            <path d="M 135 68 L 140 135" strokeWidth="1.4" strokeDasharray="4 2" />
            {/* Swing wooden plank */}
            <rect x="94" y="135" width="52" height="6" rx="2" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            {/* Two figures sitting together with feet dangling */}
            <circle cx="114" cy="116" r="6" strokeWidth="1.5" className="fill-[#423934]" />
            <circle cx="126" cy="117" r="5.5" strokeWidth="1.5" className="fill-[#423934]" />
            <path d="M 108 123 C 108 120, 132 120, 132 123 L 132 135 L 108 135 Z" strokeWidth="1.5" className="fill-[#FAF6F0]" />
            {/* Dangling legs */}
            <path d="M 112 141 L 112 152 M 116 141 L 118 152" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 124 141 L 122 152 M 128 141 L 130 152" strokeWidth="1.5" strokeLinecap="round" />
            {/* Surrounding stars */}
            <circle cx="45" cy="90" r="1.5" className="fill-[#423934]" />
            <circle cx="195" cy="100" r="1.5" className="fill-[#423934]" />
            <path d="M 50 45 L 50 53 M 46 49 L 54 49" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 190 45 L 190 53 M 186 49 L 194 49" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );

      // ===== SHOW ME HOW (Men I Trust) =====
      case 'showme-hands-heart':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two open cupping hands */}
            <path d="M 45 135 C 60 125, 80 120, 95 125 C 105 128, 110 135, 115 145" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 50 145 C 68 135, 90 132, 105 138" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 195 135 C 180 125, 160 120, 145 125 C 135 128, 130 135, 125 145" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 190 145 C 172 135, 150 132, 135 138" strokeWidth="1.4" strokeLinecap="round" />
            {/* Soft Glowing Heart resting between hands */}
            <path d="M 120 72 C 112 55, 88 58, 88 80 C 88 102, 120 120, 120 126 C 120 120, 152 102, 152 80 C 152 58, 128 55, 120 72 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#FCE5E8]" />
            {/* Pencil crosshatching inside heart */}
            <path d="M 100 78 L 115 92 M 105 72 L 125 90 M 118 70 L 135 86" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
            {/* Warm sparks */}
            <line x1="120" y1="42" x2="120" y2="48" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="80" y1="60" x2="74" y2="55" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="160" y1="60" x2="166" y2="55" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case 'showme-loved-embrace':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Sweet embrace / two foreheads touching softly */}
            {/* Girl head & hair */}
            <circle cx="98" cy="72" r="16" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 85 64 Q 100 52 110 65 Q 112 75 106 85" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 94 90 C 88 102, 85 125, 90 148" strokeWidth="1.8" strokeLinecap="round" />
            {/* Boy head & hair */}
            <circle cx="128" cy="72" r="16" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 118 62 Q 132 50 144 65" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 132 90 C 138 102, 142 125, 138 148" strokeWidth="1.8" strokeLinecap="round" />
            {/* Foreheads resting together */}
            <path d="M 112 70 Q 114 74 112 78" strokeWidth="1.6" strokeLinecap="round" />
            {/* Arms wrapped around in a gentle hug */}
            <path d="M 92 105 C 104 115, 126 116, 136 106" strokeWidth="2" strokeLinecap="round" />
            <path d="M 136 106 C 145 102, 145 92, 138 90" strokeWidth="1.8" strokeLinecap="round" />
            {/* Little heart above them */}
            <path d="M 113 42 C 109 35, 102 36, 102 42 C 102 48, 113 54, 113 56 C 113 54, 124 48, 124 42 C 124 36, 117 35, 113 42 Z" 
              strokeWidth="1.5" className="fill-[#FCE5E8]" />
            {/* Gentle aura / stardust sparkles */}
            <circle cx="68" cy="60" r="1.5" className="fill-[#423934]" />
            <circle cx="160" cy="55" r="1.5" className="fill-[#423934]" />
            <circle cx="75" cy="115" r="1.5" className="fill-[#423934]" />
            <circle cx="155" cy="118" r="1.5" className="fill-[#423934]" />
            <path d="M 60 85 L 60 91 M 57 88 L 63 88" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 172 80 L 172 86 M 169 83 L 175 83" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );

      case 'showme-walking-together':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Evening Sun setting */}
            <circle cx="120" cy="55" r="28" strokeWidth="1.6" strokeDasharray="4 2" className="fill-[#FAF3EB]" />
            <line x1="120" y1="18" x2="120" y2="12" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="155" y1="32" x2="162" y2="28" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="85" y1="32" x2="78" y2="28" strokeWidth="1.4" strokeLinecap="round" />
            {/* Horizon Ground Line */}
            <line x1="30" y1="150" x2="210" y2="150" strokeWidth="1.8" strokeLinecap="round" />
            {/* Girl silhouette */}
            <circle cx="106" cy="85" r="7.5" strokeWidth="1.6" className="fill-[#423934]" />
            <path d="M 106 93 L 106 122 M 100 102 L 115 114 M 106 122 L 98 148 M 106 122 L 110 148" strokeWidth="2" strokeLinecap="round" />
            {/* Boy silhouette (slightly taller) */}
            <circle cx="130" cy="80" r="8" strokeWidth="1.6" className="fill-[#423934]" />
            <path d="M 130 88 L 130 120 M 122 98 L 115 114 M 130 120 L 126 148 M 130 120 L 136 148" strokeWidth="2" strokeLinecap="round" />
            {/* Clasped hands in the middle */}
            <circle cx="115" cy="114" r="3" strokeWidth="1.5" className="fill-[#423934]" />
            {/* Tiny love spark */}
            <path d="M 115 106 C 113 103, 110 104, 110 107 C 110 110, 115 112, 115 113 C 115 112, 120 110, 120 107 C 120 104, 117 103, 115 106 Z" 
              strokeWidth="1" className="fill-[#D87080]" />
            {/* Wild grasses & wildflowers on path */}
            <path d="M 45 150 Q 48 138 52 142 M 52 150 Q 56 135 62 145 M 180 150 Q 185 136 190 144" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        );

      case 'showme-coffee-cups':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Wooden table line */}
            <line x1="40" y1="145" x2="200" y2="145" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="50" y1="152" x2="190" y2="152" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            {/* Mug 1 (Left) */}
            <rect x="75" y="90" width="36" height="42" rx="6" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 75 98 C 65 98, 62 115, 75 120" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 85 105 L 100 105" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            {/* Mug 2 (Right, leaning slightly) */}
            <rect x="125" y="88" width="38" height="44" rx="6" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 163 96 C 173 96, 176 113, 163 118" strokeWidth="1.8" strokeLinecap="round" />
            {/* Little heart sketched on mug */}
            <path d="M 144 105 C 141 101, 137 102, 137 105 C 137 109, 144 112, 144 114 C 144 112, 151 109, 151 105 C 151 102, 147 101, 144 105 Z" 
              strokeWidth="1.2" className="fill-[#E8D4BE]" />
            {/* Swirling Steam forming a Heart */}
            <path d="M 92 82 C 92 68, 102 65, 105 55 C 108 45, 118 42, 120 48" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 145 80 C 145 66, 135 63, 132 52 C 130 43, 122 42, 120 48" strokeWidth="1.4" strokeLinecap="round" />
            {/* Heart at the top of steam */}
            <path d="M 120 40 C 117 35, 112 36, 112 40 C 112 44, 120 47, 120 49 C 120 47, 128 44, 128 40 C 128 36, 123 35, 120 40 Z" 
              strokeWidth="1.3" className="fill-[#FCE5E8]" />
          </svg>
        );

      case 'showme-dancing-shadows':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Vintage Streetlamp */}
            <line x1="50" y1="35" x2="50" y2="155" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 42 35 L 58 35 L 54 22 L 46 22 Z" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 50 22 L 50 16" strokeWidth="1.5" />
            {/* Light cone beam */}
            <path d="M 50 35 L 180 155" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
            {/* Pavement stones */}
            <line x1="20" y1="155" x2="220" y2="155" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 90 155 Q 110 150 130 155 M 140 155 Q 160 151 180 155" strokeWidth="1" opacity="0.5" />
            {/* Dancing Silhouettes / Shadows */}
            {/* Upper bodies spinning */}
            <circle cx="125" cy="80" r="7" strokeWidth="1.6" className="fill-[#423934]" />
            <circle cx="145" cy="82" r="7" strokeWidth="1.6" className="fill-[#423934]" />
            <path d="M 125 87 C 120 102, 118 115, 130 120" strokeWidth="2" strokeLinecap="round" />
            <path d="M 145 89 C 150 102, 150 115, 140 120" strokeWidth="2" strokeLinecap="round" />
            {/* Swirling dress / legs */}
            <path d="M 115 110 Q 135 125 155 110" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 125 120 L 120 148 M 138 120 L 148 148" strokeWidth="2" strokeLinecap="round" />
            {/* Long elongated shadows on the pavement */}
            <ellipse cx="160" cy="158" rx="35" ry="6" strokeWidth="1.4" strokeDasharray="3 2" className="fill-[#E6DFD8]" opacity="0.7" />
          </svg>
        );

      case 'showme-intertwined-hands':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two hands clasped, fingers intertwined */}
            {/* Left wrist & palm */}
            <path d="M 35 110 C 60 105, 80 95, 102 92" strokeWidth="2" strokeLinecap="round" />
            <path d="M 40 130 C 65 125, 85 118, 105 108" strokeWidth="2" strokeLinecap="round" />
            {/* Right wrist & palm */}
            <path d="M 205 110 C 180 105, 160 95, 138 92" strokeWidth="2" strokeLinecap="round" />
            <path d="M 200 130 C 175 125, 155 118, 135 108" strokeWidth="2" strokeLinecap="round" />
            {/* Interlaced fingers center */}
            <path d="M 102 92 C 112 88, 118 95, 118 105 C 118 112, 126 112, 128 102 C 128 92, 135 88, 138 92" 
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            <path d="M 108 102 C 115 102, 118 110, 124 110 C 128 110, 132 104, 132 102" strokeWidth="1.6" strokeLinecap="round" />
            {/* Gentle wind swirls & flying flower petals */}
            <path d="M 60 55 C 90 45, 130 50, 150 42 C 170 35, 185 45, 200 40" strokeWidth="1.3" strokeDasharray="3 3" strokeLinecap="round" opacity="0.6" />
            {/* Sketched petals */}
            <path d="M 75 42 C 72 38, 78 35, 82 38 C 85 42, 80 46, 75 42 Z" strokeWidth="1.2" className="fill-[#FCE5E8]" />
            <path d="M 165 38 C 162 34, 168 31, 172 34 C 175 38, 170 42, 165 38 Z" strokeWidth="1.2" className="fill-[#FCE5E8]" />
            <path d="M 125 65 C 122 61, 128 58, 132 61 C 135 65, 130 69, 125 65 Z" strokeWidth="1.2" className="fill-[#FCE5E8]" />
          </svg>
        );

      case 'showme-smile':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Gentle portrait outline */}
            <path d="M 70 85 C 70 45, 170 45, 170 85 C 170 125, 140 148, 120 148 C 100 148, 70 125, 70 85 Z" 
              strokeWidth="1.8" strokeLinecap="round" className="fill-[#FAF6F0]" />
            {/* Messy sketched curls / hair */}
            <path d="M 65 75 Q 80 40 110 38 Q 135 36, 165 55 Q 175 70, 172 85" strokeWidth="2" strokeLinecap="round" />
            <path d="M 75 55 Q 105 48 135 52" strokeWidth="1.3" strokeLinecap="round" />
            {/* Gentle crescent smiling eyes */}
            <path d="M 92 88 Q 102 82 110 88" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 130 88 Q 138 82 148 88" strokeWidth="2.2" strokeLinecap="round" />
            {/* Cute nose */}
            <path d="M 120 95 Q 123 103 118 105" strokeWidth="1.5" strokeLinecap="round" />
            {/* Warm, gentle smiling lips */}
            <path d="M 102 118 Q 120 132 138 118" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 100 117 L 96 115 M 140 117 L 144 115" strokeWidth="1.5" strokeLinecap="round" />
            {/* Rosy blush hatchings */}
            <g opacity="0.5">
              <line x1="86" y1="102" x2="94" y2="100" strokeWidth="1.2" />
              <line x1="88" y1="106" x2="96" y2="104" strokeWidth="1.2" />
              <line x1="144" y1="102" x2="152" y2="100" strokeWidth="1.2" />
              <line x1="146" y1="106" x2="154" y2="104" strokeWidth="1.2" />
            </g>
          </svg>
        );

      case 'showme-cold-hands':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* One hand gently wrapping around cold hand to warm it */}
            <path d="M 45 130 C 65 115, 95 110, 115 112 C 125 113, 135 118, 140 125" strokeWidth="2" strokeLinecap="round" />
            <path d="M 52 145 C 75 130, 105 125, 125 128" strokeWidth="1.6" strokeLinecap="round" />
            {/* Protecting warm cupping hand */}
            <path d="M 195 125 C 175 105, 145 100, 120 102 C 105 103, 95 110, 90 120" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 190 140 C 168 120, 138 116, 115 120" strokeWidth="1.6" strokeLinecap="round" />
            {/* Gentle warm breath / steam swirling up */}
            <path d="M 120 95 C 115 80, 125 70, 120 58 C 117 50, 123 45, 125 40" strokeWidth="1.4" strokeDasharray="3 2" strokeLinecap="round" />
            <path d="M 132 92 C 138 78, 130 68, 135 55 C 138 48, 134 42, 138 38" strokeWidth="1.3" strokeDasharray="3 2" strokeLinecap="round" />
            {/* Tiny comforting warm heart in palm */}
            <path d="M 120 116 C 116 110, 108 112, 108 116 C 108 122, 120 128, 120 130 C 120 128, 132 122, 132 116 C 132 112, 124 110, 120 116 Z"
              strokeWidth="1.2" className="fill-[#FCE5E8]" />
            {/* Sparkles */}
            <circle cx="85" cy="70" r="1.5" className="fill-[#423934]" />
            <circle cx="160" cy="65" r="1.5" className="fill-[#423934]" />
          </svg>
        );

      case 'showme-turning-around':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Silhouette turning over shoulder */}
            <circle cx="120" cy="65" r="18" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            {/* Flowing hair caught in motion */}
            <path d="M 105 58 C 85 55, 75 75, 70 95 C 68 105, 80 110, 95 98" strokeWidth="2" strokeLinecap="round" />
            <path d="M 110 50 C 95 48, 85 62, 80 80" strokeWidth="1.4" strokeLinecap="round" />
            {/* Turned neck & shoulder */}
            <path d="M 115 83 L 112 105 C 112 118, 95 130, 90 148" strokeWidth="2" strokeLinecap="round" />
            <path d="M 128 83 L 132 105 C 135 118, 150 128, 158 148" strokeWidth="2" strokeLinecap="round" />
            {/* Backward glance eye */}
            <path d="M 128 65 Q 132 62, 135 66" strokeWidth="2" strokeLinecap="round" />
            {/* Turn swirl motion arches */}
            <path d="M 148 55 C 160 62, 168 75, 162 90 C 158 100, 145 106, 138 108" strokeWidth="1.4" strokeDasharray="4 3" strokeLinecap="round" opacity="0.6" />
            <path d="M 60 70 Q 55 85 65 95" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.5" />
          </svg>
        );

      case 'showme-visions':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Dreamy thought bubble & glowing stars */}
            {/* Silhouette of dreamer looking upward */}
            <circle cx="75" cy="115" r="14" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 72 129 C 68 138, 62 148, 55 158" strokeWidth="2" strokeLinecap="round" />
            <path d="M 82 129 C 88 138, 98 148, 105 158" strokeWidth="2" strokeLinecap="round" />
            <path d="M 82 112 Q 88 110, 88 114" strokeWidth="1.8" strokeLinecap="round" />
            {/* Floating thought dots */}
            <circle cx="102" cy="98" r="3" strokeWidth="1.2" className="fill-[#FAF6F0]" />
            <circle cx="116" cy="84" r="4.5" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            {/* Dream cloud with vision */}
            <path d="M 135 75 C 130 65, 140 50, 155 52 C 165 42, 185 45, 192 58 C 205 58, 212 72, 206 85 C 210 98, 198 110, 184 108 C 172 115, 155 110, 150 100 C 138 98, 132 85, 135 75 Z"
              strokeWidth="1.8" className="fill-[#FAF6F0]" />
            {/* Inside the vision cloud: glowing starlight & sweetheart */}
            <path d="M 175 70 C 171 65, 164 66, 164 71 C 164 76, 175 82, 175 84 C 175 82, 186 76, 186 71 C 186 66, 179 65, 175 70 Z"
              strokeWidth="1.4" className="fill-[#FCE5E8]" />
            <line x1="175" y1="58" x2="175" y2="62" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="175" y1="88" x2="175" y2="92" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="156" y1="75" x2="160" y2="75" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="190" y1="75" x2="194" y2="75" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );

      case 'showme-far-away':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Crescent moon in the distance */}
            <path d="M 185 35 C 175 35, 165 45, 165 60 C 165 75, 175 85, 188 85 C 180 83, 175 74, 175 62 C 175 50, 180 40, 185 35 Z"
              strokeWidth="1.6" className="fill-[#FAF6F0]" />
            {/* Star constellation */}
            <circle cx="150" cy="40" r="1.5" className="fill-[#423934]" />
            <circle cx="130" cy="55" r="1.5" className="fill-[#423934]" />
            <circle cx="205" cy="65" r="1.5" className="fill-[#423934]" />
            <line x1="150" y1="40" x2="130" y2="55" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
            {/* Paper Airplane flying across the sky */}
            <path d="M 60 120 L 140 75 L 85 130 Z" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 85 130 L 140 75 L 105 110" strokeWidth="1.6" />
            {/* Flight trail / dashed loop */}
            <path d="M 40 145 Q 45 130 55 125" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.6" />
            {/* Horizon hills below */}
            <path d="M 20 155 Q 70 145 120 152 Q 170 142 220 155" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );

      case 'showme-here-together':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two silhouettes sitting close on a wooden park bench, leaning against each other */}
            {/* Ground line */}
            <line x1="30" y1="152" x2="210" y2="152" strokeWidth="1.8" strokeLinecap="round" />
            {/* Bench slats */}
            <line x1="65" y1="122" x2="175" y2="122" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="60" y1="130" x2="180" y2="130" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="75" y1="130" x2="75" y2="152" strokeWidth="2" />
            <line x1="165" y1="130" x2="165" y2="152" strokeWidth="2" />
            {/* Left person (leaning head right) */}
            <circle cx="110" cy="80" r="11" strokeWidth="1.8" className="fill-[#423934]" />
            <path d="M 102 92 C 102 105, 105 115, 108 122" strokeWidth="2.2" strokeLinecap="round" />
            {/* Right person (head tilted gently against left) */}
            <circle cx="128" cy="83" r="11" strokeWidth="1.8" className="fill-[#423934]" />
            <path d="M 132 94 C 132 105, 130 115, 128 122" strokeWidth="2.2" strokeLinecap="round" />
            {/* Sweet shared scarf / connection */}
            <path d="M 106 90 C 114 96, 124 96, 132 90" strokeWidth="2.5" strokeLinecap="round" />
            {/* Warm heart floating directly above both */}
            <path d="M 119 50 C 114 42, 105 44, 105 50 C 105 58, 119 65, 119 68 C 119 65, 133 58, 133 50 C 133 44, 124 42, 119 50 Z"
              strokeWidth="1.5" className="fill-[#FCE5E8]" />
            {/* Sparkles around them */}
            <circle cx="85" cy="65" r="1.5" className="fill-[#423934]" />
            <circle cx="152" cy="65" r="1.5" className="fill-[#423934]" />
          </svg>
        );

      // ===== THE WAY THINGS GO (beabadoobee) =====
      case 'waythings-letter':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Vintage Envelope */}
            <rect x="55" y="55" width="130" height="90" rx="4" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            {/* Open flap */}
            <path d="M 55 55 L 120 105 L 185 55" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M 55 145 L 105 95" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 185 145 L 135 95" strokeWidth="1.4" strokeLinecap="round" />
            {/* Postage Stamp with heart */}
            <rect x="150" y="65" width="24" height="28" strokeWidth="1.2" strokeDasharray="2 2" className="fill-[#FAF2EE]" />
            <path d="M 162 76 C 160 73, 157 74, 157 76 C 157 79, 162 81, 162 82 C 162 81, 167 79, 167 76 C 167 74, 164 73, 162 76 Z" 
              strokeWidth="1" className="fill-[#CC6E6E]" />
            {/* Handwritten script address lines */}
            <line x1="75" y1="115" x2="135" y2="115" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="75" y1="125" x2="120" y2="125" strokeWidth="1.3" strokeLinecap="round" />
            {/* Wax seal with heart */}
            <circle cx="120" cy="105" r="11" strokeWidth="1.5" className="fill-[#CC6E6E]" />
            <path d="M 120 102 C 118 99, 115 100, 115 102 C 115 105, 120 108, 120 109 C 120 108, 125 105, 125 102 C 125 100, 122 99, 120 102 Z" 
              stroke="#FFF" strokeWidth="1" className="fill-[#FFF]" />
          </svg>
        );

      case 'waythings-leaves':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Swirling breeze path */}
            <path d="M 30 140 C 70 130, 90 90, 120 85 C 150 80, 170 120, 210 110" strokeWidth="1.4" strokeDasharray="4 3" strokeLinecap="round" opacity="0.6" />
            {/* Falling Maple Leaf 1 */}
            <g transform="translate(75, 45) rotate(25)">
              <path d="M 0 0 C 8 -12, 22 -10, 25 0 C 35 2, 38 15, 30 22 C 22 30, 8 30, 0 25 C -5 20, -10 10, 0 0 Z" strokeWidth="1.6" className="fill-[#FCEEE6]" />
              <line x1="0" y1="0" x2="22" y2="20" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="8" y1="8" x2="6" y2="2" strokeWidth="1" />
              <line x1="14" y1="14" x2="20" y2="10" strokeWidth="1" />
            </g>
            {/* Oak leaf 2 */}
            <g transform="translate(145, 65) rotate(-15)">
              <path d="M 0 0 C 15 -10, 30 5, 25 25 C 20 40, -5 35, 0 0 Z" strokeWidth="1.6" className="fill-[#F8F0E5]" />
              <line x1="0" y1="0" x2="18" y2="26" strokeWidth="1.2" />
            </g>
            {/* Small fluttering leaf 3 */}
            <g transform="translate(110, 115) rotate(45)">
              <path d="M 0 0 C 10 -5, 18 2, 15 15 C 10 20, 0 15, 0 0 Z" strokeWidth="1.4" className="fill-[#FCEEE6]" />
              <line x1="0" y1="0" x2="12" y2="12" strokeWidth="1" />
            </g>
            {/* Subtle floating dandelion seeds */}
            <circle cx="50" cy="80" r="1.5" className="fill-[#423934]" />
            <line x1="50" y1="80" x2="58" y2="72" strokeWidth="1" strokeLinecap="round" />
            <circle cx="185" cy="45" r="1.5" className="fill-[#423934]" />
            <line x1="185" y1="45" x2="192" y2="38" strokeWidth="1" strokeLinecap="round" />
          </svg>
        );

      case 'waythings-rainy-window':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Window Frame with 4 panes */}
            <rect x="60" y="25" width="120" height="120" rx="4" strokeWidth="2.2" className="fill-[#FAF6F0]" />
            {/* Cross dividers */}
            <line x1="120" y1="25" x2="120" y2="145" strokeWidth="2" />
            <line x1="60" y1="85" x2="180" y2="85" strokeWidth="2" />
            {/* Rain streaks on glass */}
            <line x1="80" y1="40" x2="75" y2="60" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 4" />
            <line x1="100" y1="48" x2="96" y2="72" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 4" />
            <line x1="140" y1="35" x2="136" y2="65" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 4" />
            <line x1="165" y1="45" x2="160" y2="75" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 4" />
            <line x1="85" y1="95" x2="80" y2="125" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 4" />
            <line x1="148" y1="95" x2="144" y2="128" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 4" />
            {/* Window sill */}
            <rect x="50" y="145" width="140" height="14" rx="2" strokeWidth="2" className="fill-[#FAF6F0]" />
            {/* Small potted wildflower on the sill */}
            <path d="M 85 145 L 88 132 L 98 132 L 101 145 Z" strokeWidth="1.6" className="fill-[#EFE4D6]" />
            {/* Sprouting leaf/flower */}
            <path d="M 93 132 Q 90 120 93 115" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="93" cy="115" r="3" strokeWidth="1.3" className="fill-[#FCE5E8]" />
          </svg>
        );

      case 'waythings-droplets':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Diagonal stream lines on glass */}
            <path d="M 95 30 L 95 65 Q 98 85 96 110 L 96 145" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.4" />
            <path d="M 145 25 L 145 70 Q 142 85 144 115 L 144 150" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.4" />
            {/* Main Merging Droplet Pair */}
            {/* Droplet 1 */}
            <path d="M 112 75 C 105 75, 100 85, 100 95 C 100 108, 112 118, 120 118 C 128 118, 140 108, 140 95 C 140 85, 135 75, 128 75 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Highlight gleams on water */}
            <path d="M 106 88 C 106 82, 112 80, 116 80" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="110" cy="98" r="1.5" className="fill-[#423934]" />
            {/* Tiny satellite droplet about to join */}
            <ellipse cx="120" cy="62" rx="4" ry="5.5" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            {/* Heart reflection inside droplet */}
            <path d="M 120 96 C 118 93, 115 94, 115 96 C 115 99, 120 101, 120 102 C 120 101, 125 99, 125 96 C 125 94, 122 93, 120 96 Z" 
              strokeWidth="1" className="fill-[#FCE5E8]" />
            {/* Background delicate drops */}
            <ellipse cx="65" cy="50" rx="3.5" ry="5" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <ellipse cx="175" cy="65" rx="3.5" ry="5" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <ellipse cx="70" cy="125" rx="4" ry="6" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <ellipse cx="170" cy="130" rx="4" ry="6" strokeWidth="1.4" className="fill-[#FAF6F0]" />
          </svg>
        );

      case 'waythings-paper-boat':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Water Ripple Waves */}
            <path d="M 30 120 Q 60 115 90 120 T 150 120 T 210 120" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 50 135 Q 80 130 110 135 T 170 135 T 200 135" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <path d="M 70 148 Q 100 145 130 148 T 180 148" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            {/* Folded Paper Origami Boat */}
            <g transform="translate(20, -5)">
              {/* Hull bottom */}
              <polygon points="50,118 75,132 125,132 150,118" strokeWidth="2" strokeLinejoin="round" className="fill-[#FAF6F0]" />
              {/* Central Sail */}
              <polygon points="75,118 100,65 125,118" strokeWidth="2" strokeLinejoin="round" className="fill-[#FAF6F0]" />
              {/* Fold line */}
              <line x1="100" y1="65" x2="100" y2="132" strokeWidth="1.6" />
              {/* Small paper flag with a heart */}
              <line x1="100" y1="65" x2="100" y2="48" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 100 48 L 115 54 L 100 60 Z" strokeWidth="1.3" className="fill-[#FCE5E8]" />
            </g>
            {/* Gentle ripples around the boat */}
            <ellipse cx="120" cy="132" rx="45" ry="5" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
          </svg>
        );

      case 'waythings-dried-flowers':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Open Book pages */}
            <path d="M 45 125 C 75 118, 105 122, 120 130 C 135 122, 165 118, 195 125 L 195 65 C 165 58, 135 62, 120 70 C 105 62, 75 58, 45 65 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Book Spine Center */}
            <line x1="120" y1="70" x2="120" y2="130" strokeWidth="1.8" />
            {/* Faint script text lines in book */}
            <g opacity="0.3" strokeWidth="1" strokeLinecap="round">
              <line x1="58" y1="80" x2="105" y2="80" />
              <line x1="58" y1="90" x2="100" y2="90" />
              <line x1="58" y1="100" x2="95" y2="100" />
              <line x1="135" y1="80" x2="182" y2="80" />
              <line x1="140" y1="90" x2="182" y2="90" />
              <line x1="145" y1="100" x2="180" y2="100" />
            </g>
            {/* Pressed Daisy & Lavender sprig across the page */}
            <g transform="translate(10, 0)">
              {/* Stem */}
              <path d="M 120 120 Q 115 90 108 65" strokeWidth="1.6" strokeLinecap="round" />
              {/* Petals */}
              <circle cx="108" cy="65" r="4.5" strokeWidth="1.5" className="fill-[#FFF]" />
              <ellipse cx="108" cy="54" rx="3" ry="6" strokeWidth="1.2" className="fill-[#FAF6F0]" />
              <ellipse cx="108" cy="76" rx="3" ry="6" strokeWidth="1.2" className="fill-[#FAF6F0]" />
              <ellipse cx="97" cy="65" rx="6" ry="3" strokeWidth="1.2" className="fill-[#FAF6F0]" />
              <ellipse cx="119" cy="65" rx="6" ry="3" strokeWidth="1.2" className="fill-[#FAF6F0]" />
              <circle cx="108" cy="65" r="2.5" className="fill-[#E6C280]" />
              {/* Lavender sprig */}
              <path d="M 125 125 Q 128 95 136 70" strokeWidth="1.4" strokeLinecap="round" />
              <ellipse cx="134" cy="85" rx="2.5" ry="4" strokeWidth="1.1" className="fill-[#E8E0F2]" />
              <ellipse cx="138" cy="80" rx="2.5" ry="4" strokeWidth="1.1" className="fill-[#E8E0F2]" />
              <ellipse cx="135" cy="74" rx="2.5" ry="4" strokeWidth="1.1" className="fill-[#E8E0F2]" />
              <ellipse cx="136" cy="68" rx="2" ry="3.5" strokeWidth="1.1" className="fill-[#E8E0F2]" />
            </g>
          </svg>
        );

      case 'waythings-name-diary':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Journal notebook page with ribbon bookmark */}
            <rect x="65" y="38" width="110" height="118" rx="5" strokeWidth="2" className="fill-[#FAF6F0]" />
            <line x1="82" y1="38" x2="82" y2="156" strokeWidth="1.4" strokeDasharray="3 2" opacity="0.5" />
            {/* Ruled lines */}
            <line x1="90" y1="65" x2="160" y2="65" strokeWidth="1" opacity="0.35" />
            <line x1="90" y1="80" x2="160" y2="80" strokeWidth="1" opacity="0.35" />
            <line x1="90" y1="95" x2="160" y2="95" strokeWidth="1" opacity="0.35" />
            <line x1="90" y1="110" x2="160" y2="110" strokeWidth="1" opacity="0.35" />
            <line x1="90" y1="125" x2="160" y2="125" strokeWidth="1" opacity="0.35" />
            {/* Delicate handwriting script / pencil */}
            <path d="M 94 62 Q 102 58 110 63 T 128 61 T 142 63" strokeWidth="1.6" strokeLinecap="round" />
            {/* Gentle wooden pencil leaning across the corner */}
            <g transform="translate(140, 75) rotate(-35)">
              <rect x="0" y="0" width="8" height="52" strokeWidth="1.3" className="fill-[#F0E4D2]" />
              <polygon points="0,52 8,52 4,62" strokeWidth="1.3" className="fill-[#E0D0B8]" />
              <polygon points="3,59 5,59 4,62" strokeWidth="1" className="fill-[#423934]" />
              <rect x="0" y="-8" width="8" height="8" rx="2" strokeWidth="1.2" className="fill-[#FCE5E8]" />
            </g>
            {/* Bookmark ribbon trailing out bottom */}
            <path d="M 120 156 L 120 170 L 126 165 L 132 170 L 132 156" strokeWidth="1.4" className="fill-[#CC6E6E]" />
          </svg>
        );

      case 'waythings-freckles-face':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Cute gentle close-up sketch of face with freckles */}
            {/* Head contour */}
            <path d="M 80 85 C 80 50, 160 50, 160 85 C 160 120, 140 135, 120 135 C 100 135, 80 120, 80 85 Z"
              strokeWidth="2" className="fill-[#FAF6F0]" />
            {/* Soft bangs / hair fringe */}
            <path d="M 82 72 Q 95 85 105 76 Q 118 86 132 75 Q 148 84 158 72" strokeWidth="1.8" strokeLinecap="round" />
            {/* Closed smiling peaceful eyes */}
            <path d="M 96 90 Q 104 96 112 90" strokeWidth="2" strokeLinecap="round" />
            <path d="M 128 90 Q 136 96 144 90" strokeWidth="2" strokeLinecap="round" />
            {/* Tiny cute nose line */}
            <path d="M 120 95 Q 121 101 118 102" strokeWidth="1.6" strokeLinecap="round" />
            {/* Gentle warm smile */}
            <path d="M 112 112 Q 120 118 128 112" strokeWidth="2" strokeLinecap="round" />
            {/* Cute rosy cheeks hatching */}
            <path d="M 88 102 L 94 98 M 91 105 L 97 101" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" stroke="#CC6E6E" />
            <path d="M 144 102 L 150 98 M 147 105 L 153 101" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" stroke="#CC6E6E" />
            {/* Sweet freckles dotted across nose and cheeks */}
            <circle cx="106" cy="99" r="1.2" className="fill-[#825838]" />
            <circle cx="111" cy="98" r="1.1" className="fill-[#825838]" />
            <circle cx="116" cy="100" r="1.3" className="fill-[#825838]" />
            <circle cx="122" cy="99" r="1.2" className="fill-[#825838]" />
            <circle cx="127" cy="98" r="1.1" className="fill-[#825838]" />
            <circle cx="132" cy="100" r="1.3" className="fill-[#825838]" />
            <circle cx="108" cy="104" r="1" className="fill-[#825838]" />
            <circle cx="124" cy="103" r="1" className="fill-[#825838]" />
            {/* Heart float above hair */}
            <path d="M 120 38 C 117 32, 110 34, 110 39 C 110 44, 120 50, 120 52 C 120 50, 130 44, 130 39 C 130 34, 123 32, 120 38 Z"
              strokeWidth="1.3" className="fill-[#FCE5E8]" />
          </svg>
        );

      // ===== GLUE SONG (beabadoobee) =====
      case 'glue-puzzle':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Puzzle Piece 1 (Left) */}
            <path d="M 60 65 L 105 65 C 108 55, 122 55, 125 65 L 125 80 C 135 83, 135 97, 125 100 L 125 120 L 85 120 C 82 130, 68 130, 65 120 L 60 120 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Puzzle Piece 2 (Right, locking in) */}
            <path d="M 125 65 L 175 65 L 175 120 L 125 120 L 125 100 C 135 97, 135 83, 125 80 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#F2F7F2]" />
            {/* Little heart connecting the two seams */}
            <path d="M 125 85 C 122 80, 116 82, 116 86 C 116 91, 125 95, 125 97 C 125 95, 134 91, 134 86 C 134 82, 128 80, 125 85 Z" 
              strokeWidth="1.4" className="fill-[#E67E8D]" />
            {/* Sparkle doodles */}
            <path d="M 50 50 L 50 58 M 46 54 L 54 54" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 185 55 L 185 63 M 181 59 L 189 59" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 180 130 L 180 138 M 176 134 L 184 134" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        );

      case 'glue-pinky-promise':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Left Pinky & Fist */}
            <path d="M 40 115 C 65 110, 85 105, 105 100 C 112 98, 116 104, 114 110 C 110 122, 95 125, 80 128" 
              strokeWidth="2" strokeLinecap="round" className="fill-[#FAF6F0]" />
            {/* Right Pinky & Fist */}
            <path d="M 200 115 C 175 110, 155 105, 135 100 C 128 98, 124 104, 126 110 C 130 122, 145 125, 160 128" 
              strokeWidth="2" strokeLinecap="round" className="fill-[#FAF6F0]" />
            {/* Hooked pinky fingers */}
            <path d="M 112 100 C 116 94, 124 94, 128 100 C 128 108, 120 115, 115 115 C 110 115, 108 108, 112 100 Z" 
              strokeWidth="2.2" strokeLinecap="round" className="fill-[#FAF6F0]" />
            {/* Red String of Fate tied around fingers */}
            <path d="M 120 106 C 118 100, 122 92, 120 85 C 118 78, 110 75, 105 78 C 100 82, 102 90, 108 92" 
              stroke="#D65A6B" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 120 106 C 124 108, 132 105, 136 100 C 142 92, 148 95, 155 90" 
              stroke="#D65A6B" strokeWidth="1.8" strokeLinecap="round" />
            {/* Little heart knot on string */}
            <circle cx="120" cy="106" r="3" stroke="#D65A6B" strokeWidth="1" className="fill-[#D65A6B]" />
          </svg>
        );

      case 'glue-foreheads':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two facing profiles resting foreheads */}
            {/* Left face */}
            <path d="M 75 145 C 80 135, 82 120, 85 110 C 88 100, 95 85, 105 80 C 112 76, 116 78, 117 80" 
              strokeWidth="2" strokeLinecap="round" />
            {/* Nose, lips, chin left */}
            <path d="M 116 80 C 112 85, 114 90, 110 93 C 105 96, 108 100, 106 105 C 103 112, 98 120, 95 130" 
              strokeWidth="1.8" strokeLinecap="round" />
            {/* Right face */}
            <path d="M 165 145 C 160 135, 158 120, 155 110 C 152 100, 145 85, 135 80 C 128 76, 124 78, 123 80" 
              strokeWidth="2" strokeLinecap="round" />
            {/* Nose, lips, chin right */}
            <path d="M 124 80 C 128 85, 126 90, 130 93 C 135 96, 132 100, 134 105 C 137 112, 142 120, 145 130" 
              strokeWidth="1.8" strokeLinecap="round" />
            {/* Touching forehead junction */}
            <path d="M 117 80 L 123 80" strokeWidth="2.4" strokeLinecap="round" />
            {/* Closed peaceful eyelashes */}
            <path d="M 102 88 Q 106 91 110 88" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 130 88 Q 134 91 138 88" strokeWidth="1.6" strokeLinecap="round" />
            {/* Soft glowing floating heart between them */}
            <path d="M 120 55 C 117 50, 112 51, 112 55 C 112 60, 120 64, 120 66 C 120 64, 128 60, 128 55 C 128 51, 123 50, 120 55 Z" 
              strokeWidth="1.3" className="fill-[#FCE5E8]" />
          </svg>
        );

      case 'glue-clasped-hands':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two tightly clasped hands with knuckles */}
            <rect x="85" y="70" width="70" height="60" rx="14" strokeWidth="2" className="fill-[#FAF6F0]" />
            {/* Finger joints interlocking */}
            <path d="M 98 70 L 98 120" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 112 70 L 112 125" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 128 70 L 128 125" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 142 70 L 142 120" strokeWidth="1.6" strokeLinecap="round" />
            {/* Wrists extending out */}
            <path d="M 85 95 C 65 100, 50 110, 35 125" strokeWidth="2" strokeLinecap="round" />
            <path d="M 155 95 C 175 100, 190 110, 205 125" strokeWidth="2" strokeLinecap="round" />
            {/* Starburst glimmers around hands */}
            <path d="M 70 65 L 70 73 M 66 69 L 74 69" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 170 65 L 170 73 M 166 69 L 174 69" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 120 45 L 120 55 M 115 50 L 125 50" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="120" cy="95" r="2.5" className="fill-[#D65A6B]" />
          </svg>
        );

      case 'glue-garden-path':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Winding stone stepping garden path */}
            <ellipse cx="120" cy="148" rx="22" ry="7" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <ellipse cx="112" cy="128" rx="18" ry="6" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <ellipse cx="125" cy="110" rx="15" ry="5" strokeWidth="1.5" className="fill-[#FAF6F0]" />
            <ellipse cx="118" cy="94" rx="12" ry="4" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <ellipse cx="124" cy="80" rx="10" ry="3.5" strokeWidth="1.2" className="fill-[#FAF6F0]" />
            {/* Blooming wildflowers on both sides */}
            {/* Left flowers */}
            <path d="M 65 150 Q 70 120 62 105" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="62" cy="105" r="4" strokeWidth="1.4" className="fill-[#FCE5E8]" />
            <circle cx="58" cy="98" r="3" strokeWidth="1.2" className="fill-[#FCE5E8]" />
            <path d="M 80 150 Q 82 135 85 125" strokeWidth="1.3" strokeLinecap="round" />
            {/* Right flowers */}
            <path d="M 175 150 Q 170 125 178 108" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="178" cy="108" r="4" strokeWidth="1.4" className="fill-[#E3EFE3]" />
            <path d="M 160 150 Q 158 135 155 122" strokeWidth="1.3" strokeLinecap="round" />
            {/* Small hideaway arbor / gate in the distance */}
            <path d="M 115 75 Q 120 62 125 75" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 120 55 C 118 52, 114 53, 114 56 C 114 60, 120 63, 120 64 C 120 63, 126 60, 126 56 C 126 53, 122 52, 120 55 Z" 
              strokeWidth="1.2" className="fill-[#D65A6B]" />
          </svg>
        );

      case 'glue-morning-light':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Sun outside window */}
            <circle cx="75" cy="45" r="22" strokeWidth="1.6" strokeDasharray="3 2" className="fill-[#FAF3EB]" />
            {/* Golden diagonal morning lightbeams */}
            <path d="M 80 50 L 195 145" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" />
            <path d="M 95 45 L 210 140" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" />
            <path d="M 65 60 L 175 150" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" />
            {/* Bedroom window & fluttering curtains */}
            <line x1="50" y1="25" x2="190" y2="25" strokeWidth="2.2" strokeLinecap="round" />
            {/* Left wavy curtain */}
            <path d="M 55 25 C 65 55, 45 95, 60 145" strokeWidth="1.8" strokeLinecap="round" className="fill-[#FAF6F0]" />
            {/* Right wavy curtain */}
            <path d="M 185 25 C 175 55, 195 95, 180 145" strokeWidth="1.8" strokeLinecap="round" className="fill-[#FAF6F0]" />
            {/* Bed pillows & cozy duvet */}
            <rect x="95" y="115" width="45" height="25" rx="6" strokeWidth="1.6" className="fill-[#FAF6F0]" />
            <path d="M 85 140 Q 140 130 195 140 L 195 158 L 85 158 Z" strokeWidth="1.8" strokeLinejoin="round" className="fill-[#FAF6F0]" />
            {/* Warm coffee mug on nightstand */}
            <rect x="68" y="132" width="12" height="15" rx="2" strokeWidth="1.4" className="fill-[#FAF6F0]" />
            <path d="M 68 136 C 64 136, 64 142, 68 144" strokeWidth="1.2" />
          </svg>
        );

      case 'glue-bottle':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Vintage craft glue bottle with heart */}
            <g transform="translate(10, 0)">
              {/* Bottle Cap / Nozzle */}
              <polygon points="105,45 115,45 118,65 102,65" strokeWidth="1.8" className="fill-[#FAF6F0]" />
              <polygon points="108,35 112,35 114,45 106,45" strokeWidth="1.8" className="fill-[#CC6E6E]" />
              {/* Bottle Collar */}
              <rect x="96" y="65" width="28" height="10" rx="3" strokeWidth="1.8" className="fill-[#FAF6F0]" />
              {/* Bottle Body */}
              <rect x="85" y="75" width="50" height="75" rx="10" strokeWidth="2" className="fill-[#FAF6F0]" />
              {/* Label */}
              <rect x="92" y="90" width="36" height="42" rx="4" strokeWidth="1.4" strokeDasharray="3 2" className="fill-[#FAF2EE]" />
              {/* Label Heart */}
              <path d="M 110 102 C 107 98, 101 100, 101 104 C 101 109, 110 114, 110 116 C 110 114, 119 109, 119 104 C 119 100, 113 98, 110 102 Z"
                strokeWidth="1.2" className="fill-[#CC6E6E]" />
              <line x1="98" y1="122" x2="122" y2="122" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
              {/* Little glue drop floating from tip */}
              <path d="M 110 20 C 106 24, 104 28, 107 30 C 110 32, 113 30, 113 28 Z" strokeWidth="1.2" className="fill-[#E3EFE3]" />
            </g>
            {/* Floating sparkle doodles */}
            <circle cx="65" cy="80" r="1.5" className="fill-[#423934]" />
            <circle cx="165" cy="75" r="1.5" className="fill-[#423934]" />
            <circle cx="155" cy="120" r="1.5" className="fill-[#423934]" />
            <path d="M 55 110 L 55 116 M 52 113 L 58 113" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 175 100 L 175 106 M 172 103 L 178 103" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );

      case 'glue-kiss':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Two silhouettes leaning in for a sweet gentle kiss */}
            {/* Left face contour */}
            <circle cx="95" cy="75" r="15" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 85 70 C 80 85, 85 105, 88 120 C 90 135, 82 145, 78 152" strokeWidth="2" strokeLinecap="round" />
            <path d="M 98 88 Q 102 91 106 91" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 94 72 Q 98 75 102 72" strokeWidth="1.6" strokeLinecap="round" />
            {/* Right face contour */}
            <circle cx="145" cy="75" r="15" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            <path d="M 155 70 C 160 85, 155 105, 152 120 C 150 135, 158 145, 162 152" strokeWidth="2" strokeLinecap="round" />
            <path d="M 142 88 Q 138 91 134 91" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 146 72 Q 142 75 138 72" strokeWidth="1.6" strokeLinecap="round" />
            {/* Lips meeting gently in the middle */}
            <path d="M 115 90 C 118 87, 122 87, 125 90" strokeWidth="2.2" strokeLinecap="round" stroke="#CC6E6E" />
            {/* Gentle hands cupping the cheek */}
            <path d="M 125 108 C 115 110, 105 104, 100 98" strokeWidth="1.8" strokeLinecap="round" />
            {/* Floating love hearts above */}
            <path d="M 120 48 C 116 42, 108 44, 108 49 C 108 55, 120 62, 120 64 C 120 62, 132 55, 132 49 C 132 44, 124 42, 120 48 Z"
              strokeWidth="1.5" className="fill-[#FCE5E8]" />
            <circle cx="75" cy="60" r="1.5" className="fill-[#423934]" />
            <circle cx="165" cy="60" r="1.5" className="fill-[#423934]" />
          </svg>
        );

      case 'glue-miss-me':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            {/* Girl looking back over shoulder with a playful loving wave */}
            <circle cx="115" cy="68" r="17" strokeWidth="1.8" className="fill-[#FAF6F0]" />
            {/* Wavy hair with bow */}
            <path d="M 102 60 C 90 65, 82 85, 82 105 C 82 118, 92 122, 100 110" strokeWidth="2" strokeLinecap="round" />
            <path d="M 118 52 C 128 50, 138 60, 135 75" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 108 52 C 105 48, 102 52, 104 55" strokeWidth="1.4" className="fill-[#CC6E6E]" />
            {/* Playful winking or smiling eye */}
            <path d="M 122 66 Q 126 62, 130 66" strokeWidth="2" strokeLinecap="round" />
            <circle cx="126" cy="65" r="1.2" className="fill-[#423934]" />
            {/* Cheerful warm smile */}
            <path d="M 120 78 Q 126 84, 132 78" strokeWidth="2" strokeLinecap="round" />
            {/* Body turned */}
            <path d="M 112 85 C 105 100, 95 120, 92 148" strokeWidth="2" strokeLinecap="round" />
            <path d="M 124 85 C 132 100, 142 120, 145 148" strokeWidth="2" strokeLinecap="round" />
            {/* Waving hand */}
            <path d="M 142 98 C 152 90, 160 82, 168 72 C 172 68, 178 72, 174 78 C 168 88, 158 102, 146 112" strokeWidth="1.8" strokeLinecap="round" />
            {/* Tiny fluttering kiss / heart drifting back */}
            <path d="M 160 52 C 157 48, 152 49, 152 53 C 152 57, 160 62, 160 64 C 160 62, 168 57, 168 53 C 168 49, 163 48, 160 52 Z"
              strokeWidth="1.2" className="fill-[#FCE5E8]" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full stroke-[#423934] fill-none">
            <path d="M 120 65 C 110 45, 80 48, 80 75 C 80 105, 120 128, 120 134 C 120 128, 160 105, 160 75 C 160 48, 130 45, 120 65 Z" 
              strokeWidth="2" strokeLinejoin="round" className="fill-[#FCE5E8]" />
            <circle cx="120" cy="90" r="2" className="fill-[#423934]" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto my-2">
      {/* Sketchpad Card Container with Frosted Glass aesthetic */}
      <div 
        id="sketch-display-card"
        className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-3 sm:p-4 border border-white/60 shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300"
      >
        {/* SVG Drawing Canvas Area with frosted texture and subtle dashed border */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-white/70 shadow-inner flex items-center justify-center p-3">
          {/* Subtle dashed ring decorative accent matching sketch theme */}
          <div 
            aria-hidden="true" 
            className="absolute inset-2 border border-dashed border-gray-300/40 rounded-xl pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentLyric?.id || sketchId}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full h-full flex items-center justify-center relative z-10 sketch-animated"
            >
              {renderSketchSvg()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
