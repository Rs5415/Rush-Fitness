import React from 'react';
import { ArrowDown } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';
import { RushLogo } from './RushLogo';

interface HeroProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: (planName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ gymInfo, onOpenEnquiry }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-[94vh] flex items-center bg-[#0A0A0A] overflow-hidden">
      {/* Full-width professional gym photograph (no generic gradient background) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
          alt="RUSH Fitness Deoghar Gym Floor"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.15]"
        />
        {/* Subtle, natural vignette for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40"></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-4xl">
          {/* Logo / Brand Mark */}
          <div className="mb-6">
            <RushLogo className="h-14 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Subheading: UNISEX GYM • DEOGHAR */}
          <div className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#E50914] uppercase mb-4 flex items-center gap-2">
            <span>UNISEX GYM</span>
            <span className="text-[#A0A0A0]">•</span>
            <span className="text-[#FFFFFF]">DEOGHAR</span>
          </div>

          {/* Main Editorial Headline:
              TRAIN HARD.
              MOVE BETTER.
              BECOME STRONGER. */}
          <h1 className="font-heading text-6xl sm:text-8xl lg:text-9xl text-white font-normal uppercase tracking-wide leading-[0.92] mb-8">
            TRAIN HARD.<br />
            MOVE BETTER.<br />
            <span className="text-[#E50914]">BECOME STRONGER.</span>
          </h1>

          {/* Two Simple Buttons: JOIN NOW and EXPLORE SERVICES */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-8 py-4 bg-[#E50914] hover:bg-[#c90812] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              JOIN NOW
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="absolute bottom-6 right-8 hidden lg:flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#A0A0A0] uppercase">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3 h-3 text-[#E50914]" />
      </div>
    </section>
  );
};
