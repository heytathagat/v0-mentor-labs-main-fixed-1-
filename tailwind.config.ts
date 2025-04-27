import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
      fontFamily: {
        sans: ["var(--font-sans)"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "0",
        md: "0",
        sm: "0",
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
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        reveal: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 3.5s steps(40, end)",
        blink: "blink 1s step-end infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        marquee: "marquee 25s linear infinite",
        reveal: "reveal 1.5s ease-out forwards",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "var(--font-sans)",
            maxWidth: "65ch",
            color: "#000000",
            '[class~="lead"]': {
              color: "#000000",
              fontFamily: "var(--font-sans)",
            },
            strong: {
              color: "#000000",
              fontWeight: "700",
              fontFamily: "var(--font-sans)",
            },
            a: {
              color: "#000000",
              textDecoration: "underline",
              fontWeight: "500",
              fontFamily: "var(--font-sans)",
            },
            h1: {
              color: "#000000",
              fontWeight: "800",
              fontSize: "var(--font-size-5xl)",
              marginTop: "0",
              marginBottom: "1.25em",
              lineHeight: "1.1111111",
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.03em",
            },
            h2: {
              color: "#000000",
              fontWeight: "700",
              fontSize: "var(--font-size-4xl)",
              marginTop: "2em",
              marginBottom: "1em",
              lineHeight: "1.3333333",
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
            },
            h3: {
              color: "#000000",
              fontWeight: "600",
              fontSize: "var(--font-size-3xl)",
              marginTop: "1.6em",
              marginBottom: "0.6em",
              lineHeight: "1.6",
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
            },
            h4: {
              color: "#000000",
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              lineHeight: "1.5",
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.01em",
            },
            p: {
              fontFamily: "var(--font-sans)",
              color: "#000000",
            },
            li: {
              fontFamily: "var(--font-sans)",
              color: "#000000",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
