"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";

export default function CtaBanner() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: EASE }}
        className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark p-12 sm:p-16 border border-primary/30 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
      >
        {/* Animated radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

        {/* Subtle animated orb */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-2xl pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
          className="relative z-10 max-w-2xl text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Upgrade Your Component Supply?
          </h2>
          <p className="mt-4 text-zinc-100 text-sm sm:text-base opacity-90 max-w-xl">
            Get customized quotation lists, price rates, and order estimates
            for your custom specifications. Get Quote or Get Price List directly from our sales representatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
          className="relative z-10 shrink-0"
        >
          <Link
            href="/contact?type=quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 font-extrabold rounded-full hover:bg-zinc-100 hover:scale-[1.06] active:scale-[0.96] transition-all duration-300 ease-out shadow-xl group"
          >
            Get Custom Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
