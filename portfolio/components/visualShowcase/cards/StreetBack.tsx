import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const StreetBack: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-zinc-800 border-4 border-zinc-900 font-grunge group">
        {/* Background Textures */}
        <div className="absolute inset-0 felt-texture opacity-50"></div>
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-orange-600 rounded-full blur-[80px] opacity-20"></div>
        <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-purple-600 rounded-full blur-[80px] opacity-20"></div>
        
        <div className="relative z-10 text-center h-full flex flex-col">
            {/* Header */}
            <h3 className="text-5xl mb-10 transform -rotate-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                STREET<br />STATS
            </h3>
            
            {/* Stats Bars */}
            <div className="space-y-6 font-sans font-black italic flex-grow">
                {/* Stat 1 */}
                <div className="relative group/stat">
                    <div className="flex justify-between text-sm mb-1 px-1 text-orange-400 tracking-widest font-anton"><span>POWER</span><span>92</span></div>
                    <div className="w-full bg-zinc-800 h-6 transform -skew-x-12 border-2 border-zinc-600 overflow-hidden">
                        <div className="bg-white h-full w-[92%] border-r-4 border-black group-hover/stat:bg-orange-400 transition-colors duration-300"></div>
                    </div>
                </div>
                {/* Stat 2 */}
                <div className="relative group/stat">
                    <div className="flex justify-between text-sm mb-1 px-1 text-orange-400 tracking-widest font-anton"><span>STYLE</span><span>85</span></div>
                    <div className="w-full bg-zinc-800 h-6 transform -skew-x-12 border-2 border-zinc-600 overflow-hidden">
                        <div className="bg-orange-500 h-full w-[85%] border-r-4 border-black group-hover/stat:bg-orange-300 transition-colors duration-300"></div>
                    </div>
                </div>
                {/* Stat 3 */}
                <div className="relative group/stat">
                    <div className="flex justify-between text-sm mb-1 px-1 text-purple-400 tracking-widest font-anton"><span>GRIT</span><span>100</span></div>
                    <div className="w-full bg-zinc-800 h-6 transform -skew-x-12 border-2 border-zinc-600 overflow-hidden">
                        <div className="bg-purple-500 h-full w-[100%] border-r-4 border-black group-hover/stat:bg-purple-400 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
            
            {/* Footer Stamp */}
            <div className="mt-8 border-4 border-white p-4 rotate-2 inline-block bg-black shadow-[6px_6px_0_0_#ea580c] transform hover:scale-105 transition-transform">
                <p className="text-2xl tracking-widest leading-none">UNSTOPPABLE</p>
            </div>
        </div>
    </div>
);