import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';
import { ChevronDown, Star } from 'lucide-react';
import ReviewsSection from '../components/ReviewsSection';

const HeroSection = () => {
    return (
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-bf-dark text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Using a dark placeholder or texture if image fails, but using provided image class from CSS */}
                <div className="w-full h-full bg-bf-dark/80"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h4 className="font-serif italic text-xl md:text-2xl mb-4 text-bf-accent">
                    Een bijzondere locatie
                </h4>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Voor jouw feest of<br />zakelijke event
                </h1>
            </div>
        </section>
    );
};

const FeatureSection = () => {
    return (
        <section className="bg-bf-cream py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="overflow-hidden rounded-[15px]">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/7b7df9a0-9bae-4305-9596-49a9f090ec66/PHOTO-2025-08-08-15-46-45+groot.jpeg?format=1500w"
                                alt="Feest bij Blue Fusion"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bf-dark mb-6 leading-tight">
                            Vier jouw onvergetelijke moment bij ons
                        </h2>
                        <p className="font-sans text-gray-700 leading-relaxed mb-8 max-w-md">
                            Onze tapasbar biedt alles wat je nodig hebt voor een onvergetelijk moment. Of het nu een verjaardag is, babyshower, jubileum, of een bedrijfsborrel of teambuilding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExclusiveSection = () => {
    return (
        <section className="bg-bf-cream pb-20 lg:pb-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Text */}
                    <div className="order-1 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bf-dark mb-6 leading-tight">
                            Exclusieve afhuur
                        </h2>
                        <p className="font-sans text-gray-700 leading-relaxed mb-8 max-w-md">
                            Op maandag is onze locatie standaard exclusief beschikbaar voor privé- of zakelijke groepen. Maar ook op andere dagen kun je (in overleg) de locatie geheel of gedeeltelijk afhuren, afhankelijk van jullie wensen en de groepsgrootte.
                        </p>
                        <a href="#offerte" className="bg-bf-accent hover:bg-[#b08e68] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-[4px] transition-colors">
                            Offerte aanvragen
                        </a>
                    </div>

                    {/* Image */}
                    <div className="order-2 lg:order-2 relative">
                        <div className="overflow-hidden rounded-[15px]">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/fa067bb2-f2c5-4cce-897d-d736777b5f1a/PHOTO-2025-08-08-15-46-49+groot.jpeg?format=1500w"
                                alt="Interior"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ParallaxFoodSection = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/e83b0594-d58d-42df-8384-70acc59fa7af/IMG_5373.JPG?format=2500w')`
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                    Eten & drinken op maat
                </h2>
                <p className="font-sans text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Van walking dinners tot borrelarrangementen, samen stellen we het ideale menu samen, afgestemd op jouw wensen en budget.
                </p>
                <a href="#offerte" className="inline-block bg-bf-accent hover:bg-[#b08e68] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-[4px] transition-colors">
                    Offerte aanvragen
                </a>
            </div>
        </section>
    );
};

const PossibilitiesSection = () => {
    return (
        <section className="bg-bf-dark text-white py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2 className="font-serif text-3xl md:text-4xl text-bf-accent mb-6">
                            Mogelijkheden
                        </h2>
                        <p className="font-sans text-gray-300 leading-relaxed mb-6 max-w-md">
                            Muziek & sfeer volledig naar wens. Met onze eigen muziekinstallatie en warme ambiance creëren we de perfecte setting. Jullie bepalen de sfeer van intiem tot uitbundig.
                        </p>
                        <p className="font-sans text-gray-300 leading-relaxed mb-8 max-w-md">
                            Of het nu gaat om een vrijdagmiddagborrel, teamuitje, jubileum of gender reveal, bij ons zijn de mogelijkheden eindeloos.
                        </p>
                        <a href="#offerte" className="bg-bf-accent hover:bg-[#b08e68] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-[4px] transition-colors">
                            Offerte aanvragen
                        </a>
                    </div>

                    {/* Images Grid */}
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="mt-12 overflow-hidden rounded-[15px]">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/e13c92d6-38b4-47d0-af52-e68c94edfc97/PHOTO-2025-08-08-15-46-46+2+groot.jpeg?format=1000w"
                                alt="Restaurant interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mb-12 overflow-hidden rounded-[15px]">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/696875c0-b4e6-4d05-a6ae-490710b248a8/PHOTO-2025-08-08-15-46-45+2+groot.jpeg?format=1000w"
                                alt="Saxophone Player"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const FormSection = () => {
    return (
        <section id="offerte" className="bg-bf-cream py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Contact Info */}
                    <div className="flex flex-col justify-start">
                        <h2 className="font-serif text-3xl md:text-4xl text-bf-dark mb-8">
                            Telefonisch of email
                        </h2>
                        <p className="font-sans text-bf-dark leading-relaxed mb-6">
                            Vraag nu vrijblijvend een offerte aan of boek een rondleiding.
                        </p>
                        <div className="font-sans text-bf-dark leading-relaxed mb-6">
                            <a href="mailto:info@bluefusionkitchenenbar.nl" className="underline decoration-1 underline-offset-4 hover:text-bf-accent transition-colors block mb-1">
                                info@bluefusionkitchenenbar.nl
                            </a>
                            <a href="tel:0629146799" className="underline decoration-1 underline-offset-4 hover:text-bf-accent transition-colors block">
                                0629146799
                            </a>
                        </div>
                        <p className="font-sans text-bf-dark leading-relaxed">
                            Je kunt ook eenvoudig ons formulier gebruiken. Wij nemen contact op om de mogelijkheden te bespreken.
                        </p>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl text-bf-dark mb-8">
                            Offerte aanvragen
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Voornaam (vereist)</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Achternaam (vereist)</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Bedrijfsnaam</label>
                                <input type="text" placeholder="Optioneel" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Email (vereist)</label>
                                <input type="email" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Land</label>
                                    <div className="flex border-b border-gray-400">
                                        <span className="p-2 text-gray-700">NL</span>
                                        <ChevronDown size={16} className="mt-3 ml-1 text-gray-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Nummer</label>
                                    <input type="tel" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Aantal personen (vereist)</label>
                                <input type="number" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-4 text-gray-500">Gelegenheid</label>
                                <div className="flex flex-wrap gap-4">
                                    {['Zakelijke lunch', 'Zakelijk diner', 'Zakelijke borrel', 'Feest', 'Anders'].map((opt) => (
                                        <label key={opt} className="flex items-center cursor-pointer">
                                            <input type="radio" name="occasion" className="mr-2 accent-black w-4 h-4" />
                                            <span className="text-sm text-bf-dark">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Gewenste datum (vereist)</label>
                                <input type="date" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Tijd (vereist)</label>
                                <input type="time" className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Aanvullend bericht</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-gray-400 focus:border-black p-2 outline-none transition-colors"></textarea>
                            </div>

                            <button className="bg-bf-dark text-white px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-[4px] hover:bg-gray-800 transition-colors mt-4">
                                Verzenden
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Local ReviewsSection removed to use the standardized component


const FeestGevenPage: React.FC = () => {
    return (
        <div className="antialiased bg-bf-cream text-bf-dark font-sans selection:bg-bf-accent selection:text-white">
            <Header />

            <main>
                <HeroSection />
                <FeatureSection />
                <ExclusiveSection />
                <ParallaxFoodSection />
                <PossibilitiesSection />
                <FormSection />
                <ReviewsSection />
            </main>

            <Footer />
            <FloatingWidget />
        </div>
    );
};

export default FeestGevenPage;
