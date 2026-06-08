"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Layers } from "lucide-react";
import { QuoteProduct } from "@/app/products/page";

interface ClipsTabProps {
  onOpenQuote: (product: QuoteProduct) => void;
}

const clipsSubProducts = [
  {
    id: "round-clips",
    name: "Round Cable Clips",
    description:
      "Designed for routing round electrical cords, coaxial cables, and telephone wires securely against masonry or wood.",
    image:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=600&auto=format&fit=crop&q=80",
    specs: "Sizes: 4mm - 12mm | Round Profile",
    features: [
      "Pre-inserted steel nail",
      "Impact-resistant PE",
      "UV-stabilized body",
    ],
  },
  {
    id: "flat-clips",
    name: "Flat Cable Clips",
    description:
      "Perfect flat fit for twin-and-earth cables, flat network cords, and custom electronic wiring paths.",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80",
    specs: "Sizes: 4mm - 10mm | Flat Profile",
    features: [
      "Snug flat-hug structure",
      "Crack-free PE formulation",
      "Corrosion-resistant nail",
    ],
  },
  {
    id: "hardened-nails",
    name: "Hardened Masonry Nails",
    description:
      "Fitted with structural carbon steel nails zinc-plated to resist rust and withstand heavy hammer impact.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",
    specs: "Material: C45 Carbon Steel",
    features: [
      "Extra-hardened heat treatment",
      "Zinc rust protection",
      "Pre-set nail depth alignment",
    ],
  },
];

export default function ClipsTab({ onOpenQuote }: ClipsTabProps) {
  return (
    <div className="space-y-10">
      {/* Visual Sub-product Grid */}
      <motion.div
        key="clips-sub"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {clipsSubProducts.map((prod) => (
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
                {prod.id === "hardened-nails" ? "C45 Carbon Steel" : "PE Molding"}
              </span>
            </div>

            {/* Middle Details Box */}
            <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-primary shrink-0" /> {prod.name}
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
                    {prod.specs.split("|")[0].trim().replace("Sizes: ", "")}
                  </span>
                </div>

                <button
                  onClick={() =>
                    onOpenQuote({
                      id: prod.id,
                      name: prod.name,
                      type: "PE Cable Clips",
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
        key="clips"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Specs details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glassmorphism rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
              PE Plastic Cable Clips
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed mt-4">
              ARCOS manufactures high-density polyethylene (PE) cable clips
              fitted with premium hardened, zinc-plated steel masonry nails.
              Designed specifically to hold flat or round electrical cords
              firmly in place against concrete, mortar, plaster, or wooden
              joists.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  Applications
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {[
                    "Residential Wiring",
                    "Commercial Installations",
                    "Electrical Equipment",
                    "Infrastructure Projects",
                    "Industrial Installations",
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
                    "Secure Cable Management",
                    "Easy Installation",
                    "Organized Wiring Systems",
                    "Reliable Holding Strength",
                    "Long-Term Performance",
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
                Standard Diameter Offerings
              </h4>
              <div className="overflow-x-auto scrollbar-none">
                <table className="w-full min-w-[500px] text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-500 whitespace-nowrap">
                      <th className="py-2 font-semibold pr-4">Size ID</th>
                      <th className="py-2 font-semibold pr-4">
                        Supported Cable Diameters
                      </th>
                      <th className="py-2 font-semibold pr-4">Form Factor</th>
                      <th className="py-2 font-semibold">Packaging Unit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/60 text-zinc-800 whitespace-nowrap">
                    <tr>
                      <td className="py-2.5 font-mono">CC-4MM</td>
                      <td className="py-2.5">3.5mm - 4.5mm</td>
                      <td className="py-2.5">Round / Flat</td>
                      <td className="py-2.5">100 Pcs/Box</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CC-6MM</td>
                      <td className="py-2.5">5.5mm - 6.5mm</td>
                      <td className="py-2.5">Round / Flat</td>
                      <td className="py-2.5">100 Pcs/Box</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CC-8MM</td>
                      <td className="py-2.5">7.5mm - 8.5mm</td>
                      <td className="py-2.5">Round / Flat</td>
                      <td className="py-2.5">100 Pcs/Box</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CC-10MM</td>
                      <td className="py-2.5">9.5mm - 10.5mm</td>
                      <td className="py-2.5">Round</td>
                      <td className="py-2.5">100 Pcs/Box</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono">CC-12MM</td>
                      <td className="py-2.5">11.5mm - 12.5mm</td>
                      <td className="py-2.5">Round</td>
                      <td className="py-2.5">100 Pcs/Box</td>
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
                Installation Assurance
              </h4>
              <h3 className="text-xl font-bold text-zinc-950 mt-2">
                Hammer-force Integrity
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed mt-2">
                Nails are set pre-aligned inside the PE collars to prevent
                sliding and ensure swift one-strike installation.
              </p>
            </div>

            {/* SVG Visual representation of Clip */}
            <div className="my-8 flex justify-center">
              <svg viewBox="0 0 160 120" className="w-[140px] h-[105px]">
                <defs>
                  <linearGradient id="nailGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#777" />
                    <stop offset="50%" stopColor="#ddd" />
                    <stop offset="100%" stopColor="#444" />
                  </linearGradient>
                </defs>
                {/* The nail */}
                <rect
                  x="75"
                  y="5"
                  width="10"
                  height="70"
                  fill="url(#nailGrad)"
                  rx="1"
                />
                <ellipse cx="80" cy="5" rx="7" ry="2" fill="#aaa" />

                {/* The PE collar clip */}
                <path
                  d="M 40 100 
                     A 40 40 0 0 1 120 100 
                     L 135 100
                     C 140 100, 140 85, 125 85
                     L 115 85
                     A 25 25 0 0 0 45 85
                     L 35 85
                     C 20 85, 20 100, 25 100
                     Z"
                  fill="rgba(9,9,11,0.03)"
                  stroke="rgba(9,9,11,0.15)"
                  strokeWidth="2"
                />
                {/* Cable representation */}
                <circle
                  cx="80"
                  cy="95"
                  r="23"
                  fill="rgba(210,35,42,0.1)"
                  stroke="#d2232a"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <text
                  x="80"
                  y="99"
                  fill="#d2232a"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  CABLE
                </text>
              </svg>
            </div>

            <button
              onClick={() =>
                onOpenQuote({
                  id: "clips",
                  name: "Cable Clips Selection",
                  capacitance: "N/A",
                  type: "PE Molding",
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
