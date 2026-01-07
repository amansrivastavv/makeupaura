"use client";

import { Button } from "@/components/ui/button";
import { FilterBar } from "./filter-bar";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
            <Image 
                src="/assets/hero-v2.png" 
                alt="Luxury Makeup V2" 
                fill 
                priority
                className="object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full container px-6 md:px-20 flex flex-col">
            {/* Text Content - Centered */}
            <div className="flex-1 flex flex-col justify-center max-w-4xl pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                >
                    <h2 className="text-accent text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-4 md:mb-6">
                        Professional Artistry
                    </h2>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-white leading-[0.9] mb-6 md:mb-8">
                        Elevate <br /> Your Aura
                    </h1>
                    <p className="max-w-xl text-base md:text-lg text-white/80 font-sans leading-relaxed text-shadow-sm">
                        India’s premier platform for booking high-end makeup artists. 
                        Bridal, editorial, and special events curated for you.
                    </p>
                </motion.div>
            </div>

            {/* Filter Bar - Bottom Anchored */}
            <div className="w-full pb-8 md:pb-12">
                 <FilterBar />
            </div>
        </div>
    </section>
  );
}
