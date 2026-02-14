import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bf-espresso text-bf-taupe py-20 font-sans text-sm font-light tracking-wide">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center md:text-left">

          {/* Locatie */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg text-bf-cream mb-6">Locatie</h4>
            <p className="mb-4 text-bf-taupe leading-relaxed text-xs">
              Deltapromenade 304<br />
              2554 GX Den Haag
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="underline mb-6 text-bf-taupe hover:text-bf-cream transition-colors text-xs decoration-1 underline-offset-4">
              Navigeer direct
            </a>
            <p className="leading-relaxed max-w-xs text-[10px] text-gray-500">
              Eerste 1,5 uur gratis parkeren in de parkeergarage op loopafstand van onze bar
            </p>
          </div>

          {/* Openingstijden */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg text-bf-cream mb-6">Openingstijden</h4>
            <div className="leading-relaxed space-y-4 text-xs">
              <div>
                <span className="block text-bf-gold mb-1">Maandag</span>
                <span className="text-bf-cream/80">Gesloten</span>
              </div>
              <div>
                <span className="block text-bf-gold mb-1">Dinsdag — Donderdag</span>
                <span className="text-bf-cream/80">17:00 — 22:00</span>
              </div>
              <div>
                <span className="block text-bf-gold mb-1">Vrijdag - Zondag</span>
                <span className="text-bf-cream/80">13:00 — 23:00</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-end text-right">
            <h4 className="font-serif text-lg text-bf-cream mb-6">Contact</h4>
            <p className="mb-2 text-xs">
              <a href="mailto:info@bluefusionkitchenbar.nl" className="hover:text-bf-cream transition-colors underline decoration-1 underline-offset-4">
                info@bluefusionkitchenbar.nl
              </a>
            </p>
            <p className="mb-8 text-xs">
              <a href="tel:0629146799" className="hover:text-bf-cream transition-colors underline decoration-1 underline-offset-4">
                0629146799
              </a>
            </p>
            <p className="mb-8 text-xs underline decoration-1 underline-offset-4 hover:text-bf-cream cursor-pointer transition-colors">
              Reserveer direct
            </p>

            <div className="mt-4">
              <div className="bg-bf-cream p-1 w-16 h-16 flex items-center justify-center">
                <span className="text-[8px] text-bf-espresso font-bold text-center leading-tight">Erkend<br />Leerbedrijf</span>
              </div>
            </div>

            <button className="mt-8 bg-bf-cream text-bf-espresso px-4 py-2 text-xs font-bold rounded-sm shadow-sm hover:bg-white transition-colors">
              Reserveer een tafel
            </button>
          </div>

        </div>

        <div className="text-center mt-24 text-[10px] text-gray-700">
          <p>© 2026 Blue Fusion Tapasbar Kijkduin. All rights reserved | Made by <a href="#" className="hover:text-gray-500 transition-colors">Chef Digital</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;