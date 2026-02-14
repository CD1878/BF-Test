import React from 'react';
import Button from './Button';

const ReservationCTA: React.FC = () => {
  return (
    <section id="reservation" className="bg-bf-espresso py-24 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-bf-cream mb-6">
          Tafel reserveren
        </h2>
        <p className="text-bf-taupe font-sans mb-8 max-w-2xl mx-auto font-light">
          Wil je reserveren voor méér dan 10 personen? Gebruik dan hier het <a href="#groups" className="text-bf-gold underline underline-offset-4 decoration-1 hover:text-bf-cream transition-colors">formulier voor groepsreserveringen</a>.
        </p>
        <Button variant="primary" className="!bg-bf-caramel !text-bf-cream hover:!bg-bf-choco border-none">
          Tafel reserveren
        </Button>
      </div>
    </section>
  );
};

export default ReservationCTA;