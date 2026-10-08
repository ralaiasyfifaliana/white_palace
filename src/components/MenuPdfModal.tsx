import React from 'react';
import { X, Download, Printer, UtensilsCrossed, Sparkles } from 'lucide-react';
import { MENU_ITEMS, HOTEL_INFO } from '../data/hotelData';

interface MenuPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuPdfModal: React.FC<MenuPdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const entrees = MENU_ITEMS.filter(m => m.category === 'entrees');
  const plats = MENU_ITEMS.filter(m => m.category === 'plats');
  const desserts = MENU_ITEMS.filter(m => m.category === 'desserts');
  const boissons = MENU_ITEMS.filter(m => m.category === 'boissons');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#faf8f5] text-[#111827] border-2 border-amber-500/40 rounded-xl max-w-3xl w-full shadow-2xl overflow-hidden my-auto relative p-8 sm:p-12">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-slate-900 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Action Header */}
        <div className="flex justify-between items-center pb-6 border-b border-amber-900/20 mb-8">
          <div className="flex items-center gap-2 text-slate-900">
            <UtensilsCrossed className="w-5 h-5 text-amber-700" />
            <span className="text-xs uppercase tracking-widest font-semibold">CARTE GASTRONOMIQUE COMPLÈTE</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded bg-slate-900 text-amber-100 text-xs flex items-center gap-1.5 hover:bg-slate-800 transition-colors shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer</span>
            </button>
            <button
              onClick={() => alert('Téléchargement du menu PDF en cours...')}
              className="px-3 py-1.5 rounded bg-amber-700 text-white text-xs flex items-center gap-1.5 hover:bg-amber-800 transition-colors shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF (3.2 Mo)</span>
            </button>
          </div>
        </div>

        {/* Menu Print Content */}
        <div className="text-center space-y-8 font-serif">
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-800 uppercase block mb-1">RESTAURANT GASTRONOMIQUE</span>
            <h2 className="text-3xl font-bold tracking-widest text-[#0F172A] uppercase">WHITE PALACE</h2>
            <p className="text-xs italic text-slate-800 mt-1 font-sans">
              Proposé par notre Chef & mariant les trésors naturels de Madagascar
            </p>
          </div>

          {/* Entrées */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-900 border-b border-amber-900/20 pb-1 w-32 mx-auto">
              ENTRÉES
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {entrees.map(item => (
                <div key={item.id} className="text-left font-sans">
                  <div className="flex justify-between font-serif font-bold text-sm text-[#0F172A]">
                    <span>{item.title}</span>
                    <span className="text-amber-800">{item.price.toLocaleString('fr-MG')} Ar</span>
                  </div>
                  <p className="text-xs text-slate-900/80 font-light mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plats */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-900 border-b border-amber-900/20 pb-1 w-32 mx-auto">
              PLATS PRINCIPAUX
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {plats.map(item => (
                <div key={item.id} className="text-left font-sans">
                  <div className="flex justify-between font-serif font-bold text-sm text-[#0F172A]">
                    <span>{item.title}</span>
                    <span className="text-amber-800">{item.price.toLocaleString('fr-MG')} Ar</span>
                  </div>
                  <p className="text-xs text-slate-900/80 font-light mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-900 border-b border-amber-900/20 pb-1 w-32 mx-auto">
              DESSERTS & DOUCEURS
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {desserts.map(item => (
                <div key={item.id} className="text-left font-sans">
                  <div className="flex justify-between font-serif font-bold text-sm text-[#0F172A]">
                    <span>{item.title}</span>
                    <span className="text-amber-800">{item.price.toLocaleString('fr-MG')} Ar</span>
                  </div>
                  <p className="text-xs text-slate-900/80 font-light mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-amber-900/20 text-xs font-sans text-slate-900/70 italic">
            Tous nos prix sont exprimés en Euros TTC. Service et taxes incluses.<br/>
            Produits biologiques issus de petits producteurs régionaux d'Andasibe.
          </div>
        </div>

      </div>
    </div>
  );
};
