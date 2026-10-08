import { ShieldCheck, RefreshCw, Coffee, Lock } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Meilleur tarif garanti',
      desc: 'Réservez directement en ligne pour bénéficier du meilleur prix garanti'
    },
    {
      icon: RefreshCw,
      title: 'Annulation flexible',
      desc: 'Annulation sans frais jusqu\'à 48h avant votre arrivée au domaine'
    },
    {
      icon: Coffee,
      title: 'Petit-déjeuner inclus',
      desc: 'Buffet gourmand bio préparé quotidiennement par notre chef'
    },
    {
      icon: Lock,
      title: 'Paiement sécurisé',
      desc: 'Transactions 100% cryptées avec virement international garanti'
    }
  ];

  return (
    <div className="bg-[#050A14] border-y border-slate-900/60 py-10 px-4 sm:px-8 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {badges.map((b, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-slate-950/40 p-5 rounded-2xl border border-slate-800/40 backdrop-blur-sm hover:border-amber-400/40 transition-colors">
            <div className="p-3 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0">
              <b.icon className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-200">
                {b.title}
              </h4>
              <p className="text-[11px] text-slate-100/70 font-light leading-snug">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

