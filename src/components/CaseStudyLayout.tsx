"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import { Project, PORTFOLIO_DATA } from "@/data/portfolioData";
import InteractiveGraph from "@/components/InteractiveGraph";

interface CaseStudyLayoutProps {
  project: Project;
  onSelectProject?: (slug: string) => void;
  onClose?: () => void;
}

export default function CaseStudyLayout({
  project,
  onSelectProject,
  onClose,
}: CaseStudyLayoutProps) {
  // Find next project for bottom pagination
  const currentIndex = PORTFOLIO_DATA.projects.findIndex(
    (p) => p.slug === project.slug
  );
  const nextProject =
    PORTFOLIO_DATA.projects[(currentIndex + 1) % PORTFOLIO_DATA.projects.length];

  const handleNextProject = () => {
    if (onSelectProject) {
      onSelectProject(nextProject.slug);
    } else {
      window.dispatchEvent(
        new CustomEvent("open-portfolio-modal", {
          detail: { type: "project", id: nextProject.slug },
        })
      );
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Back to Work Nav */}
      <div className="mb-8">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-black transition-colors px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Constellation</span>
        </button>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 mb-10 pb-8 border-b border-neutral-200/80">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
            {project.category}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            {project.company} • {project.year}
          </span>
        </div>

        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#181616] tracking-tight leading-[1.1]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
          {project.subtitle}
        </p>

        {project.liveUrl && (
          <div className="pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181616] text-white text-xs font-medium hover:bg-neutral-800 transition-all shadow-xs"
            >
              <span>Visit live website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </header>

      {/* Metadata Overview Bento */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs mb-12">
        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono font-semibold">
            My Role
          </span>
          <p className="text-sm font-medium text-neutral-900">{project.role}</p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono font-semibold">
            Timeline
          </span>
          <p className="text-sm font-medium text-neutral-900">{project.timeline}</p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono font-semibold">
            Status
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-sm font-medium text-neutral-900">{project.status}</p>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono font-semibold">
            Team
          </span>
          <p className="text-xs text-neutral-600 leading-tight">
            {project.team.join(" • ")}
          </p>
        </div>
      </div>

      {/* Background Story Section */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-900" />
          <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-500 font-semibold">
            Background & Context
          </h2>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-medium">
          {project.background.title}
        </h3>

        <div className="space-y-4 text-base text-neutral-700 leading-relaxed font-light">
          {project.background.description.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {project.background.quote && (
          <blockquote className="my-8 p-6 rounded-2xl bg-neutral-100/80 border-l-4 border-neutral-900 font-serif italic text-lg sm:text-xl text-neutral-900">
            "{project.background.quote}"
          </blockquote>
        )}
      </section>

      {/* Audience Section (if present) */}
      {project.audience && (
        <section className="space-y-6 mb-16 p-6 sm:p-8 rounded-3xl bg-neutral-50/70 border border-neutral-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <h2 className="text-xs uppercase font-mono tracking-widest text-blue-700 font-semibold">
              Target Audience
            </h2>
          </div>

          <h3 className="font-serif text-2xl text-neutral-900">
            {project.audience.title}
          </h3>

          <p className="text-neutral-700 text-sm leading-relaxed">
            {project.audience.description}
          </p>

          {project.audience.details && (
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {project.audience.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-neutral-200/80 text-xs text-neutral-800 flex items-start gap-2 shadow-2xs"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Interactive Workflow Node Graph for AI case studies */}
      {(project.slug === "voice" || project.slug === "connect") && (
        <section className="mb-16">
          <InteractiveGraph />
        </section>
      )}

      {/* Deep-dive Sections */}
      <div className="space-y-16 mb-16">
        {project.sections.map((sec, idx) => (
          <section key={idx} className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400">
                0{idx + 1}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-500 font-semibold">
                {sec.subheading || "Product Decision"}
              </h2>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900">
              {sec.heading}
            </h3>

            <div className="space-y-3 text-neutral-700 leading-relaxed font-light">
              {sec.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Interactive Mockup Frame */}
            {sec.imagePlaceholder && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-900 text-white p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-white/60 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-[11px] text-white/80">
                      interface/{project.slug}/figma-spec
                    </span>
                  </div>
                  <span className="uppercase text-[10px] tracking-wider text-emerald-400">
                    Production Architecture
                  </span>
                </div>

                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto text-amber-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <p className="font-serif italic text-xl text-white">
                    {sec.imagePlaceholder.caption}
                  </p>
                  <p className="text-xs text-white/50 font-mono max-w-md mx-auto">
                    Engineered with Figma tokens, micro-interactions, responsive grids, and design system governance.
                  </p>
                </div>
              </div>
            )}

            {sec.highlight && (
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs font-medium flex items-center gap-2">
                <span className="text-amber-600 font-bold">Key insight:</span>
                <span>{sec.highlight}</span>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Impact & Metrics Grid */}
      {project.impact && project.impact.length > 0 && (
        <section className="space-y-6 mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 className="text-xs uppercase font-mono tracking-widest text-emerald-700 font-semibold">
              Impact & Outcomes
            </h2>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900">
            Measurable results in production
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {project.impact.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-100 space-y-1"
              >
                <span className="font-serif italic text-3xl sm:text-4xl text-[#181616] block">
                  {metric.metric}
                </span>
                <h4 className="text-xs font-semibold text-neutral-800">
                  {metric.label}
                </h4>
                {metric.description && (
                  <p className="text-[11px] text-neutral-500 leading-tight">
                    {metric.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Learnings Section */}
      {project.learnings && project.learnings.length > 0 && (
        <section className="space-y-4 mb-16 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
          <h3 className="font-serif text-xl text-neutral-900">
            Key takeaways from this build
          </h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            {project.learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-neutral-400 font-mono text-xs mt-0.5">
                  •
                </span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next Project Pagination */}
      <div className="pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Up next
        </span>
        <button
          onClick={handleNextProject}
          className="group inline-flex items-center gap-3 p-4 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all text-left"
        >
          <div className="text-right">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
              {nextProject.category}
            </span>
            <span className="font-serif italic text-lg text-neutral-900 group-hover:text-blue-600 transition-colors">
              {nextProject.title} →
            </span>
          </div>
        </button>
      </div>
    </article>
  );
}
