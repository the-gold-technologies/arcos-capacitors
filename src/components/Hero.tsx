"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-10 pb-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Zap className="h-3 w-3 animate-pulse" /> Established in 2015
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1] font-sans"
          >
            India&apos;s Trusted Manufacturer of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark text-glow">
              Capacitors, Cable Clips & Ties
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl"
          >
            Precision-engineered electrical components designed for OEMs,
            industrial buyers, and global distribution. Engineered for superior
            performance, durability, and long service life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(210,35,42,0.3)] hover:shadow-[0_4px_30px_rgba(210,35,42,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-950 text-white hover:bg-zinc-800 font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
            >
              <FileText className="h-5 w-5 text-zinc-350" />
              View Catalog
            </Link>
          </motion.div>
        </div>

        {/* Right SVG Graphic Column - Non-boring 3D effect */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            className="relative w-full max-w-[400px] h-[400px]"
          >
            {/* Back glowing aura */}
            <div className="absolute inset-0 bg-primary/35 rounded-full filter blur-[90px] animate-pulse-slow z-0" />
            <div className="absolute inset-10 bg-primary-light/20 rounded-full filter blur-[70px] z-0 animate-pulse" />

            {/* Dynamic Tech Grid SVG background */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full z-10 opacity-70"
            >
              <circle
                cx="200"
                cy="200"
                r="160"
                stroke="rgba(9,9,11,0.06)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="rgba(210,35,42,0.5)"
                strokeWidth="1.5"
              />

              {/* Tech HUD crosshairs */}
              <path
                d="M 200 10 L 200 45 M 200 355 L 200 390 M 10 200 L 45 200 M 355 200 L 390 200"
                stroke="rgba(255,0,0,0.9)"
                strokeWidth="2"
              />

              {/* Rotating HUD circle */}
              <motion.circle
                cx="200"
                cy="200"
                r="140"
                stroke="rgba(255,0,0,0.8)"
                strokeWidth="2"
                strokeDasharray="40 180"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
            </svg>

            {/* Core Cylinder Capacitor (CSS & SVG 3D representation) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <svg
                viewBox="0 0 200 300"
                className="w-[180px] h-[270px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              >
                <defs>
                  {/* 3D cylindrical lighting gradient */}
                  <linearGradient
                    id="cylinderGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8d1317" />
                    <stop offset="25%" stopColor="#d2232a" />
                    <stop offset="55%" stopColor="#ff4d55" />
                    <stop offset="80%" stopColor="#d2232a" />
                    <stop offset="100%" stopColor="#5c0b0e" />
                  </linearGradient>
                  {/* Metal cap gradient */}
                  <linearGradient
                    id="metalGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#555" />
                    <stop offset="30%" stopColor="#d5d5d5" />
                    <stop offset="60%" stopColor="#fefefe" />
                    <stop offset="85%" stopColor="#777" />
                    <stop offset="100%" stopColor="#333" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    x="-10%"
                    y="-10%"
                    width="120%"
                    height="120%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="8"
                      stdDeviation="6"
                      floodOpacity="0.4"
                    />
                  </filter>
                </defs>

                {/* Metallic terminal pins at top */}
                <line
                  x1="80"
                  y1="40"
                  x2="80"
                  y2="70"
                  stroke="url(#metalGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <line
                  x1="120"
                  y1="40"
                  x2="120"
                  y2="70"
                  stroke="url(#metalGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx="80" cy="40" r="7" fill="#ccc" />
                <circle cx="120" cy="40" r="7" fill="#ccc" />

                {/* Metallic Top Cap (Ellipse) */}
                <ellipse
                  cx="100"
                  cy="70"
                  rx="60"
                  ry="15"
                  fill="url(#metalGrad)"
                />

                {/* Main Cylinder Body */}
                <path
                  d="M 40 70 
                     L 40 230 
                     A 60 15 0 0 0 160 230 
                     L 160 70 
                     A 60 15 0 0 1 40 70 Z"
                  fill="url(#cylinderGrad)"
                />

                {/* ARCOS Brand Stamp on Capacitor */}
                <ellipse
                  cx="100"
                  cy="120"
                  rx="35"
                  ry="8"
                  fill="rgba(0,0,0,0.15)"
                />
                <text
                  x="100"
                  y="125"
                  fill="#ffffff"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="2"
                >
                  ARCOS
                </text>
                <text
                  x="100"
                  y="145"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="1"
                >
                  25.0 μF ±5%
                </text>
                <text
                  x="100"
                  y="160"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="9"
                  textAnchor="middle"
                >
                  450V AC 50/60Hz
                </text>

                {/* Bottom Cap Rim */}
                <ellipse
                  cx="100"
                  cy="230"
                  rx="60"
                  ry="15"
                  fill="url(#cylinderGrad)"
                  opacity="0.9"
                />
                <ellipse
                  cx="100"
                  cy="230"
                  rx="60"
                  ry="15"
                  fill="none"
                  stroke="#5c0b0e"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
