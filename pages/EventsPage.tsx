import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../data/events';
import ReviewsSection from '../components/ReviewsSection';

const EventsPage: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="min-h-screen bg-bf-espresso text-bf-cream selection:bg-bf-gold selection:text-white">
            <Header />

            <main className="pt-32 pb-20 px-4 md:px-8">

                {/* Header Section */}
                <section className="container mx-auto mb-12 md:mb-16 text-center">
                    <h1 className="text-4xl md:text-7xl font-serif text-bf-cream mb-6 md:mb-8 uppercase tracking-wide">
                        YOUR EVENT
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-lg md:text-2xl font-serif text-bf-gold mb-4 md:mb-6 uppercase tracking-widest px-4">
                            PLAN YOUR PERFECT EVENT AT BLUE FUSION!
                        </h2>
                        <p className="font-sans text-bf-cream/80 leading-relaxed text-base md:text-lg px-2">
                            Blue Fusion is de ideale locatie voor de meest uiteenlopende evenementen.
                            Naast ons restaurantgedeelte beschikken we over sfeervolle ruimtes voor private dining en feesten.
                            Van vergadering, presentatie en zakelijke borrel tot een intiem verjaardagsdiner of babyshower.
                            Alles is mogelijk bij Blue Fusion Kitchen & Bar.
                        </p>
                    </div>
                </section>

                {/* Grid Section for ALL events */}
                <section className="max-w-[1920px] mx-auto relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-0 snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 md:pb-0"
                    >
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="group relative min-w-[85vw] md:min-w-0 flex-shrink-0 md:flex-shrink h-[400px] md:h-[500px] overflow-hidden md:border-r md:border-b border border-bf-gold/10 md:border-bf-gold/10 md:last:border-r-0 snap-center rounded-2xl md:rounded-none"
                            >
                                {/* Image Background */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={event.image}
                                        alt={event.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-bf-gold font-sans uppercase tracking display text-xs font-bold mb-2">
                                                {event.subtitle}
                                            </p>
                                            <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider">
                                                {event.title}
                                            </h2>
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-bf-gold hover:text-white">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Full Link Overlay */}
                                <Link to={`/events/${event.id}`} className="absolute inset-0 z-20" aria-label={`View ${event.title}`}></Link>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Arrows */}
                    <div className="md:hidden flex justify-center gap-4 mt-6">
                        <button onClick={() => scroll('left')} className="p-3 rounded-full border border-bf-gold/20 text-bf-gold hover:bg-bf-gold hover:text-black transition-all">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-3 rounded-full border border-bf-gold/20 text-bf-gold hover:bg-bf-gold hover:text-black transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </section>

            </main>

            <ReviewsSection />
            <Footer />
            <FloatingWidget />
        </div>
    );
};

export default EventsPage;
