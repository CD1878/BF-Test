import React from 'react';

const ContactForm: React.FC = () => {
    const inputClasses = "w-full bg-transparent border-b border-gray-400 focus:border-black py-3 outline-none text-gray-700 text-sm transition-colors";
    const labelClasses = "block text-sm text-gray-700 mb-1 mt-6 font-sans";

    return (
        <form className="w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
                <label className="block text-sm text-gray-700 mb-4 font-sans">Naam</label>
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <input type="text" className={inputClasses} required />
                        <span className="text-xs text-gray-500 mt-1 block">Voornaam (vereist)</span>
                    </div>
                    <div className="w-1/2">
                        <input type="text" className={inputClasses} required />
                        <span className="text-xs text-gray-500 mt-1 block">Achternaam (vereist)</span>
                    </div>
                </div>
            </div>

            <div>
                <label className={labelClasses}>Email <span className="text-xs text-gray-500 font-normal ml-1">(vereist)</span></label>
                <input type="email" className={inputClasses} required />
            </div>

            <div>
                <label className={labelClasses}>Telefoonnummer <span className="text-xs text-gray-500 font-normal ml-1">(vereist)</span></label>
                <div className="flex flex-col">
                    <div className="w-full">
                        <p className="text-xs text-gray-500 mb-1">Land</p>
                        <div className="flex items-end gap-4">
                            <select className="bg-transparent border-b border-gray-400 py-3 text-sm w-1/3 outline-none text-gray-700">
                                <option>Nederland</option>
                                <option>België</option>
                                <option>Duitsland</option>
                            </select>
                            <div className="flex-grow">
                                <p className="text-xs text-gray-500 mb-1">Nummer</p>
                                <div className="flex items-center border-b border-gray-400">
                                    <span className="text-sm mr-2 text-gray-700">+31</span>
                                    <input type="tel" className="bg-transparent py-3 outline-none text-sm w-full text-gray-700" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className={labelClasses}>Bericht <span className="text-xs text-gray-500 font-normal ml-1">(vereist)</span></label>
                <textarea rows={2} className={`${inputClasses} resize-none`} required></textarea>
            </div>

            <div className="mt-10">
                <button type="submit" className="bg-[#38332e] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-black transition-colors rounded-sm font-bold">
                    Verzenden
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
