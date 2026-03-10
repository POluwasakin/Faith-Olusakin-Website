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

      <div className="mx-auto max-w-4xl px-6 relative z-10 w-full text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-stone-100 mb-16 shadow-sm animate-fade-in">
          <Sparkles className="w-3 h-3 opacity-40" />
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-40">Shopify Expert & Frontend Architect</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-medium leading-[1.1] tracking-tighter mb-12 font-serif italic text-stone-800">
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Refining</span>
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s', color: theme.primary }}>Digital</span>
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Experiences<span className="opacity-20">.</span></span>
        </h1>
        
        <div className="max-w-xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-50 mb-10 italic">
            Building conversion-focused Shopify stores with a meticulous approach to design and performance.
          </p>
          <div className="h-px w-16 bg-stone-200 mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="group py-4 px-10 text-[10px] font-bold tracking-[0.3em] uppercase bg-stone-900 text-white hover:bg-stone-800 transition-all rounded-full">
            Inquire Now
          </a>
          <a href="#projects" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:opacity-100 opacity-30 transition-all border-b border-transparent hover:border-stone-900 pb-2">
            The Work
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
