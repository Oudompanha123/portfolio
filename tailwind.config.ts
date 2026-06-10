import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — driven by CSS variables in globals.css
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "var(--font-khmer)",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "var(--font-khmer)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "var(--font-khmer)",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        content: "64rem", // 1024px reading/layout container
      },
      letterSpacing: {
        label: "0.18em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
