"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Our Artists", href: "/#artists" }, 
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4" // Added px-4 for safety
      >
        {/* DESKTOP NAV (Hidden on Mobile) */}
        <nav className=" cursor-pointer hidden md:flex pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 p-2 items-center gap-1 shadow-2xl">
          <Link href="/" className="relative w-10 h-10 flex items-center justify-center rounded-full mr-2 overflow-hidden">
              <Image 
                src="/assets/logo.png" 
                alt="Makeup Aura" 
                fill
                className="object-cover"
              />
          </Link>
          
          {NAV_ITEMS.map((item) => {
             const isActive = pathname === item.href;
             return (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-sans uppercase tracking-wider transition-all duration-300",
                  isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
             );
          })}

          <Link href="/contact" className="ml-2 px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-sans uppercase tracking-widest font-bold hover:bg-accent/90 transition-colors">
              Book
          </Link>
        </nav>

        {/* MOBILE NAV TOGGLE (Visible on Mobile) */}
        <div className="cursor-pointer md:hidden pointer-events-auto flex justify-between w-full max-w-sm bg-black/60 backdrop-blur-xl border border-white/10 rounded-full p-2 items-center shadow-2xl">
           <Link href="/" className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
              <Image 
                src="/assets/logo.png" 
                alt="Makeup Aura" 
                fill
                className="object-cover"
              />
           </Link>
           <button 
             onClick={() => setIsMobileMenuOpen(true)}
             className="w-10 h-10 flex items-center justify-center text-white"
           >
             <Menu />
           </button>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col p-6"
          >
             <div className="flex justify-between items-center mb-12">
                 <span className="font-serif text-2xl italic">Makeup Aura</span>
                 <button 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                 >
                   <X />
                 </button>
             </div>

             <nav className="flex flex-col gap-6 items-start">
                {NAV_ITEMS.map((item, i) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif font-light hover:text-accent transition-colors"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
             </nav>
             
             <div className="mt-auto">
                <Button 
                  size="lg" 
                  className="w-full bg-accent text-black text-lg h-14"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Appointment
                </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
