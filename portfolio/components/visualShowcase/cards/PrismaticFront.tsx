import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const PrismaticFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] overflow-hidden border-4 border-gray-300">
        <div className="absolute inset-0 z-0">
            <img src="https://images.pexels.com/photos/159515/football-american-football-runner-player-159515.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale contrast-125 brightness-110 group-hover:scale-110 transition-transform duration-700" alt="Runner" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-transparent to-green-500/40 mix-blend-color-dodge z-10 pointer-events-none"></div>
        <div className="absolute inset-0 sparkle-bg opacity-40 mix-blend-overlay z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 prism-sheen"></div>
        <div className="absolute inset-0 z-30 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-sm border border-purple-500/30 shadow-lg">
                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-900 font-montserrat">Holo Foil // 001</span>
                </div>
                <i className="fa-solid fa-diamond text-white drop-shadow-[0_0_5px_rgba(255,255,255,1)] text-xl animate-pulse"></i>
            </div>
            <div>
                <h1 className="text-5xl font-black italic text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] transform -skew-x-6 tracking-tighter leading-none font-montserrat">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">PRISMATIC</span>
                    <span className="text-2xl block mt-1 tracking-widest opacity-90 font-normal not-italic font-tech">RUNNER</span>
                </h1>
            </div>
        </div>
    </div>
);