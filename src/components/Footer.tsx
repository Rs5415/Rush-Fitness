import React from 'react';
import { GymBusinessInfo } from '../data/gymData';
import { RushLogo } from './RushLogo';

interface FooterProps {
  gymInfo: GymBusinessInfo;
  onOpenDemoChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ gymInfo, onOpenDemoChecklist }) => {
  return (
    <footer className="bg-[#0A0A0A] text-[#A0A0A0] border-t border-[#1F1F1F] pt-20 pb-28 md:pb-16">
      {/* <!-- DEMO VERSION — CONTENT SUBJECT TO CLIENT APPROVAL --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1F1F1F]">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <RushLogo className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-[#888888] leading-relaxed max-w-sm mb-6">
              A premier unisex fitness centre situated at Romi Complex in Bompas Town, Deoghar. Dedicated to providing a disciplined, welcoming training space for personal strength, muscle conditioning, and everyday active health.
            </p>
            <div className="text-xs text-[#666666]">
              UPI Accepted: Google Pay, PhonePe, Paytm, BHIM, Cards & Cash
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs font-semibold uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About RUSH</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">Membership</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Col */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white block mb-6">
              DEOGHAR BRANCH
            </span>
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#666666] uppercase font-bold tracking-wider block mb-1">
                  LOCATION
                </span>
                <p className="text-white font-medium">
                  {gymInfo.complex}, {gymInfo.area},<br />
                  {gymInfo.city}, {gymInfo.state} {gymInfo.pincode}
                </p>
              </div>

              <div>
                <span className="text-[#666666] uppercase font-bold tracking-wider block mb-1">
                  PHONE & WHATSAPP
                </span>
                <a
                  href={`tel:${gymInfo.phoneRaw}`}
                  className="text-white font-bold hover:text-[#E50914] transition-colors"
                >
                  {gymInfo.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-[#666666] uppercase font-bold tracking-wider block mb-1">
                  TIMINGS
                </span>
                <p className="text-white font-medium">
                  {gymInfo.hoursDays} • 5:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555555]">
          <div>
            © {new Date().getFullYear()} RUSH Fitness. All rights reserved. Romi Complex, Bompas Town, Deoghar.
          </div>
          <div className="flex items-center gap-4">
            <span>DEMO VERSION — CONTENT SUBJECT TO CLIENT APPROVAL</span>
            <button
              onClick={onOpenDemoChecklist}
              className="text-[#888888] hover:text-white underline cursor-pointer"
            >
              Launch Checklist
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
