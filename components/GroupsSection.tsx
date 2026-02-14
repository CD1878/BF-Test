import React from 'react';
import Button from './Button';

const GroupsSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-48 bg-groups-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-bf-espresso/60"></div>

      <div className="relative z-10 container mx-auto px-4 flex justify-center items-center">
        <div className="bg-bf-cream/95 p-8 md:p-16 max-w-2xl text-center rounded-sm">
          <h2 className="font-serif text-3xl md:text-5xl text-bf-espresso mb-6">
            Groepen & Zakelijk
          </h2>
          <p className="font-sans text-bf-choco mb-8 leading-relaxed text-sm md:text-base">
            Kom je met méér dan 12 personen of wil je een zakelijke reservering doen voor een groter gezelschap? Maak dan gebruik van ons reserveringsformulier voor groepen. Wij houden hier dan speciaal rekening mee.
          </p>
          <Button variant="primary" href="#groups" className="!bg-[#C8BBA6] !border-[#C8BBA6] !text-black hover:!bg-[#b5a792]">
            Groepsreservering
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GroupsSection;