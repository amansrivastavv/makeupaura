"use client";

import { HeroSection } from "@/components/sections/home/hero-section";
import { AboutSection } from "@/components/sections/home/about-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { ArtistsSection } from "@/components/sections/home/artists-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { CTASection } from "@/components/sections/home/cta-section";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ArtistsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
