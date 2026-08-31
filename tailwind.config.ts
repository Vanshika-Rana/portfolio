import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          50: "#FBF7EE",
          100: "#F5EAD3",
          200: "#EAD4A8",
          300: "#DCBB7C",
          400: "#CDA05A",
          500: "#BA8940",
          600: "#9C7133",
          700: "#7D5A29",
          800: "#5F451F",
          900: "#4A3618",
        },
      },
    },
  },
  plugins: [],
};
export default config;
