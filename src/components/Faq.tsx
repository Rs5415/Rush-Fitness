import React, { useState } from 'react';
import { gymFaqs, FaqItem, GymBusinessInfo } from '../data/gymData';
import { ChevronDown, Phone } from 'lucide-react';

interface FaqProps {
  gymInfo: GymBusinessInfo;
  onOpenEnquiry: () => void;
}

export const Faq: React.FC<FaqProps> = ({ gymInfo, onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
            <span className="w-6 h-[2px] bg-red-600"></span>
            <span>QUESTIONS & ANSWERS</span>
            <span className="w-6 h-[2px] bg-red-600"></span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Essential facts about timings, batches, unisex environment, and location at RUSH Fitness Deoghar.
          </p>
        </div>

        {/* FAQ Accordion List (the 6 required questions) */}
        <div className="space-y-4">
          {gymFaqs.map((item: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="gym-card rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide block">
                      {item.question}
                    </span>
                    <span className="text-xs text-red-400 font-medium mt-0.5 block">
                      {item.hindiQ}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-red-500 border-red-500' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#121216] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
              Have another question?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Our front desk at Romi Complex, Bompas Town is available to answer your queries.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${gymInfo.phoneRaw}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs uppercase tracking-wider font-bold text-white bg-neutral-900 border border-neutral-700 hover:border-neutral-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-xl font-heading text-xs uppercase tracking-wider font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-md cursor-pointer"
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
