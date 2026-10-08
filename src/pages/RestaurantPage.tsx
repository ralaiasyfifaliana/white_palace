import React from 'react';
import {
  ArrowRight,
  Plus,
  Wind,
  Trees,
  Music,
  Wifi,
  Sparkles,
  Clock,
  ShieldCheck,
  Car,
  Compass,
  Wine,
  UtensilsCrossed
} from 'lucide-react';

interface RestaurantPageProps {
  onNavigate?: (view: string) => void;
  onOpenTableBooking: () => void;
  onOpenMenuPdf: () => void;
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  onNavigate,
  onOpenTableBooking,
  onOpenMenuPdf
}) => {
  return (
    <div className="bg-[#F7FAF8] text-[#233D34] min-h-screen pt-20 sm:pt-24 space-y-16 sm:space-y-20 lg:space-y-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Restaurant & Bar - "Une cuisine raffinée aux saveurs locales" */}
      <section className="w-full relative bg-[#E3ECE7] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
          
          {/* Botanical leaf SVG on the left edge */}
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

          {/* Left Column: Text & Badges */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            {/* Kicker */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#5A7A6E] uppercase">
              RESTAURANT & BAR
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-[#1E382F] leading-[1.1] tracking-tight">
              Une cuisine raffinée<br />aux saveurs locales
            </h1>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-[#5A7268] font-light leading-relaxed max-w-[440px]">
              Notre restaurant vous propose une cuisine raffinée, alliant saveurs locales et internationales, dans un cadre chaleureux et élégant.
            </p>

            {/* 3 Pillars / Feature pills */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-[460px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4E3DA] flex items-center justify-center shrink-0 text-[#233D34]">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#2E4A40] font-medium leading-tight">
                  Cuisine locale & internat.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4E3DA] flex items-center justify-center shrink-0 text-[#233D34]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#2E4A40] font-medium leading-tight">
                  Produits frais et épices
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4E3DA] flex items-center justify-center shrink-0 text-[#233D34]">
                  <Wine className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#2E4A40] font-medium leading-tight">
                  Bar & Cocktails sur le toit
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenMenuPdf}
                className="group inline-flex items-center gap-2.5 bg-[#1E382F] hover:bg-[#152721] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Découvrir notre carte</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Organic S-curve blob clipped restaurant photo with cursive title */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            {/* Cursive script in top right */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 pointer-events-none text-right">
              <span className="font-['Caveat'] text-white text-3xl sm:text-4xl lg:text-[46px] tracking-wide drop-shadow-md block font-normal -rotate-2 select-none">
                Une expérience<br />
                <span className="relative inline-block">
                  gustative unique
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#E2B158]/80" viewBox="0 0 120 10" preserveAspectRatio="none">
                    <path d="M 0 5 Q 60 10 120 3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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
                {/* Outer wave clip path with exact user curve */}
                <clipPath id="restoOuterWaveClip">
                  <path d="M 1280 358 L 1280 -66 L 552.48 -66 L 552.48 -61.788 C 652.496 123.538 720.389 194.239 569.196 356.975 L 1280 358 Z" />
                </clipPath>

                {/* Inner main photo clip path with exact user path */}
                <clipPath id="restoHeroBlobClip">
                  <path d="M 1277.015 355.296 L 1277.694 -65.134 L 572.702 -62.691 C 572.702 -36.164 641.066 83.009 650.304 137.695 C 664.514 164.832 662.003 293.027 587.351 356.305 L 1277.015 355.296 Z" />
                </clipPath>
              </defs>

              {/* 1. Continuation of the photo on the outer wave with soft transparency */}
              <g clipPath="url(#restoOuterWaveClip)">
                <image
                  href="/nouvelles_photos/salle-restaurant_1.jpg"
                  x="550"
                  y="-66"
                  width="730"
                  height="424"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.45"
                />
                <rect x="550" y="-66" width="730" height="424" fill="#8EA99C" opacity="0.3" />
              </g>

              {/* 2. Main opaque photo clipped by inner path */}
              <g clipPath="url(#restoHeroBlobClip)">
                <image
                  href="/nouvelles_photos/salle-restaurant_1.jpg"
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

      {/* 2. SECTION: NOTRE OFFRE CULINAIRE - "Une carte variée pour tous les goûts" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, description and button */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase block">
              NOTRE OFFRE CULINAIRE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E382F] font-bold leading-tight">
              Une carte variée<br />pour tous les goûts
            </h2>
            <p className="text-xs sm:text-sm text-[#556B63] font-light leading-relaxed">
              Découvrez une sélection de plats préparés avec des produits frais et locaux, mettant en valeur les saveurs de Madagascar, ainsi que les incontournables de la cuisine internationale.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenMenuPdf}
                className="group inline-flex items-center gap-2 bg-[#1E382F] hover:bg-[#142620] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <span>Voir la carte complète</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Rounded Category Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Spécialités locales */}
            <div className="bg-[#FAFBF9] rounded-2xl overflow-hidden border border-[#E3EAE6] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/nouvelles_photos/plat_carpaccio.jpg"
                  alt="Spécialités locales"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1E382F] mb-1">
                  Spécialités locales
                </h3>
                <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                  <p className="text-[10px] sm:text-[11px] text-[#60776F] font-light line-clamp-2 leading-tight flex-1">
                    Découvrez les trésors culinaires de Madagascar
                  </p>
                  <button
                    onClick={onOpenMenuPdf}
                    className="w-6 h-6 rounded-full bg-[#1E382F] text-white flex items-center justify-center hover:bg-[#2F5245] transition-colors shrink-0 cursor-pointer"
                    aria-label="Voir spécialités"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Fruits de mer */}
            <div className="bg-[#FAFBF9] rounded-2xl overflow-hidden border border-[#E3EAE6] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/nouvelles_photos/plat_poisson.jpg"
                  alt="Fruits de mer & poissons"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1E382F] mb-1">
                  Fruits de mer
                </h3>
                <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                  <p className="text-[10px] sm:text-[11px] text-[#60776F] font-light line-clamp-2 leading-tight flex-1">
                    Fraîchement pêchés et cuisinés avec raffinement
                  </p>
                  <button
                    onClick={onOpenMenuPdf}
                    className="w-6 h-6 rounded-full bg-[#1E382F] text-white flex items-center justify-center hover:bg-[#2F5245] transition-colors shrink-0 cursor-pointer"
                    aria-label="Voir fruits de mer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Cuisine internationale */}
            <div className="bg-[#FAFBF9] rounded-2xl overflow-hidden border border-[#E3EAE6] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/images/gourmet_dish.jpeg"
                  alt="Cuisine internationale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1E382F] mb-1">
                  Cuisine internationale
                </h3>
                <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                  <p className="text-[10px] sm:text-[11px] text-[#60776F] font-light line-clamp-2 leading-tight flex-1">
                    Des classiques revisités avec passion
                  </p>
                  <button
                    onClick={onOpenMenuPdf}
                    className="w-6 h-6 rounded-full bg-[#1E382F] text-white flex items-center justify-center hover:bg-[#2F5245] transition-colors shrink-0 cursor-pointer"
                    aria-label="Voir cuisine internationale"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Bar & Cocktails */}
            <div className="bg-[#FAFBF9] rounded-2xl overflow-hidden border border-[#E3EAE6] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/nouvelles_photos/boisson_cocktail.jpg"
                  alt="Bar & Cocktails"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1E382F] mb-1">
                  Bar & Cocktails
                </h3>
                <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                  <p className="text-[10px] sm:text-[11px] text-[#60776F] font-light line-clamp-2 leading-tight flex-1">
                    Des cocktails créatifs et rafraîchissants
                  </p>
                  <button
                    onClick={onOpenMenuPdf}
                    className="w-6 h-6 rounded-full bg-[#1E382F] text-white flex items-center justify-center hover:bg-[#2F5245] transition-colors shrink-0 cursor-pointer"
                    aria-label="Voir cocktails"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: DARK GREEN AMBIANCE - "Un cadre exceptionnel" */}
      <section className="w-full relative bg-[#1E382F] text-white overflow-hidden">
        {/* Subtle botanical leaf silhouettes — reduced size (halved), top-right corner */}
        <div className="absolute right-0 top-0 pointer-events-none opacity-15 select-none w-10 sm:w-12 h-auto translate-x-1">
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

        <div className="relative w-full flex flex-col lg:flex-row items-stretch min-h-[360px] lg:min-h-[380px]">
          {/* Left Col: Photo filling 100% of container height without green spaces at top/bottom */}
          <div className="w-full lg:w-[40%] xl:w-[43%] h-[280px] sm:h-[340px] lg:h-auto self-stretch relative shrink-0">
            <svg
              className="w-full h-full block"
              viewBox="-50.882 -86.458 565 369"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="restoAmbianceExactClip">
                  <path d="M -50.882 -86.458 L 411.448 -86.458 C 505.688 -33.464 524.798 38.331 508.439 104.655 C 481.659 213.229 347.56 294.136 333.77 281.509 L -50.882 261.569 Z" />
                </clipPath>
              </defs>

              <g clipPath="url(#restoAmbianceExactClip)">
                <image
                  href="/nouvelles_photos/terrasse_1.jpg"
                  x="-50.882"
                  y="-86.458"
                  width="565"
                  height="369"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>

          {/* Center & Right content */}
          <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 z-10 self-center">
            {/* Center Col: Text, Kicker and 3 circular feature badges */}
            <div className="space-y-4 max-w-md">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#97B8AB] uppercase block">
                NOTRE RESTAURANT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight">
                Un cadre exceptionnel
              </h2>
              <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed">
                Profitez d'un cadre élégant et apaisant, mêlant finitions raffinées et terrasse avec vue sur la ville. Que ce soit pour un déjeuner d'affaires, un repas en famille ou un moment convivial avant votre repas, notre restaurant vous accueille dans une ambiance chaleureuse.
              </p>

              {/* 3 Circular Badges */}
              <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-10 h-10 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-[#B0CEC2]">
                    <Wind className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-tight">
                    Salle intérieure climatisée
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-10 h-10 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-[#B0CEC2]">
                    <Trees className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-tight">
                    Terrasse avec vue sur la ville
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-10 h-10 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-[#B0CEC2]">
                    <Music className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-tight">
                    Ambiance musicale douce
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Cursive title + 2 preview photos strictly bottom-aligned */}
            <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
              <div className="text-center lg:text-right mb-0.5">
                <span className="font-['Caveat'] text-white text-2xl sm:text-3xl leading-tight block select-none">
                  Une vue<br />et ambiance<br />chaleureuse
                </span>
              </div>

              {/* Both images aligned at bottom strictly */}
              <div className="flex items-end gap-2.5 sm:gap-3">
                {/* First image: taller, slight transparency, bottom-aligned */}
                <div className="w-24 sm:w-28 h-36 sm:h-40 overflow-hidden shadow-lg border border-white/20 opacity-80 shrink-0">
                  <img
                    src="/nouvelles_photos/terrasse_2.jpg"
                    alt="Terrasse cosy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Second image: shorter, full opacity, rounded frame, bottom-aligned */}
                <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-2xl overflow-hidden shadow-xl border border-white/20 shrink-0">
                  <img
                    src="/nouvelles_photos/terrasse_1.jpg"
                    alt="Terrasse panoramique"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wavy bottom border — compact wave */}
        <div className="relative w-full leading-none">
          <svg
            className="w-full block"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 40 L 0 15 Q 360 0 720 15 Q 1080 30 1440 5 L 1440 40 Z"
              fill="#F7FAF8"
            />
          </svg>
        </div>
      </section>

      {/* 4. SECTION: SERVICES - "Des services pensés pour votre confort" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase block">
              NOS SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E382F] font-bold leading-tight">
              Des services pensés pour votre confort
            </h2>
            <p className="text-xs sm:text-sm text-[#556B63] font-light leading-relaxed">
              Profitez d'un large éventail de services pour rendre votre séjour encore plus agréable. Tout est mis en œuvre pour votre bien-être.
            </p>
          </div>

          <div className="text-right">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#2F5245] block select-none">
              Tout ce dont vous avez besoin,<br />
              <span className="relative inline-block">
                au même endroit
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#E2B158]/80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0 5 Q 50 10 100 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </div>
        </div>

        {/* 6 Circular Service Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
          <div className="bg-white rounded-2xl p-5 border border-[#E3EAE6] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center">
              <Wifi className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#1E382F] leading-tight">
              WiFi gratuit<br /><span className="text-[11px] font-normal text-[#556B63]">dans tout l'hôtel</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3EAE6] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#1E382F] leading-tight">
              Service de ménage<br /><span className="text-[11px] font-normal text-[#556B63]">quotidien</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3EAE6] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#1E382F] leading-tight">
              Réception<br /><span className="text-[11px] font-normal text-[#556B63]">24h / 24</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3EAE6] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#1E382F] leading-tight">
              Parking sécurisé<br /><span className="text-[11px] font-normal text-[#556B63]">gardé 24h/24</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3EAE6] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center">
              <Car className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#1E382F] leading-tight">
              Location de véhicule<br /><span className="text-[11px] font-normal text-[#556B63]">sur demande</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3EAE6] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#1E382F] leading-tight">
              Activités & excursions<br /><span className="text-[11px] font-normal text-[#556B63]">sur mesure</span>
            </span>
          </div>
        </div>
      </section>

      {/* 5. SECTION: SPLIT CARDS (Le Bar & Cocktails + Horaires d'ouverture) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card Left: Le Bar & Cocktails (Dark Green) */}
          <div className="lg:col-span-7 bg-[#1E382F] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md flex flex-col sm:flex-row items-center gap-6">
            {/* Background botanical watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-15 select-none w-36">
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

            {/* Photo of the bar */}
            <div className="w-full sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-md">
              <img
                src="/nouvelles_photos/salle-restaurant_3.jpg"
                alt="Comptoir du Bar du White Palace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text and Button */}
            <div className="space-y-3 z-10 flex-1">
              <div className="flex items-center gap-2 text-[#A8C9BC]">
                <Wine className="w-5 h-5" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Le Bar & Cocktails & Détente
                </h3>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Après une journée bien remplie, détendez-vous autour d'un cocktail, d'un jus frais ou d'un verre de vin dans une ambiance lounge.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenMenuPdf}
                  className="group inline-flex items-center gap-2 border border-white/60 hover:border-white text-white hover:bg-white hover:text-[#1E382F] text-xs font-medium px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  <span>Voir la carte des boissons</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card Right: Horaires d'ouverture (Light card) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3EAE6] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#E2ECE6] text-[#1E382F] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E382F]">
                  Horaires d'ouverture
                </h3>
              </div>

              {/* Schedule list */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-[#EEF3F0]">
                  <span className="font-medium text-[#1E382F]">Petit déjeuner</span>
                  <span className="text-[#556B63] tabular-nums font-light">06h30 - 10h00</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#EEF3F0]">
                  <span className="font-medium text-[#1E382F]">Déjeuner</span>
                  <span className="text-[#556B63] tabular-nums font-light">12h00 - 14h30</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#EEF3F0]">
                  <span className="font-medium text-[#1E382F]">Dîner</span>
                  <span className="text-[#556B63] tabular-nums font-light">19h00 - 22h30</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-medium text-[#1E382F]">Bar & Salon lounge</span>
                  <span className="text-[#556B63] tabular-nums font-light">10h00 - 23h00</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenTableBooking}
                className="w-full text-center bg-[#E8F0EB] hover:bg-[#D5E3DB] text-[#1E382F] text-xs font-semibold py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Réserver votre créneau horaire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: CTA BANNER ("Une table, une histoire de saveurs... Réservez votre table") */}
      <section className="w-full relative overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] xl:h-[290px] flex">
        {/* Left Side: Photo with full height & wide aspect ratio */}
        <div className="w-[52%] sm:w-[50%] lg:w-[48%] h-full relative shrink-0">
          <img
            src="/nouvelles_photos/salle-restaurant_1.jpg"
            alt="Table gastronomique au White Palace Hôtel"
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
              Une table,
              <br />
              <span className="relative inline-block mt-0.5">
                une histoire de saveurs...
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

            <p className="text-xs sm:text-sm text-white/80 font-light max-w-sm">
              Vivez une expérience gastronomique unique au White Palace Hôtel.
            </p>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={onOpenTableBooking}
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
