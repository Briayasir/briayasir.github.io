import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#29b5e8",
          light: "#5cc8ef",
          dark: "#11567f",
          amber: "#ff3621",
          purple: "#818cf8",
        },
        databricks: {
          DEFAULT: "#ff3621",
          glow: "rgba(255, 54, 33, 0.05)",
        },
        snowflake: {
          DEFAULT: "#29b5e8",
          deep: "#11567f",
          glow: "rgba(41, 181, 232, 0.05)",
        },
        card: "var(--card)",
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
          glass: "var(--surface-glass)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        fancy: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "grid-drift": "grid-drift 20s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #29b5e8 0%, #11567f 50%, #ff3621 100%)",
        "enterprise-gradient": "linear-gradient(135deg, #11567f 0%, #29b5e8 50%, #ff3621 100%)",
        "card-shine": "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(41, 181, 232, 0.12)",
        "glow-lg": "0 0 80px rgba(41, 181, 232, 0.18)",
        "glow-amber": "0 0 60px rgba(255, 54, 33, 0.1)",
        card: "0 8px 32px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 20px 60px rgba(41, 181, 232, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
