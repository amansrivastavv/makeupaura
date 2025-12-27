import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 container px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl font-serif font-bold">About <span className="text-primary">Makeup Aura</span></h1>
        <p className="text-xl text-foreground/70 leading-relaxed">
          At Makeup Aura, we believe that every face tells a story, and our mission is to make yours shine. 
          With over 10 years of experience in the industry, we have curated a network of India's finest makeup artists, 
          ensuring that you look nothing short of spectacular on your special day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                <p className="text-foreground/60">To provide a seamless, reliable, and premium booking experience for beauty services across the nation.</p>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold">Why Choose Us?</h3>
                <ul className="list-disc list-inside text-foreground/60 space-y-2">
                    <li>Verified Professionals</li>
                    <li>Hygiene First Approach</li>
                    <li>Transparent Pricing</li>
                    <li>24/7 Support</li>
                </ul>
            </div>
        </div>
        <div className="pt-8">
            <Button size="lg">Join Our Network</Button>
        </div>
      </div>
    </main>
  );
}
