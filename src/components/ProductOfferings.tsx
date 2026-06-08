"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Layers, Boxes, Wrench, ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";

const cards = [
  {
    colClass: "md:col-span-7",
    icon: Cpu,
    title: "Electrical Capacitors",
    desc: "ARCOS manufactures a comprehensive range of electrical capacitors designed for demanding industrial and OEM applications. We offer Fan, Motor Run, Washing Machine, Air Conditioner, Submersible Pump, and Power Factor Correction Capacitors.",
    tags: ["Fan", "Motor Run", "Submersible", "HVAC", "APFC Panels"],
    meta: "Capacitance Range: 1 - 100 μF",
    link: { href: "/products", label: "Explore Capacitors" },
  },
  {
    colClass: "md:col-span-5",
    icon: Layers,
    title: "Cable Clips",
    desc: "ARCOS offers cable clips that support secure cable routing and organized electrical installations across residential, commercial, and industrial projects.",
    tags: [],
    meta: "All standard shapes & diameters",
    link: { href: "/products", label: "View Specs" },
  },
  {
    colClass: "md:col-span-5",
    icon: Boxes,
    title: "Nylon Cable Ties",
    desc: "ARCOS supplies cable ties for cable bundling, wire management, and industrial fastening applications including electrical panels and wire harnesses.",
    tags: [],
    meta: "High Tensile Strengths",
    link: { href: "/products", label: "View Specs" },
  },
  {
    colClass: "md:col-span-7",
    icon: Wrench,
    title: "Private Label & OEM Support",
    desc: "We design and manufacture capacitors customized with your company branding, technical parameters, and specific terminal connectors. Fully aligned with international electrical specifications.",
    tags: [],
    meta: "Fast production turnaround",
    link: { href: "/contact", label: "Request OEM Details" },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function ProductOfferings() {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] -left-10 h-[300px] w-[300px] rounded-full bg-primary/8 filter blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] -right-10 h-[280px] w-[280px] rounded-full bg-primary/5 filter blur-[90px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-3">
            Diversified Electrical Component Portfolio
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-4">
            ARCOS manufactures a comprehensive range of electrical and cable
            management products designed for industrial, commercial, infrastructure,
            OEM, and electrical installation applications.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
                className={`${card.colClass} rounded-3xl glassmorphism p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border border-zinc-200/40 relative overflow-hidden group shadow-lg will-change-transform`}
              >
                {/* Shimmer shine on hover */}
                <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[350%] transition-transform duration-700 ease-out z-0 pointer-events-none" />

                {/* Ambient Red glow background on hover */}
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 group-hover:bg-primary/12 blur-3xl transition-colors duration-700" />

                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 mt-6 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mt-3 max-w-md">
                    {card.desc}
                  </p>
                </div>

                {card.tags.length > 0 && (
                  <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                    {card.tags.map((type) => (
                      <span
                        key={type}
                        className="text-[11px] font-semibold bg-zinc-100 border border-zinc-200/50 px-3 py-1 rounded-full text-zinc-600"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                )}

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-8 border-t border-zinc-200/60 pt-4">
                  <span className="text-xs text-zinc-500">{card.meta}</span>
                  <Link
                    href={card.link.href}
                    className="inline-flex items-center gap-1.5 text-primary-light hover:text-primary text-sm font-semibold transition-colors duration-200 group/link"
                  >
                    {card.link.label}
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300 ease-out" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
