import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { 
  Users, 
  Maximize2, 
  Eye, 
  Wifi, 
  Sparkles, 
  Check, 
  Star, 
  Calendar, 
  ShieldCheck, 
  Coffee, 
  Wine, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface RoomDetailPageProps {
  roomId: string;
  onNavigate: (view: string) => void;
  onOpenRoomBooking: (roomId: string) => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({
  roomId,
  onNavigate,
  onOpenRoomBooking
}) => {
  const room = ROOMS.find(r => r.id === roomId) || ROOMS[0];
  const [selectedImg, setSelectedImg] = useState(room.images[0]);

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-6">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-transparent py-4 px-4 sm:px-8 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto flex items-center gap-2 font-light">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1E293B] transition-colors">Accueil</button>
          <span>&gt;</span>
          <button onClick={() => onNavigate('rooms')} className="hover:text-[#1E293B] transition-colors">Chambres</button>
          <span>&gt;</span>
          <span className="text-[#111827] font-semibold">{room.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE6DE] pb-4">
          <div>
            <h1 className="font-serif text-3xl font-bold tracking-wide text-[#111827] uppercase">
              {room.title}
            </h1>
            <span className="text-xs text-gray-500 block pt-0.5">À partir de {room.price.toLocaleString('fr-MG')} Ar/nuit</span>
          </div>

          <div className="flex text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-3">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-[#EAE6DE] shadow-sm">
            <img
              src={selectedImg || room.images[0]}
              alt={room.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-3">
            {room.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(img)}
                className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImg === img ? 'border-[#1E293B] shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Key Features Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 bg-white p-4 rounded-2xl border border-[#EAE6DE] text-xs text-center shadow-sm">
          <div className="p-1 flex flex-col items-center gap-1">
            <Users className="w-4 h-4 text-[#111827]" />
            <span className="font-medium text-gray-700">{room.capacity} personnes</span>
          </div>
          <div className="p-1 flex flex-col items-center gap-1">
            <Maximize2 className="w-4 h-4 text-[#111827]" />
            <span className="font-medium text-gray-700">{room.surface} m²</span>
          </div>
          <div className="p-1 flex flex-col items-center gap-1">
            <Eye className="w-4 h-4 text-[#111827]" />
            <span className="font-medium text-gray-700">{room.view}</span>
          </div>
          <div className="p-1 flex flex-col items-center gap-1">
            <Sparkles className="w-4 h-4 text-[#111827]" />
            <span className="font-medium text-gray-700">Balcon privé</span>
          </div>
          <div className="p-1 flex flex-col items-center gap-1">
            <Coffee className="w-4 h-4 text-[#111827]" />
            <span className="font-medium text-gray-700">Salle de bain</span>
          </div>
          <div className="p-1 flex flex-col items-center gap-1">
            <Wifi className="w-4 h-4 text-[#111827]" />
            <span className="font-medium text-gray-700">Wi-Fi</span>
          </div>
        </div>

        {/* Details Content & Booking Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* À propos */}
            <div className="space-y-2 bg-white p-6 rounded-2xl border border-[#EAE6DE] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#111827]">
                À propos de la suite
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {room.fullDescription}
              </p>
            </div>

            {/* Équipements & Services */}
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#EAE6DE] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#111827]">
                Équipements & services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-3.5 h-3.5 text-[#1E293B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Booking Widget Sidebar */}
          <div className="lg:col-span-4 sticky top-24 bg-white border border-[#EAE6DE] rounded-2xl p-6 space-y-5 shadow-sm text-gray-800">
            <div>
              <h4 className="font-serif text-base font-bold text-[#111827] tracking-wider uppercase">
                VÉRIFIER LA DISPONIBILITÉ
              </h4>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 font-bold uppercase block">ARRIVÉE</label>
                  <input
                    type="text"
                    defaultValue="25 Mai 2025"
                    className="w-full bg-transparent border-b border-gray-200 py-1 text-xs font-medium text-gray-800"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 font-bold uppercase block">DÉPART</label>
                  <input
                    type="text"
                    defaultValue="28 Mai 2025"
                    className="w-full bg-transparent border-b border-gray-200 py-1 text-xs font-medium text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 font-bold uppercase block">ADULTES</label>
                  <select defaultValue="2" className="w-full bg-transparent border-b border-gray-200 py-1 text-xs font-medium text-gray-800">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 font-bold uppercase block">ENFANTS</label>
                  <select defaultValue="0" className="w-full bg-transparent border-b border-gray-200 py-1 text-xs font-medium text-gray-800">
                    <option value="0">0</option>
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenRoomBooking(room.id)}
              className="w-full bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider shadow-md transition-all text-center block"
            >
              RÉSERVER CETTE SUITE
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

