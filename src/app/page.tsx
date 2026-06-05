import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutBrief from "@/components/AboutBrief";
import ProductOfferings from "@/components/ProductOfferings";
import IndustriesGrid from "@/components/IndustriesGrid";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Stats />
      <AboutBrief />
      <ProductOfferings />
      <IndustriesGrid />
      <CtaBanner />
    </div>
  );
}
