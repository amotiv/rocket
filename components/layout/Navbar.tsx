"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RocketIcon } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <RocketIcon className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold tracking-tight text-white">
            Rocket<span className="text-blue-500">Solutions</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#demo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Demo
          </Link>
          <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
