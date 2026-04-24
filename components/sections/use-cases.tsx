"use client";

import { motion } from "framer-motion";
import { Factory, Church, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";

const USE_CASES = [
  {
    title: "Factories & Manufacturing",
    description: "Predictive data pipelines and operational AI agents deployed directly on the factory floor site to automate supply chain inquiries and machine maintenance logs.",
    icon: Factory,
    metrics: "40% faster resolution",
    color: "from-blue-600 to-blue-900"
  },
  {
    title: "Churches & Non-Profits",
    description: "Automated congregation management, smart donation routing, and 24/7 AI-assisted pastoral resources built directly into your primary website.",
    icon: Church,
    metrics: "24/7 congregant support",
    color: "from-purple-600 to-purple-900"
  },
  {
    title: "Small Organizations",
    description: "Turnkey, AI-integrated websites that act as your 24/7 digital salesperson, answering complex queries and dynamically updating your content based on demand.",
    icon: Building2,
    metrics: "3x lead conversion",
    color: "from-emerald-600 to-emerald-900"
  }
];

export function UseCases() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              AI Tailored to Your Industry
            </h2>
            <p className="text-lg text-slate-400">
              Generic solutions don't work. We build custom agent deployments and specialized web infrastructure for unique operational environments.
            </p>
          </div>
          <Link 
            href="#contact" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            See all capabilities <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.color}`} />
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-slate-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-xs font-semibold border border-slate-700">
                    {useCase.metrics}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
