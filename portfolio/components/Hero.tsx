import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Terminal } from 'lucide-react';

const CodeLine: React.FC<{ children: React.ReactNode; indent?: number }> = ({ children, indent = 0 }) => (
  <div 
    className={`
      group flex items-center gap-4 py-0.5 px-4 -mx-4 rounded-lg
      hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all duration-300 cursor-default
    `}
  >
    <div className="w-4 text-slate-300 dark:text-slate-700 font-mono text-[10px] select-none group-hover:text-blue-500/40 transition-colors">
    </div>
    <div style={{ marginLeft: `${indent * 1.5}rem` }} className="flex flex-wrap gap-2 transition-all duration-300">
      {children}
    </div>
  </div>
);

export const Hero = () => {
  const scrollWithOffset = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-28 pb-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/[0.03] dark:bg-blue-600/[0.07] rounded-full blur-[100px] md:blur-[140px] pointer-events-none animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-600/[0.02] dark:bg-emerald-600/[0.04] rounded-full blur-[100px] md:blur-[140px] pointer-events-none animate-glow-pulse [animation-delay:1.5s]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-12 items-center w-full relative z-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-slate-100/50 dark:bg-blue-500/5 border border-slate-200/50 dark:border-blue-500/10 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-blue-400/80">
              Available for new projects
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-display font-bold text-slate-900 dark:text-white mb-8 leading-[0.85] tracking-[-0.05em]">
            Design.<br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 dark:from-blue-400 dark:via-blue-500 dark:to-emerald-400 bg-clip-text text-transparent">
              Build. Scale.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-md leading-relaxed font-medium">
            I'm <span className="text-slate-900 dark:text-white font-bold">Sebastian Canadinha-DeLima</span>, a UI Designer & Frontend Developer specialized in building clean, scalable interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            {/* View Projects - Primary Action */}
            <button 
              onClick={() => scrollWithOffset('showcase')}
              className="relative group flex items-center justify-center gap-3 bg-white dark:bg-white text-black dark:text-black px-10 py-4 rounded-full font-bold transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden border border-slate-200 dark:border-transparent"
            >
              <span className="relative z-10 tracking-tight">View Projects</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>

            {/* Let's Talk - Secondary Action */}
            <button 
              onClick={() => scrollWithOffset('contact')}
              className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:bg-blue-500/[0.02] dark:hover:bg-blue-500/[0.05] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] active:scale-95"
            >
              <span className="tracking-wide">Let's Talk</span>
            </button>
          </div>
        </div>

        {/* Right Column: Code Widget */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="hidden sm:block absolute -top-8 lg:-top-12 right-0 md:right-4 w-40 lg:w-48 h-28 lg:h-32 bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl p-6 shadow-2xl z-0 transform translate-x-4 -translate-y-4 animate-float">
             <div className="text-lg lg:text-xl font-bold text-slate-900 dark:text-slate-200 mb-1">Refined</div>
             <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold">Modules</div>
          </div>

          <div className="relative z-10 w-full max-w-[540px] bg-white dark:bg-[#050a16] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center gap-1.5 px-6 py-4 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800/50">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              </div>
              <div className="ml-auto flex items-center gap-2 opacity-40">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-[0.1em] flex items-center gap-1.5">
                   <Terminal className="w-2.5 h-2.5" /> BASH
                </span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 font-mono text-xs sm:text-[13px] leading-6 text-slate-600 dark:text-slate-400 overflow-x-auto">
              <CodeLine>
                <span className="text-blue-600 dark:text-blue-400">const</span>
                <span className="text-slate-900 dark:text-blue-200">engineer</span>
                <span className="text-slate-400 dark:text-slate-600">=</span>
                <span className="text-slate-400 dark:text-slate-500">{'{'}</span>
              </CodeLine>
              
              <CodeLine indent={1}>
                <span className="text-slate-500 dark:text-slate-500">name:</span>
                <span className="text-emerald-600 dark:text-emerald-400">"Sebastian Canadinha-DeLima"</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
              </CodeLine>
              
              <CodeLine indent={1}>
                <span className="text-slate-500 dark:text-slate-500">role:</span>
                <span className="text-emerald-600 dark:text-emerald-400">"UI Section Specialist"</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-slate-500 dark:text-slate-500">stack:</span>
                <span className="text-slate-300 dark:text-slate-700">[</span>
                <span className="text-emerald-600 dark:text-emerald-400">"HTML"</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
                <span className="text-emerald-600 dark:text-emerald-400">"Tailwind"</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
                <span className="text-emerald-600 dark:text-emerald-400">"React"</span>
                <span className="text-slate-300 dark:text-slate-700">]</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-slate-500 dark:text-slate-500">skills:</span>
                <span className="text-slate-300 dark:text-slate-700">{'{'}</span>
              </CodeLine>
              <CodeLine indent={2}>
                <span className="text-slate-500 dark:text-slate-500">design:</span>
                <span className="text-emerald-600 dark:text-emerald-400">"Modular Systems"</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
              </CodeLine>
              <CodeLine indent={2}>
                <span className="text-slate-500 dark:text-slate-500">web:</span>
                <span className="text-emerald-600 dark:text-emerald-400">"High Perf UI"</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
              </CodeLine>
              <CodeLine indent={2}>
                <span className="text-slate-500 dark:text-slate-500">responsive:</span>
                <span className="text-emerald-600 dark:text-emerald-400">"Fluid Layouts"</span>
              </CodeLine>
              <CodeLine indent={1}>
                <span className="text-slate-300 dark:text-slate-700">{'}'}</span>
                <span className="text-slate-300 dark:text-slate-700">,</span>
              </CodeLine>
              
              <CodeLine indent={1}>
                <span className="text-slate-500 dark:text-slate-500">mission:</span>
                <span className="text-emerald-600 dark:text-emerald-400">"Crafting modular excellence"</span>
              </CodeLine>
              
              <CodeLine>
                <span className="text-slate-400 dark:text-slate-500">{'};'}</span>
              </CodeLine>
              
              <div className="mt-4">
                <CodeLine>
                  <span className="text-slate-900 dark:text-blue-200">engineer</span>
                  <span className="text-slate-400">.</span>
                  <span className="text-blue-600 dark:text-blue-400">ignite</span>
                  <span className="text-slate-400">()</span>
                  <span className="text-slate-400">;</span>
                </CodeLine>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
      `}</style>
    </section>
  );
};