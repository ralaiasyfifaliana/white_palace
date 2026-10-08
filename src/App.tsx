import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { TableBookingModal } from './components/TableBookingModal';
import { VideoModal } from './components/VideoModal';
import { MenuPdfModal } from './components/MenuPdfModal';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<string>('chambre-luxe');

  // Modal States
  const [roomBookingOpen, setRoomBookingOpen] = useState(false);
  const [tableBookingOpen, setTableBookingOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [menuPdfModalOpen, setMenuPdfModalOpen] = useState(false);

  // Booking search params
  const [searchParams, setSearchParams] = useState({
    checkIn: '2026-10-15',
    checkOut: '2026-10-18',
    adults: 2,
    children: 0,
    promoCode: ''
  });

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRoomDetail = (roomId: string) => {
    setSelectedRoomId(roomId);
    setCurrentPage('room-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRoomBooking = (roomId?: string) => {
    if (roomId) {
      setSelectedRoomId(roomId);
    }
    setRoomBookingOpen(true);
  };

  const handleSearchRooms = (params: any) => {
    setSearchParams(params);
    setRoomBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF8] text-[#233D34] font-sans selection:bg-[#233D34] selection:text-white">
      {/* Navigation Header */}
      <Header
        currentView={currentPage}
        onNavigate={handleNavigate}
        onOpenRoomBooking={() => handleOpenRoomBooking()}
        onOpenTableBooking={() => setTableBookingOpen(true)}
      />

      {/* Page Content Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenRoomDetail={handleOpenRoomDetail}
            onOpenVideoModal={() => setVideoModalOpen(true)}
            onOpenRoomBooking={() => handleOpenRoomBooking()}
            onOpenTableBooking={() => setTableBookingOpen(true)}
            onSearchRooms={handleSearchRooms}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavigate}
            onOpenRoomDetail={handleOpenRoomDetail}
            onOpenRoomBooking={handleOpenRoomBooking}
          />
        )}

        {currentPage === 'room-detail' && (
          <RoomDetailPage
            roomId={selectedRoomId}
            onNavigate={handleNavigate}
            onOpenRoomBooking={handleOpenRoomBooking}
          />
        )}

        {currentPage === 'restaurant' && (
          <RestaurantPage
            onNavigate={handleNavigate}
            onOpenTableBooking={() => setTableBookingOpen(true)}
            onOpenMenuPdf={() => setMenuPdfModalOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenRoomBooking={() => handleOpenRoomBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenRoomBooking={() => handleOpenRoomBooking()}
          />
        )}
      </main>

      {/* Footer for non-home pages (HomePage renders its own) */}
      {currentPage !== 'home' && <Footer onNavigate={handleNavigate} />}

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={roomBookingOpen}
        onClose={() => setRoomBookingOpen(false)}
        selectedRoomId={selectedRoomId}
        initialCheckIn={searchParams.checkIn}
        initialCheckOut={searchParams.checkOut}
        initialAdults={searchParams.adults}
        initialChildren={searchParams.children}
      />

      <TableBookingModal
        isOpen={tableBookingOpen}
        onClose={() => setTableBookingOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <MenuPdfModal
        isOpen={menuPdfModalOpen}
        onClose={() => setMenuPdfModalOpen(false)}
      />
    </div>
  );
}
