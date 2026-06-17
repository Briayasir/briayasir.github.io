"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: boolean | string;
  strength?: number;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  target,
  rel,
  download,
  strength = 0.3,
  variant = "secondary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (strength === 0) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const variants = {
    primary:
      "border border-slate-800 bg-slate-900 text-white shadow-[0_4px_14px_rgba(15,23,42,0.2)] hover:border-[#11567f] hover:bg-[#11567f] dark:border-slate-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:border-[#29b5e8] dark:hover:bg-[#29b5e8] dark:hover:text-white relative overflow-hidden group/btn",
    secondary:
      "border border-slate-700 bg-card backdrop-blur-xl hover:border-cyan-500/30 hover:bg-surface",
    ghost:
      "border border-slate-800 bg-transparent hover:bg-card hover:border-cyan-500/20",
  };

  const baseClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
    variants[variant],
    className
  );

  const shine = variant === "primary" && (
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={strength === 0 ? undefined : { scale: 0.96 }}
        className={baseClass}
      >
        {shine}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={strength === 0 ? undefined : { scale: 0.96 }}
      className={baseClass}
    >
      {shine}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
