import React from 'react';
import { RotateCcw } from 'lucide-react';
import { VisualShowcaseConcept } from '../../../types';

export const DefaultFront: React.FC<{ item: VisualShowcaseConcept }> = ({ item }) => (
    <div className={`absolute inset-0 rounded-2xl overflow-hidden h-full w-full shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-blue-500/50`}>
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 opacity-50"></div>
        <div className="relative z-10 p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <i className="fa-solid fa-layer-group text-2xl"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">{item.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
         <div className="absolute bottom-4 right-4 z-40 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <RotateCcw className="w-4 h-4" />
        </div>
    </div>
);