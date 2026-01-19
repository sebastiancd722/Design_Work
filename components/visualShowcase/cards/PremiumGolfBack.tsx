import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const PremiumGolfBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col relative bg-[#F9F7F2] border-[6px] border-[#00573F] rounded-t-[10rem] rounded-b-xl shadow-2xl">
        <div className="absolute inset-2 rounded-t-[9.5rem] rounded-b-lg border border-[#00573F]/20 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-40 paper-texture pointer-events-none mix-blend-multiply"></div>
        <div className="relative z-10 pt-16 pb-6 px-6 text-center border-b border-[#00573F]/20">
            <div className="w-20 h-20 mx-auto bg-[#FFD700] rounded-full flex items-center justify-center border-[6px] border-[#00573F] shadow-lg mb-4 relative group-hover:scale-110 transition-transform duration-500">
                <span className="font-playfair text-[#00573F] font-black text-3xl">18</span>
                <div className="absolute -bottom-2 bg-[#00573F] text-[#FFD700] text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Hole</div>
            </div>
            <span className="font-montserrat text-[#00573F] text-[10px] uppercase tracking-[0.3em] font-bold block">Official Invitation</span>
        </div>
        <div className="relative z-10 flex-grow p-8 flex flex-col justify-center space-y-6">
            <div className="flex justify-between items-end group/stat"><span className="font-playfair text-[#00573F] text-lg font-bold italic">Greens in Reg</span><div className="flex-grow border-b-2 border-dotted border-[#00573F]/20 mx-2 mb-1"></div><span className="font-montserrat text-[#00573F] text-xl font-bold">88%</span></div>
            <div className="flex justify-between items-end group/stat"><span className="font-playfair text-[#00573F] text-lg font-bold italic">Fairways</span><div className="flex-grow border-b-2 border-dotted border-[#00573F]/20 mx-2 mb-1"></div><span className="font-montserrat text-[#00573F] text-xl font-bold">92%</span></div>
            <div className="flex justify-between items-end group/stat"><span className="font-playfair text-[#00573F] text-lg font-bold italic">Avg Putts</span><div className="flex-grow border-b-2 border-dotted border-[#00573F]/20 mx-2 mb-1"></div><span className="font-montserrat text-[#00573F] text-xl font-bold">26.5</span></div>
        </div>
        <div className="relative z-10 pb-10 text-center">
            <div className="text-[#00573F] opacity-80 mb-2"><i className="fa-solid fa-leaf text-xl"></i></div>
            <p className="font-script text-4xl text-[#00573F] transform -rotate-2 drop-shadow-sm">See you in April.</p>
        </div>
    </div>
);