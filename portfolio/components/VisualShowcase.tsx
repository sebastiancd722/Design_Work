
import React from 'react';
import { VISUAL_SHOWCASE } from '../data/visualShowcase';
import { VisualShowcaseCard } from './visualShowcase/VisualShowcaseCard';

const VARIANT_TITLE_STYLES: Record<string, string> = {
  street: "font-grunge tracking-widest text-zinc-700 dark:text-zinc-400 text-2xl rotate-[-2deg]",
  music: "font-modern font-bold tracking-tight text-purple-600 dark:text-purple-400 text-lg",
  prismatic: "font-montserrat font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500 text-xl",
  premiumGolf: "font-playfair italic font-bold text-emerald-800 dark:text-emerald-500 text-xl",
  battleRap: "font-anton uppercase tracking-wide text-red-700 dark:text-red-500 text-2xl",
  futuristic: "font-impact uppercase tracking-wider text-cyan-600 dark:text-cyan-400 text-2xl",
  fashion: "font-fashion font-bold text-slate-900 dark:text-white text-2xl italic",
  apexLegend: "font-anton uppercase tracking-wider text-amber-600 dark:text-amber-500 text-xl",
  cyber: "font-impact uppercase tracking-widest text-lime-600 dark:text-[#ccff00] text-3xl",
  sciFiScout: "font-tech uppercase tracking-widest text-blue-600 dark:text-blue-400 text-lg",
  unitedMono: "font-archivo font-black uppercase tracking-tight text-slate-900 dark:text-white text-xl",
  arcLeague: "font-russo uppercase tracking-wide text-purple-700 dark:text-purple-400 text-lg",
};

export const VisualShowcase = () => {
  return (
    <section id="showcase" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Visual Showcase</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                    Experimental UI concepts, card designs, and visual explorations.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {VISUAL_SHOWCASE.map((item) => {
                    const titleStyle = (item.variant && VARIANT_TITLE_STYLES[item.variant]) 
                        ? VARIANT_TITLE_STYLES[item.variant] 
                        : "font-display font-bold text-slate-900 dark:text-white text-lg";
                    
                    return (
                        <div key={item.id} className="flex flex-col gap-6 group/card">
                            <VisualShowcaseCard item={item} />
                            <div className="text-center transform transition-all duration-500 group-hover/card:translate-y-[-5px] group-hover/card:opacity-100 opacity-70">
                                <h3 className={`${titleStyle} mb-1 transition-all duration-300`}>{item.title}</h3>
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">{item.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};
