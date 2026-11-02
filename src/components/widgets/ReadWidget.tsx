"use client";

import { useState } from "react";
import { BookOpen, Bookmark } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ReadWidget() {
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  const books = PORTFOLIO_DATA.recommendations.books || [];
  const current = books[activeBookIndex];

  if (!current) return null;

  return (
    <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between h-full group hover:border-neutral-300 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="font-handwriting text-lg text-neutral-800 font-bold">
              Book recommendations
            </span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-mono">
            {activeBookIndex + 1}/{books.length}
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-100 space-y-1.5">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-base text-neutral-900 font-medium">
              {current.title}
            </h4>
            <Bookmark className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
          </div>
          <p className="text-xs text-neutral-500 font-medium">
            By {current.creator}
          </p>
          {current.note && (
            <p className="text-xs text-neutral-600 pt-1 italic border-t border-neutral-200/60 mt-1.5">
              "{current.note}"
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
        <span className="text-neutral-400 text-[11px]">Philosophy & Ideas</span>
        <button
          onClick={() =>
            setActiveBookIndex((prev) => (prev + 1) % books.length)
          }
          className="text-neutral-800 font-medium hover:text-emerald-700 transition-colors"
        >
          Next book →
        </button>
      </div>
    </div>
  );
}
