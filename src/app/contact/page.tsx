"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Check, 
  Send, 
  Building, 
  Info,
  Clock
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "quote" ? "Get Quote" : "Get Quote";
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: initialType,
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
        inquiryType: "Get Quote",
        product: "capacitors",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-650 text-xs font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.15)] rounded-xl py-3 px-4 text-sm text-zinc-900 focus:outline-none transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-zinc-650 text-xs font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.15)] rounded-xl py-3 px-4 text-sm text-zinc-900 focus:outline-none transition-all duration-300"
              placeholder="Company Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-650 text-xs font-semibold mb-2">Contact Number (Mandatory)</label>
            <input
              type="tel"
              required
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.15)] rounded-xl py-3 px-4 text-sm text-zinc-900 focus:outline-none transition-all duration-300"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="block text-zinc-650 text-xs font-semibold mb-2">Email Address</label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.15)] rounded-xl py-3 px-4 text-sm text-zinc-900 focus:outline-none transition-all duration-300"
              placeholder="name@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-650 text-xs font-semibold mb-2">Inquiry Type</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary rounded-xl py-3.5 px-4 text-sm text-zinc-800 focus:outline-none transition-all duration-300"
            >
              <option value="Get Quote">Get Quote</option>
              <option value="Get Price List">Get Price List</option>
              <option value="OEM Enquiry">OEM Enquiry</option>
              <option value="Dealer / Distributor Enquiry">Dealer / Distributor Enquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-650 text-xs font-semibold mb-2">Product Requirement</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary rounded-xl py-3.5 px-4 text-sm text-zinc-800 focus:outline-none transition-all duration-300"
            >
              <option value="capacitors">Capacitors</option>
              <option value="clips">Cable Clips</option>
              <option value="ties">Cable Ties</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-zinc-650 text-xs font-semibold mb-2">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-primary focus:shadow-[0_0_12px_rgba(210,35,42,0.15)] rounded-xl py-3 px-4 text-sm text-zinc-900 focus:outline-none transition-all duration-300 resize-none"
            placeholder="Please enter your query or specification details..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-zinc-950 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-zinc-800 transition-all duration-300 mt-6 group"
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
            className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-zinc-200 z-20 shadow-lg"
          >
            <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500 mb-6">
              <Check className="h-6 w-6" />
            </div>
            <h4 className="text-zinc-950 text-lg font-bold">Message Received</h4>
            <p className="text-zinc-650 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
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
    <div className="relative max-w-7xl mx-auto px-6 py-12">
      {/* Ambient Red glow background blobs */}
      <div className="absolute top-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-primary/6 filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 filter blur-[110px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Inquiries Portal</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mt-3">
          Get in Touch
        </h1>
        <p className="text-zinc-650 text-sm sm:text-base mt-4 leading-relaxed">
          Reach our corporate sales office, request custom test sheets, or coordinate a visit to our factory in Noida.
        </p>
      </section>

      {/* Main Grid: Info vs Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Noida Facility */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-30px] right-[-30px] h-28 w-28 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="text-zinc-950 font-bold text-lg flex items-center gap-2 mb-4">
              <Building className="h-5 w-5 text-primary shrink-0" /> Noida Plant Address
            </h3>
            <p className="text-zinc-650 text-sm leading-relaxed">
              ARCOS (M.G. Industries)<br />
              C-28, Sector-63, Noida,<br />
              Uttar Pradesh, India
            </p>
            <div className="mt-4 flex items-center gap-2.5 text-xs text-zinc-500">
              <Clock className="h-4 w-4 text-zinc-400" />
              <span>Plant Hours: 9:00 AM - 6:30 PM (Mon - Sat)</span>
            </div>
          </div>

          {/* Card 2: Contact Details */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-30px] right-[-30px] h-28 w-28 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="text-zinc-950 font-bold text-lg flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-primary shrink-0" /> Fast Contacts
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-zinc-400 shrink-0" />
                <div>
                  <span className="text-zinc-500 text-xs block">Sales Hotline & WhatsApp</span>
                  <a href="https://wa.me/919891758499" target="_blank" rel="noopener noreferrer" className="text-zinc-850 font-semibold hover:text-primary transition-colors">
                    +91 98917 58499
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-400 shrink-0" />
                <div>
                  <span className="text-zinc-500 text-xs block">Sales & Support</span>
                  <a href="mailto:sales@arcoscapacitors.com" className="text-primary-light hover:underline font-semibold block">
                    sales@arcoscapacitors.com
                  </a>
                  <a href="mailto:nitingupta.8@hotmail.com" className="text-zinc-550 text-xs hover:underline block mt-0.5">
                    nitingupta.8@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Geographic Map Representation */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 relative shadow-sm">
            <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">Pan-India Supply Grid</h4>
            <div className="h-28 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center p-4">
              <div className="text-center space-y-1.5">
                <span className="text-zinc-900 text-xs font-semibold block">Noida Plant → Pan-India Logistics</span>
                <span className="text-zinc-500 text-[10px] block">Supplying directly to Maharashtra, Karnataka, Gujarat, Tamil Nadu, Delhi-NCR, & Haryana OEM clusters.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Suspense Wrapped Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm">
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
