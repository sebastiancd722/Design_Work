import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const UnitedMonoFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-xl bg-white border border-gray-200">
        {/* Image Layer */}
        <div className="absolute inset-0 bg-black">
            <img src="https://images.pexels.com/photos/5609026/pexels-photo-5609026.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity animate-drift"
                 alt="Player" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
            <div className="absolute inset-0 noise-texture opacity-30 mix-blend-overlay"></div>
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 w-full p-5 flex justify-between items-start z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] font-archivo">United</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="font-archivo font-black text-lg text-black">90</span>
            </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
            <span className="text-white/60 text-[10px] uppercase tracking-widest block mb-1">Forward</span>
            <h1 className="text-6xl font-archivo font-black text-white leading-[0.85] tracking-tight mb-4">
                LEANDRO<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>NACHO</span>
            </h1>
            <div className="w-12 h-1 bg-white"></div>
        </div>
    </div>
);