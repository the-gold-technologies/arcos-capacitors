"use client";

import React from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative py-16 mb-24 overflow-hidden rounded-[30px] border border-white/5">
      <div className="absolute inset-0 bg-[#0c0c10] z-0" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-1 px-8 md:px-12">
        {/* Vision column */}
        <div className="p-8 flex flex-col justify-between items-start gap-6 border-b md:border-b-0 md:border-r border-white/5 md:pr-12">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
            <Eye className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
              To become a trusted global manufacturer of electrical capacitors and allied electrical products through innovation, engineering excellence, and customer-centric manufacturing.
            </p>
          </div>
        </div>

        {/* Mission column */}
        <div className="p-8 flex flex-col justify-between items-start gap-6 md:pl-12">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
              To provide reliable, cost-effective, and technologically advanced electrical components that help customers improve product performance and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
