"use client";

import React from "react";
import { 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Building, 
  FileText, 
  Settings,
  HeartHandshake
} from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015 Certification",
    subtitle: "Quality Management Systems",
    desc: "Our manufacturing facility operates under strict ISO 9001:2015 protocols, ensuring traceability, document controls, and standardized assembly line workflows.",
    icon: Building,
  },
  {
    title: "CE Compliance Certification",
    subtitle: "European Safety Standards",
    desc: "All ARCOS capacitors carry CE certifications, indicating compliance with mandatory health, safety, and environmental protection legislation in the European Economic Area.",
    icon: ShieldCheck,
  },
  {
    title: "RoHS Directives Compliance",
    subtitle: "Eco-Friendly Construction",
    desc: "Strict adherence to Restriction of Hazardous Substances (RoHS) rules. ARCOS components are lead-free and free of mercury, cadmium, and hexavalent chromium.",
    icon: Award,
  },
  {
    title: "ISI National Standards",
    subtitle: "BIS Mark of Safety",
    desc: "Capacitors meet Bureau of Indian Standards (BIS) IS 1709 / IS 2993 requirements, verifying thermal safety, moisture-resistance, and high torque ratings.",
    icon: CheckCircle,
  }
];

const industryAssociations = [
  { name: "IEEMA", fullname: "Indian Electrical & Electronics Manufacturers' Association" },
  { name: "ELCINA", fullname: "Electronic Industries Association of India" },
  { name: "ELECRAMA", fullname: "World's Largest Electrical Industry Showcase Affiliate" },
  { name: "NEA", fullname: "National Electrical Association" }
];

const testingChecks = [
  {
    id: "check-1",
    title: "Capacitance & Tolerance Scan",
    desc: "100% in-line checks to ensure final capacitors measure precisely within specified ±5% or custom ±1% microfarad tolerance bands."
  },
  {
    id: "check-2",
    title: "Dissipation Factor Verification",
    desc: "Measures dielectric losses under active frequency loads to guarantee low energy dissipation and heat prevention."
  },
  {
    id: "check-3",
    title: "High-Voltage Insulation Leakage",
    desc: "Stress-testing terminal insulation against 2x rated voltage lines to detect micro-corrosion paths and prevent leakage currents."
  },
  {
    id: "check-4",
    title: "Thermal Stress Cycling",
    desc: "Baking components inside environmental test chambers across -40°C to +85°C ranges to evaluate raw materials thermal stability."
  },
  {
    id: "check-5",
    title: "Hermetic Seal Integrity",
    desc: "Pressure and seal inspection of plastic and aluminum cans to ensure zero epoxy resin leakage and protection against moisture."
  }
];

export default function QualityCertifications() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Background glow effects */}
      <div className="absolute top-[15%] -left-[10%] h-[400px] w-[400px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 filter blur-[120px] pointer-events-none -z-10" />

      {/* 1. Page Header */}
      <section className="text-center max-w-2xl mx-auto">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">
          Industrial Testing & Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mt-3">
          Quality & Certifications
        </h1>
        <p className="text-zinc-650 text-sm sm:text-base mt-4 leading-relaxed">
          Quality remains at the core of ARCOS manufacturing operations. We follow stringent quality standards supported by advanced manufacturing processes and inspection procedures.
        </p>
      </section>

      {/* 2. Warranty Announcement Block */}
      <section className="bg-gradient-to-r from-primary to-primary-dark rounded-[30px] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest bg-white/15 px-3.5 py-1 rounded-full border border-white/10 inline-block">
              Manufacturer Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              12-Month Mechanical & Electrical Warranty
            </h2>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-2xl">
              All ARCOS capacitors carry a 12-month replacement warranty against manufacturing defects. Our self-healing polypropylene film and explosion-proof interrupters ensure your industrial equipment is safe from outages.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center sm:justify-start lg:justify-end">
            <div className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4">
              <HeartHandshake className="h-10 w-10 text-white shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider block opacity-75">Certified Service</span>
                <span className="text-sm font-bold block">100% OEM Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Certifications Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Accredited Safety & Compliance Badges
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm mt-3">
            ARCOS capacitors undergo verification audits to satisfy national and global electrical safety benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col sm:flex-row gap-5"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                    {cert.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Inspection Stages */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-primary text-xs font-bold uppercase tracking-wider block">
            Quality Assurance Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            5 Stages of In-house Quality Checks
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            From film winding to outer encapsulation, our quality controllers test random batch units against high torque start limits, thermal stress stability, and voltage loss indexes to prevent failure rates at client end.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl flex items-center gap-3">
            <Settings className="h-5 w-5 text-zinc-400 shrink-0" />
            <span className="text-[10px] text-zinc-500 font-semibold uppercase leading-snug tracking-wider">
              Equipped with computerized capacitance testers & chambers
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {testingChecks.map((check, idx) => (
            <div 
              key={check.id}
              className="bg-white border border-zinc-150 rounded-2xl p-5 flex items-start gap-4 shadow-sm"
            >
              <span className="text-primary font-mono text-sm font-bold shrink-0">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-sm font-bold text-zinc-950">{check.title}</h4>
                <p className="text-zinc-550 text-xs mt-1 leading-relaxed">{check.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Industry Associations Grid */}
      <section className="bg-zinc-50 border border-zinc-200 rounded-[30px] p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">Industry Associations</h3>
          <p className="text-zinc-600 text-xs mt-2">
            ARCOS (M.G. Industries) is an active affiliate member of premier electronics and electrical associations in India.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industryAssociations.map((assoc, idx) => (
            <div 
              key={idx}
              className="bg-white border border-zinc-200/60 p-5 rounded-xl text-center space-y-1 shadow-sm hover:border-zinc-300 transition-colors"
            >
              <span className="text-primary font-extrabold text-lg tracking-wider block">{assoc.name}</span>
              <span className="text-zinc-550 text-[10px] font-medium leading-tight block">{assoc.fullname}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
