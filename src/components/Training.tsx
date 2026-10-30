import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TrainingProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const Training: React.FC<TrainingProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="training" className="py-20 sm:py-28 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Guidance Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
              <span className="w-6 h-[2px] bg-red-600"></span>
              <span>COACHING & SUPERVISION</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              TRAIN WITH PURPOSE.
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Proper lifting mechanics and structured training programs make all the difference between frustration and steady, injury-free progress. At RUSH Fitness, members can enquire about dedicated training guidance and personalized fitness support suited to their individual baseline.
              </p>
              <p className="text-neutral-400">
                Whether you need assistance setting up equipment, mastering foundational barbell compound lifts, or planning a balanced routine that fits around your job or college hours, our gym floor trainers provide practical assistance.
              </p>
            </div>

            {/* Practical value points - Clean editorial styling */}
            <div className="space-y-4 mb-8">
              <div className="border-l-2 border-red-600 pl-4 py-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Form Correction & Safe Machine Setup
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Learn proper posture on squats, bench press, deadlifts, and cable rows to protect joints and maximize strength.
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-4 py-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Indian Diet & Nutrition Advice
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Realistic meal guidance incorporating vegetarian protein (Paneer, Soya, Dal, Sprouts) as well as egg and lean meat options suited to home cooking.
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-4 py-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Dedicated Personal Coaching (1-on-1)
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Enquire about private trainer slots for accelerated fat loss, wedding prep, or intense muscle building.
                </p>
              </div>
            </div>

            {/* Prompt Required CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry("Personal Training & Coaching Guidance")}
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-heading text-xs uppercase tracking-wider font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/50 transition-all cursor-pointer"
              >
                <span>ENQUIRE ABOUT TRAINING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Floor guidance card */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#121216] border border-neutral-800 shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-neutral-800">
                <span className="text-[11px] font-bold tracking-widest uppercase text-red-500 block mb-1">
                  RUSH FITNESS COACHING
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                  TRAINERS ON THE FLOOR
                </h3>
              </div>

              <div className="space-y-4 text-xs text-neutral-300 leading-relaxed mb-6">
                <div>
                  <h5 className="font-bold text-white uppercase mb-1">
                    Beginner Friendly Floor Orientation
                  </h5>
                  <p className="text-neutral-400">
                    New to the gym? Our instructors help you get started on Day 1 with an initial walkthrough of machines, weights, and stretching routines.
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80">
                  <h5 className="font-bold text-white uppercase mb-1">
                    Home-Cooked Diet Planning
                  </h5>
                  <p className="text-neutral-400">
                    Nutrition advice tailored to everyday Indian household eating habits without complicated or expensive food restrictions.
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80">
                  <h5 className="font-bold text-white uppercase mb-1">
                    Meet Coaches In Person
                  </h5>
                  <p className="text-neutral-400">
                    Visit Romi Complex in Bompas Town to meet our coaching staff directly on the floor and discuss your preferred training hours.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onOpenEnquiry("Personal Training Consultation")}
                  className="text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                >
                  Ask About Trainer Availability & Slots →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
