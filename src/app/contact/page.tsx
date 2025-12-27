import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
        <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">Get in Touch</h1>
            <p className="text-xl text-foreground/60">
                Have questions or need assistance with your booking? Our support team is here to help you 24/7.
            </p>
            
            <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold">Phone</p>
                        <p className="text-foreground/60">+91 9056609325</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold">Email</p>
                        <p className="text-foreground/60">support@makeupaura.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold">Address</p>
                        <p className="text-foreground/60">Makeup Aura HQ, New Delhi, India</p>
                    </div>
                </div>
            </div>
        </div>

        <form className="space-y-6 bg-foreground/5 p-8 rounded-3xl">
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold">Name</label>
                    <input type="text" className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold">Phone</label>
                    <input type="tel" className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" placeholder="+91..." />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold">Email</label>
                <input type="email" className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold">Message</label>
                <textarea rows={4} className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" placeholder="How can we help you?" />
            </div>
            <Button size="lg" className="w-full">Send Message</Button>
        </form>
      </div>
    </main>
  );
}
