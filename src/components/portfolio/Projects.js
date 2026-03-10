import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects({ projects, theme }) {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-24 animate-fade-in">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 block mb-6 px-4">Portfolio Archive</span>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Selected <span className="opacity-40">Projects</span></h2>
          <div className="h-px w-16 bg-stone-300 mx-auto opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col items-start animate-fade-in">
              <div className="w-full aspect-[16/10] bg-stone-100/50 border border-stone-200/50 overflow-hidden mb-8 transition-all duration-700 hover:border-stone-300">
                <div className="w-full h-full flex items-center justify-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000">
                  <project.Icon className="w-12 h-12 stroke-[1]" />
                </div>
              </div>
              
              <div className="w-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif italic">{project.title}</h3>
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="opacity-20 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 opacity-30 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest border-b border-stone-300 pb-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
