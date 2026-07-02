import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1830",
          50: "#EEF1F7",
          100: "#DCE2EF",
          200: "#B3C0DC",
          300: "#8199C8",
          400: "#4E6BA6",
          500: "#2C4680",
          600: "#1B2E5C",
          700: "#132445",
          800: "#0E1B34",
          900: "#0B1830",
          950: "#070F20",
        },
        gold: {
          DEFAULT: "#F0B429",
          light: "#FCD980",
          deep: "#D4A017",
        },
        saffron: "#FF9933",
        leaf: "#0F9D58",
        cream: "#FAF7F0",
        ink: "#14161B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "seal-ring": "conic-gradient(from 90deg, #D4A017, #F0B429, #FCD980, #F0B429, #D4A017)",
        "navy-radial": "radial-gradient(circle at 20% 20%, #132445 0%, #0B1830 55%, #070F20 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(240,180,41,0.45)",
        card: "0 10px 40px -12px rgba(11,24,48,0.25)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-140px) translateX(20px)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        particle: "particle 6s ease-in infinite",
      },
    },
  },
  plugins: [],
};
export default config;
