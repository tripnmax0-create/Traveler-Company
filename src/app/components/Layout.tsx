import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-[#1A4B8C] font-['Open_Sans']">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-['Poppins'] text-[#1A4B8C]">
            <MapPin className="h-8 w-8 text-[#FF6B35]" />
            Traveller Company
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <Link to="/" className="hover:text-[#FF6B35] transition-colors">Home</Link>
            <Link to="/destinations" className="hover:text-[#FF6B35] transition-colors">Destinations</Link>
            <Link to="/about" className="hover:text-[#FF6B35] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t p-4 flex flex-col gap-4 font-semibold shadow-lg absolute w-full">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#FF6B35]">Home</Link>
            <Link to="/destinations" onClick={toggleMenu} className="hover:text-[#FF6B35]">Destinations</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-[#FF6B35]">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-[#FF6B35]">Contact</Link>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1A4B8C] text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold font-['Poppins'] mb-4">
              <MapPin className="h-6 w-6 text-[#FF6B35]" />
              Traveller Company
            </div>
            <p className="text-gray-300 text-sm">
              Discover the beauty of Southeast Asia with us. Your adventure starts here.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B35]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B35]">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Travel Street</li>
              <li>Bangkok, Thailand</li>
              <li>+66 123 456 789</li>
              <li>info@travellercompany.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B35]">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Subscribe for travel tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] w-full"
              />
              <button className="bg-[#FF6B35] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#e55a2b] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Traveller Company. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
            <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
