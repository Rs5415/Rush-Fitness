import React from 'react';
import { Phone, MessageSquare, Dumbbell } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';

interface MobileQuickBarProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ gymInfo, onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0d0d12]/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${gymInfo.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-100 active:bg-neutral-800 transition-colors min-h-[48px]"
          aria-label="Call RUSH Fitness"
        >
          <Phone className="w-5 h-5 text-red-500 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL NOW</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${gymInfo.whatsappNumber}?text=Hi%20RUSH%20Fitness%2C%20I%20would%20like%20to%20enquire%20about%20membership%20at%20your%20Deoghar%20branch.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 active:bg-emerald-900 transition-colors min-h-[48px]"
          aria-label="WhatsApp RUSH Fitness"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WHATSAPP</span>
        </a>

        {/* Enquire Button */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-600 text-white active:bg-red-700 shadow-md transition-colors min-h-[48px] cursor-pointer"
          aria-label="Open Membership Enquiry"
        >
          <Dumbbell className="w-5 h-5 text-white mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">ENQUIRE</span>
        </button>
      </div>
    </div>
  );
};
