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
          DEFAULT: "#7B112D",
          50: "#FDF3F6",
          100: "#F9E4EA",
          200: "#F3C8D5",
          300: "#E89BB1",
          400: "#D96A8D",
          500: "#C73B69",
          600: "#A81F4D",
          700: "#7B112D",
          800: "#5E0D22",
          900: "#430918",
          950: "#2A0410",
        },

        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5D76E",
          deep: "#B8860B",
        },

        saffron: "#C89B2C",

        leaf: "#0B5D1E",

        cream: "#FFF7D6",

        white: "#FFFFFF",

        ink: "#1B1B1B",
      },

      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },

      backgroundImage: {
        "seal-ring":
          "conic-gradient(from 90deg,#B8860B,#D4AF37,#F5D76E,#D4AF37,#B8860B)",

        "navy-radial":
          "radial-gradient(circle at 18% 20%, #9B1B3D 0%, #7B112D 52%, #430918 100%)",
      },

      boxShadow: {
        gold: "0 10px 35px -10px rgba(212,175,55,0.45)",
        card: "0 10px 35px -10px rgba(123,17,45,0.25)",
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
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        particle: {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-140px) translateX(20px)",
            opacity: "0",
          },
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
