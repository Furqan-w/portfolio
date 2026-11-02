"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft, ArrowUpRight, Send, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import CaseStudyLayout from "./CaseStudyLayout";
import ProjectCard from "./ProjectCard";
import ListenWidget from "./widgets/ListenWidget";
import WatchWidget from "./widgets/WatchWidget";
import ReadWidget from "./widgets/ReadWidget";
import ToolKitWidget from "./widgets/ToolKitWidget";
import BucketListWidget from "./widgets/BucketListWidget";

interface SinglePageModalProps {
  activeItem: {
    type: "project" | "section" | "widget";
    id: string;
  } | null;
  onClose: () => void;
  onSelectProject: (slug: string) => void;
}

export default function SinglePageModal({
  activeItem,
  onClose,
  onSelectProject,
}: SinglePageModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!activeItem) return null;

  // Render Project Case Study
  if (activeItem.type === "project") {
    const project = PORTFOLIO_DATA.projects.find((p) => p.slug === activeItem.id);
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white rounded-[4px] border border-[#8888884d] shadow-[0_10px_25px_rgba(0,0,0,0.12)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Framer-style Window Top Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-[#f5f6f380] backdrop-blur-md border-b border-[#88888826]">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#8888884d] hover:bg-[#d13434] transition-colors"
                title="Close"
              />
              <div className="w-3 h-3 rounded-full bg-[#8888884d]" />
              <div className="w-3 h-3 rounded-full bg-[#8888884d]" />
              <span className="ml-3 text-xs font-mono text-[#888888]">
                {project.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs text-[#666666] hover:text-[#181616] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Canvas</span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-10 bg-white">
            <CaseStudyLayout project={project} />
          </div>
        </motion.div>
      </div>
    );
  }

  // Render Section (Work, About, Resume, Contact)
  if (activeItem.type === "section") {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white rounded-[4px] border border-[#8888884d] shadow-[0_10px_25px_rgba(0,0,0,0.12)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Framer-style Window Top Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-[#f5f6f380] backdrop-blur-md border-b border-[#88888826]">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#8888884d] hover:bg-[#d13434] transition-colors"
                title="Close"
              />
              <div className="w-3 h-3 rounded-full bg-[#8888884d]" />
              <div className="w-3 h-3 rounded-full bg-[#8888884d]" />
              <span className="ml-3 text-xs font-mono uppercase tracking-wider text-[#888888]">
                {activeItem.id}
              </span>
            </div>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs text-[#666666] hover:text-[#181616] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Canvas</span>
            </button>
          </div>

          <div className="overflow-y-auto flex-1 p-6 sm:p-10 bg-white">
            {activeItem.id === "work" && (
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                    Portfolio
                  </span>
                  <h2 className="font-serif italic text-3xl text-neutral-900 mt-1">
                    Selected Works
                  </h2>
                  <p className="text-xs text-neutral-600 mt-1">
                    Projects spanning LLM fine-tuning, autonomous multi-agent workflows, semantic search, and RAG systems.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.projects.map((proj) => (
                    <div
                      key={proj.slug}
                      onClick={() => onSelectProject(proj.slug)}
                      className="cursor-pointer"
                    >
                      <ProjectCard project={proj} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeItem.id === "about" && (
              <div className="space-y-8 max-w-2xl mx-auto">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                    {PORTFOLIO_DATA.title}
                  </span>
                  <h2 className="font-serif italic text-3xl text-neutral-900 mt-1">
                    {PORTFOLIO_DATA.name}
                  </h2>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    {PORTFOLIO_DATA.location} • AI Engineer at QTO Dev
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-neutral-700">
                  {PORTFOLIO_DATA.bio}
                </p>

                {/* Experience */}
                <div className="space-y-4 pt-4 border-t border-neutral-200">
                  <h3 className="font-serif text-xl text-neutral-900">Experience</h3>
                  <div className="space-y-3">
                    {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-[#f5f6f3] border border-[#88888826] space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-neutral-900">{exp.company} — {exp.role}</span>
                          <span className="font-mono text-neutral-400">{exp.period}</span>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed font-light">{exp.description}</p>
                        {exp.skills && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.skills.map((s, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white text-neutral-600 border border-neutral-200">
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Certifications */}
                <div className="space-y-4 pt-4 border-t border-neutral-200">
                  <h3 className="font-serif text-xl text-neutral-900">Education & Certifications</h3>
                  <div className="space-y-3">
                    {PORTFOLIO_DATA.education.map((edu, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-[#f5f6f3] border border-[#88888826] space-y-1 text-xs">
                        <div className="flex justify-between items-center font-semibold text-neutral-900">
                          <span>{edu.institution}</span>
                          <span className="font-mono text-neutral-400">{edu.honors}</span>
                        </div>
                        <p className="text-neutral-600 font-light">{edu.degree} • CGPA: {edu.cgpa}</p>
                      </div>
                    ))}

                    <div className="p-4 rounded-lg bg-[#f5f6f3] border border-[#88888826] space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block">Key Certifications</span>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs">
                        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                          <div key={idx} className="p-2 rounded bg-white border border-neutral-200/80">
                            <p className="font-medium text-neutral-900 leading-tight">{cert.title}</p>
                            <p className="text-[11px] text-neutral-500 font-mono mt-0.5">{cert.issuer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeItem.id === "resume" && (
              <div className="space-y-8 max-w-2xl mx-auto">
                <div className="flex justify-between items-end pb-4 border-b border-neutral-200">
                  <div>
                    <h2 className="font-serif italic text-3xl text-neutral-900">{PORTFOLIO_DATA.name}</h2>
                    <p className="text-xs text-neutral-500 font-mono mt-1">Full-Stack AI Engineer • RAG, Multi-Agent Systems & Production AI</p>
                  </div>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Furqan_resume.pdf`}
                    download="Furqan_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181616] text-white text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resume</span>
                  </a>
                </div>

                <div className="space-y-6 text-xs text-neutral-800">
                  <div className="space-y-2">
                    <span className="font-mono uppercase text-neutral-400 font-bold block">Summary</span>
                    <p className="leading-relaxed font-light text-neutral-600">{PORTFOLIO_DATA.bio}</p>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono uppercase text-neutral-400 font-bold block">Experience</span>
                    {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#f5f6f3] border border-[#88888826] space-y-1">
                        <div className="flex justify-between font-semibold text-neutral-900">
                          <span>{exp.company} — {exp.role}</span>
                          <span className="font-mono font-normal text-neutral-400">{exp.period}</span>
                        </div>
                        <p className="text-neutral-600 leading-relaxed font-light">{exp.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2 border-t border-neutral-200">
                    <span className="font-mono uppercase text-neutral-400 font-bold block">Education</span>
                    {PORTFOLIO_DATA.education.map((edu, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#f5f6f3] border border-[#88888826] space-y-0.5">
                        <div className="flex justify-between font-semibold text-neutral-900">
                          <span>{edu.institution}</span>
                          <span className="font-mono font-normal text-neutral-400">{edu.honors}</span>
                        </div>
                        <p className="text-neutral-600">{edu.degree} • CGPA: {edu.cgpa}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2 border-t border-neutral-200">
                    <span className="font-mono uppercase text-neutral-400 font-bold block">Certifications</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-[#f5f6f3] border border-[#88888826]">
                          <p className="font-semibold text-neutral-900">{cert.title}</p>
                          <p className="text-neutral-500 font-mono text-[11px]">{cert.issuer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeItem.id === "contact" && (
              <div className="max-w-xl mx-auto space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                    Get in touch
                  </span>
                  <h2 className="font-serif italic text-3xl text-neutral-900 mt-1">
                    My inbox is open
                  </h2>
                  <p className="text-xs text-neutral-600 mt-1">
                    Have an idea, project, or want to talk mountains and movies? Drop a message!
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message sent! Thanks for reaching out.");
                    onClose();
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f5f6f3] border border-[#88888826] text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f5f6f3] border border-[#88888826] text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Message..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f5f6f3] border border-[#88888826] text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#181616] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Send message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <div className="pt-2 text-center">
                  <p className="text-xs text-neutral-500 font-mono">
                    Direct email: {PORTFOLIO_DATA.contact.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Render Widget (Listen, Watch, Read, Tool Kit, Bucket List, Experience)
  if (activeItem.type === "widget") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white rounded-[4px] border border-[#8888884d] shadow-[0_10px_25px_rgba(0,0,0,0.12)] p-6 overflow-hidden"
        >
          {/* Framer-style window controls */}
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-[#88888826]">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#8888884d] hover:bg-[#d13434] transition-colors"
                title="Close"
              />
              <div className="w-3 h-3 rounded-full bg-[#8888884d]" />
              <div className="w-3 h-3 rounded-full bg-[#8888884d]" />
              <span className="ml-2 text-xs font-mono uppercase text-[#888888]">
                {activeItem.id}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="Close widget dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-1">
            {activeItem.id === "listen" && <ListenWidget />}
            {activeItem.id === "watch" && <WatchWidget />}
            {activeItem.id === "read" && <ReadWidget />}
            {activeItem.id === "toolkit" && <ToolKitWidget />}
            {(activeItem.id === "bucket-list" || activeItem.id === "bucketlist") && (
              <BucketListWidget />
            )}
            {activeItem.id === "experience" && (
              <div className="space-y-3">
                <h3 className="font-serif text-lg text-neutral-900">Teams I've Worked With</h3>
                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#f5f6f3] border border-[#88888826] text-xs space-y-1">
                      <div className="flex justify-between font-medium text-neutral-900">
                        <span>{exp.company}</span>
                        <span className="text-neutral-400 font-mono text-[11px]">{exp.period}</span>
                      </div>
                      <div className="text-neutral-600 font-medium text-[11px]">{exp.role}</div>
                      <p className="text-neutral-500 text-[11px] leading-relaxed font-light">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
