import React from 'react';

interface LanguageToggleProps {
  language: 'ru' | 'en';
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-light/60 backdrop-blur-sm border border-foreground/10 text-foreground text-xs font-medium transition-all duration-200 hover:bg-space-light hover:scale-105 active:scale-95"
      aria-label={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
    >
      <span className={language === 'ru' ? 'opacity-50' : 'opacity-100'}>EN</span>
      <span className="opacity-50">/</span>
      <span className={language === 'en' ? 'opacity-50' : 'opacity-100'}>RU</span>
    </button>
  );
};

export default LanguageToggle;
