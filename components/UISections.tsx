import React from 'react';

const CinematicHero = () => {
  return (
    <div className="relative w-full min-h-[600px] lg:h-[750px] h-auto rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group isolate bg-[#020617] text-white selection:bg-amber-200 selection:text-slate-950 transition-all duration-700 hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.15)] hover:border-amber-500/20 flex flex-col">
       {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.pexels.com/photos/29661264/pexels-photo-29661264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Background Ambience"
                className="w-full h-full object-cover animate-[subtle-drift_15s_infinite_ease-in-out] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center flex-grow py-16 lg:py-0">
            <div className="max-w-2xl">
               
                {/* Editorial Tag */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-amber-200/60 group-hover:w-20 transition-all duration-500"></div>
                    <span className="text-amber-100 text-xs font-semibold tracking-[0.3em] uppercase font-jakarta shadow-black drop-shadow-md">Elite Performance</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair text-white mb-8 leading-[0.9] tracking-tight drop-shadow-xl">
                    Defy <br/>
                    <span className="italic text-white/90">The Odds</span>
                </h1>

                <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-lg border-l border-white/20 pl-6 font-jakarta">
                    Forged for the visionary. Designed for the player who demands precision in every move and power in every moment. Your legacy begins here.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button className="group/btn px-8 py-4 bg-white text-slate-950 font-medium text-sm tracking-widest uppercase hover:bg-amber-50 transition-colors duration-300 flex items-center justify-center gap-3 font-jakarta">
                        Start Playing
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                   
                    <button className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm font-jakarta">
                        Player Profile
                    </button>
                </div>
            </div>
        </div>
        
        {/* Caption */}
        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-20 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-amber-100 font-jakarta transition-colors">Cinematic Hero</span>
        </div>
    </div>
  );
};

export const UISections = () => {
  return (
    <section id="ui-sections" className="py-24 bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
       <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">UI Sections</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                Full-width section components designed for impact and immersive storytelling.
            </p>
          </div>
          
          <div className="space-y-12">
             <div className="space-y-6">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 pl-2 border-l-2 border-blue-500">Hero Section</h3>
                 <CinematicHero />
             </div>
          </div>
       </div>
    </section>
  )
}