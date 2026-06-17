"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Education() {
  return (
    <SectionWrapper id="education" alternate>
      <SectionHeading
        index="06"
        title="Education"
        titleClassName="text-slate-900 dark:text-white"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-lg"
      >
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-10 text-center shadow-sm transition-all hover:border-[#11567f]/30 hover:shadow-md dark:border-slate-800 dark:bg-card/90 dark:hover:border-[#29b5e8]/30">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
          >
            <GraduationCap className="h-7 w-7 text-[#11567f] dark:text-[#29b5e8]" />
          </motion.div>

          <p className="font-display text-xl font-semibold leading-snug text-slate-900 md:text-2xl dark:text-white">
            {education.degree}
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-slate-200 dark:bg-slate-700" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
              Academic
            </span>
            <div className="h-px w-12 bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
