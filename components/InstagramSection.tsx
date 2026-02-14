import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramSection: React.FC = () => {
    // Using 4 images for the new layout
    const images = [
        "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/5496e557-b95e-4964-9203-bc95db766742/PHOTO-2025-10-22-09-44-02+2.jpg",
        "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/36f8233e-48aa-4bd8-9ddc-c3d00969561b/IMG_4944.JPG",
        "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/4304ca80-0b1c-4c9c-9929-92e1a5a6f71d/IMG_4834.JPG",
        "https://images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/b9475b59-bb04-4df4-9ffe-8e68c2474019/IMG_2915+groot.jpeg"
    ];

    return (
        <section className="bg-bf-cream py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 text-center">

                <div className="flex flex-col items-center mb-12">
                    <p className="font-sans text-bf-gold uppercase tracking-[0.2em] text-xs font-bold mb-3">
                        We know you will
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl text-bf-espresso italic">
                        Follow us
                    </h2>
                </div>

                {/* Clean 4-column Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {images.map((src, index) => (
                        <a
                            key={index}
                            href="https://www.instagram.com/bluefusion.kitchenenbar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Instagram ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-bf-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="text-white w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="https://www.instagram.com/bluefusion.kitchenenbar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-bf-espresso border-b border-bf-espresso pb-1 font-sans uppercase tracking-widest text-xs hover:text-bf-gold hover:border-bf-gold transition-colors"
                    >
                        @bluefusionkitchenbar
                    </a>
                </div>

            </div>
        </section>
    );
};

export default InstagramSection;
