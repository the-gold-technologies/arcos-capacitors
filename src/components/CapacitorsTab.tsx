"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Check, ChevronRight } from "lucide-react";

interface CapacitorProduct {
  id: string;
  name: string;
  capacitance: string;
  voltage: string;
  applications: string;
  features: string[];
  type: string;
}

const capacitorsList: CapacitorProduct[] = [
  {
    id: "fan",
    name: "Fan Capacitors",
    capacitance: "1 - 6 μF",
    voltage: "440V AC",
    applications: "Ceiling Fans, Exhaust Fans, Ventilation Systems",
    features: ["Low dissipation factor", "Built-in thermal safety", "Long service life"],
    type: "Cylindrical / Wire Lead",
  },
  {
    id: "motor",
    name: "Motor Run Capacitors",
    capacitance: "2 - 100 μF",
    voltage: "440V / 450V AC",
    applications: "Electric Motors, Compressors, Air Blowers",
    features: ["High insulation resistance", "Self-healing metallized film", "Moisture-resistant resin casing"],
    type: "Cylindrical Dual-terminal",
  },
  {
    id: "washing",
    name: "Washing Machine Capacitors",
    capacitance: "6 - 50 μF",
    voltage: "440V AC",
    applications: "Washing Machines, Dryers, Appliance Equipment",
    features: ["Dual capacitance options available", "High vibration resistance", "Robust lead wires"],
    type: "Cylindrical Plastic Can",
  },
  {
    id: "ac",
    name: "Air Conditioner Capacitors",
    capacitance: "2 - 80 μF",
    voltage: "440V / 450V AC",
    applications: "HVAC Compressors, Outdoor AC Units",
    features: ["Aluminum metal can casing", "Internal explosion-proof disconnector", "High temperature threshold"],
    type: "Aluminum Can Dual/Triple Terminals",
  },
  {
    id: "submersible",
    name: "Submersible Pump Capacitors",
    capacitance: "20 - 100 μF",
    voltage: "440V AC",
    applications: "Water Pumps, Submersible Borewell Pumps",
    features: ["High torque start parameters", "Heavy-duty contact terminals", "Consistent capacitance under load"],
    type: "Cylindrical Heavy Resin",
  },
  {
    id: "pfc",
    name: "Power Factor Correction (PFC) Capacitors",
    capacitance: "Available in multiple kVAR ratings",
    voltage: "415V / 440V / 525V AC",
    applications: "Automatic Power Factor Correction (APFC) Panels, Substation Panels",
    features: ["Saves energy & prevents line losses", "Over-pressure interrupter system", "Modular square or cylindrical body"],
    type: "Box/Square Body or Heavy Cylinder",
  },
  {
    id: "square",
    name: "Square Body Capacitors",
    capacitance: "Custom range based on request",
    voltage: "Custom industrial voltage lines",
    applications: "Compact panel spacing, specialized machinery mounting",
    features: ["Compact layout with self-healing tech", "Flexible bracket mounting", "Direct screw-in block terminals"],
    type: "Epoxy Box / Shell Case",
  },
];

interface CapacitorsTabProps {
  onOpenQuote: (product: CapacitorProduct) => void;
}

export default function CapacitorsTab({ onOpenQuote }: CapacitorsTabProps) {
  return (
    <div className="space-y-10">
      {/* Featured Product Banner/Showcase Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c0c10] border border-white/5 p-6 sm:p-8 rounded-3xl overflow-hidden relative">
        <div className="absolute top-[-30px] right-[-30px] h-32 w-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[10px] text-primary uppercase font-bold tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block">
            Industrial Product Range
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            High-Grade Electrolytic & Film Capacitors
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
            Our capacitors are engineered utilizing advanced self-healing metallized
            polypropylene film and internal safety disconnectors to withstand extreme
            voltage surges, temperature loads, and load variations.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["100% Quality Checked", "CE & RoHS compliant", "Designed for 10,000+ Operational Hours"].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <Check className="h-3.5 w-3.5 text-primary shrink-0" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <img
            src="/arcos_product_showcase.png"
            alt="ARCOS Capacitor Production Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* The 7 products Grid */}
      <motion.div
        key="capacitors"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {capacitorsList.map((prod) => (
          <motion.div
            key={prod.id}
            whileHover={{ y: -4, borderColor: "rgba(210,35,42,0.3)" }}
            className="bg-[#0f0f13] border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold text-primary uppercase bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                  {prod.type}
                </span>
                <Cpu className="h-5 w-5 text-zinc-500 group-hover:text-primary transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-white mt-4 tracking-tight">{prod.name}</h3>
              
              {/* Detailed Spec list */}
              <div className="mt-4 space-y-2 border-t border-white/5 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Capacitance:</span>
                  <span className="text-zinc-300 font-mono font-semibold">{prod.capacitance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Voltage:</span>
                  <span className="text-zinc-300 font-mono">{prod.voltage}</span>
                </div>
                <div className="mt-3">
                  <span className="text-zinc-500 block">Applications:</span>
                  <span className="text-zinc-400 leading-relaxed block mt-1 font-medium">{prod.applications}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5">
                {prod.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <button
                onClick={() => onOpenQuote(prod)}
                className="w-full justify-center inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary text-white text-xs font-bold rounded-xl transition-all duration-300"
              >
                Request Quote & Info
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
