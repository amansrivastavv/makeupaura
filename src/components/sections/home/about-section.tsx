import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 container bg-cream text-cream-foreground w-full max-w-none px-6 md:px-20">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
                <span className="text-rose text-xs font-sans uppercase tracking-widest">Since 2024</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight text-black">
                    Crafting Confidence, <br />
                    <span className="italic text-rose/80">One Look at a Time.</span>
                </h2>
                <p className="text-base md:text-lg text-black/70 leading-relaxed font-sans">
                    Makeup Aura was born from a simple belief: beauty is personal. We connect you with India’s elite makeup artists who understand that makeup isn't just about covering up—it's about revealing the star within you.
                </p>
                <div className="flex gap-12 pt-8 border-t border-rose/20">
                    <div>
                        <h4 className="text-3xl md:text-4xl font-serif text-rose">5K+</h4>
                        <p className="text-xs md:text-sm text-black/60 uppercase tracking-wider mt-2">Happy Brides</p>
                    </div>
                    <div>
                        <h4 className="text-3xl md:text-4xl font-serif text-rose">200+</h4>
                        <p className="text-xs md:text-sm text-black/60 uppercase tracking-wider mt-2">Verified Artists</p>
                    </div>
                </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm order-1 md:order-2 shadow-2xl">
                 <Image 
                    src="/assets/artist.png" 
                    fill 
                    alt="About Makeup Aura" 
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                 />
            </div>
         </div>
    </section>
  );
}
