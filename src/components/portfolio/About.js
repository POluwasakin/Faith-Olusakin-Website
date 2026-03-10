import React from 'react';

export default function About({ config, theme, socialLinks }) {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-md">
            <div className="relative group">
              <div className="absolute -inset-4 border border-stone-200 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-700">
                <img 
                  src={config.profileImg} 
                  alt={config.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100">
                <div className="text-center">
                  <p className="text-3xl font-serif italic mb-1" style={{ color: theme.primary }}>4+</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-40">Years of Luxury Experience</p>
                </div>
              </div>
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
                As the <strong>Founder of Dola&apos;s Collection</strong>, I understand the merchant&apos;s journey first-hand. I know what it takes to manage inventory, drive sales, and build a brand from the ground up. This unique perspective is what sets my work apart.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive p-3 rounded-full bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all group"
                  title={label}
                >
                  {label === "Upwork" ? (
                    <svg className="w-5 h-5 fill-[#60d600]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.561 3.235c-2.49 0-4.386 1.397-5.032 3.688L12.13 11.53c-1.185-1.956-2.023-4.102-2.317-5.914H6.551v8.08c0 1.944 1.572 3.52 3.52 3.52.898 0 1.705-.336 2.324-.888l1.378-4.475c.9 2.22 2.68 3.55 4.88 3.55 2.492 0 4.398-1.574 4.398-4.185 0-2.612-1.906-4.185-4.4-4.185zM6.551 6.516v4.613c0 1.944 1.572 3.52 3.52 3.52.898 0 1.705-.336 2.324-.888l1.378-4.475C12.873 7.067 11.026 5.67 8.536 5.67c-2.008 0-3.52 1.512-3.52 3.52 0 .445.084.87.237 1.259l1.3 2.126-.002-6.059z"/>
                    </svg>
                  ) : label === "TikTok" ? (
                    <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.64-1.15 3.74-1.49 5.68-.88.01 1.34 0 2.68.01 4.02-1.14-.37-2.42-.18-3.42.52-.77.5-1.29 1.35-1.39 2.27-.12 1.52.92 2.94 2.34 3.32 1.25.33 2.67.1 3.61-.83.65-.63.99-1.52 1.05-2.42.04-4.8 0-9.6 0-14.4z"/>
                    </svg>
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
