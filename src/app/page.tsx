"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Settings,
  TrendingUp,
  Cpu,
  CheckCircle,
  ArrowRight,
  Award,
  FileText,
  Boxes,
  Activity,
  Layers,
  Wrench,
} from "lucide-react";

export default function Home() {
  // Fade in animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  } as const;

  return (
    <div className="relative w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-10 pb-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Zap className="h-3 w-3 animate-pulse" /> Established in 2015
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] font-sans"
            >
              India's Trusted Manufacturer of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark text-glow">
                Capacitors, Cable Clips & Ties
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              Precision-engineered electrical components designed for OEMs,
              industrial buyers, and global distribution. Engineered for
              superior performance, durability, and long service life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(210,35,42,0.3)] hover:shadow-[0_4px_30px_rgba(210,35,42,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FileText className="h-5 w-5 text-zinc-400" />
                View Catalog
              </Link>
            </motion.div>
          </div>

          {/* Right SVG Graphic Column - Non-boring 3D effect */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
              className="relative w-full max-w-[400px] h-[400px]"
            >
              {/* Back glowing aura */}
              <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-[80px] animate-pulse-slow z-0" />

              {/* Dynamic Tech Grid SVG background */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full z-10 opacity-70"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  stroke="rgba(210,35,42,0.15)"
                  strokeWidth="1.5"
                />

                {/* Tech HUD crosshairs */}
                <path
                  d="M 200 10 L 200 45 M 200 355 L 200 390 M 10 200 L 45 200 M 355 200 L 390 200"
                  stroke="rgba(210,35,42,0.4)"
                  strokeWidth="2"
                />

                {/* Rotating HUD circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="140"
                  stroke="rgba(210,35,42,0.3)"
                  strokeWidth="2"
                  strokeDasharray="40 180"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "200px 200px" }}
                />
              </svg>

              {/* Core Cylinder Capacitor (CSS & SVG 3D representation) */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <svg
                  viewBox="0 0 200 300"
                  className="w-[180px] h-[270px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                >
                  <defs>
                    {/* 3D cylindrical lighting gradient */}
                    <linearGradient
                      id="cylinderGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8d1317" />
                      <stop offset="25%" stopColor="#d2232a" />
                      <stop offset="55%" stopColor="#ff4d55" />
                      <stop offset="80%" stopColor="#d2232a" />
                      <stop offset="100%" stopColor="#5c0b0e" />
                    </linearGradient>
                    {/* Metal cap gradient */}
                    <linearGradient
                      id="metalGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#555" />
                      <stop offset="30%" stopColor="#d5d5d5" />
                      <stop offset="60%" stopColor="#fefefe" />
                      <stop offset="85%" stopColor="#777" />
                      <stop offset="100%" stopColor="#333" />
                    </linearGradient>
                    <filter
                      id="shadow"
                      x="-10%"
                      y="-10%"
                      width="120%"
                      height="120%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="8"
                        stdDeviation="6"
                        floodOpacity="0.4"
                      />
                    </filter>
                  </defs>

                  {/* Metallic terminal pins at top */}
                  <line
                    x1="80"
                    y1="40"
                    x2="80"
                    y2="70"
                    stroke="url(#metalGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <line
                    x1="120"
                    y1="40"
                    x2="120"
                    y2="70"
                    stroke="url(#metalGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <circle cx="80" cy="40" r="7" fill="#ccc" />
                  <circle cx="120" cy="40" r="7" fill="#ccc" />

                  {/* Metallic Top Cap (Ellipse) */}
                  <ellipse
                    cx="100"
                    cy="70"
                    rx="60"
                    ry="15"
                    fill="url(#metalGrad)"
                  />

                  {/* Main Cylinder Body */}
                  <path
                    d="M 40 70 
                       L 40 230 
                       A 60 15 0 0 0 160 230 
                       L 160 70 
                       A 60 15 0 0 1 40 70 Z"
                    fill="url(#cylinderGrad)"
                  />

                  {/* ARCOS Brand Stamp on Capacitor */}
                  <ellipse
                    cx="100"
                    cy="120"
                    rx="35"
                    ry="8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <text
                    x="100"
                    y="125"
                    fill="#ffffff"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    letterSpacing="2"
                  >
                    ARCOS
                  </text>
                  <text
                    x="100"
                    y="145"
                    fill="rgba(255,255,255,0.7)"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    25.0 μF ±5%
                  </text>
                  <text
                    x="100"
                    y="160"
                    fill="rgba(255,255,255,0.6)"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    450V AC 50/60Hz
                  </text>

                  {/* Bottom Cap Rim */}
                  <ellipse
                    cx="100"
                    cy="230"
                    rx="60"
                    ry="15"
                    fill="url(#cylinderGrad)"
                    opacity="0.9"
                  />
                  <ellipse
                    cx="100"
                    cy="230"
                    rx="60"
                    ry="15"
                    fill="none"
                    stroke="#5c0b0e"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Floating Statistics Panel */}
      <section className="relative px-6 -mt-10 mb-20 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl glassmorphism glow-overlay border border-dark-border"
          >
            {[
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
            ].map((stat, idx) => (
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

      {/* 3. About Brief Section (Non-boring skew overlap) */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d11]/80 -skew-y-2 origin-top-left z-0 h-full w-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Factory Image & Overlapping details collage */}
          <div className="lg:col-span-5 relative flex justify-center h-[350px] lg:h-[450px] w-full">
            {/* Factory Image with slant border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform -rotate-2">
              <img
                src="/arcos_factory_floor.png"
                alt="ARCOS Factory Noida"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg/90 via-dark-bg/25 to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Tech card */}
            <div className="absolute bottom-6 right-6 left-12 glassmorphism rounded-2xl p-5 border border-white/10 shadow-2xl transform translate-x-2 translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shrink-0">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Premium Materials Only
                  </h4>
                  <p className="text-zinc-400 text-xs leading-normal mt-1">
                    We formulate capacitors using structural self-healing
                    metallized films and premium insulating oils to protect
                    against voltage fluctuations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Info */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              About ARCOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
              Reliable Electrical Products Built on Precision Engineering
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-6">
              ARCOS, a leading brand of M.G. Industries, manufactures a
              comprehensive range of electrical capacitors, cable clips, and
              cable ties. We solve operational challenges like voltage
              instability, high leakage currents, and short product lives by
              utilizing high-end automated manufacturing processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              {[
                "ISO 9001 Certified Processes",
                "Advanced Testing Infrastructure",
                "OEM & Private Label Support",
                "CE, RoHS & ISI Standards",
                "Premium Grade Raw Materials",
                "Competitive Direct-to-OEM Pricing",
              ].map((strength, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-zinc-300 text-sm">{strength}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-primary-light hover:text-white font-semibold text-sm transition-colors duration-200 group"
            >
              Read Our Full Story
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Product Offerings Overview (Asymmetric Grids) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
            Diversified Electrical Component Portfolio
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            Custom-engineered electrical accessories designed to handle high
            loads, harsh temperatures, and structural strain.
          </p>
        </div>

        {/* Asymmetric Product Grid - escaping boxes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: Capacitors (Occupies 7 cols on medium/large) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-7 rounded-3xl glassmorphism p-8 flex flex-col justify-between min-h-[380px] border border-white/5 relative overflow-hidden group shadow-lg"
          >
            {/* Ambient Red glow background on hover */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />

            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6">
                Electrical Capacitors
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3 max-w-md">
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
                    className="text-[11px] font-semibold bg-white/5 border border-white/5 px-3 py-1 rounded-full text-zinc-300"
                  >
                    {type}
                  </span>
                ),
              )}
            </div>

            <div className="relative z-10 flex justify-between items-center mt-8 border-t border-white/5 pt-4">
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
            className="md:col-span-5 rounded-3xl glassmorphism p-8 flex flex-col justify-between min-h-[380px] border border-white/5 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />

            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6">
                Cable Clips
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                High-impact PE cable clips fitted with tough, zinc-plated steel
                nails. Resists splitting under hammer impact and maintains hold
                in wood, masonry, and plasterboard.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-center mt-8 border-t border-white/5 pt-4">
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
            className="md:col-span-5 rounded-3xl glassmorphism p-8 flex flex-col justify-between min-h-[380px] border border-white/5 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />

            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Boxes className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6">
                Nylon Cable Ties
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                UV-resistant, flame-retardant Nylon 66 wire management straps.
                Engineered with self-locking teeth for secure bundle operations
                in home appliances and industrial panels.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-center mt-8 border-t border-white/5 pt-4">
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
            className="md:col-span-7 rounded-3xl glassmorphism p-8 flex flex-col justify-between min-h-[380px] border border-white/5 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-3xl transition-colors duration-500" />

            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6">
                Private Label & OEM Support
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3 max-w-md">
                We design and manufacture capacitors customized with your
                company branding, technical parameters, and specific terminal
                connectors. Fully aligned with international electrical
                specifications.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-center mt-8 border-t border-white/5 pt-4">
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
      </section>

      {/* 5. Industries Served Section */}
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
            {[
              { name: "Electrical Appliance", icon: Cpu },
              { name: "HVAC & AC Systems", icon: Settings },
              { name: "Water Pumps & Motors", icon: Wrench },
              { name: "Electronics & PCB Assemblies", icon: Cpu },
              { name: "Renewable Solar Energy", icon: Zap },
              { name: "Power Distribution", icon: TrendingUp },
              { name: "Industrial Automation", icon: Activity },
              { name: "Infrastructure & Grid", icon: Layers },
            ].map((ind, idx) => {
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

      {/* 6. Call To Action (Non-box layout with slant borders) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark p-12 sm:p-16 border border-primary/30 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          {/* Animated decorative shapes in background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your Component Supply?
            </h2>
            <p className="mt-4 text-zinc-100 text-sm sm:text-base opacity-90 max-w-xl">
              Get customized quotation lists, price rates, and order estimates
              for your custom specifications. Contact our sales office in Noida
              today.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-extrabold rounded-full hover:bg-zinc-100 hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 shadow-xl"
            >
              Get Custom Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
