"use client";

import React from "react";
import { motion } from "framer-motion";
import VisionMission from "@/components/VisionMission";
import CoreStrengths from "@/components/CoreStrengths";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* 1. Header Section */}
      <section className="text-center max-w-3xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary text-sm font-bold uppercase tracking-wider"
        >
          Our Story
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3"
        >
          About ARCOS Capacitors
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg mt-6 leading-relaxed"
        >
          Operating under the parent organization <strong>M.G. Industries</strong>, ARCOS has been at the forefront of manufacturing high-durability capacitors and wire management systems since 2015.
        </motion.p>
      </section>

      {/* 2. History & Philosophy (Asymmetric Overlapping Layout) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Manufacturing Philosophy
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Since our establishment in 2015, ARCOS has focused on delivering reliable and affordable capacitor solutions without compromising on raw material quality. Our manufacturing philosophy combines precision engineering, advanced automated technologies, premium metallized films, and rigorous multi-stage electrical testing.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We understand the exact challenges faced by OEM appliance brands and motor manufacturers, such as early capacitor failures, capacitance degradation due to temperature spikes, and unreliable supply chains. Our products are specifically engineered to eliminate these vulnerabilities, offering consistent power factors and extended service lives.
          </p>
        </div>

        {/* Right Info Box (Escaping box style) */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 filter blur-md" />
          <div className="relative glassmorphism rounded-3xl p-8 border border-white/10 shadow-xl space-y-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> Key Milestones
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">2015</span>
                <div>
                  <h4 className="text-zinc-200 text-sm font-semibold">Founding Year</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Established M.G. Industries & launched ARCOS brand in Noida.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">2018</span>
                <div>
                  <h4 className="text-zinc-200 text-sm font-semibold">Capacity Expansion</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Upgraded Noida facility to 20,000 sq. ft. with automatic winders.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">2021</span>
                <div>
                  <h4 className="text-zinc-200 text-sm font-semibold">Compliance Accreditations</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Acquired CE, RoHS, and ISI marks for full capacitor range.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">2024</span>
                <div>
                  <h4 className="text-zinc-200 text-sm font-semibold">OEM Integration</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Became key supplier to major Indian HVAC and appliance brands.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Split Cards) */}
      <VisionMission />

      {/* 4. Core Strengths (Values) */}
      <CoreStrengths />
    </div>
  );
}
