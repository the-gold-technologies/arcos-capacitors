"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Settings, 
  Wrench, 
  Zap, 
  TrendingUp, 
  Activity, 
  Layers 
} from "lucide-react";

const industriesList = [
  { name: "Electrical Appliance", icon: Cpu },
  { name: "HVAC & AC Systems", icon: Settings },
  { name: "Water Pumps & Motors", icon: Wrench },
  { name: "Electronics & PCB Assemblies", icon: Cpu },
  { name: "Renewable Solar Energy", icon: Zap },
  { name: "Power Distribution", icon: TrendingUp },
  { name: "Industrial Automation", icon: Activity },
  { name: "Infrastructure & Grid", icon: Layers },
];

export default function IndustriesGrid() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d11]/40 border-y border-dark-border z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Markets We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
              Powering Diverse Industrial Domains
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            From delicate domestic electronics to rugged outdoor power
            distribution, ARCOS provides robust connectivity and capacitance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industriesList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(210,35,42,0.4)",
                }}
                className="bg-[#0f0f13] border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-white font-semibold text-sm leading-snug">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
