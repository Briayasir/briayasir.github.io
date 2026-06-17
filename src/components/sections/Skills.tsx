"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

const categoryAccent: Record<
  string,
  { tab: string; card: string; count: string; tag: string; bar: string }
> = {
  programming: {
    tab: "border-cyan-500/50 bg-cyan-50 text-cyan-900 shadow-sm dark:bg-cyan-500/15 dark:text-cyan-100",
    card: "border-cyan-500/45 bg-gradient-to-br from-cyan-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(41,181,232,0.12)]",
    count: "text-cyan-600 dark:text-cyan-400",
    tag: "border-cyan-500/30 bg-cyan-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-cyan-500",
  },
  "data-engineering": {
    tab: "border-sky-500/50 bg-sky-50 text-sky-900 shadow-sm dark:bg-sky-500/15 dark:text-sky-100",
    card: "border-sky-500/45 bg-gradient-to-br from-sky-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(14,165,233,0.12)]",
    count: "text-sky-600 dark:text-sky-400",
    tag: "border-sky-500/30 bg-sky-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-sky-500",
  },
  "etl-elt": {
    tab: "border-orange-500/50 bg-orange-50 text-orange-900 shadow-sm dark:bg-orange-500/15 dark:text-orange-100",
    card: "border-orange-500/45 bg-gradient-to-br from-orange-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(249,115,22,0.12)]",
    count: "text-orange-600 dark:text-orange-400",
    tag: "border-orange-500/30 bg-orange-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-orange-500",
  },
  "data-architecture": {
    tab: "border-violet-500/50 bg-violet-50 text-violet-900 shadow-sm dark:bg-violet-500/15 dark:text-violet-100",
    card: "border-violet-500/45 bg-gradient-to-br from-violet-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(139,92,246,0.12)]",
    count: "text-violet-600 dark:text-violet-400",
    tag: "border-violet-500/30 bg-violet-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-violet-500",
  },
  "data-warehousing": {
    tab: "border-blue-500/50 bg-blue-50 text-blue-900 shadow-sm dark:bg-blue-500/15 dark:text-blue-100",
    card: "border-blue-500/45 bg-gradient-to-br from-blue-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(59,130,246,0.12)]",
    count: "text-blue-600 dark:text-blue-400",
    tag: "border-blue-500/30 bg-blue-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-blue-500",
  },
  streaming: {
    tab: "border-teal-500/50 bg-teal-50 text-teal-900 shadow-sm dark:bg-teal-500/15 dark:text-teal-100",
    card: "border-teal-500/45 bg-gradient-to-br from-teal-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(20,184,166,0.12)]",
    count: "text-teal-600 dark:text-teal-400",
    tag: "border-teal-500/30 bg-teal-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-teal-500",
  },
  databases: {
    tab: "border-indigo-500/50 bg-indigo-50 text-indigo-900 shadow-sm dark:bg-indigo-500/15 dark:text-indigo-100",
    card: "border-indigo-500/45 bg-gradient-to-br from-indigo-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(99,102,241,0.12)]",
    count: "text-indigo-600 dark:text-indigo-400",
    tag: "border-indigo-500/30 bg-indigo-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-indigo-500",
  },
  cloud: {
    tab: "border-sky-600/50 bg-sky-50 text-sky-900 shadow-sm dark:bg-sky-600/15 dark:text-sky-100",
    card: "border-sky-600/45 bg-gradient-to-br from-sky-600/[0.08] to-transparent shadow-[0_8px_32px_rgba(2,132,199,0.12)]",
    count: "text-sky-700 dark:text-sky-300",
    tag: "border-sky-600/30 bg-sky-600/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-sky-600",
  },
  governance: {
    tab: "border-rose-500/50 bg-rose-50 text-rose-900 shadow-sm dark:bg-rose-500/15 dark:text-rose-100",
    card: "border-rose-500/45 bg-gradient-to-br from-rose-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(244,63,94,0.12)]",
    count: "text-rose-600 dark:text-rose-400",
    tag: "border-rose-500/30 bg-rose-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-rose-500",
  },
  devops: {
    tab: "border-amber-500/50 bg-amber-50 text-amber-900 shadow-sm dark:bg-amber-500/15 dark:text-amber-100",
    card: "border-amber-500/45 bg-gradient-to-br from-amber-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(245,158,11,0.12)]",
    count: "text-amber-600 dark:text-amber-400",
    tag: "border-amber-500/30 bg-amber-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-amber-500",
  },
  "analytics-ml": {
    tab: "border-fuchsia-500/50 bg-fuchsia-50 text-fuchsia-900 shadow-sm dark:bg-fuchsia-500/15 dark:text-fuchsia-100",
    card: "border-fuchsia-500/45 bg-gradient-to-br from-fuchsia-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(217,70,239,0.12)]",
    count: "text-fuchsia-600 dark:text-fuchsia-400",
    tag: "border-fuchsia-500/30 bg-fuchsia-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-fuchsia-500",
  },
  healthcare: {
    tab: "border-emerald-500/50 bg-emerald-50 text-emerald-900 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-100",
    card: "border-emerald-500/45 bg-gradient-to-br from-emerald-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(16,185,129,0.12)]",
    count: "text-emerald-600 dark:text-emerald-400",
    tag: "border-emerald-500/30 bg-emerald-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-emerald-500",
  },
  leadership: {
    tab: "border-slate-500/50 bg-slate-100 text-slate-900 shadow-sm dark:bg-slate-500/15 dark:text-slate-100",
    card: "border-slate-500/45 bg-gradient-to-br from-slate-500/[0.08] to-transparent shadow-[0_8px_32px_rgba(100,116,139,0.12)]",
    count: "text-slate-600 dark:text-slate-400",
    tag: "border-slate-500/30 bg-slate-500/[0.06] text-slate-700 dark:text-slate-200",
    bar: "bg-slate-500",
  },
};

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <SectionWrapper id="skills" alternate>
      <SectionHeading
        index="03"
        title="Technical Capabilities"
        subtitle="Layered expertise across data engineering, streaming, governance, and enterprise architecture."
      />

      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-card px-6 py-3">
          <span className="font-display text-2xl font-bold text-gradient">{totalSkills}+</span>
          <span className="text-sm text-muted-foreground">Capabilities Mapped</span>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveFilter(null)}
          className={cn(
            "relative rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300",
            activeFilter === null
              ? "border-transparent bg-hero-gradient text-white shadow-glow"
              : "border-slate-300 bg-white/70 text-slate-500 hover:border-slate-400 dark:border-slate-700 dark:bg-card/60 dark:text-muted-foreground dark:hover:border-slate-500"
          )}
        >
          All Layers
        </button>
        {skillCategories.map((cat) => {
          const accent = categoryAccent[cat.id];
          const isTabActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(activeFilter === cat.id ? null : cat.id)}
              className={cn(
                "relative overflow-hidden rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300",
                isTabActive
                  ? accent.tab
                  : "border-slate-300 bg-white/70 text-slate-500 hover:border-slate-400 dark:border-slate-700 dark:bg-card/60 dark:text-muted-foreground dark:hover:border-slate-500"
              )}
            >
              {isTabActive && (
                <span className={cn("absolute inset-x-2 top-0 h-0.5 rounded-full", accent.bar)} />
              )}
              {cat.title}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, ci) => {
          const isActive = activeFilter === null || activeFilter === category.id;
          const isDimmed = activeFilter !== null && activeFilter !== category.id;
          const isCardLinked = activeFilter === category.id;
          const accent = categoryAccent[category.id];

          return (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.03 }}
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-white/80 p-5 shadow-sm transition-all duration-300 dark:bg-card/80",
                isDimmed && "scale-[0.98] opacity-25 grayscale",
                isCardLinked
                  ? accent.card
                  : "border-slate-200 dark:border-slate-800"
              )}
            >
              {isCardLinked && (
                <span className={cn("absolute inset-x-0 top-0 h-1", accent.bar)} />
              )}
              <div className="mb-4 flex items-center justify-between">
                <h3
                  className={cn(
                    "font-display text-sm font-bold",
                    isCardLinked ? accent.count : "text-foreground"
                  )}
                >
                  {category.title}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold",
                    isCardLinked
                      ? cn(accent.count, "bg-white/60 dark:bg-white/5")
                      : "text-accent"
                  )}
                >
                  {category.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-lg border px-2.5 py-1 text-[11px] transition-all duration-300",
                      isCardLinked
                        ? accent.tag
                        : isActive
                          ? "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-background/50 dark:text-muted-foreground"
                          : "border-slate-200 text-muted-foreground/40 dark:border-slate-800"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
