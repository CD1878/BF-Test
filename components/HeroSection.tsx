import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/7b7df9a0-9bae-4305-9596-49a9f090ec66/PHOTO-2025-08-08-15-46-45+groot.jpeg?format=2500w')" }}
    >
      {/* Overlay: Warmer Espresso tint */}
      <div className="absolute inset-0 bg-bf-espresso/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-bf-cream font-serif text-5xl md:text-7xl lg:text-8xl mb-4 tracking-wide leading-tight drop-shadow-lg">
          <span className="text-bf-cream">Fusion Kitchen & Bar</span>
        </h1>
        <p className="text-bf-cream font-sans text-xl md:text-2xl uppercase tracking-[0.2em] mb-12 drop-shadow-md">
          Kijkduin
        </p>

      </div>
    </section>
  );
};

export default HeroSection;