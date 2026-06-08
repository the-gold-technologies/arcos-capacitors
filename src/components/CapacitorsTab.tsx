import React from "react";
import Link from "next/link";
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
  image: string;
}

const capacitorsList: CapacitorProduct[] = [
  {
    id: "fan",
    name: "Fan Capacitors",
    capacitance: "1 - 6 μF",
    voltage: "440V AC",
    applications: "Ceiling Fans, Exhaust Fans, Ventilation Systems",
    features: ["Polypropylene Film Dielectric", "Low Power Loss", "Compact Design", "Long Operational Life"],
    type: "Cylindrical / Wire Lead",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "motor",
    name: "Motor Run Capacitors",
    capacitance: "2 - 100 μF",
    voltage: "440V / 450V AC",
    applications: "Electric Motors, Compressors, Air Blowers",
    features: ["High insulation resistance", "Self-healing metallized film", "Moisture-resistant resin casing"],
    type: "Cylindrical Dual-terminal",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "washing",
    name: "Washing Machine Capacitors",
    capacitance: "6 - 50 μF",
    voltage: "440V AC",
    applications: "Washing Machines, Dryers, Appliance Equipment",
    features: ["Dual capacitance options available", "High vibration resistance", "Robust lead wires"],
    type: "Cylindrical Plastic Can",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "ac",
    name: "Air Conditioner Capacitors",
    capacitance: "2 - 80 μF",
    voltage: "440V / 450V AC",
    applications: "HVAC Compressors, Outdoor AC Units",
    features: ["Aluminum metal can casing", "Internal explosion-proof disconnector", "High temperature threshold"],
    type: "Aluminum Can Dual/Triple Terminals",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "submersible",
    name: "Submersible Pump Capacitors",
    capacitance: "20 - 100 μF",
    voltage: "440V AC",
    applications: "Water Pumps, Submersible Borewell Pumps",
    features: ["High torque start parameters", "Heavy-duty contact terminals", "Consistent capacitance under load"],
    type: "Cylindrical Heavy Resin",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pfc",
    name: "Power Factor Correction (PFC) Capacitors",
    capacitance: "Available in multiple kVAR ratings",
    voltage: "415V / 440V / 525V AC",
    applications: "Automatic Power Factor Correction (APFC) Panels, Substation Panels",
    features: ["Multiple kVAR Ratings", "415V, 440V & 525V Options", "Low Dielectric Losses", "Harmonic Resistance", "Self-Healing Technology", "Overpressure Safety Mechanism"],
    type: "Box/Square Body or Heavy Cylinder",
    image: "https://images.unsplash.com/photo-1601524909162-be87252be298?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "square",
    name: "Square Body Capacitors",
    capacitance: "Custom range based on request",
    voltage: "Custom industrial voltage lines",
    applications: "Compact panel spacing, specialized machinery mounting",
    features: ["Compact layout with self-healing tech", "Flexible bracket mounting", "Direct screw-in block terminals"],
    type: "Epoxy Box / Shell Case",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "lighting",
    name: "Lighting Capacitors",
    capacitance: "Custom range",
    voltage: "250V / 440V AC",
    applications: "Lighting systems and power factor correction applications",
    features: ["Low power loss", "Self-healing technology", "Long operational life"],
    type: "Cylindrical / Box type",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80",
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
        className="flex flex-col gap-6"
      >
        {capacitorsList.map((prod) => (
          <motion.div
            key={prod.id}
            whileHover={{ borderColor: "rgba(210,35,42,0.3)" }}
            className="bg-white border border-zinc-200 rounded-[24px] p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all duration-300 relative group"
          >
            {/* Left Column: Image wrapper */}
            <div className="w-full md:w-[220px] h-[150px] rounded-[18px] overflow-hidden shrink-0 bg-zinc-50 relative border border-zinc-200 shadow-inner">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase bg-zinc-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                {prod.type}
              </span>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {prod.name}
                  </h3>
                  <Cpu className="h-4.5 w-4.5 text-zinc-400 group-hover:text-primary transition-colors duration-300 shrink-0" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3">
                  {/* Applications & Features */}
                  <div className="md:col-span-8 space-y-2">
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      <strong>Applications:</strong> {prod.applications}
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                      {prod.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spec values */}
                  <div className="md:col-span-4 bg-zinc-50/85 border border-zinc-200 rounded-xl p-3 flex flex-col justify-center gap-1.5 text-center md:text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-bold uppercase tracking-wider text-[9px]">Capacitance</span>
                      <span className="text-zinc-800 font-extrabold font-mono">{prod.capacitance}</span>
                    </div>
                    <div className="border-t border-zinc-200/60 my-1"></div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-bold uppercase tracking-wider text-[9px]">Voltage</span>
                      <span className="text-zinc-800 font-semibold font-mono">{prod.voltage}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom buttons row */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-end gap-3">
                <Link
                  href={`/products/capacitors/${prod.id}`}
                  className="px-5 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold rounded-xl transition-all duration-300"
                >
                  View Details
                </Link>
                <button
                  onClick={() => onOpenQuote(prod)}
                  className="px-5 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-sm"
                >
                  Get Custom Estimate
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
