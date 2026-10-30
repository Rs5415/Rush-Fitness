import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';

interface EnquiryFormProps {
  gymInfo: GymBusinessInfo;
  initialTopic?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ gymInfo, initialTopic }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('Muscle Building & Strength');
  const [preferredVisitTime, setPreferredVisitTime] = useState('Morning Batch (6:00 AM – 8:30 AM)');
  const [message, setMessage] = useState(initialTopic ? `Enquiry regarding: ${initialTopic}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const goalOptions = [
    'Muscle Building & Strength (मसल और ताकत)',
    'Weight Loss & Fat Burn (वजन घटाएं / फैट लॉस)',
    'General Fitness for Working Professionals',
    'Student Fitness & Conditioning',
    'Ladies Fitness & Toning',
    'Personal Training / 1-on-1 Guidance',
    'Other Fitness Enquiry',
  ];

  const timeOptions = [
    'Early Morning Batch (5:00 AM – 7:00 AM)',
    'Morning Batch (7:00 AM – 9:30 AM)',
    'Late Morning Batch (9:30 AM – 11:00 AM)',
    'Evening Batch (4:00 PM – 7:00 PM)',
    'Night Batch (7:00 PM – 10:30 PM)',
    'Flexible / Any Available Batch',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name (कृपया अपना नाम दर्ज करें).');
      return;
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number (कृपया 10-अंकों का वैध मोबाइल नंबर दर्ज करें).');
      return;
    }

    setErrorMsg('');
    const refCode = `RUSH-${Math.floor(100000 + Math.random() * 900000)}`;
    setEnquiryRef(refCode);
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*RUSH Fitness Deoghar — Admission Enquiry*%0A*Name:* ${encodeURIComponent(fullName || 'Guest')}%0A*Mobile:* ${encodeURIComponent(phoneNumber || 'Not provided')}%0A*Goal:* ${encodeURIComponent(fitnessGoal)}%0A*Batch Preference:* ${encodeURIComponent(preferredVisitTime)}%0A*Message:* ${encodeURIComponent(message || 'I would like to enquire about membership fees & gym visit at Romi Complex.')}`;
    window.open(`https://wa.me/${gymInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setMessage('');
    setErrorMsg('');
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
            <span className="w-6 h-[2px] bg-red-600"></span>
            <span>MEMBERSHIP & VISIT ENQUIRY</span>
            <span className="w-6 h-[2px] bg-red-600"></span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            START YOUR FITNESS JOURNEY
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch with RUSH Fitness at Romi Complex, Bompas Town. Our team will share current membership packages, batch timings, and assist your visit.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>This is an admission enquiry form. Membership is confirmed in person at our gym reception.</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-red-600/15 border border-red-500/40 text-red-500 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                Enquiry Received
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-1 mb-2">
                Thank You, {fullName}!
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto mb-4">
                We have registered your enquiry. Our team will call or WhatsApp you at <strong className="text-white">+91 {phoneNumber}</strong> regarding your gym visit.
              </p>

              <div className="p-3 bg-neutral-900 rounded-xl inline-block border border-neutral-800 mb-6 text-xs text-neutral-400">
                Enquiry Reference ID: <span className="font-mono text-white font-bold">{enquiryRef}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 border border-neutral-700 hover:border-emerald-500 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send copy to WhatsApp</span>
                </button>

                <a
                  href={`tel:${gymInfo.phoneRaw}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call Front Desk</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                >
                  New Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800/80 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name (पूरा नाम) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Phone Number with +91 indicator */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Mobile Number (मोबाइल नंबर) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-neutral-700 bg-neutral-800 text-neutral-300 text-sm font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={12}
                      className="w-full px-4 py-3 rounded-r-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    10-digit Indian mobile number for WhatsApp & calls
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Fitness Goal */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={fitnessGoal}
                    onChange={(e) => setFitnessGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                  >
                    {goalOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-neutral-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Visit Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Batch Time
                  </label>
                  <select
                    value={preferredVisitTime}
                    onChange={(e) => setPreferredVisitTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-neutral-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Message / Special Enquiries (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about personal training, student discounts, or visiting hours..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-heading text-xs uppercase tracking-wider font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/50 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND ENQUIRY</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-heading text-xs uppercase tracking-wider font-bold text-white bg-neutral-900 border border-neutral-700 hover:border-emerald-500 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-neutral-400">
                  Prefer direct phone call? Reach us anytime during open hours at{' '}
                  <a href={`tel:${gymInfo.phoneRaw}`} className="text-white hover:text-red-400 font-bold underline">
                    {gymInfo.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
