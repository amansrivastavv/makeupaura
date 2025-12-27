import { Button } from "@/components/ui/button";

const SERVICES = [
    { title: "Bridal Makeup", price: "Starting ₹15,000", desc: "Complete bridal packages including HD, Airbrush, and trial sessions." },
    { title: "Engagement Makeup", price: "Starting ₹8,000", desc: "Subtle yet stunning looks for your engagement ceremony." },
    { title: "Party Makeup", price: "Starting ₹3,500", desc: "Glamorous looks for cocktail parties, receptions, and events." },
    { title: "Family Packages", price: "Custom Quote", desc: "Makeup services for the bride's and groom's families." },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 container px-4 md:px-6">
      <h1 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
            <div key={i} className="p-8 border border-foreground/10 rounded-2xl hover:border-gold/50 transition-colors group">
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-gold font-bold mb-4">{s.price}</p>
                <p className="text-foreground/60 mb-6">{s.desc}</p>
                <Button variant="outline" size="sm">Book Now</Button>
            </div>
        ))}
      </div>
    </main>
  );
}
