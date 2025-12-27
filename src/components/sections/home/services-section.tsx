import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="container px-6 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Makeup Services</h2>
                <p className="text-muted-foreground mb-8">
                    Expertly curated packages for every occasion. From the aisle to the runway.
                </p>
                <div className="hidden md:block">
                    <Image 
                        src="/assets/bridal.png" 
                        width={400} 
                        height={500} 
                        alt="Service Preview" 
                        className="rounded-lg opacity-80 shadow-lg border border-white/5"
                    />
                </div>
            </div>
            
            <div className="w-full md:w-2/3">
                {[
                    { title: "Bridal Couture", price: "from ₹15,000", desc: "HD & Airbrush available" },
                    { title: "Engagement Glam", price: "from ₹8,000", desc: "Subtle yet striking" },
                    { title: "Editorial & Shoot", price: "Custom Quote", desc: "High fashion concepts" },
                    { title: "Party Makeup", price: "from ₹4,500", desc: "For guests and events" },
                ].map((service, i) => (
                    <div key={i} className="group border-b border-white/10 py-8 md:py-12 flex flex-col md:flex-row md:justify-between md:items-center cursor-pointer hover:bg-rose/5 px-2 md:px-4 transition-all duration-500 rounded-lg">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-3xl md:text-5xl font-serif text-white/50 group-hover:text-rose-foreground transition-colors mb-2">
                                {service.title}
                            </h3>
                            <p className="text-xs md:text-sm text-rose opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                                {service.desc}
                            </p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-8">
                            <span className="font-sans text-sm tracking-widest text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                {service.price}
                            </span>
                            <ArrowRight className="hidden md:block text-white opacity-0 group-hover:text-rose group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </section>
  );
}
