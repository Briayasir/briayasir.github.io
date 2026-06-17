"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  gradient = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        glow && "shadow-glow",
        hover && "hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-snowflake-glow via-transparent to-databricks-glow opacity-100 transition-opacity duration-500" />
      )}
      <div
        className={cn(
          "relative h-full rounded-2xl border border-slate-800 bg-card p-6 backdrop-blur-2xl",
          "shadow-card transition-all duration-300",
          hover && "group-hover:border-cyan-500/30",
          "glow-border"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-card-shine opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        {children}
      </div>
    </motion.div>
  );
}
