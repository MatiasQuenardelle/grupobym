import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF8FF",
          100: "#D1EEFC",
          200: "#A7D8F0",
          300: "#7CC1E4",
          400: "#3AADE0",
          500: "#2B9AD0",
          600: "#2080B0",
          700: "#186590",
          800: "#104A70",
          900: "#0A3050",
        },
        secondary: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        accent: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE599",
          300: "#FFD966",
          400: "#D4A017",
          500: "#B8860B",
          600: "#9A7209",
          700: "#7C5C07",
          800: "#5E4505",
          900: "#402F03",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
