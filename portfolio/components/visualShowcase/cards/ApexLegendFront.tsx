import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const ApexLegendFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col bg-gradient-to-b from-yellow-900 via-amber-900 to-slate-950 border-[6px] border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.4)] rounded-lg font-tech">
        <div className="noise-overlay"></div><div className="holo-foil"></div>
        <div className="relative z-10 flex justify-between items-center px-4 pt-4">
            <div className="flex flex-col">
                <span className="text-[10px] text-white/50 uppercase tracking-widest">Team</span>
                <span className="text-sm font-impact text-white font-bold tracking-wide text-xl">Hall of Fame</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-black border border-white/20 flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-white/80 font-anton tracking-wider">ICON</span>
            </div>
        </div>
        <div className="relative z-0 mt-2 flex-grow">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/5 bg-white/5 blur-xl"></div>
            <img src="https://images.pexels.com/photos/29661264/pexels-photo-29661264.jpeg?auto=compress&cs=tinysrgb&w=800" className="relative z-10 w-full h-[320px] object-cover object-[80%_15%] player-mask scale-105 group-hover:scale-110 transition-transform duration-700" alt="Player" />
            <div className="absolute bottom-10 left-4 w-16 h-16 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center z-20">
                <span className="text-[9px] uppercase text-white/50">DEF</span>
                <span className="text-3xl font-impact text-emerald-400 leading-none font-bold">99</span>
            </div>
            <div className="absolute bottom-10 right-4 w-16 h-16 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center z-20">
                <span className="text-[9px] uppercase text-white/50">ATK</span>
                <span className="text-3xl font-impact text-amber-400 leading-none font-bold">99</span>
            </div>
        </div>
        <div className="relative z-20 mt-auto pb-6 text-center">
            <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-2"></div>
            <h2 className="text-4xl text-amber-400 font-anton uppercase tracking-widest leading-none drop-shadow-lg">APEX LEGEND</h2>
            <div className="flex justify-center items-center gap-2 mt-2 opacity-80">
                <span className="px-2 py-0.5 rounded-sm bg-black/40 border border-white/10 text-[10px] text-white uppercase tracking-[0.2em]">100 Club</span>
            </div>
        </div>
    </div>
);