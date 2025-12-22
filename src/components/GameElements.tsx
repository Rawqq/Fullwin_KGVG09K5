import React from 'react';
import astronaut from '@/assets/astronaut.png';
import clouds from '@/assets/clouds.png';
import slots from '@/assets/slots.png';
import blocks from '@/assets/blocks.png';
import cosmicChest from '@/assets/cosmic-chest.png';
import progressBar from '@/assets/progress-bar.png';

const GameElements: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Clouds - positioned at corners */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Top-left cloud */}
        <img 
          src={clouds} 
          alt="" 
          className="absolute -left-8 top-0 w-20 h-auto opacity-90 animate-float-cloud-left animate-fade-in animation-delay-100"
          style={{ filter: 'brightness(1.1)' }}
        />
        {/* Top-right cloud */}
        <img 
          src={clouds} 
          alt="" 
          className="absolute -right-8 top-4 w-16 h-auto opacity-90 animate-float-cloud-right animate-fade-in animation-delay-200"
          style={{ filter: 'brightness(1.1)', transform: 'scaleX(-1)' }}
        />
        {/* Bottom-left cloud */}
        <img 
          src={clouds} 
          alt="" 
          className="absolute -left-6 bottom-16 w-14 h-auto opacity-80 animate-float-cloud-left animate-fade-in animation-delay-400"
          style={{ filter: 'brightness(1.05)' }}
        />
        {/* Bottom-right cloud */}
        <img 
          src={clouds} 
          alt="" 
          className="absolute -right-6 bottom-32 w-18 h-auto opacity-85 animate-float-cloud-right animate-fade-in animation-delay-300"
          style={{ filter: 'brightness(1.08)', transform: 'scaleX(-1)' }}
        />
      </div>

      {/* Slots/Tools Grid */}
      <div className="relative z-10 mb-2 animate-fade-in-up animation-delay-200 opacity-0">
        <img 
          src={slots} 
          alt="Game slots" 
          className="w-36 h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Astronauts on sides */}
      <div className="absolute left-2 top-20 z-20 animate-fade-in-up animation-delay-300 opacity-0">
        <img 
          src={astronaut} 
          alt="Astronaut" 
          className="w-14 h-auto animate-float"
          style={{ imageRendering: 'auto', animationDelay: '0.5s' }}
        />
      </div>
      <div className="absolute right-2 top-8 z-20 animate-fade-in-up animation-delay-400 opacity-0">
        <img 
          src={astronaut} 
          alt="Astronaut" 
          className="w-12 h-auto animate-float"
          style={{ imageRendering: 'auto', transform: 'scaleX(-1)', animationDelay: '1s' }}
        />
      </div>

      {/* Main Blocks Grid */}
      <div className="relative z-10 animate-fade-in-up animation-delay-300 opacity-0">
        <img 
          src={blocks} 
          alt="Game blocks" 
          className="w-44 h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Cosmic Chest Row */}
      <div className="relative z-10 mt-1 animate-fade-in-up animation-delay-400 opacity-0">
        <img 
          src={cosmicChest} 
          alt="Cosmic chests" 
          className="w-44 h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 mt-3 animate-fade-in-up animation-delay-500 opacity-0">
        <img 
          src={progressBar} 
          alt="Progress" 
          className="w-40 h-auto opacity-70"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Additional astronauts on lower sides */}
      <div className="absolute left-0 bottom-24 z-20 animate-fade-in-up animation-delay-500 opacity-0">
        <img 
          src={astronaut} 
          alt="Astronaut" 
          className="w-12 h-auto animate-float"
          style={{ imageRendering: 'auto', animationDelay: '1.5s' }}
        />
      </div>
    </div>
  );
};

export default GameElements;
