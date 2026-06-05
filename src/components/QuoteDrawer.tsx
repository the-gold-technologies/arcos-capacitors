"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Check } from "lucide-react";

interface QuoteDrawerProps {
  product: {
    name: string;
    capacitance: string;
    type: string;
  } | null;
  onClose: () => void;
}

export default function QuoteDrawer({ product, onClose }: QuoteDrawerProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qty: "1000",
    specs: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", qty: "1000", specs: "" });
    }, 2500);
  };

  if (!product) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
      />

      {/* Slider Drawer container */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[500px] bg-[#0c0c10] border-l border-dark-border px-6 sm:px-8 py-10 flex flex-col justify-between shadow-2xl overflow-y-auto animate-pulse-glow"
      >
        {/* Drawer Top */}
        <div>
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div>
              <span className="text-[10px] text-primary uppercase font-bold tracking-widest">
                RFQ Portal
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Get Price Quotation</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              aria-label="Close quote portal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Selected Product info box */}
          <div className="bg-[#121217] border border-white/5 p-4 rounded-xl mb-6">
            <span className="text-[9px] uppercase font-mono text-zinc-500">
              Selected Product
            </span>
            <h4 className="text-white font-bold text-base mt-1">{product.name}</h4>
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-zinc-400">
              <div>
                <span className="text-zinc-600 block">Spec Range:</span>
                <span className="font-semibold text-zinc-300">
                  {product.capacitance}
                </span>
              </div>
              <div>
                <span className="text-zinc-600 block">Category:</span>
                <span className="text-zinc-300">{product.type}</span>
              </div>
            </div>
          </div>

          {/* RFQ Form */}
          <form onSubmit={handleQuoteSubmit} className="space-y-4">
            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-2">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 pl-10 text-sm text-white focus:outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
                <User className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 text-xs font-semibold mb-2">
                  Corporate Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 pl-10 text-sm text-white focus:outline-none transition-all duration-300"
                    placeholder="name@company.com"
                  />
                  <Mail className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-500" />
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-semibold mb-2">
                  Phone / WhatsApp
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 pl-10 text-sm text-white focus:outline-none transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  <Phone className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-500" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-2">
                Target Volume (Pieces)
              </label>
              <select
                name="qty"
                value={formData.qty}
                onChange={handleInputChange}
                className="w-full bg-[#121218] border border-white/5 focus:border-primary rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300"
              >
                <option value="500">500 - 2,500 Pcs</option>
                <option value="2500">2,500 - 10,000 Pcs</option>
                <option value="10000">10,000 - 50,000 Pcs</option>
                <option value="50000">50,000+ Pcs (Enterprise)</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-2">
                Specific Technical Specs (optional)
              </label>
              <textarea
                name="specs"
                value={formData.specs}
                onChange={handleInputChange}
                rows={2}
                className="w-full bg-[#121218] border border-white/5 focus:border-primary rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300 resize-none"
                placeholder="e.g. 2.5 uF, dual copper wires, customized shell label stamp..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(210,35,42,0.3)] hover:shadow-[0_0_25px_rgba(210,35,42,0.6)] transition-all duration-300 mt-6"
            >
              Submit Quotation Request
            </button>
          </form>
        </div>

        {/* Success Overlay when submitted */}
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0c0c10] flex flex-col items-center justify-center text-center p-8 z-30"
            >
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500 mb-6">
                <Check className="h-8 w-8" />
              </div>
              <h4 className="text-white text-xl font-bold">Inquiry Sent Successfully</h4>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-xs">
                Our Noida sales representative will review your target specs and contact
                you with a quotation list.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
