import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const ArcLeagueBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col bg-[#5e2d79] border-[12px] border-[#bf80ff] rounded-xl p-6 items-center justify-center relative shadow-2xl">
        <div className="absolute inset-0 opacity-30 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-indigo-900 via-purple-800 to-indigo-900 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-0 card-texture opacity-30"></div>
        <div className="bg-black/40 p-6 rounded-xl backdrop-blur-md border-2 border-[#bf80ff] w-full text-center relative z-10 shadow-[0_0_20px_rgba(191,128,255,0.2)]">
            <h2 className="font-russo text-4xl text-white uppercase italic tracking-wider drop-shadow-[0_4px_0_rgba(94,45,121,1)] mb-2 transform -rotate-2">ARC<br /><span className="text-[#bf80ff]">League</span></h2>
            <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-[#bf80ff] to-transparent mb-6 rounded-full"></div>
            <p className="font-rounded text-white/90 text-xs leading-relaxed mb-6 font-medium italic">"Uses telepathic abilities to communicate with teammates."</p>
            <div className="space-y-3 w-full">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-russo text-white w-6 text-right">VIS</span>
                    <div className="flex-grow h-3 bg-black/60 rounded-full overflow-hidden border border-white/10">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-[#bf80ff] w-[99%] shadow-[0_0_10px_#bf80ff]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);