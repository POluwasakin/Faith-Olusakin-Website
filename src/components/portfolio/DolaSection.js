import React from 'react';
import { ShoppingCart, Instagram, Facebook, Palette } from 'lucide-react';

export default function DolaSection({ theme, links }) {
  return (
    <section id="dola" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="p-12 md:p-20 rounded-[3rem] bg-stone-50 border-[0.5px] border-stone-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          {/* Subtle logo placeholder background */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-stone-200/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full border border-stone-100 shadow-sm italic font-serif text-sm">
              <ShoppingCart className="w-4 h-4" style={{ color: theme.palette[1] }} /> Founder of Dola&apos;f Fashion
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Dola&apos;f Fashion <br /><span style={{ color: theme.primary }}>Collections</span>
            </h2>
            
            <div className="text-lg opacity-80 space-y-4 mb-10 max-w-xl">
              <p>
                Beautiful and affordable ladies&apos; shoes, carefully curated for style and comfort. 
                Based in <strong>Ketu-Ikosi, Lagos</strong>, we deliver excellence across Nigeria.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href={links.jumia} target="_blank" rel="noopener noreferrer" className="btn-vintage">Shop Jumia</a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white border border-stone-100 hover:shadow-lg transition-all" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white border border-stone-100 hover:shadow-lg transition-all" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Logo Display Area */}
            <div className="relative aspect-square max-w-[400px] mx-auto group">
              <div className="absolute inset-0 bg-stone-200 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
                 <img 
                   src="/dolasfashioncollectionlogo.webp" 
                   alt="Dola's Collection Logo" 
                   className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <img 
                src="/dolaf-shoes.png" 
                alt="Ladies Shoes" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest opacity-40 italic">Hover to see our collection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
