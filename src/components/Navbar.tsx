import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';
import { RushLogo } from './RushLogo';

interface NavbarProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: (planName?: string) => void;
  onOpenDemoChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ gymInfo, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'MEMBERSHIP', href: '#membership' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Gym Logo */}
        <a
          href="#home"
          className="flex items-center focus:outline-none"
          aria-label="RUSH FITNESS GYM"
        >
          <RushLogo className="h-10 sm:h-12 w-auto object-contain" />
        </a>

        {/* Customer-First Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-xs font-semibold uppercase tracking-widest text-[#A0A0A0] hover:text-white transition-colors py-2 relative"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA: JOIN NOW */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-2.5 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            JOIN NOW
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#E50914] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#1F1F1F] px-6 py-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-bold uppercase tracking-widest text-[#A0A0A0] hover:text-white py-2 border-b border-[#1A1A1A]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
