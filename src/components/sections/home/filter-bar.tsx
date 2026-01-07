"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Brush, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const makeupTypes = ["Bridal", "Editorial", "Party", "SFX", "Celebrity"];
const states = ["Maharashtra", "Delhi", "Karnataka", "Punjab", "Gujarat"];
const cities = ["Mumbai", "Pune", "Nagpur", "Nashik"];

type FilterType = "makeup" | "state" | "city" | null;

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState<FilterType>(null);
  const [selectedMakeup, setSelectedMakeup] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const toggleFilter = (filter: FilterType) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-black/60 backdrop-blur-2xl border border-white/10 p-1.5 md:p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-1.5 md:gap-4 items-center justify-between"
      >
        {/* Makeup Type */}
        <div className="relative w-full md:w-auto md:flex-1 group z-30">
          <button 
            onClick={() => toggleFilter("makeup")}
            className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-xl md:rounded-full px-3 md:px-6 py-2 md:py-4 flex items-center justify-between gap-3 border border-white/5 text-left"
          >
            <div className="flex items-center gap-2.5 md:gap-3">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Brush size={14} className="md:w-[18px] md:h-[18px]" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-white/50 uppercase tracking-widest font-sans">Makeup Type</p>
                <p className="text-sm md:text-base text-white font-medium truncate leading-tight">
                  {selectedMakeup || "Select Type"}
                </p>
              </div>
            </div>
            <ChevronDown 
              className={cn(
                "w-3.5 h-3.5 md:w-4 md:h-4 text-white/50 transition-transform duration-300",
                activeFilter === "makeup" ? "rotate-180" : ""
              )} 
            />
          </button>
          
          <AnimatePresence>
            {activeFilter === "makeup" && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-[110%] left-0 w-full min-w-[200px] bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-2 mb-2"
              >
                 {makeupTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => {
                            setSelectedMakeup(type);
                            setActiveFilter(null);
                        }}
                        className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between group/item"
                    >
                        <span>{type}</span>
                        {selectedMakeup === type && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    </button>
                 ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* State */}
        <div className="relative w-full md:w-auto md:flex-1 z-20">
          <button 
            onClick={() => toggleFilter("state")}
            className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-xl md:rounded-full px-3 md:px-6 py-2 md:py-4 flex items-center justify-between gap-3 border border-white/5 text-left"
          >
            <div className="flex items-center gap-2.5 md:gap-3">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                <MapPin size={14} className="md:w-[18px] md:h-[18px]" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-white/50 uppercase tracking-widest font-sans">State</p>
                <p className="text-sm md:text-base text-white font-medium truncate leading-tight">
                  {selectedState || "Select State"}
                </p>
              </div>
            </div>
            <ChevronDown 
              className={cn(
                "w-3.5 h-3.5 md:w-4 md:h-4 text-white/50 transition-transform duration-300",
                activeFilter === "state" ? "rotate-180" : ""
              )} 
            />
          </button>
           <AnimatePresence>
            {activeFilter === "state" && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-[110%] left-0 w-full min-w-[200px] bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-2 mb-2"
              >
                 {states.map((state) => (
                    <button
                        key={state}
                        onClick={() => {
                            setSelectedState(state);
                            setActiveFilter(null);
                        }}
                        className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                        <span>{state}</span>
                        {selectedState === state && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    </button>
                 ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* City */}
        <div className="relative w-full md:w-auto md:flex-1 z-10">
          <button 
            onClick={() => toggleFilter("city")}
            className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-xl md:rounded-full px-3 md:px-6 py-2 md:py-4 flex items-center justify-between gap-3 border border-white/5 text-left"
          >
            <div className="flex items-center gap-2.5 md:gap-3">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream">
                <MapPin size={14} className="md:w-[18px] md:h-[18px]" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-white/50 uppercase tracking-widest font-sans">City</p>
                <p className="text-sm md:text-base text-white font-medium truncate leading-tight">
                  {selectedCity || "Select City"}
                </p>
              </div>
            </div>
            <ChevronDown 
               className={cn(
                "w-3.5 h-3.5 md:w-4 md:h-4 text-white/50 transition-transform duration-300",
                activeFilter === "city" ? "rotate-180" : ""
              )} 
            />
          </button>
           <AnimatePresence>
            {activeFilter === "city" && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-[110%] left-0 w-full min-w-[200px] bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-2 mb-2"
              >
                 {cities.map((city) => (
                    <button
                        key={city}
                        onClick={() => {
                            setSelectedCity(city);
                            setActiveFilter(null);
                        }}
                        className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                        <span>{city}</span>
                        {selectedCity === city && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    </button>
                 ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Button */}
        <Button 
          size="lg" 
          className="w-full md:w-auto rounded-xl md:rounded-full h-12 md:h-16 px-8 bg-accent text-accent-foreground hover:bg-white hover:scale-105 transition-all duration-300 font-serif text-base md:text-lg gap-2"
        >
          <Search size={18} className="md:w-5 md:h-5" />
          Search
        </Button>

      </motion.div>
    </div>
  );
}
