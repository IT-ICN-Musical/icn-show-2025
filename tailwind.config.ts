import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
        "safira-march": ["var(--font-safira-march)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
          "50": "#fdfcfd",
          "100": "#f8f3f6",
          "200": "#efe4ec",
          "300": "#e2d0dc",
          "400": "#d2b5c9",
          "500": "#be94b1",
          "600": "#a66e95",
          "700": "#7e4e70",
          "800": "#4a2d41",
          "900": "#2a1a25",
          "950": "#20131c",
        },
        secondary: {
          "50": "#fcfcfd",
          "100": "#f3f3f7",
          "200": "#e3e5ed",
          "300": "#ced1e0",
          "400": "#b2b7ce",
          "500": "#9197b9",
          "600": "#69729f",
          "700": "#4a5173",
          "800": "#2c3044",
          "900": "#1a1c28",
          "950": "#14161f",
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
        tertiary: {
          "50": "#fbfcfc",
          "100": "#f1f5f5",
          "200": "#dee8e8",
          "300": "#c5d7d6",
          "400": "#a4c0bf",
          "500": "#7da4a2",
          "600": "#567c7a",
          "700": "#304544",
          "800": "#212f2f",
          "900": "#182222",
          "950": "#151e1e",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
