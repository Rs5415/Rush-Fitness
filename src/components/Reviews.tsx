import React from 'react';
import { Star } from 'lucide-react';
import { GymBusinessInfo } from '../data/gymData';

interface ReviewsProps {
  gymInfo: GymBusinessInfo;
}

export const Reviews: React.FC<ReviewsProps> = ({ gymInfo }) => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
            <span className="w-6 h-[2px] bg-red-600"></span>
            <span>COMMUNITY & FEEDBACK</span>
            <span className="w-6 h-[2px] bg-red-600"></span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            WHAT MEMBERS SAY
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Real feedback from members training daily at RUSH Fitness, Romi Complex.
          </p>
        </div>

        {/* Demo Integrity Box (Prompt mandate: "Real customer reviews can be added after client approval.") */}
        <div className="max-w-2xl mx-auto p-7 sm:p-9 rounded-2xl bg-[#121216] border border-neutral-800 text-center">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-amber-500" />
            ))}
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide mb-2">
            Google Reviews & Member Feedback
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed mb-4">
            We value genuine member satisfaction. In accordance with honest business standards, no artificial reviews or fabricated ratings are displayed.
          </p>

          <div className="inline-block px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-medium">
            Real customer reviews can be added after client approval.
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-500">
            Google Business Profile reviews will be linked directly upon final client sign-off
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-neutral-500">
            Training at RUSH Fitness? We look forward to your feedback at our reception desk.
          </p>
        </div>
      </div>
    </section>
  );
};
