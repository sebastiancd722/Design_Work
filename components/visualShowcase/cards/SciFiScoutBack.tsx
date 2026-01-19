import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const SciFiScoutBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-slate-950 text-blue-100 border border-blue-500/30 rounded-lg shadow-xl overflow-hidden flex flex-col p-6 font-tech relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none"></div>
        
        {/* Header */}
         <div className="relative z-10 flex justify-between items-end border-b border-blue-500/30 pb-2 mb-4">
            <div>
                <div className="text-[8px] text-blue-400 uppercase tracking-widest mb-1">Sector 7G</div>
                <div className="text-xl font-impact tracking-wide text-white">PLANET DATA</div>
            </div>
            <div className="text-right">
                 <div className="text-[8px] text-red-400 uppercase tracking-widest animate-pulse">Threat: High</div>
            </div>
        </div>

        {/* Main Data Vis */}
        <div className="relative z-10 flex-grow flex items-center justify-center mb-4 border border-blue-500/20 bg-blue-500/5 rounded">
            {/* Fake Rotating Planet Wireframe */}
            <div className="relative w-32 h-32 rounded-full border border-blue-400/30 flex items-center justify-center animate-spin-slow" style={{animationDuration: '20s'}}>
                <div className="absolute inset-0 rounded-full border-t border-b border-blue-400/50 transform rotate-45"></div>
                <div className="absolute inset-0 rounded-full border-l border-r border-blue-400/50 transform -rotate-45"></div>
                <div className="w-24 h-24 rounded-full border border-blue-400/20"></div>
            </div>
            <div className="absolute bottom-2 right-2 text-[8px] text-blue-300 font-mono">
                ROT: 24h 32m
            </div>
        </div>

        {/* Data Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-2 text-[9px] font-mono">
            <div className="bg-blue-900/20 p-2 border-l-2 border-blue-500">
                <div className="text-blue-400 opacity-70">ATMOSPHERE</div>
                <div className="text-white">N2 72% / O2 21%</div>
            </div>
            <div className="bg-blue-900/20 p-2 border-l-2 border-blue-500">
                <div className="text-blue-400 opacity-70">GRAVITY</div>
                <div className="text-white">0.92 G</div>
            </div>
            <div className="bg-blue-900/20 p-2 border-l-2 border-blue-500">
                <div className="text-blue-400 opacity-70">TEMP</div>
                <div className="text-white">-42°C (Avg)</div>
            </div>
            <div className="bg-blue-900/20 p-2 border-l-2 border-blue-500">
                <div className="text-blue-400 opacity-70">WATER</div>
                <div className="text-white">FROZEN</div>
            </div>
        </div>
    </div>
);