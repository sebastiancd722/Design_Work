import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const UnitedMonoBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-xl bg-white flex flex-col p-8 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-end border-b border-black pb-4 mb-6">
            <div>
                <h2 className="text-2xl font-archivo font-bold text-black leading-none">L. NACHO</h2>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">United • #09</span>
            </div>
            <span className="text-4xl font-archivo font-black text-gray-200">90</span>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
            "Simplicity is the ultimate sophistication. Pure football, nothing else."
        </p>

        {/* Stats List */}
        <div className="space-y-4 font-archivo">
            <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Form</span>
                <span className="text-sm font-bold text-black">Perfect</span>
            </div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Style</span>
                <span className="text-sm font-bold text-black">Clean</span>
            </div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pace</span>
                <span className="text-sm font-bold text-black">98.5</span>
            </div>
        </div>

        {/* Badges */}
        <div className="mt-8 flex gap-2">
            <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase rounded-full">⚫ Dot</span>
            <span className="px-3 py-1 border border-black text-black text-[10px] font-bold uppercase rounded-full">⚪ Line</span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex justify-between items-end">
            <span className="text-[8px] text-gray-400 uppercase tracking-widest">© 2026 ARC Mono.</span>
            <i className="fa-solid fa-qrcode text-2xl text-black"></i>
        </div>
    </div>
);