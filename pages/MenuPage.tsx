import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';

interface MenuItem {
    title: string;
    price: string;
    description?: string;
    isTip?: boolean;
}

interface MenuSection {
    title: string;
    id: string; // For anchor navigation
    items: MenuItem[];
}

const MenuCategoryConfig = [
    {
        categoryTitle: "All Day Menu",
        id: "allday",
        sections: [
            {
                title: "Starters",
                items: [
                    { title: "Breekbrood", price: "€7,50", description: "Boter en kruidenolie | glutenvrij ook mogelijk" },
                    { title: "Iberico ham", price: "€13,00", description: "Spaanse ham" },
                    { title: "Oesters p.st.", price: "€3,50", description: "Vinaigrette | tabasco | citroen" },
                ]
            },
            {
                title: "Follow up",
                items: [
                    { title: "Gyoza (4 st.)", price: "€13,50", description: "Soja | sriracha mayo | crispy sjalot" },
                    { title: "Peking eend (4 st.)", price: "€14,50", description: "Wonton cracker | hoisin | jasmijn-komkommer" },
                    { title: "Zalm tartaar op crispy rice (2 st.)", price: "€12,00", description: "Sriracha mayo | avocado" },
                    { title: "Kokos gamba’s", price: "€16,50", description: "Gember | sereh | paksoi | piri piri" },
                    { title: "Zoete aardappel friet", price: "€7,75", description: "Truffelmayo" },
                    { title: "Sate lilit (3 st.)", price: "€12,50", description: "Kip | sambal matah | cashew crunch | teriyaki" },
                    { title: "Mini aubergine", price: "€12,00", description: "Granaatappel | miso karamel | sesam crème | bieslook gel" },
                    { title: "Stracciatella & prei", price: "€13,50", description: "Beurre noisette | cashew crunch" },
                    { title: "Beef tataki", price: "€16,50", description: "Ponzu | truffel | crispy sjalot | bosui | sriracha" },
                    { title: "Steak tartaar (2 st.)", price: "€14,00", description: "Truffelmayo | aardappel chips" },
                    { title: "Tonijn sashimi", price: "€16,50", description: "Perzik | ponzu | mierikswortel" },
                    { title: "Asian paling (4 st.)", price: "€16,50", description: "Wafel | sesam crème | appel | kaviaar" },
                    { title: "Biet cones (2 st.)", price: "€12,75", description: "Dry aged biet | bloemkoolcrème | bieslook | sjalot crunch" },
                    { title: "Pani puri (4 st.)", price: "€11,00", description: "Mango | rode peper | rode ui | avocado" },
                ]
            },
            {
                title: "Steaks",
                items: [
                    { title: "Bavette (150 gr)", price: "€24,00", description: "Cowboy boter" },
                    { title: "Rib-eye (150 gr)", price: "€24,00", description: "Asian lak" },
                    { title: "Diamant steak (150 gr)", price: "€24,00", description: "Miso jus" },
                ]
            },
            {
                title: "The Grand Finale",
                items: [
                    { title: "Vanille noir", price: "€12,00", description: "Vanille bourbon | bramen | fudge | pastinaak chips" },
                    { title: "Amaretto knoop", price: "€12,00", description: "Amaretto meringue | chocolade mousse | walnoot ijs | espresso sinaasappel gel" },
                    { title: "Kaas selectie (4 st.)", price: "€14,50", description: "Vijgencompote | vijgenbrood | noten" },
                ]
            },
            {
                title: "Tip",
                items: [
                    { title: "Tip! Proeverijtje port, 3 soorten white, tawny, ruby", price: "€9,95", isTip: true },
                ]
            }
        ]
    },
    {
        categoryTitle: "Lunch Menu",
        id: "lunch",
        sections: [
            {
                title: "Sandwiches",
                items: [
                    { title: "Steak Sandwich", price: "€15,75", description: "Desem toast | Dun gesneden entrecote | Oude kaas | Grof zout | Sla | Kappertjes | Chimichurri" },
                    { title: "Smash Avocado Ei", price: "€14,50", description: "Desem toast | Avocado | Gekookt ei | Truffel mayo | Sesam | Sla | Parmezaan" },
                    { title: "Crunchy Zalm", price: "€15,50", description: "Millefeuille | Gerookte zalm | Kaviaar | Gemengde sla | Roomkaas" },
                    { title: "Burrata Sandwich", price: "€14,50", description: "Desem toast | Burrata stracciatella | Amandel | Vijgen | Gemengd sla | Rode druiven | Balsamico\nKeuze uit wit of bruin desem toast" },
                ]
            },
            {
                title: "Salade",
                items: [
                    { title: "Fresh Fish Salade", price: "€17,25", description: "Desem toast | Gamba | Oude kaas | Maldon | Tonijn | Kappertjes | Gerookte zalm" },
                ]
            },
            {
                title: "Zoetig | Hartig",
                items: [
                    { title: "Habanero Brownie", price: "€6,50", description: "Vijgen" },
                    { title: "Cheesecake", price: "€6,50", description: "Miso caramel" },
                    { title: "Kaasplank 4st.", price: "€14,00", description: "Vijgen | Toast | Noten" },
                ]
            }
        ]
    },
    {
        categoryTitle: "Wijnen",
        id: "wijnen",
        sections: [
            {
                title: "Mousserende wijn",
                items: [
                    { title: "Mas Oliver, Rubinat Cava Brut", price: "Glas €7,00 | Fles €35,00", description: "Frisse geur en een verfrissende smaak. Fruitaroma’s, zuren en bubbels zijn allemaal keurig met elkaar in evenwicht." },
                    { title: "Torelló, Corpinnat Special Edition (Spanje)", price: "Fles €55,00", description: "Fruitige Corpinnat fijne, standvastige mousse. Zacht en romig mondgevoel gepaard met een heerlijke minerale frisheid." },
                    { title: "Domaine de Cray, Crémant de Loire (Frankrijk)", price: "Glas €9,00 | Fles €45,00", description: "Aroma’s van witte bloemen, groene appel, subtiele tonen van perzik en peer, citrus tonen en een vleugje brioche." },
                    { title: "Rafflin-Lepitre, Champagne (Frankrijk)", price: "Fles €110,00", description: "Aroma’s van witte bloemen, gedroogde appeltjes en brioche. In de mond mooi vol van smaak en een zachte bubbel." },
                ]
            },
            {
                title: "Wit",
                items: [
                    { title: "Sera Verdejo (Spanje)", price: "Glas €6,50 | Fles €32,50", description: "Aroma’s van citrusvruchten, zoals limoen en grapefruit, tonen van groene appel en kruiden." },
                    { title: "Trovati, Pinot Grigio (Italië)", price: "Glas €6,50 | Fles €32,50", description: "Uitbundig bouquet in de neus, met een frisse, maar fruitige smaak." },
                    { title: "Cellier du Pic, Les Clichés Chardonnay (Frankrijk)", price: "Glas €6,50 | Fles €32,50", description: "Verleidelijk rijp tropisch fruit zoals ananas en mango, subtiele hints van vanille, butterscotch en een vleugje geroosterd eikenhout." },
                    { title: "Le Versant Viognier (Frankrijk)", price: "Glas €7,00 | Fles €35,00", description: "Verfissende witte wijn met intense aroma’s van rijpe abrikoos en perzik. Een lange afdronk met roos, gember en munt." },
                    { title: "Le Versant Sauvignon Blanc (Frankrijk)", price: "Glas €7,00 | Fles €35,00", description: "Stuivende witte wijn met aroma’s van kruisbessen, peer en limoen. Een krachtige, frisse en droge smaak." },
                    { title: "Adegas Valmiñor, Albariño (Spanje)", price: "Glas €8,50 | Fles €42,50", description: "Lekker fris met ingetogen rijpheid tegen een licht-bloemige achtergrond." },
                    { title: "Bliss Family Vineyards, Chardonnay (Californië)", price: "Fles €60,00", description: "Volle karakter aroma’s van nectarine en meloen. Vleugje vanille en butterscotch." },
                    { title: "Gruner Veltliner von den Terrassen (Oostenrijk)", price: "Glas €8,00 | Fles €40,00", description: "Aroma’s van groene appel, citrus en witte peper, subtiele hints van kruiden." },
                    { title: "M’Hudi, Chenin Blanc (Zuid-Afrika)", price: "Fles €52,50", description: "Gelaagde smaak van lychee, peer, perzik en ananas. Volle houtachtergrond." },
                    { title: "Domaine Jean-Pierre Bailly, Pouilly-Fumé (Frankrijk)", price: "Fles €72,50", description: "Grassige aroma’s kruisbessen, appel en grapefruit. Mooie kruidigheid en mineraliteit." },
                    { title: "Domaine de la Mandelière, Chablis (Frankrijk)", price: "Fles €75,00", description: "Wit rijp fruit, in de mond toont het verleidelijke fruit zich als eerste, begeleid door aangenaam zuren." },
                    { title: "Idiom, Viognier (Zuid-Afrika)", price: "Fles €75,00", description: "De geur is open en expressief, met verfijnde tonen van hout boter, bloemen, abrikoos en lichte vanille." },
                ]
            },
            {
                title: "Rosé",
                items: [
                    { title: "Trovati, Pinot Grigio Blush (Frankrijk)", price: "Glas €6,50 | Fles €32,50", description: "Fris-fruitige geur van verse sinaasappel en grapefruit zest." },
                    { title: "Domaine de la Sanglière, Riva Provence (Frankrijk)", price: "Glas €7,00 | Fles €35,00", description: "Deze wijn straalt een helder roze kleur, aantrekkelijke en fruitige tonen." },
                ]
            },
            {
                title: "Rood",
                items: [
                    { title: "Sera, Monastrell (Spanje)", price: "Glas €6,50 | Fles €32,50", description: "Licht kruidige ondertoon. Sappig, milde tannines." },
                    { title: "Conviviale Primitivo (Italië)", price: "Glas €6,50 | Fles €32,50", description: "Krachtige rode wijn met verfijnde smaak en geur van rijpe, gedroogde bramen en zwarte bessen." },
                    { title: "Monte Acuro, Rioja Reserva (Spanje)", price: "Glas €7,50 | Fles €37,50", description: "Een karaktervolle Rioja vol rijp fruit en verfijnde houttonen van kruidnagel en vanille, met een sappige, stoere structuur en rijpe tannines." },
                    { title: "Pablo y Walter, Malbec (Argentinië)", price: "Glas €7,00 | Fles €35,00", description: "Rode wijn met een verrassende, volle en levendige smaak. Aroma’s van gekonfijte kersen zijn te ontdekken in deze wijn." },
                    { title: "I Sodi, Chianti Classico (Italië)", price: "Fles €50,00", description: "Typische Chianti-combinatie van rijpe rode kersen en maartse viooltjes. Elegant, maar krachtig, vleugje kruidig zoethout." },
                    { title: "Rioja Grand Reserva 2016 (Spanje)", price: "Fles €52,50", description: "Krachtig en complex; een schoolvoorbeeld van een gerijpte Grand Reserva met tonen van leder, kruiden en eikenhout." },
                    { title: "Maison J. Thorin, Beaujolais Villages (Frankrijk)", price: "Fles €47,50", description: "Klassieke Beaujolais vol met fris rood fruit zoals aardbei. Een lichte, sappige rode wijn." },
                    { title: "Saint Amant, Clapas (Frankrijk)", price: "Fles €47,50", description: "Verfijnde aroma’s van gedroogd rood fruit, zoals kersen en pruimen, vergezeld van tonen van cacao, tabak en exotische specerijen." },
                    { title: "Lothian, Pinot Noir (Zuid-Afrika)", price: "Fles €52,50", description: "Verfijnde aroma’s van gedroogd rood fruit, zoals kersen en pruimen, vergezeld van tonen van cacao, tabak en exotische specerijen." },
                    { title: "Vallena, Valpolicella Ripasso (Italië)", price: "Fles €60,00", description: "Verleidelijke aroma’s van rijpe kersen en gedroogde vruchten, vergezeld van hints van kruiden, tabak en een vleugje vanille." },
                    { title: "Silvia Cellars, Zinfandel (Californië)", price: "Fles €85,00", description: "Kruidig en aards met donker fruit en vanille. Smaken van zwarte kers, pruim, chocolade en zwarte peper." },
                    { title: "Podere Ruggeri Corsini, Barolo (Italië)", price: "Fles €90,00", description: "Fruittonen, geuren als cacao, leer, tabak, cederhout en licht vanille. Rijke, volle smaak." },
                ]
            }
        ]
    },
    {
        categoryTitle: "Cocktails",
        id: "cocktails",
        sections: [
            {
                title: "Cocktail's",
                items: [
                    { title: "spiced-up", price: "€10,50", description: "Rum – lime – gingerbeer – five spices – hazelnut" },
                    { title: "blue pearl", price: "€10,50", description: "Cinnamon – blue curaçao – gin – lime – lychee pearls" },
                    { title: "pornstar martini", price: "€10,95", description: "Passionfruit – vodka – passionfruit liqueur – vanilla" },
                    { title: "margarita ‘aloha", price: "€11,50", description: "Orange liqueur – hibiscus – tequila – hawai salt" },
                    { title: "espresso martini", price: "€10,95", description: "Espresso – vodka – coffee liqueur – simple sirup" },
                    { title: "smoked barrel", price: "€11,50", description: "Smoked whiskey – burned pineapple – honey – salt" },
                ]
            },
            {
                title: "Mocktail's",
                items: [
                    { title: "spritz", price: "€9,50", description: "Crodino – cava 0.0 – orange" },
                    { title: "expornstar martini", price: "€9,50", description: "Passionfruit – vanilla – nomuss liqueur 0.0%" },
                    { title: "kwai fe", price: "€9,50", description: "Lychee siroop – gin 0.0% – mango radler 0.0%" },
                    { title: "umami hibiscus", price: "€9,50", description: "Hibiscus – lime – sparkling water – cava 0.0%" },
                ]
            }
        ]
    }
];

const MenuPage: React.FC = () => {
    return (
        <div className="bg-bf-cream min-h-screen text-bf-dark font-sans">
            <Header />

            {/* Hero Section */}
            <section className="bg-bf-dark text-white pt-48 pb-20 px-6 text-center">
                <div className="container mx-auto">
                    <p className="font-serif italic text-lg md:text-xl text-bf-accent mb-4">Perfect om te delen</p>
                    <h1 className="font-serif text-5xl md:text-7xl font-light">Menu</h1>
                </div>
            </section>

            {/* Menu Categories */}
            {MenuCategoryConfig.map((category, index) => (
                <section
                    key={category.id}
                    id={category.id}
                    className={`py-24 px-6 md:px-12 ${index % 2 === 0 ? 'bg-bf-cream' : 'bg-white'}`}
                >
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl text-bf-accent italic inline-block border-b border-transparent pb-2">{category.categoryTitle}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                            {category.sections.map((section, sIndex) => (
                                <div key={sIndex} className={`${section.items.length > 6 ? 'md:col-span-2' : ''}`}>
                                    <h3 className="font-serif text-3xl md:text-4xl text-bf-accent mb-10 text-center md:text-left">{section.title}</h3>
                                    <div className="space-y-8">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="flex justify-between items-start group">
                                                <div className="pr-4 max-w-[85%]">
                                                    <h4 className="font-serif font-bold text-lg md:text-xl text-bf-dark mb-1 group-hover:text-bf-accent transition-colors">{item.title}</h4>
                                                    {item.description && (
                                                        <p className="text-sm md:text-base font-light text-gray-600 leading-relaxed whitespace-pre-line">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="whitespace-nowrap">
                                                    <span className="font-sans font-medium text-lg md:text-xl text-bf-dark">{item.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            ))}

            <Footer />
            <FloatingWidget />
        </div>
    );
};

export default MenuPage;
