/**
 * RUSH FITNESS — Unisex Gym & Fitness Centre
 * Romi Complex, Bompas Town, Deoghar, Jharkhand 814114, India
 * 
 * Editorial, Modern Fitness Website
 * Black, White, Charcoal base with Power Red accent (#E50914)
 */

import React, { useState } from 'react';
import { initialGymInfo, GymBusinessInfo } from './data/gymData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Membership } from './components/Membership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { EnquiryModal } from './components/EnquiryModal';
import { OwnerDemoModal } from './components/OwnerDemoModal';

export default function App() {
  const [gymInfo, setGymInfo] = useState<GymBusinessInfo>(initialGymInfo);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleOpenEnquiry = (topic?: string) => {
    setSelectedTopic(topic || '');
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  const handleUpdateGymInfo = (updated: Partial<GymBusinessInfo>) => {
    setGymInfo(prev => ({ ...prev, ...updated }));
  };

  const handleResetGymInfo = () => {
    setGymInfo(initialGymInfo);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#E50914] selection:text-white pb-14 md:pb-0">
      {/* <!-- DEMO VERSION — CONTENT SUBJECT TO CLIENT APPROVAL --> */}

      {/* 1. Customer-First Navigation */}
      <Navbar
        gymInfo={gymInfo}
        onOpenEnquiry={handleOpenEnquiry}
        onOpenDemoChecklist={() => setIsDemoModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Full-width gym photograph, exact headline & 2 simple buttons */}
        <Hero
          gymInfo={gymInfo}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 3. Services: Front and Center ("WHAT WE DO" - Numbered editorial layout) */}
        <Services
          onSelectService={(serviceName) => handleOpenEnquiry(serviceName)}
        />

        {/* 4. About: Split 50/50 ("BUILT FOR PEOPLE WHO TRAIN.") */}
        <About
          gymInfo={gymInfo}
          onOpenEnquiry={() => handleOpenEnquiry("Gym Visit & Facility Tour")}
        />

        {/* 5. Facilities: Large visual grid (Training Floor, Strength Area, Cardio, Free Weights) */}
        <Facilities
          onOpenEnquiry={() => handleOpenEnquiry("Facility Equipment Enquiry")}
        />

        {/* 6. Gallery: Magazine-style asymmetric visual rhythm */}
        <Gallery />

        {/* 7. Membership: Simple conversion-focused ("READY TO START?", "ENQUIRE NOW") */}
        <Membership
          gymInfo={gymInfo}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 8. Contact: Clean split layout (LEFT details & 3 buttons, RIGHT Google Maps) */}
        <Contact
          gymInfo={gymInfo}
          onOpenEnquiry={() => handleOpenEnquiry("General Contact")}
        />
      </main>

      {/* 9. Editorial Footer */}
      <Footer
        gymInfo={gymInfo}
        onOpenDemoChecklist={() => setIsDemoModalOpen(true)}
      />

      {/* 10. Mobile Customer Action Bar (Fixed bottom: CALL, WHATSAPP, JOIN NOW) */}
      <MobileActionBar
        gymInfo={gymInfo}
        onOpenEnquiry={() => handleOpenEnquiry("Mobile Bar Join Now")}
      />

      {/* Sleek Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        gymInfo={gymInfo}
        initialTopic={selectedTopic}
      />

      {/* Owner Launch Control Drawer (Accessible from footer) */}
      <OwnerDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        gymInfo={gymInfo}
        onUpdateGymInfo={handleUpdateGymInfo}
        onResetGymInfo={handleResetGymInfo}
      />
    </div>
  );
}
