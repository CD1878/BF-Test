import React from 'react';

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

  return (
    <section className="bg-[#1A0505] py-24 px-4 md:px-8 relative z-10"> {/* Very Dark Brown/Red Background */}
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-20">
          <h3 className="font-sans text-bf-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Check out our reviews
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {reviews.map((review, index) => (
            <div key={index} className="relative mt-12">
              {/* Card */}
              <div className="bg-[#0F0F0F] p-8 pb-12 rounded-[2rem] text-center h-full pt-16 hover:transform hover:-translate-y-2 transition-transform duration-300">
                {/* Avatar (Absolute positioned on top) */}
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
                  {review.text}
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