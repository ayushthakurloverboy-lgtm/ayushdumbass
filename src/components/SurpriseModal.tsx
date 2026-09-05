import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Volume2, VolumeX } from 'lucide-react';
import { GirlTulipArt } from './GirlTulipArt';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnvelopeOpened?: () => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({ 
  isOpen, 
  onClose,
  onEnvelopeOpened 
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and cleanup surprise loop audio
  useEffect(() => {
    if (!isOpen) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsOpened(false);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    if (onEnvelopeOpened) {
      onEnvelopeOpened();
    }

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('/ayush.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 1.0;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn('Audio play request:', err);
      });
    } catch (e) {
      console.warn('Audio initialization error:', e);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsOpened(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      id="surprise-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/45 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        id="surprise-modal-container"
        className="relative w-full max-w-[360px] sm:max-w-[380px] max-h-[92vh] overflow-y-auto rounded-[32px] bg-[#FAF7F2] border border-[#F0E6D8] shadow-[0_25px_60px_rgba(107,78,113,0.24)] p-4 sm:p-5 text-[#423934]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Audio Mute/Unmute Indicator (when opened) */}
        {isOpened && (
          <button
            id="btn-surprise-mute"
            onClick={handleToggleMute}
            className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-[#C24B5C] border border-stone-200 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer z-20"
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse" />}
          </button>
        )}

        {/* Close Button */}
        <button
          id="btn-close-surprise"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-[#7C6FA0] border border-stone-200 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer z-20"
          aria-label="Close surprise"
        >
          <X className="w-4 h-4" />
        </button>

        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* ================= STAGE 1: SEALED ENVELOPE ================= */
            <motion.div
              key="envelope-sealed"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center text-center py-8 px-2"
            >
              {/* Envelope Card */}
              <div 
                id="wax-envelope-card"
                onClick={handleOpenEnvelope}
                className="relative w-64 h-44 rounded-2xl bg-[#F6EDE2] border-2 border-[#EADAC8] shadow-md flex items-center justify-center cursor-pointer group hover:scale-[1.02] transition-all"
              >
                {/* Envelope Flap Lines */}
                <svg className="absolute inset-0 w-full h-full stroke-[#DFCCB7] fill-none pointer-events-none">
                  <path d="M 0 0 L 128 90 L 256 0" strokeWidth="1.8" />
                  <path d="M 0 176 L 100 80" strokeWidth="1.4" opacity="0.6" />
                  <path d="M 256 176 L 156 80" strokeWidth="1.4" opacity="0.6" />
                </svg>

                {/* Wax Stamp Seal */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-[#C24B5C] border-2 border-[#A83849] shadow-lg flex flex-col items-center justify-center text-white cursor-pointer"
                >
                  <Heart className="w-7 h-7 fill-white/90 text-white animate-pulse" />
                </motion.div>

                {/* Text: Please open */}
                <div className="absolute bottom-3 font-serif italic text-sm text-[#70526B] font-medium tracking-wide">
                  Please open ♡
                </div>
              </div>
            </motion.div>
          ) : (
            /* ================= STAGE 2: ARTWORK WITH TULIP ONLY ================= */
            <motion.div
              key="artwork-revealed"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center py-2 w-full"
            >
              {/* The Illustrated Keepsake with Tulip - No text */}
              <GirlTulipArt />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
