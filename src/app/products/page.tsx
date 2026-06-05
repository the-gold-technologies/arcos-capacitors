"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Boxes, 
  ChevronRight, 
  Info, 
  Check, 
  X, 
  Mail, 
  Phone, 
  User, 
  ChevronDown,
  ArrowRight,
  TrendingUp
} from "lucide-react";

type ProductTab = "capacitors" | "clips" | "ties";

interface CapacitorProduct {
  id: string;
  name: string;
  capacitance: string;
  voltage: string;
  applications: string;
  features: string[];
  type: string;
}

const capacitors: CapacitorProduct[] = [
  {
    id: "fan",
    name: "Fan Capacitors",
    capacitance: "1 - 6 μF",
    voltage: "440V AC",
    applications: "Ceiling Fans, Exhaust Fans, Ventilation Systems",
    features: ["Low dissipation factor", "Built-in thermal safety", "Long service life"],
    type: "Cylindrical / Wire Lead"
  },
  {
    id: "motor",
    name: "Motor Run Capacitors",
    capacitance: "2 - 100 μF",
    voltage: "440V / 450V AC",
    applications: "Electric Motors, Compressors, Air Blowers",
    features: ["High insulation resistance", "Self-healing metallized film", "Moisture-resistant resin casing"],
    type: "Cylindrical Dual-terminal"
  },
  {
    id: "washing",
    name: "Washing Machine Capacitors",
    capacitance: "6 - 50 μF",
    voltage: "440V AC",
    applications: "Washing Machines, Dryers, Appliance Equipment",
    features: ["Dual capacitance options available", "High vibration resistance", "Robust lead wires"],
    type: "Cylindrical Plastic Can"
  },
  {
    id: "ac",
    name: "Air Conditioner Capacitors",
    capacitance: "2 - 80 μF",
    voltage: "440V / 450V AC",
    applications: "HVAC Compressors, Outdoor AC Units",
    features: ["Aluminum metal can casing", "Internal explosion-proof disconnector", "High temperature threshold"],
    type: "Aluminum Can Dual/Triple Terminals"
  },
  {
    id: "submersible",
    name: "Submersible Pump Capacitors",
    capacitance: "20 - 100 μF",
    voltage: "440V AC",
    applications: "Water Pumps, Submersible Borewell Pumps",
    features: ["High torque start parameters", "Heavy-duty contact terminals", "Consistent capacitance under load"],
    type: "Cylindrical Heavy Resin"
  },
  {
    id: "pfc",
    name: "Power Factor Correction (PFC) Capacitors",
    capacitance: "Available in multiple kVAR ratings",
    voltage: "415V / 440V / 525V AC",
    applications: "Automatic Power Factor Correction (APFC) Panels, Substation Panels",
    features: ["Saves energy & prevents line losses", "Over-pressure interrupter system", "Modular square or cylindrical body"],
    type: "Box/Square Body or Heavy Cylinder"
  },
  {
    id: "square",
    name: "Square Body Capacitors",
    capacitance: "Custom range based on request",
    voltage: "Custom industrial voltage lines",
    applications: "Compact panel spacing, specialized machinery mounting",
    features: ["Compact layout with self-healing tech", "Flexible bracket mounting", "Direct screw-in block terminals"],
    type: "Epoxy Box / Shell Case"
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<ProductTab>("capacitors");
  const [quoteDrawerProduct, setQuoteDrawerProduct] = useState<CapacitorProduct | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qty: "1000",
    specs: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setQuoteDrawerProduct(null);
      setFormData({ name: "", email: "", phone: "", qty: "1000", specs: "", notes: "" });
    }, 2500);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      {/* 1. Page Header */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Product Directory</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Precision Engineering Specs
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Select a category to view dimensions, capacity thresholds, materials, and request quote estimates.
        </p>
      </section>

      {/* 2. Switcher Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex p-1.5 rounded-full bg-[#121218] border border-white/5 relative">
          {(["capacitors", "clips", "ties"] as ProductTab[]).map((tab) => {
            const label = tab === "capacitors" ? "Capacitors" : tab === "clips" ? "Cable Clips" : "Cable Ties";
            const Icon = tab === "capacitors" ? Cpu : tab === "clips" ? Layers : Boxes;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProductTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(210,35,42,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="h-4 w-4 relative z-10" />
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents */}
      <AnimatePresence mode="wait">
        {activeTab === "capacitors" && (
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
                  Our capacitors are engineered utilizing advanced self-healing metallized polypropylene film and internal safety disconnectors to withstand extreme voltage surges, temperature loads, and load variations.
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
              {capacitors.map((prod) => (
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
                      onClick={() => setQuoteDrawerProduct(prod)}
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
        )}

        {activeTab === "clips" && (
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
                  ARCOS manufactures high-density polyethylene (PE) cable clips fitted with premium hardened, zinc-plated steel masonry nails. Designed specifically to hold flat or round electrical cords firmly in place against concrete, mortar, plaster, or wooden joists.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-white text-sm font-semibold">Tough Plastic Body</h4>
                    <p className="text-zinc-500 text-xs mt-1">High-impact PE resin resists crushing, UV decay, and cracking in winter environments.</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">High-grade Nails</h4>
                    <p className="text-zinc-500 text-xs mt-1">Zinc-plated structural carbon steel nails prevent bending under heavy hammer force.</p>
                  </div>
                </div>

                {/* Table of sizes */}
                <div className="mt-8 border-t border-white/5 pt-6">
                  <h4 className="text-white text-sm font-semibold mb-4">Standard Diameter Offerings</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-zinc-500">
                          <th className="py-2 font-semibold">Size ID</th>
                          <th className="py-2 font-semibold">Supported Cable Diameters</th>
                          <th className="py-2 font-semibold">Form Factor</th>
                          <th className="py-2 font-semibold">Packaging Unit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-zinc-300">
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
                  <h4 className="text-zinc-200 text-xs font-semibold uppercase tracking-wider">Installation Assurance</h4>
                  <h3 className="text-xl font-bold text-white mt-2">Hammer-force Integrity</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mt-2">
                    Nails are set pre-aligned inside the PE collars to prevent sliding and ensure swift one-strike installation.
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
                    <path d="M 40 100 
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
                  onClick={() => setQuoteDrawerProduct({
                    id: "clips",
                    name: "Cable Clips Selection",
                    capacitance: "N/A",
                    voltage: "N/A",
                    applications: "Wire management, masonry, wood, drywall panels",
                    features: ["Masonry pre-installed steel nail", "Crushproof PE"],
                    type: "PE Molding"
                  })}
                  className="w-full py-3 bg-white text-dark-bg text-xs font-extrabold rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  Request Bulk Price Sheet
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "ties" && (
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
                  Manufactured from high-strength Nylon 66 material, ARCOS zip ties exhibit extreme tensile capacity and are rated for self-locking structural bundle tasks. Available in standard, UV-resistant black (for outdoor solar/wiring setups) and standard natural clear.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div>
                    <h4 className="text-white text-sm font-semibold">Self-locking Head</h4>
                    <p className="text-zinc-500 text-xs mt-1">Four-tooth pawl latch guarantees a slip-proof lock under tensile pressure.</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">UV Resistance</h4>
                    <p className="text-zinc-500 text-xs mt-1">Carbon-black added polymers protect against solar decay in outdoor projects.</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Thermal Tolerance</h4>
                    <p className="text-zinc-500 text-xs mt-1">Operates safely in ranges from -40°C to +85°C without structural failure.</p>
                  </div>
                </div>

                {/* Table of sizes */}
                <div className="mt-8 border-t border-white/5 pt-6">
                  <h4 className="text-white text-sm font-semibold mb-4">Standard Tensile Capacity Profiles</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-zinc-500">
                          <th className="py-2 font-semibold">Part Family</th>
                          <th className="py-2 font-semibold">Lengths Available</th>
                          <th className="py-2 font-semibold">Bundle Tensile Limit</th>
                          <th className="py-2 font-semibold">Material Grade</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-zinc-300">
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
                  <h4 className="text-zinc-200 text-xs font-semibold uppercase tracking-wider">Engineering Focus</h4>
                  <h3 className="text-xl font-bold text-white mt-2">Zero-slip Tooth Serration</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mt-2">
                    Deep groove serrations along the strap match tolerances in the lock-head to prevent release under vibrational shock.
                  </p>
                </div>
                
                {/* SVG Visual representation of Tie */}
                <div className="my-8 flex justify-center">
                  <svg viewBox="0 0 160 80" className="w-[140px] h-[70px]">
                    {/* The strap loop */}
                    <circle cx="90" cy="40" r="25" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                    <circle cx="90" cy="40" r="25" fill="none" stroke="#d2232a" strokeWidth="1.5" strokeDasharray="3 2" />
                    
                    {/* The lock body block */}
                    <rect x="58" y="28" width="12" height="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="1.5" />
                    {/* The strap tail going through */}
                    <path d="M 64 45 L 40 45 C 30 45, 30 49, 40 49 L 64 49" fill="rgba(255,255,255,0.1)" />
                    {/* Bundle indicator */}
                    <circle cx="90" cy="40" r="18" fill="rgba(255,255,255,0.03)" />
                    <text x="90" y="43" fill="rgba(255,255,255,0.3)" fontSize="8" fontWeight="bold" textAnchor="middle">BUNDLE</text>
                  </svg>
                </div>

                <button
                  onClick={() => setQuoteDrawerProduct({
                    id: "ties",
                    name: "Cable Ties Selection",
                    capacitance: "N/A",
                    voltage: "N/A",
                    applications: "OEM wiring harness, electrical panels, solar grids",
                    features: ["Self-locking head", "Nylon 66 flame-retardant"],
                    type: "Nylon Extrusion"
                  })}
                  className="w-full py-3 bg-white text-dark-bg text-xs font-extrabold rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  Request Bulk Price Sheet
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Interactive Quote Slider Drawer */}
      <AnimatePresence>
        {quoteDrawerProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuoteDrawerProduct(null)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            />

            {/* Slider Drawer container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[500px] bg-[#0c0c10] border-l border-dark-border px-6 sm:px-8 py-10 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-widest">RFQ Portal</span>
                    <h3 className="text-xl font-bold text-white mt-1">Get Price Quotation</h3>
                  </div>
                  <button
                    onClick={() => setQuoteDrawerProduct(null)}
                    className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                    aria-label="Close quote portal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Selected Product info box */}
                <div className="bg-[#121217] border border-white/5 p-4 rounded-xl mb-6">
                  <span className="text-[9px] uppercase font-mono text-zinc-500">Selected Product</span>
                  <h4 className="text-white font-bold text-base mt-1">{quoteDrawerProduct.name}</h4>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-zinc-400">
                    <div>
                      <span className="text-zinc-600 block">Spec Range:</span>
                      <span className="font-semibold text-zinc-300">{quoteDrawerProduct.capacitance}</span>
                    </div>
                    <div>
                      <span className="text-zinc-600 block">Category:</span>
                      <span className="text-zinc-300">{quoteDrawerProduct.type}</span>
                    </div>
                  </div>
                </div>

                {/* RFQ Form */}
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="block text-zinc-400 text-xs font-semibold mb-2">Your Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 pl-10 text-sm text-white focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                      <User className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-400 text-xs font-semibold mb-2">Corporate Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 pl-10 text-sm text-white focus:outline-none transition-all duration-300"
                          placeholder="name@company.com"
                        />
                        <Mail className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-xs font-semibold mb-2">Phone / WhatsApp</label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 pl-10 text-sm text-white focus:outline-none transition-all duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                        <Phone className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs font-semibold mb-2">Target Volume (Pieces)</label>
                    <select
                      name="qty"
                      value={formData.qty}
                      onChange={handleInputChange}
                      className="w-full bg-[#121218] border border-white/5 focus:border-primary rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300"
                    >
                      <option value="500">500 - 2,500 Pcs</option>
                      <option value="2500">2,500 - 10,000 Pcs</option>
                      <option value="10000">10,000 - 50,000 Pcs</option>
                      <option value="50000">50,000+ Pcs (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs font-semibold mb-2">Specific Technical Specs (optional)</label>
                    <textarea
                      name="specs"
                      value={formData.specs}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full bg-[#121218] border border-white/5 focus:border-primary rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300 resize-none"
                      placeholder="e.g. 2.5 uF, dual copper wires, customized shell label stamp..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(210,35,42,0.3)] hover:shadow-[0_0_25px_rgba(210,35,42,0.6)] transition-all duration-300 mt-6"
                  >
                    Submit Quotation Request
                  </button>
                </form>
              </div>

              {/* Success Overlay when submitted */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0c0c10] flex flex-col items-center justify-center text-center p-8 z-30"
                  >
                    <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500 mb-6">
                      <Check className="h-8 w-8" />
                    </div>
                    <h4 className="text-white text-xl font-bold">Inquiry Sent Successfully</h4>
                    <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-xs">
                      Our Noida sales representative will review your target specs and contact you with a quotation list.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
