import React from 'react';
import { EXPERIENCE } from '../constants';

const ExperienceItem: React.FC<{ exp: any }> = ({ exp }) => {
  return (
    <div className="group relative">
      {/* Background Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-emerald-600/0 group-hover:from-blue-600/5 group-hover:via-transparent group-hover:to-emerald-600/5 rounded-[2rem] transition-all duration-700 opacity-0 group-hover:opacity-100 blur-xl"></div>
      
      <div className="relative grid md:grid-cols-4 gap-8 p-4 rounded-[2rem] border border-transparent hover:border-slate-800/50 hover:bg-slate-900/20 transition-all duration-500">
        <div className="md:col-span-1">
          <span className="text-[10px] font-black text-slate-500 dark:text-slate-600 uppercase tracking-[0.3em] block pt-2 transition-colors group-hover:text-blue-500/60">
            {exp.period}
          </span>
        </div>
        
        <div className="md:col-span-3">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-1 transition-all duration-500 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {exp.role}
            </h3>
            <div className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-[11px] opacity-70">
              {exp.company}
            </div>
          </div>
          
          <ul className="space-y-4">
            {exp.description.map((item: string, i: number) => (
              <li 
                key={i} 
                className="
                  group/line relative pl-6 py-1
                  text-slate-600 dark:text-slate-400 text-sm leading-relaxed 
                  transition-all duration-300
                  hover:text-slate-900 dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
                  cursor-default
                "
              >
                {/* Individual Line Light-up Indicator */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-800 transition-all duration-300 group-hover/line:bg-blue-500 group-hover/line:scale-125 group-hover/line:shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 scroll-mt-24 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-24 relative">
          <div className="absolute -left-12 top-0 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-50 hidden md:block"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tighter">
            Experience<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
            Building specialized UI sections and design systems with a focus on modularity and high-fidelity execution.
          </p>
        </div>

        <div className="space-y-20">
          {EXPERIENCE.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-32 p-12 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 dark:text-slate-700 mb-4">End of Record</div>
            <div className="w-12 h-1 bg-slate-100 dark:bg-slate-900 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};