"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, useRef, useState } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-white/90 border border-transparent",
      secondary: "bg-transparent text-foreground border border-foreground/30 hover:border-foreground",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      outline: "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wider",
      md: "h-12 px-6 text-sm tracking-widest",
      lg: "h-14 px-10 text-base tracking-widest",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-sans uppercase font-medium transition-all duration-300 disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
