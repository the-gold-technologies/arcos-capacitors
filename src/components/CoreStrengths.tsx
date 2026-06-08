"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import {
  Award,
  ShieldCheck,
  Activity,
  Zap,
  Lightbulb,
  Cpu,
  UserCheck,
  TrendingUp,
  Heart,
} from "lucide-react";

const coreStrengthsData = [
  { title: "Quality",               desc: "Stringent incoming testing & zero-defect culture.",                       icon: Award       },
  { title: "Reliability",           desc: "Long-life operation without structural degradation.",                     icon: ShieldCheck  },
  { title: "Performance",           desc: "Low dissipation factors and stable capacitance values.",                  icon: Activity    },
  { title: "Durability",            desc: "Protected inside flame-retardant thermoplastic shells.",                  icon: Zap         },
  { title: "Innovation",            desc: "Continuous improvement in metallization technology.",                     icon: Lightbulb   },
  { title: "Precision",             desc: "State-of-the-art automated Swiss/German winding machinery.",              icon: Cpu         },
  { title: "Trust",                 desc: "Honest customer terms, clear specifications, and transparency.",          icon: UserCheck   },
  { title: "Consistency",           desc: "Every batch matches precise industrial tolerances.",                      icon: TrendingUp  },
  { title: "Customer Satisfaction", desc: "Fast logistics, active tech support, and OEM flexibility.",               icon: Heart       },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
} as const;

export default function CoreStrengths() {
  return (
    <section className="relative mb-12">
      {/* Ambient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-primary/6 filter blur-[130px] pointer-events-none -z-10" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Values</span>
        <h2 className="text-3xl font-bold text-zinc-950 tracking-tight mt-2">
          9 Pillars of Our Success
        </h2>
        <p className="text-zinc-650 text-xs sm:text-sm mt-3">
          Every capacitor winding and clip molding we create is backed by these core values.
        </p>
      </motion.div>

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
                y: -8,
                scale: 1.02,
                borderColor: "rgba(210,35,42,0.28)",
                boxShadow: "0 22px 44px -16px rgba(210,35,42,0.14)",
                transition: { duration: 0.32, ease: EASE },
              }}
              className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-start gap-4 shadow-sm group relative overflow-hidden cursor-pointer will-change-transform"
            >
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary/4 to-transparent -translate-x-full group-hover:translate-x-[250%] transition-transform duration-900 ease-out z-0 pointer-events-none" />

              {/* Background watermark icon */}
              <div className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-600 ease-out pointer-events-none text-primary z-0">
                <Icon className="w-full h-full" strokeWidth={0.7} />
              </div>

              {/* Icon */}
              <div className="h-10 w-10 rounded-xl bg-primary/10 group-hover:bg-primary/18 flex items-center justify-center border border-primary/20 group-hover:border-primary/35 text-primary transition-all duration-350 ease-out z-10">
                <motion.div
                  className="flex items-center justify-center"
                  whileHover={{ rotate: 18, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              </div>

              <div className="z-10">
                <h3 className="text-zinc-900 font-bold text-base tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {str.title}
                </h3>
                <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed mt-2">{str.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
