import React from 'react';
import Button from './Button';

const LunchSection: React.FC = () => {
  return (
    <section className="bg-bf-espresso py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Text Area */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <h3 className="text-bf-gold font-sans uppercase tracking-widest text-sm mb-4">
              Lunchen
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bf-cream mb-8">
              Bij Blue Fusion
            </h2>
            <p className="text-bf-cream/80 font-sans font-light mb-8 leading-relaxed">
              Kom op vrijdag, zaterdag en zondag gezellig lunchen bij ons!
              <br /><br />
              Geniet van onze uitgebreide lunchgerechten, de fijne sfeer en een goed glas wijn.
            </p>
            <div>
              <button className="border border-bf-caramel text-bf-cream px-8 py-3 uppercase text-sm tracking-wider hover:bg-bf-caramel hover:text-bf-cream transition-colors duration-300">
                Bekijk menukaart
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[15px] overflow-hidden aspect-[3/4] lg:aspect-[4/5] mx-auto lg:mx-0 max-w-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/5496e557-b95e-4964-9203-bc95db766742/PHOTO-2025-10-22-09-44-02+2.jpg"
                alt="Lunch Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LunchSection;