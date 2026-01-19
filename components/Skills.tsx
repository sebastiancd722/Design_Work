import React from 'react';
import { GROUPED_SKILLS } from '../constants';

const SKILL_COLORS: Record<string, string> = {
  // Frontend
  "HTML": "hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:text-orange-600 dark:hover:text-orange-400",
  "CSS": "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:text-blue-600 dark:hover:text-blue-400",
  "Tailwind CSS": "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:text-cyan-600 dark:hover:text-cyan-300",
  "React": "hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:text-sky-600 dark:hover:text-sky-300",
  "TypeScript": "hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:text-blue-700 dark:hover:text-blue-500",
  // Design
  "UI Layout": "hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:text-purple-600 dark:hover:text-purple-400",
  "Visual Hierarchy": "hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:text-pink-600 dark:hover:text-pink-400",
  "Typography": "hover:border-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:text-rose-600 dark:hover:text-rose-400",
  "Component Design": "hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:text-indigo-600 dark:hover:text-indigo-400",
  // Tools
  "Vite": "hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:text-yellow-600 dark:hover:text-yellow-300",
  "Git": "hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:text-red-600 dark:hover:text-red-400",
  "Figma": "hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:text-emerald-600 dark:hover:text-emerald-300",
  "VS Code": "hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:text-blue-600 dark:hover:text-blue-300",
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#020617] border-y border-slate-100 dark:border-slate-900/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {Object.entries(GROUPED_SKILLS).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => {
                  const colorClass = SKILL_COLORS[skill] || "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]";
                  return (
                    <div
                      key={skill}
                      className={`
                        px-5 py-3 rounded-xl 
                        bg-slate-50 dark:bg-[#030816] border border-slate-200 dark:border-slate-800/50 
                        text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-wider
                        transition-all duration-300 cursor-default
                        ${colorClass}
                      `}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};