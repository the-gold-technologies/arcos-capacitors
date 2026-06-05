"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Layers, Boxes, Wrench, ArrowRight } from "lucide-react";

export default function ProductOfferings() {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] -left-10 h-[300px] w-[300px] rounded-full bg-primary/8 filter blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] -right-10 h-[280px] w-[280px] rounded-full bg-primary/5 filter blur-[90px] pointer-events-none z-0" />
      
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-3">
            Diversified Electrical Component Portfolio
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-4">
            Custom-engineered electrical accessories designed to handle high
            loads, harsh temperatures, and structural strain.
          </p>
        </div>

        {/* Asymmetric Product Grid - escaping boxes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Capacitors (Occupies 7 cols on medium/large) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 rounded-3xl glassmorphism p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border border-zinc-200/40 relative overflow-hidden group shadow-lg"
          >
            {/* Ambient Red glow background on hover */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mt-6">
                Electrical Capacitors
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mt-3 max-w-md">
                Superior electrical capacitors featuring metallized
                polypropylene film and built-in safety disconnectors. Designed
                for appliances, air conditioners, fans, water pumps, and APFC
                panels.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-6">
              {["Fan", "Motor Run", "Submersible", "HVAC", "APFC Panels"].map(
                (type) => (
                  <span
                    key={type}
                    className="text-[11px] font-semibold bg-zinc-100 border border-zinc-200/50 px-3 py-1 rounded-full text-zinc-600"
                  >
                    {type}
                  </span>
                ),
              )}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-8 border-t border-zinc-200/60 pt-4">
              <span className="text-xs text-zinc-500">
                Capacitance Range: 1 - 100 μF
              </span>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-primary-light hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                Explore Capacitors <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Cable Clips (Occupies 5 cols) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 rounded-3xl glassmorphism p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border border-zinc-200/40 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mt-6">
                Cable Clips
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mt-3">
                High-impact PE cable clips fitted with tough, zinc-plated steel
                nails. Resists splitting under hammer impact and maintains hold
                in wood, masonry, and plasterboard.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-8 border-t border-zinc-200/60 pt-4">
              <span className="text-xs text-zinc-500">
                All standard shapes & diameters
              </span>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-primary-light hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                View Specs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Cable Ties (Occupies 5 cols) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 rounded-3xl glassmorphism p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border border-zinc-200/40 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Boxes className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mt-6">
                Nylon Cable Ties
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mt-3">
                UV-resistant, flame-retardant Nylon 66 wire management straps.
                Engineered with self-locking teeth for secure bundle operations
                in home appliances and industrial panels.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-8 border-t border-zinc-200/60 pt-4">
              <span className="text-xs text-zinc-500">
                High Tensile Strengths
              </span>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-primary-light hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                View Specs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: OEM Manufacturing (Occupies 7 cols) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 rounded-3xl glassmorphism p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border border-zinc-200/40 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mt-6">
                Private Label & OEM Support
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mt-3 max-w-md">
                We design and manufacture capacitors customized with your
                company branding, technical parameters, and specific terminal
                connectors. Fully aligned with international electrical
                specifications.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-8 border-t border-zinc-200/60 pt-4">
              <span className="text-xs text-zinc-500">
                Fast production turnaround
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-primary-light hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                Request OEM Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
