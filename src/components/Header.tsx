import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenRoomBooking: () => void;
  onOpenTableBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenRoomBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'rooms', label: 'Chambres' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7FAF8]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#E5EDE8]'
          : 'bg-[#F7FAF8]/90 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo matching mockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          {/* White Palace logo */}
          <div className="w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/nouvelles_photos/Logo white palace.jpeg"
              alt="White Palace Hôtel"
              className="w-11 h-11 object-contain"
            />
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl font-bold tracking-[0.15em] text-[#233D34] uppercase leading-tight">
              WHITE PALACE
            </div>
            <div className="font-serif italic text-[11px] text-[#4D6D63] leading-none tracking-wider pl-0.5">
              Hôtel
            </div>
          </div>
        </button>

        {/* Navigation Links in Center */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal tracking-normal text-[#233D34]">
          {navItems.map((item) => {
            const isActive =
              currentView === item.id ||
              (currentView === 'room-detail' && item.id === 'rooms');
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#233D34] font-medium'
                    : 'text-[#4A635B] hover:text-[#233D34]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#233D34] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Reserve Pill Button on Right */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenRoomBooking}
            className="group inline-flex items-center gap-2 bg-[#233D34] hover:bg-[#1A2E27] text-white text-[13px] font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300"
          >
            <span>Réserver</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#233D34] hover:text-[#1A2E27] focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7FAF8] border-b border-[#E2EAE5] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 text-sm rounded-xl transition-colors ${
                  currentView === item.id
                    ? 'bg-[#EBF1ED] text-[#233D34] font-semibold'
                    : 'text-[#4A635B] hover:bg-[#EBF1ED]/50 hover:text-[#233D34]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2EAE5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRoomBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#233D34] text-white text-sm font-medium py-3 rounded-full shadow-md"
            >
              <span>Réserver</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
