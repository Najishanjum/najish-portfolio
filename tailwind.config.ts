import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#246BFD",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0B0D10",
          foreground: "#F7F7F7",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#12151B",
          foreground: "#9A9CA3",
        },
        accent: {
          DEFAULT: "#246BFD",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#0B0D10",
          foreground: "#F7F7F7",
        },
        card: {
          DEFAULT: "#0B0D10",
          foreground: "#F7F7F7",
        },
        // Editorial Palette Tokens
        editorial: {
          bg: "#050505",
          surface: "#0B0D10",
          panel: "#12151B",
          border: "#252830",
          text: "#F7F7F7",
          muted: "#9A9CA3",
          blue: "#246BFD",
          blueBright: "#4D8DFF",
          light: "#FFFFFF",
          lightText: "#08090B",
          lightSurface: "#F4F5F7",
          lightBorder: "#E2E4E9",
        },
        // backward aliases mapped to refined dark & electric blue system
        nsha: {
          bg: "#050505",
          surface: "#0B0D10",
          black: "#F7F7F7",
          yellow: "#246BFD",
          pink: "#4D8DFF",
          purple: "#246BFD",
          green: "#4D8DFF",
          lime: "#246BFD",
          muted: "#9A9CA3",
        },
        neon: {
          cyan: "#4D8DFF",
          blue: "#246BFD",
          purple: "#246BFD",
          pink: "#4D8DFF",
          green: "#4D8DFF",
        },
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        "nsha-sm": "4px 4px 0 #090909",
        "nsha-md": "7px 7px 0 #090909",
        "nsha-lg": "10px 10px 0 #090909",
        "nsha-yellow": "7px 7px 0 #FFD21C",
        "nsha-pink": "7px 7px 0 #FF3D83",
        "nsha-purple": "7px 7px 0 #7557F7",
        "nsha-green": "7px 7px 0 #35D04F",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
