import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact({ config, theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mkoqjgar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Success Popup Modal */}
        {status === 'success' && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6 animate-fade-in">
            <div 
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
              onClick={() => setStatus('idle')}
            />
            <div className="relative bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-stone-50 text-stone-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-stone-100">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif italic mb-4">Message Received</h3>
              <p className="text-lg opacity-60 mb-10">
                Thank you for reaching out, Faith. Your message has been sent successfully.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="btn-vintage w-full"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

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

          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white shadow-xl border border-stone-100 space-y-6 relative">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                required 
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-stone-300 transition-colors disabled:opacity-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Email</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                required 
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-stone-300 transition-colors disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
                rows="4" 
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:border-stone-300 transition-colors resize-none disabled:opacity-50"
                placeholder="Tell me about your project..."
              />
            </div>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again or email me directly.</p>
            )}

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="btn-vintage w-full flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>Processing... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
              ) : (
                <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
