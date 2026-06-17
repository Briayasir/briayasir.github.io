"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
      if (window.scrollY < 100) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 py-4"
    >
      <nav
        className={cn(
          "relative mx-auto flex h-14 max-w-6xl items-center px-4 md:px-6",
          isScrolled
            ? "rounded-2xl border border-slate-800 bg-background/80 shadow-glow backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#11567f] to-[#29b5e8] font-display text-[10px] font-bold tracking-wider text-white shadow-[0_4px_16px_rgba(17,86,127,0.3)] transition-shadow duration-300 group-hover:shadow-[0_4px_20px_rgba(41,181,232,0.4)] dark:shadow-[0_4px_16px_rgba(41,181,232,0.2)]">
            BY
          </span>
          <span className="hidden font-fancy text-xl font-semibold tracking-[-0.02em] sm:inline">
            <span className="bg-gradient-to-r from-[#11567f] via-[#1a6fa0] to-[#29b5e8] bg-clip-text text-transparent">
              {personalInfo.name.split(" ")[0]}
            </span>
            <span className="text-[#29b5e8]">.</span>
          </span>
        </button>

        <div className="nav-pill absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-slate-700/60 bg-white/60 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_24px_rgba(0,0,0,0.25)] lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "rounded-full px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors duration-300 xl:px-4",
                  isActive
                    ? "border border-slate-200/80 bg-white text-foreground shadow-sm dark:border-slate-600/50 dark:bg-white/10 dark:text-white"
                    : "border border-transparent text-slate-500 hover:text-slate-800 dark:text-muted-foreground dark:hover:text-foreground"
                )}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-slate-300 bg-white/80 px-4 py-2.5 text-xs font-semibold text-slate-600 backdrop-blur-xl transition-colors duration-300 hover:border-[#11567f] hover:text-[#11567f] dark:border-slate-600 dark:bg-transparent dark:text-muted-foreground dark:hover:border-[#29b5e8] dark:hover:text-[#29b5e8] md:flex"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#11567f] dark:border-slate-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-[#29b5e8] dark:hover:text-white sm:flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-left text-sm font-medium",
                    activeSection === link.href.slice(1)
                      ? "bg-white/[0.06] text-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumePath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-semibold text-muted-foreground"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 py-3 text-sm font-semibold text-white dark:border-slate-600 dark:bg-slate-100 dark:text-slate-900"
              >
                Hire Me <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
