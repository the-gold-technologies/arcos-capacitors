"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ArrowRight, FileText } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-10 pb-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Zap className="h-3 w-3 animate-pulse" /> Established in 2015
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1] font-sans"
          >
            India&apos;s Trusted Manufacturer of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark text-glow">
              Capacitors, Cable Clips &amp; Ties
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl"
          >
            Precision-engineered electrical components designed for OEMs,
            manufacturers, distributors, and industrial applications.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(210,35,42,0.3)] hover:shadow-[0_4px_34px_rgba(210,35,42,0.52)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 ease-out group"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-950 text-white hover:bg-zinc-800 font-semibold rounded-full hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 ease-out shadow-md"
            >
              <FileText className="h-5 w-5 text-zinc-350" />
              View Catalog
            </Link>
          </motion.div>
        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 60, damping: 16 }}
            className="relative w-full max-w-[400px] h-[400px]"
          >
            {/* Back glowing aura */}
            <div className="absolute inset-0 bg-primary/35 rounded-full filter blur-[90px] animate-pulse-slow z-0" />
            <div className="absolute inset-10 bg-primary-light/20 rounded-full filter blur-[70px] z-0 animate-pulse" />

            {/* Tech Grid SVG background */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full z-10 opacity-70">
              <circle
                cx="200" cy="200" r="160"
                stroke="rgba(9,9,11,0.06)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx="200" cy="200" r="120"
                stroke="rgba(210,35,42,0.5)"
                strokeWidth="1.5"
              />
              {/* HUD crosshairs */}
              <path
                d="M 200 10 L 200 45 M 200 355 L 200 390 M 10 200 L 45 200 M 355 200 L 390 200"
                stroke="rgba(255,0,0,0.9)"
                strokeWidth="2"
              />
              {/* Rotating HUD ring */}
              <motion.circle
                cx="200" cy="200" r="140"
                stroke="rgba(255,0,0,0.8)"
                strokeWidth="2"
                strokeDasharray="40 180"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
              {/* Counter-rotating accent ring */}
              <motion.circle
                cx="200" cy="200" r="105"
                stroke="rgba(255,80,80,0.25)"
                strokeWidth="1"
                strokeDasharray="10 30"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
            </svg>

            {/* Floating Capacitor SVG */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <svg
                viewBox="0 0 200 300"
                className="w-[180px] h-[270px] drop-shadow-[0_15px_32px_rgba(0,0,0,0.65)]"
              >
                <defs>
                  <linearGradient id="cylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#8d1317" />
                    <stop offset="25%"  stopColor="#d2232a" />
                    <stop offset="55%"  stopColor="#ff4d55" />
                    <stop offset="80%"  stopColor="#d2232a" />
                    <stop offset="100%" stopColor="#5c0b0e" />
                  </linearGradient>
                  <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#555" />
                    <stop offset="30%"  stopColor="#d5d5d5" />
                    <stop offset="60%"  stopColor="#fefefe" />
                    <stop offset="85%"  stopColor="#777" />
                    <stop offset="100%" stopColor="#333" />
                  </linearGradient>
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.4" />
                  </filter>
                </defs>

                {/* Metallic terminal pins */}
                <line x1="80" y1="40" x2="80" y2="70" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="round" />
                <line x1="120" y1="40" x2="120" y2="70" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="round" />
                <circle cx="80" cy="40" r="7" fill="#ccc" />
                <circle cx="120" cy="40" r="7" fill="#ccc" />

                {/* Top cap */}
                <ellipse cx="100" cy="70" rx="60" ry="15" fill="url(#metalGrad)" />

                {/* Main body */}
                <path
                  d="M 40 70 L 40 230 A 60 15 0 0 0 160 230 L 160 70 A 60 15 0 0 1 40 70 Z"
                  fill="url(#cylinderGrad)"
                />

                {/* Brand text */}
                <ellipse cx="100" cy="120" rx="35" ry="8" fill="rgba(0,0,0,0.15)" />
                <text x="100" y="125" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="2">ARCOS</text>
                <text x="100" y="145" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">25.0 μF ±5%</text>
                <text x="100" y="160" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">450V AC 50/60Hz</text>

                {/* Bottom cap */}
                <ellipse cx="100" cy="230" rx="60" ry="15" fill="url(#cylinderGrad)" opacity="0.9" />
                <ellipse cx="100" cy="230" rx="60" ry="15" fill="none" stroke="#5c0b0e" strokeWidth="2" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
