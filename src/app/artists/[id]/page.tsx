"use client";

import { getArtistById } from "@/data/artists";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function ArtistProfilePage() {
  const params = useParams();
  const id = params?.id as string;
  const artist = getArtistById(id);

  if (!artist) {
    return notFound();
  }

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-rose selection:text-white pt-32 pb-20">
      <div className="container px-6 md:px-20">
        
        {/* Navigation */}
        <div className="mb-12">
            <Link href="/artists" className="inline-flex items-center text-sm text-rose hover:text-rose/80 mb-6 transition-colors uppercase tracking-widest font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Artists
            </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Image */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] rounded-sm overflow-hidden"
            >
                <Image 
                    src={artist.image} 
                    alt={artist.name} 
                    fill 
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Content */}
            <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="flex flex-col justify-center"
            >
                <div className="mb-6">
                    <span className="text-accent text-sm font-sans uppercase tracking-widest mb-2 block">{artist.specialty}</span>
                    <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-4">{artist.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-rose fill-rose" />
                            <span>4.9 (120 Reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                             <MapPin className="w-4 h-4" />
                            <span>New Delhi, India</span>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {artist.bio}
                    </p>
                </div>

                <div className="flex flex-col gap-6 p-6 border border-white/10 bg-white/5 rounded-sm mb-8">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-serif">Starting Price</span>
                        <span className="text-2xl font-bold text-rose">{artist.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Includes consultation and trial session.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-rose text-white hover:bg-rose/80 h-12 px-8 text-lg">Book Now</Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10 h-12 px-8 text-lg">
                        <Instagram className="w-5 h-5 mr-2" /> View Portfolio
                    </Button>
                </div>
            </motion.div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-12 text-center">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artist.images.map((img, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="aspect-[4/5] relative overflow-hidden group"
                    >
                         <Image 
                            src={img} 
                            alt={`${artist.name} work ${index + 1}`} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </main>
  );
}
