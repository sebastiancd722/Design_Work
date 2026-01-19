import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS, CATEGORY_ICONS } from '../constants';
import { ArrowUpRight, Github, X, ExternalLink, Info } from 'lucide-react';
import { Project } from '../types';

export const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'AI' | 'Design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalMounted, setIsModalMounted] = useState(false);
  
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const categories: ('All' | 'Web' | 'Mobile' | 'AI' | 'Design')[] = ['All', 'Web', 'Mobile', 'AI', 'Design'];

  const closeModal = useCallback(() => {
    setIsModalMounted(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => setIsModalMounted(true), 10);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Selected Works</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Exploring the intersection of performance, aesthetics, and user experience through production-grade applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-1 lg:flex-none px-4 lg:px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all ${filter === cat ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center">
          {filtered.map((project) => (
            <button 
              key={project.id} 
              onClick={() => openModal(project)}
              className="group flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl w-full max-w-[450px] mx-auto h-[450px] md:h-[490px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1"
              aria-label={`View details for ${project.title}`}
            >
              <div className="h-[200px] md:h-[240px] w-full relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white shadow-xl">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-3">
                  {CATEGORY_ICONS[project.category]}
                  {project.category}
                </div>
                
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded text-[9px] text-slate-500 dark:text-slate-400 font-bold tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#020617]/95 backdrop-blur-md transition-opacity duration-300 ${isModalMounted ? 'opacity-100' : 'opacity-0'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={closeModal}
        >
          <div 
            className={`relative w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col transition-all duration-300 border border-slate-200 dark:border-slate-800 ${isModalMounted ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all z-20 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
                {/* Left side: Imagery and Summary */}
                <div>
                  <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-10 border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-950">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-600">Technical Notes</h4>
                    <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-4">
                      <Info className="w-5 h-5 text-blue-500 shrink-0" />
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        {selectedProject.notes || 'No specific technical notes available for this work.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side: Factual Details */}
                <div className="flex flex-col">
                  <div className="mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4">
                      {CATEGORY_ICONS[selectedProject.category]}
                      {selectedProject.category}
                    </div>
                    <h3 id="project-modal-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.bullets && (
                    <div className="mb-8 md:mb-10">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-600 mb-6">Core Focus</h4>
                      <ul className="space-y-4">
                        {selectedProject.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 text-xs md:text-sm flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600/40 dark:bg-blue-500/30 border border-blue-500/50 shrink-0"></div>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.contributions && (
                    <div className="mb-10">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-600 mb-6">Role Contributions</h4>
                      <ul className="space-y-4">
                        {selectedProject.contributions.map((item, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 text-xs md:text-sm flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-emerald-500/20 border border-emerald-500/40 shrink-0 rotate-45"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-8 md:pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm transition-all hover:scale-105 active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Preview
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};