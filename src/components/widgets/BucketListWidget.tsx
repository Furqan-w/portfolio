"use client";

import { CheckCircle2, Circle, Mountain } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function BucketListWidget() {
  return (
    <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between h-full group hover:border-neutral-300 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center">
              <Mountain className="w-3.5 h-3.5" />
            </div>
            <span className="font-handwriting text-lg text-neutral-800 font-bold">
              Bucket List
            </span>
          </div>
          <span className="text-[11px] text-neutral-400">Things I'll achieve</span>
        </div>

        <ul className="space-y-2 pt-1 text-xs text-neutral-700">
          {PORTFOLIO_DATA.bucketList.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 leading-tight"
            >
              {item.done ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 fill-emerald-500/10" />
              ) : (
                <Circle className="w-4 h-4 text-neutral-300 flex-shrink-0 mt-0.5" />
              )}
              <span
                className={
                  item.done
                    ? "line-through text-neutral-400"
                    : "text-neutral-800 font-normal"
                }
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
        <span>Curiosity over comfort</span>
      </div>
    </div>
  );
}
