"use client";

import { ArtistCard } from "@/components/artist-card";
import { motion } from "framer-motion";

const ARTISTS = [
  { name: "Prekshi Arora", specialty: "Bridal Specialist", price: "₹25,000", image: "/assets/artist-traditional.png" },
  { name: "Sushma Chauhan", specialty: "Celebrity MUA", price: "₹40,000", image: "/assets/artist-glam.png" },
  { name: "Ananya Style", specialty: "Airbrush Pro", price: "₹18,000", image: "/assets/artist-editorial.png" },
  { name: "Meera Kapoor", specialty: "Editorial & Fashion", price: "₹35,000", image: "/assets/artist.png" },
  { name: "Riya Singh", specialty: "Destination Weddings", price: "₹50,000", image: "/assets/hero-v2.png" },
  { name: "Zara Khan", specialty: "Cinematic Glam", price: "₹22,000", image: "/assets/bridal.png" },
];

export function ArtistGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTISTS.map((artist, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={i % 2 === 1 ? "md:translate-y-12" : ""} 
            >
                <ArtistCard {...artist} />
            </motion.div>
        ))}
    </div>
  );
}
