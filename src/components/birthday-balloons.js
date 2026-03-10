"use client";
import React, { useEffect, useState } from "react";
import { Sparkles, Heart, X } from "lucide-react";

export default function BirthdaySurprise() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBirthday, setIsBirthday] = useState(false);
  const [shouldSow, setShouldShow] = useState(true);

  useEffect(() => {
    const today = new Date();
    // March is 2 (0-indexed)
    const isTodayTheBirthday = today.getMonth() === 2 && today.getDate() === 22;
    setIsBirthday(isTodayTheBirthday);

    if (isTodayTheBirthday) {
      setTimeout(() => setIsVisible(true), 1500); // Delayed entrance for higher impact
    }
  }, []);

  if (!isBirthday || !shouldSow) return null;

  const currentYear = new Date().getFullYear();
  const mainMessage = currentYear === 2026 ? "Happy Birthday Big Sis" : "Happy Birthday";

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Immersive Backdrop */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" />
      
      {/* Close Button */}
      <button 
        onClick={() => setShouldShow(false)}
        className="absolute top-10 right-10 z-[2001] text-white/50 hover:text-white transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Main Content Area */}
      <div className="relative z-[2001] text-center px-6 max-w-4xl animate-fade-in-up">
        {/* Animated Sparkles/Particles (Simplified for performance) */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-rose-400/20 blur-3xl animate-pulse" />
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/80 text-xs font-bold uppercase tracking-[0.3em]">
            <Sparkles className="w-4 h-4 text-amber-300" /> A special moment
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif italic text-white leading-tight tracking-tighter">
            {mainMessage}<span className="text-rose-400">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 font-light italic leading-relaxed max-w-2xl mx-auto">
            Wishing you a year filled with as much beauty and elegance as the stores you build.
          </p>

          <div className="pt-10 flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center animate-bounce shadow-xl">
              <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
              Courtesy Praise
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements (Orchestrated) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[2px] animate-float"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-100px) rotate(180deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
