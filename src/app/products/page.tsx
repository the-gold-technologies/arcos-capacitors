"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, Boxes } from "lucide-react";
import CapacitorsTab from "@/components/CapacitorsTab";
import ClipsTab from "@/components/ClipsTab";
import TiesTab from "@/components/TiesTab";
import QuoteDrawer from "@/components/QuoteDrawer";

type ProductTab = "capacitors" | "clips" | "ties";

export default function Products() {
  const [activeTab, setActiveTab] = useState<ProductTab>("capacitors");
  const [quoteProduct, setQuoteProduct] = useState<any | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      {/* 1. Page Header */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">
          Product Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Precision Engineering Specs
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Select a category to view dimensions, capacity thresholds, materials, and request
          quote estimates.
        </p>
      </section>

      {/* 2. Switcher Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex p-1.5 rounded-full bg-[#121218] border border-white/5 relative">
          {([
            { id: "capacitors", label: "Capacitors", icon: Cpu },
            { id: "clips", label: "Cable Clips", icon: Layers },
            { id: "ties", label: "Cable Ties", icon: Boxes },
          ] as const).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Tab Contents */}
      <AnimatePresence mode="wait">
        {activeTab === "capacitors" && (
          <CapacitorsTab key="capacitors" onOpenQuote={setQuoteProduct} />
        )}
        {activeTab === "clips" && <ClipsTab key="clips" onOpenQuote={setQuoteProduct} />}
        {activeTab === "ties" && <TiesTab key="ties" onOpenQuote={setQuoteProduct} />}
      </AnimatePresence>

      {/* 4. Slide-over Quote Drawer */}
      <AnimatePresence>
        {quoteProduct && (
          <QuoteDrawer product={quoteProduct} onClose={() => setQuoteProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
