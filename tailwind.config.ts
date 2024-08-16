import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
    },

    extend: {
      fontFamily: {
        space: ["var(--font-space-grotesk)"],
      },
      colors: {
        background: "rgba(var(--background))",
        tag: "rgba(var(--tag))",
        border: "rgba(var(--border))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        primaryText: "rgba(var(--primaryText))",
        secondaryText: "rgba(var(--secondaryText))",
      },
    },
  },

  plugins: [],
};
export default config;
