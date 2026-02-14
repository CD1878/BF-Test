import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Button from './Button';

const eventsData = [
  {
    id: 1,
    title: "Oyster Sunday",
    subtitle: "Oesters vanaf €1,00",
    description: "Speciaal op de Oyster Sunday trekken wij alle bubbels open, zodat je ze ook per glas kunt bestellen.",
    image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/b9475b59-bb04-4df4-9ffe-8e68c2474019/IMG_2915+groot.jpeg",
    price: "€1,00",
    link: "#reservation",
    colSpan: "col-span-1 lg:col-span-1"
  },
  {
    id: 2,
    title: "Thursday Cocktail Night",
    subtitle: "Cocktails €7,50",
    description: "Elke donderdag genieten van onze signature cocktails voor een speciale prijs. De perfecte start van je weekend.",
    image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/36f8233e-48aa-4bd8-9ddc-c3d00969561b/IMG_4944.JPG",
    price: "€7,50",
    link: "#reservation",
    colSpan: "col-span-1 lg:col-span-1"
  },
  {
    id: 3,
    title: "Vroege Vogel Voordeel",
    subtitle: "15% Korting",
    description: "Schuif aan tussen 17:00 en 17:30 en geniet van 15% korting op de gehele rekening op vrijdag en zaterdag.",
    image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/2dd88d97-6399-4c50-a7ce-a8a443cb4516/Vroege+vogel+voordeel+-+Blue+Fusion.jpg",
    price: "-15%",
    link: "#reservation",
    colSpan: "col-span-1 lg:col-span-1"
  },
  {
    id: 4,
    title: "Signature Rice Table",
    subtitle: "Wednesday Special",
    description: "Ervaar onze beroemde rijsttafel met diverse fusion gerechtjes om te delen. Een culinaire reis op woensdag.",
    image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/51b20e79-9636-4a9c-8408-ff994d7579f0/IMG_4833.JPG", // Placeholder
    price: "€32,50",
    link: "#reservation",
    colSpan: "col-span-1 lg:col-span-1"
  }
];

const EventsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; // Adjust scroll amount
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="events" className="bg-bf-cream py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2">
          <div>
            <h3 className="font-sans text-bf-gold uppercase tracking-widest text-sm mb-2 font-bold">What's On</h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bf-espresso">
              Events & Specials
            </h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-bf-espresso/20 hover:bg-bf-caramel hover:text-white hover:border-bf-caramel transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-bf-espresso/20 hover:bg-bf-caramel hover:text-white hover:border-bf-caramel transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {/* Added pr-20 (padding right) to allow last item to be seen better and masking */}
        <div className="relative">
          {/* Removed Soft Gradient Mask as per user feedback */}

          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="min-w-[320px] md:min-w-[420px] lg:min-w-[480px] relative group snap-center cursor-pointer"
              >
                {/* Image Container with HIPPER Hover Effect */}
                <div className="relative h-[500px] md:h-[650px] w-full rounded-[40px] overflow-hidden shadow-lg transition-all duration-500 ease-out 
                        group-hover:shadow-[0_25px_60px_-15px_rgba(166,124,82,0.6)] 
                        group-hover:-translate-y-4 
                        group-hover:scale-[1.02]
                        border border-transparent group-hover:border-bf-gold/30"
                >
                  {/* Brighter image on hover */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Gradient Overlay - Dynamic opacity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bf-espresso via-bf-espresso/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                  {/* HIPPER Light Up Effect - Radial Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-bf-gold/0 via-bf-gold/10 to-bf-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

                  {/* Close button simulation (optional aesthetic) or just clean */}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-bf-cream transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Subtitle/Badge Pop */}
                    <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] uppercase font-bold tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-sm group-hover:bg-bf-caramel group-hover:border-bf-caramel transition-colors duration-300">
                      {event.subtitle}
                    </div>

                    <h3 className="font-serif text-4xl md:text-5xl mb-4 leading-none text-white group-hover:text-bf-cream transition-colors duration-300 drop-shadow-md">
                      {event.title}
                    </h3>

                    <p className="font-sans text-base text-gray-200 mb-8 leading-relaxed line-clamp-2 md:line-clamp-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-bf-gold group-hover:text-white transition-colors duration-300 group-hover:underline underline-offset-8 decoration-bf-gold">
                      Check it out and book
                      <span className="bg-white/20 p-1.5 rounded-full group-hover:bg-bf-gold transition-colors">
                        <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;