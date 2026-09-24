import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snap: {
          50:  "#F2F7FE",
          100: "#E8F1FC",
          200: "#D0E2F8",
          300: "#A8C9F0",
          400: "#7AABE6",
          500: "#4A90E2", // primary
          600: "#3A78C4",
          700: "#2A5FA0",
          800: "#1E5FA8",
          900: "#153F72",
        },
        ink: {
          DEFAULT: "#2B2F3A",
          soft: "#6B7280",
          mute: "#9AA3B2",
        },
        mist: "#E5E9F0",
        cloud: "#F7FAFF",
        bubble: "#FFB6C9",
        peach: "#FFE3C9",
        mint: "#7ED9A7",
        coral: "#FF7A7A",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "xl2": "20px",
        "xl3": "24px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(74, 144, 226, 0.12)",
        softer: "0 4px 16px rgba(30, 95, 168, 0.08)",
        glow: "0 0 0 4px rgba(232, 241, 252, 1)",
        "3d": "0 12px 32px rgba(74, 144, 226, 0.18), 0 4px 8px rgba(30, 95, 168, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%":      { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        sparkle: "sparkle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;