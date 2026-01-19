import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const BattleRapBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] rounded-sm shadow-2xl overflow-hidden flex flex-col relative border-2 border-yellow-700/50">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
        <div className="relative z-20 h-full p-6 flex flex-col">
            <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-4">
                <div>
                    <span className="block text-[10px] text-yellow-600 uppercase tracking-[0.2em] font-bold mb-1 font-condensed">Battle Record</span>
                    <h2 className="font-anton text-3xl text-white uppercase tracking-wide leading-none">Undefeated</h2>
                </div>
                <i className="fa-solid fa-crown text-2xl text-yellow-600 drop-shadow-md"></i>
            </div>
            <div className="flex items-end gap-2 mb-6">
                <span className="font-anton text-6xl text-white leading-none drop-shadow-lg">24</span>
                <span className="font-anton text-4xl text-zinc-600 leading-none mb-1">-</span>
                <span className="font-anton text-6xl text-zinc-600 leading-none">0</span>
                <div className="ml-auto text-right">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Knockouts</div>
                    <div className="font-anton text-2xl text-red-500">18</div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6">
                <div><div className="flex justify-between text-[10px] text-zinc-400 uppercase tracking-wider mb-1 font-bold"><span>Pen Game</span><span className="text-white">10/10</span></div><div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-600 w-full shadow-[0_0_10px_rgba(202,138,4,0.5)]"></div></div></div>
                <div><div className="flex justify-between text-[10px] text-zinc-400 uppercase tracking-wider mb-1 font-bold"><span>Performance</span><span className="text-white">9.8</span></div><div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-600 w-[98%]"></div></div></div>
                <div><div className="flex justify-between text-[10px] text-zinc-400 uppercase tracking-wider mb-1 font-bold"><span>Aggression</span><span className="text-white">9.9</span></div><div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-600 w-[99%]"></div></div></div>
                <div><div className="flex justify-between text-[10px] text-zinc-400 uppercase tracking-wider mb-1 font-bold"><span>Freestyle</span><span className="text-white">9.5</span></div><div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-600 w-[95%]"></div></div></div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 relative mb-4">
                <div className="absolute top-2 left-2">
                   <i className="fa-solid fa-quote-left text-zinc-700 text-xs"></i>
                </div>
                <p className="font-grunge text-zinc-300 text-sm text-center pt-2 italic transform -rotate-1">"Don't ask for the smoke if you can't handle the fire."</p>
            </div>
            <div className="mt-auto flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-600 uppercase tracking-widest font-condensed">League Status</span>
                    <span className="text-[10px] text-white font-bold tracking-wider uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] font-condensed">Hall of Fame</span>
                </div>
            </div>
        </div>
    </div>
);