import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const servicesList: ServiceItem[] = [
    {
      number: '01',
      title: 'STRENGTH TRAINING',
      tagline: 'Foundational power & structural resilience',
      description: 'Progressive barbell, dumbbell, and machine resistance training designed to develop genuine muscular strength and joint stability.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '02',
      title: 'WEIGHT TRAINING',
      tagline: 'Hypertrophy & muscle definition',
      description: 'Structured hypertrophy splits utilizing Olympic free weights, cable systems, and plate-loaded stations for total body development.',
      image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '03',
      title: 'CARDIO',
      tagline: 'Endurance, stamina & calorie burn',
      description: 'High-intensity and steady-state cardiovascular conditioning stations designed to boost heart health, lung capacity, and metabolic burn.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '04',
      title: 'FUNCTIONAL TRAINING',
      tagline: 'Everyday agility & athletic movement',
      description: 'Multi-planar movement routines, core stabilization, kettlebells, and dynamic bodyweight circuits that translate directly to daily energy.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '05',
      title: 'PERSONAL TRAINING',
      tagline: 'Dedicated 1-on-1 coaching & accountability',
      description: 'Customized exercise protocols, biomechanical form correction, and personalized pacing under close floor supervision.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '06',
      title: 'FITNESS GUIDANCE',
      tagline: 'Goal setting & practical lifestyle nutrition',
      description: 'Realistic routine planning and sustainable Indian dietary guidance suited to working professionals, students, and home life.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-[#1F1F1F] pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-2">
              DISCIPLINES & PROGRAMS
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white font-normal uppercase tracking-wide">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm max-w-md">
            Six disciplined training verticals engineered for personal strength, fat loss, muscle conditioning, and long-term health in Deoghar.
          </p>
        </div>

        {/* Editorial Split Layout: Numbered List on Left + Large Photography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Numbered Editorial Service Rows (NOT colorful floating cards) */}
          <div className="lg:col-span-7 divide-y divide-[#1F1F1F] border-t border-b border-[#1F1F1F]">
            {servicesList.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => onSelectService(item.title)}
                  className={`group py-6 sm:py-7 px-4 cursor-pointer transition-colors duration-200 ${
                    isActive ? 'bg-[#141414]' : 'hover:bg-[#121212]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-5 sm:gap-8">
                      {/* Monospaced Editorial Number */}
                      <span className="font-mono text-sm sm:text-base font-bold text-[#E50914] mt-1">
                        {item.number}
                      </span>

                      <div>
                        {/* Title: 01 — STRENGTH TRAINING */}
                        <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wider group-hover:text-[#E50914] transition-colors">
                          {item.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider font-semibold mt-1">
                          {item.tagline}
                        </p>

                        {/* Description (reveals with clean clarity) */}
                        <p className="text-sm text-[#888888] mt-2 max-w-xl leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Action */}
                    <div className="pt-1 flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-none border border-[#262626] group-hover:border-[#E50914] group-hover:bg-[#E50914] text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Large High-Resolution Gym Photograph (Sticky, Clean) */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative h-[560px] w-full overflow-hidden border border-[#222222] bg-[#121212]">
              <img
                src={servicesList[activeIdx].image}
                alt={servicesList[activeIdx].title}
                className="w-full h-full object-cover object-center filter brightness-85 contrast-110 transition-all duration-500 ease-out"
              />
              {/* Bottom Photo Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-1">
                  RUSH FITNESS DISCIPLINE {servicesList[activeIdx].number}
                </span>
                <div className="font-heading text-2xl text-white uppercase tracking-wide">
                  {servicesList[activeIdx].title}
                </div>
                <button
                  onClick={() => onSelectService(servicesList[activeIdx].title)}
                  className="mt-3 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E50914] underline transition-colors"
                >
                  Enquire About This Program →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
