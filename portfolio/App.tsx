import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Footer, ScrollToTop, ScrollProgress } from './components/Layout';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { VisualShowcase } from './components/VisualShowcase';
import { UISections } from './components/UISections';
import { Skills } from './components/Skills';
import { PERSONAL_INFO } from './constants';
import { ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-32 scroll-mt-24 bg-white dark:bg-slate-950 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">Get in touch.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed max-w-md font-medium">
              I am currently open to collaborations and new opportunities. Reach out via email or any social platform.
            </p>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="group flex items-center gap-4 text-slate-900 dark:text-white text-xl font-bold hover:text-blue-600 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <Send className="w-5 h-5" />
                </div>
                <span className="group-hover:text-blue-500 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                  {PERSONAL_INFO.email}
                </span>
              </a>
            </div>
            
            <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800 flex gap-4">
              {PERSONAL_INFO.socials.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={`bg-slate-50/50 dark:bg-slate-900/30 p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-500 transition-all font-medium"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-500 transition-all font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] ml-1">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-500 transition-all font-medium"
                  placeholder="Message"
                />
              </div>
              
              <button className="w-full flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-5 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-50 hover:shadow-xl transition-all group">
                Send Message
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-500">
      <Navbar />
      <Hero />
      <Skills />
      <VisualShowcase />
      <UISections />
      <Experience />
      <Contact />
      <Footer />
      <ScrollProgress />
      <ScrollToTop />
    </div>
  );
};

export default App;