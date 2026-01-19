import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const CyberFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] text-white backface-hidden shadow-2xl flex flex-col overflow-hidden border border-zinc-800 font-jetbrains">
        {/* Textures */}
        <div className="absolute inset-0 noise-static pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 scanlines pointer-events-none opacity-20"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        {/* Top System Bar */}
        <div className="relative z-10 flex justify-between items-center p-5 border-b border-white/10 bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ccff00] animate-pulse"></div>
                <span className="text-[10px] text-[#ccff00] font-bold tracking-widest uppercase">Live_Feed</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-bold tracking-widest">UNIT_01</span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-grow p-5 flex flex-col justify-center">
            
            {/* Decorative HUD Lines */}
            <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-zinc-700"></div>
            <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-zinc-700"></div>

            {/* Image Container with 'Hacked' Look */}
            <div className="relative w-full h-64 bg-zinc-900 border border-zinc-800 overflow-hidden mb-4 group-hover:border-[#ccff00]/50 transition-colors duration-300">
                <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=686&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                        alt="Subject" />
                
                {/* Overlay UI on Image */}
                <div className="absolute bottom-0 left-0 bg-black/80 px-2 py-1 border-t border-r border-[#ccff00]">
                    <span className="text-[#ccff00] text-[10px] font-bold">TARGET_ACQUIRED</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Typography */}
            <div className="relative">
                <h1 className="font-impact text-6xl leading-[0.85] uppercase text-zinc-200 tracking-wide">
                    Marcus <br />
                    <span className="text-[#ccff00] acid-glow">Valen</span>
                </h1>
                {/* Technical Subtext */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-zinc-800 text-zinc-400 text-[9px] px-1 py-0.5 rounded-sm">FWD</span>
                    <span className="text-[9px] text-zinc-500 tracking-widest uppercase">// Striker Class</span>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 p-4 border-t border-white/10 flex justify-between items-center bg-zinc-900/50">
            <div className="text-[8px] text-zinc-600 tracking-widest uppercase">Systems Normal</div>
            <div className="font-mono text-[9px] text-zinc-500">ID: 8492-X</div>
        </div>
    </div>
);