import React from 'react';
import { GymBusinessInfo } from '../data/gymData';
import { Phone, MessageSquare, Navigation, ExternalLink } from 'lucide-react';

interface ContactProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: () => void;
}

export const Contact: React.FC<ContactProps> = ({ gymInfo }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 border-b border-[#1F1F1F] pb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-2">
            LOCATION & HOURS
          </span>
          <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white font-normal uppercase tracking-wide">
            CONTACT
          </h2>
        </div>

        {/* Clean Split Layout: LEFT (Details & Actions) | RIGHT (Google Maps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: RUSH FITNESS Details & 3 Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Gym Name & Kicker */}
              <h3 className="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wider mb-2">
                RUSH FITNESS
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E50914] mb-8">
                UNISEX GYM • BOMPAS TOWN, DEOGHAR
              </p>

              {/* Information Rows: Clean Editorial Typography */}
              <div className="space-y-6 mb-10 text-sm">
                {/* Address */}
                <div className="border-t border-[#1F1F1F] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A0A0A0] block mb-1">
                    ADDRESS
                  </span>
                  <p className="text-white font-semibold leading-relaxed">
                    {gymInfo.complex},<br />
                    {gymInfo.area},<br />
                    {gymInfo.city}, {gymInfo.state} {gymInfo.pincode}
                  </p>
                  <span className="text-xs text-[#666666] mt-1 block">
                    Convenient bike & car parking at Romi Complex
                  </span>
                </div>

                {/* Phone */}
                <div className="border-t border-[#1F1F1F] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A0A0A0] block mb-1">
                    PHONE
                  </span>
                  <a
                    href={`tel:${gymInfo.phoneRaw}`}
                    className="text-lg font-bold text-white hover:text-[#E50914] transition-colors"
                  >
                    {gymInfo.phoneDisplay}
                  </a>
                </div>

                {/* Opening Hours */}
                <div className="border-t border-[#1F1F1F] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A0A0A0] block mb-1">
                    OPENING HOURS
                  </span>
                  <p className="text-white font-semibold">
                    {gymInfo.hoursDays}
                  </p>
                  <p className="text-sm text-[#A0A0A0] mt-0.5">
                    5:00 AM – 11:00 PM
                  </p>
                  <span className="text-[11px] text-amber-500/80 mt-1 block">
                    (Verify before launch)
                  </span>
                </div>
              </div>
            </div>

            {/* Prompt Mandated Actions: CALL, WHATSAPP, GET DIRECTIONS */}
            <div className="pt-6 border-t border-[#1F1F1F] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${gymInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-4 px-4 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-widest text-center transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL</span>
                </a>

                <a
                  href={`https://wa.me/${gymInfo.whatsappNumber}?text=Namaste%20RUSH%20Fitness%2C%20I%20want%20to%20visit%20your%20gym%20at%20Romi%20Complex%2C%20Bompas%20Town.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-4 bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] hover:border-emerald-500 text-white text-xs font-bold uppercase tracking-widest text-center transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              <a
                href={gymInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] hover:border-white text-white text-xs font-bold uppercase tracking-widest text-center transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E50914]" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3 h-3 text-[#666666] ml-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: Embedded Google Maps */}
          <div className="lg:col-span-7 h-[420px] sm:h-[500px] border border-[#222222] bg-[#141414] overflow-hidden relative">
            <iframe
              title="RUSH Fitness Deoghar Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(gymInfo.googleMapsEmbedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(88%) contrast(110%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
