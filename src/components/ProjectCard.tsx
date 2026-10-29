"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  layout?: "large" | "standard" | "compact";
}

export default function ProjectCard({
  project,
  layout = "standard",
}: ProjectCardProps) {
  // Map slugs to clean custom preview banners
  const getBannerGraphics = () => {
    switch (project.slug) {
      case "galaxy-knowledge":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0b0f19] via-[#161329] to-[#0d1b2a] text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-violet-600/20 blur-2xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-indigo-500/15 blur-xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-violet-200 border border-white/10">
                Llama 3 • LoRA Rank-16
              </span>
              <span className="text-xs font-mono text-violet-300">PyTorch & PEFT</span>
            </div>

            {/* Simulated Model Benchmark Card */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg my-auto">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10 text-[10px] text-violet-200/80 font-mono">
                <span>astrophysics-qa / eval-split</span>
                <span className="text-emerald-300 font-semibold">Loss: 0.142</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[11px] text-white">
                  <span>Galaxy Morphometry Domain Accuracy</span>
                  <span className="text-violet-300 font-bold">88%</span>
                </div>
                <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-400 to-indigo-400 h-full w-[88%]" />
                </div>
                <div className="flex justify-between text-[10px] text-violet-200/70 pt-0.5">
                  <span>65% → 12% Error Reduction</span>
                  <span>Zero Hallucination</span>
                </div>
              </div>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-violet-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>2025</span>
            </div>
          </div>
        );

      case "enterprise-erp":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#091124] via-[#0f2347] to-[#040814] text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-blue-200 border border-white/10">
                LangGraph Multi-Agent
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-blue-300">Stateful Graph</span>
              </div>
            </div>

            {/* Agent Workflow Visualizer */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg my-auto">
              <div className="flex items-center justify-between text-[10px] font-mono text-blue-200/80 mb-2 pb-1.5 border-b border-white/10">
                <span>Autonomous Node Pipeline</span>
                <span className="text-emerald-300">100% Traced</span>
              </div>
              <div className="flex items-center justify-between gap-1 text-[11px] font-mono">
                <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-100 border border-blue-400/30">
                  Router
                </span>
                <span className="text-blue-400">➔</span>
                <span className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-100 border border-indigo-400/30">
                  ERP Tool
                </span>
                <span className="text-blue-400">➔</span>
                <span className="px-2 py-1 rounded bg-teal-500/20 text-teal-100 border border-teal-400/30">
                  Evaluator
                </span>
              </div>
              <div className="flex justify-between text-[10px] text-blue-200/70 pt-2 font-mono">
                <span>Dynamic Tool Calling</span>
                <span className="text-blue-300 font-semibold">+40% Productivity</span>
              </div>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-blue-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>Langfuse Traced</span>
            </div>
          </div>
        );

      case "hr-recruitment":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#041a13] via-[#063e30] to-[#02130e] text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            <div className="absolute right-0 bottom-0 w-36 h-36 rounded-full bg-emerald-500/20 blur-xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-emerald-200 border border-white/10">
                Semantic Resume Search
              </span>
              <span className="text-xs font-mono text-emerald-300">Dense + BM25</span>
            </div>

            {/* Hybrid Retrieval Match Card */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg my-auto">
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-200/80 mb-2 pb-1.5 border-b border-white/10">
                <span>Hybrid Scoring Engine</span>
                <span className="text-emerald-300 font-bold">92% Match Score</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
                <div className="p-1.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] text-emerald-300/80 block">Dense Vector</span>
                  <span className="font-bold text-white text-[11px]">0.94</span>
                </div>
                <div className="p-1.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] text-teal-300/80 block">Lexical BM25</span>
                  <span className="font-bold text-white text-[11px]">Top 1%</span>
                </div>
                <div className="p-1.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] text-cyan-300/80 block">Speedup</span>
                  <span className="font-bold text-emerald-300 text-[11px]">75% Faster</span>
                </div>
              </div>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-emerald-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>Shipped</span>
            </div>
          </div>
        );

      case "intelligent-scraper":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#1c1206] via-[#332007] to-[#140d04] text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            <div className="absolute -left-6 top-0 w-36 h-36 rounded-full bg-amber-500/20 blur-xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-amber-200 border border-white/10">
                Playwright + FastAPI
              </span>
              <span className="text-xs font-mono text-amber-300">Self-Healing DOM</span>
            </div>

            {/* Ingestion Pipeline Monitor */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg my-auto">
              <div className="flex justify-between items-center text-[10px] font-mono text-amber-200/80 mb-2 pb-1.5 border-b border-white/10">
                <span>Crawler Telemetry & Ingestion</span>
                <span className="text-emerald-400 font-bold">99.2% Uptime</span>
              </div>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between text-[11px]">
                  <span className="text-white">Active Domains Crawled</span>
                  <span className="text-amber-300 font-bold">1,000+ Portals</span>
                </div>
                <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-300 h-full w-[99%]" />
                </div>
                <p className="text-[10px] text-amber-200/70 pt-0.5 truncate">
                  Autonomous selector repair on DOM mutation
                </p>
              </div>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-amber-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>Active Ingestion</span>
            </div>
          </div>
        );

      case "voice-agent":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#1e0836] via-[#3b0764] to-[#140524] text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-fuchsia-500/20 blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-fuchsia-200 border border-white/10">
                Conversational Voice AI
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                <span className="text-xs font-mono text-fuchsia-300">&lt;500ms Latency</span>
              </div>
            </div>

            {/* Audio Waveform & Agent Studio Frame */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg my-auto">
              <div className="flex justify-between items-center text-[10px] font-mono text-fuchsia-200/80 mb-2 pb-1.5 border-b border-white/10">
                <span>WebSocket Audio Streaming</span>
                <span className="text-fuchsia-300">Uplift AI + FastAPI</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 py-2">
                <span className="w-1.5 h-4 bg-fuchsia-400 rounded-full animate-pulse" />
                <span className="w-1.5 h-7 bg-fuchsia-300 rounded-full" />
                <span className="w-1.5 h-10 bg-pink-300 rounded-full animate-pulse" />
                <span className="w-1.5 h-6 bg-fuchsia-300 rounded-full" />
                <span className="w-1.5 h-8 bg-fuchsia-400 rounded-full" />
                <span className="w-1.5 h-3 bg-fuchsia-500 rounded-full" />
                <span className="w-1.5 h-9 bg-pink-300 rounded-full animate-pulse" />
                <span className="w-1.5 h-5 bg-fuchsia-400 rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] text-fuchsia-200/70 pt-1 font-mono">
                <span>Zero-Code Conversational Setup</span>
                <span className="text-emerald-300">Guardrails Active</span>
              </div>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-fuchsia-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>Live Demo</span>
            </div>
          </div>
        );

      case "ecommerce-rag":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0f172a] via-[#24133b] to-[#150a24] text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            <div className="absolute right-0 -bottom-6 w-36 h-36 rounded-full bg-pink-500/20 blur-xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-pink-200 border border-white/10">
                Agentic RAG & LLMOps
              </span>
              <span className="text-xs font-mono text-pink-300">Weaviate + Phoenix</span>
            </div>

            {/* Recursive Retrieval Card */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg my-auto">
              <div className="flex justify-between items-center text-[10px] font-mono text-pink-200/80 mb-2 pb-1.5 border-b border-white/10">
                <span>Self-Correction Retrieval Loop</span>
                <span className="text-emerald-400 font-bold">Faithfulness: 0.96</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center font-mono">
                <div className="p-1.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] text-pink-300 block">Precision Boost</span>
                  <span className="font-bold text-white text-xs">+8%</span>
                </div>
                <div className="p-1.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] text-rose-300 block">Recall Increase</span>
                  <span className="font-bold text-white text-xs">+14%</span>
                </div>
              </div>
              <p className="text-[10px] text-pink-200/70 pt-1.5 font-mono text-center truncate">
                Query Reformulation & LLM Hallucination Tracing
              </p>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-pink-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>Production Pipeline</span>
            </div>
          </div>
        );

      default:
        // Fully dynamic banner fallback for any other or future project
        return (
          <div
            className="w-full h-full p-6 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-102 transition-transform duration-500"
            style={{
              background: `linear-gradient(135deg, ${project.color || "#0f172a"} 0%, #1e1b4b 50%, #030712 100%)`,
            }}
          >
            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-wide text-neutral-200 border border-white/10">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-300">{project.status}</span>
            </div>

            <div className="z-10 my-auto text-center py-2">
              <h4 className="font-serif italic text-xl text-white">
                {project.title}
              </h4>
              <p className="text-xs text-neutral-300 mt-1 max-w-sm mx-auto line-clamp-2">
                {project.subtitle}
              </p>
            </div>

            <div className="z-10 flex justify-between items-end text-xs text-neutral-300 font-mono">
              <span className="uppercase tracking-wider">{project.company}</span>
              <span>{project.year}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      role="button"
      className="group block rounded-3xl bg-white border border-neutral-200/90 hover:border-neutral-400/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col text-left cursor-pointer"
    >
      {/* Visual Header / Mockup Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-neutral-100 bg-neutral-900">
        {project.coverImage ? (
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Elegant glass overlay & status badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-wide text-white border border-white/10 shadow-xs">
                {project.category}
              </span>
            </div>
            <div className="absolute bottom-3 right-3 z-10">
              <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/15">
                {project.status}
              </span>
            </div>
          </div>
        ) : (
          getBannerGraphics()
        )}
      </div>

      {/* Content Info */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.year}
            </span>
          </div>

          <h3 className="font-serif text-2xl text-[#181616] group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-700">
          <span className="text-neutral-500 font-normal">
            {project.company}
          </span>
          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#181616] font-semibold">
            <span>View project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-800" />
          </span>
        </div>
      </div>
    </div>
  );
}
