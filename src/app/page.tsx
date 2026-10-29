"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import RadialConstellationGraph from "@/components/RadialConstellationGraph";
import SinglePageModal from "@/components/SinglePageModal";

export default function SinglePagePortfolio() {
  const [activeModal, setActiveModal] = useState<{
    type: "project" | "section" | "widget";
    id: string;
  } | null>(null);

  // Global listener for opening sections from Navbar, Left Card, or Nodes
  useEffect(() => {
    const handleOpenModal = (e: any) => {
      if (e.detail) {
        setActiveModal(e.detail);
      }
    };
    window.addEventListener("open-portfolio-modal", handleOpenModal);
    return () => window.removeEventListener("open-portfolio-modal", handleOpenModal);
  }, []);

  const handleOpenProject = (slug: string) => {
    setActiveModal({ type: "project", id: slug });
  };

  const handleOpenSection = (section: "work" | "about" | "resume" | "contact") => {
    setActiveModal({ type: "section", id: section });
  };

  const handleOpenWidget = (widget: string) => {
    setActiveModal({ type: "widget", id: widget });
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#f5f6f3]">
      {/* 100% Pure Interactive Constellation Canvas */}
      <RadialConstellationGraph
        onOpenProject={handleOpenProject}
        onOpenSection={handleOpenSection}
        onOpenWidget={handleOpenWidget}
      />

      {/* In-place Single Page Overlay Modal for clicked Nodes / Nav */}
      <AnimatePresence>
        {activeModal && (
          <SinglePageModal
            activeItem={activeModal}
            onClose={() => setActiveModal(null)}
            onSelectProject={handleOpenProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
