import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "C Victor",
      image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/5496e557-b95e-4964-9203-bc95db766742/PHOTO-2025-10-22-09-44-02+2.jpg", // Using placeholder/interior shot as avatar
      text: "We enjoyed the dining for 2 at Blue Fusion, food was not bad, service was good, our waitress was very friendly. The tuna tartar is a little bit too sweet for my personal taste so was the salmon. Overall nice experience."
    },
    {
      name: "Emma Murhammer",
      image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/36f8233e-48aa-4bd8-9ddc-c3d00969561b/IMG_4944.JPG",
      text: "We all got the four course menu and it was so delicious we couldn't stop talking about it. The size of the dishes was perfect and the whole menu was very well thought through. The food was out of this world."
    },
    {
      name: "Olivix Kamango",
      image: "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/4304ca80-0b1c-4c9c-9929-92e1a5a6f71d/IMG_4833.JPG",
      text: "We visited as looking for a nice place to have a drink and a burrata, and we were absolutely impressed. The atmosphere and decor are just wauw—so stylish and welcoming. The staff were incredibly friendly."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-bf-espresso py-24 px-4 md:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-12 md:mb-20">
          <h3 className="font-sans text-bf-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Check out our reviews
          </h3>
          <h2 className="font-serif text-3xl md:text-5xl text-bf-cream">
            What Our Guests Say
          </h2>
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden relative px-4">
          <div className="relative mt-12">
            {/* Card */}
            <div className="bg-[#0F0F0F] p-8 pb-12 rounded-[2rem] text-center min-h-[400px] flex flex-col justify-center pt-16 border border-bf-gold/10">
              {/* Avatar */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-[#1A0505] overflow-hidden shadow-lg">
                <img
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="font-serif text-2xl text-white mb-6">
                {reviews[currentIndex].name}
              </h4>

              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button onClick={prevReview} className="p-2 rounded-full border border-bf-gold/20 text-bf-gold hover:bg-bf-gold hover:text-black transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-bf-gold w-4' : 'bg-bf-gold/30'}`}
                />
              ))}
            </div>
            <button onClick={nextReview} className="p-2 rounded-full border border-bf-gold/20 text-bf-gold hover:bg-bf-gold hover:text-black transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 md:gap-12 mt-12">
          {reviews.map((review, index) => (
            <div key={index} className="relative mt-12">
              <div className="bg-[#0F0F0F] p-8 pb-12 rounded-[2rem] text-center h-full pt-16 hover:transform hover:-translate-y-2 transition-transform duration-300 border border-bf-gold/5 hover:border-bf-gold/20">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-[#1A0505] overflow-hidden shadow-lg">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-serif text-2xl text-white mb-6">
                  {review.name}
                </h4>

                <p className="font-sans text-gray-300 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;