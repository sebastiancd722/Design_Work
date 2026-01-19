import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const ArcLeagueFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col bg-[#bf80ff] border-[12px] border-[#5e2d79] rounded-xl p-3 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
        <div className="cosmic-foil"></div>
        <div className="absolute inset-0 card-texture pointer-events-none opacity-50"></div>
        <div className="relative z-10 flex justify-between items-center mb-2 px-1">
            <div className="flex items-center gap-2">
                <div className="text-[10px] font-russo font-bold uppercase bg-purple-900 text-white px-2 py-0.5 rounded shadow-sm border border-purple-400/30">V-MAX</div>
                <span className="font-russo font-bold text-lg text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] tracking-wide">Kael Voss</span>
            </div>
            <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-full border border-white/10">
                <span className="font-russo text-[10px] font-bold text-purple-200">HP</span>
                <span className="font-russo text-xl font-black text-white">96</span>
                <div className="w-6 h-6 rounded-full bg-[#5e2d79] flex items-center justify-center text-xs font-bold text-white border border-purple-400">👁️</div>
            </div>
        </div>
        <div className="relative z-10 border-4 border-[#3b0b5e] bg-gradient-to-b from-purple-400 to-indigo-600 h-[220px] overflow-hidden mb-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] rounded-sm group-hover:brightness-110 transition-all duration-500">
            <div className="absolute inset-0 bg-scanlines opacity-30 z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=686" className="w-full h-full object-cover object-top mix-blend-hard-light contrast-125 saturate-150" alt="Character" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full ease-in-out z-20"></div>
        </div>
        <div className="relative z-10 bg-[#f2e6ff] flex-grow border-2 border-[#3b0b5e] p-3 flex flex-col justify-start shadow-inner rounded-sm">
            <div className="flex justify-center -mt-6 mb-3">
                <div className="bg-gradient-to-r from-[#7e22ce] to-[#9933ff] text-white px-4 py-0.5 rounded-full border-2 border-[#f2e6ff] font-russo text-[10px] font-bold uppercase tracking-widest shadow-md">Vision Archetype</div>
            </div>
            <div className="flex items-center gap-2 mb-3 border-b-2 border-purple-200/60 pb-2">
                <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-purple-400 shadow-sm"></div>
                </div>
                <div className="flex-grow font-russo text-sm text-purple-900 tracking-tight">Perfect Pass</div>
                <div className="font-russo font-black text-lg text-purple-900">30</div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-[#9933ff] border border-purple-900 text-white flex items-center justify-center text-[8px] shadow-sm">👁️</div>
                    <div className="w-4 h-4 rounded-full bg-[#9933ff] border border-purple-900 text-white flex items-center justify-center text-[8px] shadow-sm">👁️</div>
                </div>
                <div className="flex-grow">
                    <div className="font-russo text-sm text-purple-900 tracking-tight">Future Sight</div>
                    <div className="font-rounded text-[9px] text-purple-800 font-semibold leading-tight">Look at the opponent's next 3 moves.</div>
                </div>
                <div className="font-russo font-black text-xl text-purple-900">60+</div>
            </div>
        </div>
    </div>
);