import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Search, Sparkles, ArrowRight } from 'lucide-react';

interface HeroSearchProps {
  onSearch: (params: { checkIn: string; checkOut: string; adults: number; children: number; promoCode: string }) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch }) => {
  const [checkIn, setCheckIn] = useState('2025-05-25');
  const [checkOut, setCheckOut] = useState('2025-05-28');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ checkIn, checkOut, adults, children, promoCode: '' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-12 sm:-mt-16 relative z-20 px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-6 text-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center border border-[#EAE6DE]"
      >
        {/* Arrivée */}
        <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#EAE6DE] pb-3 sm:pb-0 sm:pr-4">
          <label className="text-[10px] font-bold tracking-[0.2em] text-[#1E293B] uppercase flex items-center gap-1.5">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>ARRIVÉE</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={checkIn === '2025-05-25' ? '25 Mai 2025' : checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent font-serif font-bold text-sm sm:text-base text-[#111827] focus:outline-none"
            />
          </div>
        </div>

        {/* Départ */}
        <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#EAE6DE] pb-3 sm:pb-0 sm:pr-4">
          <label className="text-[10px] font-bold tracking-[0.2em] text-[#1E293B] uppercase flex items-center gap-1.5">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>DÉPART</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={checkOut === '2025-05-28' ? '28 Mai 2025' : checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent font-serif font-bold text-sm sm:text-base text-[#111827] focus:outline-none"
            />
          </div>
        </div>

        {/* Adultes */}
        <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#EAE6DE] pb-3 sm:pb-0 sm:pr-4">
          <label className="text-[10px] font-bold tracking-[0.2em] text-[#1E293B] uppercase flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>ADULTES</span>
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full bg-transparent font-serif font-bold text-sm sm:text-base text-[#111827] focus:outline-none cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} Personne{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Enfants */}
        <div className="space-y-1.5 pb-3 sm:pb-0">
          <label className="text-[10px] font-bold tracking-[0.2em] text-[#1E293B] uppercase flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>ENFANTS</span>
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-full bg-transparent font-serif font-bold text-sm sm:text-base text-[#111827] focus:outline-none cursor-pointer"
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} Enfant{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 md:col-span-1">
          <button
            type="submit"
            className="w-full bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-[11px] py-4 px-3 rounded-2xl uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>RECHERCHER</span>
          </button>
        </div>
      </form>
    </div>
  );
};

