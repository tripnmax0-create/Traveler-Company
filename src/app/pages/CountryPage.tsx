import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapChart } from '../components/MapChart';
import { countries } from '../data/countries';
import { ArrowLeft, Thermometer, Coins, Languages, FileText, X, MapPin } from 'lucide-react';
import { clsx } from 'clsx';

export function CountryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  const country = countries.find(c => c.id === id);
  const selectedLocation = country?.locations.find(l => l.id === selectedLocationId);

  // If country not found, redirect to home
  useEffect(() => {
    if (!country) {
      navigate('/');
    }
  }, [country, navigate]);

  if (!country) return null;

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden bg-[#F8F9FA]">
      {/* Sidebar - Country Info */}
      <motion.aside 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-xl z-20 flex flex-col h-full overflow-y-auto border-r border-gray-100"
      >
        <div className="p-6">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-[#1A4B8C] mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Map
          </Link>

          <h1 className="text-4xl font-bold text-[#1A4B8C] mb-2 font-['Poppins']">{country.name}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{country.description}</p>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-[#1A4B8C] font-semibold mb-2">
                <Thermometer className="w-5 h-5" /> Best Time to Visit
              </div>
              <p className="text-sm text-gray-700">{country.bestTime}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-[#2E8B57] font-semibold mb-2">
                  <Coins className="w-5 h-5" /> Currency
                </div>
                <p className="text-sm text-gray-700">{country.currency}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-[#FF6B35] font-semibold mb-2">
                  <Languages className="w-5 h-5" /> Language
                </div>
                <p className="text-sm text-gray-700">{country.language}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FileText className="w-5 h-5" /> Visa Requirements
              </div>
              <p className="text-sm text-gray-600">{country.visa}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-bold text-gray-800 mb-4">Popular Locations</h3>
            <div className="space-y-2">
              {country.locations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={clsx(
                    "w-full text-left p-3 rounded-lg transition-all flex items-center justify-between group",
                    selectedLocationId === loc.id 
                      ? "bg-[#1A4B8C] text-white shadow-md" 
                      : "bg-white border border-gray-200 hover:border-[#1A4B8C] hover:bg-blue-50"
                  )}
                >
                  <span className="font-medium">{loc.name}</span>
                  <MapPin className={clsx("w-4 h-4", selectedLocationId === loc.id ? "text-white" : "text-gray-400 group-hover:text-[#1A4B8C]")} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Map Area */}
      <div className="flex-1 relative bg-[#E0F7FA]">
        <MapChart 
          selectedCountryId={country.id} 
          onSelectCountry={(id) => {
            if (id && id !== country.id) navigate(`/destination/${id}`);
            // If clicking same country or null, do nothing or go back?
            // User can go back via sidebar button. 
            // Clicking empty space (null) could clear location selection.
            if (!id) setSelectedLocationId(null);
          }}
          hoveredCountryId={hoveredCountry}
          setHoveredCountryId={setHoveredCountry}
          selectedLocationId={selectedLocationId}
          onSelectLocation={setSelectedLocationId}
        />

        {/* Location Details Panel Overlay */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-4 right-4 bottom-4 w-full md:w-80 bg-white shadow-2xl rounded-xl overflow-y-auto z-30 border border-gray-200"
            >
              <div className="relative">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 w-full flex items-center justify-center relative overflow-hidden">
                   <img 
                     src={selectedLocation.image} 
                     alt={selectedLocation.name}
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <button 
                    onClick={() => setSelectedLocationId(null)}
                    className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                   <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold font-['Poppins'] shadow-black/50 drop-shadow-md">
                     {selectedLocation.name}
                   </h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedLocation.description}
                  </p>

                  <h3 className="font-bold text-[#1A4B8C] mb-3 text-sm uppercase tracking-wider">Top Experiences</h3>
                  <ul className="space-y-2 mb-8">
                    {selectedLocation.experiences.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 flex-shrink-0" />
                        {exp}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <button className="w-full bg-[#FF6B35] text-white py-3 rounded-lg font-bold shadow-lg hover:bg-[#e55a2b] transition-colors">
                      Explore Packages
                    </button>
                    <button className="w-full bg-white border border-[#1A4B8C] text-[#1A4B8C] py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
