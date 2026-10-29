# Nitin Sangwan's Portfolio — Next.js Edition

A complete, pixel-crafted recreation of **[Nitin Sangwan's Portfolio](https://nitinsangwan.com/)** built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Design Aesthetics & System

- **Warm Paper Canvas Palette**: `#fafbf9` warm eggshell background with `#181616` dark charcoal editorial typography and `#e8e8e8` subtle borders.
- **Editorial Typography**:
  - `DM Serif Display` (*italic & normal*): Primary headings, editorial quotes, and case study titles.
  - `Inter`: Clean, legible sans-serif for UI, metadata, and body text.
  - `Caveat`: Handwritten script font for playful notes, stickers, and personality touches (*"Playing right now"*, *"My corner"*).
- **Interactive Bento Widgets**:
  - **Live Bengaluru Clock** (`Asia/Kolkata` IST) with real-time seconds ticking and animated pulsing status indicator.
  - **Interactive Audio Widget** ("Playing right now") with play/pause simulation and animated frequency wave bars.
  - **Watch & Read Popovers**: Curated movie and book recommendations with notes and shuffling.
  - **Interactive Tool Kit**: Daily tools and skills with hover scale effects.
  - **Bucket List**: Interactive checklist with completion status.
- **Floating Pill Navigation**: Dynamic Island-style capsule navbar with spring-animated active tab indicators and mobile drawer menu.

---

## 🗂️ Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Editorial hero, live clock, selected project bento showcase, interactive widgets, and collaboration CTA. |
| `/work` | **Work Catalog** | Filterable project catalog (All, Product Design, Web Design, AI & SAAS) with NDA disclosure. |
| `/about` | **About & Corner** | Personal story, career timeline (Hunar.ai, Unthinkable, Airtribe, Freelance), and client testimonials. |
| `/resume` | **Interactive Resume** | Printer-friendly CV layout with skill breakdown, direct PDF print trigger, and share link. |
| `/contact` | **Contact** | Interactive contact form with validation, one-click email copy to clipboard, and social links. |
| `/voice` | **Case Study: Hunar Voice** | Foundational self-serve voice AI calling dashboard, 4-step pillar breakdown, and pilot metrics. |
| `/dimore-surfaces` | **Case Study: Dimore Surfaces** | Luxury architectural surface website, curtain reveal hero, and B2B spec request funnel. |
| `/connect` | **Case Study: Hunar Connect** | Enterprise CRM & frontline workforce lifecycle management system. |
| `/neha-s-playground` | **Case Study: Neha's Playground** | Valentine's Day voice AI launch campaign with Indian pop art direction. |
| `/voice-ai-playground` | **Case Study: Voice AI Playground** | Multi-industry zero-friction voice agent testing playground. |
| `/dental-pms` | **Case Study: Dental PMS** | Modular white-label dental patient management template system. |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts via `next/font/google` (`DM Serif Display`, `Inter`, `Caveat`)
