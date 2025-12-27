"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold">
              Makeup<span className="text-primary italic">Aura</span>.
            </h2>
            <p className="text-background/60 max-w-xs">
              Elevating beauty with professional artistry for your most cherished moments.
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-background/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Find Artists</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Become a Partner</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Contact</h3>
            <ul className="space-y-4 text-background/60">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 9056609325</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@makeupaura.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Available across India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
             <h3 className="font-serif text-xl font-bold">Stay Updated</h3>
             <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background/10 border border-background/20 px-4 py-2 rounded-full w-full focus:outline-none focus:border-primary text-background"
                />
             </div>
             <div className="flex gap-4 pt-4">
                <Link href="#" className="p-2 bg-background/5 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5" /></Link>
                <Link href="#" className="p-2 bg-background/5 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5" /></Link>
                <Link href="#" className="p-2 bg-background/5 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5" /></Link>
             </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-16 pt-8 text-center text-background/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Makeup Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
