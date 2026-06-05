"use client";

import React from "react";
import { 
  Building, 
  Settings, 
  Gauge, 
  Check, 
  Zap 
} from "lucide-react";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";

const infrastructureHighlights = [
  { label: "Factory Floor Space", val: "20,000", suffix: " Sq. Ft.", icon: Building, desc: "Modern Noida industrial park zone layout" },
  { label: "Daily Production Outflow", val: "25,000", suffix: " Units", icon: Settings, desc: "Equipped for large bulk OEM demands" },
  { label: "Continuous Power Backup", val: "100", suffix: "%", icon: Zap, desc: "High-capacity DG generator support" },
  { label: "Compressor Utility", val: "Kaeser", suffix: " German", icon: Gauge, desc: "High-stability pneumatic line supply" },
];

export default function Infrastructure() {
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
      <WorkflowVisualizer />

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
