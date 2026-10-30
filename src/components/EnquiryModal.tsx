import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  gymInfo: GymBusinessInfo;
  initialTopic?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  gymInfo,
  initialTopic,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState(initialTopic || 'Strength & Weight Training');
  const [preferredBatch, setPreferredBatch] = useState('Morning Batch (6:00 AM – 9:00 AM)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMsg('');
    const code = `RF-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(code);
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*RUSH Fitness Deoghar — Membership Enquiry*%0A*Name:* ${encodeURIComponent(fullName || 'Guest')}%0A*Mobile:* ${encodeURIComponent(phoneNumber || 'Not provided')}%0A*Goal:* ${encodeURIComponent(fitnessGoal)}%0A*Batch:* ${encodeURIComponent(preferredBatch)}%0A*Location:* Romi Complex, Bompas Town`;
    window.open(`https://wa.me/${gymInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] border border-[#262626] w-full max-w-lg overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="p-6 bg-[#0E0E0E] border-b border-[#222222] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914] block">
              ADMISSION & VISIT
            </span>
            <h3 className="font-heading text-2xl text-white uppercase tracking-wider mt-0.5">
              ENQUIRE WITH RUSH FITNESS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#888888] hover:text-white border border-[#2E2E2E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-none bg-[#E50914]/20 border border-[#E50914] text-[#E50914] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50914] block mb-1">
                ENQUIRY REGISTERED
              </span>
              <h4 className="font-heading text-3xl text-white uppercase mb-2">
                THANK YOU, {fullName}!
              </h4>
              <p className="text-xs text-[#A0A0A0] max-w-sm mx-auto mb-4 leading-relaxed">
                Your admission request has been sent to the front desk at Romi Complex. We will reach you shortly on WhatsApp or call at <strong className="text-white">+91 {phoneNumber}</strong>.
              </p>

              <div className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-white mb-6 inline-block">
                Reference: {refCode}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Send to WhatsApp
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] text-[#A0A0A0] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 bg-red-950/80 border border-red-800 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  Full Name <span className="text-[#E50914]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#171717] border border-[#2E2E2E] focus:border-[#E50914] text-white text-sm outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  Mobile Number (WhatsApp) <span className="text-[#E50914]">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-[#222222] border border-r-0 border-[#2E2E2E] text-xs font-semibold text-[#A0A0A0]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={12}
                    className="w-full px-4 py-3 bg-[#171717] border border-[#2E2E2E] focus:border-[#E50914] text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  Training Goal / Focus
                </label>
                <select
                  value={fitnessGoal}
                  onChange={(e) => setFitnessGoal(e.target.value)}
                  className="w-full px-4 py-3 bg-[#171717] border border-[#2E2E2E] focus:border-[#E50914] text-white text-sm outline-none transition-colors cursor-pointer"
                >
                  <option value="Strength & Weight Training">Strength & Weight Training</option>
                  <option value="Fat Loss & Cardio Conditioning">Fat Loss & Cardio Conditioning</option>
                  <option value="Functional Fitness & Agility">Functional Fitness & Agility</option>
                  <option value="Personal Training (1-on-1)">Personal Training (1-on-1)</option>
                  <option value="General Health for Working Professionals">General Health & Fitness</option>
                </select>
              </div>

              {/* Preferred Batch */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  Preferred Batch Timing
                </label>
                <select
                  value={preferredBatch}
                  onChange={(e) => setPreferredBatch(e.target.value)}
                  className="w-full px-4 py-3 bg-[#171717] border border-[#2E2E2E] focus:border-[#E50914] text-white text-sm outline-none transition-colors cursor-pointer"
                >
                  <option value="Early Morning (5:00 AM – 7:30 AM)">Early Morning (5:00 AM – 7:30 AM)</option>
                  <option value="Morning (7:30 AM – 10:00 AM)">Morning (7:30 AM – 10:00 AM)</option>
                  <option value="Evening (4:00 PM – 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
                  <option value="Night (7:30 PM – 11:00 PM)">Night (7:30 PM – 11:00 PM)</option>
                  <option value="Flexible / Any Time">Flexible / Any Time</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SUBMIT ENQUIRY</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] hover:border-emerald-500 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>DIRECT WHATSAPP CHAT</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
