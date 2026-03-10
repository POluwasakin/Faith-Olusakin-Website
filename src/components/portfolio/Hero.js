import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ config, theme }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Decorative Silk/Grain Effect */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: theme.primary }} />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-10" style={{ backgroundColor: theme.secondary }} />

      <div className="mx-auto max-w-5xl px-6 relative z-10 w-full text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-stone-100 mb-12 shadow-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primary }} />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Elite Shopify Expert & Frontend Architect</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-12 font-serif italic">
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Crafting</span>
          <span className="block animate-fade-in-up mt-2" style={{ animationDelay: '0.2s', color: theme.primary }}>Digital</span>
          <span className="block animate-fade-in-up mt-2" style={{ animationDelay: '0.3s' }}>Excellence<span style={{ color: theme.palette[1] }}>.</span></span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-70 mb-8 italic">
            Transforming ambitious visions into high-converting Shopify experiences.
          </p>
          <div className="h-px w-24 bg-stone-300 mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="btn-vintage group py-5 px-12 flex items-center gap-4 text-sm tracking-widest uppercase bg-stone-900 text-white hover:bg-stone-800 transition-all rounded-full">
            Start a Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
          <a href="#projects" className="text-xs font-bold uppercase tracking-[0.4em] hover:opacity-100 opacity-50 transition-all border-b border-transparent hover:border-stone-900 pb-2">
            View Work
          </a>
        </div>

        {/* Featured In / Trust Row */}
        <div className="mt-32 pt-16 border-t border-stone-100 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 mb-8">Trusted by Global Brands</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
            <span className="text-xl font-serif italic">Airofit</span>
            <span className="text-xl font-serif italic">Saint Aya</span>
            <span className="text-xl font-serif italic">Roros</span>
            <span className="text-xl font-serif italic">Biorevola</span>
          </div>
        </div>
      </div>

    </section>
  );
}
