import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-40 bg-accent text-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <div className="container px-6">
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 md:mb-8">Ready to define your look?</h2>
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto mb-8 md:mb-10">
                Book the best makeup artists in your city today. Secure, reliable, and stunning.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-black/80 h-14 md:h-16 px-8 md:px-12 text-base md:text-lg w-full md:w-auto">
                Book Your Appointment
            </Button>
        </div>
    </section>
  );
}
