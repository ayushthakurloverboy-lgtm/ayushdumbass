import React from 'react';
import { Play, Pause, Heart, Music, Sparkles } from 'lucide-react';
import { Song } from '../types';

interface SongCardProps {
  song: Song;
  isSelected: boolean;
  isPlaying: boolean;
  onSelectSong: (song: Song) => void;
  onPlaySong: (song: Song) => void;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  isSelected,
  isPlaying,
  onSelectSong,
  onPlaySong,
}) => {
  return (
    <div
      id={`song-card-${song.id}`}
      onClick={() => onSelectSong(song)}
      className={`group relative w-full p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
        isSelected
          ? 'bg-white/60 backdrop-blur-md border-pink-200/90 shadow-[0_8px_24px_-4px_rgba(240,165,175,0.25)] scale-[1.01]'
          : 'bg-white/20 backdrop-blur-sm border-white/40 opacity-80 hover:opacity-100 hover:bg-white/40'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left: Music / Heart icon inside soft rounded container */}
        <div 
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all shadow-xs ${
            isSelected 
              ? 'bg-pink-200/90 text-[#6B4E71]' 
              : 'bg-white/50 text-gray-600 border border-white/60 group-hover:bg-white/70'
          }`}
        >
          {isSelected && isPlaying ? (
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-1 bg-[#6B4E71] rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
              <span className="w-1 bg-[#6B4E71] rounded-full animate-bounce [animation-delay:-0.15s] h-4" />
              <span className="w-1 bg-[#6B4E71] rounded-full animate-bounce h-2" />
            </div>
          ) : isSelected ? (
            <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
          ) : (
            <span className="text-xs font-semibold">♫</span>
          )}
        </div>

        {/* Center: Song title, Artist, and Tagline */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="font-romantic text-base sm:text-lg font-medium text-gray-800 truncate tracking-wide">
              {song.title}
            </h4>
            {isSelected && (
              <span className="text-[10px] font-sans-clean font-medium px-2 py-0.2 rounded-full bg-pink-100/90 text-[#6B4E71] border border-pink-200/60">
                Playing
              </span>
            )}
          </div>

          <p className="text-xs font-sans-clean text-gray-500 truncate mt-0.5">
            {song.artist}
          </p>
        </div>

        {/* Right: Soft Frosted Play / Pause button */}
        <button
          id={`btn-card-play-${song.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onPlaySong(song);
          }}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all active:scale-95 ${
            isSelected && isPlaying
              ? 'bg-[#FFB7B2] text-white shadow-md shadow-pink-200/60 hover:bg-[#ffa9a3]'
              : 'bg-white/60 text-gray-600 hover:bg-white/90 border border-white/70 group-hover:scale-105'
          }`}
          aria-label={isSelected && isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
        >
          {isSelected && isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current translate-x-0.5" />
          )}
        </button>
      </div>
    </div>
  );
};
