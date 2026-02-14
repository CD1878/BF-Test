import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ReviewsSection from '../components/ReviewsSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';

// Custom TripAdvisor Icon since it's not in Lucide standard set easily
const TripAdvisorIcon = () => (
    <svg viewBox="0 0 64 64" className="w-5 h-5 fill-current">
        <path d="M45.5 28.9c.4-1.5 1.5-3 1.5-3h-5c-2.8-1.8-6.2-2.8-10-2.8-3.9 0-7.5 1-10.3 2.8H17s1.1 1.5 1.5 3c-.9 1.2-1.5 2.8-1.5 4.4 0 4.1 3.4 7.5 7.5 7.5 2.4 0 4.5-1.1 5.9-2.8l1.6 2.4 1.6-2.4c.7.9 1.7 1.7 2.8 2.2 1.8.8 3.9.9 5.7.2 3.9-1.4 5.9-5.8 4.4-9.7-.2-.6-.6-1.2-1-1.8zm-21 10.4c-3.3 0-6-2.7-6-6 0-1 .3-2 .7-2.9 1-1.9 3-3.1 5.3-3.1 2.6 0 4.9 1.7 5.7 4.1.2.6.3 1.3.3 1.9 0 3.4-2.7 6-6 6zm7.5-6.5c-.3-3.8-3.4-6.9-7.3-7 2.2-.9 4.6-1.4 7.3-1.4s5.1.5 7.3 1.4c-.8 0-1.6.2-2.4.5-1.9.7-3.4 2.1-4.2 3.9-.4.9-.7 1.7-.7 2.6zm13.3 2c-.1.2-.1.5-.2.7-.1.3-.3.6-.4.9-.7 1.2-1.7 2.1-3.1 2.6-.8.3-1.5.4-2.3.4-.2 0-.4 0-.6-.1-.6-.1-1.1-.2-1.7-.5-1.5-.7-2.6-1.9-3.1-3.4-.1-.4-.2-.8-.3-1.1 0-.2-.1-.4-.1-.6v-.6c0-.8.2-1.5.5-2.3.7-1.5 1.9-2.6 3.4-3.1 3.1-1.1 6.6.4 7.7 3.5.3.8.4 1.6.4 2.4-.1.4-.1.8-.2 1.2z"></path>
        <circle cx="24.4" cy="33.2" r="1.2"></circle>
        <circle cx="39.5" cy="33.2" r="1.2"></circle>
    </svg>
);

const ContactPage: React.FC = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="bg-bf-dark text-white pt-48 pb-20 px-6 text-center">
                <div className="container mx-auto">
                    <p className="font-serif italic text-lg md:text-xl text-bf-accent mb-4">Neem gerust contact met ons op</p>
                    <h1 className="font-serif text-5xl md:text-7xl font-light">Contact</h1>
                </div>
            </section>

            {/* Contact Content & Form */}
            <section className="bg-bf-cream py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Info */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-bf-dark font-normal">Telefonisch of email</h2>

                        <div className="font-sans text-sm space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                <a href="mailto:info@bluefusionkitchenenbar.nl" className="block underline decoration-1 underline-offset-4 hover:no-underline mb-2 transition-all">info@bluefusionkitchenenbar.nl</a>
                                <a href="tel:0629146799" className="block underline decoration-1 underline-offset-4 hover:no-underline transition-all">0629146799</a>
                            </p>

                            <p>Je kunt ook eenvoudig ons formulier gebruiken.</p>

                            <div className="pt-2">
                                <strong className="block mb-1 font-bold text-gray-900">Groepen</strong>
                                <p className="mb-1">Wil je reserveren voor méér dan 10 personen? Gebruik dan ons <a href="#" className="underline hover:no-underline transition-all">reserveringsformulier voor groepen</a>.</p>
                            </div>

                            <div className="pt-2">
                                <strong className="block mb-1 font-bold text-gray-900">Zakelijk</strong>
                                <p>Wil je reserveren voor een zakelijke borrel, lunch of diner? Of heb je andere wensen? Gebruik dan ons <a href="#" className="underline hover:no-underline transition-all">reserveringsformulier voor groepen</a> of neem even telefonisch contact met ons op.</p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex space-x-4 pt-4">
                                <a href="https://www.instagram.com/bluefusion.kitchenenbar/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                                <a href="#" className="p-2 border border-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition-colors"><TripAdvisorIcon /></a>
                                <a href="#" className="p-2 border border-black rounded-sm hover:bg-black hover:text-white transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-bf-dark font-normal">Contactformulier</h2>
                        <ContactForm />
                    </div>

                </div>
            </section>

            {/* Map Section */}
            <section className="relative w-full h-[500px] bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.6853381622315!2d4.219551115789182!3d52.06916267973167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b1db58c2dba5%3A0xe0846d12c9014004!2sBlue%20Fusion%20Tapasbar!5e0!3m2!1sen!2snl!4v1680000000000!5m2!1sen!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.2)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <a
                        href="https://www.google.com/maps/dir//Blue+Fusion+Tapasbar,+Deltapromenade+304,+2554+GX+Den+Haag"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-bf-accent text-white px-8 py-4 uppercase text-xs font-bold tracking-widest shadow-md hover:bg-bf-dark transition-colors rounded-sm inline-block"
                    >
                        Navigeer direct
                    </a>
                </div>
            </section>

            {/* Reservation CTA */}
            <section className="bg-bf-dark py-24 px-6 text-center text-white">
                <div className="container mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">Tafel reserveren</h2>
                    <p className="font-sans text-sm text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
                        Wil je reserveren voor méér dan 10 personen? Gebruik dan hier het <a href="#" className="underline hover:text-white transition-colors">formulier voor groepsreserveringen</a>.
                    </p>
                    <button className="bg-bf-accent text-white px-10 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                        Tafel reserveren
                    </button>
                </div>
            </section>

            {/* Standardized Reviews Section */}
            <ReviewsSection />

            <Footer />
            <FloatingWidget />
        </div>
    );
};

export default ContactPage;
