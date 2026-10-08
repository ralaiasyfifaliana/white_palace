import React, { useState } from 'react';
import { 
  X, 
  UtensilsCrossed, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Printer
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { TableBookingState } from '../types';

interface TableBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableBookingModal: React.FC<TableBookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [booking, setBooking] = useState<TableBookingState>({
    date: today,
    timeSlot: '19:30',
    guestsCount: 2,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: '',
    seatingArea: 'terrasse'
  });

  const timeSlots = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'TBL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#050A14] border border-slate-800/80 rounded-3xl max-w-lg w-full text-white shadow-2xl overflow-hidden my-auto relative">
        
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-slate-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="bg-[#0F172A] border-b border-slate-900/80 px-6 py-5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                RÉSERVER UNE TABLE
              </h3>
              <p className="text-[11px] text-amber-300/90 font-medium tracking-wider uppercase">
                Restaurant Gastronomique White Palace
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-900 text-gray-300 hover:text-white transition-all flex items-center justify-center border border-slate-800/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Date du repas</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Service Hour */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Heure de service</span>
                  </label>
                  <select
                    value={booking.timeSlot}
                    onChange={(e) => setBooking({ ...booking, timeSlot: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Guests */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Nombre de couverts</span>
                  </label>
                  <select
                    value={booking.guestsCount}
                    onChange={(e) => setBooking({ ...booking, guestsCount: Number(e.target.value) })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(num => (
                      <option key={num} value={num}>{num} Personne{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Seating preference */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Emplacement</span>
                  </label>
                  <select
                    value={booking.seatingArea}
                    onChange={(e) => setBooking({ ...booking, seatingArea: e.target.value as any })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="terrasse">Terrasse panoramique</option>
                    <option value="vue-lac">Bord du lac & flambeaux</option>
                    <option value="interieur">Salle intérieure feutrée</option>
                  </select>
                </div>
              </div>

              {/* Guest details */}
              <div className="space-y-3.5 pt-3 border-t border-slate-900/80">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Nom complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Sophie Bernard"
                    value={booking.customerName}
                    onChange={(e) => setBooking({ ...booking, customerName: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sophie@example.com"
                      value={booking.customerEmail}
                      onChange={(e) => setBooking({ ...booking, customerEmail: e.target.value })}
                      className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+261 34 00 000 00"
                      value={booking.customerPhone}
                      onChange={(e) => setBooking({ ...booking, customerPhone: e.target.value })}
                      className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Régime / Anniversaire / Allergies</label>
                  <textarea
                    rows={2}
                    placeholder="Précisez tout régime particulier ou occasion spéciale..."
                    value={booking.specialRequests}
                    onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-[1.02] transition-all"
                >
                  RÉSERVER MA TABLE
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-5 py-4 animate-fade-in">
              <div className="w-20 h-20 bg-amber-400/20 border-2 border-amber-400 rounded-full flex items-center justify-center mx-auto text-amber-300 shadow-2xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-amber-300 uppercase tracking-wider">
                TABLE RÉSERVÉE AVEC SUCCÈS !
              </h4>

              <div className="bg-[#0F172A] border border-amber-400/40 rounded-3xl p-6 text-left text-xs space-y-3 shadow-2xl">
                <div className="flex justify-between border-b border-slate-800/80 pb-3">
                  <span className="text-emerald-400 uppercase tracking-widest font-semibold">CODE RÉSERVATION</span>
                  <span className="font-mono font-bold text-amber-300 text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200/70">Nom:</span>
                  <span className="text-white font-medium">{booking.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200/70">Date & Heure:</span>
                  <span className="text-white font-medium">{booking.date} à {booking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200/70">Couverts:</span>
                  <span className="text-amber-200 font-medium">{booking.guestsCount} personne(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200/70">Emplacement:</span>
                  <span className="text-slate-200 font-medium uppercase">{booking.seatingArea}</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={() => window.print()}
                  className="bg-slate-900/80 hover:bg-slate-800 text-amber-200 border border-slate-700 text-xs px-5 py-3 rounded-full flex items-center gap-2 font-semibold"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimer</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-amber-400 hover:bg-amber-300 text-[#050A14] text-xs px-8 py-3 rounded-full font-bold uppercase tracking-wider shadow-xl"
                >
                  FERMER
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
