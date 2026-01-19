import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const PrismaticBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-zinc-950 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative border border-gray-800">
        <div className="absolute inset-0 border-[2px] border-transparent rounded-2xl z-20 pointer-events-none" style={{ background: "linear-gradient(135deg, #a855f7, #22c55e) border-box", WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", opacity: 0.5 }}></div>
        <div className="absolute inset-0 opacity-10 security-pattern pointer-events-none"></div>
        <div className="relative z-10 h-full p-6 flex flex-col text-gray-300">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <span className="text-[8px] tracking-[0.3em] text-gray-500 uppercase font-tech mb-1">Authentic Issue</span>
                    <h1 className="text-3xl font-black italic uppercase leading-none text-gold-foil font-montserrat">Runner</h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 w-12 h-12 rounded-lg shadow-lg">
                    <span className="block text-2xl font-black text-white font-montserrat">98</span>
                </div>
            </div>
            <div className="relative py-4 mb-4 border-t border-b border-gray-800/50">
                <p className="font-script text-4xl text-gray-200 text-center transform -rotate-3 opacity-90 drop-shadow-md">J. Doe</p>
            </div>
            <div className="flex-grow space-y-2 px-1">
                <div className="flex flex-col gap-1"><div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-gray-500"><span>Speed</span><span className="text-white">9.8</span></div><div className="h-1 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-purple-500 via-white to-purple-400 w-[98%] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div></div></div>
                <div className="flex flex-col gap-1"><div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-gray-500"><span>Agility</span><span className="text-white">9.5</span></div><div className="h-1 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-500 via-white to-green-400 w-[95%] shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div></div></div>
                <div className="flex flex-col gap-1"><div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-gray-500"><span>Vision</span><span className="text-white">9.2</span></div><div className="h-1 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-500 via-white to-blue-400 w-[92%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div></div></div>
                <div className="flex flex-col gap-1"><div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-gray-500"><span>Power</span><span className="text-white">8.9</span></div><div className="h-1 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-red-500 via-white to-red-400 w-[89%] shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div></div></div>
            </div>
            <div className="mt-auto flex items-end justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-gray-700 bg-black flex items-center justify-center shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/20 to-transparent animate-pulse"></div>
                        <i className="fa-solid fa-shield-halved text-gray-400 text-xs"></i>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[6px] text-gray-500 uppercase tracking-widest">Serial No.</span>
                        <span className="text-[10px] text-gold-foil font-tech tracking-widest">001 / 500</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);