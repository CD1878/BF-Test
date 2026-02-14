import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';
import { ArrowLeft } from 'lucide-react';

const EventDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = events.find(e => e.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen bg-bf-espresso text-bf-cream flex flex-col items-center justify-center">
                <h1 className="text-4xl font-serif mb-4">Event niet gevonden</h1>
                <Link to="/events" className="text-bf-gold hover:underline">Terug naar Events</Link>
            </div>
        );
    }

    return (
        <div className="antialiased bg-bf-espresso text-bf-cream selection:bg-bf-gold selection:text-white">
            <Header />

            <main>
                {/* Hero / Header */}
                <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] w-full overflow-hidden">
                    <img
                        src={event.image}
                        alt={event.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10 h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center">
                        <p className="font-sans text-bf-gold uppercase tracking-[0.2em] font-bold mb-2 md:mb-4 animate-fade-in-up text-sm md:text-base">
                            {event.subtitle}
                        </p>
                        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-8 animate-fade-in-up delay-100 uppercase">
                            {event.title}
                        </h1>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12 md:py-32 px-4 md:px-8 bg-bf-espresso relative z-10 -mt-8 md:-mt-10 rounded-t-[2rem] md:rounded-t-[3rem]">
                    <div className="container mx-auto max-w-4xl">
                        <Link to="/events" className="inline-flex items-center text-bf-gold hover:text-white transition-colors mb-8 md:mb-12 text-xs md:text-sm uppercase tracking-widest font-bold">
                            <ArrowLeft size={16} className="mr-2" />
                            Terug naar overzicht
                        </Link>

                        <div className="prose prose-lg prose-invert mx-auto">
                            {event.description.map((paragraph, index) => (
                                <p key={index} className="font-serif text-lg md:text-2xl leading-relaxed text-bf-cream/90 mb-6 md:mb-8 font-light">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <a href="https://widget.thefork.com/a30e4e59-2183-4b34-83a4-8d2a151ae152" target="_blank" rel="noopener noreferrer" className="inline-block bg-bf-gold text-bf-espresso hover:bg-white hover:text-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold rounded transition-all duration-300 transform hover:-translate-y-1">
                                Reserveer Nu
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWidget />
        </div>
    );
};

export default EventDetailPage;
