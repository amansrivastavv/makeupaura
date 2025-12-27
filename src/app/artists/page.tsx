"use client";

import { ArtistGrid } from "@/components/sections/artists/artist-grid";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArtistsPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-rose selection:text-white pt-32 pb-20">
      <div className="container px-6 md:px-20">
        
        {/* Header */}
        <div className="mb-16">
            <Link href="/" className="inline-flex items-center text-sm text-rose hover:text-rose/80 mb-6 transition-colors uppercase tracking-widest font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif italic text-white mb-6"
            >
                The Collective
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
                Discover India's most sought-after makeup artists. Handpicked for their vision, precision, and artistry.
            </p>
        </div>

        {/* Masonry Grid */}
        <ArtistGrid />

        {/* Bottom CTA */}
        <div className="mt-32 text-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-serif mb-6">Are you a Professional Artist?</h2>
            <Button variant="outline" className="border-rose text-rose hover:bg-rose hover:text-white">Join the Collective</Button>
        </div>

      </div>
    </main>
  );
}
