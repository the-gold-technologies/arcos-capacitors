"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Boxes,
} from "lucide-react";

const navItems = [
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
    dropdownType: "products",
  },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Standards", href: "#", hasDropdown: true, dropdownType: "quality" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsHovered, setProductsHovered] = useState(false);
  const [qualityHovered, setQualityHovered] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileQualityOpen, setMobileQualityOpen] = useState(false);
  const [mobileCapacitorsOpen, setMobileCapacitorsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<
    "capacitors" | "clips" | "ties"
  >("capacitors");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/85 backdrop-blur-md border-b border-zinc-200 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-12 flex items-center justify-center">
              {/* Custom SVG logo based on ARCOS icon */}
              <svg
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full transform group-hover:scale-105 transition-transform duration-300"
              >
                {/* Logo Red Curve with 3D gradient look */}
                <defs>
                  <linearGradient
                    id="logoGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff4d55" />
                    <stop offset="60%" stopColor="#d2232a" />
                    <stop offset="100%" stopColor="#8d1317" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* The curved 3D A ribbon shape */}
                <path
                  d="M15 70 
                     C 30 25, 40 5, 52 10 
                     C 62 14, 52 45, 68 50 
                     C 80 54, 90 54, 95 54
                     L 92 63
                     C 82 63, 76 63, 62 58
                     C 48 53, 50 25, 44 28
                     C 38 31, 26 55, 20 70
                     Z"
                  fill="url(#logoGrad)"
                  filter="url(#glow)"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-zinc-900 font-sans m-0 leading-none">
                ARCOS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-semibold leading-none mt-1">
                Capacitors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glassmorphism-light px-4 rounded-full">
            {navItems.map((item) => {
              const isActive = item.hasDropdown
                ? (item.dropdownType === "products" &&
                    pathname.startsWith("/products")) ||
                  (item.dropdownType === "quality" &&
                    (pathname.startsWith("/quality") ||
                      pathname.startsWith("/industries")))
                : pathname === item.href;

              if (item.hasDropdown) {
                if (item.dropdownType === "products") {
                  return (
                    <div
                      key={item.name}
                      className="relative py-2"
                      onMouseEnter={() => setProductsHovered(true)}
                      onMouseLeave={() => setProductsHovered(false)}
                    >
                      <button
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-1 cursor-pointer focus:outline-none ${
                          isActive
                            ? "text-zinc-900"
                            : "text-zinc-500 hover:text-zinc-900"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full z-[-1]"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-300 ${productsHovered ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Hover Dropdown */}
                      <AnimatePresence>
                        {productsHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white border border-zinc-200 rounded-[24px] shadow-xl p-4 flex gap-4 z-50 text-left"
                          >
                            {/* Left Pane: Categories */}
                            <div className="w-[170px] border-r border-zinc-100 pr-2 flex flex-col gap-1 shrink-0">
                              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-3 py-1 mb-2 block">
                                Categories
                              </span>
                              <button
                                onMouseEnter={() => {
                                  setHoveredCategory("capacitors");
                                }}
                                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                                  hoveredCategory === "capacitors"
                                    ? "bg-primary/10 text-primary"
                                    : "text-zinc-650 hover:bg-zinc-50 hover:text-zinc-900"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <Cpu className="h-4 w-4" /> Capacitors
                                </span>
                                <ArrowRight
                                  className={`h-3 w-3 transition-transform ${hoveredCategory === "capacitors" ? "translate-x-0.5" : "opacity-0"}`}
                                />
                              </button>

                              <button
                                onMouseEnter={() => {
                                  setHoveredCategory("clips");
                                }}
                                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                                  hoveredCategory === "clips"
                                    ? "bg-primary/10 text-primary"
                                    : "text-zinc-650 hover:bg-zinc-50 hover:text-zinc-900"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <Layers className="h-4 w-4" /> PE Cable Clips
                                </span>
                                <ArrowRight
                                  className={`h-3 w-3 transition-transform ${hoveredCategory === "clips" ? "translate-x-0.5" : "opacity-0"}`}
                                />
                              </button>

                              <button
                                onMouseEnter={() => {
                                  setHoveredCategory("ties");
                                }}
                                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                                  hoveredCategory === "ties"
                                    ? "bg-primary/10 text-primary"
                                    : "text-zinc-650 hover:bg-zinc-50 hover:text-zinc-900"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <Boxes className="h-4 w-4" /> Nylon Cable Ties
                                </span>
                                <ArrowRight
                                  className={`h-3 w-3 transition-transform ${hoveredCategory === "ties" ? "translate-x-0.5" : "opacity-0"}`}
                                />
                              </button>
                            </div>

                            {/* Right Pane: Dynamic Content */}
                            <div className="flex-1 pl-3 flex flex-col justify-between py-1">
                              {hoveredCategory === "capacitors" && (
                                <div>
                                  <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest block pb-2 mb-3 border-b border-zinc-50">
                                    Capacitor Sub-products
                                  </span>
                                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                                    {[
                                      { name: "Fan Capacitors", id: "fan" },
                                      { name: "Motor Run", id: "motor" },
                                      {
                                        name: "Washing Machine",
                                        id: "washing",
                                      },
                                      { name: "Air Conditioner", id: "ac" },
                                      {
                                        name: "Submersible Pump",
                                        id: "submersible",
                                      },
                                      { name: "Power Factor (PFC)", id: "pfc" },
                                      { name: "Square Body", id: "square" },
                                      {
                                        name: "Lighting Capacitors",
                                        id: "lighting",
                                      },
                                    ].map((sub) => (
                                      <Link
                                        key={sub.id}
                                        href={`/products/capacitors/${sub.id}`}
                                        onClick={() =>
                                          setProductsHovered(false)
                                        }
                                        className="text-[11px] text-zinc-600 hover:text-primary transition-colors py-1.5 px-2 rounded-lg hover:bg-zinc-50 block font-semibold leading-none"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {hoveredCategory === "clips" && (
                                <div className="space-y-4">
                                  <div>
                                    <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest block pb-2 mb-3 border-b border-zinc-50">
                                      PE Cable Clips
                                    </span>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
                                      ARCOS offers flat and round PE plastic
                                      cable clips, fitted with pre-inserted
                                      rust-resistant hardened steel nails. Ideal
                                      for quick, reliable masonry wiring
                                      layouts.
                                    </p>
                                  </div>
                                  <Link
                                    href="/products?tab=clips"
                                    onClick={() => setProductsHovered(false)}
                                    className="inline-flex items-center gap-1 text-xs text-primary font-bold hover:underline"
                                  >
                                    Open Clips Catalog{" "}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </Link>
                                </div>
                              )}

                              {hoveredCategory === "ties" && (
                                <div className="space-y-4">
                                  <div>
                                    <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest block pb-2 mb-3 border-b border-zinc-50">
                                      Nylon Cable Ties
                                    </span>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
                                      UL-approved heavy duty self-locking Nylon
                                      66 ties. High tensile strength, zero-slip
                                      head latches, and carbon black UV outdoor
                                      specifications.
                                    </p>
                                  </div>
                                  <Link
                                    href="/products?tab=ties"
                                    onClick={() => setProductsHovered(false)}
                                    className="inline-flex items-center gap-1 text-xs text-primary font-bold hover:underline"
                                  >
                                    Open Ties Catalog{" "}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </Link>
                                </div>
                              )}

                              <div className="border-t border-zinc-100 pt-3 mt-3">
                                <Link
                                  href="/products"
                                  onClick={() => setProductsHovered(false)}
                                  className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 hover:text-primary transition-colors flex items-center gap-1"
                                >
                                  View All Products{" "}
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                } else if (item.dropdownType === "quality") {
                  return (
                    <div
                      key={item.name}
                      className="relative py-2"
                      onMouseEnter={() => setQualityHovered(true)}
                      onMouseLeave={() => setQualityHovered(false)}
                    >
                      <button
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-1 cursor-pointer focus:outline-none ${
                          isActive
                            ? "text-zinc-900"
                            : "text-zinc-500 hover:text-zinc-900"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full z-[-1]"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-300 ${qualityHovered ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {qualityHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-white border border-zinc-200 rounded-[20px] shadow-xl p-3 z-50 text-left flex flex-col gap-1"
                          >
                            <Link
                              href="/quality"
                              onClick={() => setQualityHovered(false)}
                              className="w-full text-left py-2 px-3 rounded-xl text-xs font-bold text-zinc-700 hover:bg-primary/10 hover:text-primary transition-all duration-200 block"
                            >
                              Quality & Certifications
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setQualityHovered(false)}
                              className="w-full text-left py-2 px-3 rounded-xl text-xs font-bold text-zinc-700 hover:bg-primary/10 hover:text-primary transition-all duration-200 block"
                            >
                              Industries
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons Group */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full overflow-hidden group shadow-[0_0_15px_rgba(210,35,42,0.3)] hover:shadow-[0_0_25px_rgba(210,35,42,0.6)] transition-all duration-300"
            >
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary-light to-primary-dark transition-transform duration-300 ease-out z-0" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-white/95 backdrop-blur-md border-l border-zinc-200 px-6 py-8 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="relative h-8 w-10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 100 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                      >
                        <defs>
                          <linearGradient
                            id="mobileLogoGrad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#ff4d55" />
                            <stop offset="60%" stopColor="#d2232a" />
                            <stop offset="100%" stopColor="#8d1317" />
                          </linearGradient>
                          <filter id="mobileGlow">
                            <feGaussianBlur
                              stdDeviation="3"
                              result="coloredBlur"
                            />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          d="M15 70 
                             C 30 25, 40 5, 52 10 
                             C 62 14, 52 45, 68 50 
                             C 80 54, 90 54, 95 54
                             L 92 63
                             C 82 63, 76 63, 62 58
                             C 48 53, 50 25, 44 28
                             C 38 31, 26 55, 20 70
                             Z"
                          fill="url(#mobileLogoGrad)"
                          filter="url(#mobileGlow)"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold tracking-wider text-zinc-900 leading-none">
                        ARCOS
                      </span>
                      <span className="text-[8px] uppercase tracking-[0.25em] text-primary font-semibold leading-none mt-0.5">
                        Capacitors
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-none">
                  {navItems.map((item, idx) => {
                    const isActive = item.hasDropdown
                      ? (item.dropdownType === "products" &&
                          pathname.startsWith("/products")) ||
                        (item.dropdownType === "quality" &&
                          (pathname.startsWith("/quality") ||
                            pathname.startsWith("/industries")))
                      : pathname === item.href;

                    if (item.hasDropdown) {
                      const isProducts = item.dropdownType === "products";
                      const isOpen = isProducts
                        ? mobileProductsOpen
                        : mobileQualityOpen;
                      const setIsOpen = isProducts
                        ? setMobileProductsOpen
                        : setMobileQualityOpen;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="space-y-1"
                        >
                          <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-full text-left py-3 px-4 rounded-xl text-lg font-medium transition-all flex items-center justify-between focus:outline-none ${
                              isActive
                                ? "bg-primary/10 text-primary border-l-4 border-primary pl-3"
                                : "text-zinc-655 hover:text-zinc-900 hover:bg-zinc-50"
                            }`}
                          >
                            <span>{item.name}</span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-6 space-y-1 overflow-hidden"
                              >
                                {isProducts ? (
                                  <div className="space-y-1 border-l border-zinc-200 pl-3 py-1">
                                    <button
                                      onClick={() =>
                                        setMobileCapacitorsOpen(
                                          !mobileCapacitorsOpen,
                                        )
                                      }
                                      className="w-full text-left py-2 px-3 text-sm font-bold text-zinc-850 flex items-center justify-between"
                                    >
                                      <span className="flex items-center gap-1.5">
                                        <Cpu className="h-4 w-4 text-primary" />{" "}
                                        Capacitors
                                      </span>
                                      {mobileCapacitorsOpen ? (
                                        <ChevronUp className="h-4 w-4" />
                                      ) : (
                                        <ChevronDown className="h-4 w-4" />
                                      )}
                                    </button>

                                    {mobileCapacitorsOpen && (
                                      <div className="pl-4 space-y-1">
                                        {[
                                          { name: "Fan Capacitors", id: "fan" },
                                          { name: "Motor Run", id: "motor" },
                                          {
                                            name: "Washing Machine",
                                            id: "washing",
                                          },
                                          { name: "Air Conditioner", id: "ac" },
                                          {
                                            name: "Submersible Pump",
                                            id: "submersible",
                                          },
                                          {
                                            name: "Power Factor (PFC)",
                                            id: "pfc",
                                          },
                                          { name: "Square Body", id: "square" },
                                          {
                                            name: "Lighting Capacitors",
                                            id: "lighting",
                                          },
                                        ].map((sub) => (
                                          <Link
                                            key={sub.id}
                                            href={`/products/capacitors/${sub.id}`}
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobileProductsOpen(false);
                                              setMobileCapacitorsOpen(false);
                                            }}
                                            className="block py-1.5 px-3 text-xs text-zinc-600 hover:text-primary transition-colors font-semibold"
                                          >
                                            {sub.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}

                                    <Link
                                      href="/products?tab=clips"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileProductsOpen(false);
                                      }}
                                      className="block py-2 px-3 text-sm font-bold text-zinc-850 hover:text-primary flex items-center gap-1.5"
                                    >
                                      <Layers className="h-4 w-4 text-zinc-500" />{" "}
                                      PE Cable Clips
                                    </Link>

                                    <Link
                                      href="/products?tab=ties"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileProductsOpen(false);
                                      }}
                                      className="block py-2 px-3 text-sm font-bold text-zinc-850 hover:text-primary flex items-center gap-1.5"
                                    >
                                      <Boxes className="h-4 w-4 text-zinc-500" />{" "}
                                      Nylon Cable Ties
                                    </Link>
                                  </div>
                                ) : (
                                  <div className="space-y-1 border-l border-zinc-200 pl-3 py-1">
                                    <Link
                                      href="/quality"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileQualityOpen(false);
                                      }}
                                      className="block py-2 px-3 text-sm font-bold text-zinc-850 hover:text-primary"
                                    >
                                      Certifications
                                    </Link>
                                    <Link
                                      href="/industries"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileQualityOpen(false);
                                      }}
                                      className="block py-2 px-3 text-sm font-bold text-zinc-850 hover:text-primary"
                                    >
                                      Industries
                                    </Link>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                            isActive
                              ? "bg-primary/10 text-primary border-l-4 border-primary pl-3"
                              : "text-zinc-650 hover:text-zinc-900 hover:bg-zinc-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Separate Contact Us Link for Mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navItems.length + 1) * 0.05 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                        pathname === "/contact"
                          ? "bg-primary/10 text-primary border-l-4 border-primary pl-3"
                          : "text-zinc-655 hover:text-zinc-900 hover:bg-zinc-50"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <Link
                  href="/contact?type=quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center inline-flex items-center gap-2 px-6 py-4 bg-primary text-white text-base font-semibold rounded-xl"
                >
                  Request a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
