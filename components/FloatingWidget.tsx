import React from 'react';

const FloatingWidget: React.FC = () => {
  return (
    <a
      href="https://widget.thefork.com/a30e4e59-2183-4b34-83a4-8d2a151ae152"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group"
    >
      <div className="bg-bf-gold text-white font-serif tracking-widest uppercase text-xs md:text-sm font-bold py-4 px-8 rounded-full shadow-2xl hover:bg-bf-cream hover:text-bf-espresso transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 border border-white/10 backdrop-blur-sm">
        <span>Reserveer een tafel</span>
      </div>

      {/* Pulse Effect */}
      <span className="absolute -inset-1 rounded-full bg-bf-gold opacity-30 animate-ping group-hover:hidden"></span>
    </a>
  );
};

export default FloatingWidget;