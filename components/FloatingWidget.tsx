import React from 'react';

const FloatingWidget: React.FC = () => {
  return (
    <a 
      href="#reservation"
      className="fixed right-0 top-[85%] transform -translate-y-1/2 z-[100] hidden md:flex"
    >
      <div className="bg-white border border-[#00645a] text-[#00645a] font-medium py-3 px-6 rounded-l-md shadow-md hover:font-bold transition-all w-64 text-center flex items-center justify-center cursor-pointer">
        Reserveer een tafel
      </div>
    </a>
  );
};

export default FloatingWidget;