"use client";

import React from "react";
import { motion } from "framer-motion";

interface TiesTabProps {
  onOpenQuote: (product: any) => void;
}

export default function TiesTab({ onOpenQuote }: TiesTabProps) {
  return (
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
          <h3 className="text-2xl font-bold text-white tracking-tight">Nylon 66 Cable Ties</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mt-4">
            Manufactured from high-strength Nylon 66 material, ARCOS zip ties exhibit extreme
            tensile capacity and are rated for self-locking structural bundle tasks. Available in
            standard, UV-resistant black (for outdoor solar/wiring setups) and standard natural clear.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="text-white text-sm font-semibold">Self-locking Head</h4>
              <p className="text-zinc-500 text-xs mt-1">
                Four-tooth pawl latch guarantees a slip-proof lock under tensile pressure.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">UV Resistance</h4>
              <p className="text-zinc-500 text-xs mt-1">
                Carbon-black added polymers protect against solar decay in outdoor projects.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Thermal Tolerance</h4>
              <p className="text-zinc-500 text-xs mt-1">
                Operates safely in ranges from -40°C to +85°C without structural failure.
              </p>
            </div>
          </div>

          {/* Table of sizes */}
          <div className="mt-8 border-t border-white/5 pt-6">
            <h4 className="text-white text-sm font-semibold mb-4">
              Standard Tensile Capacity Profiles
            </h4>
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full min-w-[500px] text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-500 whitespace-nowrap">
                    <th className="py-2 font-semibold pr-4">Part Family</th>
                    <th className="py-2 font-semibold pr-4">Lengths Available</th>
                    <th className="py-2 font-semibold pr-4">Bundle Tensile Limit</th>
                    <th className="py-2 font-semibold">Material Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 whitespace-nowrap">
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
            <h4 className="text-zinc-200 text-xs font-semibold uppercase tracking-wider">
              Engineering Focus
            </h4>
            <h3 className="text-xl font-bold text-white mt-2">Zero-slip Tooth Serration</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mt-2">
              Deep groove serrations along the strap match tolerances in the lock-head to prevent
              release under vibrational shock.
            </p>
          </div>
          
          {/* SVG Visual representation of Tie */}
          <div className="my-8 flex justify-center">
            <svg viewBox="0 0 160 80" className="w-[140px] h-[70px]">
              {/* The strap loop */}
              <circle cx="90" cy="40" r="25" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
              <circle cx="90" cy="40" r="25" fill="none" stroke="#d2232a" strokeWidth="1.5" strokeDasharray="3 2" />
              
              {/* The lock body block */}
              <rect 
                x="58" y="28" width="12" height="12" 
                fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" 
                strokeWidth="1" rx="1.5" 
              />
              {/* The strap tail going through */}
              <path d="M 64 45 L 40 45 C 30 45, 30 49, 40 49 L 64 49" fill="rgba(255,255,255,0.1)" />
              {/* Bundle indicator */}
              <circle cx="90" cy="40" r="18" fill="rgba(255,255,255,0.03)" />
              <text x="90" y="43" fill="rgba(255,255,255,0.3)" fontSize="8" fontWeight="bold" textAnchor="middle">
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
            className="w-full py-3 bg-white text-dark-bg text-xs font-extrabold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            Request Bulk Price Sheet
          </button>
        </div>
      </div>
    </motion.div>
  );
}
