import React from 'react';

export default function About({ config, theme, socialLinks }) {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="/faith-profile.png" 
                alt={config.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic font-serif tracking-tight">Meet <span style={{ color: theme.palette[2] }}>Faith Olusakin</span></h2>
            <div className="space-y-6 text-lg leading-relaxed opacity-90">
              <p>
                I am a highly dedicated <strong>Elite Shopify Expert</strong> with over 4 years of real-world experience helping businesses launch, grow, and scale profitable Shopify stores.
              </p>
              <p>
                I don’t believe in “just building stores.” I build <strong>strategic, conversion-focused experiences</strong> that turn visitors into loyal customers. My background as a <strong>Frontend Developer</strong> allows me to push the boundaries of design and functionality where standard themes fall short.
              </p>
              <p>
                As the <strong>Founder of Dola&apos;f Fashion Collections</strong>, I understand the merchant&apos;s journey first-hand. I know what it takes to manage inventory, drive sales, and build a brand from the ground up. This unique perspective is what sets my work apart.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive p-3 rounded-full bg-white border border-stone-200 shadow-sm"
                  title={link.label}
                >
                  <link.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
