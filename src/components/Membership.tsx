import React from 'react';
import { GymBusinessInfo } from '../data/gymData';
import { MessageSquare } from 'lucide-react';

interface MembershipProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: (planName?: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ gymInfo, onOpenEnquiry }) => {
  return (
    <section id="membership" className="py-28 sm:py-36 bg-[#0A0A0A] border-t border-[#1F1F1F] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sub-label */}
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-4">
          JOIN RUSH FITNESS • DEOGHAR
        </span>

        {/* Prompt Mandated Heading */}
        <h2 className="font-heading text-6xl sm:text-8xl lg:text-9xl text-white font-normal uppercase tracking-wide leading-[0.92] mb-6">
          READY TO START?
        </h2>

        {/* Prompt Mandated Short Text */}
        <p className="text-base sm:text-xl text-[#A0A0A0] max-w-xl mx-auto leading-relaxed mb-10">
          Get in touch with RUSH Fitness and enquire about membership.
        </p>

        {/* Prompt Mandated Button: ENQUIRE NOW + WhatsApp secondary */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenEnquiry("General Membership Enquiry")}
            className="px-10 py-5 bg-[#E50914] hover:bg-[#c90812] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-lg shadow-red-950/50"
          >
            ENQUIRE NOW
          </button>

          <a
            href={`https://wa.me/${gymInfo.whatsappNumber}?text=Namaste%20RUSH%20Fitness%2C%20I%20want%20to%20enquire%20about%20gym%20membership%20at%20Bompas%20Town.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-5 bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

        {/* Concise Footnote */}
        <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-wrap items-center justify-center gap-6 text-xs text-[#666666]">
          <span>Unisex Fitness Centre</span>
          <span>•</span>
          <span>Flexible Morning & Evening Batches</span>
          <span>•</span>
          <span>UPI, Cards & Cash Accepted</span>
        </div>
      </div>
    </section>
  );
};
