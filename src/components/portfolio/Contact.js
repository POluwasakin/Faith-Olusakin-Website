import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact({ config, theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo. In a live site, this would send an email to " + config.email);
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold italic mb-6">Let&apos;s <span style={{ color: theme.primary }}>Connect</span></h2>
          <p className="max-w-2xl mx-auto opacity-70 text-lg">
            Ready to scale your Shopify store or build something curated from scratch? Reach out below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-stone-100 italic">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-50" style={{ color: theme.primary }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{config.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-50" style={{ color: theme.primary }}>
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>{config.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-stone-900 text-white italic">
              <p className="opacity-80 leading-relaxed uppercase tracking-widest text-xs font-bold mb-2">Available for</p>
              <p className="text-lg">Shopify Themes, Store Migrations, and Bespoke Frontend Projects.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white shadow-xl border border-stone-100 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Name</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-stone-300 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Email</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-stone-300 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Message</label>
              <textarea 
                required 
                rows="4" 
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-stone-300 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn-vintage w-full flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
