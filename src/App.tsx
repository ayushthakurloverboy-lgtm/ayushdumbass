import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, Pause, Gift } from 'lucide-react';
import { SONGS } from './data/songs';
import { Song, LyricLine } from './types';
import { romanticAudio } from './components/AudioEngine';
import { SongCard } from './components/SongCard';
import { SketchIllustration } from './components/SketchIllustration';
import { LyricsView } from './components/LyricsView';
import { SurpriseModal } from './components/SurpriseModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'list' | 'player'>('list');
  const [selectedSong, setSelectedSong] = useState<Song>(SONGS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState<boolean>(false);

  // Sync with audio engine callbacks
  useEffect(() => {
    romanticAudio.setCallbacks(
      (time) => {
        setCurrentTime(time);
      },
      () => {
        // Song plays on loop
        setCurrentTime(0);
        romanticAudio.play(0);
        setIsPlaying(true);
      }
    );

    return () => {
      romanticAudio.stop();
    };
  }, []);

  // Compute active lyric line based on current timestamp
  const currentLyric: LyricLine | null = React.useMemo(() => {
    if (!selectedSong) return null;
    const found = selectedSong.lyrics.find(
      (line) => currentTime >= line.startTime && currentTime <= line.endTime
    );
    if (!found && selectedSong.lyrics.length > 0) {
      if (currentTime < selectedSong.lyrics[0].startTime) {
        return selectedSong.lyrics[0];
      }
      return selectedSong.lyrics[selectedSong.lyrics.length - 1];
    }
    return found || selectedSong.lyrics[0] || null;
  }, [selectedSong, currentTime]);

  // When she clicks a song from the list: load the page and start playing immediately
  const handleOpenSong = (song: Song) => {
    setSelectedSong(song);
    setCurrentTime(0);
    romanticAudio.loadSong(song);
    romanticAudio.play(0);
    setIsPlaying(true);
    setCurrentPage('player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      romanticAudio.pause();
      setIsPlaying(false);
    } else {
      romanticAudio.play(currentTime);
      setIsPlaying(true);
    }
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    romanticAudio.seek(time);
    if (!isPlaying) {
      romanticAudio.play(time);
      setIsPlaying(true);
    }
  };

  const handleBackToList = () => {
    setCurrentPage('list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen text-[#3D3533] flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 relative overflow-x-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #FDFBF7 0%, #FFE4E1 50%, #E6E6FA 100%)',
        fontFamily: '"Georgia", serif'
      }}
    >
      {/* Subtle floating ambient glass orbs */}
      <div 
        aria-hidden="true" 
        className="fixed top-12 -left-20 w-64 h-64 rounded-full bg-pink-100/50 blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-12 -right-20 w-72 h-72 rounded-full bg-purple-100/50 blur-3xl pointer-events-none"
      />

      {/* Frosted Glass Frame Container */}
      <main className="relative w-full max-w-[420px] bg-white/40 backdrop-blur-2xl rounded-[36px] sm:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/60 overflow-hidden flex flex-col z-10 my-auto">
        
        {/* Decorative Sparkles */}
        <div aria-hidden="true" className="absolute top-6 right-8 text-pink-300 text-2xl opacity-40 select-none pointer-events-none">✧</div>
        <div aria-hidden="true" className="absolute bottom-10 left-8 text-indigo-300 text-2xl opacity-40 select-none pointer-events-none">✧</div>

        <AnimatePresence mode="wait">
          {currentPage === 'list' ? (
            /* ================= PAGE 1: SONG LIST ================= */
            <motion.div
              key="song-list-page"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full"
            >
              {/* Romantic Header */}
              <header className="px-6 pt-6 sm:pt-8 pb-3 text-center">
                <h1 
                  id="main-heading"
                  className="text-2xl sm:text-[28px] text-[#6B4E71] font-medium text-center italic leading-tight font-romantic tracking-wide"
                >
                  Songs that remind me of you ♡
                </h1>
              </header>

              {/* Vertical List of 4 Favorite Songs */}
              <section 
                id="songs-list-section" 
                aria-label="Favorite Songs"
                className="px-5 sm:px-6 pb-6 space-y-3"
              >
                <div className="space-y-3">
                  {SONGS.map((song) => (
                    <SongCard
                      key={song.id}
                      song={song}
                      isSelected={selectedSong.id === song.id}
                      isPlaying={selectedSong.id === song.id && isPlaying}
                      onSelectSong={handleOpenSong}
                      onPlaySong={handleOpenSong}
                    />
                  ))}
                </div>

                {/* Special Surprise For Her Button */}
                <div className="pt-3 text-center">
                  <motion.button
                    id="btn-open-surprise-main"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setIsSurpriseOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FCE8EC] via-[#F8DEE4] to-[#F3E2EC] hover:from-[#FAD8E0] hover:to-[#EFD2E4] text-[#8F3C59] border border-[#F0CAD6] shadow-xs text-xs font-sans-clean font-medium tracking-wide transition-all cursor-pointer"
                  >
                    <Gift className="w-3.5 h-3.5 text-[#C24B5C] animate-bounce" />
                    <span>A little surprise for you ♡</span>
                  </motion.button>
                </div>
              </section>
            </motion.div>
          ) : (
            /* ================= PAGE 2: SONG PAGE (ONLY DRAWING & LYRICS) ================= */
            <motion.div
              key="song-player-page"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full"
            >
              {/* Top Bar with Back button, Surprise button, and Play/Pause toggle */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/50 bg-white/30 backdrop-blur-md">
                <button
                  id="btn-back-to-songs"
                  onClick={handleBackToList}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white/95 text-[#6B4E71] border border-white/80 text-xs font-sans-clean font-medium shadow-2xs transition-all active:scale-95 cursor-pointer"
                  aria-label="Back to all songs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Songs</span>
                </button>

                <div className="flex items-center gap-2.5">
                  <button
                    id="btn-open-surprise-player"
                    onClick={() => setIsSurpriseOpen(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/75 hover:bg-white/95 text-[#8F3C59] border border-white/80 text-xs font-sans-clean font-medium shadow-2xs transition-all active:scale-95 cursor-pointer"
                    title="A little surprise for you"
                  >
                    <Gift className="w-3.5 h-3.5 text-[#C24B5C]" />
                    <span className="text-[11px]">Surprise</span>
                  </button>

                  <div className="text-right">
                    <h2 className="text-sm font-romantic font-bold text-gray-800 truncate max-w-[130px] sm:max-w-[170px]">
                      {selectedSong.title}
                    </h2>
                    <p className="text-[10px] font-sans-clean text-gray-500">
                      {selectedSong.artist}
                    </p>
                  </div>

                  <button
                    id="btn-play-pause-toggle"
                    onClick={handleTogglePlay}
                    className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#6B4E71] border border-white/80 shadow-2xs flex items-center justify-center transition-all active:scale-90 cursor-pointer"
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-[#6B4E71]" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-[#6B4E71] ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Page Body: ONLY Drawing and Lyrics */}
              <div className="p-4 sm:p-5 flex flex-col items-center space-y-3 w-full">
                {/* Pencil Drawing Canvas (Draws live with each lyric sentence) */}
                <div id="pencil-sketch-section" className="w-full">
                  <SketchIllustration
                    currentLyric={currentLyric}
                    songTitle={selectedSong.title}
                    artist={selectedSong.artist}
                  />
                </div>

                {/* Lyrics Section */}
                <section id="lyrics-section" aria-label="Song Lyrics" className="w-full">
                  <LyricsView
                    lyrics={selectedSong.lyrics}
                    currentLyric={currentLyric}
                    onLineClick={handleSeek}
                    accentColor={selectedSong.accent.heart}
                  />
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Surprise Modal */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        onEnvelopeOpened={() => {
          if (isPlaying) {
            romanticAudio.pause();
            setIsPlaying(false);
          }
        }}
      />
    </div>
  );
}

