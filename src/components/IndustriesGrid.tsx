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
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-2 md:col-span-2 lg:col-span-2",
  },
  {
    name: "Motor Manufacturers",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Pump Manufacturers",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Appliance Manufacturers",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    name: "Electrical Product Manufacturers",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-2",
  },
  {
    name: "Electrical Dealers & Distributors",
    icon: Users,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Industrial Automation Companies",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Renewable Energy Companies",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Infrastructure Projects",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    name: "Panel Builders",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    name: "OEM Manufacturers",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80",
    gridClass: "col-span-1 md:col-span-1 lg:col-span-2",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#f4f4f5]/60 border-y border-zinc-200 z-0" />

      {/* Ambient Red glow background blobs - shifted offscreen for edge lighting */}
      <div className="absolute top-[20%] -left-[15%] h-[400px] w-[400px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] -right-[15%] h-[400px] w-[400px] rounded-full bg-primary/5 filter blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industriesList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{
                  y: -5,
                  boxShadow: "0 12px 30px -10px rgba(0,0,0,0.15)",
                }}
                className={`relative overflow-hidden rounded-2xl h-[160px] sm:h-[200px] group border border-zinc-200/50 shadow-sm transition-all duration-300 ${ind.gridClass}`}
              >
                {/* Background image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content over image */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between items-start z-10">
                  <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-primary transition-colors duration-300 shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base leading-snug tracking-tight text-left drop-shadow-sm">
                    {ind.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
