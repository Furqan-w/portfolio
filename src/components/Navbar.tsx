"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LiveClock from "./LiveClock";

const NAV_ITEMS = [
  { name: "Work", key: "work" },
  { name: "About", key: "about" },
  { name: "Resume", key: "resume" },
  { name: "Contact", key: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (key: string) => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent("open-portfolio-modal", {
      detail: { type: "section", id: key }
    }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/70 shadow-xs hover:border-neutral-300 transition-all duration-200 text-left"
        >
          <div className="w-6 h-6 rounded-full bg-[#181616] text-white flex items-center justify-center text-xs font-serif italic">
            F
          </div>
          <span className="font-medium text-sm text-[#181616] tracking-tight group-hover:text-neutral-600 transition-colors">
            Furqan Waris
          </span>
        </button>

        {/* Center Live Clock (desktop) */}
        <div className="hidden md:block">
          <LiveClock />
        </div>

        {/* Desktop Nav Floating Capsule */}
        <nav className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/80 shadow-xs">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.key)}
              className="relative px-4 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60 transition-colors duration-200"
            >
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="ml-1 px-3 py-1.5 rounded-full bg-[#181616] text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1 shadow-2xs"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/80 shadow-xs text-neutral-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-xl max-w-sm mx-auto"
          >
            <div className="mb-3 pb-3 border-b border-neutral-100 flex justify-center">
              <LiveClock />
            </div>
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.key)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-2 px-3 py-2.5 rounded-xl bg-[#181616] text-white text-sm font-medium text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
