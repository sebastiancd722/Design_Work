import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const MusicBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-[#09090b] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative border border-white/5 font-modern p-6">
         {/* Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-600/20 rounded-full blur-[60px] pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative z-10 flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Up Next</span>
            <i className="fa-solid fa-list-ul text-white/50 text-xs"></i>
        </div>
        
        {/* Tracklist */}
        <div className="relative z-10 flex-grow space-y-4">
            <div className="flex items-center gap-3 group/track cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-white/30 text-xs font-mono">02</span>
                <div className="flex-grow">
                    <div className="text-white text-sm font-bold">Neon Nights</div>
                    <div className="text-white/40 text-[10px]">The Artist</div>
                </div>
                <span className="text-white/30 text-xs">3:42</span>
            </div>
             <div className="flex items-center gap-3 group/track cursor-pointer">
                <div className="w-3 h-3 flex items-center justify-between">
                    <div className="w-0.5 h-full bg-purple-500 animate-equalize"></div>
                    <div className="w-0.5 h-full bg-purple-500 animate-equalize [animation-delay:0.1s]"></div>
                    <div className="w-0.5 h-full bg-purple-500 animate-equalize [animation-delay:0.2s]"></div>
                </div>
                <div className="flex-grow">
                    <div className="text-purple-400 text-sm font-bold">Midnight City</div>
                    <div className="text-white/40 text-[10px]">The Artist</div>
                </div>
                <span className="text-white/30 text-xs">4:05</span>
            </div>
             <div className="flex items-center gap-3 group/track cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-white/30 text-xs font-mono">04</span>
                <div className="flex-grow">
                    <div className="text-white text-sm font-bold">Electric Dream</div>
                    <div className="text-white/40 text-[10px]">The Artist</div>
                </div>
                <span className="text-white/30 text-xs">2:58</span>
            </div>
        </div>

        {/* Footer Visual */}
        <div className="relative z-10 mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="text-[9px] text-white/40 uppercase tracking-widest">Album • 2024</div>
            <i className="fa-brands fa-spotify text-white/40 text-lg hover:text-green-500 transition-colors"></i>
        </div>
    </div>
);