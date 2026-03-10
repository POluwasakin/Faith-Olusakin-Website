import React from 'react';
import { ShoppingCart, Instagram, Facebook, Palette } from 'lucide-react';

export default function DolaSection({ theme, links }) {
  return (
    <section id="dola" className="py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 py-20 border-t border-stone-100 animate-fade-in">
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-8 opacity-40 italic font-serif text-[11px] uppercase tracking-[0.3em]">
              <ShoppingCart className="w-3 h-3" /> Founder of Dola&apos;s Collection
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif italic mb-10 leading-tight">
              Dola&apos;s <span className="opacity-40">Collection</span>
            </h2>
            
            <div className="text-lg font-light opacity-50 space-y-6 mb-12 max-w-xl italic">
              <p>
                Curated ladies&apos; footwear where style meets effortless comfort. 
                Rooted in Lagos, delivering elegance nationwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center">
              <a href={links.jumia} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] border-b border-stone-900 pb-2 hover:opacity-100 opacity-40 transition-all group">
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.115 17.647h-1.898V9.897L12 15.111l-3.217-5.214v7.75H6.885V6.353h1.898L12 11.567l3.217-5.214h1.898v11.294z"/>
                </svg>
                The Boutique
              </a>
              <div className="flex gap-6 opacity-20 hover:opacity-60 transition-opacity">
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={links.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative aspect-[4/5] max-w-[360px] mx-auto group">
              <div className="absolute -inset-4 border border-stone-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-1000" />
              <div className="relative h-full w-full bg-stone-50 overflow-hidden rounded-2xl border border-stone-200/50">
                 <img 
                   src="/dolasfashioncollectionlogo.webp" 
                   alt="Dola's Collection Logo" 
                   className="w-full h-full object-contain p-12 opacity-30 group-hover:opacity-0 transition-all duration-700"
                 />
                 <img 
                   src="/dolaf-shoes.png" 
                   alt="Ladies Shoes" 
                   className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-all duration-1000 scale-110 group-hover:scale-100"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
