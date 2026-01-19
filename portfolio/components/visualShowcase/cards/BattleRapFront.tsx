import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const BattleRapFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-black rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden border-2 border-zinc-800">
        <div className="absolute inset-0 z-0">
            <img src="https://images.pexels.com/photos/2921568/pexels-photo-2921568.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-110 transition-transform duration-700" alt="Rapper" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
        </div>
        <div className="absolute inset-0 noise-overlay z-10 opacity-30"></div>
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end items-center text-center pb-12">
            <h1 className="font-anton text-8xl text-white uppercase leading-none tracking-tighter mb-2 glitch-text" data-text="BARS">BARS</h1>
            <div className="relative inline-block transform -rotate-2">
                <div className="absolute inset-0 bg-red-600 transform skew-x-[-10deg]"></div>
                <span className="relative font-anton text-white text-2xl px-4 py-1 uppercase tracking-wide block">VS Everybody</span>
            </div>
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-black font-grunge text-xs px-2 py-1 transform rotate-6 shadow-md z-30">Warning: Explicit</div>
    </div>
);