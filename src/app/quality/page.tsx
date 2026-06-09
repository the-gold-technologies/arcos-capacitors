"use client";

import React from "react";
import { Settings, HeartHandshake } from "lucide-react";

const ISOLogo = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-full h-full text-[#0B4F93]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="38" fill="#0B4F93" />
    <circle
      cx="40"
      cy="40"
      r="34"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <path
      d="M26 38 L36 48 L56 26"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="40"
      y="62"
      fill="white"
      fontFamily="sans-serif"
      fontSize="8"
      fontWeight="800"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      ISO 9001
    </text>
    <text
      x="40"
      y="70"
      fill="white"
      fillOpacity="0.8"
      fontFamily="sans-serif"
      fontSize="6"
      fontWeight="700"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      CERTIFIED
    </text>
  </svg>
);

const CELogo = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-full h-full text-zinc-900"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 28,24 A 16,16 0 0,0 12,40 A 16,16 0 0,0 28,56 L 28,50 A 10,10 0 0,1 18,40 A 10,10 0 0,1 28,30 Z" />
    <path d="M 52,24 A 16,16 0 0,0 36,40 A 16,16 0 0,0 52,56 L 52,50 A 10,10 0 0,1 42,40 A 10,10 0 0,1 52,30 Z" />
    <rect x="42" y="37" width="9" height="6" />
  </svg>
);

const RoHSLogo = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-full h-full text-emerald-600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="40"
      cy="40"
      r="38"
      fill="#10B981"
      fillOpacity="0.08"
      stroke="#10B981"
      strokeWidth="2"
    />
    <path d="M40 18 C30 26 30 38 40 48 C50 38 50 26 40 18 Z" fill="#10B981" />
    <path
      d="M34 35 L38 39 L47 28"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="40"
      y="62"
      fill="#047857"
      stroke="none"
      fontFamily="sans-serif"
      fontSize="9"
      fontWeight="900"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      RoHS
    </text>
    <text
      x="40"
      y="70"
      fill="#047857"
      fillOpacity="0.8"
      stroke="none"
      fontFamily="sans-serif"
      fontSize="5.5"
      fontWeight="700"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      COMPLIANT
    </text>
  </svg>
);

const ISILogo = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-full h-full text-zinc-900"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="10" width="60" height="60" rx="4" fill="none" />
    <line x1="10" y1="23" x2="70" y2="23" />
    <line x1="10" y1="57" x2="70" y2="57" />
    <text
      x="40"
      y="19"
      fill="currentColor"
      stroke="none"
      fontFamily="sans-serif"
      fontSize="8"
      fontWeight="800"
      textAnchor="middle"
    >
      IS: 1709
    </text>
    <text
      x="40"
      y="66"
      fill="currentColor"
      stroke="none"
      fontFamily="sans-serif"
      fontSize="6.5"
      fontWeight="700"
      textAnchor="middle"
    >
      CM/L - 8462791
    </text>
    <path
      d="M 40 30 A 10 10 0 1 0 40 50 A 10 10 0 1 0 40 30 Z"
      strokeWidth="1.2"
      strokeDasharray="3 1.5"
    />
    <circle cx="40" cy="40" r="7" fill="none" strokeWidth="1.2" />
    <text
      x="40"
      y="43"
      fill="currentColor"
      stroke="none"
      fontFamily="sans-serif"
      fontSize="9"
      fontWeight="900"
      textAnchor="middle"
      letterSpacing="0.2"
    >
      ISI
    </text>
  </svg>
);

const IEEMAEmblem = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors"
  >
    <circle cx="20" cy="20" r="12" />
    <circle cx="20" cy="20" r="8" strokeDasharray="3 2" />
    <path d="M20 5 V35 M5 20 H35" />
  </svg>
);

const ELCINAEmblem = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors"
  >
    <rect x="10" y="10" width="20" height="20" rx="2" />
    <path d="M15 10 V6 M25 10 V6 M15 30 V34 M25 30 V34 M10 15 H6 M10 25 H6 M30 15 H34 M30 25 H34" />
    <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
  </svg>
);

const ELECRAMAEmblem = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors"
  >
    <circle cx="20" cy="20" r="14" />
    <circle cx="20" cy="20" r="8" />
    <path d="M6 20 A14 7 0 0 0 34 20 A14 7 0 0 0 6 20 Z" />
    <path d="M20 6 A7 14 0 0 0 20 34 A7 14 0 0 0 20 6 Z" />
  </svg>
);

const NEAEmblem = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors"
  >
    <path d="M12 10 H28 V22 C28 27 20 32 20 32 C20 32 12 27 12 22 V10 Z" />
    <path d="M17 6 V10 M23 6 V10 M20 32 V36" />
  </svg>
);

const CapacitanceIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
  >
    <path
      d="M5 20 C10 10 15 30 20 20 C25 10 30 30 35 20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="18" strokeWidth="1.2" strokeOpacity="0.2" />
  </svg>
);

const DissipationIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
  >
    <path
      d="M10 20 H16 L19 12 L22 28 L25 20 H30"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 30 A8 8 0 0 1 28 30" strokeWidth="1.2" strokeDasharray="2 2" />
    <circle cx="20" cy="20" r="18" strokeWidth="1.2" strokeOpacity="0.2" />
  </svg>
);

const InsulationIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
  >
    <path
      d="M20 7 L32 12 V24 C32 31 20 35 20 35 C20 35 8 31 8 24 V12 L20 7 Z"
      strokeWidth="1.8"
    />
    <path
      d="M21 13 L15 22 H21 L19 27 L25 18 H19 L21 13 Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const ThermalIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
  >
    <circle cx="20" cy="20" r="8" strokeWidth="1.8" />
    <path d="M20 5 V10 M20 30 V35 M5 20 H10 M30 20 H35" />
    <path d="M20 20 L27 13" strokeWidth="1.8" />
    <circle cx="20" cy="20" r="18" strokeWidth="1.2" strokeOpacity="0.2" />
  </svg>
);

const SealIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
  >
    <path
      d="M14 18 V14 A6 6 0 1 1 26 14 V18 H14 Z M11 18 H29 V31 C29 33 27 35 25 35 H15 C13 35 11 33 11 31 V18 Z"
      strokeWidth="1.8"
    />
    <circle cx="20" cy="25.5" r="2.5" fill="currentColor" />
  </svg>
);

const certifications = [
  {
    title: "ISO 9001:2015 Certification",
    subtitle: "Quality Management Systems",
    desc: "Our manufacturing facility operates under strict ISO 9001:2015 protocols, ensuring traceability, document controls, and standardized assembly line workflows.",
    logo: ISOLogo,
  },
  {
    title: "CE Compliance Certification",
    subtitle: "European Safety Standards",
    desc: "All ARCOS capacitors carry CE certifications, indicating compliance with mandatory health, safety, and environmental protection legislation in the European Economic Area.",
    logo: CELogo,
  },
  {
    title: "RoHS Directives Compliance",
    subtitle: "Eco-Friendly Construction",
    desc: "Strict adherence to Restriction of Hazardous Substances (RoHS) rules. ARCOS components are lead-free and free of mercury, cadmium, and hexavalent chromium.",
    logo: RoHSLogo,
  },
  {
    title: "ISI National Standards",
    subtitle: "BIS Mark of Safety",
    desc: "Capacitors meet Bureau of Indian Standards (BIS) IS 1709 / IS 2993 requirements, verifying thermal safety, moisture-resistance, and high torque ratings.",
    logo: ISILogo,
  },
];

const industryAssociations = [
  {
    name: "IEEMA",
    fullname: "Indian Electrical & Electronics Manufacturers' Association",
    emblem: IEEMAEmblem,
  },
  {
    name: "ELCINA",
    fullname: "Electronic Industries Association of India",
    emblem: ELCINAEmblem,
  },
  {
    name: "ELECRAMA",
    fullname: "World's Largest Electrical Industry Showcase Affiliate",
    emblem: ELECRAMAEmblem,
  },
  {
    name: "NEA",
    fullname: "National Electrical Association",
    emblem: NEAEmblem,
  },
];

const testingChecks = [
  {
    id: "check-1",
    title: "Capacitance & Tolerance Scan",
    desc: "100% in-line checks to ensure final capacitors measure precisely within specified ±5% or custom ±1% microfarad tolerance bands.",
    icon: CapacitanceIcon,
  },
  {
    id: "check-2",
    title: "Dissipation Factor Verification",
    desc: "Measures dielectric losses under active frequency loads to guarantee low energy dissipation and heat prevention.",
    icon: DissipationIcon,
  },
  {
    id: "check-3",
    title: "High-Voltage Insulation Leakage",
    desc: "Stress-testing terminal insulation against 2x rated voltage lines to detect micro-corrosion paths and prevent leakage currents.",
    icon: InsulationIcon,
  },
  {
    id: "check-4",
    title: "Thermal Stress Cycling",
    desc: "Baking components inside environmental test chambers across -40°C to +85°C ranges to evaluate raw materials thermal stability.",
    icon: ThermalIcon,
  },
  {
    id: "check-5",
    title: "Hermetic Seal Integrity",
    desc: "Pressure and seal inspection of plastic and aluminum cans to ensure zero epoxy resin leakage and protection against moisture.",
    icon: SealIcon,
  },
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
          Quality remains at the core of ARCOS manufacturing operations. We
          follow stringent quality standards supported by advanced manufacturing
          processes and inspection procedures.
        </p>
      </section>

      {/* 2. Warranty Announcement Block */}
      <section className="bg-gradient-to-r from-primary to-primary-dark rounded-[30px] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden group hover:shadow-primary/20 transition-all duration-300">
        <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        {/* Background watermark shield vector */}
        <div className="absolute right-12 bottom-0 top-0 w-80 opacity-[0.08] pointer-events-none hidden lg:block transform group-hover:scale-105 transition-transform duration-700">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="w-full h-full text-white"
          >
            <path d="M50 10 L85 22 V55 C85 75 50 90 50 90 C50 90 15 75 15 55 V22 L50 10 Z" />
            <path
              d="M50 20 L77 30 V55 C77 70 50 82 50 82 C50 82 23 70 23 55 V30 L50 20 Z"
              strokeWidth="0.5"
              strokeDasharray="3 3"
            />
            <circle cx="50" cy="48" r="12" />
            <path
              d="M43 48 L48 53 L58 43"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest bg-white/15 px-3.5 py-1 rounded-full border border-white/10 inline-block">
              Manufacturer Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              12-Month Mechanical & Electrical Warranty
            </h2>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-2xl">
              All ARCOS capacitors carry a 12-month replacement warranty against
              manufacturing defects. Our self-healing polypropylene film and
              explosion-proof interrupters ensure your industrial equipment is
              safe from outages.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center sm:justify-start lg:justify-end">
            <div className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4 hover:bg-white/15 transition-colors duration-300">
              <HeartHandshake className="h-10 w-10 text-white shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider block opacity-75">
                  Certified Service
                </span>
                <span className="text-sm font-bold block">
                  100% OEM Protection
                </span>
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
            ARCOS capacitors undergo verification audits to satisfy national and
            global electrical safety benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const Logo = cert.logo;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0 self-start mt-1">
                  <Logo />
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
            From film winding to outer encapsulation, our quality controllers
            test random batch units against high torque start limits, thermal
            stress stability, and voltage loss indexes to prevent failure rates
            at client end.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl flex items-center gap-3">
            <Settings className="h-5 w-5 text-zinc-400 shrink-0" />
            <span className="text-[10px] text-zinc-500 font-semibold uppercase leading-snug tracking-wider">
              Equipped with computerized capacitance testers & chambers
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {testingChecks.map((check) => {
            const Icon = check.icon;
            return (
              <div
                key={check.id}
                className="bg-white border border-zinc-150 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/5 group-hover:bg-primary/10 border border-primary/10 group-hover:border-primary/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Icon />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 group-hover:text-primary transition-colors duration-300">
                    {check.title}
                  </h4>
                  <p className="text-zinc-550 text-xs mt-1 leading-relaxed">
                    {check.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Industry Associations Grid */}
      <section className="bg-zinc-50 border border-zinc-200 rounded-[30px] p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">
            Industry Associations
          </h3>
          <p className="text-zinc-600 text-xs mt-2">
            ARCOS (M.G. Industries) is an active affiliate member of premier
            electronics and electrical associations in India.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industryAssociations.map((assoc, idx) => {
            const Emblem = assoc.emblem;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200/60 p-6 rounded-xl text-center space-y-3 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                  <Emblem />
                </div>
                <div className="space-y-1">
                  <span className="text-primary font-extrabold text-base tracking-wider block group-hover:scale-105 transition-transform duration-300">
                    {assoc.name}
                  </span>
                  <span className="text-zinc-550 text-[10px] font-medium leading-tight block">
                    {assoc.fullname}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
