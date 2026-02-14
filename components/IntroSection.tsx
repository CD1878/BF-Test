import React from 'react';
import Button from './Button';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-bf-taupe py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Images Area */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            {/* Top Image */}
            <div className="absolute top-0 left-0 w-3/4 h-3/5 z-10">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/51b20e79-9636-4a9c-8408-ff994d7579f0/IMG_4833.JPG"
                alt="Dining Table Atmosphere"
                className="w-full h-full object-cover rounded-[15px] shadow-lg"
              />
            </div>
            {/* Bottom Image */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/5 z-20">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/4304ca80-0b1c-4c9c-9929-92e1a5a6f71d/IMG_4834.JPG"
                alt="Food Dishes"
                className="w-full h-full object-cover rounded-[15px] shadow-xl border-4 border-bf-taupe"
              />
            </div>
          </div>

          {/* Text Area */}
          <div className="w-full lg:w-1/2 text-bf-espresso">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Blue Fusion Kitchen & Bar
            </h2>
            <div className="space-y-6 text-bf-choco font-sans font-medium leading-relaxed">
              <p>
                Welkom bij Blue Fusion Kitchen & Bar – dé nieuwe hotspot van Kijkduin! Gelegen op de mooiste hoek van de gloednieuwe winkelstraat, met aan de ene kant gezellige winkels en aan de andere kant de levendige foodcourt. En ja, het strand is letterlijk om de hoek.
              </p>
              <p>
                Bij ons draait alles om shared dining – samen proeven, lachen en genieten. Laat je verrassen door onze wereldse gerechten om te delen, verrassende wijnen en creatieve cocktails. Van verse oesters tot kleurrijke fusion-bites: elk gerecht is gemaakt om te delen.
              </p>
              <p>
                Bij Blue Fusion draait het niet alleen om eten, maar om beleving. Een relaxte sfeer, fijne muziek, goede vibes en gastvrijheid zoals je die het liefst overal zou willen. Elke 3 maanden een nieuwe kaart zodat jouw bezoek altijd verrassend is.
              </p>
              <p className="font-bold text-bf-espresso">
                Kom langs, schuif aan en ontdek waar Blue voor staat: samen genieten!
              </p>
            </div>
            <div className="mt-10">
              <Button variant="primary" href="https://widget.thefork.com/a30e4e59-2183-4b34-83a4-8d2a151ae152" target="_blank" rel="noopener noreferrer" className="!bg-bf-caramel !text-bf-cream hover:!bg-bf-choco border-none">
                Direct reserveren
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;