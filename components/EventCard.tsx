import React from 'react';
import { EventData } from '../types';

interface EventCardProps {
    event: EventData;
    index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
    return (
        <div className="w-full max-w-[1500px] mx-auto mb-24 md:mb-40 last:mb-0 group">
            <div className="relative flex flex-col md:block">

                {/* Image Container (Visual 'Card') */}
                {/* On mobile: First. On Desktop: Absolute right, overlapping. */}
                <div className="order-1 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[35%] lg:w-[32%] z-20 mb-8 md:mb-0 px-4 md:px-0">
                    <div className={`relative w-full rounded-card overflow-hidden shadow-2xl ${event.isImagePortrait ? 'aspect-[9/16]' : 'aspect-[3/4]'} bg-[#2a2826] transform transition-transform duration-700 md:group-hover:translate-y-[-10px]`}>
                        <img
                            src={event.image}
                            alt={event.imageAlt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Subtle overlay to ensure depth */}
                        <div className="absolute inset-0 bg-black/5 md:group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                </div>

                {/* Text Container (Bordered Block) */}
                {/* On mobile: Second. On Desktop: Left aligned, wide. */}
                <div className="order-2 w-full md:w-[75%] lg:w-[72%] border border-white/20 rounded-card p-8 md:p-16 lg:p-24 relative z-0 md:min-h-[550px] flex flex-col justify-center bg-transparent transition-colors duration-500 hover:border-white/40">
                    <div className="max-w-2xl">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 uppercase tracking-wide leading-none">
                            {event.title}
                        </h3>

                        {event.subtitle && (
                            <h4 className="text-xl md:text-2xl font-sans font-light text-[#cfcecd] mb-8">
                                {event.subtitle}
                            </h4>
                        )}

                        <div className="space-y-6 text-[#cfcecd] font-light leading-relaxed text-base md:text-lg">
                            {event.description.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
