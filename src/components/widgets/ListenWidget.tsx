"use client";

import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Music, BatteryCharging } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ListenWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const tracks = PORTFOLIO_DATA.recommendations.tracks;
  const currentTrack = tracks[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between h-full group hover:border-neutral-300 transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
              <Music className="w-3.5 h-3.5" />
            </div>
            <span className="font-handwriting text-lg text-neutral-800 font-bold">
              Furqan's iPod
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-400">
            <BatteryCharging className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-mono">100%</span>
          </div>
        </div>

        {/* Retro iPod LCD Screen Container */}
        <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#eaf2f8] to-[#dbe8f2] border border-[#bcd2e4] shadow-inner text-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pb-1 border-b border-[#bcd2e4]/60">
            <span>Now Playing</span>
            <span>{currentTrackIndex + 1}/{tracks.length}</span>
          </div>

          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-neutral-900 truncate font-mono">
              {currentTrack.title}
            </h4>
            <p className="text-[11px] text-neutral-600 truncate">
              {currentTrack.creator}
            </p>
          </div>

          {/* Progress bar */}
          <div className="space-y-1 pt-1">
            <div className="w-full bg-[#bcd2e4] h-1.5 rounded-full overflow-hidden">
              <div
                className={`bg-blue-600 h-full rounded-full transition-all duration-700 ${
                  isPlaying ? "w-2/3 animate-pulse" : "w-1/4"
                }`}
              />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-neutral-500">
              <span>{isPlaying ? "01:42" : "00:00"}</span>
              <span>-02:18</span>
            </div>
          </div>
        </div>

        {/* Tactile Mini Click-Wheel Controls */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-all active:scale-90"
            aria-label="Previous track"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-9 h-9 rounded-full bg-[#181616] text-white flex items-center justify-center hover:bg-neutral-800 transition-all active:scale-95 shadow-xs"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-all active:scale-90"
            aria-label="Next track"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
        <span className="italic truncate max-w-[170px]">"{currentTrack.note}"</span>
        {isPlaying ? (
          <span className="text-emerald-600 font-mono text-[10px] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Playing
          </span>
        ) : (
          <span className="text-neutral-400 font-mono text-[10px]">Paused</span>
        )}
      </div>
    </div>
  );
}
