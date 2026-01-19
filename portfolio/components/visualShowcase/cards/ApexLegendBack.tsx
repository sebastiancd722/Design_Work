import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const ApexLegendBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col p-6 text-white bg-slate-950 border-4 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.4)] rounded-lg font-tech">
        <div className="noise-overlay"></div><div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay"></div><div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 flex justify-between items-end border-b border-white/10 pb-2 mb-4">
            <div>
                <h3 className="font-anton text-white/90 text-2xl tracking-widest uppercase text-amber-500">APEX LEGEND</h3>
                <p className="text-[9px] text-white/50 uppercase tracking-[0.2em]">Hall of Fame • ICON</p>
            </div>
            <div className="font-impact text-3xl text-white/20 font-bold">#100</div>
        </div>
        <div className="relative z-10 flex gap-4 items-center mb-4 h-24">
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-white/10 radar-poly bg-slate-900/50"></div>
                <div className="absolute w-[70%] h-[70%] border border-white/10 radar-poly"></div>
                <div className="absolute w-full h-full bg-amber-500/40 radar-poly transform scale-[0.85] border border-amber-500/50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <span className="text-[8px] text-white/50 uppercase">OVR</span>
                    <span className="font-impact text-3xl text-white font-bold">97</span>
                </div>
            </div>
            <div className="flex-grow space-y-2">
                <div className="flex items-center justify-between"><span className="text-[9px] text-white/60 uppercase w-8">PHY</span><div className="flex-grow h-1.5 bg-slate-800 rounded-full overflow-hidden ml-2"><div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[90%]"></div></div></div>
                <div className="flex items-center justify-between"><span className="text-[9px] text-white/60 uppercase w-8">TEC</span><div className="flex-grow h-1.5 bg-slate-800 rounded-full overflow-hidden ml-2"><div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[95%]"></div></div></div>
                <div className="flex items-center justify-between"><span className="text-[9px] text-white/60 uppercase w-8">IQ</span><div className="flex-grow h-1.5 bg-slate-800 rounded-full overflow-hidden ml-2"><div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[73%]"></div></div></div>
            </div>
        </div>
        <div className="mt-auto">
            <div className="flex items-center justify-between border-t border-white/10 pt-2 mb-1">
                <div className="flex flex-col text-left"><span className="text-[8px] text-white/40 uppercase">Transfer Val</span><span className="font-impact text-2xl text-amber-400">Priceless</span></div>
                <div className="h-8 w-24 bg-white p-1 flex items-center justify-center gap-0.5 opacity-80 mix-blend-screen">
                    <div className="w-1 h-full bg-black"></div><div className="w-2 h-full bg-black"></div><div className="w-3 h-full bg-black"></div>
                </div>
            </div>
            <p className="text-[8px] text-white/30 uppercase tracking-widest text-center mt-2">Certified Authentic</p>
        </div>
    </div>
);