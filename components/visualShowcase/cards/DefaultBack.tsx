import React from 'react';
import { RotateCcw } from 'lucide-react';
import { VisualShowcaseConcept } from '../../../types';

export const DefaultBack: React.FC<{ item: VisualShowcaseConcept }> = ({ item }) => (
    <div className={`absolute inset-0 rounded-2xl overflow-hidden h-full w-full shadow-lg border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-slate-300 dark:group-hover:border-slate-700`}>
        <div className="flex flex-col items-center justify-center p-6 text-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 animate-pulse"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Front Face</span>
            <span className="text-[10px] font-mono text-slate-300 dark:text-slate-600 mt-2">{item.id}</span>
        </div>
        <div className="absolute top-4 right-4 z-40 p-2 bg-slate-200/50 dark:bg-slate-800/50 rounded-full text-slate-400">
            <RotateCcw className="w-4 h-4" />
        </div>
    </div>
);