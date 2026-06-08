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
    description:
      "Specially formulated with carbon black additives for high UV stabilization, making them ideal for long-term outdoor solar panels and cable tray assemblies.",
    image:
      "/cable_ties_black.png",
    specs: "Outdoor Rated | Carbon Black",
    features: [
      "Resists sun decay",
      "Strong self-locking latch",
      "Temp: -40°C to +85°C",
    ],
  },
  {
    id: "natural-clear-ties",
    name: "Natural Clear Cable Ties",
    description:
      "Constructed from pure virgin Nylon 66, offering clean aesthetics for indoor electrical panel boards, home wiring, and wire harness bundling.",
    image:
      "/cable_ties_natural.png",
    specs: "Indoor Rated | Natural Nylon",
    features: [
      "High transparency grade",
      "Smooth edges for safety",
      "Self-locking head teeth",
    ],
  },
  {
    id: "heavy-duty-ties",
    name: "Heavy-Duty Cable Ties",
    description:
      "Thicker and wider ties designed for large structural bundles, industrial machinery piping, and heavy electrical infrastructure installation.",
    image:
      "/cable_ties_heavy.png",
    specs: "Tensile Strength: up to 75 kg",
    features: [
      "Extra-wide strap body",
      "Four-tooth locking pawl",
      "Maximum shock resistance",
    ],
  },
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tiesSubProducts.map((prod) => (
          <motion.div
            key={prod.id}
            whileHover={{ 
              y: -5,
              borderColor: "rgba(210,35,42,0.25)",
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)" 
            }}
            className="bg-white border border-zinc-200 rounded-[32px] p-4 flex flex-col justify-between hover:border-zinc-300 transition-all duration-300 relative group shadow-sm h-full"
          >
            {/* Top Image Banner */}
            <div className="relative w-full h-[200px] rounded-[24px] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm shrink-0">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase bg-zinc-950/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm tracking-wider">
                {prod.id === "uv-black-ties" ? "UV Resistant" : prod.id === "natural-clear-ties" ? "Indoor Grade" : "Heavy Duty"}
              </span>
            </div>

            {/* Middle Details Box */}
            <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-1.5">
                    <Boxes className="h-4 w-4 text-primary shrink-0" /> {prod.name}
                  </h3>
                  <span className="inline-flex items-center justify-center h-4.5 w-4.5 rounded-full bg-emerald-500 text-white shrink-0 shadow-sm shadow-emerald-500/10">
                    <Check className="h-3 w-3 stroke-[3.5]" />
                  </span>
                </div>
                
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mt-2">
                  {prod.description}
                </p>

                <div className="mt-3 pt-3 border-t border-zinc-100/60">
                  <ul className="space-y-1">
                    {prod.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-medium">
                        <div className="h-1 w-1 rounded-full bg-primary shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Specs & Action Box */}
              <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-500">
                  <span className="bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded font-mono text-zinc-700">
                    {prod.specs.split("|")[0].trim().replace("Tensile Strength: ", "")}
                  </span>
                </div>

                <button
                  onClick={() =>
                    onOpenQuote({
                      id: prod.id,
                      name: prod.name,
                      type: "Nylon Cable Ties",
                    })
                  }
                  className="px-4.5 py-2 bg-zinc-100 hover:bg-primary border border-zinc-200/60 hover:border-primary text-zinc-800 hover:text-white text-xs font-bold rounded-full transition-all duration-300 flex items-center gap-0.5 cursor-pointer shadow-sm"
                >
                  Quote +
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
            <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
              Nylon 66 Cable Ties
            </h3>
            <p className="text-zinc-650 text-sm leading-relaxed mt-4">
              Manufactured from high-strength Nylon 66 material, ARCOS zip ties
              exhibit extreme tensile capacity and are rated for self-locking
              structural bundle tasks. Available in standard, UV-resistant black
              (for outdoor solar/wiring setups) and standard natural clear.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  Applications
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {[
                    "Electrical Panels",
                    "Wire Harnesses",
                    "Industrial Equipment",
                    "OEM Manufacturing",
                    "Infrastructure Projects",
                  ].map((app, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-zinc-600 text-xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  Benefits
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {[
                    "Strong Fastening",
                    "Easy Installation",
                    "Durable Construction",
                    "Professional Cable Management",
                    "Reliable Performance",
                  ].map((ben, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-zinc-600 text-xs"
                    >
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
                      <th className="py-2 font-semibold pr-4">
                        Lengths Available
                      </th>
                      <th className="py-2 font-semibold pr-4">
                        Bundle Tensile Limit
                      </th>
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
              <h3 className="text-xl font-bold text-zinc-950 mt-2">
                Zero-slip Tooth Serration
              </h3>
              <p className="text-zinc-650 text-xs leading-relaxed mt-2">
                Deep groove serrations along the strap match tolerances in the
                lock-head to prevent release under vibrational shock.
              </p>
            </div>

            {/* SVG Visual representation of Tie */}
            <div className="my-8 flex justify-center">
              <svg viewBox="0 0 160 80" className="w-[140px] h-[70px]">
                {/* The strap loop */}
                <circle
                  cx="90"
                  cy="40"
                  r="25"
                  fill="none"
                  stroke="rgba(9,9,11,0.06)"
                  strokeWidth="4"
                />
                <circle
                  cx="90"
                  cy="40"
                  r="25"
                  fill="none"
                  stroke="#d2232a"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />

                {/* The lock body block */}
                <rect
                  x="58"
                  y="28"
                  width="12"
                  height="12"
                  fill="rgba(9,9,11,0.05)"
                  stroke="rgba(9,9,11,0.15)"
                  strokeWidth="1"
                  rx="1.5"
                />
                {/* The strap tail going through */}
                <path
                  d="M 64 45 L 40 45 C 30 45, 30 49, 40 49 L 64 49"
                  fill="rgba(9,9,11,0.05)"
                />
                {/* Bundle indicator */}
                <circle cx="90" cy="40" r="18" fill="rgba(9,9,11,0.02)" />
                <text
                  x="90"
                  y="43"
                  fill="rgba(9,9,11,0.3)"
                  fontSize="8"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  BUNDLE
                </text>
              </svg>
            </div>

            <button
              onClick={() =>
                onOpenQuote({
                  id: "ties",
                  name: "Cable Ties Selection",
                  capacitance: "N/A",
                  type: "Nylon Extrusion",
                })
              }
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
