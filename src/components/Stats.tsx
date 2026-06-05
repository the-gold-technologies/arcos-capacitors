"use client";

import React from "react";
import { motion } from "framer-motion";

const statsData = [
  {
    label: "Modern Facility",
    val: "20,000",
    suffix: " Sq. Ft.",
    desc: "Noida Production Plant",
  },
  {
    label: "Daily Capacity",
    val: "25,000",
    suffix: "+ Units",
    desc: "High-volume supply",
  },
  {
    label: "Customer Trust",
    val: "11",
    suffix: "+ Years",
    desc: "Active brand support",
  },
  {
    label: "Quality Audit Score",
    val: "100",
    suffix: "%",
    desc: "CE & RoHS compliant",
  },
];

export default function Stats() {
  return (
    <section className="relative px-6 -mt-10 mb-20 z-20">
      <div className="max-w-7xl mx-auto relative">
        {/* Ambient background backlight glow */}
        <div className="absolute inset-0 bg-primary/5 filter blur-[80px] rounded-full pointer-events-none -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl glassmorphism glow-overlay border border-dark-border"
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1"
            >
              <span className="text-zinc-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
              <div className="flex items-baseline flex-wrap justify-center lg:justify-start gap-1 mt-1.5">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight font-mono">
                  {stat.val}
                </span>
                <span className="text-primary-light font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-zinc-600 text-[11px] sm:text-xs mt-1 leading-normal">{stat.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
