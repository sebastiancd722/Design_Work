import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const FuturisticBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
     <div className="absolute inset-0 w-full h-full bg-slate-950 rounded-2xl shadow-xl backface-hidden border border-cyan-900 p-6 flex flex-col relative overflow-hidden font-tech">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(6,182,212,0.5) 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>

        {/* Header */}
        <div className="relative z-10 border-b border-cyan-900 pb-4 mb-4 flex justify-between items-center">
            <div>
                <h3 className="text-cyan-500 text-xs tracking-widest mb-1">SCOUTING REPORT</h3>
                <h2 className="text-3xl text-white font-impact uppercase">Analysis</h2>
            </div>
            <i className="fa-solid fa-fingerprint text-3xl text-cyan-900"></i>
        </div>

        {/* Radar Chart Visualization */}
        <div className="relative z-10 flex-grow flex items-center justify-center mb-4">
            <div className="relative w-48 h-48">
                {/* Chart Circles */}
                <div className="absolute inset-0 rounded-full border border-cyan-900/30"></div>
                <div className="absolute inset-8 rounded-full border border-cyan-900/30"></div>
                <div className="absolute inset-16 rounded-full border border-cyan-900/30"></div>
                
                {/* Axis Lines */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-900/30 -translate-x-1/2"></div>
                <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-900/30 -translate-y-1/2"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-900/30 -translate-x-1/2 rotate-45"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-900/30 -translate-x-1/2 -rotate-45"></div>

                {/* Data Polygon (SVG) */}
                <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_4px_rgba(6,182,212,0.5)]" viewBox="0 0 100 100">
                    <polygon points="50,10 90,50 50,90 20,60" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
                    {/* Data Points */}
                    <circle cx="50" cy="10" r="2" fill="white" />
                    <circle cx="90" cy="50" r="2" fill="white" />
                    <circle cx="50" cy="90" r="2" fill="white" />
                    <circle cx="20" cy="60" r="2" fill="white" />
                </svg>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-cyan-900/20 p-2 rounded border border-cyan-900/50 flex justify-between items-center group/stat hover:bg-cyan-900/40 transition-colors">
                <span className="text-gray-400">PACE</span>
                <span className="text-cyan-400 font-bold text-lg group-hover/stat:text-white">9.4</span>
            </div>
            <div className="bg-cyan-900/20 p-2 rounded border border-cyan-900/50 flex justify-between items-center group/stat hover:bg-cyan-900/40 transition-colors">
                <span className="text-gray-400">IQ</span>
                <span className="text-cyan-400 font-bold text-lg group-hover/stat:text-white">9.5</span>
            </div>
            <div className="bg-cyan-900/20 p-2 rounded border border-cyan-900/50 flex justify-between items-center group/stat hover:bg-cyan-900/40 transition-colors">
                <span className="text-gray-400">TECH</span>
                <span className="text-cyan-400 font-bold text-lg group-hover/stat:text-white">9.1</span>
            </div>
            <div className="bg-cyan-900/20 p-2 rounded border border-cyan-900/50 flex justify-between items-center group/stat hover:bg-cyan-900/40 transition-colors">
                <span className="text-gray-400">PHYS</span>
                <span className="text-cyan-400 font-bold text-lg group-hover/stat:text-white">8.8</span>
            </div>
        </div>

        {/* Footer Info */}
        <div className="relative z-10 mt-6 pt-4 border-t border-cyan-900 flex justify-between text-[10px] text-gray-500">
            <span>ID: 8824-X9</span>
            <span>SCANNED: 2025-05-12</span>
        </div>
    </div>
);