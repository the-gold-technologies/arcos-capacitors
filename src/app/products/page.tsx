"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, Boxes } from "lucide-react";
import CapacitorsTab from "@/components/CapacitorsTab";
import ClipsTab from "@/components/ClipsTab";
import TiesTab from "@/components/TiesTab";
import QuoteDrawer from "@/components/QuoteDrawer";

export interface QuoteProduct {
  id: string;
  name: string;
  capacitance?: string;
  voltage?: string;
  type?: string;
}

type ProductTab = "capacitors" | "clips" | "ties";

export default function Products() {
  const [activeTab, setActiveTab] = useState<ProductTab>("capacitors");
  const [quoteProduct, setQuoteProduct] = useState<QuoteProduct | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab === "clips" || tab === "ties" || tab === "capacitors") {
        setActiveTab(tab);
      }
    }
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      {/* Ambient background glows to reduce stark white space */}
      <div className="absolute top-[20%] -left-[10%] h-[350px] w-[350px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -right-[10%] h-[350px] w-[350px] rounded-full bg-primary/5 filter blur-[100px] pointer-events-none -z-10" />

      {/* 1. Page Header */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">
          Product Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mt-3">
          Precision Engineering Specs
        </h1>
        <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed">
          Select a category to view dimensions, capacity thresholds, materials, and request
          quote estimates.
        </p>
      </section>

      {/* 2. Switcher Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex p-1 rounded-full bg-zinc-200/50 border border-zinc-200/80 relative max-w-full overflow-x-auto scrollbar-none backdrop-blur-sm">
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
                className={`relative px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5 sm:gap-2 transition-colors duration-300 shrink-0 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProductTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(210,35,42,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 relative z-10 shrink-0" />
                <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
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
