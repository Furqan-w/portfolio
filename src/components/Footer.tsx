"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Copy, Check, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-neutral-200/80 bg-white/60 backdrop-blur-xs py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Column */}
        <div className="space-y-2 max-w-md">
          <div className="flex items-center gap-2">
            <span className="font-serif italic text-xl text-[#181616]">
              Furqan Waris
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/80 font-handwriting text-sm">
              ai engineer
            </span>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            {PORTFOLIO_DATA.bio}
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-colors"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-neutral-500" />
                  <span>{PORTFOLIO_DATA.contact.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Center / Navigation Links */}
        <div className="flex flex-wrap gap-8 text-xs font-medium text-neutral-600">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
              Explore
            </span>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-portfolio-modal", {
                    detail: { type: "section", id: "work" },
                  })
                )
              }
              className="hover:text-black transition-colors text-left"
            >
              Work & Case Studies
            </button>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-portfolio-modal", {
                    detail: { type: "section", id: "about" },
                  })
                )
              }
              className="hover:text-black transition-colors text-left"
            >
              About & Values
            </button>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-portfolio-modal", {
                    detail: { type: "section", id: "resume" },
                  })
                )
              }
              className="hover:text-black transition-colors text-left"
            >
              Interactive Resume
            </button>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-portfolio-modal", {
                    detail: { type: "section", id: "contact" },
                  })
                )
              }
              className="hover:text-black transition-colors text-left"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
              Connect
            </span>
            {PORTFOLIO_DATA.contact.linkedin && (
              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {PORTFOLIO_DATA.contact.github && (
              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {PORTFOLIO_DATA.contact.framer && (
              <a
                href={PORTFOLIO_DATA.contact.framer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                Framer <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {PORTFOLIO_DATA.contact.x && (
              <a
                href={PORTFOLIO_DATA.contact.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                X / Twitter <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Right Stamp */}
        <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-neutral-400">
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>& Next.js</span>
          </div>
          <p>© 2026 Furqan Waris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
