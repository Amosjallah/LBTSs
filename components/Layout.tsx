import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/booking', isCta: true },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-28">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center py-2" onClick={closeMenu}>
              <img 
                src="https://lh3.googleusercontent.com/gg-dl/ABS2GSlNlAyxfPLkl6IKEBAgGDfYlV4LHAreXDfa_UWG-PtTyfcMwZVq7lPLRVHhAH2P07j_V5n3jJxpnOST8IQXXgNKqmTjxl-NdiraUe9kXp-jIuGA8mDdbneDKljFdMZJeuCX9KuhrPbfjogpoatdoV6XQUKO10kUQTHS-eUBOpyjK5ZmPQ=s1024-rj" 
                alt="LAD Brothers Transport Services" 
                className={`h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105 ${logoError ? 'hidden' : 'block'}`}
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
              {logoError && (
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl md:text-3xl text-lad-blue leading-none tracking-tight">LAD Brothers</span>
                  <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.2em] text-red-600 font-bold mt-1">Transport Services</span>
                </div>
              )}
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  link.isCta
                    ? 'bg-lad-blue text-white hover:bg-lad-dark px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm'
                    : `text-gray-600 hover:text-lad-blue transition-colors text-xs font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-lad-blue border-b-2 border-lad-blue pb-1' : ''}`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-lad-blue focus:outline-none p-2 border border-gray-200 rounded-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-sm text-sm font-bold uppercase tracking-wider ${
                  link.isCta
                    ? 'bg-lad-blue text-white text-center mt-6'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-lad-blue border-l-2 border-transparent hover:border-lad-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-lad-dark text-white pt-12 md:pt-16 pb-8 border-t-4 border-lad-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">LAD Brothers</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
              {COMPANY_INFO.intro.substring(0, 150)}...
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-lad-lightBlue transition-colors uppercase tracking-wide text-xs">About Us</Link></li>
              <li><Link to="/services" className="hover:text-lad-lightBlue transition-colors uppercase tracking-wide text-xs">Services</Link></li>
              <li><Link to="/fleet" className="hover:text-lad-lightBlue transition-colors uppercase tracking-wide text-xs">Our Fleet</Link></li>
              <li><Link to="/booking" className="hover:text-lad-lightBlue transition-colors uppercase tracking-wide text-xs">Book a Ride</Link></li>
              <li><Link to="/contact" className="hover:text-lad-lightBlue transition-colors uppercase tracking-wide text-xs">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="uppercase tracking-wide text-xs">Airport Pickup Accra</li>
              <li className="uppercase tracking-wide text-xs">Car Rental Ghana</li>
              <li className="uppercase tracking-wide text-xs">Staff Busing Services</li>
              <li className="uppercase tracking-wide text-xs">School Transport</li>
              <li className="uppercase tracking-wide text-xs">Tourism Transport</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-lad-lightBlue" />
                <span className="font-light">{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-lad-lightBlue" />
                <span className="font-light tracking-wide">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-lad-lightBlue" />
                <span className="font-light">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-xs text-gray-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} LAD Brothers Transport Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-lad-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;