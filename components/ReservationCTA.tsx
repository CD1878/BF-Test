import React from 'react';
import Button from './Button';

const ReservationCTA: React.FC = () => {
  return (
    <section id="groups" className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-groups-pattern bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/2dd88d97-6399-4c50-a7ce-a8a443cb4516/Vroege+vogel+voordeel+-+Blue+Fusion.jpg')" }} // Using a nice interior shot override just in case
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-bf-espresso/70"></div>

      {/* Content Card (Glassmorphism) */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-bf-espresso/40 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[2rem] shadow-2xl text-center transform transition-all hover:scale-[1.01] duration-500">

          <h2 className="font-serif text-4xl md:text-6xl text-bf-cream mb-8 tracking-wide drop-shadow-lg">
            Groepen & Zakelijk
          </h2>

          <div className="w-24 h-1 bg-bf-gold mx-auto mb-8 rounded-full"></div>

          <p className="text-bf-cream/90 font-sans text-lg md:text-xl mb-12 leading-relaxed font-light">
            Kom je met méér dan 12 personen of wil je een zakelijke reservering doen voor een groter gezelschap?
            Maak dan gebruik van ons reserveringsformulier voor groepen. Wij houden hier dan speciaal rekening mee.
          </p>

          <Button
            variant="primary"
            href="#groups-form" // Assuming there's a form or they want a link
            className="!bg-bf-gold !text-bf-espresso hover:!bg-white hover:!text-bf-espresso !px-10 !py-4 !text-sm !tracking-[0.2em] font-bold shadow-lg hover:shadow-bf-gold/50 border-none"
          >
            GROEPSRESERVERING
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;