import React, { useState } from 'react';
import { HOTEL_INFO, FAQ_ITEMS, HOTEL_EXTERIOR_IMAGE, RESTAURANT_INTERIOR_IMAGE } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { HeroWaveMask } from '../components/HeroWaveMask';
import { Reveal } from '../components/Reveal';
import {
  PhoneCall,
  Headphones,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Building2,
  ParkingCircle,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (view: string) => void;
  onOpenRoomBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenRoomBooking }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Demande d’information générale');
  const [message, setMessage] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="relative overflow-hidden bg-[#F7FAF8] pt-20 sm:pt-24">
      {/* 1. HERO SECTION - FULL BLEED */}
      <section className="relative w-full h-auto md:h-[600px] lg:h-[650px] bg-white flex flex-col md:flex-row">
        <div className="w-full h-64 md:hidden relative">
          <img
            src={HOTEL_EXTERIOR_IMAGE}
            alt="Contact White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src={HOTEL_EXTERIOR_IMAGE}
            alt="Contact White Palace Hôtel"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="relative w-full md:w-[50%] lg:w-[45%] h-full bg-[#F7FAF8] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-12 md:py-0 z-10">
          <HeroWaveMask fill="#F7FAF8" />
          <BotanicalLeaf className="top-4 left-0 -translate-x-1/4 -z-10" opacity={0.22} />

          <Reveal className="space-y-6 relative z-10" delay={200}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4D6D63]">
              NOUS CONTACTER
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#233D34] leading-tight">
              Une question ? Notre équipe est là pour vous répondre
            </h1>

            <p className="text-sm sm:text-base text-[#5A7268] leading-relaxed max-w-md">
              Que ce soit pour une réservation, une demande d'information ou une suggestion, n'hésitez
              pas à nous contacter. Nous serons ravis de vous accompagner et de rendre votre séjour
              inoubliable.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2EAE5] bg-white shadow-sm flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-[#233D34]" />
                </div>
                <span className="text-[10px] font-medium text-[#4D6D63] leading-tight">Réponse rapide<br />sous 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2EAE5] bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4 text-[#233D34]" />
                </div>
                <span className="text-[10px] font-medium text-[#4D6D63] leading-tight">Une équipe disponible<br />et à l'écoute</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2EAE5] bg-white shadow-sm flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#233D34]" />
                </div>
                <span className="text-[10px] font-medium text-[#4D6D63] leading-tight">Votre satisfaction<br />est notre priorité</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={500} className="hidden md:block absolute top-[20%] right-[10%] transform -rotate-6 z-20 pointer-events-none">
          <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-4xl tracking-wide">
            Nous serons ravis de vous accueillir !
          </span>
        </Reveal>
      </section>

      {/* 2. NOS COORDONNÉES */}
      <section className="py-16 sm:py-20 bg-[#F7FAF8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4D6D63]">
              NOS COORDONNÉES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#233D34] mt-1">
              Où nous trouver ?
            </h2>
            <p className="text-sm text-[#5A7268] mt-2">
              Notre hôtel est idéalement situé au cœur d'Antananarivo, facilement accessible et proche
              des principaux centres d'intérêt de la ville.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Contact Info List */}
            <Reveal direction="left" className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EDF2EE] text-[#233D34] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#233D34]">Adresse</h4>
                  <p className="text-xs text-[#5A7268] mt-0.5">{HOTEL_INFO.address}</p>
                  <span className="text-[11px] text-gray-400">(à proximité du centre-ville)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EDF2EE] text-[#233D34] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#233D34]">Téléphone</h4>
                  <a
                    href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs text-[#5A7268] hover:text-[#233D34] block mt-0.5 font-medium"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EDF2EE] text-[#233D34] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#233D34]">Email</h4>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-xs text-[#5A7268] hover:text-[#233D34] block mt-0.5 font-medium"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EDF2EE] text-[#233D34] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#233D34]">Horaires de réception</h4>
                  <p className="text-xs text-[#5A7268] mt-0.5">{HOTEL_INFO.receptionHours}</p>
                </div>
              </div>
            </Reveal>

            {/* Center: Map Graphic Card */}
            <Reveal delay={150} className="rounded-2xl overflow-hidden border border-[#E2EAE5] bg-[#EDF2EE] p-6 flex flex-col items-center justify-between text-center relative aspect-[4/3] shadow-md">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#233D34_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                Tsaralalàna • Antananarivo
              </div>

              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D8E4DC] max-w-[220px]">
                <div className="w-8 h-8 rounded-full bg-[#233D34] text-white flex items-center justify-center mx-auto mb-1.5 shadow">
                  <Navigation className="w-4 h-4" />
                </div>
                <h5 className="font-serif font-bold text-xs text-[#233D34]">
                  White Palace Hôtel
                </h5>
                <p className="text-[10px] text-gray-500">Tsaralalàna, Tananarive</p>
              </div>

              <div className="relative z-10">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#233D34] hover:bg-[#1A2E27] text-white text-[11px] font-semibold transition shadow"
                >
                  <span>Voir sur Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </Reveal>

            {/* Right: Accès Facile */}
            <Reveal delay={300} direction="right" className="bg-[#F7FAF8] rounded-2xl p-6 border border-[#E2EAE5] space-y-4">
              <h4 className="font-serif text-base font-bold text-[#233D34]">Accès facile</h4>
              <div className="space-y-3.5 text-xs text-[#4D6D63]">
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>À 15 min de l'Aéroport international d'Ivato</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>À 10 min du centre-ville</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>Proche des commerces et sites touristiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <ParkingCircle className="w-4 h-4 text-[#233D34] shrink-0" />
                  <span>Parking sécurisé sur place</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. ENVOYEZ-NOUS UN MESSAGE */}
      <section className="py-16 sm:py-20 bg-white relative">
        <BotanicalLeaf className="top-8 right-0 translate-x-1/4" flip={true} opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Photo + script */}
            <Reveal direction="left" className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
                <img
                  src={RESTAURANT_INTERIOR_IMAGE}
                  alt="Réception White Palace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6">
                  <span className="font-script text-white text-2xl sm:text-3xl leading-snug">
                    Un message et nous vous répondons au plus vite !
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right: Contact Form */}
            <Reveal delay={150} className="lg:col-span-7 bg-[#F7FAF8] rounded-3xl p-8 sm:p-10 border border-[#E2EAE5] shadow-xl">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4D6D63]">
                  ENVOYEZ-NOUS UN MESSAGE
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#233D34] mt-1">
                  Nous écrire
                </h2>
                <p className="text-xs text-[#5A7268] mt-1">
                  Remplissez le formulaire ci-dessous, nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {formSent ? (
                <div className="text-center py-10 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#233D34] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#233D34]">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-xs text-[#5A7268]">
                    Merci {name}, votre demande concernant « {subject} » a bien été transmise à notre équipe.
                    Une réponse vous parviendra très rapidement par email ({email}).
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#233D34] text-white text-xs font-semibold tracking-wider uppercase"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4D6D63] mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#233D34]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4D6D63] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@domaine.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#233D34]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D6D63] mb-1">
                      Objet de votre message *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#233D34] bg-white"
                    >
                      <option>Demande d’information générale</option>
                      <option>Réservation de chambre</option>
                      <option>Réservation restaurant / banquet</option>
                      <option>Service conciergerie & transfert</option>
                      <option>Partenariat d'entreprise</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D6D63] mb-1">
                      Votre message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Comment pouvons-nous vous aider ?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#233D34]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#233D34] hover:bg-[#1A2E27] text-white text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95"
                  >
                    <span>Envoyer le message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. QUESTIONS FRÉQUENTES */}
      <section className="py-16 sm:py-20 bg-[#F7FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Accordion */}
            <Reveal className="lg:col-span-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4D6D63]">
                QUESTIONS FRÉQUENTES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#233D34] mt-1">
                Vous avez une autre question ?
              </h2>
              <p className="text-sm text-[#5A7268] mt-1 mb-8">
                Retrouvez ici les réponses aux questions les plus courantes.
              </p>

              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {FAQ_ITEMS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div key={faq.id} className="py-4">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between text-left gap-4 group"
                      >
                        <span className="text-sm font-semibold text-[#233D34] group-hover:text-[#1A2E27] transition">
                          {faq.question}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-[#EDF2EE] text-[#233D34] flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-3 text-xs text-[#5A7268] leading-relaxed pr-8 animate-fadeIn">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Right: Dark Green Callout Card */}
            <Reveal delay={200} direction="right" className="lg:col-span-4 bg-[#233D34] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between text-center relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white">
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
                  <div className="text-left">
                    <div className="font-serif text-base font-bold tracking-[0.15em] uppercase leading-tight">
                      WHITE PALACE
                    </div>
                    <div className="font-serif italic text-[11px] text-white/80 leading-none tracking-wider">
                      Hôtel
                    </div>
                  </div>
                </div>
                <div className="pt-4 font-script text-3xl text-emerald-200 leading-tight">
                  À très bientôt au White Palace Hôtel !
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onOpenRoomBooking()}
                  className="w-full py-3.5 rounded-full border border-white text-white hover:bg-white hover:text-[#233D34] text-xs font-semibold tracking-wider uppercase transition shadow"
                >
                  Réserver maintenant
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
