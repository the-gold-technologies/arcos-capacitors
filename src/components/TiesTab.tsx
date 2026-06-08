"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Boxes } from "lucide-react";
import { QuoteProduct } from "@/app/products/page";

interface TiesTabProps {
  onOpenQuote: (product: QuoteProduct) => void;
}

const tiesSubProducts = [
  {
    id: "uv-black-ties",
    name: "UV Black Cable Ties",
    description: "Specially formulated with carbon black additives for high UV stabilization, making them ideal for long-term outdoor solar panels and cable tray assemblies.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    specs: "Outdoor Rated | Carbon Black",
    features: ["Resists sun decay", "Strong self-locking latch", "Temp: -40°C to +85°C"]
  },
  {
    id: "natural-clear-ties",
    name: "Natural Clear Cable Ties",
    description: "Constructed from pure virgin Nylon 66, offering clean aesthetics for indoor electrical panel boards, home wiring, and wire harness bundling.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80",
    specs: "Indoor Rated | Natural Nylon",
    features: ["High transparency grade", "Smooth edges for safety", "Self-locking head teeth"]
  },
  {
    id: "heavy-duty-ties",
    name: "Heavy-Duty Cable Ties",
    description: "Thicker and wider ties designed for large structural bundles, industrial machinery piping, and heavy electrical infrastructure installation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    specs: "Tensile Strength: up to 75 kg",
    features: ["Extra-wide strap body", "Four-tooth locking pawl", "Maximum shock resistance"]
  }
];

export default function TiesTab({ onOpenQuote }: TiesTabProps) {
  return (
    <div className="space-y-10">
      {/* Visual Sub-product Grid */}
      <motion.div
        key="ties-sub"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-6"
      >
        {tiesSubProducts.map((prod) => (
          <motion.div
            key={prod.id}
            whileHover={{ borderColor: "rgba(210,35,42,0.3)" }}
            className="bg-white border border-zinc-200 rounded-[24px] p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all duration-300 relative group"
          >
            {/* Left Column: Image wrapper */}
            <div className="w-full md:w-[220px] h-[150px] rounded-[18px] overflow-hidden shrink-0 bg-zinc-50 relative border border-zinc-150 shadow-inner">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase bg-zinc-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                {prod.specs}
              </span>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-1.5">
                    <Boxes className="h-4.5 w-4.5 text-primary" /> {prod.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3">
                  {/* Description & Features */}
                  <div className="md:col-span-8 space-y-2">
                    <p className="text-zinc-650 text-xs leading-relaxed">
                      {prod.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spec box */}
                  <div className="md:col-span-4 bg-zinc-50/85 border border-zinc-155 rounded-xl p-3 flex flex-col justify-center text-center">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider text-[9px]">Tensile & Environment</span>
                    <span className="text-zinc-800 font-bold font-mono mt-1 text-xs block">{prod.specs}</span>
                  </div>
                </div>
              </div>

              {/* Bottom buttons row */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-end">
                <button
                  onClick={() => onOpenQuote({
                    id: prod.id,
                    name: prod.name,
                    type: "Nylon Cable Ties"
                  })}
                  className="px-6 py-2 bg-zinc-50 hover:bg-primary border border-zinc-200 hover:border-primary text-zinc-850 hover:text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-sm"
                >
                  Inquire Price Sheet
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Overview and Specs Table */}
      <motion.div
        key="ties"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Specs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glassmorphism rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">Nylon 66 Cable Ties</h3>
            <p className="text-zinc-650 text-sm leading-relaxed mt-4">
              Manufactured from high-strength Nylon 66 material, ARCOS zip ties exhibit extreme
              tensile capacity and are rated for self-locking structural bundle tasks. Available in
              standard, UV-resistant black (for outdoor solar/wiring setups) and standard natural clear.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider">Applications</h4>
                <ul className="mt-2.5 space-y-2">
                  {["Electrical Panels", "Wire Harnesses", "Industrial Equipment", "OEM Manufacturing", "Infrastructure Projects"].map((app, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-zinc-600 text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider">Benefits</h4>
                <ul className="mt-2.5 space-y-2">
                  {["Strong Fastening", "Easy Installation", "Durable Construction", "Professional Cable Management", "Reliable Performance"].map((ben, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-zinc-600 text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Table of sizes */}
            <div className="mt-8 border-t border-zinc-200/60 pt-6">
              <h4 className="text-zinc-900 text-sm font-semibold mb-4">
                Standard Tensile Capacity Profiles
              </h4>
              <div className="overflow-x-auto scrollbar-none">
                <table className="w-full min-w-[500px] text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-500 whitespace-nowrap">
                      <th className="py-2 font-semibold pr-4">Part Family</th>
                      <th className="py-2 font-semibold pr-4">Lengths Available</th>
                      <th className="py-2 font-semibold pr-4">Bundle Tensile Limit</th>
                      <th className="py-2 font-semibold">Material Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/60 text-zinc-800 whitespace-nowrap">
                    <tr>
                      <td className="py-2.5 font-mono">CT-100</td>
                      <td className="py-2.5">100 mm (4 in)</td>
                      <td className="py-2.5">8 kg (18 lbs)</td>
                      <td className="py-2.5">Nylon 66 (UL 94 V-2)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CT-150</td>
                      <td className="py-2.5">150 mm (6 in)</td>
                      <td className="py-2.5">18 kg (40 lbs)</td>
                      <td className="py-2.5">Nylon 66 (UL 94 V-2)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CT-200</td>
                      <td className="py-2.5">200 mm (8 in)</td>
                      <td className="py-2.5">22 kg (50 lbs)</td>
                      <td className="py-2.5">Nylon 66 (UL 94 V-2)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CT-300</td>
                      <td className="py-2.5">300 mm (12 in)</td>
                      <td className="py-2.5">55 kg (120 lbs)</td>
                      <td className="py-2.5">Nylon 66 (UL 94 V-2)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CT-450</td>
                      <td className="py-2.5">450 mm (18 in)</td>
                      <td className="py-2.5">75 kg (175 lbs)</td>
                      <td className="py-2.5">Nylon 66 (UL 94 V-2)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:col-span-5 relative">
          <div className="glassmorphism rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            <div className="absolute top-[-30px] right-[-30px] h-32 w-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div>
              <h4 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                Engineering Focus
              </h4>
              <h3 className="text-xl font-bold text-zinc-950 mt-2">Zero-slip Tooth Serration</h3>
              <p className="text-zinc-650 text-xs leading-relaxed mt-2">
                Deep groove serrations along the strap match tolerances in the lock-head to prevent
                release under vibrational shock.
              </p>
            </div>
            
            {/* SVG Visual representation of Tie */}
            <div className="my-8 flex justify-center">
              <svg viewBox="0 0 160 80" className="w-[140px] h-[70px]">
                {/* The strap loop */}
                <circle cx="90" cy="40" r="25" fill="none" stroke="rgba(9,9,11,0.06)" strokeWidth="4" />
                <circle cx="90" cy="40" r="25" fill="none" stroke="#d2232a" strokeWidth="1.5" strokeDasharray="3 2" />
                
                {/* The lock body block */}
                <rect 
                  x="58" y="28" width="12" height="12" 
                  fill="rgba(9,9,11,0.05)" stroke="rgba(9,9,11,0.15)" 
                  strokeWidth="1" rx="1.5" 
                />
                {/* The strap tail going through */}
                <path d="M 64 45 L 40 45 C 30 45, 30 49, 40 49 L 64 49" fill="rgba(9,9,11,0.05)" />
                {/* Bundle indicator */}
                <circle cx="90" cy="40" r="18" fill="rgba(9,9,11,0.02)" />
                <text x="90" y="43" fill="rgba(9,9,11,0.3)" fontSize="8" fontWeight="bold" textAnchor="middle">
                  BUNDLE
                </text>
              </svg>
            </div>

            <button
              onClick={() => onOpenQuote({
                id: "ties",
                name: "Cable Ties Selection",
                capacitance: "N/A",
                type: "Nylon Extrusion"
              })}
              className="w-full py-3 bg-zinc-950 text-white text-xs font-extrabold rounded-xl hover:bg-zinc-800 transition-colors shadow-md"
            >
              Request Bulk Price Sheet
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
