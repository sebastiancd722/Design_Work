import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const CyberBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-[#050505] text-white backface-hidden shadow-2xl flex flex-col overflow-hidden border border-zinc-800 font-jetbrains">
        
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(204,255,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(204,255,0,0.03) 1px,transparent 1px)", backgroundSize: "30px 30px" }}></div>

        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Performance_Data</span>
            <i className="fa-solid fa-microchip text-[#ccff00]"></i>
        </div>

        {/* The Big Number */}
        <div className="flex-grow flex flex-col items-center justify-center relative">
            
            {/* Circular HUD Element behind number */}
            <div className="absolute w-48 h-48 border border-zinc-800 rounded-full flex items-center justify-center animate-spin-slow opacity-50 border-dashed"></div>
            
            <div className="relative z-10 text-center">
                <span className="font-impact text-[180px] leading-none text-white block drop-shadow-2xl">99</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        {/* Glitch duplication for effect */}
                        <span className="font-impact text-[180px] leading-none text-[#ccff00] opacity-20 absolute top-0 left-1 blur-sm">99</span>
                </div>
                <span className="bg-[#ccff00] text-black text-xs font-bold px-2 py-0.5 transform -skew-x-12 inline-block border-glow">OVR RATING</span>
            </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center">
            <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-500 uppercase tracking-widest">System Status</span>
                    <span className="text-[10px] text-[#ccff00] font-bold uppercase">Optimal</span>
            </div>
            <div className="text-[8px] text-zinc-600 font-mono tracking-widest">VER. 2.0.4</div>
        </div>
    </div>
);