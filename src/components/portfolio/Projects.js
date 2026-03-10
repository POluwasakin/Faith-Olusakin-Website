import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects({ projects, theme }) {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest opacity-60">Curated Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 italic">Select <span style={{ color: theme.primary }}>Projects</span></h2>
          </div>
          <p className="max-w-md opacity-70">
            A showcase of premium Shopify stores and frontend solutions built for brands around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="card-vintage flex flex-col h-full animate-on-scroll">
              <div 
                className="w-12 h-12 mb-6 rounded-xl flex items-center justify-center bg-stone-100 shadow-inner transition-transform hover:scale-105" 
                style={{ color: theme.palette[idx % theme.palette.length] }}
              >
                <project.Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-stone-100 rounded opacity-60">
                    {tag}
                  </span>
                ))}
              </div>

              {project.url ? (
                <div className="mt-auto pt-6 border-t border-stone-100">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                    style={{ color: theme.primary }}
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <span className="mt-auto pt-6 border-t border-stone-100 text-xs italic opacity-40">
                  Confidential / Offline
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
