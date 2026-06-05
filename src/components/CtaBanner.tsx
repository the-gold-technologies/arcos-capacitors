"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark p-12 sm:p-16 border border-primary/30 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
        {/* Animated decorative shapes in background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Upgrade Your Component Supply?
          </h2>
          <p className="mt-4 text-zinc-100 text-sm sm:text-base opacity-90 max-w-xl">
            Get customized quotation lists, price rates, and order estimates
            for your custom specifications. Contact our sales office in Noida
            today.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link 
            href="/contact?type=quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-extrabold rounded-full hover:bg-zinc-100 hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 shadow-xl"
          >
            Get Custom Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
