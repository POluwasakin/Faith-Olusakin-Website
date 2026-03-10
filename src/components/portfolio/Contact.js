import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact({ config, theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo. In a live site, this would send an email to " + config.email);
  };

  return (
    <section id="contact" className="py-32" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Let&apos;s <span className="opacity-40">Connect</span></h2>
          <div className="h-px w-12 bg-stone-300 mx-auto opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30">Inquiries</h3>
              <div className="space-y-8">
                <div className="group">
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-20 mb-2">Digital Mail</p>
                  <a href={`mailto:${config.email}`} className="text-lg font-serif italic hover:opacity-100 opacity-60 transition-opacity">{config.email}</a>
                </div>
                <div className="group">
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-20 mb-2">Direct Line</p>
                  <p className="text-lg font-serif italic opacity-60">{config.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-stone-200">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20 mb-4">Availability</p>
              <p className="text-sm font-light leading-relaxed opacity-50 italic">
                Accepting select Shopify projects & bespoke frontend collaborations for 2024.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <input 
                type="text" 
                required 
                className="w-full px-0 py-4 bg-transparent border-b border-stone-300 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300 font-light"
                placeholder="Name"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                required 
                className="w-full px-0 py-4 bg-transparent border-b border-stone-300 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300 font-light"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <textarea 
                required 
                rows="3" 
                className="w-full px-0 py-4 bg-transparent border-b border-stone-300 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300 font-light resize-none"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b-2 border-stone-900 transition-all hover:opacity-60 pt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
