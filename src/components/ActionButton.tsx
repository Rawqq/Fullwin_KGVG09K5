import React from 'react';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[320px] py-4 px-8 rounded-full font-semibold text-lg text-primary-foreground transition-all duration-200 shadow-button hover:scale-[1.02] active:scale-[0.98] active:shadow-lg"
      style={{
        background: 'var(--gradient-button)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gradient-button-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--gradient-button)';
      }}
    >
      {text}
    </button>
  );
};

export default ActionButton;
