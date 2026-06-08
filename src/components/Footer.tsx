"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: EASE },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d11] border-t border-dark-border overflow-hidden mt-12">
      {/* Decorative diagonal spacer at top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-primary/20 transform -skew-y-1 origin-top-left" />

      {/* Ambient glow blobs */}
      <div className="absolute top-[-60px] right-[-60px] h-72 w-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-40px] h-52 w-52 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand Info Column ── */}
          <motion.div
            custom={0}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-9 w-11 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full transform group-hover:scale-110 transition-transform duration-400 ease-out"
                >
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#ff4d55" />
                      <stop offset="60%"  stopColor="#d2232a" />
                      <stop offset="100%" stopColor="#8d1317" />
                    </linearGradient>
                    <filter id="footerGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
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
                    fill="url(#footerLogoGrad)"
                    filter="url(#footerGlow)"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white leading-none">
                  ARCOS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-semibold leading-none mt-1">
                  Capacitors
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed mt-2">
              ARCOS (M.G. Industries) is a premier manufacturer of high-end
              capacitors, cable clips, and cable ties, engineered for
              reliability, safety, and durability since 2015.
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { icon: ShieldCheck, label: "ISO 9001" },
                { icon: CheckCircle, label: "CE Compliant" },
                { icon: Award,       label: "ISI Marked" },
                { icon: null,        label: "RoHS" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-full text-zinc-300 transition-colors duration-250 cursor-default"
                >
                  {Icon && <Icon className="h-3 w-3 text-primary" />}
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            custom={1}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative">
              Quick Navigation
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home",           href: "/" },
                { name: "About Us",       href: "/about" },
                { name: "Products",       href: "/products" },
                { name: "Infrastructure", href: "/infrastructure" },
                { name: "Contact Us",     href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm hover:translate-x-2 inline-block transition-all duration-300 ease-out"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Product Offerings ── */}
          <motion.div
            custom={2}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative">
              Our Products
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Fan Capacitors",                  href: "/products/capacitors/fan" },
                { name: "Motor Run Capacitors",            href: "/products/capacitors/motor" },
                { name: "Washing Machine Capacitors",      href: "/products/capacitors/washing" },
                { name: "Air Conditioner Capacitors",      href: "/products/capacitors/ac" },
                { name: "Submersible Pump Capacitors",     href: "/products/capacitors/submersible" },
                { name: "Power Factor Correction",         href: "/products/capacitors/pfc" },
                { name: "Cable Clips & Ties",              href: "/products?tab=clips" },
              ].map((prod) => (
                <li key={prod.name}>
                  <Link
                    href={prod.href}
                    className="text-zinc-400 hover:text-white text-sm hover:translate-x-2 inline-block transition-all duration-300 ease-out"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact Details ── */}
          <motion.div
            custom={3}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative">
              Noida Headquarters
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  ARCOS M.G. Industries,<br />
                  C-28, Sector-63, Noida,<br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+919891758499"
                  className="hover:text-white transition-colors duration-250"
                >
                  +91 98917 58499
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:sales@arcoscapacitors.com"
                  className="hover:text-white transition-colors duration-250"
                >
                  sales@arcoscapacitors.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom copyright ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500"
        >
          <p>
            © {new Date().getFullYear()} ARCOS Capacitors (M.G. Industries). All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy",    href: "/privacy" },
              { label: "Terms of Service",  href: "/terms" },
              { label: "Sitemap",           href: "/sitemap" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-zinc-300 transition-colors duration-250">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
