import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import InstagramSection from '../components/InstagramSection';
import LunchSection from '../components/LunchSection';
import GroupsSection from '../components/GroupsSection';
import EventsSection from '../components/EventsSection';
import ReservationCTA from '../components/ReservationCTA';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';
import SectionDivider from '../components/SectionDivider';

const HomePage: React.FC = () => {
    return (
        <div className="antialiased bg-black text-white selection:bg-blue-fusion-gold selection:text-black">
            <Header />
            <main>
                <HeroSection />

                {/* Subtle Line: Hero -> Intro */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
                <IntroSection />

                {/* Subtle Line: Intro -> Instagram */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
                <InstagramSection />

                {/* Subtle Line: Instagram -> Lunch */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
                <LunchSection />

                {/* Subtle Line: Lunch -> Events */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
                <EventsSection />

                {/* Subtle Line: Events -> Reservation (Groups is now ReservationCTA) */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
                <ReservationCTA />

                {/* Subtle Line: Reservation -> Reviews */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
                <ReviewsSection />

                {/* Subtle Line: Reviews -> Footer */}
                <div className="h-px bg-bf-gold/20 w-full relative z-20"></div>
            </main>
            <Footer />
            <FloatingWidget />
        </div>
    );
};

export default HomePage;
