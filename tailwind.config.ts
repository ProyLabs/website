import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "50": "#eef0ff",
          "100": "#e1e4fe",
          "200": "#c8cdfd",
          "300": "#a7abfa",
          "400": "#8784f5",
          "500": "#7063ed",
          "600": "#644ae1",
          "700": "#563cc6",
          "800": "#4733a0",
          "900": "#3c307f",
          "950": "#241c4a",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        crusta: {
          "50": "#fff5ed",
          "100": "#ffe8d5",
          "200": "#feceaa",
          "300": "#feaa73",
          "400": "#fc7f3f",
          "500": "#fa5915",
          "600": "#eb3f0b",
          "700": "#c32c0b",
          "800": "#9b2511",
          "900": "#7d2111",
          "950": "#430d07",
        },
        azure: {
          "50": "#eff7ff",
          "100": "#dbedfe",
          "200": "#bee0ff",
          "300": "#92cdfe",
          "400": "#5eb1fc",
          "500": "#3990f8",
          "600": "#2f79ee",
          "700": "#1b5bda",
          "800": "#1d4ab0",
          "900": "#1d418b",
          "950": "#162a55",
        },
        lightning: {
          "50": "#fffaeb",
          "100": "#feefc7",
          "200": "#fdde8a",
          "300": "#fcc33f",
          "400": "#fbb124",
          "500": "#f58e0b",
          "600": "#d96906",
          "700": "#b44709",
          "800": "#92370e",
          "900": "#782e0f",
          "950": "#451603",
        },
        screamin: {
          "50": "#f1fdf0",
          "100": "#dbfddb",
          "200": "#baf8ba",
          "300": "#63ed65",
          "400": "#47e149",
          "500": "#1fc822",
          "600": "#14a517",
          "700": "#138216",
          "800": "#156618",
          "900": "#135416",
          "950": "#042f07",
        },
        radical: {
          "50": "#fff0f1",
          "100": "#ffe3e5",
          "200": "#ffcbd2",
          "300": "#ffa0ad",
          "400": "#ff6b83",
          "500": "#fc3f62",
          "600": "#ea1446",
          "700": "#c50b3b",
          "800": "#a50c38",
          "900": "#8d0e37",
          "950": "#4f0219",
        },
        dark: { 1: "#100C00", 2: "#030712" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
