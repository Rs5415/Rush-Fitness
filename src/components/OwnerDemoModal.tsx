import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  Phone, 
  Clock, 
  MapPin, 
  RotateCcw,
  Sparkles,
  ClipboardCheck,
  Check
} from 'lucide-react';
import { GymBusinessInfo, clientLaunchChecklist, initialGymInfo } from '../data/gymData';
import { RushLogo } from './RushLogo';

interface OwnerDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  gymInfo: GymBusinessInfo;
  onUpdateGymInfo: (updated: Partial<GymBusinessInfo>) => void;
  onResetGymInfo: () => void;
}

export const OwnerDemoModal: React.FC<OwnerDemoModalProps> = ({
  isOpen,
  onClose,
  gymInfo,
  onUpdateGymInfo,
  onResetGymInfo,
}) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'editor'>('checklist');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summary = `RUSH FITNESS WEBSITE DEMO — LAUNCH BRIEF
Business Name: ${gymInfo.name}
Tagline: ${gymInfo.tagline}
Address: ${gymInfo.fullAddress}
Phone: ${gymInfo.phoneDisplay}
Hours: ${gymInfo.hoursDays} (${gymInfo.hoursDisplay})
WhatsApp: https://wa.me/${gymInfo.whatsappNumber}
Status: Demo presented to gym owner. Content subject to client approval.`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#121217] border border-neutral-700/80 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
          <div className="flex items-center gap-4">
            <RushLogo className="h-10 w-auto" />
            <div className="border-l border-neutral-800 pl-3">
              <span className="text-xs uppercase font-bold tracking-widest text-red-500">
                CLIENT PRESENTATION TOOLKIT
              </span>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                RUSH Fitness Demo & Launch Control
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-neutral-800 bg-[#0e0e13]">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-red-600 text-white bg-neutral-900/50'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <ClipboardCheck className="w-4 h-4 text-red-500" />
            <span>Launch Sign-off Checklist (12 Items)</span>
          </button>
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'editor'
                ? 'border-red-600 text-white bg-neutral-900/50'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>Live Quick-Edit Test</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'checklist' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                <p className="font-semibold text-white mb-1">
                  DEMO VERSION — CONTENT SUBJECT TO CLIENT APPROVAL
                </p>
                <p className="text-neutral-400">
                  This checklist tracks all items that must be reviewed, confirmed, or supplied by RUSH Fitness management before the website goes officially live for public members.
                </p>
              </div>

              <div className="divide-y divide-neutral-800/80 rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden">
                {clientLaunchChecklist.map((item, index) => (
                  <div key={index} className="p-3.5 flex items-start justify-between gap-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-neutral-500 mt-0.5">{String(index + 1).padStart(2, '0')}.</span>
                      <div>
                        <span className="font-semibold text-white block">{item.item}</span>
                        <span className="text-[11px] text-neutral-400">{item.status}</span>
                      </div>
                    </div>
                    <div>
                      {item.needsOwner ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Owner Review Req.</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <CheckCircle className="w-3 h-3" />
                          <span>Configured</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                You can test updating contact details below. Any change updates the website across the hero, footer, contact sections, and call links in real-time.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Phone Display Number
                  </label>
                  <input
                    type="text"
                    value={gymInfo.phoneDisplay}
                    onChange={(e) => onUpdateGymInfo({ phoneDisplay: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Phone Raw Dial Link
                  </label>
                  <input
                    type="text"
                    value={gymInfo.phoneRaw}
                    onChange={(e) => onUpdateGymInfo({ phoneRaw: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Operating Hours
                  </label>
                  <input
                    type="text"
                    value={gymInfo.hoursDisplay}
                    onChange={(e) => onUpdateGymInfo({ hoursDisplay: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Operating Days
                  </label>
                  <input
                    type="text"
                    value={gymInfo.hoursDays}
                    onChange={(e) => onUpdateGymInfo({ hoursDays: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Full Address
                  </label>
                  <input
                    type="text"
                    value={gymInfo.fullAddress}
                    onChange={(e) => onUpdateGymInfo({ fullAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={onResetGymInfo}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Original Demo Data</span>
                </button>
                <span className="text-[11px] text-neutral-500">Live preview active</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-900/60 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <ClipboardCheck className="w-4 h-4 text-red-500" />}
            <span>{copied ? 'Summary Copied!' : 'Copy Demo Summary'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-heading text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 transition-colors"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  );
};
