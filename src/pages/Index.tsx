import React, { useState } from 'react';
import astronaut from '@/assets/astronaut.png';
import cloud1 from '@/assets/cloud-1.png';
import cloud2 from '@/assets/cloud-2.png';
import slots from '@/assets/slots.png';
import blocks from '@/assets/blocks.png';
import cosmicChest from '@/assets/cosmic-chest.png';
import progressBar from '@/assets/progress-bar.png';

const translations = {
  ru: {
    welcome: 'Добро пожаловать в FULLWIN',
    button: 'Открыть в телеграмме',
  },
  en: {
    welcome: 'Welcome to FULLWIN',
    button: 'Open in telegram',
  },
};

const Index: React.FC = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const handleButtonClick = () => {
    window.location.href = 'https://t.me/fullwin_official_bot/FULLWIN?startapp=GIFTDVIZH';
  };

  return (
    <div className="starry-bg min-h-screen h-screen w-full overflow-hidden flex justify-center">
      {/* Main container - mobile width */}
      <div className="relative w-full max-w-[420px] h-full flex flex-col overflow-visible">
        {/* Language Toggle */}
        <button
          onClick={() => setLanguage((prev) => (prev === 'ru' ? 'en' : 'ru'))}
          className="absolute top-3 right-3 z-50 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium transition-all hover:bg-white/20"
        >
          <span className={language === 'ru' ? 'opacity-50' : ''}>EN</span>
          <span className="opacity-40">/</span>
          <span className={language === 'en' ? 'opacity-50' : ''}>RU</span>
        </button>

        {/* Header Text */}
        <div className="pt-6 px-6 text-center z-50 shrink-0">
          <h1 className="text-[26px] font-bold text-white tracking-tight animate-fade-in-up opacity-0">
            {translations[language].welcome}
          </h1>
        </div>

        {/* Main Game Area - With floating decorations */}
        <div className="flex-1 flex flex-col items-center justify-start pt-2 relative px-4 overflow-visible">
          {/* === DECORATIVE ELEMENTS - Absolutely positioned === */}

          {/* Cloud 1 - Top of left mascot, bottom of right mascot */}
          <img
            src={cloud1}
            alt=""
            className="absolute -left-4 top-[20px] w-[100px] h-auto z-10 animate-float"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
          />
          <img
            src={cloud1}
            alt=""
            className="absolute -right-4 top-[260px] w-[100px] h-auto z-10 animate-float scale-x-[-1]"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))', animationDelay: '0.5s' }}
          />

          {/* Cloud 2 - Bottom of left mascot, top of right mascot */}
          <img
            src={cloud2}
            alt=""
            className="absolute -left-4 top-[280px] w-[100px] h-auto z-10 animate-float"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))', animationDelay: '0.8s' }}
          />
          <img
            src={cloud2}
            alt=""
            className="absolute -right-4 top-[0px] w-[100px] h-auto z-10 animate-float scale-x-[-1]"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))', animationDelay: '1s' }}
          />

          {/* Astronaut Right Side - flipped to look left (toward center) */}
          <img
            src={astronaut}
            alt=""
            className="absolute -right-6 top-[80px] w-[110px] h-auto z-30 animate-float scale-x-[-1]"
            style={{ animationDelay: '0.3s' }}
          />

          {/* Astronaut Left Side - flipped to look right (toward center) */}
          <div className="absolute -left-6 top-[100px] z-30" style={{ transform: 'scaleX(-1)' }}>
            <img
              src={astronaut}
              alt=""
              className="w-[110px] h-auto animate-float"
              style={{ animationDelay: '0.7s' }}
            />
          </div>

          {/* === CENTRAL GAME ELEMENTS === */}

          {/* Slots Grid */}
          <div className="z-20 animate-fade-in-up opacity-0 animation-delay-200 mt-2">
            <img src={slots} alt="Game slots" className="w-[200px] h-auto" style={{ imageRendering: 'pixelated' }} />
          </div>

          {/* Main Blocks Grid */}
          <div className="z-20 -mt-0.5 animate-fade-in-up opacity-0 animation-delay-300">
            <img src={blocks} alt="Game blocks" className="w-[220px] h-auto" style={{ imageRendering: 'pixelated' }} />
          </div>

          {/* Cosmic Chests */}
          <div className="z-20 -mt-0.5 animate-fade-in-up opacity-0 animation-delay-400">
            <img
              src={cosmicChest}
              alt="Cosmic chests"
              className="w-[220px] h-auto"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Progress Bar */}
          <div className="z-20 mt-4 animate-fade-in-up opacity-0 animation-delay-500">
            <img src={progressBar} alt="Progress" className="w-[200px] h-auto opacity-80" style={{ imageRendering: 'pixelated' }} />
          </div>
        </div>

        {/* Bottom Button */}
        <div className="px-6 pb-10 z-20 shrink-0 animate-fade-in-up opacity-0 animation-delay-600">
          <button
            onClick={handleButtonClick}
            className="w-full py-4 rounded-full font-semibold text-base sm:text-lg whitespace-nowrap text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(180deg, #42A5F5 0%, #1E88E5 100%)',
              boxShadow: '0 4px 20px rgba(33, 150, 243, 0.4)',
            }}
          >
            {translations[language].button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
