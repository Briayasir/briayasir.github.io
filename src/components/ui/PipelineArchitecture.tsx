"use client";

import { motion } from "framer-motion";

interface PipelineArchitectureProps {
  variant: "healthcare" | "modernization" | "fraud";
  className?: string;
}

const variants = {
  healthcare: {
    nodes: ["HL7/FHIR", "Kafka", "Spark Streaming", "Delta Lake", "MLflow"],
    colors: ["#29b5e8", "#11567f", "#ff3621", "#29b5e8", "#11567f"],
  },
  modernization: {
    nodes: ["Ingestion", "Palantir Foundry", "Spark", "Databricks", "Governed Products"],
    colors: ["#29b5e8", "#11567f", "#ff3621", "#ff3621", "#29b5e8"],
  },
  fraud: {
    nodes: ["Transactions", "Kafka", "Flink", "Snowflake", "Alerts"],
    colors: ["#29b5e8", "#11567f", "#ff3621", "#29b5e8", "#11567f"],
  },
};

export function PipelineArchitecture({ variant, className }: PipelineArchitectureProps) {
  const config = variants[variant];

  return (
    <div className={className}>
      <svg viewBox="0 0 600 120" fill="none" className="h-full w-full">
        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#29b5e8" />
            <stop offset="50%" stopColor="#11567f" />
            <stop offset="100%" stopColor="#ff3621" />
          </linearGradient>
        </defs>

        <motion.line
          x1="60"
          y1="60"
          x2="540"
          y2="60"
          stroke="url(#pipeGrad)"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {config.nodes.map((node, i) => {
          const x = 60 + i * 120;
          return (
            <motion.g
              key={node}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <rect
                x={x - 50}
                y="30"
                width="100"
                height="60"
                rx="10"
                fill={config.colors[i]}
                fillOpacity="0.15"
                stroke={config.colors[i]}
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <text
                x={x}
                y="66"
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="11"
                fontFamily="system-ui"
                fontWeight="500"
              >
                {node}
              </text>
              {i < config.nodes.length - 1 && (
                <polygon
                  points={`${x + 55},60 ${x + 65},55 ${x + 65},65`}
                  fill="#29b5e8"
                  opacity="0.5"
                />
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
