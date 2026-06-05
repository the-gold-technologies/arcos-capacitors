"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  Target, 
  Award, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  Lightbulb, 
  Activity, 
  Heart,
  TrendingUp,
  UserCheck,
  Cpu
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  } as const;

  const coreStrengths = [
    { title: "Quality", desc: "Stringent incoming testing & zero-defect culture.", icon: Award },
    { title: "Reliability", desc: "Long-life operation without structural degradation.", icon: ShieldCheck },
    { title: "Performance", desc: "Low dissipation factors and stable capacitance values.", icon: Activity },
    { title: "Durability", desc: "Protected inside flame-retardant thermoplastic shells.", icon: Zap },
    { title: "Innovation", desc: "Continuous improvement in metallization technology.", icon: Lightbulb },
    { title: "Precision", desc: "State-of-the-art automated Swiss/German winding machinery.", icon: Cpu },
    { title: "Trust", desc: "Honest customer terms, clear specifications, and transparency.", icon: UserCheck },
    { title: "Consistency", desc: "Every batch matches precise industrial tolerances.", icon: TrendingUp },
    { title: "Satisfaction", desc: "Fast logistics, active tech support, and OEM flexibility.", icon: Heart },
  ];

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

      {/* 3. Vision & Mission (Diagonal Split Columns) */}
      <section className="relative py-16 mb-24 overflow-hidden rounded-[30px] border border-white/5">
        <div className="absolute inset-0 bg-[#0c0c10] z-0" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-1 px-8 md:px-12">
          {/* Vision column */}
          <div className="p-8 flex flex-col justify-between items-start gap-6 border-b md:border-b-0 md:border-r border-white/5 md:pr-12">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
                To become a trusted global manufacturer of electrical capacitors and allied electrical products through continuous engineering innovation, process excellence, and customer-centric manufacturing partnerships.
              </p>
            </div>
          </div>

          {/* Mission column */}
          <div className="p-8 flex flex-col justify-between items-start gap-6 md:pl-12">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
                To supply highly reliable, cost-effective, and technically advanced electrical components that help OEMs improve their overall appliance efficiencies, reduce power factor failures, and maintain stable grids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Strengths Grid */}
      <section className="mb-12">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Values</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
            9 Pillars of Our Success
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3">
            Every capacitor winding and clip molding we create is backed by these core values.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coreStrengths.map((str, idx) => {
            const Icon = str.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(210,35,42,0.3)" }}
                className="bg-[#0f0f13] border border-white/5 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 shadow-md group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center border border-primary/20 text-primary transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base tracking-tight">{str.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2">{str.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
