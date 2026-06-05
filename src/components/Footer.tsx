"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Award, CheckCircle, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-[#0d0d11] border-t border-dark-border overflow-hidden">
      {/* Non-boring clip-path diagonal spacer at the top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-primary/20 transform -skew-y-1 origin-top-left" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider text-white">ARCOS</span>
              <span className="text-xs uppercase text-primary font-bold tracking-[0.2em] mt-1">Capacitors</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">
              ARCOS (M.G. Industries) is a premier manufacturer of high-end capacitors, cable clips, and cable ties, engineered for reliability, safety, and durability since 2015.
            </p>
            {/* Certifications Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-zinc-300">
                <ShieldCheck className="h-3 w-3 text-primary" /> ISO 9001
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-zinc-300">
                <CheckCircle className="h-3 w-3 text-primary" /> CE Compliant
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-zinc-300">
                <Award className="h-3 w-3 text-primary" /> ISI Marked
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-zinc-300">
                RoHS
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative">
              Quick Navigation
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Infrastructure", href: "/infrastructure" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm hover:translate-x-1.5 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Offerings */}
          <div>
            <h4 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative">
              Our Products
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Fan Capacitors",
                "Motor Run Capacitors",
                "Washing Machine Capacitors",
                "Air Conditioner Capacitors",
                "Submersible Pump Capacitors",
                "Power Factor Correction",
                "Cable Clips & Ties",
              ].map((prod) => (
                <li key={prod}>
                  <Link
                    href="/products"
                    className="text-zinc-400 hover:text-white text-sm hover:translate-x-1.5 inline-block transition-all duration-300"
                  >
                    {prod}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative">
              Noida Headquarters
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  ARCOS M.G. Industries,<br />
                  20,000 Sq. Ft. Modern Facility,<br />
                  Sector 63, Noida, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 99999 XXXXX / +91 120 XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@arcoscapacitors.com" className="hover:text-white transition-colors duration-200">
                  info@arcoscapacitors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} ARCOS Capacitors (M.G. Industries). All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
