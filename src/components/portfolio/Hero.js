import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ config, theme }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ backgroundColor: theme.bg }}
    >
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden py-24"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Decorative Silk/Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content: Editorial Typography */}
          <div className="flex-1 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primary }} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Elite Shopify Expert</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 font-serif italic relative">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Design.</span>
              <span className="block animate-fade-in-up ml-12 md:ml-24" style={{ animationDelay: '0.2s', color: theme.palette[0] }}>Growth.</span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Scale<span style={{ color: theme.primary }}>.</span></span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed mb-12 opacity-80 border-l-2 border-stone-200 pl-8 ml-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {config.description}
            </p>

            <div className="flex flex-wrap items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a href="#contact" className="btn-vintage group py-4 px-10 flex items-center gap-4 text-sm tracking-widest uppercase">
                Let&apos;s Build <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-[0.3em] hover:opacity-100 opacity-40 transition-opacity border-b-2 border-transparent hover:border-stone-800 pb-1">
                Portfolio
              </a>
            </div>
          </div>

          {/* Right Content: Premium Image Composition */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="relative w-full max-w-[500px] mx-auto group">
              {/* Border Frame */}
              <div className="absolute -inset-4 border border-stone-200 rounded-[2.5rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={config.profileImg}
                  alt="Faith Olusakin"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:block animate-bounce-slow">
                <div className="text-center">
                  <p className="text-3xl font-serif italic mb-1">4+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </section>
  );
}
