import React, { useState } from 'react';
import {
  Wifi,
  Sparkles,
  Bell,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Bed,
  Tv,
  Wind,
  Bath,
  GlassWater,
  Lock,
  Trees,
  Users,
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';

interface RoomsPageProps {
  onNavigate?: (view: string) => void;
  onOpenRoomDetail?: (roomId: string) => void;
  onOpenRoomBooking: (roomId?: string) => void;
}

interface RoomCategory {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  image: string;
  bed: string;
  price: string;
  priceNum: number;
  capacity: string;
  surface: string;
  description: string;
  images: string[];
  amenities: { icon: string; label: string }[];
}

const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'single',
    title: 'Single',
    subtitle: 'Confort et intimité',
    categoryTag: 'Chambre Single',
    image: '/nouvelles_photos/chambre_lit_1.jpg',
    bed: '1 lit simple',
    price: '136 000 Ar',
    priceNum: 136000,
    capacity: '1 personne',
    surface: '18 m²',
    description: "Chambre conçue pour les voyageurs seuls ou en déplacement professionnel. Alliant praticité et confort, elle offre un lit de qualité supérieure, un espace bureau et une salle de bain moderne privative.",
    images: [
      '/nouvelles_photos/chambre_lit_1.jpg',
      '/nouvelles_photos/chambre_lit_5.jpg',
      '/nouvelles_photos/coin_détente_1.jpg',
      '/nouvelles_photos/chambre_sallon_3.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit simple confortable' },
      { icon: 'tv', label: 'TV écran plat HD' },
      { icon: 'wifi', label: 'WiFi haut débit gratuit' },
      { icon: 'minibar', label: 'Mini bar approvisionné' },
      { icon: 'ac', label: 'Climatisation réversible' },
      { icon: 'safe', label: 'Coffre-fort sécurisé' },
      { icon: 'bath', label: 'Salle de bain privée' },
      { icon: 'view', label: 'Vue cour intérieure' },
    ],
  },
  {
    id: 'double',
    title: 'Double',
    subtitle: 'Confort et élégance',
    categoryTag: 'Chambre Double',
    image: '/nouvelles_photos/chambre_lit_2.jpg',
    bed: '1 lit double',
    price: '145 000 Ar',
    priceNum: 145000,
    capacity: '2 personnes',
    surface: '24 m²',
    description: "Idéale pour un séjour en couple ou entre amis, la chambre double allie confort moderne et ambiance chaleureuse. Profitez d'un espace spacieux, d'une literie de qualité et de toutes les commodités nécessaires pour un séjour agréable.",
    images: [
      '/nouvelles_photos/chambre_de_fond.jpg',
      '/nouvelles_photos/chambre_lit_2.jpg',
      '/nouvelles_photos/chambre_sallon_1.jpg',
      '/nouvelles_photos/chambre_sallon_2.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit double' },
      { icon: 'tv', label: 'TV écran plat' },
      { icon: 'wifi', label: 'WiFi gratuit' },
      { icon: 'minibar', label: 'Mini bar' },
      { icon: 'ac', label: 'Climatisation' },
      { icon: 'safe', label: 'Coffre-fort' },
      { icon: 'bath', label: 'Salle de bain privée' },
      { icon: 'view', label: 'Balcon / Vue jardin' },
    ],
  },
  {
    id: 'twin',
    title: 'Twin',
    subtitle: 'Espace et convivialité',
    categoryTag: 'Chambre Twin',
    image: '/nouvelles_photos/chambre_lit_3.jpg',
    bed: '2 lits simples',
    price: '135 000 Ar',
    priceNum: 135000,
    capacity: '2 personnes',
    surface: '26 m²',
    description: "Parfaitement agencée pour les collègues ou amis voyageant ensemble, la chambre twin dispose de deux lits jumeaux ergonomiques dans un cadre raffiné et lumineux.",
    images: [
      '/nouvelles_photos/chambre_lit_3.jpg',
      '/nouvelles_photos/chambre_lit_5.jpg',
      '/nouvelles_photos/chambre_sallon_3.jpg',
      '/nouvelles_photos/coin_détente_2.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '2 lits simples' },
      { icon: 'tv', label: 'TV écran plat' },
      { icon: 'wifi', label: 'WiFi gratuit' },
      { icon: 'minibar', label: 'Mini bar' },
      { icon: 'ac', label: 'Climatisation' },
      { icon: 'safe', label: 'Coffre-fort' },
      { icon: 'bath', label: 'Salle de bain privée' },
      { icon: 'view', label: 'Vue dégagée' },
    ],
  },
  {
    id: 'luxe',
    title: 'Luxe',
    subtitle: 'Raffinement & Sérénité',
    categoryTag: 'Chambre Luxe',
    image: '/nouvelles_photos/chambre_lit_4.jpg',
    bed: '1 lit king size',
    price: '256 000 Ar',
    priceNum: 256000,
    capacity: '2 personnes',
    surface: '32 m²',
    description: "Offrez-vous une expérience privilégiée avec nos chambres Luxe : finitions soignées, grand lit king size, peignoirs douillets et vue panoramique sur les toits d'Antananarivo.",
    images: [
      '/nouvelles_photos/chambre_lit_4.jpg',
      '/nouvelles_photos/chambre_de_fond.jpg',
      '/nouvelles_photos/chambre_sallon_4.jpg',
      '/nouvelles_photos/terrasse_1.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit king size' },
      { icon: 'tv', label: 'Smart TV grand écran' },
      { icon: 'wifi', label: 'WiFi ultra-rapide' },
      { icon: 'minibar', label: 'Mini bar premium' },
      { icon: 'ac', label: 'Climatisation silencieuse' },
      { icon: 'safe', label: 'Coffre-fort électronique' },
      { icon: 'bath', label: 'Baignoire & douche italienne' },
      { icon: 'view', label: 'Balcon panoramique' },
    ],
  },
  {
    id: 'appartement',
    title: 'Appartement',
    subtitle: 'Espace de vie d’exception',
    categoryTag: 'Suite Appartement',
    image: '/nouvelles_photos/chambre_sallon_1.jpg',
    bed: '1 lit king size + salon',
    price: '200 000 Ar',
    priceNum: 200000,
    capacity: '3 à 4 personnes',
    surface: '45 m²',
    description: "Véritable suite appartement comprenant une chambre séparée avec lit king size, un vaste salon de détente meublé, une kitchenette équipée et un service personnalisé 24h/24.",
    images: [
      '/nouvelles_photos/chambre_sallon_1.jpg',
      '/nouvelles_photos/chambre_sallon_2.jpg',
      '/nouvelles_photos/chambre_lit_4.jpg',
      '/nouvelles_photos/chambre_sallon_4.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit king size + salon' },
      { icon: 'tv', label: '2 TV écrans plats' },
      { icon: 'wifi', label: 'WiFi très haut débit' },
      { icon: 'minibar', label: 'Kitchenette & mini bar' },
      { icon: 'ac', label: 'Climatisation multi-zones' },
      { icon: 'safe', label: 'Coffre-fort' },
      { icon: 'bath', label: 'Grande salle de bain' },
      { icon: 'view', label: 'Terrasse privée' },
    ],
  },
];

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onOpenRoomDetail,
  onOpenRoomBooking,
}) => {
  // Active selected room for the detail focus showcase (defaults to Double as shown in mockup)
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(1);
  const selectedRoom = ROOM_CATEGORIES[selectedRoomIndex];

  // Thumbnail active preview inside the focus card
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  // Pagination for Categories Section (1 / 2)
  const [categoryPage, setCategoryPage] = useState(1);

  const handleSelectRoom = (index: number) => {
    setSelectedRoomIndex(index);
    setActiveThumbIndex(0);
    const el = document.getElementById('featured-room-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextThumb = () => {
    setActiveThumbIndex((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevThumb = () => {
    setActiveThumbIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length);
  };

  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'bed':
        return <Bed className="w-4 h-4 text-[#4D6D63]" />;
      case 'tv':
        return <Tv className="w-4 h-4 text-[#4D6D63]" />;
      case 'wifi':
        return <Wifi className="w-4 h-4 text-[#4D6D63]" />;
      case 'minibar':
        return <GlassWater className="w-4 h-4 text-[#4D6D63]" />;
      case 'ac':
        return <Wind className="w-4 h-4 text-[#4D6D63]" />;
      case 'safe':
        return <Lock className="w-4 h-4 text-[#4D6D63]" />;
      case 'bath':
        return <Bath className="w-4 h-4 text-[#4D6D63]" />;
      case 'view':
        return <Trees className="w-4 h-4 text-[#4D6D63]" />;
      default:
        return <Check className="w-4 h-4 text-[#4D6D63]" />;
    }
  };

  return (
    <div className="bg-[#F7FAF8] text-[#233D34] min-h-screen pt-20 sm:pt-24 space-y-16 sm:space-y-20 lg:space-y-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION (100% FULL WIDTH SANS MARGE) */}
      <section className="w-full relative bg-[#E3ECE7] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
          
          {/* Botanical leaf SVG exact from Accueil on the left edge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 w-14 sm:w-18 md:w-22 lg:w-26 xl:w-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="119.124 50 192 424"
              className="w-full h-auto block"
            >
              <path
                d="M 119.184 360.732 C 139.755 345.771 144.424 307.077 138.724 300.158 L 119.463 255.217 C 119.463 255.217 101.245 229.297 118.905 176.97 L 133.141 128.12 C 139.859 153.504 172.043 190.033 173.338 213.258 C 179.653 270.094 147.033 312.07 145.713 312.995 L 140.553 331.701 C 172.264 311.997 200.602 228.069 200.005 228.44 C 199.818 229.16 184.524 172.811 190.97 147.947 C 195.993 121.876 212.293 96.729 212.293 96.729 C 217.117 91.764 244.956 49.987 239.399 55.709 C 264.272 107.085 258.373 149.698 258.373 149.698 C 252.517 197.328 205.607 228.7 205.607 228.7 L 170.911 305.161 C 197.107 294.421 201.27 273.718 201.27 273.718 C 224.839 215.018 299.588 226.463 311.037 223.358 C 251.244 345.886 215.658 297.042 187.254 302.315 C 172.885 304.983 124.2 354.468 126.176 363.032 C 129.436 362.445 170.249 334.003 184.001 332.131 C 220.713 327.134 238.197 355.082 258.452 352.912 C 192.95 421.649 160.567 366.076 133.765 365.697 L 120.032 372.745"
                fill="#8EA99C"
                fillOpacity="0.55"
              />
              <path
                d="M 119.124 405.653 C 125.241 405.375 135.239 390.437 166.914 411.228 L 188.487 423.001 C 179.31 425.459 155.127 473.802 119.721 455.633"
                fill="#8EA99C"
                fillOpacity="0.55"
              />
            </svg>
          </div>

          {/* Left Column: Text & Features */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            {/* Kicker */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#5A7A6E] uppercase">
              NOS CHAMBRES
            </div>

            {/* Main Title - Uniformized Font */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-bold text-[#1E382F] leading-[1.08] tracking-tight">
              Des chambres élégantes<br />
              pour tous vos séjours
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-sm text-[#5A7268] font-light leading-relaxed max-w-[440px]">
              Découvrez nos 64 chambres, spacieuses et élégantes, parfaitement équipées pour un séjour agréable et reposant.
            </p>

            {/* 3 Amenities / Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-[460px]">
              <div className="flex flex-col items-start space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/80 text-[#2E4A40] flex items-center justify-center shadow-2xs">
                  <Wifi className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#2E4A40] font-medium leading-tight">
                  WiFi gratuit<br className="hidden sm:inline" /> dans toutes les chambres
                </span>
              </div>

              <div className="flex flex-col items-start space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/80 text-[#2E4A40] flex items-center justify-center shadow-2xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#2E4A40] font-medium leading-tight">
                  Service de ménage<br className="hidden sm:inline" /> quotidien
                </span>
              </div>

              <div className="flex flex-col items-start space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/80 text-[#2E4A40] flex items-center justify-center shadow-2xs">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#2E4A40] font-medium leading-tight">
                  Room service<br className="hidden sm:inline" /> 24h/24
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('categories-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2.5 bg-[#1E382F] hover:bg-[#152721] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Voir toutes les chambres</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Organic S-curve blob clipped photo with exact SVG paths */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            {/* Cursive script in top right */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 pointer-events-none text-right">
              <span className="font-serif italic text-white text-2xl sm:text-3xl lg:text-4xl tracking-wide drop-shadow-md block font-normal -rotate-2 select-none">
                Votre confort,<br />
                <span className="relative inline-block">
                  notre priorité
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-white/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 0 5 Q 50 10 100 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </div>

            <svg
              className="w-full h-full"
              viewBox="550 -66 730 424"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Outer wave clip path (Path 2) */}
                <clipPath id="roomsOuterWaveClip">
                  <path d="M 1280 358 L 1280 -66 L 646.628 -66 L 646.628 -64.184 C 630.307 28.101 614.873 77.785 596.277 145.423 C 578.698 209.365 533.464 276.376 557.905 356.284 L 721.901 356.623 L 1280 358 Z" />
                </clipPath>

                {/* Inner main photo clip path (Path 1) */}
                <clipPath id="roomsHeroBlobClip">
                  <path d="M 1280 358 L 1280 -66 L 572.702 -66 L 572.702 -62.691 C 572.702 -36.164 641.066 83.009 650.304 137.695 C 660.324 168.813 661.881 210.903 660.29 237.456 C 656.625 298.638 676.362 343.694 717.099 355.801 L 717.099 358 L 1280 358 Z" />
                </clipPath>
              </defs>

              {/* 1. Continuation of the photo on the outer wave with soft transparency */}
              <g clipPath="url(#roomsOuterWaveClip)">
                <image
                  href="/nouvelles_photos/chambre_lit_4.jpg"
                  x="550"
                  y="-66"
                  width="730"
                  height="424"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.45"
                />
                <rect x="550" y="-66" width="730" height="424" fill="#8EA99C" opacity="0.3" />
              </g>

              {/* 2. Main opaque photo clipped by Path 1 */}
              <g clipPath="url(#roomsHeroBlobClip)">
                <image
                  href="/nouvelles_photos/chambre_lit_4.jpg"
                  x="550"
                  y="-66"
                  width="730"
                  height="424"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. SECTION: NOS DIFFÉRENTES CATÉGORIES */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase block">
              NOS CHAMBRES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E382F] font-bold mt-1">
              Nos différentes catégories
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCategoryPage((prev) => (prev === 1 ? 2 : 1))}
              className="w-9 h-9 rounded-full border border-[#CBDCD4] hover:border-[#1E382F] text-[#1E382F] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Catégories précédentes"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-[#556B63] tabular-nums">
              {categoryPage} / 2
            </span>
            <button
              onClick={() => setCategoryPage((prev) => (prev === 1 ? 2 : 1))}
              className="w-9 h-9 rounded-full border border-[#CBDCD4] hover:border-[#1E382F] text-[#1E382F] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Catégories suivantes"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Cards Grid / Horizontal Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {ROOM_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedRoomIndex === idx;
            return (
              <div
                key={cat.id}
                onClick={() => handleSelectRoom(idx)}
                className={`bg-white rounded-2xl sm:rounded-3xl border overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer ${
                  isSelected ? 'border-[#2E4A40] ring-2 ring-[#2E4A40]/30' : 'border-[#E5ECE7]'
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {isSelected && (
                    <div className="absolute top-3 left-3 bg-[#1E382F] text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-xs">
                      Sélectionnée
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#1E382F]">
                      {cat.title}
                    </h3>
                    <div className="space-y-1.5 text-xs text-[#556B63]">
                      <div className="flex items-center gap-2">
                        <Bed className="w-3.5 h-3.5 text-[#4D6D63] shrink-0" />
                        <span>{cat.bed}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#4D6D63] shrink-0" />
                        <span className="font-semibold text-[#1E382F]">{cat.price}</span>
                        <span className="text-[11px] text-[#7A9388]">/ nuit</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#EEF3F0]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectRoom(idx);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E4A40] group-hover:text-[#1E382F] group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>Voir les détails</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SECTION: ROOM DETAIL FOCUS SHOWCASE ("CHAMBRE DOUBLE - CONFORT ET ÉLÉGANCE") - 100% FULL WIDTH */}
      <section id="featured-room-section" className="w-full relative bg-[#EDF3F0] border-y border-[#DCE7E1] overflow-hidden py-10 sm:py-14 lg:py-16">
        
        {/* Leaf watermark in the top-right corner - reduced size */}
        <div className="absolute right-0 top-0 pointer-events-none select-none z-10 w-12 sm:w-16 md:w-20 lg:w-24 opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1267 -218 157 323"
            className="w-full h-auto block"
          >
            <path
              d="M 1423.67 59.288 C 1388.25 66.07 1375.53 84.643 1375.53 84.643 C 1375.53 84.643 1399.36 104.838 1424.22 100.078 M 1422.99 35.579 C 1352.13 74.859 1319.51 19.839 1282.14 4.035 C 1282.14 4.035 1361.27 -47.584 1422.99 13.36 M 1423.9 -14.604 C 1402.89 -42.248 1386.02 -39.024 1379.39 -39.49 C 1296.87 -37.759 1296.28 -80.283 1267.11 -123.58 C 1369.63 -132.28 1370.41 -64.335 1414.57 -30.258 C 1392.69 -95.414 1382.82 -95.642 1374.4 -102.6 C 1323.05 -134.9 1353.94 -217.8 1353.94 -217.8 C 1440.13 -160.63 1406.09 -101.08 1406.09 -101.08 C 1394.71 -66.462 1423.3 -25.221 1423.3 -25.221"
              fill="#8EA99C"
            />
          </svg>
        </div>

        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left side: Main photo + thumbnails flanked by nav arrows */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main photo */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] shadow-sm border-2 border-white bg-gray-100">
                <img
                  src={selectedRoom.images[activeThumbIndex] || selectedRoom.image}
                  alt={selectedRoom.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 z-10 bg-[#1E382F]/90 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
                  {selectedRoom.categoryTag}
                </div>
              </div>

              {/* 4 Thumbnails strip flanked by round dark buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={prevThumb}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1E382F] hover:bg-[#142620] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors cursor-pointer"
                  aria-label="Photo précédente"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-4 gap-2 sm:gap-2.5 flex-1">
                  {selectedRoom.images.slice(0, 4).map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveThumbIndex(idx)}
                      className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeThumbIndex === idx
                          ? 'border-[#1E382F] scale-102 shadow-xs ring-1 ring-[#1E382F]'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`Aperçu ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextThumb}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1E382F] hover:bg-[#142620] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors cursor-pointer"
                  aria-label="Photo suivante"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side: Room Details & Amenities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase block">
                  {selectedRoom.categoryTag.toUpperCase()}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1E382F] font-bold mt-1">
                  {selectedRoom.subtitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#556B63] font-light leading-relaxed">
                {selectedRoom.description}
              </p>

              {/* 2-Column Amenities List (8 items) */}
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-2 border-t border-[#D5E2DB]">
                {selectedRoom.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/70 flex items-center justify-center shrink-0 shadow-2xs">
                      {renderAmenityIcon(item.icon)}
                    </div>
                    <span className="text-xs sm:text-[13px] text-[#2E4A40] font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price & Action button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#D5E2DB]">
                <div>
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-[#1E382F]">
                    {selectedRoom.price}
                  </span>
                  <span className="text-xs text-[#6B8378] ml-1">/ nuit</span>
                </div>

                <button
                  onClick={() => onOpenRoomBooking(selectedRoom.id)}
                  className="inline-flex items-center justify-center gap-2 bg-[#1E382F] hover:bg-[#142620] text-white text-[13px] sm:text-sm font-medium px-7 py-3 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: ÉQUIPEMENTS & SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase block">
              ÉQUIPEMENTS &amp; SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E382F] font-bold leading-tight">
              Tout le confort pour votre séjour
            </h2>
            <p className="text-xs sm:text-sm text-[#556B63] font-light leading-relaxed max-w-md">
              Toutes nos chambres sont équipées pour vous offrir un confort optimal. Profitez de nos services et équipements pensés pour votre bien-être.
            </p>
          </div>

          {/* Right Column: 6 circular icon badges matching mockup */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-3 text-center">
              {/* Item 1 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-13 h-13 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shadow-2xs hover:bg-[#D5E4DA] transition-colors">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1E382F] font-medium leading-tight">
                  WiFi gratuit
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-13 h-13 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shadow-2xs hover:bg-[#D5E4DA] transition-colors">
                  <Wind className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1E382F] font-medium leading-tight">
                  Climatisation
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-13 h-13 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shadow-2xs hover:bg-[#D5E4DA] transition-colors">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1E382F] font-medium leading-tight">
                  TV écran plat
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-13 h-13 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shadow-2xs hover:bg-[#D5E4DA] transition-colors">
                  <GlassWater className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1E382F] font-medium leading-tight">
                  Mini bar
                </span>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-13 h-13 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shadow-2xs hover:bg-[#D5E4DA] transition-colors">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1E382F] font-medium leading-tight">
                  Room service<br />24h/24
                </span>
              </div>

              {/* Item 6 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-13 h-13 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shadow-2xs hover:bg-[#D5E4DA] transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1E382F] font-medium leading-tight">
                  Ménage quotidien
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: CTA BANNER ("Un séjour inoubliable au White Palace Hôtel") */}
      <section className="w-full relative overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] xl:h-[290px] flex">
        {/* Left Side: Photo with full height & wide aspect ratio */}
        <div className="w-[52%] sm:w-[50%] lg:w-[48%] h-full relative shrink-0">
          <img
            src="/nouvelles_photos/terrasse_1.jpg"
            alt="Piscine et terrasse du White Palace Hôtel"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Deep Forest/Emerald Green block covering the remaining width and overlapping photo via organic curve */}
        <div className="flex-1 h-full relative bg-[#1E382F] text-white flex items-center justify-center -ml-[30px] sm:-ml-[45px] md:-ml-[60px] lg:-ml-[80px] z-10">
          {/* Organic wave transition on the left edge */}
          <svg
            className="absolute -left-[39px] sm:-left-[59px] md:-left-[79px] lg:-left-[99px] top-0 bottom-0 h-full w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] pointer-events-none text-[#1E382F]"
            viewBox="0 0 100 300"
            preserveAspectRatio="none"
          >
            <path
              d="M100,0 C65,70 15,120 40,195 C55,245 85,275 100,300 L100,0 Z"
              fill="currentColor"
            />
          </svg>

          {/* Botanical leaf silhouettes on the left side of green area */}
          <div className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 select-none w-14 sm:w-20 md:w-28 lg:w-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="119.124 50 192 424"
              className="w-full h-auto block"
            >
              <path
                d="M 119.184 360.732 C 139.755 345.771 144.424 307.077 138.724 300.158 L 119.463 255.217 C 119.463 255.217 101.245 229.297 118.905 176.97 L 133.141 128.12 C 139.859 153.504 172.043 190.033 173.338 213.258 C 179.653 270.094 147.033 312.07 145.713 312.995 L 140.553 331.701 C 172.264 311.997 200.602 228.069 200.005 228.44 C 199.818 229.16 184.524 172.811 190.97 147.947 C 195.993 121.876 212.293 96.729 212.293 96.729 C 217.117 91.764 244.956 49.987 239.399 55.709 C 264.272 107.085 258.373 149.698 258.373 149.698 C 252.517 197.328 205.607 228.7 205.607 228.7 L 170.911 305.161 C 197.107 294.421 201.27 273.718 201.27 273.718 C 224.839 215.018 299.588 226.463 311.037 223.358 C 251.244 345.886 215.658 297.042 187.254 302.315 C 172.885 304.983 124.2 354.468 126.176 363.032 C 129.436 362.445 170.249 334.003 184.001 332.131 C 220.713 327.134 238.197 355.082 258.452 352.912 C 192.95 421.649 160.567 366.076 133.765 365.697 L 120.032 372.745"
                fill="#ffffff"
              />
              <path
                d="M 119.124 405.653 C 125.241 405.375 135.239 390.437 166.914 411.228 L 188.487 423.001 C 179.31 425.459 155.127 473.802 119.721 455.633"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Botanical leaf silhouettes on the right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 select-none w-16 sm:w-24 md:w-32 lg:w-44">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="1267 -218 157 323"
              className="w-full h-auto block"
            >
              <path
                d="M 1423.67 59.288 C 1388.25 66.07 1375.53 84.643 1375.53 84.643 C 1375.53 84.643 1399.36 104.838 1424.22 100.078 M 1422.99 35.579 C 1352.13 74.859 1319.51 19.839 1282.14 4.035 C 1282.14 4.035 1361.27 -47.584 1422.99 13.36 M 1423.9 -14.604 C 1402.89 -42.248 1386.02 -39.024 1379.39 -39.49 C 1296.87 -37.759 1296.28 -80.283 1267.11 -123.58 C 1369.63 -132.28 1370.41 -64.335 1414.57 -30.258 C 1392.69 -95.414 1382.82 -95.642 1374.4 -102.6 C 1323.05 -134.9 1353.94 -217.8 1353.94 -217.8 C 1440.13 -160.63 1406.09 -101.08 1406.09 -101.08 C 1394.71 -66.462 1423.3 -25.221 1423.3 -25.221"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Content: Title with handwriting font + button */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 max-w-lg space-y-3 sm:space-y-4">
            <h2 className="font-['Caveat'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-white leading-tight tracking-wide select-none">
              Un séjour inoubliable
              <br />
              <span className="relative inline-block mt-0.5">
                au White Palace Hôtel
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-2.5 sm:h-3 text-[#E2B158]/80"
                  viewBox="0 0 160 12"
                  fill="none"
                >
                  <path
                    d="M 5 6 Q 80 12 155 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => onOpenRoomBooking()}
                className="inline-flex items-center gap-2 border border-white/80 hover:border-white hover:bg-white text-white hover:text-[#1E382F] text-[11px] sm:text-xs md:text-sm font-medium px-5 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Réserver maintenant</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
