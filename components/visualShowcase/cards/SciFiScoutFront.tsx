import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const SciFiScoutFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-slate-950 text-blue-100 backface-hidden overflow-hidden border border-blue-400/30 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.2)] font-tech">
        <img src="https://images.pexels.com/photos/159555/soccer-football-athlete-player-159555.jpeg?auto=compress&cs=tinysrgb&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700" alt="Player" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80"></div>
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-blue-400/30 flex items-center justify-center animate-spin-slow"><div className="w-16 h-16 border-t border-b border-blue-400/50 rounded-full"></div></div>
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-400 shadow-[0_0_10px_#60a5fa]"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-400 shadow-[0_0_10px_#60a5fa]"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-blue-400 shadow-[0_0_10px_#60a5fa]"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-400 shadow-[0_0_10px_#60a5fa]"></div>
        <div className="absolute bottom-12 left-8 border-l-2 border-blue-500 pl-4 bg-slate-950/40 backdrop-blur-sm pr-4 py-2"><h2 className="text-5xl font-impact font-bold text-white uppercase tracking-wider leading-none drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">Scout</h2><div className="flex gap-2 mt-2 text-[10px] font-mono"><span className="bg-blue-500/20 px-2 py-1 border border-blue-500/50 text-blue-300">SPD: 95</span></div></div>
    </div>
);