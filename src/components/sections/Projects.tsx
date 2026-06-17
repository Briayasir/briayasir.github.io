"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PipelineArchitecture } from "@/components/ui/PipelineArchitecture";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const projectTabs = [
  { id: "abstract", label: "System Abstract" },
  { id: "architecture", label: "Architecture Diagram" },
  { id: "stack", label: "Infrastructure Stack" },
  { id: "value", label: "Business Value Matrix" },
] as const;

type TabId = (typeof projectTabs)[number]["id"];

const diagramVariant = {
  healthcare: "healthcare" as const,
  modernization: "modernization" as const,
  fraud: "fraud" as const,
};

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeTab, setActiveTab] = useState<TabId>("abstract");
  const project = projects[activeProject];

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        index="04"
        title="Architecture Showcases"
        subtitle="Enterprise data platforms — system abstracts, pipeline diagrams, and business value matrices."
      />

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setActiveProject(i);
              setActiveTab("abstract");
            }}
            className={cn(
              "rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all",
              activeProject === i
                ? "border border-[#11567f] bg-[#11567f] text-white shadow-md dark:border-[#29b5e8] dark:bg-[#29b5e8] dark:text-slate-900"
                : "border border-slate-300 bg-white/80 text-slate-500 hover:border-slate-400 dark:border-slate-800 dark:bg-transparent dark:text-muted-foreground dark:hover:border-slate-600"
            )}
          >
            {p.tag}
          </button>
        ))}
      </div>

      <div className="enterprise-card overflow-hidden">
        <div className="border-b border-slate-800 p-6 md:p-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{project.tag}</span>
          <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{project.title}</h3>
        </div>

        <div className="flex overflow-x-auto border-b border-slate-800">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative shrink-0 px-5 py-3.5 text-xs font-medium transition-colors md:text-sm",
                activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="project-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-hero-gradient"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.id}-${activeTab}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "abstract" && (
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{project.overview}</p>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="space-y-6">
                  <PipelineArchitecture
                    variant={diagramVariant[project.id as keyof typeof diagramVariant]}
                    className="rounded-xl border border-slate-800 bg-background/50 p-6"
                  />
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.architecture.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-800 bg-card px-4 py-3 text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-lg border border-slate-700 bg-background/60 px-4 py-2.5 text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}

              {activeTab === "value" && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.businessImpact.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl border border-slate-800 bg-gradient-to-br from-snowflake/5 to-databricks/5 p-5"
                    >
                      <span className="font-mono text-[10px] text-accent">IMPACT {i + 1}</span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {project.githubUrl && (
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <MagneticButton
                variant="secondary"
                strength={0}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-slate-300 bg-white text-slate-700 transition-colors duration-300 hover:border-[#11567f] hover:bg-[#11567f]/5 hover:text-[#11567f] dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-[#29b5e8] dark:hover:bg-[#29b5e8]/10 dark:hover:text-[#29b5e8]"
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
