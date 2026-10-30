import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
  gridSpan: string; // Tailwind grid span for magazine rhythm
  height: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Magazine-style asymmetric visual rhythm
  const galleryItems: GalleryImage[] = [
    {
      id: '1',
      title: 'HEAVY DUMBBELL RACK & BARBELL PLATFORMS',
      category: 'FREE WEIGHTS',
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85',
      gridSpan: 'lg:col-span-8',
      height: 'h-[360px] sm:h-[440px]',
    },
    {
      id: '2',
      title: 'FOCUSED COMPOUND TRAINING',
      category: 'STRENGTH',
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85',
      gridSpan: 'lg:col-span-4',
      height: 'h-[360px] sm:h-[440px]',
    },
    {
      id: '3',
      title: 'CARDIO LINES & CONDITIONING',
      category: 'ENDURANCE',
      src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85',
      gridSpan: 'lg:col-span-4',
      height: 'h-[320px] sm:h-[380px]',
    },
    {
      id: '4',
      title: 'FUNCTIONAL MOVEMENT & AGILITY FLOOR',
      category: 'FUNCTIONAL',
      src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
      gridSpan: 'lg:col-span-4',
      height: 'h-[320px] sm:h-[380px]',
    },
    {
      id: '5',
      title: 'ISOLATION CABLE SYSTEMS & PULLEYS',
      category: 'RESISTANCE',
      src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85',
      gridSpan: 'lg:col-span-4',
      height: 'h-[320px] sm:h-[380px]',
    },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-[#1F1F1F] pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E50914] block mb-2">
              VISUAL ENVIRONMENT
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white font-normal uppercase tracking-wide">
              GYM GALLERY
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm max-w-md">
            An inside look at the equipment, workout atmosphere, and training energy at RUSH Fitness Deoghar.
          </p>
        </div>

        {/* Magazine-Style Asymmetric Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`relative ${item.gridSpan} ${item.height} overflow-hidden border border-[#222222] bg-[#141414] group cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-85 contrast-110 group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Caption Overlay on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50914] block mb-1">
                    {item.category}
                  </span>
                  <div className="font-heading text-xl text-white uppercase tracking-wide">
                    {item.title}
                  </div>
                </div>
                <div className="p-2 border border-white/20 text-white bg-black/60">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#222222] text-xs">
                <div>
                  <span className="text-[#E50914] font-bold uppercase tracking-widest block">
                    {selectedImage.category}
                  </span>
                  <h4 className="font-heading text-xl text-white uppercase mt-0.5">
                    {selectedImage.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 text-[#A0A0A0] hover:text-white border border-[#333333] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 flex-1 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain border border-[#222222]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
