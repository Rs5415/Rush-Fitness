import React from 'react';
import { GymBusinessInfo } from '../data/gymData';

interface AboutProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ gymInfo, onOpenEnquiry }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Editorial 50/50 Layout: Large Photo on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Gym Photograph */}
          <div className="lg:col-span-6">
            <div className="relative h-[440px] sm:h-[560px] w-full overflow-hidden border border-[#222222] bg-[#141414]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85"
                alt="RUSH Fitness Training Environment Deoghar"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
              />
              {/* Minimal caption tag */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/90 border border-[#262626] text-[10px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">
                ROMI COMPLEX • BOMPAS TOWN
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-3">
              ABOUT RUSH FITNESS
            </span>

            {/* Prompt Mandated Heading */}
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white font-normal uppercase tracking-wide leading-[0.92] mb-8">
              BUILT FOR PEOPLE WHO TRAIN.
            </h2>

            {/* Short and professional copy */}
            <div className="space-y-5 text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-8">
              <p>
                <strong className="text-white font-semibold">RUSH Fitness</strong> is a premier unisex fitness centre in Bompas Town, Deoghar, established to provide a dedicated, distraction-free environment for everyday lifters and serious athletes alike.
              </p>
              <p>
                We focus on high-utility strength stations, free weights, functional equipment, and personal guidance. No gimmicks—just a clean, respectful space equipped with power backup, chilled RO water, and knowledgeable floor support.
              </p>
            </div>

            {/* Concise Bullet Details */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#1F1F1F] mb-8 text-xs">
              <div>
                <span className="text-[#A0A0A0] uppercase font-bold tracking-wider block mb-1">
                  ENVIRONMENT
                </span>
                <span className="text-white font-medium">
                  100% Unisex & Respectful
                </span>
              </div>
              <div>
                <span className="text-[#A0A0A0] uppercase font-bold tracking-wider block mb-1">
                  TIMINGS
                </span>
                <span className="text-white font-medium">
                  5:00 AM – 11:00 PM (Mon–Sat)
                </span>
              </div>
              <div>
                <span className="text-[#A0A0A0] uppercase font-bold tracking-wider block mb-1">
                  LOCATION
                </span>
                <span className="text-white font-medium">
                  Romi Complex, Bompas Town
                </span>
              </div>
              <div>
                <span className="text-[#A0A0A0] uppercase font-bold tracking-wider block mb-1">
                  AMENITIES
                </span>
                <span className="text-white font-medium">
                  Full Power Backup & Parking
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-4 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                VISIT THE GYM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
