import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const MusicFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-[#1c1c1e] rounded-[2.5rem] shadow-2xl backface-hidden overflow-hidden border border-white/10 font-modern">
        <div className="absolute inset-0 h-full w-full">
            <img src="https://images.pexels.com/photos/4726532/pexels-photo-4726532.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover object-[65%_15%] opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Album Art" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>
        <div className="absolute top-6 left-0 w-full px-8 flex justify-between items-center text-[10px] font-medium text-white/60 tracking-widest uppercase z-10">
            <div className="flex items-center gap-1"><i className="fa-solid fa-signal text-xs"></i><span>5G</span></div>
            <div className="flex items-center gap-2"><span>Lossless</span><i className="fa-solid fa-headphones"></i></div>
        </div>
        <div className="absolute bottom-6 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 z-20 shadow-lg">
            <div className="flex justify-between items-start mb-4">
                <div><h2 className="text-white text-xl font-bold leading-tight mb-1">Midnight City</h2><p className="text-white/60 text-xs font-medium tracking-wide">The Artist</p></div>
                <div className="flex items-end gap-1 h-4"><div className="w-1 bg-purple-400 rounded-full bar"></div><div className="w-1 bg-purple-400 rounded-full bar"></div><div className="w-1 bg-purple-400 rounded-full bar"></div></div>
            </div>
            <div className="w-full h-1 bg-white/20 rounded-full mb-6 relative overflow-hidden"><div className="absolute left-0 top-0 h-full w-1/3 bg-white rounded-full"></div></div>
            <div className="flex justify-between items-center px-2">
                <i className="fa-solid fa-backward-step text-white/70"></i>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"><i className="fa-solid fa-play ml-1 text-sm"></i></div>
                <i className="fa-solid fa-forward-step text-white/70"></i>
            </div>
        </div>
    </div>
);