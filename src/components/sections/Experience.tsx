"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Database } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

const pipelineColors: Record<string, string> = {
  contour: "bg-cyan-500",
  venturedive: "bg-snowflake-deep",
  northbay: "bg-databricks",
  codeninja: "bg-emerald-500",
};

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("contour");

  return (
    <SectionWrapper id="experience" alternate>
      <SectionHeading
        index="02"
        title="Career Pipeline"
        subtitle="Data mesh timeline — full architectural histories across enterprise engagements."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-6 top-0 hidden h-full w-0.5 md:block">
          <div className="h-full w-full bg-gradient-to-b from-accent via-snowflake-deep/50 to-databricks/30" />
          <motion.div
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-glow"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const dotColor = pipelineColors[exp.id] || "bg-accent";

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08 }}
                className="relative md:pl-16"
              >
                <div className="absolute left-4 top-8 hidden md:block">
                  <div className={cn("relative h-4 w-4 rounded-full", dotColor)}>
                    {exp.current && (
                      <span className="absolute -inset-2 animate-ping rounded-full bg-accent/30" />
                    )}
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="absolute left-[1.125rem] top-12 hidden h-[calc(100%-2rem)] w-px md:block">
                    <motion.div
                      className="h-full w-full bg-gradient-to-b from-slate-700 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "top" }}
                    />
                  </div>
                )}

                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={cn(
                    "enterprise-card glow-border mb-4 w-full p-6 text-left transition-all duration-300",
                    isExpanded && "border-cyan-500/30 shadow-glow"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-background">
                        <Database className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                          {exp.current && (
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                              ACTIVE NODE
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-semibold text-accent">{exp.company}</p>
                        <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                        {exp.highlights && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {exp.highlights.map((h) => (
                              <span
                                key={h}
                                className="rounded-md border border-slate-700 bg-background/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03 }}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
