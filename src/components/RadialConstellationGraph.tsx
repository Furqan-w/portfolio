"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Custom "FU" Monogram Logo
export function CenterLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      id="svg-logo-3"
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="300" height="300" fill="none" />
      {/* 'f' Stem flowing down into a smooth 'u' basin, then ascending right */}
      <path
        className="logo-path"
        d="M 175,60 C 125,60 110,90 110,130 L 110,190 C 110,225 135,245 165,245 C 195,245 220,225 220,190 L 220,130"
        fill="none"
        stroke="#18181B"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Crossbar extending across the 'f' stem */}
      <path
        className="logo-accent-path"
        d="M 75,130 L 165,130"
        fill="none"
        stroke="#18181B"
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LocationPinIcon({ className = "w-[16px] h-[16px]" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M10 1.25C8.17727 1.25207 6.42979 1.97706 5.14092 3.26592C3.85206 4.55479 3.12707 6.30227 3.125 8.125C3.125 14.0078 9.375 18.4508 9.64141 18.6367C9.74649 18.7103 9.87169 18.7498 10 18.7498C10.1283 18.7498 10.2535 18.7103 10.3586 18.6367C10.625 18.4508 16.875 14.0078 16.875 8.125C16.8729 6.30227 16.1479 4.55479 14.8591 3.26592C13.5702 1.97706 11.8227 1.25207 10 1.25ZM10 5.625C10.4945 5.625 10.9778 5.77162 11.3889 6.04633C11.8 6.32103 12.1205 6.71148 12.3097 7.16829C12.4989 7.62511 12.5484 8.12777 12.452 8.61273C12.3555 9.09768 12.1174 9.54314 11.7678 9.89277C11.4181 10.2424 10.9727 10.4805 10.4877 10.577C10.0028 10.6734 9.50011 10.6239 9.04329 10.4347C8.58648 10.2455 8.19603 9.92505 7.92133 9.51393C7.64662 9.1028 7.5 8.61945 7.5 8.125C7.5 7.46196 7.76339 6.82607 8.23223 6.35723C8.70107 5.88839 9.33696 5.625 10 5.625Z"
        fill="#888888"
      />
    </svg>
  );
}

export function GeometricShape({
  type,
  hasDot = false,
}: {
  type: "hexagon" | "triangle" | "square";
  hasDot?: boolean;
}) {
  if (type === "hexagon") {
    return (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 55 55" fill="none">
          <path
            d="M37.0314 10.4996L46.7428 27.3203L37.0319 44.1412L17.6092 44.1406L7.89773 27.3199L17.6086 10.499L37.0314 10.4996Z"
            fill="white"
            stroke="black"
            strokeWidth="1.2"
          />
        </svg>
        {hasDot && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#181616]" />
        )}
      </div>
    );
  }

  if (type === "triangle") {
    return (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path
            d="M36.4551 29.5L3.54492 29.5L20 0.999023L36.4551 29.5Z"
            fill="white"
            stroke="black"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    );
  }

  // square
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 57 57" fill="none">
        <path
          d="M41.9265 41.9265H14.6421V14.6421H41.9265V41.9265Z"
          fill="white"
          stroke="black"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export function DashedDivider() {
  return (
    <div className="w-full my-3 overflow-hidden">
      <svg width="100%" height="2" className="overflow-visible">
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#000000" strokeDasharray="4 4" strokeWidth="1" opacity="0.8" />
      </svg>
    </div>
  );
}

// Arrow SVG for sidebar
function RightArrowIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 14.4 12.001" fill="none">
      <path
        d="M 14.224 6.425 L 8.825 11.825 C 8.59 12.059 8.21 12.059 7.975 11.825 C 7.741 11.59 7.741 11.21 7.975 10.976 L 12.352 6.6 L 0.6 6.6 C 0.269 6.6 0 6.332 0 6 C 0 5.669 0.269 5.4 0.6 5.4 L 12.352 5.4 L 7.975 1.025 C 7.741 0.79 7.741 0.41 7.975 0.176 C 8.21 -0.059 8.59 -0.059 8.825 0.176 L 14.224 5.576 C 14.337 5.688 14.4 5.841 14.4 6 C 14.4 6.16 14.337 6.312 14.224 6.425 Z"
        fill="#000"
      />
    </svg>
  );
}

export interface NodeDef {
  id: string;
  name: string;
  subtitle: string;
  shape: "hexagon" | "triangle" | "square";
  hasDot?: boolean;
  type: "center" | "project" | "section" | "widget";
  actionId: string;
}

// Interactive Constellation Nodes
export const PORTFOLIO_NODES: NodeDef[] = [
  {
    id: "center",
    name: "Furqan Waris",
    subtitle: "",
    shape: "hexagon",
    type: "center",
    actionId: "center",
  },
  {
    id: "work",
    name: "Work",
    subtitle: "Go to work",
    shape: "hexagon",
    hasDot: false,
    type: "section",
    actionId: "work",
  },
  {
    id: "galaxy-knowledge",
    name: "Galaxy Knowledge",
    subtitle: "Llama LLM Fine-Tuning",
    shape: "hexagon",
    hasDot: true,
    type: "project",
    actionId: "galaxy-knowledge",
  },
  {
    id: "enterprise-erp",
    name: "Enterprise ERP",
    subtitle: "LangGraph Agentic Assistant",
    shape: "hexagon",
    hasDot: true,
    type: "project",
    actionId: "enterprise-erp",
  },
  {
    id: "hr-recruitment",
    name: "HR Recruitment",
    subtitle: "Semantic Resume Matching",
    shape: "hexagon",
    hasDot: true,
    type: "project",
    actionId: "hr-recruitment",
  },
  {
    id: "intelligent-scraper",
    name: "Intelligent Scraper",
    subtitle: "Self-healing Playwright Crawler",
    shape: "hexagon",
    hasDot: false,
    type: "project",
    actionId: "intelligent-scraper",
  },
  {
    id: "voice-agent",
    name: "Voice Agent",
    subtitle: "Dynamic Uplift AI Platform",
    shape: "hexagon",
    hasDot: false,
    type: "project",
    actionId: "voice-agent",
  },
  {
    id: "ecommerce-rag",
    name: "E-Commerce RAG",
    subtitle: "Weaviate & Phoenix LLMOps",
    shape: "hexagon",
    hasDot: false,
    type: "project",
    actionId: "ecommerce-rag",
  },
  {
    id: "about",
    name: "About",
    subtitle: "Who I am",
    shape: "triangle",
    type: "section",
    actionId: "about",
  },
  {
    id: "resume",
    name: "Resume",
    subtitle: "View credentials",
    shape: "triangle",
    type: "section",
    actionId: "resume",
  },
  {
    id: "experience",
    name: "Experience",
    subtitle: "Teams I've worked with",
    shape: "triangle",
    type: "widget",
    actionId: "experience",
  },
  {
    id: "toolkit",
    name: "Tool Kit",
    subtitle: "Tools I use daily",
    shape: "triangle",
    type: "widget",
    actionId: "toolkit",
  },
  {
    id: "watch",
    name: "Watch",
    subtitle: "Film recommendations for you",
    shape: "square",
    type: "widget",
    actionId: "watch",
  },
  // {
  //   id: "read",
  //   name: "Read",
  //   subtitle: "Book recommendations for you",
  //   shape: "square",
  //   type: "widget",
  //   actionId: "read",
  // },
  {
    id: "bucket-list",
    name: "Bucket List",
    subtitle: "Things I'll achieve",
    shape: "square",
    type: "widget",
    actionId: "bucket-list",
  },
];

interface NodeState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
}

interface RadialGraphProps {
  onOpenProject: (slug: string) => void;
  onOpenSection: (section: "work" | "about" | "resume" | "contact") => void;
  onOpenWidget: (widget: string) => void;
}

export default function RadialConstellationGraph({
  onOpenProject,
  onOpenSection,
  onOpenWidget,
}: RadialGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Layout polar coordinates: node 0 at center radius 0, satellites around
  const initialLayout = useRef(
    PORTFOLIO_NODES.map((_, i) => {
      if (i === 0) return { angle: 0, radius: 0 };
      const satelliteCount = Math.max(1, PORTFOLIO_NODES.length - 1);
      const angle = ((i - 1) / satelliteCount) * Math.PI * 2 + (Math.sin(i * 1.7) * 0.3);
      const radius = 220 + (i % 3) * 65;
      return { angle, radius };
    })
  );

  const [nodes, setNodes] = useState<NodeState[]>(() =>
    PORTFOLIO_NODES.map((_, i) => {
      const cfg = initialLayout.current[i];
      const nw = i === 0 ? 110 : 130;
      const nh = i === 0 ? 76 : 60;
      return {
        x: (i === 0 ? 450 : 450 + Math.cos(cfg.angle) * cfg.radius) - nw / 2,
        y: (i === 0 ? 350 : 350 + Math.sin(cfg.angle) * cfg.radius) - nh / 2,
        vx: 0,
        vy: 0,
        w: nw,
        h: nh,
      };
    })
  );

  // Dragging state tracking
  const draggedIndexRef = useRef<number | null>(null);
  const isDraggingActiveRef = useRef(false);
  const pointerStartPosRef = useRef({ x: 0, y: 0 });
  const isFirstRender = useRef(true);



  // Play audio click sound extracted from Framer
  const playClickSound = useCallback(() => {
    try {
      const audio = new Audio("https://framerusercontent.com/assets/4sAbPLUtVGCbcdm61qOBmktOQ.mp3");
      audio.volume = 0.45;
      audio.play().catch(() => {});
    } catch {}
  }, []);

  // Compute exact geometric positioning: center node at (cx, cy), satellites orbiting around (cx, cy)
  const computeCenteredPositions = useCallback((width: number, height: number, prevList: NodeState[]) => {
    const cx = width / 2;
    const cy = height / 2;

    return prevList.map((n, i) => {
      const nw = n.w || (i === 0 ? 110 : 130);
      const nh = n.h || (i === 0 ? 76 : 60);

      if (i === 0) {
        return {
          ...n,
          w: nw,
          h: nh,
          x: cx - nw / 2,
          y: cy - nh / 2,
          vx: 0,
          vy: 0,
        };
      }

      const cfg = initialLayout.current[i];
      return {
        ...n,
        w: nw,
        h: nh,
        x: cx + Math.cos(cfg.angle) * cfg.radius - nw / 2,
        y: cy + Math.sin(cfg.angle) * cfg.radius - nh / 2,
        vx: 0,
        vy: 0,
      };
    });
  }, []);

  // Setup ResizeObserver to maintain perfect centering
  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      setSize({ width: rect.width, height: rect.height });

      setNodes((prev) => {
        if (!mounted) {
          return computeCenteredPositions(rect.width, rect.height, prev);
        }
        return prev;
      });
      setMounted(true);
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted, computeCenteredPositions]);

  // Measure actual DOM dimensions of nodes after render
  useEffect(() => {
    if (!mounted) return;
    setNodes((prev) => {
      let changed = false;
      const next = prev.map((n, i) => {
        const el = nodeRefs.current[i];
        if (!el) return n;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && (Math.abs(r.width - n.w) > 2 || Math.abs(r.height - n.h) > 2)) {
          changed = true;
          return { ...n, w: r.width, h: r.height };
        }
        return n;
      });
      return changed ? next : prev;
    });
  }, [mounted]);

  // EXACT FRAMER SIMULATION PHYSICS (port of function zi)
  useEffect(() => {
    if (!mounted || size.width === 0 || size.height === 0) return;

    let animId: number;
    const springLength = 290;
    const springStrength = 0.01;
    const damping = 0.6;
    const Bi = 40;     // boundary padding
    const Vi = 4;      // collision iterations
    const Hi = 0.5;    // collision push speed
    const Wi = 26;     // repulsion distance buffer
    const Gi = 0.015;  // repulsion strength

    function tick() {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        animId = requestAnimationFrame(tick);
        return;
      }

      setNodes((prev) => {
        const list = prev.map((n) => ({ ...n }));
        const center = list[0];
        const dragged = draggedIndexRef.current;

        // 1. Elastic rubber-band spring connecting Center (0) to each Satellite node (e)
        for (let e = 1; e < list.length; e++) {
          const child = list[e];
          const dx = child.x - center.x;
          const dy = child.y - center.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const force = (dist - springLength) * springStrength;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (dragged !== 0) {
            center.vx += fx;
            center.vy += fy;
          }
          if (dragged !== e) {
            child.vx -= fx;
            child.vy -= fy;
          }
        }

        // 2. Repulsion between all nodes so they never pile up
        for (let a = 0; a < list.length; a++) {
          for (let b = a + 1; b < list.length; b++) {
            const na = list[a];
            const nb = list[b];
            const cax = na.x + na.w / 2;
            const cay = na.y + na.h / 2;
            const cbx = nb.x + nb.w / 2;
            const cby = nb.y + nb.h / 2;
            const lx = cbx - cax;
            const ly = cby - cay;
            const d = Math.sqrt(lx * lx + ly * ly) || 0.001;
            const minDist = (na.w + nb.w) / 2 + Wi;

            if (d < minDist) {
              const rep = (minDist - d) * Gi;
              const rx = (lx / d) * rep;
              const ry = (ly / d) * rep;
              if (dragged !== a) {
                na.vx -= rx;
                na.vy -= ry;
              }
              if (dragged !== b) {
                nb.vx += rx;
                nb.vy += ry;
              }
            }
          }
        }

        // 3. Velocity integration & damping
        list.forEach((n, idx) => {
          if (dragged !== idx) {
            n.vx *= damping;
            n.vy *= damping;
            n.x += n.vx;
            n.y += n.vy;
          }
        });

        // 4. AABB Collision resolution
        for (let iter = 0; iter < Vi; iter++) {
          for (let a = 0; a < list.length; a++) {
            for (let b = a + 1; b < list.length; b++) {
              const na = list[a];
              const nb = list[b];
              const diffX = na.x + na.w / 2 - (nb.x + nb.w / 2);
              const diffY = na.y + na.h / 2 - (nb.y + nb.h / 2);
              const overlapX = (na.w + nb.w) / 2 - Math.abs(diffX);
              const overlapY = (na.h + nb.h) / 2 - Math.abs(diffY);

              if (overlapX > 0 && overlapY > 0) {
                if (overlapX < overlapY) {
                  const push = Math.min(overlapX / 2, Hi) * Math.sign(diffX || 1);
                  if (dragged !== a) na.x += push;
                  if (dragged !== b) nb.x -= push;
                } else {
                  const push = Math.min(overlapY / 2, Hi) * Math.sign(diffY || 1);
                  if (dragged !== a) na.y += push;
                  if (dragged !== b) nb.y -= push;
                }
              }
            }
          }
        }

        // 5. Boundary soft bounce
        list.forEach((n, idx) => {
          if (dragged === idx) return;
          const minX = Bi;
          const maxX = size.width - n.w - Bi;
          const minY = Bi;
          const maxY = size.height - n.h - Bi;
          const bFactor = 0.08;
          const bDamp = 0.85;

          if (n.x < minX) {
            n.vx += (minX - n.x) * bFactor;
            n.vx *= bDamp;
          } else if (n.x > maxX) {
            n.vx += (maxX - n.x) * bFactor;
            n.vx *= bDamp;
          }

          if (n.y < minY) {
            n.vy += (minY - n.y) * bFactor;
            n.vy *= bDamp;
          } else if (n.y > maxY) {
            n.vy += (maxY - n.y) * bFactor;
            n.vy *= bDamp;
          }
        });

        return list;
      });

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [mounted, size]);

  // Pointer event handlers with pointer capture
  const handlePointerDown = (e: React.PointerEvent, idx: number) => {
    draggedIndexRef.current = idx;
    isDraggingActiveRef.current = false;
    pointerStartPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (draggedIndexRef.current === null) return;
    const dx = e.clientX - pointerStartPosRef.current.x;
    const dy = e.clientY - pointerStartPosRef.current.y;

    if (!isDraggingActiveRef.current) {
      if (Math.hypot(dx, dy) < 3) return; // 3px threshold
      isDraggingActiveRef.current = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }

    pointerStartPosRef.current = { x: e.clientX, y: e.clientY };
    setNodes((prev) =>
      prev.map((n, i) =>
        i === draggedIndexRef.current
          ? { ...n, x: n.x + dx, y: n.y + dy, vx: 0, vy: 0 }
          : n
      )
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingActiveRef.current) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
    draggedIndexRef.current = null;
    isDraggingActiveRef.current = false;
    setHoveredIdx(null);
  };

  // Node click handler
  const handleNodeClick = (node: NodeDef) => {
    if (isDraggingActiveRef.current) return;
    playClickSound();

    if (node.type === "project") {
      onOpenProject(node.actionId);
    } else if (node.type === "section") {
      onOpenSection(node.actionId as any);
    } else if (node.type === "widget") {
      onOpenWidget(node.actionId);
    } else if (node.type === "center") {
      onOpenSection("about");
    }
  };

  // Starburst center coordinates for lines
  const centerNode = nodes[0] || { x: 0, y: 0, w: 110, h: 76 };
  const starburstCenterX = centerNode.x + centerNode.w / 2;
  const starburstCenterY = centerNode.y + 20; // 20px is center of 40px starburst

  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#f5f6f3] text-[#181616] overflow-hidden select-none">
      {/* LEFT PROFILE CARD - SIDEBAR */}
      <div className="w-full md:w-[320px] md:max-w-[320px] shrink-0 p-4 md:py-6 md:pl-6 md:pr-0 z-20 pointer-events-auto">
        <div className="bg-white rounded-[4px] p-5 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#88888826] flex flex-col gap-1">
          {/* Header */}
          <div
            onClick={() => {
              playClickSound();
              onOpenSection("about");
            }}
            className="flex items-center gap-2.5 cursor-pointer py-1"
          >
            <CenterLogo className="w-[26px] h-[26px] shrink-0" />
            <span className="font-medium text-[15px] tracking-tight text-[#181616]">
              Furqan Waris
            </span>
          </div>

          <DashedDivider />

          {/* Bio */}
          <p className="text-[13px] leading-[1.38] text-[#666666] tracking-tight">
            Full-Stack AI Engineer specializing in applied artificial intelligence, RAG pipelines, and agentic workflows.
            Currently building production AI systems
            {/* <span className="text-[#181919] font-medium underline underline-offset-2">
              QTO Dev
            </span> */}
            .
          </p>

          <DashedDivider />

          {/* Nav links with icons */}
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                playClickSound();
                onOpenSection("work");
              }}
              className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-[#181616] tracking-tight hover:text-[#0088ff] transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 border border-black rotate-45" />
                </div>
                <span>Work</span>
              </div>
              <div className="transition-transform group-hover:translate-x-1">
                <RightArrowIcon />
              </div>
            </button>

            <DashedDivider />

            <button
              onClick={() => {
                playClickSound();
                onOpenSection("about");
              }}
              className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-[#181616] tracking-tight hover:text-[#0088ff] transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-black" />
                </div>
                <span>About</span>
              </div>
              <div className="transition-transform group-hover:translate-x-1">
                <RightArrowIcon />
              </div>
            </button>

            <DashedDivider />

            <button
              onClick={() => {
                playClickSound();
                onOpenSection("resume");
              }}
              className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-[#181616] tracking-tight hover:text-[#0088ff] transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 border border-black" />
                </div>
                <span>Resume</span>
              </div>
              <div className="transition-transform group-hover:translate-x-1">
                <RightArrowIcon />
              </div>
            </button>

            <DashedDivider />

            <button
              onClick={() => {
                playClickSound();
                onOpenSection("contact");
              }}
              className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-[#181616] tracking-tight hover:text-[#0088ff] transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>
                <span>Contact</span>
              </div>
              <div className="transition-transform group-hover:translate-x-1">
                <RightArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT CANVAS: 100% FAITHFUL CONSTELLATION GRAPH */}
      <div
        ref={containerRef}
        onPointerMove={(e) => {
          handlePointerMove(e);
          if (
            hoveredIdx !== null &&
            draggedIndexRef.current === null &&
            (e.target === containerRef.current || (e.target as HTMLElement)?.tagName === "svg" || (e.target as HTMLElement)?.tagName === "line")
          ) {
            setHoveredIdx(null);
          }
        }}
        onPointerLeave={() => {
          if (draggedIndexRef.current === null) {
            setHoveredIdx(null);
          }
        }}
        onPointerUp={handlePointerUp}
        className="flex-1 h-full relative overflow-hidden bg-[#f5f6f3]"
      >
        {/* Connecting Lines SVG */}
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 pointer-events-none overflow-visible transition-opacity duration-200"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          {nodes.slice(1).map((node, i) => {
            const idx = i + 1;
            // Hover dimming: If any child node is hovered, all other lines dim to 0.05
            const isLineDimmed = hoveredIdx !== null && hoveredIdx !== 0 && hoveredIdx !== idx;

            return (
              <line
                key={`line-${idx}`}
                x1={starburstCenterX}
                y1={starburstCenterY}
                x2={node.x + node.w / 2}
                y2={node.y + 22}
                stroke="#888888"
                strokeWidth={1}
                strokeOpacity={isLineDimmed ? 0.05 : 0.85}
                className="transition-[stroke-opacity] duration-200"
              />
            );
          })}
        </svg>

        {/* NODES */}
        {PORTFOLIO_NODES.map((node, idx) => {
          const state = nodes[idx] || { x: 0, y: 0, w: 140, h: 60 };
          const isCenter = idx === 0;
          const isHovered = hoveredIdx === idx;
          // Dim other nodes to 0.05 if another child node is hovered
          const isNodeDimmed = hoveredIdx !== null && !isCenter && hoveredIdx !== idx;

          return (
            <div
              key={node.id}
              ref={(el) => {
                nodeRefs.current[idx] = el;
              }}
              onPointerDown={(e) => handlePointerDown(e, idx)}
              onPointerEnter={() => setHoveredIdx(idx)}
              onPointerLeave={() => setHoveredIdx(null)}
              onClick={() => handleNodeClick(node)}
              className="absolute cursor-grab active:cursor-grabbing touch-none select-none transition-opacity duration-200 group w-fit"
              style={{
                left: `${state.x}px`,
                top: `${state.y}px`,
                zIndex: isCenter || isHovered ? 30 : 10,
                opacity: mounted ? (isNodeDimmed ? 0.05 : 1) : 0,
              }}
            >
              {isCenter ? (
                /* CENTER NODE - CLEAN & SEAMLESS, NO WRAPPER BOX OR BORDER */
                <div className="flex flex-col items-center justify-center">
                  {/* Clean Logo Icon */}
                  <div className="transition-transform duration-200 hover:scale-105">
                    <CenterLogo className="w-10 h-10" />
                  </div>

                  {/* Clean Title */}
                  <div className="mt-1">
                    <span className="font-medium text-[15px] tracking-tight text-[#181616]">
                      Furqan Waris
                    </span>
                  </div>
                </div>
              ) : (
                /* SATELLITE GEOMETRIC NODE */
                <div className="relative flex flex-col items-center">
                  {/* Geometric Shape Icon */}
                  <div className="z-20 p-0.5 transition-transform duration-150 group-hover:scale-105">
                    <GeometricShape type={node.shape} hasDot={node.hasDot} />
                  </div>

                  {/* TERMINAL TAG NODE LABEL */}
                  <div className="z-20 mt-1 flex flex-col items-center select-none">
                    <div className="px-1 py-0.5">
                      <span className="text-[11px] font-mono tracking-wide uppercase text-neutral-800 font-medium">
                        {node.name}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-mono text-neutral-400 tracking-tight transition-all duration-200 ${
                        isHovered ? "opacity-100 max-h-4" : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      // {node.subtitle}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>


    </div>
  );
}
