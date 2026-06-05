"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            ? "py-3 bg-dark-bg/85 backdrop-blur-md border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
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
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d55" />
                    <stop offset="60%" stopColor="#d2232a" />
                    <stop offset="100%" stopColor="#8d1317" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
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
              <span className="text-xl font-bold tracking-wider text-white font-sans m-0 leading-none">
                ARCOS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-semibold leading-none mt-1">
                Capacitors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glassmorphism-light px-4 py-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <Link
              href="/contact?type=quote"
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
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200"
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
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-dark-bg/95 backdrop-blur-md border-l border-dark-border px-6 py-8 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 group">
                    <div className="relative h-8 w-10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 100 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                      >
                        <defs>
                          <linearGradient id="mobileLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff4d55" />
                            <stop offset="60%" stopColor="#d2232a" />
                            <stop offset="100%" stopColor="#8d1317" />
                          </linearGradient>
                          <filter id="mobileGlow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
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
                      <span className="text-lg font-bold tracking-wider text-white leading-none">
                        ARCOS
                      </span>
                      <span className="text-[8px] uppercase tracking-[0.25em] text-primary font-semibold leading-none mt-0.5">
                        Capacitors
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-zinc-400 hover:text-white transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                            isActive
                              ? "bg-primary/20 text-white border-l-4 border-primary pl-3"
                              : "text-zinc-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
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
