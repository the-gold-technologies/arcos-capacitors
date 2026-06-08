import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARCOS Capacitors | Trusted Electrical Components Manufacturer",
  description: "ARCOS (M.G. Industries) is a leading ISO-certified manufacturer of electrical capacitors, cable clips, and cable ties. Supplying high-durability components for OEM, HVAC, motors, and industrial applications.",
  keywords: "capacitors, manufacturer, electrical capacitors, fan capacitors, motor run capacitors, air conditioner capacitors, cable clips, cable ties, ARCOS, M.G. Industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-zinc-900 selection:bg-primary/20 selection:text-zinc-900">
        <BackgroundGrid />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
