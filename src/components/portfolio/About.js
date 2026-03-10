import React from 'react';
import { FaUpwork } from "react-icons/fa6";

export default function About({ config, theme, socialLinks }) {
  return (
    <section id="about" className="py-32" style={{ backgroundColor: theme.bgMuted }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1 w-full max-w-sm">
            <div className="relative group">
              <div className="absolute -inset-2 border border-stone-200 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-1000" />
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/50 shadow-sm">
                <img 
                  src={config.profileImg} 
                  alt={config.name} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-10 leading-tight">Meet <span className="opacity-40">Faith Olusakin</span></h2>
            <div className="space-y-8 text-lg font-light leading-relaxed opacity-50 italic">
              <p>
                A specialist in the Shopify ecosystem with over four years of experience crafting high-performance digital stores.
              </p>
              <p>
                My approach blends technical precision with a conversion-first mindset, ensuring every brand I partner with is positioned for meaningful growth.
              </p>
              <p>
                As the mind behind Dola&apos;s Collection, I bring a unique merchant-led perspective to every project—understanding the delicate balance between design and operability.
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
                    <FaUpwork className="w-5 h-5 fill-[#60d600]" />
                  ) : label === "Twitter" || label === "X" ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z"/>
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
          </div>
        </div>
      </div>
    </section>
  );
}
