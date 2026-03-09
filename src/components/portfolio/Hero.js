import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ config, theme }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: theme.primary }}
        />
        <div 
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: theme.accent }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-stone-200 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" style={{ color: theme.primary }} />
          <span className="text-sm font-semibold tracking-wide uppercase">Elite Shopify Expert</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter mb-8 animate-fade-in-up font-serif italic" style={{ animationDelay: '0.1s' }}>
          Launch. Grow. <br />
          <span style={{ color: theme.palette[0] }}>Scale.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-12 opacity-80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {config.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#contact" className="btn-vintage flex items-center gap-2 text-lg">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="text-lg font-semibold hover:opacity-70 transition-opacity">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
