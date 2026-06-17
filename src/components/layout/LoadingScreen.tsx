"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-mesh" />
          <div className="absolute inset-0 bg-grid opacity-30" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-8 h-16 w-16 rounded-2xl border border-accent/20 p-[2px]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-hero-gradient font-display text-lg font-bold text-white">
                BY
              </div>
            </motion.div>

            <div className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              <span className="text-gradient">{personalInfo.name}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Data Solutions Architect
            </p>

            <div className="relative mx-auto mt-10 h-[2px] w-72 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-hero-gradient"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
              <div className="absolute inset-0 shimmer" />
            </div>

            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
