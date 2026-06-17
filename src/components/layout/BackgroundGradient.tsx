"use client";

import { motion } from "framer-motion";

export function BackgroundGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[20%] -top-[20%] h-[70vh] w-[70vh] rounded-full bg-databricks/5 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[15%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-snowflake/5 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[30%] h-[50vh] w-[50vh] rounded-full bg-snowflake-deep/5 blur-[80px]"
      />

      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
