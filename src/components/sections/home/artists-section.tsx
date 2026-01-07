"use client";

import { ArtistCard } from "@/components/artist-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ARTISTS } from "@/data/artists";

export function ArtistsSection() {
  return (
    <section id="artists" className="py-20 md:py-32 bg-gradient-to-b from-background to-rose/5">
        <div className="container px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
                <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-tight">Our Top <br className="hidden md:block"/>Makeup Artists</h2>
                <Link href="/artists">
                    <Button variant="secondary" className="cursor-pointer bg-rose text-white hover:bg-rose/80 border-none">View All Talent</Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTISTS.slice(0, 3).map((artist, index) => (
                    <div key={artist.id} className={index % 2 !== 1 ? "md:translate-y-12" : ""}>
                         <ArtistCard 
                            id={artist.id}
                            name={artist.name} 
                            specialty={artist.specialty} 
                            price={artist.price} 
                            image={artist.image} 
                         />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
