"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import {
  Cpu,
  Settings,
  Wrench,
  Zap,
  Activity,
  Layers,
  Wind,
  Tv,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

const industriesList = [
  {
    name: "Fan Manufacturers",
    icon: Wind,
    image: "/fan_manufacturing.png",
    gridClass: "col-span-2 md:col-span-2 lg:col-span-2",
  },
  {
    name: "Motor Manufacturers",
    icon: Settings,
    image: "/motor_manufacturing.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Pump Manufacturers",
    icon: Wrench,
    image: "/pump_manufacturing.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Appliance Manufacturers",
    icon: Tv,
    image: "/appliance_manufacturing.png",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    name: "Electrical Product Manufacturers",
    icon: Cpu,
    image: "/electrical_manufacturing.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-2",
  },
  {
    name: "Electrical Dealers & Distributors",
    icon: Users,
    image: "/electrical_distribution.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Industrial Automation Companies",
    icon: Activity,
    image: "/industrial_automation.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Renewable Energy Companies",
    icon: Zap,
    image: "/solar_energy.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Infrastructure Projects",
    icon: Building2,
    image: "/infrastructure_wiring.png",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    name: "Panel Builders",
    icon: Layers,
    image: "/panel_building.png",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    name: "OEM Manufacturers",
    icon: Briefcase,
    image: "/oem_manufacturing.png",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-2",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function IndustriesGrid() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#f4f4f5]/60 border-y border-zinc-200 z-0" />

      {/* Ambient Red glow background blobs */}
      <div className="absolute top-[20%] -left-[15%] h-[400px] w-[400px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] -right-[15%] h-[400px] w-[400px] rounded-full bg-primary/5 filter blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Industries Served
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-3">
              ARCOS products are trusted by a wide range of industries
            </h2>
          </div>
          <p className="text-zinc-655 text-sm sm:text-base max-w-md">
            ARCOS products are trusted by a wide range of industries including
            fan, motor, pump, appliance, and electrical product manufacturers,
            dealers, panel builders, and OEM partners.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {industriesList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 36px -10px rgba(0,0,0,0.18)",
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
                className={`relative overflow-hidden rounded-2xl h-[160px] sm:h-[200px] group border border-zinc-200/50 shadow-sm ${ind.gridClass} will-change-transform`}
              >
                {/* Background image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  style={{ transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between items-start z-10">
                  <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-primary group-hover:border-primary/60 transition-all duration-400 ease-out shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base leading-snug tracking-tight text-left drop-shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 ease-out">
                    {ind.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
