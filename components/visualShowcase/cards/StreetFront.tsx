import React from 'react';
import { VisualShowcaseConcept } from '../../../types';

export const StreetFront: React.FC<{ item: VisualShowcaseConcept }> = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-zinc-800 border-4 border-zinc-900 font-grunge group">
        <div className="absolute inset-0 bg-black">
            <img src="https://images.pexels.com/photos/8974839/pexels-photo-8974839.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 className="w-full h-full object-cover object-[50%_20%] grayscale contrast-[1.2] brightness-110 mix-blend-hard-light opacity-100 group-hover:scale-110 transition-transform duration-700"
                 alt="The Beast" />
            
            <div className="absolute inset-0 bg-orange-700 mix-blend-hard-light opacity-50"></div>
            <div className="absolute inset-0 concrete-texture opacity-70 mix-blend-multiply"></div>
            <div className="absolute inset-0 halftone z-10 opacity-30"></div>
            <div className="absolute inset-0 noise-texture opacity-60 mix-blend-overlay z-10"></div>
            <div className="absolute inset-0 street-vignette z-20 pointer-events-none"></div>
        </div>

        <div className="absolute bottom-16 -left-4 bg-[#f0f0f0] text-black p-4 rotate-[-3deg] w-[120%] shadow-[5px_5px_0_rgba(0,0,0,0.8)] border-t-4 border-black torn-paper z-30">
            <h2 className="text-6xl pl-6 tracking-tighter leading-none font-grunge">THE BEAST</h2>
        </div>
        
        <div className="absolute top-6 right-6 w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-3xl border-4 border-dashed border-white rotate-12 shadow-lg z-30 font-grunge">
            #1
        </div>

        <div className="absolute top-0 left-10 w-3 h-24 bg-black opacity-90 rounded-b-full z-20"></div>
        <div className="absolute top-0 left-16 w-2 h-16 bg-black opacity-70 rounded-b-full z-20"></div>
        
        <div className="absolute bottom-4 right-4 text-white/80 text-sm rotate-[-2deg] z-30 shadow-black drop-shadow-md font-grunge">
            "Unstoppable Force"
        </div>
    </div>
);