import React from 'react';
import Button from './Button';
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bf-espresso text-bf-taupe py-10 md:py-20 font-sans text-sm font-light tracking-wide">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-left">

          {/* Locatie */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-lg text-bf-cream mb-4 md:mb-6">Locatie</h4>
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
            <h4 className="font-serif text-lg text-bf-cream mb-4 md:mb-6">Openingstijden</h4>
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
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="font-serif text-lg text-bf-cream mb-4 md:mb-6">Contact</h4>
            <p className="mb-2 text-xs">
              <a href="mailto:info@bluefusionkitchenbar.nl" className="hover:text-bf-cream transition-colors underline decoration-1 underline-offset-4">
                info@bluefusionkitchenbar.nl
              </a>
            </p>
            <p className="mb-6 md:mb-8 text-xs">
              <a href="tel:0629146799" className="hover:text-bf-cream transition-colors underline decoration-1 underline-offset-4">
                0629146799
              </a>
            </p>

            <div className="flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-0">
              <div className="mt-4 md:mt-4 order-2 md:order-1">
                <img
                  src="https://www.s-bb.nl/sites/default/files/sbb_erkend_leerbedrijf_rgb.png"
                  alt="SBB Erkend Leerbedrijf"
                  className="w-32 h-auto opacity-80 hover:opacity-100 transition-opacity brightness-0 invert"
                />
              </div>

              <Button
                variant="primary"
                href="https://widget.thefork.com/a30e4e59-2183-4b34-83a4-8d2a151ae152"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0 md:mt-8 !bg-bf-cream !text-bf-espresso !px-8 !py-3 !text-sm !font-bold !tracking-wide !rounded-sm hover:!bg-white hover:!scale-105 shadow-md transition-all duration-300 order-1 md:order-2"
              >
                Reserveer een tafel
              </Button>
            </div>
          </div>

        </div>

        <div className="text-center mt-12 md:mt-24 text-[10px] text-gray-700">
          <p>© 2026 Blue Fusion Tapasbar Kijkduin. All rights reserved | Made by <a href="https://www.chefdigital.nl" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">Chef Digital</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;