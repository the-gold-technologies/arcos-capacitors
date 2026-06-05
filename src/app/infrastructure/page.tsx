"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building, 
  Settings, 
  Cpu, 
  Gauge, 
  ShieldCheck, 
  Check, 
  Layers, 
  Activity, 
  Zap, 
  HelpCircle,
  Play,
  RotateCcw
} from "lucide-react";

interface WorkflowStep {
  step: number;
  title: string;
  machine: string;
  description: string;
  metrics: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Film Winding",
    machine: "Automatic Capacitor Winding Machines",
    description: "High-speed winding of metalized polypropylene film (MPP) under controlled mechanical tension. Regulates capacitance thickness.",
    metrics: "Precision winding within ±1% tolerance"
  },
  {
    step: 2,
    title: "Element Pressing",
    machine: "Element Pressing Machines",
    description: "Flat-pressing of coiled cylindrical film elements to match specific rectangular casings or flat packing sizes.",
    metrics: "Controlled hydraulic compression"
  },
  {
    step: 3,
    title: "Metal Spraying & Welding",
    machine: "End Spray & Welding Machines",
    description: "Spraying zinc/tin alloy onto capacitor edges (ends) to create lead contact layers, followed by automatic welding of copper wire leads.",
    metrics: "Low electrical contact resistance (ESR)"
  },
  {
    step: 4,
    title: "Vacuum Drying",
    machine: "Vacuum Drying Chambers",
    description: "Baking elements under high vacuum pressure to extract moisture, preventing internal corrosion and voltage flashovers.",
    metrics: "Bake time: 24 - 48 Hours"
  },
  {
    step: 5,
    title: "Resin Potting",
    machine: "Resin Filling & PU Machines",
    description: "Casing encapsulation with high-durability epoxy resin or polyurethane (PU) fill to protect components against dampness and shock.",
    metrics: "Flame retardant, shock absorption"
  },
  {
    step: 6,
    title: "In-line Testing",
    machine: "Capacitance & Final Testers",
    description: "Automated high-voltage test scans. Checks capacitance value deviation, dissipation limits, and seal structural leakages.",
    metrics: "100% components inspected"
  },
  {
    step: 7,
    title: "Laser Printing",
    machine: "Laser & Pad Printing Systems",
    description: "Etching ratings, safety marks (CE, ISI), batch codes, and custom OEM branding onto the plastic capacitor shells.",
    metrics: "Permanent ink-free branding"
  }
];

const infrastructureHighlights = [
  { label: "Factory Floor Space", val: "20,000", suffix: " Sq. Ft.", icon: Building, desc: "Modern Noida industrial park zone layout" },
  { label: "Daily Production Outflow", val: "25,000", suffix: " Units", icon: Settings, desc: "Equipped for large bulk OEM demands" },
  { label: "Continuous Power Backup", val: "100", suffix: "%", icon: Zap, desc: "High-capacity DG generator support" },
  { label: "Compressor Utility", val: "Kaeser", suffix: " German", icon: Gauge, desc: "High-stability pneumatic line supply" },
];

export default function Infrastructure() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* 1. Page Header */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-left space-y-4">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Manufacturing Infrastructure</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Noida Production Plant
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Operating from a state-of-the-art facility in Noida, Uttar Pradesh, ARCOS combines advanced automated winding systems with rigorous clean-room testing workflows to produce up to 25,000 premium components daily.
            </p>
          </div>
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl filter blur-xl transform rotate-2 pointer-events-none" />
            <div className="relative w-full max-w-[380px] h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="/arcos_factory_floor.png"
                alt="ARCOS Noida Factory Floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Facility Highlights Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {infrastructureHighlights.map((hl, idx) => {
          const Icon = hl.icon;
          return (
            <div 
              key={idx}
              className="bg-[#0f0f13] border border-white/5 rounded-2xl p-6 flex flex-col items-start gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block">{hl.label}</span>
                <div className="flex items-baseline gap-0.5 mt-1">
                  <span className="text-2xl font-extrabold text-white tracking-tight font-mono">{hl.val}</span>
                  <span className="text-primary-light font-bold text-sm">{hl.suffix}</span>
                </div>
                <span className="text-zinc-400 text-xs mt-2 block leading-relaxed">{hl.desc}</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Interactive Assembly Line Visualizer (Escaping Boxes) */}
      <section className="mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Visual Assembly Line</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
            Interactive Production Stages
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3">
            Click each process node below to follow a capacitor's journey through our Noida factory.
          </p>
        </div>

        {/* Visual Assembly Pipeline Nodes */}
        <div className="glassmorphism rounded-3xl p-6 sm:p-10 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 z-0" style={{ top: "45px" }} />
          
          {/* Step Bubbles */}
          <div className="relative z-10 flex flex-wrap justify-between gap-4 sm:gap-6 mb-12">
            {workflowSteps.map((ws) => {
              const isActive = activeStep === ws.step;
              return (
                <button
                  key={ws.step}
                  onClick={() => setActiveStep(ws.step)}
                  className="flex flex-col items-center gap-2 group focus:outline-none"
                >
                  <div 
                    className={`h-12 w-12 rounded-full flex items-center justify-center font-mono font-bold text-sm border transition-all duration-300 ${
                      isActive 
                        ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(210,35,42,0.5)]" 
                        : "bg-[#121217] border-white/10 text-zinc-400 group-hover:text-white group-hover:border-white/20"
                    }`}
                  >
                    {ws.step}
                  </div>
                  <span className={`text-[11px] font-semibold tracking-wide uppercase transition-colors ${isActive ? "text-primary-light" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                    {ws.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel details */}
          <AnimatePresence mode="wait">
            {workflowSteps.map((ws) => {
              if (ws.step !== activeStep) return null;
              return (
                <motion.div
                  key={ws.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/[0.01] border border-white/5 rounded-2xl p-6 sm:p-8"
                >
                  <div className="md:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Stage {ws.step}: Assembly Operation
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{ws.title}</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {ws.description}
                    </p>
                    
                    <div className="flex items-center gap-2.5 text-xs text-zinc-400 border-t border-white/5 pt-4">
                      <span className="text-zinc-600">Equipment in Action:</span>
                      <strong className="text-zinc-200 font-semibold">{ws.machine}</strong>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#121218] border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-full min-h-[160px]">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Quality Threshold</span>
                    <div className="my-3 flex items-center gap-3">
                      <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                      <span className="text-white font-bold text-sm tracking-tight leading-snug">{ws.metrics}</span>
                    </div>
                    <span className="text-[10px] text-green-500 font-semibold flex items-center gap-1.5 mt-auto">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" /> Passed Inspection
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Complete Machinery List Grid */}
      <section className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Machinery & Inventory</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
            Core Production Line Equipment
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3">
            Our Noida facility features 14 specialized categories of electrical winding, spraying, welding, testing, and packaging systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Automatic Capacitor Winding Machines",
            "End Spray Machines",
            "Element Pressing Machines",
            "Lead Wire Welding Machines",
            "Automatic Assembly Lines",
            "Vacuum Drying Chambers",
            "Resin Filling & Potting Machines",
            "Capacitance Testing Systems",
            "Automatic Soldering Machines",
            "PU Filling Machines",
            "Final Testing Machines",
            "Laser Printing Systems",
            "Pad Printing Systems",
            "Inkjet Printing Systems"
          ].map((mach, idx) => (
            <div 
              key={idx}
              className="bg-[#0f0f13] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-white/10 transition-colors"
            >
              <span className="text-zinc-600 font-mono text-sm shrink-0">{(idx + 1).toString().padStart(2, "0")}</span>
              <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-zinc-200 text-sm font-semibold">{mach}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Quality Control Focus Section */}
      <section className="relative rounded-[30px] overflow-hidden bg-white/[0.01] border border-white/5 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Rigorous Inspection & Verification
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Quality is at the core of our brand. Every single capacitor passes through multiple rigorous automated inspection stages before packaging. We test for capacitance values (to ensure strict tolerance limits), dissipation factors, high-voltage insulation leakages, and mechanical seal integrity under severe thermal loads.
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#121217] border border-white/5 p-6 rounded-2xl space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quality Benchmarks</h4>
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>IS 1709 / IS 2993 Standards Compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>Zero-tolerance leakage current control</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>Thermal cycling stability test profiles</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>CE, RoHS, & ISI certified test lab</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
