import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const FashionFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full bg-white shadow-2xl backface-hidden overflow-hidden border border-gray-100">
        <div className="absolute inset-0 h-[70%] overflow-hidden">
            <img src="https://images.pexels.com/photos/8040848/pexels-photo-8040848.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover object-top grayscale contrast-125 brightness-110 group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Model" />
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 gloss-sheen pointer-events-none mix-blend-overlay"></div>
        </div>
        <div className="absolute bottom-0 w-full h-[30%] bg-white p-6 flex flex-col justify-center items-center z-30">
            <div className="w-8 h-px bg-black mb-4"></div>
            <h2 className="font-fashion text-7xl text-black leading-none mb-2 tracking-tighter drop-shadow-sm">DIVA</h2>
            <span className="font-montserrat text-[8px] text-gray-400 uppercase tracking-[0.4em] font-medium">The One & Only</span>
        </div>
    </div>
);