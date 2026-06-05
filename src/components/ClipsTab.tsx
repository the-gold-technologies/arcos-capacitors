"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClipsTabProps {
  onOpenQuote: (product: any) => void;
}

export default function ClipsTab({ onOpenQuote }: ClipsTabProps) {
  return (
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
          <h3 className="text-2xl font-bold text-white tracking-tight">PE Plastic Cable Clips</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mt-4">
            ARCOS manufactures high-density polyethylene (PE) cable clips fitted with premium
            hardened, zinc-plated steel masonry nails. Designed specifically to hold flat or
            round electrical cords firmly in place against concrete, mortar, plaster, or wooden joists.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-white text-sm font-semibold">Tough Plastic Body</h4>
              <p className="text-zinc-500 text-xs mt-1">
                High-impact PE resin resists crushing, UV decay, and cracking in winter environments.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">High-grade Nails</h4>
              <p className="text-zinc-500 text-xs mt-1">
                Zinc-plated structural carbon steel nails prevent bending under heavy hammer force.
              </p>
            </div>
          </div>

          {/* Table of sizes */}
          <div className="mt-8 border-t border-white/5 pt-6">
            <h4 className="text-white text-sm font-semibold mb-4">Standard Diameter Offerings</h4>
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full min-w-[500px] text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-500 whitespace-nowrap">
                    <th className="py-2 font-semibold pr-4">Size ID</th>
                    <th className="py-2 font-semibold pr-4">Supported Cable Diameters</th>
                    <th className="py-2 font-semibold pr-4">Form Factor</th>
                    <th className="py-2 font-semibold">Packaging Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 whitespace-nowrap">
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
            <h4 className="text-zinc-200 text-xs font-semibold uppercase tracking-wider">
              Installation Assurance
            </h4>
            <h3 className="text-xl font-bold text-white mt-2">Hammer-force Integrity</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mt-2">
              Nails are set pre-aligned inside the PE collars to prevent sliding and ensure swift
              one-strike installation.
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
              <rect x="75" y="5" width="10" height="70" fill="url(#nailGrad)" rx="1" />
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
                fill="rgba(255,255,255,0.06)" 
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2" 
              />
              {/* Cable representation */}
              <circle cx="80" cy="95" r="23" fill="rgba(210,35,42,0.1)" stroke="#d2232a" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="80" y="99" fill="#d2232a" fontSize="10" fontWeight="bold" textAnchor="middle">CABLE</text>
            </svg>
          </div>

          <button
            onClick={() => onOpenQuote({
              id: "clips",
              name: "Cable Clips Selection",
              capacitance: "N/A",
              type: "PE Molding"
            })}
            className="w-full py-3 bg-white text-dark-bg text-xs font-extrabold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            Request Bulk Price Sheet
          </button>
        </div>
      </div>
    </motion.div>
  );
}
