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
      <div className="max-w-7xl mx-auto">
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
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-0.5 mt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                  {stat.val}
                </span>
                <span className="text-primary-light font-bold text-lg">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-zinc-400 text-xs mt-1">{stat.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
