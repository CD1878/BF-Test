import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "Sanne de Vries",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjW-12345=s40-c-rp-mo-br100", // Generic Google-like avatar can be simulated or use initials if no real image
      text: "Fantastische avond gehad bij Blue Fusion! Het shared dining concept is geweldig, vooral de Peking eend en de sushi waren heerlijk. De sfeer in het restaurant is super chique en gezellig. De bediening was erg attent en vriendelijk. Wij komen zeker terug!",
      stars: 5,
      date: "2 weken geleden"
    },
    {
      name: "Mark Jansen",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjX-67890=s40-c-rp-mo-br100",
      text: "Wat een aanwinst voor Kijkduin! Heerlijk gegeten, de cocktails zijn echt een aanrader (vooral de Pornstar Martini). Het interieur is prachtig en straalt echt luxe uit. Een dikke 10 voor de gastvrijheid.",
      stars: 5,
      date: "Een maand geleden"
    },
    {
      name: "Lisa van der Berg",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjY-54321=s40-c-rp-mo-br100",
      text: "We hebben hier ons jubileum gevierd en het was perfect. Het eten is van hoge kwaliteit en mooi opgemaakt. De sfeer is 'Dark Luxury' zoals ze beloven. Echt genoten van de avond, bedankt team Blue Fusion!",
      stars: 5,
      date: "3 weken geleden"
    },
    {
      name: "Daan",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjZ-09876=s40-c-rp-mo-br100",
      text: "Super lekker gegeten! De bediening is vlot en vriendelijk. Mooie locatie aan de boulevard. Zeker een aanrader als je van shared dining houdt.",
      stars: 5,
      date: "Gisteren"
    },
    {
      name: "Sophie",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjA-13579=s40-c-rp-mo-br100",
      text: "Wauw, wat een mooie zaak! Het eten was verrukkelijk, vooral de desserts. Leuke muziek en goede vibes. Ik raad dit restaurant aan iedereen aan.",
      stars: 5,
      date: "4 dagen geleden"
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
    <section className="bg-bf-choco py-24 px-4 md:px-8 relative z-10 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Google G Logo Simulation */}
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="font-bold text-xs text-blue-500">G</span>
            </div>
            <h3 className="font-sans text-bf-gold uppercase tracking-[0.2em] text-xs font-bold">
              Google Reviews
            </h3>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-bf-cream">
            What Our Guests Say
          </h2>
          <div className="flex justify-center items-center gap-1 mt-4">
            <span className="text-bf-gold text-2xl">★★★★★</span>
            <span className="text-bf-cream/60 text-sm ml-2">4.8 / 5.0</span>
          </div>
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden relative px-4">
          <div className="relative mt-12">
            {/* Card */}
            <div className="bg-[#0F0F0F] p-8 pb-12 rounded-[2rem] text-center min-h-[350px] flex flex-col justify-center pt-12 border border-bf-gold/10 relative">
              {/* Google Icon Absolute */}
              <div className="absolute top-6 right-6 text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545,10.539H24c0.12,1.367,0.12,2.059,0.12,3.483c0,4.194-2.883,10.089-9.529,10.089 C6.845,24.111,0,18.527,0,12.067C0,5.592,6.965,0,14.591,0c3.743,0,6.855,1.404,9.155,3.618l-3.376,3.407 c-1.5-1.5-3.69-2.316-5.779-2.316c-4.991,0-9.157,4.027-9.157,8.922c0,4.896,4.03,8.718,8.875,8.718c3.279,0,5.88-1.517,7.311-3.618 l0.339-0.54h-7.394V10.539z" /></svg>
              </div>

              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-bf-gold/20 flex items-center justify-center text-bf-gold font-serif text-2xl border-2 border-bf-gold mb-4">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-xs text-gray-500 block mt-1">{reviews[currentIndex].date}</span>
                </div>
              </div>

              <div className="flex justify-center mb-6 text-bf-gold text-lg">
                {'★'.repeat(reviews[currentIndex].stars)}
              </div>

              <p className="font-sans text-gray-300 text-sm leading-relaxed italic">
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
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="relative mt-12">
              <div className="bg-[#0F0F0F] p-8 pb-12 rounded-[2rem] text-center h-full pt-12 hover:transform hover:-translate-y-2 transition-transform duration-300 border border-bf-gold/5 hover:border-bf-gold/20 relative">
                {/* Google Icon Absolute */}
                <div className="absolute top-6 right-6 text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545,10.539H24c0.12,1.367,0.12,2.059,0.12,3.483c0,4.194-2.883,10.089-9.529,10.089 C6.845,24.111,0,18.527,0,12.067C0,5.592,6.965,0,14.591,0c3.743,0,6.855,1.404,9.155,3.618l-3.376,3.407 c-1.5-1.5-3.69-2.316-5.779-2.316c-4.991,0-9.157,4.027-9.157,8.922c0,4.896,4.03,8.718,8.875,8.718c3.279,0,5.88-1.517,7.311-3.618 l0.339-0.54h-7.394V10.539z" /></svg>
                </div>

                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-bf-gold/20 flex items-center justify-center text-bf-gold font-serif text-2xl border-2 border-bf-gold mb-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white">
                      {review.name}
                    </h4>
                    <span className="text-xs text-gray-500 block mt-1">{review.date}</span>
                  </div>
                </div>

                <div className="flex justify-center mb-6 text-bf-gold text-lg">
                  {'★'.repeat(review.stars)}
                </div>

                <p className="font-sans text-gray-300 text-sm leading-relaxed italic">
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