"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  index?: string;
  titleClassName?: string;
}

export function SectionHeading({ title, subtitle, className, index, titleClassName }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative mb-10 md:mb-12", className)}
    >
      {index && (
        <span className="mb-4 block font-display text-6xl font-bold text-white/[0.03] md:text-8xl">
          {index}
        </span>
      )}

      <div className="flex flex-col items-center text-center">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-block h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent"
        />

        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className={cn(titleClassName ?? "text-gradient")}>{title}</span>
        </h2>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
          <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
      </div>
    </motion.div>
  );
}
