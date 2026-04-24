"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "OpenAI",
  "Anthropic",
  "Vercel",
  "Next.js",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Framer Motion",
];

// Duplicate the array to create a seamless infinite scroll effect
const TICKER_ITEMS = [...TECH_STACK, ...TECH_STACK];

export function LogoTicker() {
  return (
    <section className="py-12 border-y border-slate-800 bg-slate-950/50 overflow-hidden relative">
      {/* Gradient masks for smooth fade-in/out on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        <span className="text-slate-400 text-sm font-medium tracking-wider uppercase mr-8 whitespace-nowrap hidden md:block">
          Powered By
        </span>

        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="flex gap-16 whitespace-nowrap items-center"
            animate={{
              x: [0, -1035], // Arbitrary large enough offset to scroll the first block
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {TICKER_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="text-slate-500 font-semibold text-xl tracking-tight hover:text-slate-300 transition-colors"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
