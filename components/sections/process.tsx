"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Data Audit & Strategy",
    description: "We analyze your current website, workflows, and proprietary data to design a custom integration architecture tailored to your goals.",
  },
  {
    number: "02",
    title: "Agent Architecture",
    description: "Our engineers build native AI agents directly into your Next.js application, hooking into vector databases and live APIs.",
  },
  {
    number: "03",
    title: "Deployment & Training",
    description: "We deploy your new self-evolving ecosystem and show your staff how to use the AI to continuously modify and improve the site.",
  }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How We Implement
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From concept to a living, breathing AI-integrated application in weeks, not months.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center md:even:flex-row-reverse group">
                
                {/* Content Box */}
                <div className="w-full md:w-1/2 md:px-12 md:text-right md:group-even:text-left">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl relative inline-block text-left w-full max-w-sm ml-auto md:group-even:mr-auto"
                  >
                    <div className="text-4xl font-extrabold text-slate-800 absolute -top-4 -right-2 md:group-even:-left-2 md:group-even:right-auto pointer-events-none select-none">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-blue-500 items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
