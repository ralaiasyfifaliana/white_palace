import React, { useState } from 'react';
import { X, Play, Volume2, VolumeX, Sparkles, Trees, Eye, Film } from 'lucide-react';
import { HERO_LODGE_IMAGE, LEMUR_IMAGE, SUITE_LAGON_IMAGE, GOURMET_DINING_IMAGE } from '../data/hotelData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: '1. Survol du Domaine & Lac', duration: '0:45', image: HERO_LODGE_IMAGE },
    { title: '2. Suites & Villas d\'Exception', duration: '1:12', image: SUITE_LAGON_IMAGE },
    { title: '3. Faune & Lémuriens Indri', duration: '2:05', image: LEMUR_IMAGE },
    { title: '4. Haute Gastronomie & Chef', duration: '1:30', image: GOURMET_DINING_IMAGE },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0A0F1C] border border-amber-400/40 rounded-xl max-w-4xl w-full text-amber-50 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#051411] px-6 py-3 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-amber-400" />
            <span className="font-serif text-sm font-bold tracking-widest uppercase text-amber-100">
              IMMERSION VIDÉO â Ar” WHITE PALACE LUXURY RESORT
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full bg-slate-950 hover:bg-slate-800 text-emerald-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player Canvas */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src={chapters[activeChapter].image}
            alt="Virtual tour frame"
            className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 filter brightness-90' : 'brightness-75'}`}
            referrerPolicy="no-referrer"
          />

          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-amber-500/20 backdrop-blur border border-amber-400/40 rounded text-[10px] uppercase tracking-widest text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>4K ULTRA HD • IMMERSION TROPICALE</span>
              </span>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>

            {/* Center Play/Pause button */}
            <div className="self-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-amber-500/30 hover:bg-amber-500/50 border-2 border-amber-400 text-amber-200 flex items-center justify-center transition-all hover:scale-110 shadow-2xl backdrop-blur-sm"
              >
                {isPlaying ? <span className="w-4 h-4 bg-amber-200 rounded-xs" /> : <Play className="w-7 h-7 ml-1 text-amber-200 fill-amber-200" />}
              </button>
            </div>

            {/* Bottom player controls */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-amber-200">
                <span className="font-semibold">{chapters[activeChapter].title}</span>
                <span className="text-[10px] text-emerald-300">{chapters[activeChapter].duration}</span>
              </div>
              <div className="w-full bg-slate-950/80 rounded-full h-1 overflow-hidden border border-slate-800/40">
                <div className={`h-full bg-gradient-to-r from-amber-500 to-amber-300 ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Chapters selection */}
        <div className="p-4 bg-[#0A0F1C] border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3">
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveChapter(idx);
                setIsPlaying(true);
              }}
              className={`p-2 rounded-lg border text-left text-xs transition-all flex items-center gap-2 ${
                activeChapter === idx
                  ? 'bg-amber-950/50 border-amber-400 text-amber-200 ring-1 ring-amber-400/30'
                  : 'bg-slate-950/40 border-slate-800/60 text-emerald-300 hover:bg-slate-900/40'
              }`}
            >
              <img
                src={chap.image}
                alt={chap.title}
                className="w-10 h-8 object-cover rounded border border-slate-700"
                referrerPolicy="no-referrer"
              />
              <div className="truncate">
                <span className="block font-medium truncate text-[11px]">{chap.title}</span>
                <span className="text-[9px] text-emerald-400">{chap.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

