"use client";

import { motion } from "framer-motion";
import { Building2, Cloud, Heart, Shield, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper, FadeIn } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

const domains = [
  {
    name: "Healthcare",
    icon: Heart,
    regs: ["HIPAA", "SOC 2", "GDPR", "HL7/FHIR"],
    color: "from-cyan-500/20 to-snowflake-deep/10",
    border: "hover:border-cyan-500/30",
  },
  {
    name: "Finance",
    icon: TrendingUp,
    regs: ["SOC 2", "Encryption", "RBAC/ABAC", "Audit Logging"],
    color: "from-databricks/20 to-amber-500/10",
    border: "hover:border-databricks/30",
  },
];

const clouds = [
  { name: "AWS", angle: 0 },
  { name: "Azure", angle: 120 },
  { name: "GCP", angle: 240 },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        index="01"
        title="Executive Summary"
        subtitle="Enterprise data architecture footprint across regulated industries and multi-cloud platforms."
      />

      <div className="grid auto-rows-[minmax(140px,auto)] gap-4 md:grid-cols-6 md:gap-5">
        <FadeIn className="md:col-span-2 md:row-span-2">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="enterprise-card glow-border group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-snowflake/5 blur-3xl" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Architecture Footprint
            </p>
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-display text-7xl font-bold tracking-tight text-gradient md:text-8xl"
              >
                10+
              </motion.span>
              <p className="mt-2 font-display text-xl font-semibold text-foreground">Years</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Designing lakehouses, streaming pipelines, and governed data products
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { v: "40%", l: "Migration Efficiency" },
                { v: "3", l: "Cloud Platforms" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-slate-800 bg-background/50 p-3">
                  <p className="font-display text-2xl font-bold text-accent">{s.v}</p>
                  <p className="text-[10px] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1} className="md:col-span-4">
          <div className="enterprise-card h-full p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-accent" />
              <h3 className="font-display text-lg font-bold">Core Domains</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {domains.map((domain) => (
                <motion.div
                  key={domain.name}
                  whileHover={{ y: -3 }}
                  className={cn(
                    "rounded-xl border border-slate-800 bg-gradient-to-br p-5 transition-all duration-300",
                    domain.color,
                    domain.border
                  )}
                >
                  <domain.icon className="mb-3 h-5 w-5 text-accent" />
                  <h4 className="font-semibold">{domain.name}</h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {domain.regs.map((reg) => (
                      <span
                        key={reg}
                        className="rounded-md border border-slate-700 bg-background/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="md:col-span-4">
          <div className="enterprise-card relative h-full overflow-hidden p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-accent" />
              <h3 className="font-display text-lg font-bold">Multi-Cloud Synthesis</h3>
            </div>
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-slate-800" />
              <div className="absolute inset-4 rounded-full border border-dashed border-slate-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-hero-gradient px-4 py-2 text-xs font-bold text-white shadow-glow">
                  Databricks · Snowflake
                </div>
              </div>
              {clouds.map((cloud) => {
                const rad = (cloud.angle * Math.PI) / 180;
                const x = 50 + 42 * Math.cos(rad);
                const y = 50 + 42 * Math.sin(rad);
                return (
                  <motion.div
                    key={cloud.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + cloud.angle / 360 }}
                    className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-500/20 bg-card text-xs font-bold text-accent"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {cloud.name}
                  </motion.div>
                );
              })}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                {clouds.map((cloud) => {
                  const rad = (cloud.angle * Math.PI) / 180;
                  const x = 50 + 35 * Math.cos(rad);
                  const y = 50 + 35 * Math.sin(rad);
                  return (
                    <line
                      key={cloud.name}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="#29b5e8"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                    />
                  );
                })}
              </svg>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              AWS · Azure · GCP interconnected via Spark, Kafka, and Palantir Foundry
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="md:col-span-2">
          <div className="enterprise-card flex h-full flex-col justify-between p-6">
            <Shield className="h-5 w-5 text-accent" />
            <div>
              <h3 className="font-display text-lg font-bold">Platform Stack</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Databricks · Snowflake · Palantir Foundry · Apache Spark · Kafka · Delta Lake
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["DataOps", "Lakehouse", "Streaming", "Governance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 px-2.5 py-1 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
