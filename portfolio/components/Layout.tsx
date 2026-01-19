import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Initialize state based on the class set by index.html script
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Showcase', href: '#showcase', id: 'showcase' },
    { name: 'UI Sections', href: '#ui-sections', id: 'ui-sections' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer for Active State
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 96;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${scrolled ? 'bg-white/90 dark:bg-[#020617]/90 backdrop-blur-xl py-5 border-b border-slate-200/50 dark:border-white/5 shadow-sm' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-[-0.05em] hover:opacity-70 transition-opacity">
          NOVA<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-all text-[11px] font-bold uppercase tracking-[0.2em] relative py-1 ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-px bg-blue-600 dark:bg-blue-400 transition-transform duration-500 origin-left ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-105 relative group overflow-hidden"
            aria-label="Toggle Theme"
          >
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                <Sun className="w-4 h-4" />
             </div>
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${!isDark ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`}>
                <Moon className="w-4 h-4" />
             </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 relative rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-white/5 overflow-hidden"
          >
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <Sun className="w-4 h-4" />
             </div>
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${!isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                <Moon className="w-4 h-4" />
             </div>
          </button>
          <button className="text-slate-900 dark:text-white p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-0 top-[73px] bg-white dark:bg-[#020617] transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-10 space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-5xl font-display font-bold tracking-tight ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-white dark:bg-[#020617] py-24 border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-[-0.05em]">
          NOVA<span className="text-blue-600">.</span>
        </div>
        
        <div className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em] text-center md:text-left">
          © {new Date().getFullYear()} — Sebastian Canadinha-DeLima
        </div>
        
        <div className="flex gap-8">
          {PERSONAL_INFO.socials.map(social => (
            <a key={social.name} href={social.url} className="text-slate-300 dark:text-slate-700 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(window.scrollY / scrollHeight);
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8 group">
      <div className="h-40 w-[3px] bg-slate-100 dark:bg-slate-900 relative rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full bg-blue-500 transition-transform duration-300 cubic-bezier(0.23, 1, 0.32, 1) origin-top shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          style={{ transform: `scaleY(${progress})` }}
        />
        {/* Glow bead at the leading edge */}
        <div 
          className="absolute left-0 w-full h-1 bg-white blur-[1px] transition-all duration-300 ease-out z-10"
          style={{ top: `${progress * 100}%` }}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] font-mono font-bold text-slate-300 dark:text-slate-700">
          {Math.round(progress * 100).toString().padStart(2, '0')}
        </span>
        <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  );
};

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-10 right-10 z-40 p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) hover:scale-110 active:scale-95 rounded-2xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};