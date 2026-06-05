"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Lightbulb, 
  Cpu, 
  UserCheck, 
  TrendingUp, 
  Heart 
} from "lucide-react";

const coreStrengthsData = [
  { title: "Quality", desc: "Stringent incoming testing & zero-defect culture.", icon: Award },
  { title: "Reliability", desc: "Long-life operation without structural degradation.", icon: ShieldCheck },
  { title: "Performance", desc: "Low dissipation factors and stable capacitance values.", icon: Activity },
  { title: "Durability", desc: "Protected inside flame-retardant thermoplastic shells.", icon: Zap },
  { title: "Innovation", desc: "Continuous improvement in metallization technology.", icon: Lightbulb },
  { title: "Precision", desc: "State-of-the-art automated Swiss/German winding machinery.", icon: Cpu },
  { title: "Trust", desc: "Honest customer terms, clear specifications, and transparency.", icon: UserCheck },
  { title: "Consistency", desc: "Every batch matches precise industrial tolerances.", icon: TrendingUp },
  { title: "Satisfaction", desc: "Fast logistics, active tech support, and OEM flexibility.", icon: Heart },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
} as const;

export default function CoreStrengths() {
  return (
    <section className="relative mb-12">
      {/* Ambient Red glow background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-primary/6 filter blur-[130px] pointer-events-none -z-10" />

      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Values</span>
        <h2 className="text-3xl font-bold text-zinc-950 tracking-tight mt-2">
          9 Pillars of Our Success
        </h2>
        <p className="text-zinc-650 text-xs sm:text-sm mt-3">
          Every capacitor winding and clip molding we create is backed by these core values.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {coreStrengthsData.map((str, idx) => {
          const Icon = str.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(210,35,42,0.25)",
                boxShadow: "0 10px 30px -10px rgba(210,35,42,0.12)"
              }}
              className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 shadow-sm group"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center border border-primary/20 text-primary transition-colors duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-zinc-900 font-bold text-base tracking-tight">{str.title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-2">{str.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
