import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapChart } from '../components/MapChart';
import { ArrowRight, Globe, Sun, Map as MapIcon } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const handleSelectCountry = (countryId: string | null) => {
    if (countryId) {
      navigate(`/destination/${countryId}`);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A4B8C] to-[#2E8B57] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-['Poppins'] mb-6 leading-tight"
          >
            Explore Southeast Asia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Discover ancient temples, pristine beaches, and vibrant cultures across 11 breathtaking countries.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B35] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#e55a2b] transition-colors flex items-center gap-2 mx-auto"
            onClick={() => {
              const mapSection = document.getElementById('interactive-map');
              mapSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 text-[#1A4B8C] mb-4" />
            <h3 className="text-xl font-bold mb-2">11 Unique Countries</h3>
            <p className="text-gray-600">From the islands of Indonesia to the mountains of Vietnam.</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
            <Sun className="w-12 h-12 text-[#FF6B35] mb-4" />
            <h3 className="text-xl font-bold mb-2">Tropical Paradise</h3>
            <p className="text-gray-600">Enjoy warm weather, sunny beaches, and lush rainforests year-round.</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
            <MapIcon className="w-12 h-12 text-[#2E8B57] mb-4" />
            <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
            <p className="text-gray-600">Click on any country below to discover local attractions.</p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="interactive-map" className="flex-1 bg-[#F8F9FA] py-12">
        <div className="container mx-auto px-4 h-[600px] md:h-[800px] flex flex-col">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-[#1A4B8C] mb-2">Interactive Region Map</h2>
            <p className="text-gray-600">Select a country to explore details</p>
          </div>
          
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <MapChart 
              selectedCountryId={null} 
              onSelectCountry={handleSelectCountry}
              hoveredCountryId={hoveredCountry}
              setHoveredCountryId={setHoveredCountry}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
