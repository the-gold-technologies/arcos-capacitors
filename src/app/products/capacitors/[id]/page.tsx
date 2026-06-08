"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Cpu, 
  Check, 
  ShieldCheck, 
  FileText,
  Mail,
  Zap,
  Hammer
} from "lucide-react";
import QuoteDrawer from "@/components/QuoteDrawer";

interface CapacitorDetails {
  name: string;
  capacitance: string;
  voltage: string;
  dielectric?: string;
  features: string[];
  applications: string;
  type: string;
  image: string;
  description: string;
}

const capacitorsData: Record<string, CapacitorDetails> = {
  fan: {
    name: "Fan Capacitors",
    capacitance: "1 – 6 µF",
    voltage: "440V AC",
    dielectric: "Polypropylene Film Dielectric",
    features: [
      "Stable performance",
      "Energy efficiency",
      "Long operating life",
      "Low power loss",
      "Compact design",
      "Built-in thermal safety"
    ],
    applications: "Ceiling Fans, Exhaust Fans, Ventilation Systems, Industrial Fans and OEM Fan Manufacturing.",
    type: "Cylindrical / Wire Lead",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    description: "ARCOS manufactures premium-quality fan capacitors designed to deliver stable performance, energy efficiency, and long operating life under voltage variations."
  },
  motor: {
    name: "Motor Run Capacitors",
    capacitance: "2 – 100 µF",
    voltage: "440V/450V AC",
    dielectric: "Self-healing metallized MPP film",
    features: [
      "High insulation resistance",
      "Self-healing technology",
      "Moisture-resistant resin casing",
      "Low dissipation factor",
      "Consistent capacitance under load"
    ],
    applications: "Electric Motors, Compressors, Blowers, Air Conditioning Equipment.",
    type: "Cylindrical Dual-terminal",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    description: "ARCOS Motor Run Capacitors are designed for continuous duty in electrical motors, air compressors, and blowers, offering high reliability and electrical safety."
  },
  washing: {
    name: "Washing Machine Capacitors",
    capacitance: "6 – 50 µF",
    voltage: "440V AC",
    dielectric: "Polypropylene Film",
    features: [
      "High vibration resistance",
      "Robust lead wires",
      "Dual capacitance options available",
      "Epoxy resin sealed for damp environments",
      "Flame retardant plastic shell"
    ],
    applications: "Washing Machines, Spin Dryers, and Household Appliance Equipment.",
    type: "Cylindrical Plastic Can",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80",
    description: "Specially designed for damp and high-vibration washing machine environments, featuring dual-motor running support and robust hermetic sealing."
  },
  ac: {
    name: "Air Conditioner Capacitors",
    capacitance: "2 – 80 µF",
    voltage: "440V/450V AC",
    dielectric: "Metallized Polypropylene Film (Oil-Filled)",
    features: [
      "Aluminum metal can casing",
      "Internal explosion-proof disconnector",
      "High temperature threshold",
      "Dual or triple terminals for compressor/fan",
      "Excellent heat dissipation"
    ],
    applications: "HVAC Systems, Outdoor AC Units, and Heat Pumps.",
    type: "Aluminum Can Dual/Triple Terminals",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    description: "ARCOS AC Capacitors feature premium aluminum oil-filled structures and safety interrupters to operate safely under intense HVAC thermal loads."
  },
  submersible: {
    name: "Submersible Pump Capacitors",
    capacitance: "20 – 100 µF",
    voltage: "440V AC",
    dielectric: "Heavy-duty Polypropylene Film",
    features: [
      "High torque start parameters",
      "Heavy-duty contact terminals",
      "Consistent capacitance under heavy load",
      "Sturdy box/cylindrical resin encapsulation",
      "Protects against voltage drops"
    ],
    applications: "Water Pumps, Submersible Pumps, Agricultural Irrigation systems.",
    type: "Cylindrical Heavy Resin",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    description: "Specifically engineered for agricultural borewells and water pumps, offering high starting torque and stability under severe line voltage fluctuations."
  },
  pfc: {
    name: "Power Factor Correction Capacitors",
    capacitance: "Available in multiple kVAR ratings",
    voltage: "415V, 440V & 525V AC",
    dielectric: "Low Dielectric Loss Film",
    features: [
      "Improves power factor & saves energy",
      "Reduces transmission line losses",
      "Harmonic current resistance",
      "Self-healing technology",
      "Overpressure safety mechanism"
    ],
    applications: "APFC Panels, Power Distribution Systems, Industrial Plants, Commercial Buildings.",
    type: "Box/Square Body or Heavy Cylinder",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    description: "ARCOS Power Factor Correction Capacitors help reduce reactive power demand in industrial panels, optimizing utility billing and preventing line overheads."
  },
  square: {
    name: "Square Body Capacitors",
    capacitance: "Custom range based on request",
    voltage: "Custom industrial voltage lines",
    dielectric: "Polypropylene Film",
    features: [
      "Compact design for panel space optimization",
      "Self-healing technology",
      "Flexible mounting brackets",
      "Direct screw-in block terminals",
      "High reliability"
    ],
    applications: "Compact panel spacing, specialized machinery mounting.",
    type: "Epoxy Box / Shell Case",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    description: "Space-saving square casing designed for tight spacing inside industrial control cabinets, featuring customizable terminals and easy screw brackets."
  },
  lighting: {
    name: "Lighting Capacitors",
    capacitance: "Custom range based on request",
    voltage: "250V / 440V AC",
    dielectric: "Metallized Film",
    features: [
      "Designed for lighting systems",
      "Power factor correction applications",
      "Very low heat dissipation",
      "Flame-retardant plastic can",
      "Maintenance-free operation"
    ],
    applications: "Fluorescent Lamps, Sodium Vapor Lamps, Street Lighting panels, Commercial lighting.",
    type: "Cylindrical Plastic Casing",
    image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&auto=format&fit=crop&q=80",
    description: "Maintains high electrical efficiency in gas-discharge and fluorescent lamp systems by local power factor correction, reducing heat losses."
  }
};

export default function CapacitorSubProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const details = capacitorsData[id];
  const [quoteOpen, setQuoteOpen] = useState(false);

  if (!details) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-zinc-900">Product Not Found</h2>
        <p className="text-zinc-500 mt-2">The requested capacitor sub-product category does not exist.</p>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 text-primary font-bold">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12">
      {/* Glow effects */}
      <div className="absolute top-[20%] -left-[10%] h-[350px] w-[350px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none -z-10" />
      
      <div className="mb-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Media & Spec sheet */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative w-full h-[280px] sm:h-[360px] rounded-3xl overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100">
            <img
              src={details.image}
              alt={details.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-primary px-3 py-1 rounded-full">
                {details.type}
              </span>
            </div>
          </div>

          {/* Quick Specifications Table */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" /> Engineering Standards
            </h3>
            <div className="divide-y divide-zinc-200/60 text-xs">
              <div className="flex justify-between py-3">
                <span className="text-zinc-500">Capacitance Range</span>
                <span className="text-zinc-900 font-mono font-bold">{details.capacitance}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-zinc-500">Voltage Rating</span>
                <span className="text-zinc-900 font-mono font-semibold">{details.voltage}</span>
              </div>
              {details.dielectric && (
                <div className="flex justify-between py-3">
                  <span className="text-zinc-500">Dielectric Material</span>
                  <span className="text-zinc-900">{details.dielectric}</span>
                </div>
              )}
              <div className="flex justify-between py-3">
                <span className="text-zinc-500">Self-Healing Tech</span>
                <span className="text-zinc-900 flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-green-500" /> Yes
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-zinc-500">Compliance</span>
                <span className="text-zinc-900 font-semibold">CE / RoHS / ISI</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-zinc-500">Product Warranty</span>
                <span className="text-zinc-900">12 Months Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Info & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="h-4 w-4" /> ARCOS Precision Capacitor
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              {details.name}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {details.description}
            </p>
          </div>

          {/* Features Checklist */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-4">
              Performance Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-650">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shrink-0 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications list */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-3 flex items-center gap-2">
              <Hammer className="h-5 w-5 text-zinc-400" /> Typical Applications
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              {details.applications}
            </p>
          </div>

          {/* Action buttons */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-zinc-900 font-bold text-sm">Need pricing or technical drawings?</h4>
              <p className="text-zinc-550 text-xs mt-1">Get custom estimates and specs sheets within 24 hours.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto sm:ml-auto">
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex-1 sm:flex-initial py-3 px-6 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-md whitespace-nowrap"
              >
                Get Custom Quote
              </button>
              <Link
                href="/contact"
                className="flex-1 sm:flex-initial py-3 px-5 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-800 text-xs font-bold rounded-xl text-center transition-all duration-300 whitespace-nowrap"
              >
                Inquire PDF
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Drawer component */}
      {quoteOpen && (
        <QuoteDrawer 
          product={{
            id: id,
            name: details.name,
            capacitance: details.capacitance,
            voltage: details.voltage,
            type: details.type
          }}
          onClose={() => setQuoteOpen(false)}
        />
      )}
    </div>
  );
}
