import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';

interface MobileActionBarProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ gymInfo, onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A0A0A] border-t border-[#1F1F1F] px-3 py-2.5 flex items-center gap-2">
      {/* CALL BUTTON */}
      <a
        href={`tel:${gymInfo.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#171717] hover:bg-[#222222] border border-[#262626] text-white text-xs font-bold uppercase tracking-wider text-center"
      >
        <Phone className="w-3.5 h-3.5 text-[#E50914]" />
        <span>CALL</span>
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${gymInfo.whatsappNumber}?text=Namaste%20RUSH%20Fitness%2C%20I%20want%20to%20enquire%20about%20membership.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#171717] hover:bg-[#222222] border border-[#262626] text-white text-xs font-bold uppercase tracking-wider text-center"
      >
        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
        <span>WHATSAPP</span>
      </a>

      {/* JOIN NOW BUTTON */}
      <button
        onClick={onOpenEnquiry}
        className="flex-1.2 py-3 px-4 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-wider text-center cursor-pointer shadow-md"
      >
        JOIN NOW
      </button>
    </div>
  );
};
