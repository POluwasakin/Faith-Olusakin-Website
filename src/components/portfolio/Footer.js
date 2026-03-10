import React from 'react';

export default function Footer({ config, theme, socialLinks, navItems }) {
  return (
    <footer className="py-20" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold italic mb-6">{config.name}</h3>
            <p className="max-w-sm opacity-60 leading-relaxed">
              Curating premium Shopify experiences and bespoke frontend solutions for brands that demand excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Navigate</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:opacity-60 transition-opacity">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Socials</h4>
            <ul className="space-y-3">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] opacity-30">
          <p>© {new Date().getFullYear()} {config.name}. Founder of Dola Fashion Collections.</p>
          <p>Built by <a href="https://praise-oluwasakin-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 underline decoration-dotted">Praise Oluwasakin</a></p>
        </div>
      </div>
    </footer>
  );
}
