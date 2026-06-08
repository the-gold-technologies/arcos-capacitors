"use client";

import React from "react";
import {
  Building2,
  Wind,
  Settings,
  Tv,
  Cpu,
  Factory,
  Sun,
  Briefcase,
  Wrench,
  Users,
  Layers,
} from "lucide-react";

const industries = [
  {
    name: "Fan Manufacturers",
    tags: ["Ceiling Fans", "Exhaust Fans", "Industrial Blowers"],
    desc: "Supplying premium microfarad fan capacitors directly to leading ceiling fan, exhaust fan, and industrial blower brands in India.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=80",
    icon: Wind,
  },
  {
    name: "Motor Manufacturers",
    tags: ["Cylindrical Run", "Continuous Duty", "High Torque"],
    desc: "Custom cylindrical run capacitors optimized for continuous high torque performance in single-phase electrical motors.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80",
    icon: Settings,
  },
  {
    name: "Pump Manufacturers",
    tags: ["Submersible", "Borehole Pumps", "Resin Potting"],
    desc: "Heavy-duty resin submersible pump capacitors designed to operate reliably under borehole voltage load shifts.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop&q=80",
    icon: Wrench,
  },
  {
    name: "Appliance Manufacturers",
    tags: ["Washing Machines", "Dryers", "Potting Caps"],
    desc: "Supplying dual-capacitance washing machine and dryer potting capacitors for leading consumer home appliance brands.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&auto=format&fit=crop&q=80",
    icon: Tv,
  },
  {
    name: "Electrical Product Manufacturers",
    tags: ["Lighting Ballasts", "Power Factor", "PFC Caps"],
    desc: "Providing high-durability capacitors engineered for lighting systems, ballast controls, and power factor setups.",
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&auto=format&fit=crop&q=80",
    icon: Cpu,
  },
  {
    name: "Electrical Dealers & Distributors",
    tags: ["Wholesale Packs", "Nylon Ties", "Cable Clips"],
    desc: "Supplying ISO-certified box-pack capacitors, cable ties, and clips to wholesale distributors across retail networks.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
    icon: Users,
  },
  {
    name: "Industrial Automation Companies",
    tags: ["APFC Panels", "Square Body", "High Stability"],
    desc: "Compact square body capacitors and APFC panel power correction systems for high-stability manufacturing automation.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80",
    icon: Factory,
  },
  {
    name: "Renewable Energy Companies",
    tags: ["Solar Farms", "Inverter Panels", "UV-Black Ties"],
    desc: "UV-stabilized black cable ties and specialized capacitors utilized in solar farm inverter panel wiring grids.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=80",
    icon: Sun,
  },
  {
    name: "Infrastructure Projects",
    tags: ["Cable Management", "Structural Wiring", "Heavy Duty"],
    desc: "Heavy-duty cable ties and clips engineered for structural cable management and industrial wiring installations.",
    image:
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&auto=format&fit=crop&q=80",
    icon: Building2,
  },
  {
    name: "Panel Builders",
    tags: ["kVAR-Rated", "Heat Reduction", "Capacitor Banks"],
    desc: "High-kVAR rated power factor correction capacitors engineered to optimize utility lines and prevent panel heat loss.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&auto=format&fit=crop&q=80",
    icon: Layers,
  },
  {
    name: "OEM Manufacturers",
    tags: ["Custom Leads", "Private Labeling", "Specific Values"],
    desc: "Partnering with brand buyers to design and manufacture capacitors with custom capacitance values, lead wires, and markings.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80",
    icon: Briefcase,
  },
];

const applications = [
  "Ceiling Fans",
  "Exhaust Fans",
  "Air Conditioners",
  "Washing Machines",
  "Water Pumps",
  "Electric Motors",
  "Industrial Machinery",
  "Lighting Systems",
  "APFC Panels",
  "Power Factor Correction Systems",
];

export default function IndustriesServed() {
  return (
    <div className="relative w-full py-12 space-y-16">
      {/* Background blobs */}
      <div className="absolute top-[15%] -left-[10%] h-[400px] w-[400px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 filter blur-[120px] pointer-events-none -z-10" />

      {/* 1. Page Header (Constrained) */}
      <div className="max-w-7xl mx-auto px-6">
        <section className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Market Sectors & OEM Partners
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mt-3">
            Industries Served
          </h1>
          <p className="text-zinc-650 text-sm sm:text-base mt-4 leading-relaxed">
            ARCOS products are trusted by a wide range of industries,
            manufacturing custom component solutions for large OEM brands,
            contractors, and national distribution grids.
          </p>
        </section>
      </div>

      {/* 2. Industries Grid (Constrained) */}
      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-primary/20 hover:shadow-md transition-all duration-300 relative group"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative w-full h-[150px] overflow-hidden bg-zinc-50 border-b border-zinc-100 rounded-t-2xl">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 h-9 w-9 rounded-lg bg-primary/90 text-white flex items-center justify-center border border-white/20 select-none">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 pt-6 space-y-3">
                    <h3 className="text-base font-bold text-zinc-950 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {ind.name}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {ind.desc}
                    </p>

                    {/* Solution Tag line (inline pointwise dots instead of box badges) */}
                    <div className="text-[10px] text-zinc-500 pt-1.5 leading-relaxed border-t border-zinc-100 mt-3 select-none">
                      <span className="font-semibold text-zinc-700">
                        Applications:{" "}
                      </span>
                      {ind.tags.join(" • ")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* 3. Core OEM Applications Section (Full bleed) */}
      <section className="w-full bg-zinc-900 text-white border-y border-white/[0.04] py-16 relative overflow-hidden">
        <div className="absolute top-[-30px] right-[-30px] h-32 w-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block">
                Application Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Where Our Components Perform Daily
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                From residential ceiling fans to high-capacity APFC distribution
                grids and outdoor solar systems, ARCOS electrical capacitors, PE
                cable clips, and self-locking Nylon ties maintain structural
                power stability.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applications.map((app, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary shrink-0">
                    <span className="text-[10px] font-mono font-bold">
                      {(idx + 1).toString()}
                    </span>
                  </div>
                  <span className="text-zinc-200 text-xs font-semibold leading-none">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OEM Partnership Focus (Constrained) */}
      <div className="max-w-7xl mx-auto px-6 py-6 ">
        <section className="bg-white border border-zinc-200 rounded-[30px] p-8 sm:p-12 shadow-sm text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
            Request Custom OEM Customizations
          </h3>
          <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
            Are you a brand manufacturer or an electrical buyer looking for
            specialized microfarad ratings, dimensions, custom brackets,
            terminal styles, or private label labeling? Coordinate with our
            Noida design team to build custom capacitors for your motors,
            panels, or pumps.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="/contact?type=quote"
              className="py-3 px-6 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-md"
            >
              OEM Inquiry Form
            </a>
            <a
              href="tel:+919891758499"
              className="py-3 px-6 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-xs font-bold rounded-xl transition-all duration-300"
            >
              Consult Noida Plant
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
