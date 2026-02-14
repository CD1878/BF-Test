import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { name: 'All day menu', href: '/menu#allday' },
    { name: 'Lunch menu', href: '/menu#lunch' },
    { name: 'Wijnen', href: '/menu#wijnen' },
    { name: 'Cocktails', href: '/menu#cocktails' },
  ];

  const navLinks = [
    { name: 'Feest geven', href: '/feest-geven' },
    { name: 'Your Event', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bf-espresso/95 py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="w-48 md:w-56">
          <a href="/">
            <img
              src="//images.squarespace-cdn.com/content/v1/66aa3b07fec7ce3c6365fe2b/26ccc4be-21e3-410f-a60e-a8a537d7cea5/logo+blue+fusion+creme++%289%29.png?format=1500w"
              alt="Blue Fusion Kitchen & Bar"
              className="w-full h-auto"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">

          {/* Menu Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <button
              className="text-bf-cream uppercase text-xs tracking-widest hover:text-bf-gold transition-colors font-sans flex items-center gap-1 focus:outline-none"
              onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
              onMouseEnter={() => setMenuDropdownOpen(true)}
            >
              Menu <ChevronDown size={14} />
            </button>

            {/* Dropdown Content */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-bf-espresso shadow-xl rounded-sm overflow-hidden transition-all duration-200 transform origin-top-left border border-bf-gold/20 ${menuDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              onMouseLeave={() => setMenuDropdownOpen(false)}
            >
              <div className="flex flex-col py-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-6 py-3 text-bf-cream text-xs uppercase tracking-widest hover:bg-bf-choco transition-colors block text-left font-sans border-b border-bf-gold/10 last:border-0"
                    onClick={() => setMenuDropdownOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-bf-cream uppercase text-xs tracking-widest hover:text-bf-gold transition-colors font-sans"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button variant="outline" href="#reservation" className="!text-bf-cream !border-bf-cream hover:!bg-bf-cream hover:!text-bf-espresso">
              Tafel reserveren
            </Button>
          </div>

          <button
            className="md:hidden text-bf-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bf-espresso text-bf-cream p-8 flex flex-col space-y-6 md:hidden h-screen overflow-y-auto">

          <div className="border-b border-bf-gold/20 pb-4 mb-2">
            <p className="text-bf-gold uppercase text-xs tracking-widest mb-4 text-center">Onze Menukaarten</p>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg font-serif text-center py-2 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-serif text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center pt-4 pb-20">
            <Button variant="primary" href="#reservation" onClick={() => setMobileMenuOpen(false)}>
              Tafel reserveren
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;