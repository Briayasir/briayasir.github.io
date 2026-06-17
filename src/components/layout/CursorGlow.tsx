"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[1] hidden lg:block"
        animate={{
          x: position.x - 300,
          y: position.y - 300,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-radial from-snowflake/10 via-databricks/5 to-transparent blur-3xl" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[2] hidden h-4 w-4 rounded-full border border-cyan-500/30 lg:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
