"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ArtistProps {
  id: string;
  name: string;
  specialty: string;
  price: string;
  image: string;
}

export function ArtistCard({ id, name, specialty, price, image }: ArtistProps) {
  return (
    <motion.div 
      className="group relative w-full aspect-[3/4] overflow-hidden bg-card"
      whileHover="hover"
      initial="initial"
    >
      <motion.div 
        className="absolute inset-0"
        variants={{
            hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" 
        />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <motion.div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-accent text-xs font-sans uppercase tracking-widest mb-2">{specialty}</p>
            <h3 className="text-3xl font-serif font-italic text-white mb-4">{name}</h3>
            
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                 <div className="pt-4 border-t border-white/20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="font-sans text-sm">{price}</span>
                    <Link href={`/artists/${id}`} className="text-xs uppercase underline cursor-pointer hover:text-rose transition-colors">View Profile</Link>
                 </div>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
