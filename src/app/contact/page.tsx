"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Send, 
  Building, 
  Info,
  Clock
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "quote" ? "quote" : "general";
  
  const [inquiryType, setInquiryType] = useState<string>(initialType);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "capacitors",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "capacitors",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="relative">
      {/* Type Switcher tabs */}
      <div className="flex gap-2 p-1 bg-[#121217] border border-white/5 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => setInquiryType("general")}
          className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
            inquiryType === "general" ? "bg-white/5 text-white" : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          General Inquiry
        </button>
        <button
          type="button"
          onClick={() => setInquiryType("quote")}
          className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
            inquiryType === "quote" ? "bg-primary text-white shadow-md" : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Request Bulk Quote
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-2">Corporate Email</label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-2">Phone / Mobile</label>
            <input
              type="tel"
              required
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300"
              placeholder="Company Ltd"
            />
          </div>
        </div>

        {inquiryType === "quote" && (
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-2">Product Category</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="w-full bg-[#121218] border border-white/5 focus:border-primary rounded-xl py-3.5 px-4 text-sm text-white focus:outline-none transition-all duration-300"
            >
              <option value="capacitors">Electrical Capacitors (Fan, Motor, AC)</option>
              <option value="clips">PE Plastic Cable Clips</option>
              <option value="ties">Nylon 66 Cable Ties</option>
              <option value="oem">Private Label / Custom OEM</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-zinc-400 text-xs font-semibold mb-2">
            {inquiryType === "quote" ? "Describe Your Quantity & Spec Requirements" : "Message"}
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-[#121218] border border-white/5 focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.25)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300 resize-none"
            placeholder={
              inquiryType === "quote"
                ? "Please include desired microfarad (uF) ratings, target quantities, and voltage specifications..."
                : "How can we help you today?"
            }
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-primary text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(210,35,42,0.3)] hover:shadow-[0_0_25px_rgba(210,35,42,0.5)] transition-all duration-300 mt-6 group"
        >
          <span>Send Secure Message</span>
          <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {formSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0f0f13] flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-white/5 z-20"
          >
            <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500 mb-6">
              <Check className="h-6 w-6" />
            </div>
            <h4 className="text-white text-lg font-bold">Message Received</h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
              Thank you for reaching out. A Noida plant sales manager will email you within 24 business hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Inquiries Portal</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Get in Touch
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Reach our corporate sales office, request custom test sheets, or coordinate a visit to our factory in Noida.
        </p>
      </section>

      {/* Main Grid: Info vs Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Noida Facility */}
          <div className="bg-[#0f0f13] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-[-30px] right-[-30px] h-28 w-28 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
              <Building className="h-5 w-5 text-primary shrink-0" /> Noida Plant Address
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ARCOS (M.G. Industries)<br />
              Plot No. 20, Phase-3, Sector 63,<br />
              Noida, Uttar Pradesh, 201301, India
            </p>
            <div className="mt-4 flex items-center gap-2.5 text-xs text-zinc-500">
              <Clock className="h-4 w-4 text-zinc-600" />
              <span>Plant Hours: 9:00 AM - 6:30 PM (Mon - Sat)</span>
            </div>
          </div>

          {/* Card 2: Contact Details */}
          <div className="bg-[#0f0f13] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-[-30px] right-[-30px] h-28 w-28 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-primary shrink-0" /> Fast Contacts
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-zinc-500 shrink-0" />
                <div>
                  <span className="text-zinc-500 text-xs block">Sales Hotline</span>
                  <span className="text-zinc-200 font-semibold">+91 99999 XXXXX</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-500 shrink-0" />
                <div>
                  <span className="text-zinc-500 text-xs block">Official Email</span>
                  <a href="mailto:info@arcoscapacitors.com" className="text-primary-light hover:underline font-semibold">
                    info@arcoscapacitors.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Geographic Map Representation */}
          <div className="bg-[#0f0f13] border border-white/5 rounded-2xl p-6 relative">
            <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-4">Pan-India Supply Grid</h4>
            <div className="h-28 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-center p-4">
              <div className="text-center space-y-1.5">
                <span className="text-white text-xs font-semibold block">Noida Plant $\rightarrow$ Pan-India Logistics</span>
                <span className="text-zinc-500 text-[10px] block">Supplying directly to Maharashtra, Karnataka, Gujarat, Tamil Nadu, Delhi-NCR, & Haryana OEM clusters.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Suspense Wrapped Inquiry Form */}
        <div className="lg:col-span-7 bg-[#0f0f13] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl">
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500 text-sm">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4" />
              Loading Inquiry Portal...
            </div>
          }>
            <ContactFormContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
