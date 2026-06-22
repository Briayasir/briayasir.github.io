"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { personalInfo, animatedRoles, heroHeadline } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % animatedRoles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pt-24 md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-pipeline-grid opacity-30" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6"
        >
          <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Enterprise Data Solutions Architect
          </p>
          <h2 className="whitespace-nowrap font-fancy text-5xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#11567f] via-[#1a6fa0] to-[#29b5e8] bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#11567f]/40 to-transparent dark:via-[#29b5e8]/40" />
        </motion.div>

        {personalInfo.available && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-5 py-2 text-sm backdrop-blur-xl"
          >
            <span className="text-emerald-400">🟢</span>
            <span className="text-emerald-400/90">
              Architecting Enterprise Solutions | Available for Strategic Advisory
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]"
        >
          {heroHeadline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl"
          aria-live="polite"
        >
          <div className="relative flex h-12 items-center justify-center overflow-hidden md:h-14">
            <AnimatePresence initial={false}>
              <motion.p
                key={animatedRoles[roleIndex]}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  opacity: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
                  y: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="absolute inset-x-0 flex flex-wrap items-center justify-center gap-x-[0.32em] text-base md:text-xl"
              >
                {animatedRoles[roleIndex].split(" ").map((word, wi) => (
                  <motion.span
                    key={`${animatedRoles[roleIndex]}-${wi}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25 + wi * 0.14,
                      duration: 0.85,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="inline-block bg-gradient-to-r from-[#11567f] via-[#1a8fc4] to-[#29b5e8] bg-clip-text font-semibold tracking-tight text-transparent"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {animatedRoles.map((role, i) => (
              <motion.span
                key={role}
                animate={{
                  width: roleIndex === i ? 22 : 6,
                  opacity: roleIndex === i ? 1 : 0.3,
                }}
                transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-1 rounded-full bg-gradient-to-r from-[#11567f] to-[#29b5e8]"
                aria-hidden
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            variant="primary"
            strength={0}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-colors duration-300"
          >
            Review Architecture Portfolio
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            strength={0}
            href={personalInfo.resumePath}
            download={personalInfo.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="border-slate-300 bg-white text-slate-700 transition-colors duration-300 hover:border-[#11567f] hover:bg-[#11567f]/5 hover:text-[#11567f] dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-[#29b5e8] dark:hover:bg-[#29b5e8]/10 dark:hover:text-[#29b5e8]"
          >
            <Download className="h-4 w-4" />
            Download Dossier (PDF)
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            strength={0}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-slate-300 bg-white/90 text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
          >
            <Linkedin className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            strength={0}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-slate-300 bg-white/90 text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
          >
            <Github className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
