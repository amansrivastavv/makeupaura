import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-40 bg-white text-black">
        <div className="container px-6 md:px-20 text-center">
            <Quote className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-accent opacity-50" />
            <h2 className="text-2xl md:text-5xl font-serif leading-snug max-w-4xl mx-auto mb-8 md:mb-12">
                "Makeup Aura transformed my wedding day. The artist was not just a stylist, but a true visionary who understood my skin and my style perfectly."
            </h2>
            <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-base md:text-lg font-sans uppercase tracking-widest">Riya Sharma</span>
                <span className="text-xs md:text-sm text-black/60 italic">Married in Udaipur, 2024</span>
            </div>
            
            <div className="flex justify-center gap-2 mt-8 md:mt-12">
                <div className="w-3 h-3 rounded-full bg-black cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-black/20 hover:bg-black/50 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-black/20 hover:bg-black/50 cursor-pointer transition-colors"></div>
            </div>
        </div>
    </section>
  );
}
