import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CapacitorProduct {
  id: string;
  name: string;
  capacitance: string;
  voltage: string;
  applications: string;
  features: string[];
  type: string;
  image: string;
}

const capacitorsList: CapacitorProduct[] = [
  {
    id: "fan",
    name: "Fan Capacitors",
    capacitance: "1 - 6 μF",
    voltage: "440V AC",
    applications: "Ceiling Fans, Exhaust Fans, Ventilation Systems",
    features: [
      "Polypropylene Film Dielectric",
      "Low Power Loss",
      "Compact Design",
      "Long Operational Life",
    ],
    type: "Cylindrical / Wire Lead",
    image: "/fan_manufacturing.png",
  },
  {
    id: "motor",
    name: "Motor Run Capacitors",
    capacitance: "2 - 100 μF",
    voltage: "440V / 450V AC",
    applications: "Electric Motors, Compressors, Air Blowers",
    features: [
      "High insulation resistance",
      "Self-healing metallized film",
      "Moisture-resistant resin casing",
    ],
    type: "Cylindrical Dual-terminal",
    image: "/motor_manufacturing.png",
  },
  {
    id: "washing",
    name: "Washing Machine Capacitors",
    capacitance: "6 - 50 μF",
    voltage: "440V AC",
    applications: "Washing Machines, Dryers, Appliance Equipment",
    features: [
      "Dual capacitance options available",
      "High vibration resistance",
      "Robust lead wires",
    ],
    type: "Cylindrical Plastic Can",
    image: "/appliance_manufacturing.png",
  },
  {
    id: "ac",
    name: "Air Conditioner Capacitors",
    capacitance: "2 - 80 μF",
    voltage: "440V / 450V AC",
    applications: "HVAC Compressors, Outdoor AC Units",
    features: [
      "Aluminum metal can casing",
      "Internal explosion-proof disconnector",
      "High temperature threshold",
    ],
    type: "Aluminum Can Dual/Triple Terminals",
    image: "/panel_building.png",
  },
  {
    id: "submersible",
    name: "Submersible Pump Capacitors",
    capacitance: "20 - 100 μF",
    voltage: "440V AC",
    applications: "Water Pumps, Submersible Borewell Pumps",
    features: [
      "High torque start parameters",
      "Heavy-duty contact terminals",
      "Consistent capacitance under load",
    ],
    type: "Cylindrical Heavy Resin",
    image: "/pump_manufacturing.png",
  },
  {
    id: "pfc",
    name: "Power Factor Correction (PFC) Capacitors",
    capacitance: "Available in multiple kVAR ratings",
    voltage: "415V / 440V / 525V AC",
    applications:
      "Automatic Power Factor Correction (APFC) Panels, Substation Panels",
    features: [
      "Multiple kVAR Ratings",
      "415V, 440V & 525V Options",
      "Low Dielectric Losses",
      "Harmonic Resistance",
      "Self-Healing Technology",
      "Overpressure Safety Mechanism",
    ],
    type: "Box/Square Body or Heavy Cylinder",
    image: "/panel_building.png",
  },
  {
    id: "square",
    name: "Square Body Capacitors",
    capacitance: "Custom range based on request",
    voltage: "Custom industrial voltage lines",
    applications: "Compact panel spacing, specialized machinery mounting",
    features: [
      "Compact layout with self-healing tech",
      "Flexible bracket mounting",
      "Direct screw-in block terminals",
    ],
    type: "Epoxy Box / Shell Case",
    image: "/industrial_automation.png",
  },
  {
    id: "lighting",
    name: "Lighting Capacitors",
    capacitance: "Custom range",
    voltage: "250V / 440V AC",
    applications: "Lighting systems and power factor correction applications",
    features: [
      "Low power loss",
      "Self-healing technology",
      "Long operational life",
    ],
    type: "Cylindrical / Box type",
    image: "/electrical_manufacturing.png",
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
            Our capacitors are engineered utilizing advanced self-healing
            metallized polypropylene film and internal safety disconnectors to
            withstand extreme voltage surges, temperature loads, and load
            variations.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "100% Quality Checked",
              "CE & RoHS compliant",
              "Designed for 10,000+ Operational Hours",
            ].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/5"
              >
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

      {/* The 8 products Grid */}
      <motion.div
        key="capacitors"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {capacitorsList.map((prod) => (
          <motion.div
            key={prod.id}
            whileHover={{ 
              y: -5,
              borderColor: "rgba(210,35,42,0.25)",
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)" 
            }}
            className="bg-white border border-zinc-200 rounded-[32px] p-4 flex flex-col justify-between hover:border-zinc-300 transition-all duration-300 relative group shadow-sm h-full"
          >
            {/* Top Image Banner - Clickable details */}
            <Link 
              href={`/products/capacitors/${prod.id}`} 
              className="block relative w-full h-[200px] rounded-[24px] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm shrink-0"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase bg-zinc-950/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm tracking-wider">
                {prod.type}
              </span>
            </Link>

            {/* Middle Details Box */}
            <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Link 
                    href={`/products/capacitors/${prod.id}`} 
                    className="text-base font-bold text-zinc-950 tracking-tight group-hover:text-primary transition-colors duration-300"
                  >
                    {prod.name}
                  </Link>
                  <span className="inline-flex items-center justify-center h-4.5 w-4.5 rounded-full bg-emerald-500 text-white shrink-0 shadow-sm shadow-emerald-500/10">
                    <Check className="h-3 w-3 stroke-[3.5]" />
                  </span>
                </div>
                
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mt-2">
                  <span className="text-zinc-400 font-semibold">Applications:</span> {prod.applications}
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
                  <span className="bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded font-mono text-zinc-700">{prod.capacitance.split(" ")[0]} μF</span>
                  <span className="bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded font-mono text-zinc-700">{prod.voltage.split(" ")[0]}V</span>
                </div>

                <button
                  onClick={() => onOpenQuote(prod)}
                  className="px-4.5 py-2 bg-zinc-100 hover:bg-primary border border-zinc-200/60 hover:border-primary text-zinc-800 hover:text-white text-xs font-bold rounded-full transition-all duration-300 flex items-center gap-0.5 cursor-pointer shadow-sm"
                >
                  Quote +
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
