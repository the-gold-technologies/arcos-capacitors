"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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
    metrics: "Precision winding within ±1% tolerance",
  },
  {
    step: 2,
    title: "Element Pressing",
    machine: "Element Pressing Machines",
    description: "Flat-pressing of coiled cylindrical film elements to match specific rectangular casings or flat packing sizes.",
    metrics: "Controlled hydraulic compression",
  },
  {
    step: 3,
    title: "Metal Spraying & Welding",
    machine: "End Spray & Welding Machines",
    description: "Spraying zinc/tin alloy onto capacitor edges (ends) to create lead contact layers, followed by automatic welding of copper wire leads.",
    metrics: "Low electrical contact resistance (ESR)",
  },
  {
    step: 4,
    title: "Vacuum Drying",
    machine: "Vacuum Drying Chambers",
    description: "Baking elements under high vacuum pressure to extract moisture, preventing internal corrosion and voltage flashovers.",
    metrics: "Bake time: 24 - 48 Hours",
  },
  {
    step: 5,
    title: "Resin Potting",
    machine: "Resin Filling & PU Machines",
    description: "Casing encapsulation with high-durability epoxy resin or polyurethane (PU) fill to protect components against dampness and shock.",
    metrics: "Flame retardant, shock absorption",
  },
  {
    step: 6,
    title: "In-line Testing",
    machine: "Capacitance & Final Testers",
    description: "Automated high-voltage test scans. Checks capacitance value deviation, dissipation limits, and seal structural leakage.",
    metrics: "100% components inspected",
  },
  {
    step: 7,
    title: "Laser Printing",
    machine: "Laser & Pad Printing Systems",
    description: "Etching ratings, safety marks (CE, ISI), batch codes, and custom OEM branding onto the plastic capacitor shells.",
    metrics: "Permanent ink-free branding",
  },
];

export default function WorkflowVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="mb-24">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">
          Visual Assembly Line
        </span>
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
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    Quality Threshold
                  </span>
                  <div className="my-3 flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                    <span className="text-white font-bold text-sm tracking-tight leading-snug">
                      {ws.metrics}
                    </span>
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
  );
}
