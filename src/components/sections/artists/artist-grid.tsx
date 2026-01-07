"use client";

import { ArtistCard } from "@/components/artist-card";
import { motion } from "framer-motion";
import { ARTISTS } from "@/data/artists";



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
