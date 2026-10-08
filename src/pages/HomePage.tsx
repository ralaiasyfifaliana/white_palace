import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Wifi, 
  Tv, 
  Clock, 
  Bell, 
  ShieldCheck, 
  Bed, 
  UserCheck, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { Footer } from '../components/Footer';

interface HomePageProps {
  onNavigate: (view: string) => void;
  onOpenRoomDetail: (roomId: string) => void;
  onOpenVideoModal: () => void;
  onOpenRoomBooking: (roomId?: string) => void;
  onOpenTableBooking: () => void;
  onSearchRooms: (params: any) => void;
}

// 8 rooms from Image 2 mockup with high quality photos from nouvelles_photos
const ROOM_CARDS = [
  {
    id: 'chambre-single',
    title: 'Single',
    price: '135 000 Ar',
    image: '/nouvelles_photos/chambre_lit_1.jpg'
  },
  {
    id: 'chambre-double',
    title: 'Double',
    price: '145 000 Ar',
    image: '/nouvelles_photos/chambre_lit_2.jpg'
  },
  {
    id: 'chambre-twin',
    title: 'Twin',
    price: '135 000 Ar',
    image: '/nouvelles_photos/chambre_lit_3.jpg'
  },
  {
    id: 'chambre-luxe',
    title: 'Luxe',
    price: '250 000 Ar',
    image: '/nouvelles_photos/chambre_de_fond.jpg'
  },
  {
    id: 'chambre-cuisine',
    title: 'Cuisine',
    price: '200 000 Ar',
    image: '/nouvelles_photos/chambre_sallon_2.jpg'
  },
  {
    id: 'appartement',
    title: 'Appartement',
    price: '200 000 Ar',
    image: '/nouvelles_photos/chambre_sallon_4.jpg'
  },
  {
    id: 'chambre-familiale',
    title: 'Familiale',
    price: '175 000 Ar',
    image: '/nouvelles_photos/chambre_lit_4.jpg'
  },
  {
    id: 'chambre-handicape',
    title: 'Handicapé',
    price: '180 000 Ar',
    image: '/nouvelles_photos/chambre_lit_5.jpg'
  }
];

// Hero slider with high resolution images
const HERO_SLIDES = [
  {
    image: '/nouvelles_photos/chambre_de_fond.jpg',
    caption: 'Chambre de prestige avec literie de luxe'
  },
  {
    image: '/nouvelles_photos/fascade_1.jpg',
    caption: 'Façade contemporaine du White Palace Hôtel'
  },
  {
    image: '/nouvelles_photos/terrasse_1.jpg',
    caption: 'Restaurant Rooftop avec vue panoramique'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenRoomDetail,
  onOpenRoomBooking
}) => {
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const prevSlide = () => {
    setHeroSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setHeroSlideIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#F7FAF8] text-[#233D34] min-h-screen pt-20 sm:pt-24 space-y-20 lg:space-y-28 overflow-x-hidden">
      
      {/* 1. HERO SECTION (100% FULL WIDTH SANS MARGE) */}
      <section className="w-full relative bg-[#E3ECE7] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">

          {/* Botanical leaf SVG - glued to left edge, 2x smaller, filled without stroke */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 w-14 sm:w-18 md:w-22 lg:w-26 xl:w-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="119.124 50 192 424"
              className="w-full h-auto block"
            >
              <path
                d="M 119.184 360.732 C 139.755 345.771 144.424 307.077 138.724 300.158 L 119.463 255.217 C 119.463 255.217 101.245 229.297 118.905 176.97 L 133.141 128.12 C 139.859 153.504 172.043 190.033 173.338 213.258 C 179.653 270.094 147.033 312.07 145.713 312.995 L 140.553 331.701 C 172.264 311.997 200.602 228.069 200.005 228.44 C 199.818 229.16 184.524 172.811 190.97 147.947 C 195.993 121.876 212.293 96.729 212.293 96.729 C 217.117 91.764 244.956 49.987 239.399 55.709 C 264.272 107.085 258.373 149.698 258.373 149.698 C 252.517 197.328 205.607 228.7 205.607 228.7 L 170.911 305.161 C 197.107 294.421 201.27 273.718 201.27 273.718 C 224.839 215.018 299.588 226.463 311.037 223.358 C 251.244 345.886 215.658 297.042 187.254 302.315 C 172.885 304.983 124.2 354.468 126.176 363.032 C 129.436 362.445 170.249 334.003 184.001 332.131 C 220.713 327.134 238.197 355.082 258.452 352.912 C 192.95 421.649 160.567 366.076 133.765 365.697 L 120.032 372.745"
                fill="#8EA99C"
                fillOpacity="0.6"
              />
              <path
                d="M 119.124 405.653 C 125.241 405.375 135.239 390.437 166.914 411.228 L 188.487 423.001 C 179.31 425.459 155.127 473.802 119.721 455.633"
                fill="#8EA99C"
                fillOpacity="0.6"
              />
            </svg>
          </div>

          {/* Left Column: Text & Buttons */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            {/* Kicker tag */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#5A7A6E] uppercase">
              CONFORT &nbsp;-&nbsp; ÉLÉGANCE &nbsp;-&nbsp; BIEN-ÊTRE
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[66px] xl:text-[72px] font-bold text-[#1E382F] leading-[0.93] tracking-tight">
                WHITE<br />
                PALACE
              </h1>
              <div className="font-serif italic text-3xl sm:text-4xl lg:text-[44px] text-[#1E382F] font-normal mt-1 leading-tight">
                Hôtel
              </div>
            </div>

            {/* Sub-headline */}
            <h2 className="font-serif text-lg sm:text-xl lg:text-[22px] text-[#1E382F] font-semibold leading-snug">
              Un séjour d'exception<br />à Antananarivo
            </h2>

            {/* Paragraph */}
            <p className="text-[13px] sm:text-sm text-[#5A7268] font-light leading-relaxed max-w-[400px]">
              Découvrez un lieu unique ou confort, élégance et hospitalité se rencontrent pour faire de votre séjour une expérience inoubliable.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenRoomBooking()}
                className="group inline-flex items-center gap-2 bg-[#2E4A40] hover:bg-[#233D34] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Réserver</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('a-propos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-center border border-[#B0C4BA] hover:border-[#2E4A40] text-[#2E4A40] hover:bg-white/30 text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
              >
                Découvrir l'hôtel
              </button>
            </div>
          </div>

          {/* Right Column: Blob-shaped photo with layered SVG shadows (occupying 100% height and edge on right) */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 650"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Main blob clip for the photo */}
                <clipPath id="heroBlobClip">
                  <path d="M 170 0 C 120 50, 45 135, 50 240 C 58 335, 115 425, 155 490 C 195 555, 240 605, 285 650 L 1000 650 L 1000 0 Z" />
                </clipPath>
              </defs>

              {/* Shadow layer 1 — outermost light translucent halo */}
              <path
                d="M 70 0 C 20 60, -20 150, 8 245 C 32 335, 88 425, 128 490 C 168 555, 212 605, 250 650 L 315 650 C 275 600, 235 545, 195 480 C 155 410, 108 315, 95 235 C 80 155, 105 70, 125 0 Z"
                fill="#B5C9BF"
                opacity="0.55"
              />

              {/* Shadow layer 2 — upper sage shadow arc */}
              <path
                d="M 105 0 C 55 50, 25 125, 35 195 C 48 265, 92 325, 138 375 C 112 305, 88 225, 92 150 C 102 80, 132 25, 158 0 Z"
                fill="#8FA89D"
                opacity="0.75"
              />

              {/* Shadow layer 3 — bottom dark teal accent */}
              <path
                d="M 135 650 C 165 565, 215 515, 265 530 C 298 545, 328 595, 348 650 Z"
                fill="#365349"
                opacity="0.9"
              />

              {/* The photo itself, clipped by the blob shape */}
              <g clipPath="url(#heroBlobClip)">
                <image
                  key={heroSlideIndex}
                  href={HERO_SLIDES[heroSlideIndex].image}
                  x="0"
                  y="0"
                  width="1000"
                  height="650"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>

            {/* Slider Controls — bottom right pill */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 flex items-center gap-3 bg-[#1A3129]/80 backdrop-blur-xs text-white px-4 py-2 rounded-full text-xs tracking-widest shadow-md">
              <button
                onClick={prevSlide}
                className="p-1 hover:text-[#A3C2B6] transition-colors cursor-pointer"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] tabular-nums font-medium">
                0{heroSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-1 hover:text-[#A3C2B6] transition-colors cursor-pointer"
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: À PROPOS DE NOUS (100% FULL WIDTH, GLUED TO LEFT, CLOSER TO HERO) */}
      <section id="a-propos" className="w-full relative overflow-hidden -mt-12 sm:-mt-16 lg:-mt-20 pt-2 pb-0">
        {/* Botanical leaf SVG exact from user mockup on the right edge (2x smaller) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1267 -218 157 323"
            className="w-full h-auto block"
          >
            <path
              d="M 1423.67 59.288 C 1388.25 66.07 1375.53 84.643 1375.53 84.643 C 1375.53 84.643 1399.36 104.838 1424.22 100.078 M 1422.99 35.579 C 1352.13 74.859 1319.51 19.839 1282.14 4.035 C 1282.14 4.035 1361.27 -47.584 1422.99 13.36 M 1423.9 -14.604 C 1402.89 -42.248 1386.02 -39.024 1379.39 -39.49 C 1296.87 -37.759 1296.28 -80.283 1267.11 -123.58 C 1369.63 -132.28 1370.41 -64.335 1414.57 -30.258 C 1392.69 -95.414 1382.82 -95.642 1374.4 -102.6 C 1323.05 -134.9 1353.94 -217.8 1353.94 -217.8 C 1440.13 -160.63 1406.09 -101.08 1406.09 -101.08 C 1394.71 -66.462 1423.3 -25.221 1423.3 -25.221"
              fill="#8EA99C"
              fillOpacity="0.55"
            />
          </svg>
        </div>

        {/* Content container: left side glued to left edge (pl-0), right side padded */}
        <div className="w-full pl-0 pr-6 sm:pr-12 md:pr-16 lg:pr-24 xl:pr-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left: Organic Blob facade photo glued flush to the left edge */}
            <div className="lg:col-span-5 relative flex justify-start items-center pl-0">
              <div className="w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] aspect-[152/130] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-1615 -475 1520 1300"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <clipPath id="aboutImageClip">
                      <path d="M -217.258 171.316 C -215.846 489.616 -374.37 749.727 -899.214 790.829 C -1244.673 804.225 -1562.45 589.874 -1532.588 226.178 C -1502.726 -137.518 -1339.835 -271.722 -896.52 -372.141 C -453.205 -472.56 -218.67 -146.984 -217.258 171.316 Z" />
                    </clipPath>
                  </defs>

                  {/* Path 1: Background accent (bottom right) */}
                  <path
                    fill="rgba(203, 220, 212, 0.55)"
                    d="M -95.269 820.228 L -934.101 823.213 C -934.161 823.105 -393.994 283.629 -95.269 820.228 Z"
                  />

                  {/* Path 2: Background accent (top left) */}
                  <path
                    fill="rgba(203, 220, 212, 0.55)"
                    d="M -1610.294 -409.184 L -1611.156 372.461 C -1611.156 372.461 -330.876 -276.257 -1610.294 -409.184 Z"
                  />

                  {/* Path 3: The hotel facade image clipped by the organic blob */}
                  <g clipPath="url(#aboutImageClip)">
                    <image
                      href="/nouvelles_photos/fascade_1.jpg"
                      x="-1565"
                      y="-475"
                      width="1350"
                      height="1280"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>

                  {/* Path 4: Translucent sage overlay on bottom-left */}
                  <path
                    fill="rgba(197, 206, 170, 0.467)"
                    d="M -1612.527 821.832 L -1614.812 377.01 C -1508.53 218.247 -1251.294 126.99 -1217.087 504.087 C -1209.4 588.828 -1248.675 696.605 -1355.578 821.411 L -1612.527 821.832 Z"
                  />
                </svg>
              </div>
            </div>

            {/* Right: Content & 3 feature icons */}
            <div className="lg:col-span-7 space-y-6 px-4 sm:px-0">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase">
              À PROPOS DE NOUS
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E382F] leading-tight">
              Un hôtel au cœur<br />d'Antananarivo
            </h2>

            <p className="text-xs sm:text-sm text-[#556B63] font-light leading-relaxed max-w-xl">
              Le White Palace Hôtel est un établissement 4 étoiles qui allie confort, élégance et hospitalité. Nous mettons tout en œuvre pour vous offrir une expérience unique, dans un cadre raffiné et sécurisé.
            </p>

            {/* 3 Pillars / Feature items matching mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {/* Feature 1 */}
              <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-snug">
                    Emplacement<br className="hidden sm:inline" /> privilégié
                  </h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-snug">
                    Chambres confortables<br className="hidden sm:inline" /> et modernes
                  </h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#E2ECE6] text-[#233D34] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-snug">
                    Service attentionné<br className="hidden sm:inline" /> et personnalisé
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 3. SERVICES BAR (100% FULL WIDTH, PERFECTLY GLUED TO SECTION 2, FOOT ANCHORED AT BOTTOM) */}
      <section className="w-full relative bg-[#EDF2EE] border-y border-[#E1E9E4] overflow-hidden -mt-20 sm:-mt-24 lg:-mt-28 py-10 sm:py-12 lg:py-14">
        {/* Botanical leaf SVG on the left edge - anchored to bottom so foot rests on bottom border */}
        <div className="absolute left-0 bottom-0 pointer-events-none select-none z-10 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-[88%] sm:h-[92%] lg:h-[96%] flex items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1517.2 -43 304 458"
            className="h-full w-auto block"
            preserveAspectRatio="xMinYMax meet"
          >
            <path
              d="M -1453.3 408.347 C -1432.4 376.832 -1451.9 348.451 -1452.4 349.195 C -1513.6 294.114 -1473.7 271.983 -1470.5 206.712 C -1461.1 234.937 -1392.8 247.692 -1428.2 341.423 C -1434.3 354.438 -1440.6 385.772 -1439 382.441 L -1386.6 300.219 C -1372.5 166.53 -1297.5 191 -1255.9 183.718 C -1296.2 257.125 -1265.6 249.235 -1368.6 290.796 C -1379.1 294.12 -1412.6 347.042 -1412.2 346.926 C -1412.2 345.906 -1374.2 323.872 -1370.8 321.02 C -1308.5 252.587 -1223.9 300.652 -1214.1 305.045 C -1261.3 337.117 -1278.2 361.339 -1369.1 332.246 C -1402.8 326.205 -1436.5 390.843 -1435.1 390.254 C -1362.9 325.66 -1335.6 380.59 -1318.1 379.028 C -1344.8 405.766 -1387.7 414.756 -1413.1 392.413 C -1438.4 384.212 -1443.8 410.09 -1443.8 410.115 M -1515.1 231.868 C -1516.1 207.932 -1495.5 179.558 -1473.7 176.953 C -1383.1 199.041 -1376.5 140.276 -1340.4 121.1 C -1432.4 84.628 -1467.9 145.729 -1482.6 164.587 L -1504.8 191.827 C -1494.7 172.045 -1500.3 124.206 -1466.1 105.091 C -1452.9 96.591 -1406.3 112.756 -1376.8 35.62 C -1403.6 53.521 -1447.9 8.604 -1480.5 104.599 L -1490.5 119.413 C -1492.4 72.589 -1480.2 56.546 -1475.7 51.315 C -1442.8 15.359 -1442.1 18.367 -1449 -42.977 C -1510.4 4.665 -1494.3 32.629 -1490.8 41.339 C -1485.8 77.944 -1493.8 81.657 -1496.1 82.676 C -1496.1 72.708 -1508 27.309 -1516.7 18.849 M -1516.5 209.09 C -1516.5 209.106 -1486.4 140.868 -1517 115.665 M -1517.2 84.125 C -1501.7 100.375 -1499.3 124.755 -1499.3 124.744 C -1490.3 103.896 -1511.5 56.397 -1517.2 51.673"
              fill="#8EA99C"
              fillOpacity="0.45"
            />
          </svg>
        </div>

        {/* Botanical leaf SVG on the right edge (resized smaller) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 w-10 sm:w-14 md:w-18 lg:w-22 xl:w-26">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1148 -122 235 516"
            className="w-full h-auto block"
          >
            <path
              d="M 1373.81 358.497 C 1338.19 281.414 1296.61 284.202 1276.32 284.971 C 1214.68 275.275 1218.17 241.888 1189.32 216.088 C 1301.29 205.909 1300.94 276.927 1306.06 279.992 C 1308.03 284.192 1319.97 288.249 1319.73 287.745 C 1321.17 275.32 1281.4 192.967 1280.93 197.054 C 1148.41 140.199 1188.85 108.057 1180.39 46.822 C 1220.78 80.147 1260.86 94.055 1269.35 154.428 C 1271.86 172.284 1280.47 184.133 1292.77 205.652 C 1293.32 206.835 1283.19 105.437 1275.43 88.898 C 1190.74 -55.839 1251.39 -38.187 1268.43 -121.36 C 1356.64 -2.312 1291.47 53.511 1291.11 64.279 C 1274.77 125.977 1305.72 207.188 1304.39 212.225 C 1303.14 190.969 1307.54 174.669 1305.29 158.29 C 1296.81 96.658 1319.36 64.974 1372.24 27.529 C 1382.61 168.504 1331.28 146.972 1323.78 169.147 C 1276.69 205.777 1360.14 321.478 1373.86 344.24 M 1374.12 373.495 C 1294.92 393.411 1295 348.788 1264.73 327.572 C 1275.45 317.831 1335.83 307.014 1373.8 362.652"
              fill="#8EA99C"
              fillOpacity="0.45"
            />
          </svg>
        </div>

        {/* 5 Service items with central layout */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#D6E2DB]">
            {/* Service 1: WiFi */}
            <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-full bg-[#DAE4DE] text-[#233D34] flex items-center justify-center shadow-2xs">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-tight">
                WiFi par chambre<br />gratuit
              </span>
            </div>

            {/* Service 2: Box TV */}
            <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-full bg-[#DAE4DE] text-[#233D34] flex items-center justify-center shadow-2xs">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-tight">
                Box TV
              </span>
            </div>

            {/* Service 3: Réception 24h/24 */}
            <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-full bg-[#DAE4DE] text-[#233D34] flex items-center justify-center shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-tight">
                Réception 24h/24
              </span>
            </div>

            {/* Service 4: Conciergerie */}
            <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-full bg-[#DAE4DE] text-[#233D34] flex items-center justify-center shadow-2xs">
                <Bell className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-tight">
                Service de conciergerie<br />gratuit
              </span>
            </div>

            {/* Service 5: Sécurité 24h/24 */}
            <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0 col-span-2 sm:col-span-1">
              <div className="w-11 h-11 rounded-full bg-[#DAE4DE] text-[#233D34] flex items-center justify-center shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-[13px] text-[#1E382F] font-medium leading-tight">
                Sécurité 24h/24
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: NOS CHAMBRES (FROM IMAGE 2 - CLEAN 4x2 GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Header with Title and "Voir toutes les chambres" button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase">
              NOS CHAMBRES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E382F] leading-tight">
              Un confort adapté à vos besoins
            </h2>
            <p className="text-xs sm:text-sm text-[#556B63] font-light max-w-2xl leading-relaxed">
              Découvrez nos différentes catégories de chambres, spacieuses et élégantes, pensées pour votre bien-être.
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0">
            <button
              onClick={() => onNavigate('rooms')}
              className="group inline-flex items-center gap-2 bg-[#233D34] hover:bg-[#1A2E27] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>Voir toutes les chambres</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4x2 Grid of 8 Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOM_CARDS.map((room) => (
            <div
              key={room.id}
              onClick={() => onOpenRoomDetail(room.id)}
              className="bg-white rounded-2xl border border-[#E2EAE5] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Room Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={room.image}
                  alt={`Chambre ${room.title} - White Palace Hôtel`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card Footer: Name, Price, and Circle Action Button */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-normal text-[#1E382F] leading-tight">
                    {room.title}
                  </h3>
                  <div className="text-xs text-[#5E756C] font-light mt-0.5">
                    {room.price} <span className="text-[11px] text-gray-400">/ nuit</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#233D34] group-hover:bg-[#1A2E27] text-white flex items-center justify-center transition-colors shadow-2xs shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECTION: RESTAURANT ROOFTOP & ESPACE FITNESS (FROM IMAGE 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative bg-[#324F4D] text-white rounded-[32px] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl">
          {/* Botanical leaf motif background on left */}
          <div className="absolute left-0 bottom-0 pointer-events-none opacity-15 select-none">
            <svg width="180" height="240" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10C35 40 20 70 5 100C45 90 60 60 45 30C30 10 20 5 10 10Z" fill="white" />
              <path d="M5 100C25 120 35 150 20 180C60 160 70 130 55 110C40 90 15 90 5 100Z" fill="white" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left side: Information and CTA button */}
            <div className="lg:col-span-5 space-y-5 z-10">
              <div className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-[#A2C3B7] uppercase">
                NOTRE EXPÉRIENCE
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Restaurant Rooftop<br />& Espace Fitness
              </h2>

              <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-md">
                Savourez une cuisine raffinée dans notre restaurant rooftop avec une vue imprenable sur Antananarivo. Pour votre bien-être, notre espace fitness est à votre disposition.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('restaurant')}
                  className="group inline-flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white hover:text-[#233D34] text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
                >
                  <span>Découvrir l'expérience</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side: Two photos side by side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 z-10">
              {/* Rooftop Sunset Dining Photo */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 group bg-gray-900">
                <img
                  src="/nouvelles_photos/terrasse_1.jpg"
                  alt="Restaurant Rooftop avec vue imprenable"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Fitness Gym Photo */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 group bg-gray-900">
                <img
                  src="/nouvelles_photos/salle_sport.jpg"
                  alt="Espace Fitness moderne et tout équipé"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: GALERIE (FROM IMAGE 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text & Action */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase">
              GALERIE
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E382F] leading-tight">
              Une immersion au cœur<br />de notre hôtel
            </h2>

            <p className="text-xs sm:text-sm text-[#556B63] font-light leading-relaxed max-w-sm">
              Explorez notre univers en images et laissez-vous séduire par l'élégance et le charme du White Palace Hôtel.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('gallery')}
                className="group inline-flex items-center gap-2 bg-[#233D34] hover:bg-[#1A2E27] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Voir toute la galerie</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Asymmetric Photo Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* 1 Large vertical photo on the left */}
            <div className="sm:col-span-6 rounded-2xl overflow-hidden shadow-xs border border-[#E2EAE5] aspect-[3/4] sm:aspect-auto sm:h-full group bg-gray-100">
              <img
                src="/nouvelles_photos/fascade_1.jpg"
                alt="Façade White Palace Hôtel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* 2x2 grid on the right */}
            <div className="sm:col-span-6 grid grid-cols-2 gap-4">
              {/* Photo 1: Reception */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#E2EAE5] group bg-gray-100">
                <img
                  src="/nouvelles_photos/accueil_1.jpg"
                  alt="Accueil Réception"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Photo 2: Salle restaurant */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#E2EAE5] group bg-gray-100">
                <img
                  src="/nouvelles_photos/salle-restaurant_1.jpg"
                  alt="Salle de restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Photo 3: Chambre */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#E2EAE5] group bg-gray-100">
                <img
                  src="/nouvelles_photos/chambre_lit_1.jpg"
                  alt="Chambre de l'hôtel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Photo 4: Vue sunset */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#E2EAE5] group bg-gray-100">
                <img
                  src="/nouvelles_photos/vue_sur_tana.jpg"
                  alt="Vue sur Antananarivo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: LOCALISATION (FROM IMAGE 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2EAE5] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Reception Desk Photo with curved top-right border */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden organic-location-curve border border-[#E2EAE5] shadow-sm bg-gray-100">
                <img
                  src="/nouvelles_photos/accueil_1.jpg"
                  alt="Réception du White Palace Hôtel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle: Details & Itinéraire Button */}
            <div className="md:col-span-4 space-y-4">
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#4D6D63] uppercase">
                LOCALISATION
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E382F] leading-tight">
                Nous trouver
              </h2>

              <div className="space-y-2.5 text-xs sm:text-[13px] text-[#556B63] font-light">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>Lot VB 12, Ambatoroka, Antananarivo</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>+261 32 07 669 98</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>whitepalacehtananarivo@gmail.com</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Lot+VB+12+Ambatoroka+Antananarivo"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#233D34] hover:bg-[#1A2E27] text-white text-xs font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Itinéraire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Real Interactive Map Location */}
            <div className="md:col-span-4 h-full min-h-[240px]">
              <div className="w-full h-full min-h-[240px] rounded-2xl overflow-hidden border border-[#E2EAE5] shadow-xs">
                <iframe
                  title="Carte de localisation White Palace Hôtel Antananarivo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15096.38883606774!2d47.5300!3d-18.9248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e1123456789%3A0x123456789abcdef!2sAmbatoroka%2C%20Antananarivo!5e0!3m2!1sfr!2smg!4v1700000000000!5m2!1sfr!2smg"
                  className="w-full h-full min-h-[240px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: CTA BANNER "Votre séjour vous attend" (100% FULL WIDTH, NO BORDER-RADIUS) */}
      <section className="w-full relative overflow-hidden">
        <div className="relative w-full">
          {/* Background image: exact photo vue_sur_tana.jpg */}
          <div className="absolute inset-0 z-0">
            <img
              src="/nouvelles_photos/vue_sur_tana.jpg"
              alt="Vue panoramique Antananarivo"
              className="w-full h-full object-cover"
            />
            {/* Dark green overlay matching mockup */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A31]/95 via-[#233D34]/90 to-[#1F3A31]/85" />
          </div>

          {/* Leaf watermark decorative */}
          <div className="absolute -left-6 -bottom-6 pointer-events-none opacity-20 z-10 select-none">
            <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20C40 50 30 75 10 90C60 90 75 60 60 30C45 10 30 5 20 20Z" fill="white" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 lg:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
            <div className="space-y-1.5 max-w-xl">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                Votre séjour vous attend
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Réservez dès maintenant et vivez une expérience inoubliable au White Palace Hôtel.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenRoomBooking()}
                className="group inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#1F3A31] text-xs sm:text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Réserver maintenant</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER (FROM IMAGE 1) */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
};
