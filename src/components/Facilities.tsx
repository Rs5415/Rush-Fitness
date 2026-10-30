import React from 'react';

interface FacilitiesProps {
  onOpenEnquiry: () => void;
}

interface FacilityZone {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colSpan: string;
  height: string;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenEnquiry }) => {
  const zones: FacilityZone[] = [
    {
      title: 'TRAINING FLOOR',
      subtitle: 'Main Workout Arena',
      description: 'Spacious main floor designed for open movement, functional circuits, kettlebells, and dynamic team conditioning.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85',
      colSpan: 'lg:col-span-8',
      height: 'h-[360px] sm:h-[460px]',
    },
    {
      title: 'STRENGTH AREA',
      subtitle: 'Heavy Resistance Zone',
      description: 'Squat racks, Olympic flat/incline benches, deadlift platforms, and dedicated pin-loaded muscle isolate stations.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85',
      colSpan: 'lg:col-span-4',
      height: 'h-[360px] sm:h-[460px]',
    },
    {
      title: 'CARDIO',
      subtitle: 'Endurance & Calorie Burn',
      description: 'Treadmills, elliptical trainers, and spin bikes positioned for high-energy conditioning and fat-burn sessions.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85',
      colSpan: 'lg:col-span-4',
      height: 'h-[320px] sm:h-[380px]',
    },
    {
      title: 'FREE WEIGHTS',
      subtitle: 'Heavy Dumbbells & Barbells',
      description: 'Comprehensive dumbbell rack ascending to heavy poundages, paired with multi-angle benches and rubber shock flooring.',
      image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1400&q=85',
      colSpan: 'lg:col-span-8',
      height: 'h-[320px] sm:h-[380px]',
    },
  ];

  return (
    <section id="facilities" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-[#1F1F1F] pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-2">
              EQUIPMENT & TRAINING ZONES
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white font-normal uppercase tracking-wide">
              FACILITIES
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm max-w-md">
            Four primary training sectors engineered for maximum workout efficiency, biomechanical safety, and athletic flow.
          </p>
        </div>

        {/* Large Visual Architectural Grid (NOT 6 generic cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {zones.map((zone) => (
            <div
              key={zone.title}
              className={`relative ${zone.colSpan} ${zone.height} overflow-hidden border border-[#222222] bg-[#141414] group`}
            >
              <img
                src={zone.image}
                alt={zone.title}
                className="w-full h-full object-cover object-center filter brightness-75 contrast-110 group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Zone Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914] mb-1">
                  {zone.subtitle}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal uppercase tracking-wider mb-2">
                  {zone.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-lg leading-relaxed">
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real photo notice & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#141414] border border-[#222222]">
          <p className="text-xs text-[#888888]">
            * Real facility photographs will be integrated upon final client verification at Romi Complex, Bompas Town.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex-shrink-0"
          >
            ENQUIRE ABOUT EQUIPMENT
          </button>
        </div>
      </div>
    </section>
  );
};
