"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function LiveClock() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-xs font-medium text-neutral-700">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="flex items-center gap-1 text-neutral-500">
        <MapPin className="w-3 h-3 text-neutral-400" />
        <span>Bengaluru, IN</span>
      </span>
      <span className="text-neutral-300">•</span>
      <span className="font-mono text-[11px] text-neutral-800 tracking-tight">
        {timeString || "02:45:00 PM"} IST
      </span>
    </div>
  );
}
