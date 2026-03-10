import React from 'react';

export default function Footer({ config, theme, socialLinks, navItems }) {
  return (
    <footer className="py-24 border-t border-stone-100" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
          <div className="col-span-1">
            <h3 className="text-xl font-serif italic mb-6 tracking-tight">{config.name}</h3>
            <p className="max-w-xs text-sm font-light leading-relaxed opacity-40 italic">
              Building meaningful digital experiences for brands with a vision.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-20">Navigation</h4>
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-xs font-medium opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-20">Connect</h4>
            <ul className="space-y-4">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest flex items-center gap-2">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${config.email}`} className="text-xs font-medium opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">Email</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-50 text-center text-[9px] font-bold uppercase tracking-[0.5em] opacity-20">
          © {new Date().getFullYear()} {config.name}. Founder of Dola&apos;s Collection.
        </div>
      </div>
    </footer>
  );
}
