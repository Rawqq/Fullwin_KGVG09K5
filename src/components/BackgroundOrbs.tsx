import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orb top-left */}
      <div 
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-glow-blue/10 blur-3xl animate-pulse-glow"
      />
      
      {/* Medium orb top-right */}
      <div 
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-glow-cyan/8 blur-2xl animate-pulse-glow animation-delay-200"
      />
      
      {/* Large orb bottom-right */}
      <div 
        className="absolute -bottom-40 -right-24 w-72 h-72 rounded-full bg-glow-blue/10 blur-3xl animate-pulse-glow animation-delay-400"
      />
      
      {/* Small orb mid-left */}
      <div 
        className="absolute top-1/3 -left-16 w-32 h-32 rounded-full bg-glow-cyan/8 blur-2xl animate-pulse-glow animation-delay-300"
      />
      
      {/* Medium orb bottom-left */}
      <div 
        className="absolute -bottom-24 -left-20 w-56 h-56 rounded-full bg-glow-blue/8 blur-3xl animate-pulse-glow animation-delay-500"
      />
    </div>
  );
};

export default BackgroundOrbs;
