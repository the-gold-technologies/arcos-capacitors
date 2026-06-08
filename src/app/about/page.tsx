"use client";

import React from "react";
import { motion } from "framer-motion";
import VisionMission from "@/components/VisionMission";
import CoreStrengths from "@/components/CoreStrengths";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* 1. Header Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
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
          className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mt-3"
        >
          About ARCOS Capacitors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 text-base sm:text-lg mt-6 leading-relaxed"
        >
          M.G. Industries operates under the ARCOS brand and specializes in
          manufacturing electrical capacitors for diverse industrial and OEM
          applications.
        </motion.p>
      </section>

      {/* Brand/Factory Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative h-[250px] sm:h-[420px] rounded-[30px] overflow-hidden mb-16 border border-zinc-200/50 shadow-2xl group"
      >
        <img
          src="/arcos_factory_floor.png"
          alt="ARCOS Noida Factory Floor"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white z-10 space-y-3 text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Our Noida Plant
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            20,000 Sq. Ft. Manufacturing Facility
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-lg leading-relaxed hidden sm:block">
            Our Noida industrial facility is equipped with automated high-speed
            winders, vacuum drying chambers, and rigorous clean-room test
            equipment to produce 25,000 components daily.
          </p>
        </div>
      </motion.div>

      {/* 2. History & Philosophy (Asymmetric Overlapping Layout) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">
            Our Manufacturing Philosophy
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
            Since its establishment in 2015, ARCOS has focused on delivering
            reliable and affordable capacitor solutions without compromising
            quality. Our manufacturing philosophy combines precision
            engineering, advanced manufacturing technologies, premium-quality
            raw materials, and rigorous testing procedures to ensure every
            product meets customer expectations.
          </p>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            We understand the challenges faced by OEM manufacturers and
            industrial buyers, including capacitor failures, inconsistent
            performance, voltage fluctuation issues, short product life, and
            unreliable suppliers. Our products are designed to solve these
            challenges through dependable performance, consistent capacitance
            values, long operational life, and superior manufacturing quality.
          </p>
        </div>

        {/* Right Info Box (Escaping box style) */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 filter blur-md" />
          <div className="relative glassmorphism rounded-3xl p-8 border border-white/10 shadow-xl space-y-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> Key
              Milestones
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">
                  2015
                </span>
                <div>
                  <h4 className="text-zinc-800 text-sm font-semibold">
                    Founding Year
                  </h4>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    Established M.G. Industries & launched ARCOS brand in Noida.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">
                  2018
                </span>
                <div>
                  <h4 className="text-zinc-800 text-sm font-semibold">
                    Capacity Expansion
                  </h4>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    Upgraded Noida facility to 20,000 sq. ft. with automatic
                    winders.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">
                  2021
                </span>
                <div>
                  <h4 className="text-zinc-800 text-sm font-semibold">
                    Compliance Accreditations
                  </h4>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    Acquired CE, RoHS, and ISI marks for full capacitor range.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-sm tracking-widest font-mono">
                  2024
                </span>
                <div>
                  <h4 className="text-zinc-800 text-sm font-semibold">
                    OEM Integration
                  </h4>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    Became key supplier to major Indian HVAC and appliance
                    brands.
                  </p>
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
