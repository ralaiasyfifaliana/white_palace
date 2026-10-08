import React, { useState } from 'react';
import { GALLERY_ITEMS, HOTEL_EXTERIOR_IMAGE } from '../data/hotelData';
import { GalleryItem } from '../types';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { HeroWaveMask } from '../components/HeroWaveMask';
import { Reveal } from '../components/Reveal';
import {
  Camera,
  Image as ImageIcon,
  Building2,
  ArrowRight,
  X,
  ArrowLeft,
  ZoomIn,
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (view: string) => void;
  onOpenRoomBooking: () => void;
}

const CATEGORIES: { id: 'all' | GalleryItem['category']; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'hotel', label: 'Hôtel' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'experiences', label: 'Bien-être' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenRoomBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | GalleryItem['category']>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  return (
    <div className="relative overflow-hidden bg-[#F7FAF8] pt-20 sm:pt-24">
      {/* 1. HERO SECTION - FULL BLEED */}
      <section className="relative w-full h-auto md:h-[600px] lg:h-[650px] bg-white flex flex-col md:flex-row">
        <div className="w-full h-64 md:hidden relative">
          <img
            src={HOTEL_EXTERIOR_IMAGE}
            alt="Galerie White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src={HOTEL_EXTERIOR_IMAGE}
            alt="Galerie White Palace Hôtel"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="relative w-full md:w-[50%] lg:w-[45%] h-full bg-[#F7FAF8] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-12 md:py-0 z-10">
          <HeroWaveMask fill="#F7FAF8" />
          <BotanicalLeaf className="top-4 left-0 -translate-x-1/4 -z-10" opacity={0.22} />

          <Reveal className="space-y-6 relative z-10" delay={200}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4D6D63]">
              NOTRE GALERIE
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#233D34] leading-tight">
              Découvrez en images l'univers White Palace
            </h1>

            <p className="text-sm sm:text-base text-[#5A7268] leading-relaxed max-w-md">
              Plongez dans l'ambiance unique de notre hôtel à travers notre galerie photo.
              Découvrez nos chambres élégantes, notre restaurant en rooftop, nos espaces de détente et
              bien plus encore.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2EAE5] bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Camera className="w-4 h-4 text-[#233D34]" />
                </div>
                <span className="text-[10px] font-medium text-[#4D6D63] leading-tight">Photos<br />haute qualité</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2EAE5] bg-white shadow-sm flex items-center justify-center shrink-0">
                  <ImageIcon className="w-4 h-4 text-[#233D34]" />
                </div>
                <span className="text-[10px] font-medium text-[#4D6D63] leading-tight">Découverte<br />de nos espaces</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2EAE5] bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-[#233D34]" />
                </div>
                <span className="text-[10px] font-medium text-[#4D6D63] leading-tight">Un cadre unique<br />à Antananarivo</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={500} className="hidden md:block absolute top-[20%] right-[10%] transform -rotate-6 z-20 pointer-events-none">
          <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-4xl tracking-wide">
            Plus qu'un hôtel, une expérience !
          </span>
        </Reveal>
      </section>

      {/* 2. GALLERY FILTER & GRID */}
      <section className="py-16 sm:py-20 bg-[#F7FAF8] relative">
        <BotanicalLeaf className="bottom-8 right-0 translate-x-1/3" flip={true} opacity={0.15} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <Reveal className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition ${
                      isActive
                        ? 'bg-[#233D34] text-white shadow-sm'
                        : 'bg-[#EDF2EE] text-[#4D6D63] hover:bg-[#D8E4DC]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </Reveal>

            <Reveal delay={150} direction="left" className="font-script text-2xl text-[#233D34] shrink-0">
              "Des souvenirs à chaque instant"
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((photo, idx) => (
              <Reveal key={photo.id} delay={150 + (idx % 3) * 120} className="h-full">
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl aspect-[4/3] bg-gray-100 cursor-pointer border border-[#E2EAE5] transition-all duration-300"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#233D34] flex items-center justify-center shadow">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-medium flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{photo.title}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BANNER: VOTRE SÉJOUR EN IMAGES */}
      <section className="bg-[#233D34] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                VOTRE SÉJOUR EN IMAGES
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Envie de vivre cette expérience ?
              </h2>

              <p className="text-sm text-emerald-100/90 max-w-xl leading-relaxed">
                Toutes ces photos ne sont qu'un aperçu de ce qui vous attend. Venez vivre l'expérience
                White Palace Hôtel, au cœur d'Antananarivo.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenRoomBooking()}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white text-white hover:bg-white hover:text-[#233D34] text-xs font-semibold tracking-wider uppercase transition shadow-sm active:scale-95"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={200} direction="right" className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
              <span className="font-script text-2xl sm:text-3xl text-emerald-200">
                "Le luxe du confort, en plein cœur de Tananarive"
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="font-serif text-xl font-semibold">{selectedPhoto.title}</h4>
              <p className="text-xs text-emerald-300 max-w-md">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
