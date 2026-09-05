import React, { useEffect, useRef } from 'react';
import { LyricLine } from '../types';

interface LyricsViewProps {
  lyrics: LyricLine[];
  currentLyric: LyricLine | null;
  onLineClick: (startTime: number) => void;
  accentColor?: string;
}

export const LyricsView: React.FC<LyricsViewProps> = ({
  lyrics,
  currentLyric,
  onLineClick,
  accentColor = '#D65A6B',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  // Smooth auto-scroll active lyric line into view
  useEffect(() => {
    if (activeLineRef.current && containerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentLyric?.id]);

  return (
    <div className="w-full max-w-sm mx-auto my-1 mb-4">
      {/* Lyrics Scrollable Container with Frosted Glass styling */}
      <div 
        id="lyrics-scroll-container"
        ref={containerRef}
        className="relative max-h-72 overflow-y-auto no-scrollbar py-6 px-3 rounded-2xl bg-white/30 border border-white/50 backdrop-blur-xl shadow-xs"
      >
        <div className="space-y-3.5 text-center">
          {lyrics.map((line) => {
            const isActive = currentLyric?.id === line.id;

            return (
              <div
                key={line.id}
                ref={isActive ? activeLineRef : null}
                onClick={() => onLineClick(line.startTime)}
                className={`cursor-pointer transition-all duration-300 py-2 px-3 rounded-xl ${
                  isActive
                    ? 'bg-white/50 border border-pink-200/80 shadow-xs scale-[1.02]'
                    : 'hover:bg-white/30 opacity-50 hover:opacity-90'
                }`}
              >
                <p 
                  className={`font-romantic text-base sm:text-lg transition-colors leading-relaxed ${
                    isActive
                      ? 'text-[#6B4E71] font-medium underline underline-offset-8 decoration-pink-300'
                      : 'text-gray-500 italic text-[14px]'
                  }`}
                >
                  {line.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
