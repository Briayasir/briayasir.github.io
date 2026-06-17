"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

const badgeStyles: Record<string, { gradient: string; accent: string }> = {
  GCP: { gradient: "from-blue-500 to-cyan-400", accent: "border-blue-500/20" },
  DB: { gradient: "from-databricks to-orange-500", accent: "border-databricks/20" },
  AWS: { gradient: "from-orange-500 to-amber-400", accent: "border-orange-500/20" },
  CDMP: { gradient: "from-snowflake-deep to-accent", accent: "border-cyan-500/20" },
};

export function Credentials() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        index="05"
        title="Credentials"
        subtitle="Industry-validated expertise in cloud data engineering, architecture, and data management."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => {
          const style = badgeStyles[cert.badge];
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={cn(
                "enterprise-card glow-border relative overflow-hidden p-6 text-center",
                style.accent
              )}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${style.gradient} shadow-glow`}
              >
                <span className="font-display text-lg font-bold text-white">{cert.badge}</span>
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                  <BadgeCheck className="h-3 w-3 text-white" />
                </div>
              </motion.div>
              <Award className="mx-auto mb-2 h-4 w-4 text-accent/50" />
              <h3 className="text-sm font-bold leading-snug">{cert.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
