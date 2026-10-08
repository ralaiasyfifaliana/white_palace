import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'rooms', label: 'Chambres' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#2A4745] text-white pt-14 pb-8 overflow-hidden">
      {/* Botanical leaf watermark bottom right matching mockup */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 translate-x-12 translate-y-12">
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C35 25 20 45 25 75C28 90 40 95 50 95C60 95 72 90 75 75C80 45 65 25 50 5Z" stroke="white" strokeWidth="2"/>
          <path d="M50 15V90M35 35L50 45M65 35L50 45M30 55L50 65M70 55L50 65M33 75L50 82M67 75L50 82" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top section: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10">
          {/* Col 1: Brand & tagline */}
          <div className="md:col-span-4 space-y-3">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              {/* Crest SVG */}
              <div className="w-10 h-10 flex items-center justify-center text-white shrink-0">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                  <path
                    d="M24 4L28 14H38L30 20L33 30L24 24L15 30L18 20L10 14H20L24 4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 36C12 36 17 32 24 32C31 32 36 36 36 36"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 42C15 42 19 39 24 39C29 39 33 42 33 42"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-serif text-lg font-bold tracking-[0.15em] text-white uppercase leading-tight">
                  WHITE PALACE
                </div>
                <div className="font-serif italic text-xs text-white/80 leading-none tracking-wider">
                  Hôtel
                </div>
              </div>
            </button>
            <p className="text-xs text-white/70 font-light pl-0.5">
              Un lieu d'exception à Antananarivo
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Col 3: Contact info & Socials */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center md:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-white/70" />
                <span>+261 32 07 669 98</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-white/70" />
                <span>whitepalacehtananarivo@gmail.com</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/70" />
                <span>Lot VB 12, Ambatoroka, Antananarivo</span>
              </div>
            </div>

            {/* Social icons row */}
            <div className="flex items-center md:justify-end gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2A4745] hover:border-white transition-all text-white/80"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2A4745] hover:border-white transition-all text-white/80"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2A4745] hover:border-white transition-all text-white/80"
                aria-label="TikTok"
              >
                <span className="text-[10px] font-bold">Tk</span>
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2A4745] hover:border-white transition-all text-white/80"
                aria-label="TripAdvisor"
              >
                <span className="text-[10px] font-bold">Ta</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <div>
            © 2025 White Palace Hôtel. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
              Mentions légales
            </button>
            <span>|</span>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
