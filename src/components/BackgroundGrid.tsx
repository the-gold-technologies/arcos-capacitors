"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-dark-bg">
      {/* Underlying dark base */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 grid-bg-lines opacity-40" />

      {/* Grid Dots */}
      <div className="absolute inset-0 grid-bg-dots opacity-60" />

      {/* Ambient Red Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[-5%] h-[600px] w-[600px] rounded-full bg-primary/8 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-primary/12 blur-[130px]"
      />

      {/* Diagonal scanline/shimmer effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          background: "linear-gradient(45deg, rgba(210,35,42,0.8) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
