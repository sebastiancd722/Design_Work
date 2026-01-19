import React, { useState, KeyboardEvent } from 'react';
import { VisualShowcaseConcept } from '../../types';
import { getCardVariant, FRONT_COMPONENTS, BACK_COMPONENTS } from './registry';

interface VisualShowcaseCardProps {
  item: VisualShowcaseConcept;
}

export const VisualShowcaseCard: React.FC<VisualShowcaseCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFlip();
    }
  };

  const variant = getCardVariant(item);
  const FrontComponent = FRONT_COMPONENTS[variant];
  const BackComponent = BACK_COMPONENTS[variant];

  return (
    <div 
        className="flip-container h-[420px] w-full max-w-[320px] mx-auto cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-shadow"
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Flip card for ${item.title}`}
        aria-pressed={isFlipped}
    >
        <div className={`flip-inner ${isFlipped ? 'is-flipped' : ''}`}>
             <div className="flip-front" aria-hidden={isFlipped}>
                <FrontComponent item={item} />
             </div>
             <div className="flip-back" aria-hidden={!isFlipped}>
                <BackComponent item={item} />
             </div>
        </div>
    </div>
  );
};