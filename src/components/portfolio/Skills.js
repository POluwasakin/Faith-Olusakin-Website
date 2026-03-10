import React from 'react';

export default function Skills({ skills, theme }) {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="mx-auto max-w-6xl px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Technical <span style={{ color: theme.primary }}>Expertise</span></h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div 
              key={skill.label}
              className="group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:border-stone-200 hover:shadow-xl transition-all duration-500 flex flex-col items-center"
            >
              <div 
                className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-inner"
                style={{ 
                  backgroundColor: `${theme.palette[idx % theme.palette.length]}15`, 
                  color: theme.palette[idx % theme.palette.length] 
                }}
              >
                <skill.Icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-lg">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
