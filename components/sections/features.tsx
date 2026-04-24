"use client";

import { motion } from "framer-motion";
import { Bot, RefreshCw, Database } from "lucide-react";

const FEATURES = [
  {
    title: "Agent-Native Platforms",
    description:
      "We build websites with living AI agents embedded directly into your frontend, capable of intelligent, context-aware user interactions exactly when they're needed.",
    icon: Bot,
    color: "text-blue-400",
    bg: "bg-blue-900/20",
    borderColor: "border-blue-800/30",
  },
  {
    title: "Self-Evolving Codebases",
    description:
      "Empower your staff to fix issues, update content, and add new features to your site seamlessly through conversational AI agents—no coding required.",
    icon: RefreshCw,
    color: "text-purple-400",
    bg: "bg-purple-900/20",
    borderColor: "border-purple-800/30",
  },
  {
    title: "Deep Data Workflows",
    description:
      "Connect your proprietary company data natively into our AI systems, automating heavy backend processes and creating a truly bespoke intelligence layer.",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-900/20",
    borderColor: "border-emerald-800/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Future is <span className="text-gradient">Self-Evolving</span>
          </h2>
          <p className="text-lg text-slate-400">
            We don't just build websites; we build intelligent operational hubs. 
            Integrate agents that literally run within your site to handle support, modifications, and scale.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative p-8 rounded-2xl border bg-slate-900/50 backdrop-blur-sm shadow-xl transition-all hover:-translate-y-1 ${feature.borderColor}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
