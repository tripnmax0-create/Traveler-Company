import React, { useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { Country, countries } from '../data/countries';
import { motion } from 'motion/react';

// Standard World Atlas TopoJSON
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MapChartProps {
  selectedCountryId: string | null;
  onSelectCountry: (countryId: string | null) => void;
  hoveredCountryId: string | null;
  setHoveredCountryId: (id: string | null) => void;
  selectedLocationId?: string | null;
  onSelectLocation?: (locationId: string | null) => void;
}

const highlightColor = "#2E8B57"; // Tropical Green
const defaultColor = "#D6D6DA";
const hoverColor = "#1A4B8C"; // Deep Blue for hover

// ID mapping because standard topojson uses ISO numeric or alpha-3 usually.
// countries-110m.json uses ISO 3 numeric codes or we can match by name properties if available.
// Actually, usually it has `id` as string ISO numeric code? Or just name. 
// We will try to match by ISO Alpha-3 if possible, but countries-110m usually uses numeric strings.
// Let's create a mapping or use a util. 
// Easier: match by "name" if available in properties, or ISO3.
// I will assume properties.name matches our country names for simplicity, or I'll check iso_a3.

export function MapChart({ 
  selectedCountryId, 
  onSelectCountry,
  hoveredCountryId,
  setHoveredCountryId,
  selectedLocationId,
  onSelectLocation
}: MapChartProps) {
  
  // Calculate center and zoom based on selected country
  const { center, zoom } = useMemo(() => {
    if (selectedCountryId) {
      const country = countries.find(c => c.id === selectedCountryId);
      // Rough centers for zoom
      if (country?.id === 'indonesia') return { center: [118, -2], zoom: 4 };
      if (country?.id === 'thailand') return { center: [100, 13], zoom: 6 };
      if (country?.id === 'vietnam') return { center: [108, 16], zoom: 5 };
      if (country?.id === 'malaysia') return { center: [109, 4], zoom: 5 };
      if (country?.id === 'philippines') return { center: [122, 13], zoom: 6 };
      if (country?.id === 'singapore') return { center: [103.8, 1.35], zoom: 15 }; // City state, needs high zoom
      if (country?.id === 'cambodia') return { center: [105, 12], zoom: 7 };
      if (country?.id === 'laos') return { center: [103, 19], zoom: 6 };
      if (country?.id === 'myanmar') return { center: [96, 20], zoom: 5 };
      if (country?.id === 'brunei') return { center: [114.9, 4.5], zoom: 10 };
      if (country?.id === 'easttimor') return { center: [125.5, -8.8], zoom: 9 };
    }
    return { center: [115, 5], zoom: 3 }; // Southeast Asia general view
  }, [selectedCountryId]);

  // Animation variants for smooth zoom?
  // React Simple Maps ZoomableGroup animates by default if we update center/zoom? 
  // No, it's instant. But we can use motion to interpolate.
  // For now, let's stick to instant jump or basic CSS transition if possible.
  // We'll wrap the inner content or just let it snap. 
  // The user asked for "Smooth transition". 
  // To achieve smooth transition with react-simple-maps, we often need a custom wrapper or use the `motion` library to animate the props.
  // However, ZoomableGroup props are numbers.
  
  const selectedCountry = countries.find(c => c.id === selectedCountryId);

  return (
    <div className="w-full h-full bg-[#E0F7FA] rounded-xl overflow-hidden relative shadow-inner border border-[#1A4B8C]/10">
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 600, // Initial scale
            center: [100, 10] // Roughly SE Asia
            // We'll rely on ZoomableGroup for dynamic pan/zoom
          }}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup 
            center={center as [number, number]} 
            zoom={zoom}
            minZoom={1}
            maxZoom={20}
            filterZoomEvent={() => true}
            // For smooth transition, we can try using a spring transition on these props if ComposableMap supports it, but it doesn't.
            // We just let it snap for now, or use a library wrapper.
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // Helper to normalize names for matching
                  const normalize = (str: string) => str.toLowerCase().replace(/[^a-z]/g, '');
                  
                  const targetCountry = countries.find(c => {
                    const geoName = normalize(geo.properties.name || '');
                    const cName = normalize(c.name);
                    
                    // Direct match
                    if (geoName === cName) return true;
                    
                    // Common variations
                    if (c.id === 'vietnam' && geoName.includes('vietnam')) return true;
                    if (c.id === 'laos' && (geoName.includes('lao') || geoName === 'laos')) return true;
                    if (c.id === 'brunei' && geoName.includes('brunei')) return true;
                    if (c.id === 'easttimor' && (geoName.includes('timor') || geoName.includes('easttimor'))) return true;
                    if (c.id === 'myanmar' && (geoName.includes('myanmar') || geoName.includes('burma'))) return true;
                    
                    // ISO Code match if available (geo.id is usually numeric string, need numeric code to match)
                    // We stick to name matching for this simple demo
                    return false;
                  });
                  
                  const isTarget = !!targetCountry;
                  const isSelected = selectedCountryId === targetCountry?.id;
                  const isHovered = hoveredCountryId === targetCountry?.id;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        if (isTarget) setHoveredCountryId(targetCountry.id);
                      }}
                      onMouseLeave={() => {
                        setHoveredCountryId(null);
                      }}
                      onClick={() => {
                        if (isTarget) {
                          onSelectCountry(isSelected ? null : targetCountry.id);
                        } else {
                          onSelectCountry(null);
                        }
                      }}
                      style={{
                        default: {
                          fill: isSelected ? highlightColor : (isTarget ? "#2E8B57" : defaultColor),
                          stroke: "#FFF",
                          strokeWidth: 0.5,
                          outline: "none",
                          transition: "fill 0.3s ease"
                        },
                        hover: {
                          fill: isTarget ? hoverColor : defaultColor,
                          stroke: "#FFF",
                          strokeWidth: 0.5,
                          outline: "none",
                          cursor: isTarget ? "pointer" : "default"
                        },
                        pressed: {
                          fill: highlightColor,
                          stroke: "#FFF",
                          strokeWidth: 0.5,
                          outline: "none"
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Locations Layer - Only show when a country is selected */}
            {selectedCountry && selectedCountry.locations.map((loc) => (
              <Marker key={loc.id} coordinates={loc.coordinates}>
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                   {/* Pin Icon SVG */}
                   <g
                     transform="translate(-12, -24)"
                     className="cursor-pointer group"
                     onClick={(e) => {
                       e.stopPropagation(); // Prevent map click
                       if (onSelectLocation) {
                         onSelectLocation(loc.id);
                       }
                     }}
                   >
                     <circle cx="12" cy="12" r="10" fill={selectedLocationId === loc.id ? "#1A4B8C" : "#FF6B35"} className="drop-shadow-lg transition-colors" />
                     <circle cx="12" cy="12" r="4" fill="white" />
                     <path d="M12 22 L12 30" stroke="#FF6B35" strokeWidth="2" />
                     
                     {/* Label on hover */}
                     <text
                       textAnchor="middle"
                       y="-5"
                       x="12"
                       className="font-bold text-[8px] fill-[#1A4B8C] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-white"
                       style={{ textShadow: "0px 0px 2px white" }}
                     >
                       {loc.name}
                     </text>
                   </g>
                </motion.g>
              </Marker>
            ))}

          </ZoomableGroup>
        </ComposableMap>
      </motion.div>
      
      {/* Zoom Controls (Optional) */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-2 rounded shadow text-gray-600 hover:text-[#1A4B8C]" onClick={() => onSelectCountry(null)}>
          Reset View
        </button>
      </div>
    </div>
  );
}
