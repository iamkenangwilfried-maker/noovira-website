import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:   "#FFFFFF",
        "bg-alt":     "#F7F4EF",
        dark:         "#1C1C1C",
        "dark-alt":   "#222222",
        beige:        "#C9BAAC",
        "beige-light":"#EDE8E2",
        body:         "#3D3D3D",
        muted:        "#6B6B6B",
        "text-light": "#F7F4EF",
        border:       "#E5E0D9",
        "border-dark":"#2E2E2E",
        // Keep legacy names for any remaining components
        navy:         "#1C1C1C",
        secondary:    "#3D3D3D",
        accent:       "#C9BAAC",
        "accent-hover":"#B8A898",
        "card-border":"#E5E0D9",
        success:      "#22C55E",
        rose:         "#FFD6D8",
        "rose-light": "#FFEAEB",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body:    ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans:    ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)",  { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em"  }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "fade-up":   "fadeUp 0.8s ease forwards",
        "fade-in":   "fadeIn 0.6s ease forwards",
        "slide-in":  "slideIn 0.5s ease forwards",
        "marquee":   "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)"      },
        },
        marquee: {
          "0%":   { transform: "translateX(0)"     },
          "100%": { transform: "translateX(-50%)"  },
        },
      },
      transitionTimingFunction: {
        "sher": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
