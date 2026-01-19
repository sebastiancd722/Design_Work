import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const PremiumGolfFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col bg-[#00573F] border-[6px] border-[#FFD700] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] rounded-t-[10rem] rounded-b-xl">
        <div className="absolute inset-0 opacity-20 grass-texture pointer-events-none mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00573F]/20 to-[#004225] pointer-events-none"></div>
        <div className="sun-sheen"></div>
        <div className="absolute top-4 left-4 right-4 h-[380px] bg-black/10 rounded-t-[9rem] rounded-b-xl border border-[#FFD700]/40 overflow-hidden shadow-inner relative z-10">
            <img src="https://images.pexels.com/photos/1325769/pexels-photo-1325769.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Course" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00573F] via-transparent to-transparent opacity-90"></div>
        </div>
        <div className="absolute bottom-0 w-full p-8 pb-10 text-center z-20">
            <span className="font-montserrat text-[#FFD700] text-[10px] uppercase tracking-[0.4em] mb-3 block font-bold opacity-90">Tradition</span>
            <h2 className="font-playfair text-white text-5xl mb-4 drop-shadow-md font-bold italic tracking-tight leading-none">The Green</h2>
        </div>
    </div>
);