import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X } from 'lucide-react';

// Components
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import DolaSection from '@/components/portfolio/DolaSection';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

// Data
import { 
  siteConfig, 
  themeColors, 
  navItems, 
  socialLinks, 
  dolaLinks, 
  skills, 
  softSkills, 
  allProjects 
} from '@/data/portfolioData';

export default function FaithPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = themeColors.vintage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Intersection Observer for scroll animations
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="min-h-screen selection:bg-rose-200">
        {/* Navigation Bar */}
        <nav 
          className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
            isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-8'
          }`}
        >
          <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold tracking-tighter italic">
              Faith<span style={{ color: theme.primary }}>.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="nav-link text-sm uppercase tracking-widest">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-vintage px-6 py-2.5 text-xs">
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 relative z-[110]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Premium Mobile Nav Overlay */}
          <div 
            className={`lg:hidden fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-xl z-[100] transition-all duration-700 ease-in-out ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
          >
            <div className="flex flex-col h-full pt-40 px-8">
              <div className="space-y-8 mb-20">
                {navItems.map((item, idx) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    className={`block text-5xl font-serif italic tracking-tighter transition-all duration-700 delay-[${idx * 100}ms] ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {item.label}<span style={{ color: theme.primary }} className="opacity-0 group-hover:opacity-100">.</span>
                  </a>
                ))}
              </div>

              <div className={`mt-auto mb-12 transition-all duration-1000 delay-500 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 mb-6 font-sans">Get in Touch</p>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.email}`} className="block text-lg font-light italic">{siteConfig.email}</a>
                  <a href={`tel:${siteConfig.phone}`} className="block text-lg font-light italic">{siteConfig.phone}</a>
                </div>

                <div className="flex gap-6 mt-10">
                  {socialLinks.slice(0, 4).map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-stone-200"
                    >
                      <link.Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Hero config={siteConfig} theme={theme} />
          <About config={siteConfig} theme={theme} socialLinks={socialLinks} />
          <Skills skills={skills} theme={theme} />
          <Projects projects={allProjects} theme={theme} />
          <DolaSection theme={theme} links={dolaLinks} />
          <Contact config={siteConfig} theme={theme} />
        </main>

        <Footer 
          config={siteConfig} 
          theme={theme} 
          socialLinks={socialLinks} 
          navItems={navItems} 
        />
      </div>
    </>
  );
}
