"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TerminalSquare } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with glowing orb */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,transparent,white,transparent)]" 
        style={{ opacity: 0.1 }} 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          {/* Texture overlay removed for performance */}

          <TerminalSquare className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready for a Self-Healing Website?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop relying on static pages. Move to an agent-native architecture where your website actively works for you, integrates your data, and can be edited via natural language.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Book an AI Infrastructure Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#testimonials"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
