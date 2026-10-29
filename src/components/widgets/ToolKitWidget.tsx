"use client";

import { Wrench } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ToolKitWidget() {
  return (
    <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between h-full group hover:border-neutral-300 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <span className="font-handwriting text-lg text-neutral-800 font-bold">
              Tool Kit
            </span>
          </div>
          <span className="text-[11px] text-neutral-400">Tools I use daily</span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {PORTFOLIO_DATA.toolkit.map((item) => (
            <div
              key={item.name}
              className="group/item inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/70 text-xs font-medium text-neutral-800 transition-all hover:scale-105 cursor-default"
            >
              <span>{item.name}</span>
              <span className="text-[10px] text-neutral-400 group-hover/item:text-neutral-600">
                • {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
        <span>Design & code in tandem</span>
        <span className="text-neutral-500 font-mono">v2025</span>
      </div>
    </div>
  );
}
