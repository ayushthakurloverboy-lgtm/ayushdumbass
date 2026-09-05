import React from 'react';
import { motion } from 'motion/react';

export const GirlTulipArt: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-[320px] mx-auto">
      {/* Aesthetic Scrapbook Washi Tape on top */}
      <div 
        className="absolute -top-3 z-30 w-24 h-5 bg-[#E8DAC8]/90 backdrop-blur-xs border-y border-[#D6C4B0] shadow-2xs rotate-[-2deg] pointer-events-none"
        style={{
          clipPath: 'polygon(0% 15%, 100% 0%, 98% 85%, 2% 100%)',
          backgroundImage: 'radial-gradient(#CBB9A5 1px, transparent 1px)',
          backgroundSize: '6px 6px',
        }}
      />

      {/* Polaroid Keepsake Card Frame */}
      <div 
        className="relative w-full bg-[#FFFDF9] rounded-2xl border border-[#EDE0D0] shadow-[0_12px_36px_rgba(107,78,113,0.14)] p-3 pt-4 pb-3 flex flex-col items-center overflow-hidden"
      >
        {/* Soft textured paper grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Artwork Display Container */}
        <div className="relative w-full aspect-[9/13] max-h-[360px] rounded-xl overflow-hidden bg-gradient-to-b from-[#FDF8F3] via-[#FAF3EA] to-[#F7EDE2] border border-[#E8DCCF] flex items-center justify-center shadow-inner">
          {/* Vector Artistic Portrait based on her drawing */}
          <div className="relative w-full h-full">
            <svg viewBox="0 0 360 480" className="w-full h-full">
              <defs>
                <style>{`
                  @keyframes blinkMotion {
                    0%, 90%, 100% {
                      transform: scaleY(1);
                    }
                    93% {
                      transform: scaleY(0.06);
                    }
                    95% {
                      transform: scaleY(1);
                    }
                    97% {
                      transform: scaleY(0.06);
                    }
                    99% {
                      transform: scaleY(1);
                    }
                  }
                  .girl-left-eye {
                    transform-origin: 152px 200px;
                    animation: blinkMotion 4s infinite ease-in-out;
                  }
                  .girl-right-eye {
                    transform-origin: 208px 200px;
                    animation: blinkMotion 4s infinite ease-in-out;
                  }
                  @keyframes girlGentleBreath {
                    0%, 100% {
                      transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                      transform: translateY(-2px) rotate(0.3deg);
                    }
                  }
                  .girl-figure-motion {
                    transform-origin: 180px 460px;
                    animation: girlGentleBreath 4s infinite ease-in-out;
                  }
                  @keyframes flowerGentleSway {
                    0%, 100% {
                      transform: rotate(-1.5deg);
                    }
                    50% {
                      transform: rotate(1.5deg);
                    }
                  }
                  .tulip-sway-motion {
                    transform-origin: 60px 130px;
                    animation: flowerGentleSway 3.2s infinite ease-in-out;
                  }
                  @keyframes sparkleTwinkle {
                    0%, 100% {
                      opacity: 0.35;
                      transform: scale(0.85);
                    }
                    50% {
                      opacity: 1;
                      transform: scale(1.25);
                    }
                  }
                  .sparkle-anim-1 {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: sparkleTwinkle 2.2s infinite ease-in-out;
                  }
                  .sparkle-anim-2 {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: sparkleTwinkle 2.2s 0.8s infinite ease-in-out;
                  }
                `}</style>
                {/* Hat Gradients */}
                <linearGradient id="purpleHatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9C5DC4" />
                  <stop offset="50%" stopColor="#8747B5" />
                  <stop offset="100%" stopColor="#7134A0" />
                </linearGradient>
                <linearGradient id="yellowBrimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F5D061" />
                  <stop offset="100%" stopColor="#D9A833" />
                </linearGradient>
                {/* Skin Gradient */}
                <radialGradient id="skinGrad" cx="50%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#FFE0CB" />
                  <stop offset="70%" stopColor="#F5CDAF" />
                  <stop offset="100%" stopColor="#E8BE9F" />
                </radialGradient>
                {/* Dress Gingham Pattern */}
                <pattern id="pinkGingham" width="16" height="16" patternUnits="userSpaceOnUse">
                  <rect width="16" height="16" fill="#FFFFFF" />
                  <rect x="0" y="0" width="8" height="16" fill="#FCE5EB" />
                  <rect x="0" y="0" width="16" height="8" fill="#FCE5EB" />
                  <rect x="0" y="0" width="8" height="8" fill="#F59AB2" />
                </pattern>
                {/* Tulip Petal Gradient */}
                <linearGradient id="tulipPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFA6B7" />
                  <stop offset="50%" stopColor="#F06D8A" />
                  <stop offset="100%" stopColor="#D33F63" />
                </linearGradient>
              </defs>

              {/* Soft ambient blush behind her */}
              <circle cx="180" cy="240" r="140" fill="#FCECEF" opacity="0.6" />
              <circle cx="180" cy="200" r="90" fill="#FFF5EB" opacity="0.8" />

              {/* Animated Girl Figure with Gentle Breathing/Idle motion */}
              <g className="girl-figure-motion">
                {/* Hair - Back locks */}
                <path 
                  d="M 120 220 C 95 240, 85 280, 88 320 C 92 345, 110 355, 125 330 C 135 300, 130 260, 135 230 Z" 
                  fill="#4D2E18" 
                />
                <path 
                  d="M 240 220 C 265 240, 275 280, 272 320 C 268 345, 250 355, 235 330 C 225 300, 230 260, 225 230 Z" 
                  fill="#4D2E18" 
                />

                {/* Arms & Shoulders */}
                <path 
                  d="M 90 350 C 70 380, 55 420, 50 480 L 120 480 C 120 440, 125 410, 135 380 Z" 
                  fill="url(#skinGrad)" 
                  stroke="#3B2619" 
                  strokeWidth="2.5" 
                />
                <path 
                  d="M 270 350 C 290 380, 305 420, 310 480 L 240 480 C 240 440, 235 410, 225 380 Z" 
                  fill="url(#skinGrad)" 
                  stroke="#3B2619" 
                  strokeWidth="2.5" 
                />

                {/* Chest & Neck */}
                <path 
                  d="M 150 290 C 150 330, 130 350, 120 370 L 240 370 C 230 350, 210 330, 210 290 Z" 
                  fill="url(#skinGrad)" 
                  stroke="#3B2619" 
                  strokeWidth="2.5" 
                />

                {/* Sundress Bodice */}
                <path 
                  d="M 115 370 L 100 480 L 260 480 L 245 370 Z" 
                  fill="url(#pinkGingham)" 
                  stroke="#3B2619" 
                  strokeWidth="2.5" 
                />
                {/* Bodice Upper Pink Trim Band */}
                <rect x="110" y="365" width="140" height="18" rx="4" fill="#ED7996" stroke="#3B2619" strokeWidth="2.2" />
                {/* Shoulder Straps */}
                <path d="M 120 370 L 120 340 C 120 325, 132 320, 135 340 L 135 370 Z" fill="#ED7996" stroke="#3B2619" strokeWidth="2.2" />
                <path d="M 225 370 L 225 340 C 225 325, 237 320, 240 340 L 240 370 Z" fill="#ED7996" stroke="#3B2619" strokeWidth="2.2" />

                {/* Head & Neck */}
                <path 
                  d="M 125 190 C 125 140, 235 140, 235 190 C 235 250, 215 285, 180 285 C 145 285, 125 250, 125 190 Z" 
                  fill="url(#skinGrad)" 
                  stroke="#3B2619" 
                  strokeWidth="2.8" 
                />

                {/* Cheerful rosy blush */}
                <ellipse cx="148" cy="225" rx="14" ry="8" fill="#FCA5B7" opacity="0.5" />
                <ellipse cx="212" cy="225" rx="14" ry="8" fill="#FCA5B7" opacity="0.5" />

                {/* Beautiful Eyes with Natural Animated Blink */}
                {/* Left Eye */}
                <g className="girl-left-eye">
                  <ellipse cx="152" cy="200" rx="11" ry="8.5" fill="#FFFFFF" stroke="#3B2619" strokeWidth="2.5" />
                  <circle cx="153" cy="200" r="6" fill="#2E1C12" />
                  <circle cx="151" cy="198" r="2" fill="#FFFFFF" />
                  <circle cx="155" cy="202" r="1" fill="#FFFFFF" />
                  {/* Eyelash sweep */}
                  <path d="M 140 198 Q 152 190 164 198" stroke="#3B2619" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M 162 195 L 167 192" stroke="#3B2619" strokeWidth="2.2" strokeLinecap="round" />
                </g>

                {/* Right Eye */}
                <g className="girl-right-eye">
                  <ellipse cx="208" cy="200" rx="11" ry="8.5" fill="#FFFFFF" stroke="#3B2619" strokeWidth="2.5" />
                  <circle cx="207" cy="200" r="6" fill="#2E1C12" />
                  <circle cx="205" cy="198" r="2" fill="#FFFFFF" />
                  <circle cx="209" cy="202" r="1" fill="#FFFFFF" />
                  {/* Eyelash sweep */}
                  <path d="M 196 198 Q 208 190 220 198" stroke="#3B2619" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M 218 195 L 223 192" stroke="#3B2619" strokeWidth="2.2" strokeLinecap="round" />
                </g>

                {/* Arched Eyebrows */}
                <path d="M 140 182 Q 152 176 163 181" stroke="#4A2D17" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                <path d="M 197 181 Q 208 176 220 182" stroke="#4A2D17" strokeWidth="2.8" strokeLinecap="round" fill="none" />

                {/* Sweet Nose */}
                <path d="M 180 206 Q 183 222 177 225 Q 183 227 186 225" stroke="#7A4A28" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Bright Warm Smile with Teeth */}
                <path 
                  d="M 154 235 Q 180 236 206 235 Q 200 258 180 258 Q 160 258 154 235 Z" 
                  fill="#B8495E" 
                  stroke="#3B2619" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                {/* Upper teeth white curve */}
                <path 
                  d="M 157 236 Q 180 237 203 236 Q 198 245 180 245 Q 162 245 157 236 Z" 
                  fill="#FFFFFF" 
                />
                {/* Lip corner dimples */}
                <path d="M 152 233 Q 155 237 154 241" stroke="#3B2619" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 208 233 Q 205 237 206 241" stroke="#3B2619" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Hair - Front Wavy locks framing cheeks */}
                <path 
                  d="M 125 175 C 115 195, 110 235, 120 270 C 115 250, 118 200, 130 180 Z" 
                  fill="#5A351D" 
                  stroke="#3B2619" 
                  strokeWidth="2" 
                />
                <path 
                  d="M 235 175 C 245 195, 250 235, 240 270 C 245 250, 242 200, 230 180 Z" 
                  fill="#5A351D" 
                  stroke="#3B2619" 
                  strokeWidth="2" 
                />

                {/* Whimsical Tall Hat - Purple Dome */}
                <path 
                  d="M 120 160 C 100 120, 80 50, 140 25 C 190 5, 250 20, 255 70 C 260 110, 240 145, 235 160 Z" 
                  fill="url(#purpleHatGrad)" 
                  stroke="#3B2619" 
                  strokeWidth="3" 
                  strokeLinejoin="round" 
                />
                {/* Hat folds / shadows */}
                <path d="M 130 90 Q 180 110 230 85" stroke="#632D91" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M 140 50 Q 190 65 240 45" stroke="#632D91" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />

                {/* Whimsical Yellow Brim with Upturned Tips */}
                <path 
                  d="M 75 165 C 90 145, 130 155, 180 158 C 230 155, 270 145, 285 165 C 295 180, 280 188, 255 180 C 220 170, 140 170, 105 180 C 80 188, 65 180, 75 165 Z" 
                  fill="url(#yellowBrimGrad)" 
                  stroke="#3B2619" 
                  strokeWidth="3" 
                  strokeLinejoin="round" 
                />
              </g>
            </svg>
          </div>

          {/* ================= CENTERPIECE BLOOMING TULIP ================= */}
          <div className="absolute -bottom-2 inset-x-0 flex justify-center pointer-events-none z-20">
            <motion.div 
              initial={{ scale: 0.85, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-28 h-32 flex items-end justify-center filter drop-shadow-[0_8px_16px_rgba(209,75,107,0.28)]"
            >
              <svg viewBox="0 0 120 140" className="w-full h-full overflow-visible">
                {/* Gently swaying tulip plant */}
                <g className="tulip-sway-motion">
                  {/* Left Leaf */}
                  <path 
                    d="M 60 120 C 40 100, 25 75, 30 50 C 35 70, 50 95, 60 110 Z" 
                    fill="#749B68" 
                    stroke="#3B4F35" 
                    strokeWidth="1.8" 
                    strokeLinejoin="round" 
                  />
                  {/* Right Leaf */}
                  <path 
                    d="M 60 120 C 80 95, 95 70, 90 45 C 85 65, 70 95, 60 110 Z" 
                    fill="#688F5C" 
                    stroke="#3B4F35" 
                    strokeWidth="1.8" 
                    strokeLinejoin="round" 
                  />
                  {/* Tulip Main Stem */}
                  <path 
                    d="M 60 65 Q 58 95 60 135" 
                    stroke="#577D4B" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    fill="none" 
                  />

                  {/* Tulip Flower Bloom */}
                  <g transform="translate(60, 52)">
                    {/* Back center petal */}
                    <path 
                      d="M 0 -38 C -14 -25, -14 0, 0 12 C 14 0, 14 -25, 0 -38 Z" 
                      fill="#D94B6D" 
                      stroke="#8F253E" 
                      strokeWidth="1.8" 
                    />
                    {/* Left outer petal */}
                    <path 
                      d="M -18 -26 C -28 -10, -20 10, 0 14 C -12 6, -18 -10, -18 -26 Z" 
                      fill="#F2859D" 
                      stroke="#8F253E" 
                      strokeWidth="1.8" 
                      strokeLinejoin="round" 
                    />
                    {/* Right outer petal */}
                    <path 
                      d="M 18 -26 C 28 -10, 20 10, 0 14 C 12 6, 18 -10, 18 -26 Z" 
                      fill="#F794AA" 
                      stroke="#8F253E" 
                      strokeWidth="1.8" 
                      strokeLinejoin="round" 
                    />
                    {/* Main Center Petal highlight */}
                    <path 
                      d="M 0 -32 C -10 -20, -10 6, 0 14 C 10 6, 10 -20, 0 -32 Z" 
                      fill="#FFA6BA" 
                      stroke="#8F253E" 
                      strokeWidth="1.6" 
                    />
                    {/* Gentle shine curve */}
                    <path d="M -4 -22 Q -8 -10 -4 2" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7" />
                  </g>
                </g>

                {/* Golden Sparkles around bloom */}
                <circle cx="34" cy="30" r="1.5" fill="#E8B041" className="sparkle-anim-1" />
                <circle cx="86" cy="28" r="1.5" fill="#E8B041" className="sparkle-anim-2" />
                <path d="M 60 8 L 60 14 M 57 11 L 63 11" stroke="#E8B041" strokeWidth="1.2" strokeLinecap="round" className="sparkle-anim-1" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
