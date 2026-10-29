"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  PhoneCall,
  Bot,
  Database,
  CheckCircle2,
  Sliders,
  Play,
  RefreshCw,
  Zap,
} from "lucide-react";

interface Node {
  id: string;
  title: string;
  subtitle: string;
  type: "trigger" | "agent" | "dialogue" | "evaluation" | "sync";
  icon: any;
  status: "idle" | "active" | "success";
  metrics?: string;
  details: {
    label: string;
    description: string;
    config: Record<string, string>;
  };
}

const NODES: Node[] = [
  {
    id: "node-1",
    title: "Campaign Ingestion",
    subtitle: "CSV Upload & Auto-Mapping",
    type: "trigger",
    icon: Database,
    status: "success",
    metrics: "2,400 leads/batch",
    details: {
      label: "Lead Cohort Trigger",
      description:
        "Validates CSV schema, auto-maps phone numbers & candidate variables, applies regex phone hygiene checks.",
      config: {
        "Input Format": "CSV / REST Webhook",
        "Hygiene Filter": "E.164 Strict Validation",
        Concurrency: "50 simultaneous lines",
      },
    },
  },
  {
    id: "node-2",
    title: "AI Voice Persona",
    subtitle: "Persona: Maya (Bilingual)",
    type: "agent",
    icon: Bot,
    status: "active",
    metrics: "Latency: 420ms",
    details: {
      label: "Conversational Agent Model",
      description:
        "Ultra-low latency speech-to-speech engine with seamless English & Hindi language code-switching.",
      config: {
        Model: "Hunar Custom Voice V2",
        Language: "English (Indian) + Hindi",
        Tone: "Professional, Empathetic",
      },
    },
  },
  {
    id: "node-3",
    title: "Dynamic Dialogue Engine",
    subtitle: "Contextual Branching Script",
    type: "dialogue",
    icon: PhoneCall,
    status: "active",
    metrics: "4 Turn Avg Length",
    details: {
      label: "Stateful Call Orchestration",
      description:
        "Maintains conversational guardrails, handles candidate interruptions, and extracts key availability dates.",
      config: {
        "Interrupt Handling": "Sub-200ms Barge-in",
        "Script Mode": "Dynamic Branching Tree",
        Context: "Full Transcript Buffer",
      },
    },
  },
  {
    id: "node-4",
    title: "Outcome & Qualification",
    subtitle: "Real-time Criteria Evaluation",
    type: "evaluation",
    icon: CheckCircle2,
    status: "success",
    metrics: "88% Accuracy",
    details: {
      label: "AI Evaluation & Scoring",
      description:
        "Applies predefined hiring rubric to grade candidate fit, intent score, and salary expectation match.",
      config: {
        "Grading Rubric": "5-point Experience Matrix",
        "Intent Threshold": ">= 75% Qualified",
        Summary: "Automated 2-line Recruiter Digest",
      },
    },
  },
  {
    id: "node-5",
    title: "CRM Synchronization",
    subtitle: "Hunar Connect & Salesforce",
    type: "sync",
    icon: Zap,
    status: "success",
    metrics: "Instant Webhook",
    details: {
      label: "Downstream Enterprise Dispatch",
      description:
        "Instantly pushes call audio recording, timestamped transcript, and qualification status to enterprise CRM.",
      config: {
        Destination: "Hunar Connect / API",
        "Sync Latency": "< 1.2 seconds",
        Payload: "Audio + Transcript + JSON Tags",
      },
    },
  },
];

export default function InteractiveGraph() {
  const [selectedNode, setSelectedNode] = useState<Node>(NODES[1]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [pulseStep, setPulseStep] = useState(1);

  const handleSimulate = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setPulseStep(step);
      if (step < NODES.length) {
        setSelectedNode(NODES[step]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white shadow-md overflow-hidden my-8">
      {/* Canvas Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/70">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <span className="h-4 w-px bg-neutral-200" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-mono text-xs font-semibold text-neutral-800">
              Hunar Voice • Interactive Agent Workflow Graph
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2 sm:pt-0">
          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
            Click any node to inspect parameters
          </span>
          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181616] text-white text-xs font-medium hover:bg-neutral-800 disabled:opacity-50 transition-all shadow-xs"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Simulating Call Flow...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-white" />
                <span>Simulate Call Graph</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Graph Canvas Area */}
      <div className="p-6 sm:p-8 bg-[#fafbf9] relative overflow-x-auto">
        {/* Subtle Canvas Dot Grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Nodes Horizontal Flow Container */}
        <div className="relative min-w-[760px] flex items-center justify-between gap-4 py-8 z-10">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;
            const isCurrentSimulation = isSimulating && pulseStep === index;

            return (
              <div key={node.id} className="flex items-center flex-1">
                {/* Node Box */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedNode(node)}
                  className={`w-full p-4 rounded-2xl text-left transition-all relative ${
                    isSelected
                      ? "bg-white border-2 border-blue-600 shadow-lg ring-4 ring-blue-50"
                      : "bg-white border border-neutral-200/90 shadow-2xs hover:border-neutral-400"
                  }`}
                >
                  {isCurrentSimulation && (
                    <span className="absolute -top-2 -right-2 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 text-[9px] text-white items-center justify-center font-bold">
                        ✓
                      </span>
                    </span>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-semibold text-xs text-neutral-900 leading-tight">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5 truncate">
                    {node.subtitle}
                  </p>

                  <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-neutral-400">Status</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>
                </motion.button>

                {/* Connection Wire between nodes */}
                {index < NODES.length - 1 && (
                  <div className="w-8 relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-neutral-300 relative">
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600 transition-all duration-500 ${
                          isSimulating && pulseStep >= index
                            ? "left-full opacity-100 scale-125"
                            : "left-0 opacity-40 scale-75"
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Inspector Drawer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-6 border-t border-neutral-200 bg-white grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
              Node Inspector • {selectedNode.details.label}
            </span>
            <h3 className="font-serif text-lg text-neutral-900 font-medium">
              {selectedNode.title}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-light">
              {selectedNode.details.description}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(selectedNode.details.config).map(([key, value]) => (
              <div
                key={key}
                className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-0.5"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  {key}
                </span>
                <span className="text-xs font-semibold text-neutral-800 font-mono">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
