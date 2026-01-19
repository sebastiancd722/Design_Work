import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const FuturisticFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-slate-900 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.3)] backface-hidden overflow-hidden border border-cyan-500/30 font-tech">
        {/* Background Tech Elements */}
        <div className="absolute inset-0 tech-grid"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-tr-[100px] z-0"></div>

        {/* Player Image Container */}
        <div className="absolute inset-2 top-2 bottom-16 z-10 overflow-hidden rounded-t-xl clip-path-custom">
            <img src="https://images.pexels.com/photos/159684/soccer-football-soccer-player-sport-159684.jpeg?auto=compress&cs=tinysrgb&w=600"
                 className="w-full h-full object-cover object-center filter contrast-110 brightness-110 group-hover:scale-105 transition-transform duration-700"
                 alt="Player" />
            {/* Gradient Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-transparent"></div>
        </div>

        {/* Holo Sheen Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 holo-sheen mix-blend-overlay"></div>

        {/* Top Stats Badges */}
        <div className="absolute top-6 right-6 z-30 flex flex-col items-end gap-2">
            <div className="bg-black/60 backdrop-blur-md border border-cyan-500/50 px-3 py-1 rounded skew-x-[-10deg]">
                <div className="flex text-yellow-400 text-[10px] gap-0.5 skew-x-[10deg]">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
            </div>
            <div className="bg-cyan-500 text-black px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase skew-x-[-10deg] shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                <span className="block skew-x-[10deg]">Elite Prospect</span>
            </div>
        </div>

        {/* Main Name & Info (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-slate-900 z-30 border-t border-cyan-500/50 flex flex-col justify-center px-6">
            <div className="flex justify-between items-end mb-1">
                <div>
                    <span className="text-cyan-400 text-xs tracking-[0.2em] block mb-1">FORWARD / #10</span>
                    <h2 className="text-5xl text-white font-impact uppercase leading-[0.85] tracking-wide drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">
                        J. <span className="text-cyan-400">DOE</span>
                    </h2>
                </div>
                <div className="text-right">
                     <div className="text-4xl font-impact text-white leading-none">92</div>
                     <div className="text-[10px] text-gray-400">OVR</div>
                </div>
            </div>
            {/* Decorative Bar */}
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden flex">
                <div className="w-3/4 h-full bg-cyan-500 shadow-[0_0_8px_cyan]"></div>
                <div className="w-1/4 h-full bg-gray-700"></div>
            </div>
        </div>

        {/* Floating Rank Circle */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30">
             <div className="w-12 h-24 border-l-2 border-cyan-500/30 flex items-center pl-2">
                <div className="writing-vertical-lr text-cyan-500/50 text-[10px] tracking-[0.3em] [writing-mode:vertical-lr]">NAT. RANK #04</div>
             </div>
        </div>
    </div>
);