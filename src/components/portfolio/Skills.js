import React from 'react';

export default function Skills({ skills, theme }) {
  return (
    <section id="skills" className="py-32 bg-white relative">
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Technical <span className="opacity-40">Proficiencies</span></h2>
          <div className="h-px w-12 bg-stone-200 mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12">
          {skills.map((skill, idx) => (
            <div 
              key={skill.label}
              className="group flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div 
                className="w-10 h-10 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-30 group-hover:opacity-100"
                style={{ color: theme.palette[idx % theme.palette.length] }}
              >
                <skill.Icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
