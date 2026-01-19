import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const FashionBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-[#050505] shadow-2xl overflow-hidden flex flex-col p-8 text-white">
        <div className="absolute inset-0 opacity-10 grain-texture pointer-events-none"></div>
        <div className="relative z-10 w-full h-full border border-white/20 p-6 flex flex-col items-center justify-between">
            <div className="mt-4"><div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.2)]"><i className="fa-solid fa-star text-black text-xl"></i></div></div>
            <div className="w-full text-center">
                <h3 className="font-montserrat text-xs uppercase tracking-[0.3em] mb-6 text-gray-400 border-b border-white/10 pb-4 inline-block px-4">Rider List</h3>
                <ul className="font-fashion text-xl text-white space-y-4 italic font-light"><li className="opacity-90">All White Flowers</li><li className="opacity-90">700 Thread Count</li></ul>
            </div>
            <div className="mb-4 text-center"><p className="font-fashion text-2xl italic leading-tight text-white/90">"I woke up<br/>like this."</p></div>
        </div>
    </div>
);