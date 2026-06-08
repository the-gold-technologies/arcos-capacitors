"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, CheckCircle, ArrowRight } from "lucide-react";
import { EASE, fadeUpVariants, slideInLeft, slideInRight, staggerContainer, cardVariants } from "@/lib/motion";

const briefStrengths = [
  "Quality culture driven by innovation",
  "Premium raw materials & strict QC",
  "25,000 units daily capacity",
  "ISO Certified manufacturing",
  "CE, RoHS & ISI compliant products",
  "OEM & private label support",
];

const strengthItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export default function AboutBrief() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Black primary background skewed */}
      <div className="absolute inset-0 bg-[#0d0d11] -skew-y-2 origin-top-left z-0 h-[calc(100%+80px)] w-full" />

      {/* Background glowing red accents */}
      <div className="absolute top-[10%] right-[-5%] h-[300px] w-[300px] rounded-full bg-primary/10 filter blur-[100px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[250px] w-[250px] rounded-full bg-primary/8 filter blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Factory Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-5 relative flex justify-center h-[350px] lg:h-[450px] w-full"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform -rotate-2 transition-transform duration-700 hover:rotate-0">
            <img
              src="/arcos_factory_floor.png"
              alt="ARCOS Factory Noida"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/20 to-transparent pointer-events-none" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6, ease: EASE }}
            className="absolute bottom-6 left-6 right-6 sm:left-12 sm:right-6 bg-black rounded-2xl p-5 border border-white/10 shadow-2xl transform translate-x-2 translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-transform duration-500 ease-out"
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shrink-0">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base">Premium Materials Only</h4>
                <p className="text-zinc-400 text-xs leading-normal mt-1">
                  We formulate capacitors using structural self-healing metallized films and
                  premium insulating oils to protect against voltage fluctuations.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: About Info */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <motion.span
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary text-sm font-bold uppercase tracking-wider"
          >
            About ARCOS
          </motion.span>

          <motion.h2
            custom={0.08}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3"
          >
            Reliable Electrical Products Built on Precision Engineering
          </motion.h2>

          <motion.p
            custom={0.16}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-6"
          >
            ARCOS, a brand of M.G. Industries, is a leading manufacturer and supplier of
            premium-quality electrical capacitors engineered for superior performance, durability,
            and long service life. Established in 2015, the company has built a strong reputation
            among OEM manufacturers, appliance brands, motor manufacturers, pump manufacturers,
            and electrical distributors.
          </motion.p>

          <motion.p
            custom={0.24}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4"
          >
            Operating from a modern 20,000 sq. ft. manufacturing facility in Noida, ARCOS
            manufactures up to 25,000 capacitors per day using advanced machinery, stringent
            quality control systems, and innovation-driven engineering.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.07, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full"
          >
            {briefStrengths.map((strength, i) => (
              <motion.div key={i} variants={strengthItemVariants} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-zinc-300 text-sm">{strength}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            custom={0.5}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-primary-light hover:text-white font-semibold text-sm transition-colors duration-300 group"
            >
              Read Our Full Story
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
