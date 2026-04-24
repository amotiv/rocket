"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "RocketAI fundamentally transformed how we operate. Their AI agents process our support tickets 10x faster than our previous manual system. It's not just an upgrade; it's a paradigm shift.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Inc.",
    rating: 5,
  },
  {
    content: "The level of engineering quality is institutional-grade. They delivered a predictive analytics engine that seamlessly integrated into our existing PostGIS database with zero downtime.",
    author: "Marcus Aurelius",
    role: "Head of Data, YieldForecaster",
    rating: 5,
  },
  {
    content: "We were struggling with static web infrastructure that couldn't scale. RocketAI migrated us to a highly performant Next.js edge architecture. Our conversion rates are up 40%.",
    author: "Emily Chen",
    role: "VP of Growth, Horizon Dynamics",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="testimonials">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            We build high-performance infrastructure and intelligent agents for forward-thinking organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative group hover:border-blue-500/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-800/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-blue-400 font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.author}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
