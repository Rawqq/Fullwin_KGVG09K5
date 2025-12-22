import React from 'react';

const TonBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary border-2 border-foreground/30 shadow-badge transform rotate-[8deg] transition-transform hover:rotate-[4deg]">
      <span className="text-foreground font-bold text-sm tracking-wide">
        3.00 TON
      </span>
    </div>
  );
};

export default TonBadge;
