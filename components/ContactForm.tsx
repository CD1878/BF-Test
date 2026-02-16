import React from 'react';

const ContactForm: React.FC = () => {
    const inputClasses = "w-full bg-transparent border-b border-white/20 focus:border-bf-gold py-4 outline-none text-bf-cream text-sm transition-all placeholder-white/20 font-light";
    const labelClasses = "block text-xs text-bf-gold uppercase tracking-widest mb-2 mt-8 font-sans font-bold";

    return (
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
                <label className={labelClasses}>Naam</label>
                <div className="flex gap-8">
                    <div className="w-1/2 relative">
                        <input type="text" className={inputClasses} placeholder="Je voornaam" required />
                        {/* <span className="absolute -bottom-5 left-0 text-[10px] text-white/40">Voornaam (vereist)</span> */}
                    </div>
                    <div className="w-1/2 relative">
                        <input type="text" className={inputClasses} placeholder="Je achternaam" required />
                        {/* <span className="absolute -bottom-5 left-0 text-[10px] text-white/40">Achternaam (vereist)</span> */}
                    </div>
                </div>
            </div>

            <div>
                <label className={labelClasses}>Email <span className="text-[10px] text-white/40 normal-case ml-1">(vereist)</span></label>
                <input type="email" className={inputClasses} placeholder="jouw@email.nl" required />
            </div>

            <div>
                <label className={labelClasses}>Telefoonnummer <span className="text-[10px] text-white/40 normal-case ml-1">(vereist)</span></label>
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="flex items-end gap-4">
                            <div className="w-1/3 relative">
                                <label className="text-[10px] text-white/40 block mb-1">Land</label>
                                <select className="w-full bg-transparent border-b border-white/20 py-4 text-sm outline-none text-bf-cream appearance-none cursor-pointer">
                                    <option className="text-black">Nederland</option>
                                    <option className="text-black">België</option>
                                    <option className="text-black">Duitsland</option>
                                </select>
                            </div>
                            <div className="flex-grow">
                                <label className="text-[10px] text-white/40 block mb-1">Nummer</label>
                                <div className="flex items-center border-b border-white/20 focus-within:border-bf-gold transition-colors">
                                    <span className="text-sm mr-3 text-white/60">+31</span>
                                    <input type="tel" className="bg-transparent py-4 outline-none text-sm w-full text-bf-cream placeholder-white/20" placeholder="6 12345678" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className={labelClasses}>Bericht <span className="text-[10px] text-white/40 normal-case ml-1">(vereist)</span></label>
                <textarea rows={3} className={`${inputClasses} resize-none`} placeholder="Waarmee kunnen we je helpen?" required></textarea>
            </div>

            <div className="mt-12">
                <button type="submit" className="group relative overflow-hidden bg-bf-gold text-bf-espresso px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto">
                    <span className="relative z-10 group-hover:text-black transition-colors">Verzenden</span>
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
