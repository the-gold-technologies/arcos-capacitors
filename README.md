# ARCOS Capacitors (M.G. Industries) Web Application

This repository contains the Next.js marketing web application for **ARCOS Capacitors** (operated under M.G. Industries), a leading ISO 9001:2015-certified manufacturer of high-durability electrical components, including capacitors, cable clips, and nylon cable ties.

The application serves as a modern, premium corporate web presence featuring responsive catalogs, dynamic product information, interactive machinery walkthroughs, and a request-a-quote drawer for OEM, HVAC, and industrial buyers.

---

## 🚀 Key Features

- **Product Showcase & Interactive Specifications**:
  - **Capacitors**: Fan, Motor Run, Washing Machine, Air Conditioner, Submersible Pump, and Power Factor Correction Capacitors (Capacitance Range: 1 - 100 μF).
  - **Cable Clips**: Secure cable routing solutions in all standard shapes and diameters.
  - **Nylon Cable Ties**: High-tensile strength bundling and fastening ties.
- **Dynamic Quote Generation**: A slide-over Quote Drawer interface enabling clients to request custom parameters, capacitance/voltage ratings, and OEM private label specifications.
- **Manufacturing Workflow Visualizer**: Interactive step-by-step visualizer of the 20,000 Sq. Ft. Noida facility assembly line.
- **Industrial Standards & Quality Compliance**: Clean presentation of accreditations (ISO 9001:2015, CE Compliance, RoHS Directives, ISI National Standards - Bureau of Indian Standards IS 1709 / IS 2993, CM/L - 8462791).
- **Interactive Associations and Core Strengths Grid**: Highlighting affiliations with IEEMA, ELCINA, ELECRAMA, and NEA.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 & PostCSS
- **Animations**: Framer Motion (v12) for custom transitions, hover states, and smooth slide-overs
- **Icons**: Lucide React (v1)
- **Language**: TypeScript

---

## 📂 Project Structure

```text
arcos/
├── public/                 # Static assets (images, logos, illustrations)
├── src/
│   ├── app/                # Next.js App Router directory
│   │   ├── about/          # Company history, vision, Noida plant details
│   │   ├── contact/        # Contact form, location map, OEM inquiries
│   │   ├── industries/     # Sectors served (HVAC, OEM, Electrical, etc.)
│   │   ├── infrastructure/ # 20,000 Sq. Ft. Noida manufacturing facility & machinery details
│   │   ├── products/       # Interactive product catalogs with spec details
│   │   │   └── capacitors/
│   │   │       └── [id]/   # Dynamic spec pages for specific capacitor models
│   │   ├── quality/        # Quality assurance guidelines, testing protocols, & certifications
│   │   ├── globals.css     # Tailwind CSS base styles and themes
│   │   ├── layout.tsx      # Core wrapper layout (Navbar, Footer, BackgroundGrid)
│   │   └── page.tsx        # Homepage layout (Hero, Stats, ProductOfferings, IndustriesGrid, CTA)
│   ├── components/         # Reusable UI component blocks
│   │   ├── AboutBrief.tsx
│   │   ├── BackgroundGrid.tsx
│   │   ├── CapacitorsTab.tsx
│   │   ├── ClipsTab.tsx
│   │   ├── CoreStrengths.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── IndustriesGrid.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductOfferings.tsx
│   │   ├── QuoteDrawer.tsx
│   │   ├── Stats.tsx
│   │   ├── TiesTab.tsx
│   │   ├── VisionMission.tsx
│   │   └── WorkflowVisualizer.tsx
│   └── lib/                # Shared helper libraries and animation configurations
│       └── motion.ts
├── package.json            # NPM dependencies and script tasks
└── tsconfig.json           # TypeScript compilation configurations
```

---

## ⚙️ Getting Started

### 📋 Prerequisites

Make sure you have Node.js (v18.x or above recommended) and npm/yarn/pnpm installed.

### 🔧 Installation

Install the project dependencies using npm:

```bash
npm install
```

### 💻 Local Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🏗️ Build for Production

Compile and optimize the application for production deployment:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

### 🧹 Linting

Verify code styling and rules compliance:

```bash
npm run lint
```

---

## ⚡ Standards & Accreditations

The products cataloged in this application are tested and certified to comply with:
- **ISO 9001:2015**: Quality Management Systems
- **CE Compliance**: European Economic Area Health & Safety Legislation
- **RoHS Directives**: Lead-free and hazardous-substance-free green construction
- **ISI National Standards (BIS)**: Bureau of Indian Standards **IS 1709 / IS 2993** (CM/L - 8462791)
