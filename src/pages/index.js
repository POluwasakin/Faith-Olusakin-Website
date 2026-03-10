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
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen selection:bg-rose-200">
        {/* Navigation Bar */}
        <nav 
          className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
            isScrolled ? 'py-4 bg-white/90 backdrop-blur-md' : 'py-10'
          }`}
        >
          <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
            <a href="#home" className="text-lg font-serif italic tracking-tighter opacity-80">
              Faith<span className="opacity-20">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 hover:opacity-100 transition-opacity">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="text-[9px] font-bold uppercase tracking-[0.4em] border border-stone-900 px-6 py-2.5 rounded-full hover:bg-stone-900 hover:text-white transition-all">
                Hire
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Nav Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-stone-100 p-8 flex flex-col gap-6 text-center animate-fade-in-up shadow-xl">
              {navItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="text-lg font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
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
